// 公用工具类
(function(){
    /**
     * 触摸点击事件处理工具类，根据设备支持鼠标还是触摸事件确定所触发的具体事件
     */
    var hasTouch = "ontouchstart" in window,
        has3d = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix();
    window.eventUtil = {
        hasTouch: hasTouch,// 浏览器是否支持触摸事件
        has3d: has3d,// 是否支持3D转换
        vendor: (/webkit/i).test(navigator.appVersion) ? "-webkit-" : (/firefox/i).test(navigator.userAgent) ? "-moz-" : (/trident/i).test(navigator.userAgent) ? "ms" : "opera" in window ? "O" : "",
        trnOpen: 'translate' + (has3d && !hasTouch ? '3d(' : '('),
        trnClose: has3d && !hasTouch ? ',0)' : ')',
        // event names begin
        click: hasTouch ? "touchend" : "click",// 如果不支持触摸则为点击事件，如果支持触摸则为触摸结束事件
        mousedown: hasTouch ? "touchstart" : "mousedown",// 如果不支持触摸则为鼠标摁下事件，如果支持触摸则为触摸开始事件
        mouseup: hasTouch ? "touchend" : "mouseup",// 如果不支持触摸则为鼠标松开事件，如果支持触摸则为触摸结束事件
        mousemove: hasTouch ? "touchmove" : "mousemove",// 如果不支持触摸则为鼠标移动事件，如果支持触摸则为滑动事件

        // 获取事件触发时屏幕坐标的函数，自动适配是鼠标事件还是触摸事件
        getPoint: function(e){// 返回点击、触摸、移动和滑动事件的当前屏幕坐标
            if(!e){
                return {};
            }

            if(hasTouch){// 支持触摸事件
                return {x: e.touches[0].pageX, y: e.touches[0].pageY};
            }else{// 不支持触摸事件
                return {x: e.clientX, y: e.clientY};
            }
        }
        // event names end
    };

    /**
     * 扩展日期的格式化函数
     */
    Date.prototype.format = function(format) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };

    // 判断字符串是否以指定的字符串开始
    String.prototype.startWith=function(str){
        var reg=new RegExp("^"+str);
        return reg.test(this);
    };

    // 判断字符串是否以某个指定的字符串结尾
    String.prototype.endWith=function(str){
        var reg=new RegExp(str+"$");
        return reg.test(this);
    };

    String.prototype.replaceAll = function(s1,s2){
        return this.replace(new RegExp(s1,"gm"),s2);
    }

    /**
     * 通用工具类，主要包括常用的日期转换函数、对象转换函数、随机函数和日志输出函数等常用小工具
     */
    window.commUtil = {
        urlReplaceNumber: function (url,name,value){
            var reg=new RegExp("(" + name + "=).([0-9])*(&)?","g");
            return url.replace(reg,'$1' + value + "&");
        },
        urlReplace: function(url,name,value){// 替换url中的参数
            var reg=new RegExp("(" + name + "=).([\\w+$])*(&)?","g");
            return url.replace(reg,'$1' + value + "&");
        },
        getCurrTime: function(formatStr){// 获取系统当前时间
            if(formatStr){//根据指定的格式返回对应格式的时间
                return new Date().format(formatStr);
            }else{// 不指定格式则返回系统当前时间的毫秒数
                return new Date().valueOf();
            }
        },

        getEndDateTimestamp : function(){
            var date = new Date();
            date.setHours(date.getHours() + 24);
            //date.setMinutes(59);
            //date.setSeconds(59);

            return date.valueOf();
        },

        getBeginDateTimestamp : function(){
            var date = new Date();
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);

            return date.valueOf();
        },

        getDate : function(){
            return new Date();
        },

        random: function(end){// 根据指定的最大范围上限产生随机数，默认为小于等于100万的随机数
            return parseInt(Math.random() * (end || 1000000));
        },

        lessFactor: function(time,factor){// 比较给定时间和当前系统时间相比是否超过了给定系数的分钟数量
            time = parseInt(time);
            var currTime = this.getCurrTime();
            var timeDiff = currTime - parseInt(time);

            if(timeDiff > 1000 * 60 * factor){//
                return false;
            }
            return true;
        },

        timestamp2Date: function(time){// 根据时间戳创建date
            var date = new Date(parseInt(time));
            return date;
        },

        timestamp4Month: function(time){// 根据时间戳获取对应月份
            var date = new Date(parseInt(time));
            var month = date.getMonth() + 1;
            if(month >= 10){
                return month;
            }else{
                return "0" + month;
            }
        },

        timestamp4Day: function(time){// 根据时间戳获取对应月份
            var date = new Date(parseInt(time));
            var day = date.getDate();

            if(day >= 10){
                return day;
            }else{
                return "0" + day;
            }
        },

        timestamp4Year: function(time){// 根据时间戳获取对应月份
            var date = new Date(parseInt(time));
            return date.getFullYear();
        },

        timestamp4YearS: function(time){// 根据时间戳获取对应月份
            var date = new Date(parseInt(time));
            return date.getFullYear() % 100;
        },

        transformDate: function(time, formatstr){
            if(!time || isNaN(time)){
                return;
            }

            time = parseInt(time);
            var currTime = this.getCurrTime();
            var timeDiff = currTime - parseInt(time);

            if(formatstr){// 根据指定格式返回对应的系统当前时间
                return new Date(time).format(formatstr);
            }

            if(timeDiff < 0){// 晚于系统当前时间，直接显示日期
                //return "<span><cite>" + new Date(time).format("yyyy-MM-dd hh:mm") + "</cite></span>";
                return "" + new Date(time).format("yyyy-MM-dd hh:mm");
            }

            if(parseInt(timeDiff / 1000 / 60) < 60){// 早于当前系统时间没有超过1小时的，显示早于的分钟数
                //return "<span><cite>"+parseInt(timeDiff / 1000 / 60) + "</cite> 分钟前刷新</span>";
                return parseInt(timeDiff / 1000 / 60) + "分钟前";
            }

            if(parseInt(timeDiff / 1000 / 60 / 60) < 24){ //早于当前系统时间没有超过1天的，只显示早于的小时数
                //return "<span><cite>"+parseInt(timeDiff / 1000 / 60 / 60) + "</cite> 小时前刷新</span>";
                return parseInt(timeDiff / 1000 / 60 / 60) + "小时前";
            }else{// 早于当前系统时间超过1天的，只显示发布时间
                //return "<span><cite>" + new Date(time).format("yyyy-MM-dd hh:mm") + "</cite></span>";
                return "" + new Date(time).format("yyyy-MM-dd hh:mm");
            }
        },

        transformDateS: function(time, formatstr){
            if(!time || isNaN(time)){
                return;
            }

            time = parseInt(time);
            var currTime = this.getCurrTime();
            var timeDiff = currTime - parseInt(time);

            if(formatstr){// 根据指定格式返回对应的系统当前时间
                return new Date(time).format(formatstr);
            }

            if(timeDiff < 0){// 晚于系统当前时间，直接显示日期
                //return "<span><cite>" + new Date(time).format("yyyy-MM-dd hh:mm") + "</cite></span>";
                return "" + new Date(time).format("yyyy-MM-dd");
            }

            if(parseInt(timeDiff / 1000 / 60) < 60){// 早于当前系统时间没有超过1小时的，显示早于的分钟数
                //return "<span><cite>"+parseInt(timeDiff / 1000 / 60) + "</cite> 分钟前刷新</span>";
                return parseInt(timeDiff / 1000 / 60) + "分钟前";
            }

            if(parseInt(timeDiff / 1000 / 60 / 60) < 24){ //早于当前系统时间没有超过1天的，只显示早于的小时数
                //return "<span><cite>"+parseInt(timeDiff / 1000 / 60 / 60) + "</cite> 小时前刷新</span>";
                return parseInt(timeDiff / 1000 / 60 / 60) + "小时前";
            }else{// 早于当前系统时间超过1天的，只显示发布时间
                //return "<span><cite>" + new Date(time).format("yyyy-MM-dd hh:mm") + "</cite></span>";
                return "" + new Date(time).format("yyyy-MM-dd");
            }
        },

        isEmpty: function(json){// 判断某个对象是否为undefined 或为null 或为''
            if (!json){// 为undefined的情况
                return true;
            }

            if(json instanceof Array){// 是数组的情况
                if(json.length <= 0){// 数组长度小于等于0
                    return true;
                }else{// 数组长度大于0
                    return false;
                }
            }

            for(var key in json){
                return false;
            }
            return true;
        },
        isNotEmpty: function(json){// 判断某个对象是否不为空
            if (!json){// 为undefined的情况
                return false;
            }

            if(json instanceof Array){// 是数组的情况
                if(json.length <= 0){// 数组长度小于等于0
                    return false;
                }else{// 数组长度大于0
                    return true;
                }
            }

            for(var key in json){
                return true;
            }
            return false;
        },

        toJson: function(str){// 将JSON字符串转换为JSON对象
            if(!str || str.length < 1){
                return null;
            }else{
                return JSON.parse(str); //eval("(" + str + ")")
            }
        },
        toString: function(obj){// 将对象转换为JSON字符串
            if (this.isEmpty(obj)) {
                return "";
            }

            return JSON.stringify(obj);
        },
        toUrl: function(json){// 将JSON对象转换为url地址
            if (this.isEmpty(json)) {
                return "";
            }
            var tmps = '', value = null;
            for (var key in json) {
                value = json[key];
                value = (value == "undefined" ? "" : value);// 处理空值
                //tmps.push(key + "=" + encodeURIComponent(value));
                tmps += (key + "=" + encodeURIComponent(value));
            }
            return tmps;
        },
        log: function(msg){// 在控制台输出消息
            console.log(msg);
        }
    };

    /**
     * 设备相关信息工具类，主要包括常用的日期转换函数、对象转换函数、随机函数等常用小工具
     */
    var info = navigator.userAgent.toLowerCase();// 浏览器详细信息
    window.deviceUtil = {
        info: info,// 浏览器详细信息
        type: function(){// 获取设备的类型，可能为iphone,ipad,android设备
            var product = "iphone";
            if(info.indexOf("iphone")!=-1){
                product="iphone";
            }else if(info.indexOf("ipad")!=-1){
                product="ipad";
            }else{
                product="android";
            }

            return product;
        }(),
        model: function(){// 设备型号
            //型号，版本
            var model = "";
            if(info.indexOf("version")!=-1){
                model = info.split("version/")[1].split(" ")[0];
            }
            return model;
        }(),
        deviceInfo: function(){// 设备完整信息
            return '';
        }(),
        onLine: function(){// 是否在线
            return navigator.onLine;
        }
    }

    /**
     * 本地存储工具类，提供本地数据的存储、获取、删除和清理本地存储等功能
     */
    window.storeUtil= {
        get: function(key){// 根据指定的key获取本地存储中的字符串内容
            return window.localStorage.getItem(key);
        },
        getJson: function(key){// 根据指定的key从本地获取对应的JS对象

            var content = this.get(key);
            if(content){// 将字符串内容转换为JS对象
                return JSON.parse(content);
            }else{
                return null;
            }
        },
        set: function(key, value){// 将指定的内容保存到本地存储中

            if(typeof value === "object"){// 将JS对象转换为JSON字符串
                window.localStorage.setItem(key, JSON.stringify(value));
            }else{
                window.localStorage.setItem(key, value);
            }
            return this;

        },
        del: function(key){// 删除本地存储中的内容
            window.localStorage.removeItem(key)
            /*return this;*/
        },
        clear: function(){// 清理本地存储中的所有内容
            //return window.localStorage.clear();
        }
    };

    /**
     * 模板管理工具
     */
    window.templateUtil ={// 模板管理工具
        compile:function(key,content){// 编译模板
            template.compile(key,content);
        },

        render: function(tid,rs1,reverse,parameter){// 根据模板和数据生成数据
            var reverse = (reverse != undefined && reverse != null ? reverse : false);// 默认不逆序数组

            if(!(rs1 instanceof Array)){// 处理不是数组的情况，模板统一处理
                var tmp = new Array();
                tmp.push(rs1);
                rs1 = tmp;
            }

            var result = rs1.concat([]);

            if(reverse){// 对数据进行逆序处理
                result = result.reverse();
            }

            if(parameter){//添加外部变量
                template.helper("P",parameter);
            }else{
                template.helper("P",window);
            }
            return template.render(tid, {list:result});
        }
    };

    window.onerror = function(msg, url, line){
        // Util.log(line + ": " + msg);
        //alert(url + "中的第 " + line + " 行：" + msg);
    };

    window.show = function(id,id2){// 显示指定的元素
        //$("#" + id).removeClass("hide").siblings().addClass("hide");
        if(id2 != undefined){
            $("#" + id2).css("display","block").siblings().css("display","none");
        }
        $("#" + id).css("display","block").siblings().css("display","none");
    }

    window.show2 = function(id){// 显示指定的元素
        $("#" + id).css("display","block");
    }

    window.hide = function(id){// 隐藏某个元素
        $("#" + id).css("display","none");
    }

})();

// CSS3动画效果的封装
(function(vendor){
    $.fn.outerHtml = function() {
        return $(this).clone().wrap('<div></div>').parent().html();
    };

    // css动画效果类型
    var trans = {x: "translateX", y: "translateY", sx: "scaleX", sy: "scaleY", kx: "skewX", ky: "skewY", ro: "rotate"}
    $.fn.animation = function(properties, duration, easing, callback) {// 设置动画效果
        var that = this, v = "", transform = "", style = {},
            rox = properties.rox,
            roy = properties.roy,
            delay = properties.delay || 0,
            has3d = properties.has3d == undefined ? true : properties.has3d;
        properties.rox = properties.roy = properties.has3d = properties.delay = properties.queue = undefined;
        if(typeof duration === "function"){
            callback = duration;
            duration = 500;
        }else if(duration == undefined){
            duration = 500;
        }
        if(typeof easing === "function"){
            callback = easing;
            easing = "cubic-bezier(0.51, 0.01, 0.37, 0.98)";
        }else{
            easing = easing || "cubic-bezier(0.51, 0.01, 0.37, 0.98)";
        }
        if(callback && duration + delay > 0){
            setTimeout(function(){ callback.apply(that); }, duration + delay);
        }
        for(var pro in properties){
            v = properties[pro];
            if(v == 0 || v) {
                if(pro in trans){
                    v = v ? typeof v == "string" ? v : pro == "ro" ? v + "deg" : v + "px" : 0;
                    transform += " " + trans[pro] + "(" + v + ")";
                } else {
                    style[pro] = v;
                }
            }
        }
        style[vendor + "transform-style"] = "preserve-3d";
        style[vendor + "backface-visibility"] = "hidden";
        style[vendor + "transform"] = transform;
        style[vendor + "transition"] = duration + "ms " + easing + " " + delay + "ms";
        if(rox || rox == 0 || roy || roy == 0) {
            rox = rox && (rox + "").match(/%/) ? rox : rox ? rox + "px" : 0;
            roy = roy && (roy + "").match(/%/) ? roy : roy ? roy + "px" : 0;
            style[vendor + "transform-origin"] = rox + " " + roy;
        }
        return that.css(style);
    };

    $.fn.animStop = function(){// 停止动画效果
        return this.css(vendor + "transition-duration", "").css(vendor + "transition", "");
    };


    // 扩展jquery ajax 获取数据的方式
    $.getData = function(url,sucess,faile){// get方式异步获取数据
        $.ajax({
            type:'get',//可选get
            url:url,//这里是接收数据的PHP程序
            data:'',//传给PHP的数据，多个参数用&连接
            dataType:'text',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
            success:function(msg,status,obj){//这里是ajax提交成功后，PHP程序返回的数据处理函数。msg是返回的数据，数据类型在dataType参数里定义！
                var result = eval('(' + msg + ')');
                if(sucess && typeof sucess === "function"){
                    sucess(result);
                }
            },
            error:function(m){//ajax提交失败的处理函数！
                if(faile && typeof faile === "function"){
                    faile();
                }

                try{
                    var errormsg = eval('(' + m.responseText + ')');
                    if(errormsg.message){
                        showMessage(errormsg.message);
                    }else if(errormsg.Message){
                        showMessage(errormsg.Message);
                    }else{
                        showMessage("网络异常，请稍后再试");
                    }
                }catch (e){}
            }
        });
    }

    $.getText = function(url,sucess,faile){// get方式异步获取数据
        $.ajax({
            type:'get',//可选get
            url:url,//这里是接收数据的PHP程序
            data:'',//传给PHP的数据，多个参数用&连接
            dataType:'text',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
            success:function(msg,status,obj){//这里是ajax提交成功后，PHP程序返回的数据处理函数。msg是返回的数据，数据类型在dataType参数里定义！
                if(sucess && typeof sucess === "function"){
                    sucess(msg);
                }
            },
            error:function(m){//ajax提交失败的处理函数！

                if(faile && typeof faile === "function"){
                    faile();
                }

                try{
                    var errormsg = eval('(' + m.responseText + ')');
                    if(errormsg.message){
                        showMessage(errormsg.message);
                    }else if(errormsg.Message){
                        showMessage(errormsg.Message);
                    }else{
                        showMessage("网络异常，请稍后再试");
                    }
                }catch (e){}
            }
        });
    }

    $.toJasonParams = function(data){
        return "params=" + JSON.stringify(data);// + "&abc=1&cqs=2";
    }

    $.requestData = function(request,url,data,sucess,faile){// 指定调用方式
        if(request == 2){// get方式
            if(url.indexOf("?") == -1 && data != ""){
                $.getData(url + "?" + data,sucess,faile);
            }else{
                $.getData(url + data,sucess,faile);
            }

        }else{// post方式
            $.postData(url,data,sucess,faile);
        }
    }

    $.postData = function(url,data,sucess,faile){// post方式异步获取数据
        $.ajax({
            type:'post',//可选get
            url:url,//这里是接收数据的PHP程序

            data:(data ? data : ''),//传给PHP的数据，多个参数用&连接
            dataType:'text',//服务器返回的数据类型 可选XML ,Json jsonp script html text等

            success:function(msg,status,obj){//这里是ajax提交成功后，PHP程序返回的数据处理函数。msg是返回的数据，数据类型在dataType参数里定义！
                if(msg){
                    //var msg = msg.substring(msg.indexOf('\r\n\r\n') + 4);
                    var result = eval('(' + msg + ')');
                    if(sucess && typeof sucess === "function"){
                        sucess(result);
                    }
                }
            },
            error:function(m){//ajax提交失败的处理函数！

                if(faile && typeof faile === "function"){
                    faile();
                }

                try{
                    var errormsg = eval('(' + m.responseText + ')');
                    if(errormsg.message){
                        showMessage(errormsg.message);
                    }else if(errormsg.Message){
                        showMessage(errormsg.Message);
                    }else{
                        showMessage("网络异常，请稍后再试");
                    }
                }catch (e){}
            }
        });
    }

    $.postText = function(url,data,sucess,faile){// post方式异步获取数据
        $.ajax({
            type:'post',//可选get
            url:url,//这里是接收数据的PHP程序
            data:(data ? data : ''),//传给PHP的数据，多个参数用&连接
            dataType:'text',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
            success:function(msg,status,obj){//这里是ajax提交成功后，PHP程序返回的数据处理函数。msg是返回的数据，数据类型在dataType参数里定义！
                if(sucess && typeof sucess === "function"){
                    sucess(msg);
                }
            },
            error:function(m){//ajax提交失败的处理函数！
                if(faile && typeof faile === "function"){
                    faile();
                }

                try{
                    var errormsg = eval('(' + m.responseText + ')');
                    if(errormsg.message){
                        showMessage(errormsg.message);
                    }else if(errormsg.Message){
                        showMessage(errormsg.Message);
                    }else{
                        showMessage("网络异常，请稍后再试");
                    }
                }catch (e){}
            }
        });
    }
})("-webkit-");

/*
 * scrollId: 滑动元素id
 * pageCount：元素数量
 * callBack：回调函数
 * autoSlider:默认自动滑动
 * dot:点的样式
 * dotSelect:选中的样式
 */
// 通用控件的封装
(function($){
    window.autoSlidecache = {};//自动滚动缓存
    window.staticScroll = function(sliderParam){//scrollId,pageCount,callBack
        var self = $("#" + sliderParam.scrollId);
        self.unbind();
        self.css("-webkit-transform", "translateX(0)");
        self.css("-webkit-transform-style","preserve-3d");
        self.data("page","");

        var	page = 0;// 初始页码
        var pageWidth = 0;// 页面宽度

        if(sliderParam.pageCount > 1){
            var slider = function(number, tempDuration,position){
                pageWidth = self.parent().width();
                if(pageWidth == 0){
                    pageWidth = $('body').width();
                }
                page = number >= 0 ? number-1 : self.data("page") || 0;

                moveX = -(++page) * pageWidth / $("#" + sliderParam.scrollId).width() * 100 + "%";
                self.animation({x: moveX}, tempDuration || 800, function(){
                    self.data("page", page);
                });

                try{
                    $("#" + sliderParam.scrollId + "_" +number).removeClass(sliderParam.dot).addClass(sliderParam.dotSelect).siblings().removeClass(sliderParam.dotSelect).addClass(sliderParam.dot);
                }catch (e){

                }

                if(sliderParam.callBack){
                    sliderParam.callBack(page,position);
                }
            };

            self.bind(eventUtil.mousedown, function(){
                var x = eventUtil.getPoint(event).x;
                var y = eventUtil.getPoint(event).y;// y 轴

                self.animStop().data("touchBegin", true).data("startX", x).data("endX", x).data("startY", y).data("endY", y);
            }).bind(eventUtil.mousemove, function(){
                    if(self.data("touchBegin")){
                        var pageWidth = self.parent().width(),
                            page = self.data("page") || 0,
                            x = eventUtil.getPoint(event).x,
                            moveX = x - self.data("startX");
                        moveX = ((-pageWidth * page) + moveX) / self.width() * 100 + "%";
                        self.data("moving", true).data("endX", x).animation({x: moveX}, 0);


                        var y = eventUtil.getPoint(event).y;
                        var moveY = y - self.data("startY");

                        if(moveY != 0){// 响应上下滚动事件
                            return true;
                        }

                        return true;// 修改事件响应
                    }
                }).bind(eventUtil.mouseup, function(){
                    if($(this).data("touchBegin")){
                        self.data("touchBegin", false).data("moving", false);
                        var startX = self.data("startX"), endX = self.data("endX"),
                            moveX = endX - startX, page = self.data("page") || 0;
                        if(moveX == 0) return true;
                        var position = 0;//0：表示没滑动到最左边或最右边的边缘，-1：表示滑动到最左边，1：表示滑动到最右边
                        if(moveX > 100) {
                            if(page <= 0){
                                position = -1;
                            }
                            page = page > 0 ? page - 1 : page;
                        } else if(moveX < -100) {
                            if(page >= sliderParam.pageCount - 1){
                                position = 1;
                            }

                            page = page < sliderParam.pageCount - 1 ? page + 1 : page;
                        }
                        slider(page, 300,position);

                        return true;// 修改事件响应
                    }
                });
        }

        if(sliderParam.pageCount > 1 && sliderParam.autoSlider){
            var autoStart = setInterval(function(){
                var num = page + 1;
                if(num >= sliderParam.pageCount){
                    num = 0;
                }
                slider(num,500);
            },10000);// 三秒自动轮播

            if(sliderParam.scrollId in autoSlidecache){
                clearInterval(autoSlidecache[sliderParam.scrollId]);
            }

            autoSlidecache[sliderParam.scrollId] = autoStart;
        }

        return self;
    };
})($);

/*
 * scrollId: 滑动元素id
 * pageCount：元素数量
 * width:单个元素宽度
 * director: 滑动方向
 *
 */
// 通用控件的封装
(function($){
    window.autoSlidecache = {};//自动滚动缓存
    window.jasonScroll = function(sliderParam){//scrollId,pageCount,callBack
        var self = $("#" + sliderParam.scrollId);
        var contentWidth = sliderParam.pageCount * sliderParam.width;// 内容的长度
        $("#" + sliderParam.scrollId).width(contentWidth);
        self.unbind();
        self.css("-webkit-transform", "translateX(0)");
        self.css("-webkit-transform-style","preserve-3d");
        self.data("page","");
        var pageWidth = self.parent().width();
        if(pageWidth == 0){
            pageWidth = $('body').width();
        }
        var preEndX = 0;// x累计滑动
        var preEndY = 0;// y累计滑动

        var	page = 0;// 初始页码
        var director = 0;// 0:没有开始滑动，1:x方向，2：y方向

        // 滑动加速度
        var lastMoveTime = 0;
        var lastMoveStartY = 0;
        var stopInertiaMove = false; // 是否停止缓动

        if(sliderParam.pageCount > 1){
            self.bind(eventUtil.mousedown, function(){
                var x = eventUtil.getPoint(event).x;
                var y = eventUtil.getPoint(event).y;// y 轴
                self.animStop().data("touchBegin", true).data("startX", x).data("endX", x).data("startY", y).data("endY", y);

                // 滑动加速度
                /*
                lastMoveStartY = y;
                lastMoveTime = e.timeStamp || Date.now();
                stopInertiaMove = true;
                */
            }).bind(eventUtil.mousemove, function(){
                    if(self.data("touchBegin")){
                        var x = eventUtil.getPoint(event).x,
                            y = eventUtil.getPoint(event).y,
                            moveX = x - self.data("startX") + preEndX;
                        var moveY = y - self.data("startY") + preEndY;

                        if(director == 0){// 设置滑动方向
                            if(Math.abs(moveY) > Math.abs(moveX)){
                                director = 2;
                                return true;
                            }else{
                                director = 1;
                            }
                        }else if(director == 2){// 上下滑动
                            return true;
                        }

                        // 滑动加速度
                        /*
                        var nowTime = e.timeStamp || Date.now();
                        stopInertiaMove = true;
                        if(nowTime - lastMoveTime > 300) {
                            lastMoveTime = nowTime;
                            lastMoveStartY = y;
                        }*/


                        self.data("moving", true).data("endX", x).animation({x: moveX}, 0);

                        if(moveY != 0){// 响应上下滚动事件
                            return true;
                        }
                        return true;// 修改事件响应
                    }
                }).bind(eventUtil.mouseup, function(){
                    if($(this).data("touchBegin")){
                        self.data("touchBegin", false).data("moving", false);
                        var startX = self.data("startX"), endX = self.data("endX"),
                            moveX = endX - startX;

                        director = 0;// 重置滑动标识

                        if(moveX == 0) return true;

                        if(moveX > 0){// 向右拉
                            if(preEndX + moveX > 0){
                                self.animation({x: 0}, 400);
                                preEndX = 0;
                            }else{
                                preEndX += moveX;
                            }
                        }else if(moveX < 0){// 向左拉
                            if(contentWidth + (preEndX + moveX)  < pageWidth){
                                self.animation({x: (pageWidth - contentWidth)}, 400);

                                preEndX = (pageWidth - contentWidth);
                            }else{
                                preEndX += moveX;
                            }
                        }

                        // 加速度滑动
                        /*
                        var nowTime = e.timeStamp || Date.now();
                        var v = (y - lastMoveStartY) / (nowTime - lastMoveTime); //最后一段时间手指划动速度
                        stopInertiaMove = false;
                        (function(v, startTime, contentY) {
                            var dir = v > 0 ? -1 : 1; //加速度方向
                            var deceleration = dir*0.0006;
                            var duration = v / deceleration; // 速度消减至0所需时间
                            var dist = v * duration / 2; //最终移动多少
                            function inertiaMove() {
                                if(stopInertiaMove) return;
                                var nowTime = e.timeStamp || Date.now();
                                var t = nowTime-startTime;
                                var nowV = v + t*deceleration;
                                // 速度方向变化表示速度达到0了
                                if(dir*nowV < 0) {
                                    return;
                                }
                                var moveY = (v + nowV)/2 * t;
                                content.style.top = (contentY + moveY) + "px";
                                setTimeout(inertiaMove, 10);
                            }
                            inertiaMove();
                        })(v, nowTime, contentY);
                        */

                        return true;// 修改事件响应
                    }
                });
        }


        return self;
    };
})($);

// 给DOM元素绑定事件
function bindTouch4Dom(id,fun1,fun2){
    var self = $("#" + sliderParam.scrollId);
    var contentWidth = sliderParam.pageCount * sliderParam.width;// 内容的长度
    $("#" + sliderParam.scrollId).width(contentWidth);
    self.unbind();
    self.css("-webkit-transform", "translateX(0)");
    self.css("-webkit-transform-style","preserve-3d");
    self.data("page","");
    var pageWidth = self.parent().width();
    if(pageWidth == 0){
        pageWidth = $('body').width();
    }
    var preEndX = 0;// x累计滑动
    var preEndY = 0;// y累计滑动

    var	page = 0;// 初始页码
    var director = 0;// 0:没有开始滑动，1:x方向，2：y方向

    // 滑动加速度
    var lastMoveTime = 0;
    var lastMoveStartY = 0;
    var stopInertiaMove = false; // 是否停止缓动

    self.bind(eventUtil.mousedown, function(){
        var x = eventUtil.getPoint(event).x;
        var y = eventUtil.getPoint(event).y;// y 轴
        self.animStop().data("touchBegin", true).data("startX", x).data("endX", x).data("startY", y).data("endY", y);

    }).bind(eventUtil.mousemove, function(){
            if(self.data("touchBegin")){
                var x = eventUtil.getPoint(event).x,
                    y = eventUtil.getPoint(event).y,
                    moveX = x - self.data("startX") + preEndX;
                var moveY = y - self.data("startY") + preEndY;

                if(director == 0){// 设置滑动方向
                    if(Math.abs(moveY) > Math.abs(moveX)){
                        director = 2;
                        return true;
                    }else{
                        director = 1;
                    }
                }else if(director == 2){// 上下滑动
                    return true;
                }


                self.data("moving", true).data("endX", x).animation({x: moveX}, 0);

                if(moveY != 0){// 响应上下滚动事件
                    return true;
                }
                return true;// 修改事件响应
            }
        }).bind(eventUtil.mouseup, function(){
            if($(this).data("touchBegin")){
                self.data("touchBegin", false).data("moving", false);
                var startX = self.data("startX"), endX = self.data("endX"),
                    moveX = endX - startX;

                director = 0;// 重置滑动标识

                if(moveX == 0) return true;

                if(moveX > 0){// 向右拉
                    fun2();
                }else if(moveX < 0){// 向左拉
                    fun1();
                }

                return true;// 修改事件响应
            }
        });
}

(function(){
    window.showMessage = function(message,hideProcess,showProcess){
        hideLoading();// 先隐藏loading
        show2("messageC");
        //$("#message").html(message + '<br>3秒后自动隐藏...');
        $("#message").html(message);
        if(showProcess){// 提示窗口显示时，进行的处理
            showProcess();
        }

        setTimeout(function(){
            hide("messageC");
            if(hideProcess){// 提示窗口隐藏后进行的处理
                hideProcess();
            }
        },3000);
    };

    window.hideMessage = function(){
        hide("messageC");
    };

    window.director = 0;// 默认向上

    window.dataCache = function(){
        var self = this;
        self.key = "datas";
        self.prePox = "nbz";// 前缀
        self.cache = {};// 数据缓存

        var datas = storeUtil.get(self.key);
        if(datas){
            self.cache = JSON.parse(datas);
        }

        self.getDatas = function(){// 获取缓存中的数据
            return self.cache;
        };

        self.clear = function(){// 清除缓存中所有数据
            self.cache = {};// 数据缓存
        };

        self.add = function(key,value){// 单个放入到缓存
            self.cache[key] = value;
        };

        self.get = function(key){// 根据key获取
            return self.cache[key];
        };

        self.get4Cache = function(key){// 根据key获取
            return self.cache[self.prePox + key];
        };

        self.add2Cache = function(datas){// 将数据批量放入到缓存映射表中
            if(!datas || datas.length <= 0){// 如果数据为空或数组的长度小于0，则返回空
                return;
            }

            if(datas instanceof Array){// 如果数据类型为数组
                for(var i = 0; i < datas.length; ++i){
                    var data = datas[i];
                    if(data.id){
                        self.cache[self.prePox + data.id] = data;
                    }
                }
            }else{// 数据为单个数据
                if(datas.id){
                    self.cache[self.prePox + datas.id] = datas;
                }
            }

            setTimeout(function(){
                storeUtil.set(self.key,JSON.stringify(self.cache));
            },1000);
        }
    };// 数据容器


    window.loadingFlag = false;// 是否在现实loading
    window.loadTime = 0;// 加载计时

    window.showLoading = function(){// 显示载入画面
        window.loadingFlag = true;// 是否在现实loading
        window.loadTime = 0;// 加载计时
        show2("loadingC");

    }

    window.forceHideLoding = function(){// 强制关闭loading
        if(loadTime > 4 ){
            hideLoading();
        }
    }

    window.tipNetwork = function(){
        hideLoading();
        showMessage('亲，此处网速慢过蜗牛爬行，换个网络试试');
    }

    window.hideLoading = function(){// 隐藏载入页面
        window.loadingFlag = false;// 是否在现实loading
        window.loadTime = 0;// 加载计时
        hide("loadingC");
    }

    window.hideMessage = function(){// 隐藏提示窗口
        $("#messageBox,#webMessage").addClass("hide");
    }

    //成功回调
    window.success = function(result,uniqueId,type){
        hideLoading();// 隐藏loading

        eval(result);// 获取结果

        if(data.status != undefined && data.status == 3){// 操作失败，
            messageBox("提交时出错，稍后再提交!");
        }else if(data.status != undefined && data.status == 4){// 上传图片失败
            messageBox("上传图片失败，请重新选择图片!");
        }else if(data.result != undefined && data.result.status != undefined && data.result.status == 0){// 操作失败，
            messageBox("标题重复，修改后再提交!");
        }else{
            messageBox("操作成功!");
        }
    }

    window.error = function(){
        hideLoading();// 隐藏loading
    }

    // 获取事件对象
    window.getEventTargt = function(){
        return $(event.target);
    }

  // 获取时间触发元素的did
    window.getDid = function(){
        var id = $(event.target).attr("did");
        return id;
    }

    window.validate = function(){// 输入验证器
        var self = this;

        self.validateTel = function(tel){// 手机号码验证
            var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
            return telReg;
        };

        self.validateNum = function(tel){// 手机号码验证
            var telReg = !!tel.match(/^\+?[1-9][0-9]*$/);
            return telReg;
        };

        self.validateCard = function(cardNo){// 银行卡号
            var telReg = !cardNo.match(/^(\d{16}|\d{19})$/);
            return telReg;
        }
    };

    window.validator = new validate();// 验证器

    window.nativeUtil = function(){
        var self = this;
        self.nativeInterface = $("#nativeInterface");// 接口请求对象

        self.takePhoto = function(token){// 显示相机或图片库进行选择上传
            var url = "local://takePhoto?token=" + token;
            self.nativeInterface.attr("src",url);
        };

        self.uploadPhoto = function(token){// 显示相机或图片库进行选择上传
            var url = "local://uploadPhoto?token=" + token;
            self.nativeInterface.attr("src",url);
        };

        self.callTel = function(tel){// 拨打电话
            var url = "local://tel?" + tel;
            self.nativeInterface.attr("src",url);
        };

        self.wxpayment = function(content){// 拨打电话
            var url = "local://weixinpayment?" + content;
            self.nativeInterface.attr("src",url);
        };

        self.alipayment = function(content){// 拨打电话
            var url = "local://alipayment?" + content;
            self.nativeInterface.attr("src",url);
        };

        self.unionpaymentlocal = function(content){// 银联pos通进场支付
            var url = "local://unionpaymentlocal?" + content;
            self.nativeInterface.attr("src",url);
        };

        self.unionpaymentremote = function(content){// 银联POS通远程支付
            var url = "local://unionpaymentremote?" + content;
            self.nativeInterface.attr("src",url);
        };

        // 分享目的地+数据类型+id+title
        self.share = function(content){// 分享到微信QQ
            var url = "local://share?" + content;
            self.nativeInterface.attr("src",url);
        };

        self.takeQcCode = function(){// 扫描二维码
            var url = "local://barcode?index=1";
            self.nativeInterface.attr("src",url);
        };

        self.toolbar = function(status){// 显示隐藏工具条
            var url = "hideToolbar://status#=#" + status;
            self.nativeInterface.attr("src",url);
        };
        self.getlocalfile = function(type){// 取得本地文件
            if(!type) type = 1;
            var url = "getlocalfile://type#=#" + type;
            //alert(url);
            self.nativeInterface.attr("src",url);
        };
        self.post = function(params){// 提交业务数据
            if(!params) return;
            var url = "post://" + self._jsonToUrl(params);
            //alert("提交数据URL："+url);
            self.nativeInterface.attr("src",url);
        };
        self._jsonToUrl = function(json) {
            if (!json) {
                return "";
            }
            var tmps = [], value = null;
            for (var key in json) {
                value = json[key];
                value = value == "undefined" ? "" : value;
                tmps.push(key + "#=#" + encodeURIComponent(value));
            }
            return tmps.join("$$");
        }
    };// 创建原生工具

    window.showSmallLoading = function(){
        window.loadingFlag = true;// 是否在现实loading
        window.loadTime = 0;// 加载计时
        //show2("loadingC");
    }

    window.hideSmallLoading =function(){
        window.loadingFlag = false;// 是否在现实loading
        window.loadTime = 0;// 加载计时
        hide("loadingC");
        //hide("downloading");
    }

    window.nativeUtils = new nativeUtil();// 原生工具
    window.dataSet = new dataCache();// 数据集合

    window.scrollerCache = {
        currScroller:undefined// 当前滑动控件
    };// 滚动控件容器

    window.clearScroller = function(key){// 清除滚动
        delete scrollerCache[key];
    }

    /**
     * id:滚动控件对应的元素id
     * url:动态获取数据的地址
     * templateId:根据数据生成内容的模板id
     * isShare:滚动内容所在的dom元素是否为多个功能共享，是共享模式，需要每次都初始化内容
     * variableName:自动获取数据的变量名，默认根据时间倒序取adddate
     * autoLoad:滚动到顶部或底部时，是否自动获取数据
     * contentId:追加内容的dom元素id
     * contentId:是否缓存获取到的数据，默认不缓存
     * dataVariableName:数据的比较参数名，默认和variableName相同
     * director:获取数据的方向，1上下都获取，2:只向上获取，3：只向下获取，默认为1
     * currSenece:当前场景id
     */
    window.iScroller = function(prop){

        var currScoller = scrollerCache.currScroller;// 当前滑动控件
        if(currScoller){// 当前滑动控件不为空

            if(currScoller.refreshFlag == true){
                //if(currScoller.key == prop.url){// 当前滑动控件正是我们需要的控件
                if(currScoller.key == currScoller.generateKey(prop)){// 当前滑动控件正是我们需要的控件


                    // 设置新的参数
                    if(prop.paramters){
                        currScoller.paramters = prop.paramters;// 参数
                    }

                    currScoller.contentObject.html(''); //清除数据
                    currScoller.loadData(0);
                    return currScoller;
                }else{// 当前控件不是我们所需要的控件
                    // 处理当前控件
                    currScoller.isInit = false;// 是否已经初始化过该滑动控件
                    currScoller.isLoading = false;// 设置loading状态
                    currScoller.scroller.destroy();// 销毁滑动控件内容
                }
            }else{
                //if(currScoller.key == prop.url){// 当前滑动控件正是我们需要的控件
                if(currScoller.key == currScoller.generateKey(prop)){// 当前滑动控件正是我们需要的控件
                    setTimeout(function(){
                        currScoller.scroller.refresh();
                        currScoller.scroller.scrollTo(0,currScoller.scroller.absStartY,200);
                    },100);
                    return currScoller;
                }else{// 当前控件不是我们所需要的控件
                    // 处理当前控件
                    currScoller.initPosition = currScoller.scroller.absStartY;
                    currScoller.isInit = false;// 是否已经初始化过该滑动控件
                    currScoller.isLoading = false;// 设置loading状态
                    currScoller.scroller.scrollTo(0,0,0);// 设置为初始值
                    currScoller.content = currScoller.contentObject.html();
                    currScoller.scroller.destroy();// 销毁滑动控件内容
                }
            }
        }

        //showLoading();// 显示loading
        var self = this;


        // 生成缓存中的key
        self.generateKey = function(p){
            var key = p.url;
            if(p.paramters){
                key += JSON.stringify(p.paramters) + p.id;
            }
            return key;
        }

        //var obj = scrollerCache[prop.url];
        var obj = scrollerCache[self.generateKey(prop)];

        if(!obj){
            //scrollerCache[prop.url] = self;// 将控件放入到缓存中
            scrollerCache[self.generateKey(prop)] = self;// 将控件放入到缓存中
            scrollerCache.currScroller = self;// 当前滑动控件

            self.key = self.generateKey(prop);//prop.url;// 控件对应的key,取创建时的URL地址，之后一直不变
            self.cacheData = (prop.cacheData != undefined && prop.cacheData != null) ? prop.cacheData : false;// 是否缓存数据，默认不缓存;
            self.id = prop.id;// 滑动控件id
            self.url = prop.url;// 滑动控件获取数据的地址
            self.templateId = prop.templateId;// 模板id

            self.refreshFlag = (prop.refreshFlag != undefined && prop.refreshFlag != null) ? prop.refreshFlag : true;// 请求类型，2：get请求方式，1：post请求方式

            self.request = (prop.request != undefined && prop.request != null) ? prop.request : 1;// 请求类型，2：get请求方式，1：post请求方式

            self.allCount = 0;// 总的条数
            self.allPage = 0;// 总的页数
            self.pageIndex = 1;// 当前页数

            self.currCount = 0;// 当前索引

            self.pageSize = 20;// 每页最大数据条数
            self.requestPageIndex = 1;// 请求的页码

            self.noDataProcesser = (prop.noDataProcesser != undefined && prop.noDataProcesser != null) ? prop.noDataProcesser : function(d){};// 是否开启分页请求标识

            self.hasDataProcesser = (prop.hasDataProcesser != undefined && prop.hasDataProcesser != null) ? prop.hasDataProcesser : function(){};// 是否开启分页请求标识

            self.listDataPreProcesser = (prop.listDataPreProcesser != undefined && prop.listDataPreProcesser != null) ? prop.listDataPreProcesser : function(){};// 是否开启分页请求标识

            self.paramters = prop.paramters;// 参数

            self.pageFlag = (prop.pageFlag != undefined && prop.pageFlag != null) ? prop.pageFlag : false;// 是否开启分页请求标识

            self.variableName = prop.variableName ? prop.variableName : "adddate";// 变量名称，默认为
            self.dataVariableName = prop.dataVariableName ? prop.dataVariableName : self.variableName;

            self.isInit = false;// 是否已经初始化过该滑动控件
            self.autoLoad = (prop.autoLoad != undefined && prop.autoLoad != null) ? prop.autoLoad : true;// 控件是否自动获取数据
            self.director = (prop.director != undefined && prop.director != null) ? prop.director : 1;// 控件自动获取数据的方向
            self.isShare = (prop.isShare != undefined && prop.isShare != null) ? prop.isShare : false;// 控件是否共享DOM元素
            self.content = '';// 控件的内容
            self.contentId = prop.contentId;// 内容元素id
            self.initPosition = 0;// 默认的初始位置
            self.isLoading = false;// 是否正在请求

            self.firstdirector = (prop.firstdirector != undefined && prop.firstdirector != null) ? prop.firstdirector : 0;// 控件自动获取数据的方向

            self.scrollerObject = $("#" + prop.id);// 滑动控件对应的对象
            self.contentObject = $("#" + self.contentId);

            self.generateData1 = function(director){// 生成请求数据
                var data = "";// 数据

                var i = 0;
                for(var pop in self.paramters){
                    if(i++ > 0){
                        data += "&";
                    }

                    data += pop + "=" + self.paramters[pop];
                }

                if(self.pageFlag == true){// 启用分页
                    if(director == 0){
                        data += "&pageSize=" + self.pageSize + "&pageIndex=1";
                    }else{
                        if(self.pageIndex == self.allPage){
                            data += "&pageSize=" + self.pageSize + "&pageIndex=" + self.allPage;
                        }else{
                            data += "&pageSize=" + self.pageSize + "&pageIndex=" + (self.pageIndex + 1);
                        }

                    }
                }

                return data;
            };

            self.generateData = function(director){// 生成请求数据
                var data = "";// 数据

                if(self.pageFlag == true){// 启用分页
                    self.paramters.pageSize = self.pageSize;
                    self.paramters.pageIndex = self.pageIndex;
                    self.paramters.director = director;

                    if(director == 0){
                        self.paramters.currCount = 0;
                    }else{
                        self.paramters.currCount = self.currCount;
                    }


                }

                return "params=" + JSON.stringify(self.paramters);
            };

            self.refresh = function(){
                setTimeout(function(){self.scroller.refresh();},100);
            };

            self.addTipTitle = function(){// 添加提示
                self.contentObject.append("<div id='" + self.id +"tip' class='hide tipTitle'>往上拉加载更多</div>");// 如果是增量向前获取，则使用前插的方式
            }

            self.appendContent = function(content){// 添加提示
                try{
                    $("#" + self.id + "tip").remove();
                }catch (e){}

                self.contentObject.append(content);// 添加的内容

                self.contentObject.append("<div id='" + self.id +"tip' class='hide tipTitle'>往上拉加载更多</div>");// 如果是增量向前获取，则使用前插的方式
            }

            self.loadingTipTitle = function(){// 添加提示
                $("#" + self.id + "tip").html('正在加载...');
                show2(self.id + "tip");
            }

            self.showTipTitle = function(){// 添加提示
                show2(self.id + "tip");
            }

            self.hideTipTitle = function(){// 添加提示
                $("#" + self.id + "tip").html('没有数据可加载了...');
                hide(self.id + "tip");
            }


            self.scrollTo = function(){
                self.scroller.scrollTo(0,0);
            };

            self.scroller = new iScroll(self.id,{// 创建滑动控件
                onScrollMove:function(){

                    if(self.autoLoad){// 需要自动获取数据
                        if(self.scroller.y > 20){
                            if(self.director == 1 || self.director == 2){
                                //self.showTipTitle();
                            }
                        }else if(self.scroller.y < (self.scroller.maxScrollY - 20)){
                            if(self.director == 1 || self.director == 3){
                                self.showTipTitle();
                            }
                        }
                    }
                },
                bounce:true,
                momentum:false,// 去掉惯性
                hScrollbar:false,
                //checkDOMChanges:true,
                //useTransform:false,// 去掉动画
                //useTransition:false,// 去掉动画
                onScrollEnd:function(){return false;},
                onBefore:function(){
                    //showUpRefreshTab("bar_pinglun");
                },onAfter:function(){
                    //showDownRefreshTab("bar_pinglun");
                    self.showTipTitle();
                },onTouchEnd:function(){
                    //hideRefreshTab();
                    if(self.autoLoad){// 需要自动获取数据
                        if(self.scroller.y > 20){
                            if(self.director == 1 || self.director == 2){
                                self.loadData(0);
                            }
                        }else if(self.scroller.y < (self.scroller.maxScrollY - 20)){
                            if(self.director == 1 || self.director == 3){
                                self.loadingTipTitle();
                                self.loadData(1);
                            }
                        }
                    }
                }
            });

            self.loadData = function(direction){
                showSmallLoading();
                director = direction;// 方向

                if(self.refreshFlag == true){// 每次重新获取
                    if(direction == 0) {// 向前获取最新数据
                        self.contentObject.html('');
                        self.refresh();// 刷新缓存
                    }
                }

                if(self.isLoading == true){// 设置loading状态
                    return;
                }else{
                    self.isLoading = true;
                }

                var requestData = "";

                if(direction == 0){
                    requestData = self.generateData(0);
                }else{
                    requestData = self.generateData(1);
                }

                $.requestData(self.request,self.url,requestData, function(data){
                    // 如果self.key 与scrollerCache.currScroller 的key 相同，说明是相同的内容，执行，否则不执行
                    if(self.refreshFlag != true){
                        if(self.key != scrollerCache.currScroller.key){
                            hideSmallLoading();
                            self.hideTipTitle();
                            return;
                        }
                    }

                    if(data.preProcess){// 需要预先处理列表数据
                        if(data.slideData){
                            data.slideData = JSON.parse(data.slideData);
                            self.listDataPreProcesser(data.slideData);// 预先处理数据
                        }else{
                            self.listDataPreProcesser([]);// 预先处理数据
                        }
                    }


                    if(!data || !data.data || data.data.length <= 0){// 返回值为空，或返回值的result为空，或返回值的reslut的长度小于等于0，不做处理
                        //hideLoading();// 隐藏loading
                        hideSmallLoading();
                        self.hideTipTitle();

                        if(self.refreshFlag == true){// 每次重新获取
                            if(direction == 0) {// 向前获取最新数据
                                self.contentObject.html('');
                            }
                        }

                        setTimeout(function(){self.scroller.refresh();},100);

                        self.isLoading = false;

                        self.noDataProcesser(direction);// 处理没有数据的情况
                        return;
                    }

                    var dataList = data.data;
                    if(!(data.data instanceof Array)){
                        var tmp = new Array();
                        tmp.push(data.data);
                        dataList = tmp;
                    }

                    var content = templateUtil.render(self.templateId,dataList);// 根据模板ID,数据集和方向生成DOM
                    if(direction == 0) {// 向前获取最新数据
                        if(self.refreshFlag == true){// 每次重新获取
                            self.contentObject.html(content);
                            self.addTipTitle();
                        }else{
                            self.contentObject.prepend(content);// 如果是增量向前获取，则使用前插的方式
                            self.addTipTitle();
                        }
                    }else if(direction == 1){// 向后获取老的数据
                        if(self.refreshFlag == true){// 每次重新获取
                            self.contentObject.html(content);
                            self.addTipTitle();
                        }else{
                            //self.contentObject.append(content);// 如果是增量向前获取，则使用前插的方式
                            self.appendContent(content);
                        }
                    }


                    // 设置分页信息
                    try{

                        if(data.data){
                            self.currCount += data.data.length;
                        }

                        if(data.allCount){
                            self.allCount = data.allCount;
                        }

                        if(data.allPage){
                            self.allPage = data.allPage;
                        }

                        if(data.pageIndex){
                            self.pageIndex = data.pageIndex;
                        }
                    }catch(e){

                    }

                    setTimeout(function(){// 拼接内容字符串
                        self.content += content;// 控件的内容 暂时不缓存内容，因为数据变化很快
                        if(self.cacheData){
                            dataSet.add2Cache(dataList);
                        }

                        data = undefined;
                    },50);


                    setTimeout(function(){self.scroller.refresh();},100);

                    self.isLoading = false;
                    //hideLoading();// 隐藏loading

                    hideSmallLoading();
                    setTimeout(function(){self.scroller.refresh();},100);

                    if(direction == 0 || self.pageFlag == false){// 有数据时的处理
                        self.hasDataProcesser(dataList);
                    }
                },function(){
                    //hideLoading();// 隐藏loading
                    hideSmallLoading();
                    showMessage('网络异常，稍后再试');
                    setTimeout(function(){self.scroller.refresh();},100);
                    self.isLoading = false;
                });
            };
        }else{
            self = obj;
            scrollerCache.currScroller = self;// 当前滑动控件

            if(prop.paramters){
                self.paramters = prop.paramters;// 重新设置参数
            }

            self.scrollerObject = $("#" + prop.id);// 滑动控件对应的对象
            self.contentObject = $("#" + self.contentId);

            self.refresh = function(){
                setTimeout(function(){self.scroller.refresh();},100);
            };

            self.scrollTo = function(){
                self.scroller.scrollTo(0,0);
            };

            self.scroller = new iScroll(self.id,{// 创建滑动控件
                onScrollMove:function(){

                    if(self.autoLoad){// 需要自动获取数据
                        if(self.scroller.y > 20){
                            if(self.director == 1 || self.director == 2){
                                //self.showTipTitle();
                            }
                        }else if(self.scroller.y < (self.scroller.maxScrollY - 20)){
                            if(self.director == 1 || self.director == 3){
                                self.showTipTitle();
                            }
                        }
                    }
                },
                //bounce:false,
                //momentum:false,// 去掉惯性
                hScrollbar:false,
                //useTransform:false,// 去掉动画
                //useTransition:false,// 去掉动画
                onScrollEnd:function(){return false;},

                onBefore:function(){
                    //showUpRefreshTab("bar_pinglun");
                },onAfter:function(){
                    //showDownRefreshTab("bar_pinglun");

                },onTouchEnd:function(){
                    //hideRefreshTab();
                    if(self.autoLoad){// 需要自动获取数据
                        if(self.scroller.y > 20){
                            if(self.director == 1 || self.director == 2){
                                self.loadData(0);
                            }
                        }else if(self.scroller.y < (self.scroller.maxScrollY - 20)){
                            if(self.director == 1 || self.director == 3){
                                self.loadingTipTitle();
                                self.loadData(1);
                            }
                        }
                    }
                }
            });

            self.loadData = function(direction){

                if(self.refreshFlag == true){// 每次重新获取
                    if(direction == 0) {// 向前获取最新数据
                        self.contentObject.html('');
                    }
                }

                showSmallLoading();
                director = direction;// 方向
                if(self.isLoading == true){
                    return;
                }else{
                    self.isLoading = true;
                }

                var requestData = "";

                if(direction == 0){
                    requestData = self.generateData(0);
                }else{
                    requestData = self.generateData(1);
                }

                $.requestData(self.request,self.url,requestData, function(data){
                    // 如果self.key 与scrollerCache.currScroller 的key 相同，说明是相同的内容，执行，否则不执行
                    if(self.refreshFlag != true){
                        if(self.key != scrollerCache.currScroller.key){
                            hideSmallLoading();
                            self.hideTipTitle();
                            return;
                        }
                    }

                    if(data.preProcess){// 需要预先处理列表数据
                        if(data.slideData){
                            data.slideData = JSON.parse(data.slideData);
                            self.listDataPreProcesser(data.slideData);// 预先处理数据
                        }else{
                            self.listDataPreProcesser([]);// 预先处理数据
                        }
                    }

                    if(!data || !data.data || data.data.length <= 0){// 返回值为空，或返回值的result为空，或返回值的reslut的长度小于等于0，不做处理
                        //hideLoading();// 隐藏loading
                        hideSmallLoading();
                        self.hideTipTitle();

                        if(self.refreshFlag == true){// 每次重新获取
                            if(direction == 0) {// 向前获取最新数据
                                self.contentObject.html('');
                            }
                        }

                        setTimeout(function(){self.scroller.refresh();},100);

                        self.isLoading = false;

                        self.noDataProcesser(direction);// 处理没有数据的情况
                        return;
                    }

                    var dataList = data.data;
                    if(!(data.data instanceof Array)){
                        var tmp = new Array();
                        tmp.push(data.data);
                        dataList = tmp;
                    }

                    var content = templateUtil.render(self.templateId,dataList);// 根据模板ID,数据集和方向生成DOM
                    if(direction == 0) {// 向前获取最新数据

                        if(self.refreshFlag == true){// 每次重新获取
                            self.contentObject.html(content);
                            self.addTipTitle();
                        }else{
                            self.contentObject.prepend(content);// 如果是增量向前获取，则使用前插的方式
                            self.addTipTitle();
                        }

                    }else if(direction == 1){// 向后获取老的数据
                        if(self.refreshFlag == true){// 每次重新获取
                            self.contentObject.html(content);
                            self.addTipTitle();
                        }else{
                            //self.contentObject.append(content);// 如果是增量向前获取，则使用前插的方式
                            self.appendContent(content);
                        }
                    }

                    // 设置分页信息
                    try{

                        if(data.data){
                            self.currCount += data.data.length;
                        }

                        if(data.allCount){
                            self.allCount = data.allCount;
                        }

                        if(data.allPage){
                            self.allPage = data.allPage;
                        }

                        if(data.pageIndex){
                            self.pageIndex = data.pageIndex;
                        }
                    }catch(e){

                    }

                    setTimeout(function(){// 拼接内容字符串
                        self.content += content;// 控件的内容 暂时不缓存内容，因为数据变化很快
                        if(self.cacheData){
                            dataSet.add2Cache(dataList);
                        }

                        data = undefined;
                    },100);


                    setTimeout(function(){self.scroller.refresh();},100);
                    self.isLoading = false;
                    //hideLoading();// 隐藏loading
                    hideSmallLoading();
                    setTimeout(function(){self.scroller.refresh();},100);

                    if(direction == 0 || self.pageFlag == false){// 有数据时的处理
                        self.hasDataProcesser(dataList);
                    }
                },function(){
                    //hideLoading();// 隐藏loading
                    hideSmallLoading();
                    showMessage('网络异常，稍后再试');
                    setTimeout(function(){self.scroller.refresh();},100);
                    self.isLoading = false;
                });//.error(function(){
                //hideLoading();// 隐藏loading
                //hideSmallLoading();
                //self.scroller.refresh();//
                //});
            };
        };

        // 初始化控件开始
        {// 初始化滑动控件
            if(!self.isInit && self.isShare){// 如果dom元素为共享滑动控件元素，并且没有被初始化
                self.contentObject.html("");
                self.isInit = true;// 控件已经初始化

                // 初始化max,min
                self.isLoading = false;
                //dataSet.clear();// 清除映射数据
                setTimeout(function(){self.scroller.refresh();},100);

                if(self.refreshFlag == true){// 每次都是重新获取所有数据
                    self.loadData(self.firstdirector);//0
                }else{
                    if(self.content == ''){// 内容为空
                        self.loadData(self.firstdirector);// 0
                    }else{// 内容不为空

                        self.contentObject.append(self.content);

                        self.scroller.refresh();

                        setTimeout(function(){
                            self.scroller.refresh();
                            self.scroller.scrollTo(0,self.initPosition,200);
                        },100);
                        hideSmallLoading();// 隐藏loading

                        self.hasDataProcesser();// 处理有数据的时候
                    }
                }
            }

            return self;
        }// 初始化控件结束
    };

    // 导航功能开始
    window.status = 1;// 10:首页，20：选单，100：店铺首页,110：美食首页，120：尊享首页,130：活动首页，140：冰场首页，150：寻车首页
    // 1210:万象会，1220：消费卡,1230:会员登录，1240： 1310：商场活动，1320：店铺活动
    window.preStatus = 1;// 取值与status相同
    window.optStack = new Array();// 创用户的操作栈
    window.userHash = true;// 是否用户点击返回键盘返回
    window.deepth = 1;// 历史的深度

    window.pageStack = new Array();// 页面堆栈
    window.currPage = 'startUp';// 当前页面，启动app后默认当前页面为首页
    window.pushPage = function(page){// 进入页面
        pageStack.push(page);
    }
    window.popPage = function(){// 退出页面
        var page = pageStack.pop();
        return page;
    }
    window.getLastPage = function(){// 获取当前界面的前一个页面
        var prePage = pageStack[pageStack.length-1];
        return prePage;
    }

    window.preTimestamp = 0;// 是否正在执行

    window.enterPage = function(id){// 进入下一层界面
        var timestamep = 0;// 时间间隔

        if(preTimestamp != 0){
            var now = commUtil.getCurrTime();
            timestamep = now - preTimestamp;// 间隔

            if(timestamep > 400){
                timestamep = 0;
            }else{
                timestamep = 410 - timestamep;
            }
        }

        preTimestamp = commUtil.getCurrTime();

        setTimeout(function(){
            $("#"+id).addClass('enter');
            $("#" + id).css("display","block");
            pageStack.push(currPage);// 加入界面堆栈

            setTimeout(function(){
                $("#" + currPage).css("display","none");
                $("#"+id).removeClass('enter');
                currPage = id;// 当前界面为id所指界面
            },400);
        },timestamep);

    }

    window.leavePage = function(id){// 进入下一层界面
        var timestamep = 0;// 时间间隔

        if(preTimestamp != 0){
            var now = commUtil.getCurrTime();
            timestamep = now - preTimestamp;// 间隔

            if(timestamep > 400){
                timestamep = 0;
            }else{
                timestamep = 410 - timestamep;
            }
        }

        preTimestamp = commUtil.getCurrTime();

        setTimeout(function(){
            $("#" + id).css("display","block");

            var prePage = pageStack.pop();
            $("#" + currPage).addClass('leave');


            setTimeout(function(){
                $("#" + currPage).css("display","none");
                $("#" + currPage).removeClass('leave');
                currPage = id;// 当前界面为id所指界面
            },400);
        },timestamep);
    }

    window.toLeft = function(id){// 进入下一层界面
        $("#"+id).addClass('enter');
    }

    window.toRight = function(id){// 进入下一层界面
        $("#" + id).addClass('leave');
    }

    window.showPage = function(id,newValue){// 切换界面
        if(preStatus && preStatus == newValue){// 从下一层界面返回上一层界面
            return;
        }

        // 同层界面，不需要转场动画
        if((newValue == 10 || newValue == 20 || newValue == 30 || newValue == 40 || newValue == 50) && (preStatus == 1 || preStatus == 10 || preStatus == 20 || preStatus == 30 || preStatus == 40 || preStatus == 50)){
            preStatus = newValue;

            show(id);// 切换为新界面
            currPage = id;// 当前界面为id所指界面
            return;
        }

        if(preStatus && preStatus > newValue){// 从下一层界面返回上一层界面
            preStatus = newValue;

            leavePage(id);
            return;
        }

        // 用户进入下一层界面，需要进入动画
        if(preStatus){
            optStack.push(preStatus);// 加入界面索引堆栈
        }

        setHash(newValue);// 设置浏览器hash取值

        preStatus = newValue;
        enterPage(id);// 进入新一层界面
    }


    window.setHash = function(hash){// 设置浏览器的hash值
        userHash = false;
        window.location.hash = "#" + hash;
        deepth++;
    };

    window.onhashchange = function(e){// hash改变监听程序
        if(!userHash){
            userHash = true;// 恢复为用户触发的事件
            return;
        }else{
            deepth--;
            goBack(1);
        }
    };

    window.setStatus = function(newValue){// 设置当前所处状态
        if(preStatus && preStatus >= newValue){
            preStatus = newValue;
            return;
        }

        if((newValue == 10 || newValue == 20 || newValue == 30 || newValue == 40 || newValue == 50) && (preStatus == 1 || preStatus == 10 || preStatus == 20 || preStatus == 30 || preStatus == 40 || preStatus == 50)){
            preStatus = newValue;
            return;
        }

        if(preStatus){
            optStack.push(preStatus);
        }

        setHash(newValue);// 设置浏览器hash取值

        preStatus = newValue;
    }

    window.resetStatus = function(){
        optStack = new Array();
    }

    window.pushStatus = function(stauts){// 将指定状态直接放入操作堆栈中
        optStack.push(stauts);
    }

    window.backOnce = function(){// 清除一个状态
        return optStack.pop();
    }

    window.insertStatus = function(status){// 插入状态
        if(status){
            optStack.push(status);
        }
    }

    window.getStatus = function(type){// 设置场景堆栈
        var status = optStack.pop();
        if(!status){// 如果状态取值不存在，则设置为1
            status = 10;
            optStack.push(10);
            userHash = false;
            deepth = 1;
        }

        try{
            if(type != 1){
                userHash = false;
                window.history.back(-1);
            }
        }catch (e){}

        return status;
    };
})();

// md5 加密
(function(){
    window.hexcase = 0;
    window.b64pad  = "";
    window.chrsz   = 8;
    window.hex_md5 = function(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));};
    window.b64_md5 = function(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));};
    window.hex_hmac_md5 = function(key, data) { return binl2hex(core_hmac_md5(key, data)); };
    window.b64_hmac_md5 = function(key, data) { return binl2b64(core_hmac_md5(key, data)); };
    window.calcMD5 = function(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));};
    window.md5_vm_test = function(){
        return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
    };

    window.core_md5 = function(x, len){
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var a =  1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d =  271733878;

        for(var i = 0; i < x.length; i += 16){
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
            d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
            b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
            d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
            c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
            d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
            d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
            a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
            d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
            c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
            b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
            d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
            c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
            d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
            c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
            a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
            d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
            c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
            b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
            d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
            b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
            d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
            c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
            d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
            a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
            d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
            b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
            d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
            c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
            d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
            d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
            a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
            d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
            b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);

    };

    window.md5_cmn = function(q, a, b, x, s, t){
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
    };

    window.md5_ff = function(a, b, c, d, x, s, t){
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    };

    window.md5_gg = function(a, b, c, d, x, s, t){
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    };

    window.md5_hh = function(a, b, c, d, x, s, t){
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    };

    window.md5_ii = function(a, b, c, d, x, s, t){
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    };

    window.core_hmac_md5 = function(key, data){
        var bkey = str2binl(key);
        if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

        var ipad = Array(16), opad = Array(16);
        for(var i = 0; i < 16; i++){
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }

        var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
        return core_md5(opad.concat(hash), 512 + 128);
    };

    window.safe_add = function(x, y){
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };

    window.bit_rol = function(num, cnt){
        return (num << cnt) | (num >>> (32 - cnt));
    };

    window.str2binl = function(str){
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz)
            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
        return bin;
    };

    window.binl2hex = function(binarray){
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++){
            str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
                hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
        }
        return str;
    };

    window.binl2b64 = function(binarray){
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i += 3){
            var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
            for(var j = 0; j < 4; j++){
                if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
                else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
            }
        }
        return str;
    };
})();


var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
/**
 * base64编码
 * @param {Object} str
 */
function base64encode(str){
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}
/**
 * base64解码
 * @param {Object} str
 */
function base64decode(str){
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        /* c1 */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        }
        while (i < len && c1 == -1);
        if (c1 == -1)
            break;
        /* c2 */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        }
        while (i < len && c2 == -1);
        if (c2 == -1)
            break;
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = base64DecodeChars[c3];
        }
        while (i < len && c3 == -1);
        if (c3 == -1)
            break;
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = base64DecodeChars[c4];
        }
        while (i < len && c4 == -1);
        if (c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}
/**
 * utf16转utf8
 * @param {Object} str
 */
function utf16to8(str){
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        }
        else
        if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
        else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}
/**
 * utf8转utf16
 * @param {Object} str
 */
function utf8to16(str){
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += str.charAt(i - 1);
                break;
            case 12:
            case 13:
                // 110x xxxx 10xx xxxx
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx10xx xxxx10xx xxxx
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                break;
        }
    }
    return out;
}
//demo
//function doit(){
//    var f = document.f;
//    f.output.value = base64encode(utf16to8(f.source.value));
//    f.decode.value = utf8to16(base64decode(f.output.value));
//}
