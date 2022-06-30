(function(){        //闭包
    function load_script(xyUrl, callback){
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = xyUrl;
        //借鉴了jQuery的script跨域方法
        script.onload = script.onreadystatechange = function(){
            if((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")){
                callback && callback();
                // Handle memory leak in IE
                script.onload = script.onreadystatechange = null;
                if ( head && script.parentNode ) {
                    head.removeChild( script );
                }
            }
        };
        // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
        head.insertBefore( script, head.firstChild );
    }
    function translate(point,type,callback){
        var callbackName = 'cbk_' + Math.round(Math.random() * 10000);    //随机函数名
        var xyUrl = "http://api.map.baidu.com/ag/coord/convert?from="+ type + "&to=4&x=" + point.lng + "&y=" + point.lat + "&callback=BMap.Convertor." + callbackName;
        //http://api.map.baidu.com/ag/coord/convert?from=2&to=4&x=116.254615&y=29.814476
        //动态创建script标签
        load_script(xyUrl);
        BMap.Convertor[callbackName] = function(xyResult){
            delete BMap.Convertor[callbackName];    //调用完需要删除改函数
            var point = new BMap.Point(base64decode(xyResult.x), base64decode(xyResult.y));
            callback && callback(point);
        }
    }

    window.mapTranslate = translate;
})();

// 设置位置
function setLocation(city,province,latitude,longitude){
    if(city != 'null' && city != undefined && city != ''){
        myposition.latitude = latitude;
        myposition.longitude = longitude;
        myposition.city = city;
        myposition.province = province;

        setTimeout(function(){
            storeUtil.set(config.mypositionkey,myposition);// 存储到本地缓存
        },10);

            setCurrCityInfo(city);

        //alert(city);
    }else{
        setLocation4ios(latitude,longitude);
    }

}


var ioslocationflag = 0;// 是否取过值
// 设置位置
function setLocation4ios(latitude,longitude){
    /*
    if(ioslocationflag == 0){
        ioslocationflag = 1;
        return;
    }*/

    myposition = {};
    myposition.latitude = latitude;
    myposition.longitude = longitude;

    //alert(latitude + ' ' + longitude);

    setTimeout(function(){
        //alert(JSON.stringify(myposition));
        storeUtil.set(config.mypositionkey,myposition);// 存储到本地缓存
        //alert(1);
    },10);


    var ggPoint = new BMap.Point(longitude,latitude);
    //alert(12);
    mapTranslate(ggPoint, 2, function(data){

        //myposition.latitude = data.lat;
        //myposition.longitude = data.lng;

        //alert(myposition.latitude + ' -- ' + myposition.longitude);

        try{
            gc = new BMap.Geocoder();// 解码地址
        }catch (e){

        }

        if(gc == null){
            return;
        }

        gc.getLocation(data, function(rs){
            var addComp = rs.addressComponents;
            myposition.city = addComp.city;// 城市

            setCurrCityInfo(myposition.city);

            //alert(myposition.city);

            try{
                myposition.province = addComp.province;// 省份
                myposition.street = addComp.street;// 街道
                myposition.streetNumber = addComp.streetNumber;// 号码
            }catch(e){}
            //alert(myposition.city);

            //setPosition(addComp,e.point);
            //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
        });
    });
}

var gc = null;

try{
    gc = new BMap.Geocoder();// 解码地址
}catch (e){

}