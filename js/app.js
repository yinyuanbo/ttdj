// 配置定义
(function(){
    /**
     * 全局参数和服务器参数
     */
    window.config = {
        serviceServer:"http://a.iweyue.com/",// 数据接口服务服务器地址
        //serviceServer:"http://localhost:9090/",// 数据接口服务服务器地址
        //serviceServer:"http://a.scymh.com/",// 数据接口服务服务器地址

        //picServer:"http://222.214.218.193:8888/",// 包裹服务服务器地址
        picServer:"http://i.iweyue.com/uploadfile/",// 图片服务服务器地址
        picServer1:"http://i2.scymh.com/uploadfile/",// 图片服务服务器地址
        keyPreWord:"weiyue_",// 本地存储前缀
        buyKeyword:'bykyw',//购买关键字
        shelfKeyword:'weiyueshlf',//书架前缀
        radio:"radioKey",//频道
        userKey : "weiyueUserKey",// 用户key
        cityKey : "cityKey",// 城市key
        mapModeKey:2,//地图模式
        onMap:false,// 是否在地图上
        subBookType:"subBookType",// 购物车中的产品
        productsCount4ShoppingKey:"productsCount4ShoppingKey",// 购物车中的产品数量
        merchantFavoKey : "merchantFavoKey",// 收藏商户
        merchantCoupansKey:"merchantCoupansKey",// 商户优惠券缓存
        incomeHome:0,// 是否进入过首页0：没有进入 1：进入过
        bkkey:'bkkey',// 小说key前缀
        typeKey:"ttyhTypeKey",//类型key
        sgnKey:'wysg_',// 签到key
        rdmdKey:'rdmdKey',//阅读key
        mypositionkey:"mypositionkey",//我的位置
        defaultUserKey : "weiyuedefaultuserkey",// 用户默认key
        defaultShelfKey :"defaultShelfKey",// 书架默认key
        autoBuyKey:"autoBuyKey",//自动购买
        closeScreenKey:"closeScreenKey",// 关闭屏幕
        sychProgressKey:"sychProgressKey",//同步进度
        nightKey:"nightKey",//夜间模式
        sheflKeyword : "sheflKeyword",// 书架前缀
        city:"广元市",// 默认城市
        currCity:null // 当前城市
    };

    // 服务接口定义
    window.service = {
        // 公共接口
        getLimitFreeBooks : config.serviceServer + "common/getLimitFreeBooks", // 获取限免
        getBookRadioTopBonulist : config.serviceServer + "common/getBookRadioTopBonulist",// 获取频道打赏排行

        getBookRadioToplist : config.serviceServer + "common/getBookRadioToplist",// 频道点击排行
        getBookTopBonus : config.serviceServer + "common/getBookTopBonus",// 打赏排行
        getShareTopBooks : config.serviceServer + "common/getShareTopBooks",// 分享排行
        getCellectTopBooks : config.serviceServer + "common/getCellectTopBooks",// 收藏排行
        getClickTopBooks : config.serviceServer + "common/getClickTopBooks",// 点击排行
        getSubscribeTopBooks : config.serviceServer + "common/getSubscribeTopBooks",// 订阅排行
        getGroomTopBooks : config.serviceServer + "common/getGroomTopBooks",// 推荐排行

        getBookList : config.serviceServer + "common/getBookList",// 书单
        getActivity : config.serviceServer + "common/getActivity",// 活动

        getHomeInfo : config.serviceServer + "common/getHomeInfo", // 获取首页配置信息
        getBookType : config.serviceServer + "common/getBookType", // 获取小说类别信息

        // 消息和充值产品列表
        getMessageList : config.serviceServer + "common/getMessageList", // 获取消息列表
        getProductList : config.serviceServer + "common/getProductList", // 获取充值产品列表
        getRewardsList : config.serviceServer + "common/getRewardsList", // 获取道具列表

        // 用户接口
        regist : config.serviceServer + "user/regist", // 注册账号
        getAccount : config.serviceServer + "user/getAccount", // 认领账号
        login : config.serviceServer + "user/login", // 登陆系统
        findUserMessage : config.serviceServer + "user/findUserMessage", // 查询用户消息

        // 书架接口
        add2Shelf : config.serviceServer + "shelf/add2Shelf", // 添加到书架
        getShelfList : config.serviceServer + "shelf/getShelfList", // 获取书架列表
        delShelfList : config.serviceServer + "shelf/delShelfList", // 删除书架上的小说

        // 签到接口
        getSignRecordsList : config.serviceServer + "sign/getSignRecordsList", // 签到列表
        addSignRecord : config.serviceServer + "sign/addSignRecord", // 签到接口


        // 评论
        addCommite:config.serviceServer + "commit/addCommite",//评论
        getCommiteList:config.serviceServer + "commit/getCommiteList",// 查询评论
        goodCommit:config.serviceServer + "commit/goodCommit",// 赞一个

        setDefaultreceiveAddr : config.serviceServer + "receiveAddr/setDefaultreceiveAddr", // 设置默认收货地址

        validatePhone : config.serviceServer + "user/regist", // 验证手机号码
        changePassword : config.serviceServer + "user/changePassword", // 修改密码
        forgetPassword : config.serviceServer + "user/forgetPassword", // 忘记密码
        setPassword : config.serviceServer + "user/setPassword", // 设置密码
        setPersonInfo : config.serviceServer + "user/setPersonInfo", // 完善个人资料
        setReceiveAddr : config.serviceServer + "user/setReceiveAddr", // 添加收货地址
        getReceiveAddr : config.serviceServer + "user/getReceiveAddr", // 获取所有收货地址
        setDefaultAddr : config.serviceServer + "user/setDefaultAddr", // 设置默认收货地址
        getValidateCode : config.serviceServer + "user/getValidateCode", // 获取验证码

        bindCard : config.serviceServer + "user/bindCard", // 绑定卡号


        // 小说接口
        getBookListByType : config.serviceServer + "book/getBookListByType", // 根据类型获取小说列表
        getBook : config.serviceServer + "book/getBook", // 获取小说详细
        getContent : config.serviceServer + "book/getContent", // 获取章节内容
        getChapterList : config.serviceServer + "book/getChapterList", // 获取章节列表
        search4Key : config.serviceServer + "book/search4Key", // 查询小说

        // 拼单接口
        getPkproductList : config.serviceServer + "order/getPkproductList", // 获取拼单产品列表
        getPkorderList : config.serviceServer + "order/getPkorderList", // 获取拼单订单
        getPkProduct : config.serviceServer + "order/getPkProduct", // 获取拼单产品详细信息
        getPkOrder : config.serviceServer + "order/getPkOrder", // 获取拼单订单详细信息
        createPkOrder : config.serviceServer + "order/createPkOrder", // 创建拼单订单
        joinPkOrder : config.serviceServer + "order/joinPkOrder", // 获取商户门店信息列表
        process4Paypk:config.serviceServer + "order/process4Pay", // 拼单支付后的吃力

        // 充值 或 畅读订阅
        addRecharge : config.serviceServer + "vip/addRecharge", // 充值
        getRechargeList : config.serviceServer + "vip/getRechargeList", // 充值列表
        addVipOrder : config.serviceServer + "vip/addVipOrder", // 畅读
        addBonus : config.serviceServer + "vip/addBonus", // 打赏
        getBonusList : config.serviceServer + "vip/getBonusList", // 打赏列表

        addBookPay : config.serviceServer + "vip/addBookPay", // 订阅
        addBookRead : config.serviceServer + "vip/addBookRead", // 阅读
        getBookPayList4User : config.serviceServer + "vip/getBookPayList4User", // 订阅列表

        getVipOrderList : config.serviceServer + "vip/getVipOrderList", // 畅读订单列表

        process4Pay : config.serviceServer + "vip/process4Pay", // 畅读
        getUserBookPay : config.serviceServer + "vip/getUserBookPay", // 获取用户阅读权利

        //
        getMerchantDetail : config.serviceServer + "product/getMerchantDetail", // 获取商户详细信息
        getStoreList : config.serviceServer + "product/getStoreList", // 获取商户门店列表信息
        getStoreDetail : config.serviceServer + "product/getStoreDetail", // 获取门店详细信息
        getNearMerchant:config.serviceServer + "product/getNearMerchant", // 获取附件店铺


        // 订单接口
        choiseProduct : config.serviceServer + "order/choiseProduct", // 选购产品
        checkCoupan : config.serviceServer + "order/checkCoupan", // 检查优惠券
        buyProduct : config.serviceServer + "order/buyProduct", // 下单购买
        payOrder : config.serviceServer + "order/payOrder", // 支付订单
        cancleOrder : config.serviceServer + "order/cancleOrder", // 取消订单
        returnOrder : config.serviceServer + "order/returnOrder", // 退货
        getOrderList : config.serviceServer + "order/getOrderList", // 获取订单列表
        findOrder : config.serviceServer + "order/findOrder", // 查找订单列表
        processAfterPayment:config.serviceServer + "order/processAfterPayment", // 支付后的处理核对
        receiveProduct:config.serviceServer + "order/receiveProduct",//收货
        returnOrder:config.serviceServer + "order/returnOrder",// 退货
        sendComment:config.serviceServer + "order/sendComment",//评论
        findComment:config.serviceServer + "order/findComment",// 查询评论

        addCoupan2Card : config.serviceServer + "order/addCoupan2Card", // 添加优惠券到银行卡
        findCoupanList : config.serviceServer + "order/findCoupanList", // 优惠券列表

        // 评论接口
        addAdvice : config.serviceServer + "advice/addAdvice",  // 提交评论
        addSpecialAdvice : config.serviceServer + "advice/addSpecialAdvice",  // 提交特定评论
        getAdviceList : config.serviceServer + "advice/getAdviceList",  // 获取评论列表

        AddNotice : config.serviceServer + "advice/AddNotice",  // 发布物管通知信息
        ConfirmOrder : config.serviceServer + "Order/ConfirmOrder",// 完成订单
        UnifiedOrderApp  : config.serviceServer + "weixinpay/UnifiedOrderApp",// 下微信支付订单
        ResultNotify : config.serviceServer + "Order/ResultNotify",// 确认支付结果

        subBookType:"subBookType",// 小说二级分类
        getChapterList1:"getChapterList1",// 小说章节列表
        bookListDetail:"bookListDetail",// 书单详情

        chosenSliderKey:"chosenSliderKey", // 精选轮播广告
        oneCoinBuyKey:"oneCoinBuyKey", // 1元购轮播广告
        productListKey:"productListKey", // 产品类别轮播广告
        detailBigImagesKey:"detailBigImagesKey", // 详细大图
        myAddressList:"myAddressList",// 收货地址列表
        subProductType:'subProductType',// 二级模板
        MerchantProductItemKey:"MerchantProductItemKey", // 商户产品key
        starclasskey:"starclasskey", // 明星类型key
        cityareakey:"cityareakey", // 城市地区key
        tuangouProductsKey:"tuangouProductsKey",// 商户团购产品
        relativeProducts:"relativeProducts",//相关产品
        sameStoreKey:"sameStoreKey",// 同类产品
        cardListKey:"cardListKey",// 卡列表
        specileTypes:'specileTypes',//特殊类别
        getPkproductList1:'getPkproductList1',// 拼单产品列表
        getPkorderList1:'getPkorderList1',// 畅读拼单产品列表
        getProductList1:'getProductList1',// 产品列表
        dfShelfList:'dfShelfList',//默认推荐小说
        MyOrderList:"MyOrderList" // 我的订单列表


    };
})();

// 用户当前的位置
var myposition = {
    longitude:105.833197,
    latitude:32.452827,
    city:'中国'
};



//导航滑动
// var myScroll;
function loaded(){
    // setTimeout(function(){
    //      myScroll = new iScroller({
    //         id:"homeNav",
    //         hScroll: true,
    //         vScroll: false,
    //         autoLoad:true
    //     });
    // },100);
}
// window.addEventListener("load",loaded,false);



//首页轮播
staticScroll({
    scrollId:"bannerBox",
    pageCount:2,
    autoSlider:false,
    dot:"focusDot",
    dotSelect:"dotSelected"
});





//底部菜单导航
$(".footerItem").click(function () {
    $(".footerItem").removeClass("active");
    $(this).addClass("active");
    $(".homePage").hide();
    var showId = $(this).attr("data-url");

    if(showId == "CustomMade"){
        showId = "customized";

    }
    $("#"+showId).show();
    var scrollerId = eval(showId);
    var gettype=Object.prototype.toString;
    if(gettype.call(scrollerId)=="[object Object]"){
        setTimeout(function(){scrollerId.refresh();},50);
    }


});

//进入个人中心
function goPersonal(){
    showPage('personal',23);
}

//进入账号详情
function goAccount(){
    showPage('accountInformation',4210);
}

//首页选项卡
$("#homeNav li").click(function () {
    var showId = $(this).attr("data-url");
    if(showId == "shares"){
        goPage('shares',31);
    }else {
        $("#homeNav li").removeClass("active");
        $(this).addClass("active");
        $(".homeList").hide();
        $("#"+showId).show();
        setTimeout(function(){homeScroller.refresh();},50);
    }

});

//学报告与读党章选项卡
$("#reportAndConstitution div").click(function () {
    var showId = $(this).attr("data-url");
    $(".reportAndConstitution").hide();
    $("#"+showId).show();
    setTimeout(function(){homeScroller.refresh();},50);
});

//专家讲堂与大师讲堂选项卡
$("#expertAndMaster div").click(function () {
    var showId = $(this).attr("data-url");
    $(".expertAndMaster").hide();
    $("#"+showId).show();
    setTimeout(function(){homeScroller.refresh();},50);
});

//专家课堂选项卡
$(".classroomNavList").click(function () {
    $(".classroomNavList").removeClass("active");
    $(this).addClass("active");
})

//划线笔记详情
$("#noteMenu").on("click",".noteDetails", function() {
    goPage('lineNoteDetail',4272);
});

//笔记本详情
$("#noteBookDetail .personalListBox").on("click",".noteDetails", function() {
    goPage('notesDetails',331);
});




//学习笔记选项卡
$("#noteNav ul").on("click","li", function() {
    $("#noteNav li").removeClass("active");
    $(this).addClass("active");
    var showId = $(this).attr("data-url");
    $(".noteNav").hide();
    $("#"+showId).show();
    setTimeout(function(){note.refresh();},50);
});
var quizData = [{
    "id":1,
    "type":1,
    "text":"党的十九大同意在党章中明确实现“两个一百年”奋斗目标、实现中华民族（ ）的中国梦的宏伟目标。",
    "rightKey":"B",
    "rightText":"伟大复兴",
    "keyList":[{
        "key":"A",
        "text":"大国崛起"
    },{
        "key":"B",
        "text":"伟大复兴"
    }]
},{
    "id":2,
    "type":2,
    "text":"党的十九大一致同意，在党章中把习近平新时代中国特色社会主义思想同马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观一道确立为党的行动指南。",
    "rightKey":"A",
    "rightText":"正确",
    "keyList":[{
        "key":"A",
        "text":"正确"
    },{
        "key":"B",
        "text":"错误"
    }]
},{
    "id":3,
    "type":1,
    "text":"党的十九大强调，高举中国特色社会主义伟大旗帜，坚定道路自信、理论自信、制度自信、（ ），贯彻党的基本理论、基本路线、基本方略。",
    "rightKey":"B",
    "rightText":"文化自信",
    "keyList":[{
        "key":"A",
        "text":"国家自信"
    },{
        "key":"B",
        "text":"文化自信"
    }]
}]



//竞答选择
$(".quizContent").on("click",".answerList", function() {
    $(".quizContent .answerList").removeClass("active");
    $(this).addClass("active");
    var quizNumber = parseInt($("#quizNumber").text())-1;
    var quizText = $(this).find(".answers").text();
    var rightKey = quizData[quizNumber].rightKey;
    if(quizText == rightKey){
        $("#answerTitle").text("回答正确");
        $("#answerTitle").removeClass("error").addClass("correct");
    }else {
        $("#answerTitle").text("回答错误");
        $("#answerTitle").removeClass("correct").addClass("error");
    }
    $(".quizAnswer").show();
});

//下一题
function quizNext() {
    var quizNumber = parseInt($("#quizNumber").text())+1;
    $(".quizAnswer").hide();
    $("#prevNext").removeClass("disable");
    $("#prevNext").unbind();
    $("#prevNext").bind("click",prevNext);
    $("#quizNumber").text(quizNumber);
    if(quizData.length == quizNumber || quizData.length < quizNumber){
        $("#quizNext").addClass("disable");
        $("#quizNext").unbind();
    }
    quizLoad(quizNumber);
}

//上一题
function prevNext(){
    var quizNumber = parseInt($("#quizNumber").text())-1;
    $(".quizAnswer").hide();
    $("#quizNext").removeClass("disable");
    $("#quizNext").unbind();
    $("#quizNext").bind("click",quizNext);
    $("#quizNumber").text(quizNumber);
    if(quizNumber == 1){
        $("#prevNext").addClass("disable");
        $("#prevNext").unbind();
    }
    quizLoad(quizNumber);
}

//题目渲染
function quizLoad(quizNumber) {
    var data = quizData[quizNumber-1];
    $("#answerRight").html(data.rightKey + "&nbsp;&nbsp;&nbsp;" + data.rightText);
    if(data.type == 1){
        $(".quizIcon").attr("src","images/icon_19.png");
    }else {
        $(".quizIcon").attr("src","images/icon_20.png");
    }
    $("#quizText").text(data.text);
    $("#keyList").html("");
    var listHtml = "";
    for(j = 0,len = data.keyList.length; j < len; j++) {
        listHtml += '<div class="answerList"><div class="answers">'+data.keyList[j].key +'</div>' + data.keyList[j].text + '</div>';
    }
    $("#keyList").html(listHtml);
}

$("#quizNext").bind("click",quizNext);
// $("#prevNext").bind("click",prevNext);

//zzc20180809 划线笔记和转载
$("#noteDetail .homeNav").on("click","li", function() {
    $("#noteDetail .noteMenu").removeClass("active");
    $(this).addClass("active");
    var showId = $(this).attr("data-url");
    $("#noteDetail .personalListBox").hide();
    $("#"+showId).show();
    setTimeout(function(){noteDetail.refresh();},50);
});

//课件详情选项卡
$("#coursewareDetailsNav ul").on("click","li", function() {
    $("#coursewareDetailsNav li").removeClass("active");
    $(this).addClass("active");
    var showId = $(this).attr("data-url");
    //$(".courseIntro").hide();
    $("#"+showId).show();
    setTimeout(function(){courseIntroScroller.refresh();},50);
});

//商城选项卡
$("#studyStore .homeNav ul").on("click","li", function() {
    $("#studyStore .homeNav ul li").removeClass("active");
    $(this).addClass("active");
    var showId = $(this).attr("data-url");
    $(".storeScroller").hide();
    $("#"+showId).show();
    if(showId == "learnScroller"){
        $("#storeScreen").hide();
        setTimeout(function(){learnScroller.refresh();},50);
    }else {
        $("#storeScreen").show();
        setTimeout(function(){storeScroller.refresh();},50);
    }
    // setTimeout(function(){note.refresh();},50);
});

//要闻详情
$(".homeList ul").on("click","li", function() {
    var dataUrl = "newsDetails"+$(this).attr("data-url");
    var dataRefresh = "detailsBox"+$(this).attr("data-url");
    var scrollerId = eval(dataRefresh);
    var gettype=Object.prototype.toString;
    if(gettype.call(scrollerId)=="[object Object]"){
        setTimeout(function(){scrollerId.refresh();},50);
    }
    showPage(dataUrl,21);
    // setTimeout(function(){dataRefresh.refresh();},50);
});

//专家讲堂详情
$("#classroomScroller .classroomList").on("click","li", function() {
    goPage('studyplanadd',26);
    // setTimeout(function(){detailsBox.refresh();},50);
});


//学习资料
function studyData() {
    showPage('studyData',21);
    setTimeout(function(){studyScroller.refresh();},50);
}

//学习资料详情
$(".dataBox ul").on("click","li", function() {
    showPage('dataDetails',22);
    setTimeout(function(){dataScroller.refresh();},50);
});

// 活动分享
function goShare() {
    showPage('activityShare',21);
    setTimeout(function(){shareScroller.refresh();},50);
}

//知识竞赛
function goCompetition() {

}

//页面跳转
function goPage(id,pageNumber) {
    showPage(id,pageNumber);
    var scrollerId = eval(id);
    var gettype=Object.prototype.toString;
    if(gettype.call(scrollerId)=="[object Object]"){
        setTimeout(function(){scrollerId.refresh();},50);
    }
}

// 进入课件详情
$("#storeScroller ul").on("click","li", function() {
    goPage('coursewareDetails',22);
});
// 进入书籍详情
$("#bookScroller ul").on("click","li", function() {
    goPage('coursewareDetails',22);
});


// 课堂播放
$("#studyplanaddList ul").on("click", function() {
    goPage('video',29);
});

// 收藏播放
$("#collectionDetailScroller ul").on("click", function() {
    goPage('video',3411);
});

// 历史播放
$("#recordScroller").on("click",'.recordList', function() {
    goPage('video',351);
});

// 登录验证
$(".personalListBox").on("input propertychange","input.blueInput",function(){
    var valType = true;
    $("input.blueInput").each(function(){
        if($(this).val() == ""){
            $(".bt_login").addClass("disable");
            valType = false;
            return false;
        }
    });
    if(valType == true){
        $(".bt_login").removeClass("disable");
    }

});

//登录切换
$(".login2").on("click",function() {
    if($(this).text() == "使用密码登录"){
        $(this).text("使用验证码登录");
        $(".forget").show();
        $("#getCode").hide();
        $("#loginPasswd").html(' 密码&nbsp;&nbsp;&nbsp; <input type="password" class="blueInput" value="" placeholder="请输入密码"/>');
    }else {
        $(this).text("使用密码登录");
        $(".forget").hide();
        $("#getCode").show();
        $("#loginPasswd").html(' 验证码 <input type="text" class="blueInput" value="" placeholder="请输入验证码"/>');
    }
    $("input.blueInput").val();
    $(".bt_login").addClass("disable");
});

//zzc20180707 知识库详情跳转
function goLearnDetail(){
    showPage('learnDetail',4271);
    setTimeout(function(){learnDetail.refresh();},50);
}



//修改姓名
function goEditName(){
    showPage('editName',4212);
}
//修改个性签名
function goEditSignature(){
    showPage('editSignature',4214);
}
//原手机号验证
function goChangePhone1(){
    showPage('changePhone1',4215);
}
//原手机号验证
function goChangePhone2(){
    showPage('changePhone2',4216);
}
//修改密码
function goChangePasswd(){
    showPage('changePasswd',4217);
}
// 验证码计时
function getCheckCode1(){
    $(".getCheckCode1").html("重新获取（60）");
    $(".getCheckCode1").css("opacity","0.3");
}
function getCheckCode2(){
    $(".getCheckCode2").html("重新获取（60）");
    $(".getCheckCode2").css("opacity","0.3");
}
function getCheckCode3(){
    $(".getCheckCode3").html("重新获取（60）");
    $(".getCheckCode3").css("opacity","0.3");
}
//进入我关注的
function goMyAttention(){
    showPage('myAttention',4220);
}
//进入我关注的
function goAttentionMe(){
    showPage('attentionMe',4230);
}
//进入我的账户
function goMyAccount(){
    showPage('myAccount',4240);
}
// 选充值金额
var checkRed = 0; // 标志量
function checkMoney(money){
    var className = "";
    switch(money){
        case 10:
            className = ".payButton1";
            break;
        case 20:
            className = ".payButton2";
            break;
        case 30:
            className = ".payButton3";
            break;
        case 40:
            className = ".payButton4";
            break;
        case 50:
            className = ".payButton5";
            break;
        case 100:
            className = ".payButton6";
            break;

    }
    var backgroundColor = $(className).css("background-color"); // 字符串 rgb(255, 255, 255)
    if(backgroundColor == "rgb(255, 255, 255)" && (checkRed == 0)) { // 初次选取
        $(className).css("background-color","red");
        $(className).css("color","white");
        checkRed = money;
    }else if(checkRed == money) { // 初次选取之后可能点击自身  那么二者相等
        $(className).css("background-color","white");
        $(className).css("color","red");
        checkRed = 0;
    }else { // 初次选取之后接着选另外的   还原所有颜色 再调用方法
        $('.payButton').css("background-color","white");
        $('.payButton').css("color","red");
        checkRed = 0;
        checkMoney(money);
    }
}
//进入账户明细
function goMyAccountDetail(){
    showPage('myAccountDetail',4241);
}
//已购买
function goPurchased(){
    showPage('purchased',4250);
}
//已购买
function goOrderDetail(){
    showPage('orderDetail',4251);
}
//帮助中心
function goHelp(){
    showPage('help',4260);
}
//帮助中心详情
function goHelpDetail(){
    showPage('helpDetail',4261);
}

//保存学习计划
function savePlan() {
    goBackLoanHome();
    $(".homePage").hide();
    $("#studyplan5").show();
}












// 设置频道
function setRadio(radio){
    switch(radio){
        case 0:
            $("#womanradio").addClass('radioitemchecked');
            $("#manradio").removeClass('radioitemchecked');

            $("#rdi0").attr('src','images/rdc1.png');
            $("#rdi1").attr('src','images/rdc2.png');

            currRadio = radio;
            storeUtil.set(config.keyPreWord+config.radio,radio);// 保存在本地存储中
            break;

        case 1:
            $("#manradio").addClass('radioitemchecked');
            $("#womanradio").removeClass('radioitemchecked');

            $("#rdi0").attr('src','images/rdc2.png');
            $("#rdi1").attr('src','images/rdc1.png');

            currRadio = radio;
            storeUtil.set(config.keyPreWord+config.radio,radio);// 保存在本地存储中
            break;
    }
}


// 模板编译区
function init(){
    var noticeList =
        '{each list as d i} '
        // 广告
        + '<div class="focusContainerDiv"><div id="siftFoucus1" class="focusContainer">{each d.ads as data j}<div class="scrollItem" onclick="goStoreHome(\'{echo data.adsurl}\');"><img class="full" src="{echo P.picPath(data.icon)}"></div>{/each}</div><div class="focusDotDivBG"></div><div class="focusDotDiv"><div>{each d.ads as data j}<div id="siftFoucus1_{echo j}" class="{if j == 0}dotSelected{/if}{if j > 0}focusDot{/if}"></div>{/each}</div></div></div>'

        // 栏目菜单 分类 拼单等
        + '<div class="homeModules"><div class="homeModuleDiv" onclick="goBookTypes();"><div class="homeModulesIconDiv"><img class="homeModulesIcon" src="images/md1.png"></div><div class="homeModulesTitle">分类</div></div><div class="homeModuleDiv" onclick="goTopList();"><div class="homeModulesIconDiv"><img class="homeModulesIcon" src="images/md2.png"></div><div class="homeModulesTitle">排行</div></div><div class="homeModuleDiv" onclick="goFreeList();"><div class="homeModulesIconDiv"><img class="homeModulesIcon" src="images/md3.png"></div><div class="homeModulesTitle">限免</div></div><div class="homeModuleDiv" onclick="goAAOrder();"><div class="homeModulesIconDiv"><img class="homeModulesIcon" src="images/md4.png"></div><div class="homeModulesTitle">拼单</div></div></div>'

        // 消息提示
        + ' <div class="homeMessage" id="homeMessage"><div class="homeMessageIconDiv"><img src="images/messageicon.png" class="homeMessageIcon"></div><div class="homeMessageContent" id="homeMessageContent">小仙女 手气拼单赢得3000书券</div><div class="homeMessageCloseDiv" onclick="hideHomeMessage();"><img src="images/messageclose.png" class="homeMessageClose"></div ></div>'

        // 小说条目
        + '{each d.homeItem as data n}{echo P.dataSet.add2Cache(data.homeItemBook)}<div class="homeNewBooks"> <div class="homeNewBooksHeader"><div class="homeNewBooksHeaderTitle">{echo data.name}</div><div class="homeNewBooksHeaderIconDiv"><img src="images/headeritemicon.png" class="homeNewBooksHeaderIcon"></div></div><div class="homeNewBooksContent">{each data.homeItemBook as dd k} {if n % 2 == 0 }<div class="homeNewBooksItemDiv"  onclick="goBookDetail(\'{echo dd.books_id}\');"><div class="homeNewBooksItem"> <div class="homeNewBooksItemIconDiv"><img class="homeNewBooksItemIcon" src="{echo P.picPath(dd.icon)}"></div><div class="homeNewBooksItemInfoDiv"> <div class="homeNewBooksItemInfoTitle">{echo dd.books_name}</div><div class="homeNewBooksItemAuthorType"><div class="homeNewBooksItemAuthor">{echo dd.author}</div> <div class="homeNewBooksItemType">{echo dd.booktype}</div></div></div></div> </div>{/if}{if n % 2 == 1 }<div class="homeNewBooksItemDiv1"  onclick="goBookDetail(\'{echo dd.books_id}\');"><div class="homeNewBooksItem"><div class="homeNewBooksItemIconDiv1"><img class="homeNewBooksItemIcon" src="{echo P.picPath(dd.icon)}"></div><div class="homeNewBooksItemInfoDiv"><div class="homeNewBooksItemInfoTitle1">{echo dd.books_name}</div><div class="homeNewBooksItemAuthorType1"><div class="homeNewBooksItemAuthor2">{echo dd.author}</div> <div class="homeNewBooksItemType"></div></div></div></div></div>{/if}{/each}</div></div>{/each}'//{echo dd.booktype}
        + '{/each}';

    templateUtil.compile(service.getHomeInfo,noticeList);

    noticeList =

            // 当前阅读书籍
            '{each list as d i} {if i == 0}<div class="myCurrentBookDiv"  ><div class="myCurrentBookIconDiv" id="sbk_{echo d.books_id}" ontouchstart="startTourchBook();" ontouchend="endTouchBook(\'{echo d.books_id}\');" ontouchmove="touchMoveBook();"><div class="wait4check hide" id="ck_{echo d.books_id}"></div><img src="{echo P.picPath(d.icon)}" class="myCurrentBookIcon" id="myCurrentBookIcon"></div><div class="myCurrentBookTitleDiv"  ><div class="myCurrentBookTitle" id="myCurrentBookTitle">{echo d.books_name}</div><div class="myCurrentBookInfo"><div class="myCurrentBookProgress"><div class="myCurrentBookProgressInfo" id="myCurrentBookProgressInfo">{echo d.progress}</div><div class="myCurrentBookContinue"><img class="myCurrentBookContinueIcon" src="images/continueicon.png" ontouchstart="startTourchBook();" ontouchend="endTouchBook(\'{echo d.books_id}\');" ontouchmove="touchMoveBook();"></div><div class="myCurrentBookProgressTip" id="myCurrentBookProgressTip" ontouchstart="startTourchBook();" ontouchend="endTouchBook(\'{echo d.books_id}\');" ontouchmove="touchMoveBook();">继续阅读</div></div></div></div> </div>'

            // 背景
            + '<div class="bookheaderbg"></div><div class="focusContainerDiv filter" id="myCurrentBookIconBG" style="background-image:url({echo P.picPath(d.icon)})"></div>{/if}{/each}'

            // 消息提示
            + '<div style="margin-top: 20px;" > <div class="homeMessage"  id="homeMessage1"><div class="homeMessageIconDiv"><img src="images/messageicon.png" class="homeMessageIcon"></div><div class="homeMessageContent" id="homeMessageContent">小仙女 手气拼单赢得3000书券</div><div class="homeMessageCloseDiv" onclick="hideHomeMessage();"><img src="images/messageclose.png" class="homeMessageClose"></div></div><div id="homestarlist"><div class="homeNewBooks"><div class="homeNewBooksContent">'

            // 小说列表
            + '{each list as d i} {if i > 0}<div class="homeNewBooksItemDiv1" ontouchstart="startTourchBook();" ontouchend="endTouchBook(\'{echo d.books_id}\');" ontouchmove="touchMoveBook();"  id="sbk_{echo d.books_id}"><div class="homeNewBooksItem1"><div class="homeNewBooksItemIconDiv2"><div class="wait4check hide" id="ck_{echo d.books_id}"></div><img src="images/newicon.png" class="newicon"><img class="homeNewBooksItemIcon" src="{echo P.picPath(d.icon)}"></div><div class="homeNewBooksItemInfoDiv"><div class="homeNewBooksItemInfoTitle1">{echo d.books_name}</div><div class="homeNewBooksItemAuthorType2"><div class="homeNewBooksItemAuthor">{echo d.progress}</div></div> </div></div> </div> {/if}{/each}';

            //+ '<div class="homeNewBooksItemDiv1" onclick="goAddShelf();"><div class="homeNewBooksItem1"><div class="addBookDiv"><img class="homeNewBooksItemIcon" src="images/addbook.png"></div></div></div></div></div></div></div>';

    templateUtil.compile(service.getShelfList,noticeList);

    // 默认书架推荐小说
    noticeList ='{each list as d i} {if d.myradio == P.currRadio}<div class="homeNewBooksItemDiv1" onclick="goMyReader(\'{echo d.books_id}\');"  id="sbk_{echo d.books_id}"><div class="homeNewBooksItem1"><div class="homeNewBooksItemIconDiv2"><div class="wait4check hide" id="ck_{echo d.books_id}"></div><img src="images/newicon.png" class="newicon"><img class="homeNewBooksItemIcon" src="{echo P.picPath(d.icon)}"></div><div class="homeNewBooksItemInfoDiv"><div class="homeNewBooksItemInfoTitle1">{echo d.books_name}</div><div class="homeNewBooksItemAuthorType2"><div class="homeNewBooksItemAuthor">&nbsp;&nbsp;&nbsp;&nbsp;</div></div> </div></div> </div> {/if}{/each}'
        + '<div class="homeNewBooksItemDiv1" onclick="goLoanHome();"><div class="homeNewBooksItem1"><div class="addBookDiv"><img class="homeNewBooksItemIcon" src="images/addbook.png"></div></div></div></div></div></div></div>';
    templateUtil.compile(service.dfShelfList,noticeList);


    // 小说类别
    noticeList = '{each list as d i}{if d.myradio == P.currRadio}<div class="bigClassItem {if i == 0}bigClassItemChecked{/if}" did="{echo d.id}">{echo d.name}</div> {/if}{/each}';
    templateUtil.compile(service.getBookType,noticeList);

    // 小说二级分类
    noticeList = '{echo P.dataSet.add2Cache(list)}{each list as d i}<div class="smallClassItem"  did="{echo d.id}"><div class="smallClassItemIconDiv"  did="{echo d.id}"><img src="{echo P.picPath(d.icon)}" class="smallClassItemIcon"  did="{echo d.id}"></div><div class="smallClassItemTitle"  did="{echo d.id}">{echo d.name}</div></div>{/each}';
    templateUtil.compile(service.subBookType,noticeList);


    // 小说排行榜列表
    noticeList = '{each list as d i}<div class="listItem" did="{echo d.books_id}"><div class="listItemOrderDiv{if i==0}1{/if}{if i>0}2{/if}" did="{echo d.books_id}">{echo i+1}</div><div class="listItemIconDiv" did="{echo d.books_id}"><img src="{echo P.picPath(d.icon)}" class="listItemIcon" did="{echo d.books_id}"></div><div class="listItemInfoDiv" did="{echo d.books_id}"><div class="listItemTitle" did="{echo d.books_id}">{echo d.books_name}</div><div class="listItemAuthor" did="{echo d.books_id}">{echo d.author}</div><div class="listItemAuthorTypes" did="{echo d.books_id}"><div class="listItemType" did="{echo d.books_id}">{echo d.booktype}</div><div class="listItemCount" did="{echo d.books_id}">字数：{echo P.parseInt(d.wordcounts/10000)}万字</div></div><div class="listItemDesc" did="{echo d.books_id}">{echo d.descp}</div></div></div>{/each}';
    templateUtil.compile(service.getGroomTopBooks,noticeList);

    // 限免列表
    noticeList = '{each list as d i}<div class="listItem" did="{echo d.books_id}"><div class="freeFlag" did="{echo d.books_id}">免</div><div class="listItemIconDiv" did="{echo d.books_id}"><img src="{echo P.picPath(d.icon)}" class="listItemIcon" did="{echo d.books_id}"></div><div class="listItemInfoDiv" did="{echo d.books_id}"><div class="listItemTitle" did="{echo d.books_id}">{echo d.books_name}</div><div class="listItemAuthor" did="{echo d.books_id}">{echo d.author}</div><div class="listItemAuthorTypes" did="{echo d.books_id}"><div class="listItemType" did="{echo d.books_id}">{echo d.booktype}</div><div class="listItemCount" did="{echo d.books_id}">字数：{echo P.parseInt(d.wordcounts/10000)}万字</div></div><div class="listItemDesc" did="{echo d.books_id}">{echo d.descp}</div></div></div>{/each}';
    templateUtil.compile(service.getLimitFreeBooks,noticeList);


    // 活动列表
    noticeList = '{each list as d i}<div class="activityItem" did="{echo d.id}"><div class="activityItemIconDiv" did="{echo d.id}"><img class="activityItemIcon" src="{echo P.picPath(d.icon)}" did="{echo d.id}"></div><div class="activityItemTitle" did="{echo d.id}">{echo d.name}</div><div class="activityReadMore" did="{echo d.id}"><div class="activityReadMoreTitle" did="{echo d.id}">阅读全文</div><div class="goIconDiv" did="{echo d.id}"><img class="goIcon" src="images/goicon.png" did="{echo d.id}"></div></div></div>{/each}';
    templateUtil.compile(service.getActivity,noticeList);

    // 书单列表
    noticeList = '{each list as d i}<div class="activityItem2" did="{echo d.id}" dty="1"><div class="activityItemIconDiv" did="{echo d.id}" dty="1"><img class="activityItemIcon" src="{echo P.picPath(d.icon)}" did="{echo d.id}" dty="1"></div><div class="activityItemTitle" did="{echo d.id}" dty="1">{echo d.name}</div></div>{/each}';
    templateUtil.compile(service.getBookList,noticeList);

    // 书单详情
    noticeList = '{each list as d i}<div class="activityItem1" did="{echo d.id}" dty="1"><div class="activityItemIconDiv" did="{echo d.id}" dty="1"><img class="activityItemIcon" src="{echo P.picPath(d.icon)}" did="{echo d.id}" dty="1"></div><div class="activityItemTitle" did="{echo d.id}" dty="1">{echo d.name}</div></div>{each d.books as data k}<div class="listItem" did="{echo data.books_id}" dty="2"><div class="listItemIconDiv" did="{echo data.books_id}" dty="2"><img src="{echo P.picPath(data.icon)}" class="listItemIcon" did="{echo data.books_id}" dty="2"></div><div class="listItemInfoDiv" did="{echo data.books_id}" dty="2"><div class="listItemTitle" did="{echo data.books_id}" dty="2">{echo data.books_name}</div><div class="listItemDesc" did="{echo data.books_id}" dty="2">{echo data.descp}</div><div class="listItemAuthorTypes" did="{echo data.books_id}" dty="2"><div class="listItemAuthor" did="{echo data.books_id}" dty="2">{echo data.author}</div><div class="listItemCount" did="{echo data.books_id}" dty="2">{echo data.wordcounts}</div><div class="listItemType" did="{echo data.books_id}" dty="2">{echo data.booktype}</div></div></div></div>{/each}{/each}';
    templateUtil.compile(service.bookListDetail,noticeList);

    // 小说列表
    noticeList = '{each list as d i}<div class="listItem" did="{echo d.id}"><div class="listItemIconDiv" did="{echo d.id}"><img src="{echo P.picPath(d.icon)}" class="listItemIcon" did="{echo d.id}"></div><div class="listItemInfoDiv" did="{echo d.id}"><div class="listItemTitle" did="{echo d.id}">{echo d.name}</div><div class="listItemDesc" did="{echo d.id}">{echo d.descp}</div><div class="listItemAuthorTypes" did="{echo d.id}"><div class="listItemAuthor" did="{echo d.id}">{echo d.author}</div><div class="listItemCount" did="{echo d.id}">{echo d.wordcounts}</div><div class="listItemType" did="{echo d.id}">{echo d.booktype_name}</div></div></div></div>{/each}';
    templateUtil.compile(service.getBookListByType,noticeList);

    // 章节列表
    noticeList = '{each list as d i}<div class="bookChaptersItem" did="{echo i}">{echo d.name}{if d.vipflag == 1}<img src="images/lockedicon.png" class="lockIcon" did="{echo d.id}">{/if}</div>{/each}{echo P.addChapter2Book(list)}';
    templateUtil.compile(service.getChapterList,noticeList);

    noticeList = '{each list as d i}<div class="bookChaptersItem bgColor11" did="{echo i}">{echo d.name}{if d.vipflag == 1}<img src="images/lockedicon.png" class="lockIcon" did="{echo d.id}">{/if}</div>{/each}{echo P.addChapter2Book(list)}';
    templateUtil.compile(service.getChapterList1,noticeList);

    // 拼单产品列表
    noticeList = '{each list as d i}<div class="luckypkProdcutItem" onclick="createLuckPkOrder(\'{echo d.id}\')"><div class="luckypkProdcutItemContent"><div class="luckypkProdcutItemTitle">{echo d.winnerbonus}<span class="luckypkProdcutItemTitleUnit">书币</span></div><div class="luckypkProdcutItemTitle1">{echo d.loserbonus}书券</div><div class="luckypkProdcutItemPirce">￥{echo d.price}<span class="luckypkProdcutItemOrginPirce">￥{echo d.amount}</span></div></div></div>{/each}';
    templateUtil.compile(service.getPkproductList,noticeList);

    // 畅读拼单产品列表
    noticeList = '{each list as d i}<div class="luckypkProdcutItem" onclick="createVipPkOrder(\'{echo d.id}\')"><div class="luckypkProdcutItemContent"><div class="luckypkProdcutItemTitle">{echo d.name}<span class="luckypkProdcutItemTitleUnit">畅读</span></div><div class="luckypkProdcutItemTitle1">长篇免费 短篇免费</div><div class="luckypkProdcutItemPirce">￥{echo d.price} <span class="luckypkProdcutItemOrginPirce">￥{echo d.totalvalues}</span></div></div></div>{/each}';
    templateUtil.compile(service.getPkproductList1,noticeList);

    // 拼单订单列表
    noticeList = '{each list as d i}<div class="homeLuckypkItemDiv" onclick="goLuckPkProductDetail(\'{echo d.id}\');"><div class="homeLuckyItemContent"><div class="homeLuckyItemInfo" ><div class="homeLuckyItemFounder"><div class="homeLuckyItemIconDiv">{each d.members as dd k}{if k ==0}<img src="{echo P.picHeader(dd.icon)}" class="luckypkicon"></div><div class="homeLuckyItemFounderName">{echo dd.members_name}</div>{/if}{/each}</div><div class="homeLuckyItem"><div class="homeLuckyNo">单号:{echo d.orderno}</div><div class="homeLuckyCoins">{echo d.winnerbonus}书币</div><div class="homeLuckyQuan">{echo d.loserbonus}书券</div></div><div class="homeLuckyOrginPrice">总价值：￥{echo d.totalvalues}</div></div><div class="homeLuckyPriceItem"><div class="homeLuckyPrice">￥{echo d.price}<div class="joinBt" >加入</div></div></div></div></div>{/each}';
    templateUtil.compile(service.getPkorderList,noticeList);

    // 畅读拼单订单列表
    noticeList = '{each list as d i}<div class="homeLuckypkItemDiv" onclick="goVipPkProductDetail(\'{echo d.id}\');"><div class="homeLuckyItemContent"><div class="homeLuckyItemInfo"><div class="homeLuckyItemFounder"><div class="homeLuckyItemIconDiv"><div class="vippkicon">{echo d.name}</div></div></div><div class="homeLuckyItem"><div class="homeVipNo">单号:{echo d.orderno}</div><div class="homeLuckyCoins">长篇免费</div><div class="homeLuckyQuan">短篇免费</div></div><div class="homeLuckyOrginPrice">原价：￥{echo d.price}</div><div class="patternItem">{each d.members as dd k}<div class="homePartternIconDiv"><img src="{echo P.picHeader(dd.icon)}" class="homePartternIcon"></div>{/each}{echo P.addDefaultIcon(d.pkcounts,d.members.length)}</div></div><div class="homeLuckyPriceItem"><div class="homeLuckyPrice">￥120<div class="joinBt" >加入</div></div></div></div></div>{/each}';
    templateUtil.compile(service.getPkorderList1,noticeList);


    // 打赏产品
    noticeList = '{each list as d i}<div class="rewardsitem"><div class="rewardsitemcontent {if d==0}rewardsitemcontentchecked{/if}" onclick="setReward(\'{echo d.id}\',this);"><img src="{echo P.picPath(d.icon)}" class="rewardicon"><div class="rewardprice">{echo d.price}书币</div></div></div>{/each}';
    templateUtil.compile(service.getRewardsList,noticeList);

    // 充值产品
    noticeList = '{each list as d i}<div class="chargeProductItem" ><div class="chargeProductItemContent" onclick="setChargeProduct(\'{echo d.id}\',this,{echo d.price});"><div class="chargeProductItemName"><span class="chargeProductItemNameCount">{echo d.name}</span></div><div class="chargeProductItemGift">{if d.copans > 0}送{echo d.copans}书券{/if}</div><div class="chargeProductItemPrice">￥{echo d.price}</div></div></div>{/each}';
    templateUtil.compile(service.getProductList,noticeList);

    // 畅读产品
    noticeList = '{each list as d i}<div class="chargeProductItem"><div class="chargeProductItemContent"  onclick="setVipProduct(\'{echo d.id}\',this,{echo d.price});"><div class="chargeProductItemName"><span class="chargeProductItemNameCount">{echo d.name}</span></div> <div class="chargeProductItemGift">免费畅读</div><div class="chargeProductItemPrice">￥{echo d.price}</div></div></div>{/each}';
    templateUtil.compile(service.getProductList1,noticeList);


    // 评论列表
    noticeList = '{each list as d i}<div class="commentItem"> <div class="commentItemIconDiv"><img src="{echo P.picPath(d.icon)}" class="commentItemIcon"></div> <div class="commentContent"><div class="commentContentHeader"><div class="commentContentHeaderAuthorDate"><div class="commentContentHeaderAuthor">{echo d.members_name}</div><div class="commentContentHeaderDate">{echo P.commUtil.transformDate(d.committime)} </div> </div><div class="commentContentHeaderGoodsSends"> <div class="commentItemOptItem"><div class="commentItemOptItemIconDiv"  onclick="goSendCommit();"><img src="images/comments.png" class="commentItemOptItemIcon"></div><div class="commentItemOptItemTitle">({echo d.counts})</div> </div><div class="commentItemOptItem"  onclick="goodCommit(\'{echo d.id}\');"><div class="commentItemOptItemIconDiv"><img src="images/goodicon.png" class="commentItemOptItemIcon"></div> <div class="commentItemOptItemTitle" id="gd_{echo d.id}" did="{echo d.goods}">({echo d.goods})</div></div></div></div><div class="commentContentBody">{echo d.content}</div></div></div>{/each}';
    templateUtil.compile(service.getCommiteList,noticeList);

    // 充值列表
    noticeList = '{each list as d i}<div class="rechargeItem"><div><div class="rechargeNo">{echo d.name}</div><div class="rechargeAccount">￥{echo d.price}</div></div><div><div class="rechargeWay">{echo d.channel}</div><div class="rechargeDate">{echo d.paytime}</div></div></div>{/each}';
    templateUtil.compile(service.getRechargeList,noticeList);

    // 打赏列表
    noticeList = '{each list as d i}<div class="rewardItem"><div class="rewardTitle">{echo d.books_name}</div><div class="rewardDate">{echo P.commUtil.transformDate(d.createtime,"yyyy-MM-dd")}</div><div class="rewardCount">{echo d.price}</div></div>{/each}';
    templateUtil.compile(service.getBonusList,noticeList);

    // 订阅列表
    noticeList = '{each list as d i}<div class="rechargeItem"><div><div class="rechargeNo">{echo d.chapters_name}</div><div class="rechargeAccount">{echo d.price}书币</div></div><div><div class="rechargeWay">{echo d.books_name}</div><div class="rechargeDate">{echo P.commUtil.transformDate(d.createtime,"yyyy-MM-dd")}</div></div></div>{/each}';
    templateUtil.compile(service.getBookPayList4User,noticeList);

    // 畅读列表
    noticeList = '{each list as d i}<div class="rewardItem"><div class="rewardTitle">{echo d.name}</div><div class="rewardDate">{echo P.commUtil.transformDate(d.createtime,"yyyy-MM-dd")}</div><div class="rewardCount">{echo d.price}</div></div>{/each}';
    templateUtil.compile(service.getVipOrderList,noticeList);

    // 畅读列表
    noticeList = '{each list as d i}<div class="messageItem" onclick="readMsg(\'echo d.id}\')"><div class="messageDate">{echo P.commUtil.transformDate(d.sendtime,"yyyy-MM-dd")}</div><div class="messageContentDiv"><div class="myMessageTitle">{echo d.title}</div><div class="messageContent">{echo d.contents}</div></div></div>{/each}';
    templateUtil.compile(service.findUserMessage,noticeList);


    loginUser = storeUtil.getJson(config.userKey);// 存储到本地缓存

    if(loginUser){
        login4Phone();// 自动登陆
    }else{
    }

    // 设置阅读模式
    readOptMoel = storeUtil.get(config.rdmdKey);// 设置阅读模式
    if(!readOptMoel){
        readOptMoel = 1;
    }

    initAutoBuyModel();// 初始化自动购买
    initReadModel();// 初始化阅读模式
    initSychModel();// 初始化同步进度

    // 加载书架中默认的小说
    loadShelfBook();

}

var productTypes = null;// 类别
var currBigClass;// 当前大类
function processProductType(){// 处理产品类别

    var productTypes1 = storeUtil.getJson(config.typeKey);// 首先获取类型

    if(productTypes == null){// 设置为空
        productTypes = {};
    }

    var data = {};
    data.city = config.city;
    $.requestData(2,service.getBookType,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){
            for(var i = 0; i < result.data.length; ++i){// 放入缓存
                var d = result.data[i];
                productTypes[d.id] = d;
            }

            var content = templateUtil.render(service.getBookType,result.data);
            $("#classFilterPanelContents").html(content);

            setTimeout(function(){// 保存到本地
                storeUtil.set(config.typeKey,productTypes);
            },100);
        }
    },function(){// 设置类型
        productTypes = productTypes1;

    });
}

// 添加到书架
function goAddShelf(){

}


function search4Key(inputKey){// 查询
    var value = $("#" + inputKey).val();
    if(value == ''){
        showMessage('请输入搜索的关键字');
        return;
    }

    var data = {};
    data.name = value;

    var propertyScroller = new iScroller({
        id:"searchHomeScroller",
        url:service.search4Key,
        templateId:service.getBookListByType,
        paramters:data,// 查询条件进行查询
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"searchHomeContent",
        refreshFlag:false,
        noDataProcesser:function(d){
            if(d == 0){// 没有数据
                //showMessage('没有找到相关产品');
                //goBack();
                show2("searchTip");

                setTimeout(function(){
                    hide("searchTip");
                },4000);
            }
        },
        cacheData:true
    });

    return false;
}



var loginUser = null;// 登陆的用户
var homeRequestTimer = 1;// 首页定时刷新
var loginInterl = 20; // 登陆间隔时间
var loginTime = loginInterl * 60 * 1000;// 20分钟登录一下
var login4Buy = false;// 登陆是否为了购买

var distanceInterl = 10;// 10秒计算一次

function login4Phone(){// 登陆
    var data = {}; // 请求数据
    data.phone = loginUser.phone;
    data.password = loginUser.password;

    $.requestData(2,service.login,$.toJasonParams(data),function(result){// 提交服务器
        loginTime = loginInterl * 60 * 1000;// 20分钟登录一下

        if(result.status == 1){
            var data = result.data;

            if(data.opt == 0){// 没有注册
                hide('login4Phone');// 隐藏登录窗口

                $("#bindbt").html('注册');
                registFlag = 1;
                $("#registTel").val($("#loginName").val());
                $("#registPassword").val($("#password").val());

                showMessage('手机尚未注册，您可立马注册');

                show2("regist");
            }else if(data.opt == 1){// 正确登录
                hide('login4Phone');// 隐藏登录窗口

                loginUser = data;// 登陆信息
                loginSuccess();// 登录成功
            }else if(data.opt == 2){// 没有认领
                hide('login4Phone');// 隐藏登录窗口

                $("#bindbt").html('认领');
                registFlag = 2;
                $("#registTel").val($("#loginName").val());
                $("#registPassword").val($("#password").val());

                showMessage('账号待认领，您可立马认领');
                show2("regist");
            }
        }

    },function(){

    });
}

var registFlag = 1;// 1 注册 2 认领
function login(){// 登陆
    var data = {};

    var val = $("#loginName").val();// 手机号码
    if(val == ''){
        $("#loginName").attr('placeholder','手机号码必须填写');
        return;
    }else{

        if(validator.validateTel(val)){
            data.phone = val;
        }else{
            $("#loginName").attr('placeholder','手机号码非法，请纠正');
            $("#loginName").val('');
            return;
        }
    }

    val = $("#password").val();// 密码
    if(val == ''){
        $("#password").attr('placeholder','登录密码必须填写');
        return;
    }else{
        data.password = val;
    }

    data.gender = currRadio;// 男女频道

    showLoading();

    $.requestData(1,service.login,$.toJasonParams(data),function(result){// 提交服务器
        hideLoading();
        if(result.status == 1){
            var data = result.data;

            if(data.opt == 0){// 没有注册
                hide('login4Phone');// 隐藏登录窗口

                $("#bindbt").html('注册');
                registFlag = 1;
                $("#registTel").val($("#loginName").val());
                $("#registPassword").val($("#password").val());

                showMessage('手机尚未注册，您可立马注册');

                show2("regist");
            }else if(data.opt == 1){// 正确登录
                //getStatus();

                loginUser = data;// 登陆信息
                loginSuccess();// 登录成功
                backOnce();
                goBack();// 返回
            }else if(data.opt == 2){// 没有认领
                hide('login4Phone');// 隐藏登录窗口

                $("#bindbt").html('认领');
                registFlag = 2;
                $("#registTel").val($("#loginName").val());
                $("#registPassword").val($("#password").val());

                showMessage('账号待认领，您可立马认领');
                show2("regist");
            }
        }else{
            showMessage(result.message);
        }
    },function(){
        showMessage("网络异常，稍后重试");
        hideLoading();
    });
}

// 登陆或退出
function goLoginOut(){
    if(loginUser == null){
        go4Login();
    }else{
        exit();
    }
}

function loginSuccess(){// 登陆处理
    if(loginUser.name){// 用户名
        if(loginUser.name.length > 10){
            $("#myName").html('1**' + loginUser.name.substr(7));
        }else{
            $("#myName").html(loginUser.name);
        }

        $("#myId").html('ID：' + loginUser.oid);

    }

    hide("loginOut");
    show2('myicon');
    show2('myexit');

    if(loginUser.phone){// 电话号码
        $("#myTel").html(loginUser.phone);
    }


    if(loginUser.headericon){
        $("#myheadericon").attr('src',picPath(loginUser.headericon));
    }

    $("#myLoveMerchant").html(loginUser.amount);// 书币

    $("#myLoveProducts").html(loginUser.coupanbalance);// 书券
    $("#exploerCount").html(loginUser.totalrecharge);// 充值


    setTimeout(function(){storeUtil.set(config.userKey,loginUser);},30);//  保存用户信息
}



// 微信登录
function regist(){// 验证手机号码
    var data = {};

    var val = $("#registTel").val();// 手机号码
    if(val == ''){
        $("#registTel").attr('placeholder','手机号码必须填写');
        return;
    }else{

        if(validator.validateTel(val)){
            data.phone = val;
        }else{
            $("#registTel").attr('placeholder','手机号码非法，请纠正');
            $("#registTel").val('');
            return;
        }
    }

    val = $("#validateCode").val();// 验证码
    if(val == ''){
        $("#validateCode").attr('placeholder','验证码必须填写');
        return;
    }

    data.validateCode = val;// 验证码

    if(loginUser.validateCode != val){
        $("#validateCode").val('');
        $("#validateCode").attr('placeholder','验证码错误');
        return;
    }

    /*
    val = $("#registPassword").val();// 密码
    if(val == ''){
        $("#registPassword").attr('placeholder','登录密码必须填写');
        return;
    }else{
        data.password = val;
    }*/

    data.gender = currRadio;// 男女频道
    showLoading();

    $.requestData(2,service.regist,$.toJasonParams(data),function(result){// 提交服务器
        hideLoading();
        if(result.status == 1){

            var dt = result.data;

            loginUser = result.data;
            loginSuccess();// 登录成功

            if(dt.opt == 2){// 设置密码
                go4SetPassword();
            }else{
                goBack();// 返回
            }
        }else{
            showMessage(result.message);
        }
    },function(){
        //showMessage("网络异常，稍后重试");
        hideLoading();
    });
}

function sendComment(){// 评论
    var data = {};
    if($("#commentText").val() == ''){
        $("#commentText").attr('placeholder','还是说点啥吧');
        showMessage("评论内容必须填写");
        return;
    }else{
        data.content = $("#commentText").val();
    }

    data.token = loginUser.token;
    data.zone = currBook.oid;// 分区

    data.books_id = currBook.id;
    data.books_name = currBook.name;

    if(currBookVolum){
        data.bookvolumes_id = currBookVolum.di;
        data.bookvolumes_name = currBookVolum.name;
    }

    if(currChapter){
        data.chapters_id = currChapter.di;
        data.chapters_name = currChapter.name;
    }

    showLoading();
    $.requestData(2,service.addCommite,$.toJasonParams(data),function(result){// 提交服务器
        hideLoading();
        if(result.status == 1){
            goBack();

            setTimeout(function(){
                try{
                    if(coupansScorller != null){
                        coupansScorller.loadData(0);
                    }
                }catch (e){}
            },1000);

        }else{
            showMessage(result.message);
        }
    },function(){
        //showMessage("网络异常，稍后重试");
    });
}

var favosMerchants = [];// 商户收藏

function hasFavos(id){// 是否已经收藏
    var favoValue = storeUtil.get(id);

    if(favoValue){// 已经收藏
        return true;
    }else{// 没有收藏
        return false;
    }
}


function forgetPassword(){// 忘记密码
    hide('login');

    if($("#loginPhone").val() != ''){
        if(validator.validateTel($("#loginPhone").val())){
            $('#yourPhone').val($("#loginPhone").val());
        }
    }

    show2('forgetPassword');
}

function goChangeName(){// 显示修改姓名
    show2("changeName");
}

function changeName(){// 修改名称
    var data = {token:loginUser.token};
    if($("#changeUsername").val() == ''){
        $("#changeUsername").attr('placeholder','用户名必须输入');
        return;
    }else{
       loginUser.name = $("#changeUsername").val();
    }

    data.id = loginUser.id;
    data.name = 'name';
    data.value = loginUser.name;
    data.token = loginUser.token;

    $.requestData(2,service.setPersonInfo,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){

            loginUser.name = $("#changeUsername").val();
            setTimeout(function(){storeUtil.set(config.userKey,loginUser);},30);//  保存用户信息
            $("#changeUsername").val('');

            $("#myName").html(loginUser.name);// 设置

            hide('changeName');

            goBack();
        }else{
            showMessage(result.message);
        }
    },function(){

    });
}

function changePassword(){// 修改密码
    var data = {token:loginUser.token};
    if($("#oldPassword").val() == ''){
        $("#oldPassword").attr('placeholder','当前密码必须填写');
        return;
    }else{
        data.oldPassword = $("#oldPassword").val();
    }

    if($("#newPassword2").val() == ''){
        $("#newPassword2").attr('placeholder','新密码必须填写');
        return;
    }else{
        data.password = $("#newPassword2").val();
    }

    if($("#newPassword3").val() == ''){
        $("#newPassword3").attr('placeholder','新密码必须再次确认');
        return;
    }else{
        if($("#newPassword3").val() != data.password){
            showMessage("两次输入的新密码不一致");
            $("#newPassword3").attr('placeholder','两次输入的新密码不一致');
            $("#newPassword3").val('');
            return;
        }
    }

    $.requestData(2,service.changePassword,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){

            loginUser.password = data.password;

            hide('changePassword');
        }else{
            showMessage(result.message);
        }
    },function(){

    });
}

// 通过手机号码登录
function goLogin4Phone(){
    hide('login');
    show2("login4Phone");
}

function setPassword(){// 重置密码
    var data = {};

    var value = $("#registPassword").val();
    if(value == ''){
        $("#registPassword").attr('placeholder','密码必填');
        return;
    }else{
        data.password = value;
    }

    data.token = loginUser.token;// 设置密码


    $.requestData(2,service.setPassword,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){
            loginUser.password = data.password;

            setTimeout(function(){storeUtil.set(config.userKey,loginUser);},30);//  保存用户信息

            backOnce();
            goBack();
            showMessage("恭喜您可以使用新密码登陆了");
        }else{
            showMessage('重置密码失败，稍后再试');
        }

    });
}

function goValidateCode(){// 显示验证码输入框
    sending = true;
    codeTime = 60;
    show2("regist");
}

function getValidateCode(){// 获取验证码
    if(sending == true){// 发送状态
        return;
    }

    var data = {};

    var val = $("#registTel").val();// 手机号码
    if(val == ''){
        $("#registTel").attr('placeholder','手机号码必须填写');
        return;
    }else{

        if(validator.validateTel(val)){
            data.phone = val;
        }else{
            $("#registTel").attr('placeholder','手机号码非法，请纠正');
            $("#registTel").val('');
            return;
        }
    }

    sending = true;
    codeTime = 60;

    $.requestData(2,service.getValidateCode,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){
            var data = result.data;
            $("#validateCode").attr('placeholder',"验证码已发送");
            loginUser = {};
            loginUser.validateCode = data.validateCode;
        }else{
            sending = false;
            $("#codeBt").html("获取验证码");
            showMessage('发送验证码失败，稍后再试');
        }
    });
}


var phone4ResetPassword = null;// 重置密码的手机号码
var validateCode4Forget = null;// 忘记密码的验证码
function getValidateCode1(){// 获取验证码
    var phone = $("#yourPhone").val();
    var data = {};

    if(phone == ''){
        $("#yourPhone").attr('placeholder','手机号码必须填写');
        return;
    }else{

        if(validator.validateTel(phone)){
            data.phone = phone;
        }else{
            $("#yourPhone").attr('placeholder','手机号码非法，请仔细核对');
            $("#yourPhone").val('');
            return;
        }
    }

    if(sending1 == true){// 发送状态
        return;
    }

    sending1 = true;
    codeTime1 = 60;

    $.requestData(2,service.forgetPassword,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){
            var data = result.data;

            if(data.status == 1){

                phone4ResetPassword = phone;
                $("#yourPhone").attr('placeholder',"验证码已发送");
                validateCode4Forget = data.validateCode;
            }else{
                showMessage('手机尚未注册，赶快去注册吧');
                hide('forgetPassword');
                go4Login();

                $("#loginPhone").val(phone);
                sending1 = false;
            }

        }else{
            sending1 = false;
            $("#codeBt1").html("获取验证码");
            showMessage('发送验证码失败，稍后再试');
        }

    });
}


function searchHome(){
    //show2("searchHome");
    $("#searchHomeText").val('');
    $("#searchHomeText").focus();

    showPage('searchHome',70);
    //setStatus(70);
}

var sending = false;// 发送中
var codeTime = 60;// 读秒器

var sending1 = false;// 发送中忘记密码
var codeTime1 = 60;// 读秒器忘记密码

var coupansExpress = false;// 是否显示优惠券过期信息

var distanceCount = 1;// 10秒计算一次
var globalInteral = setInterval(function(){// 全局定时器，处理

    try{
        if(--loginTime <= 0){// 小于等于0就进行登录处理
            if(loginUser != null){
                try{
                    login4Phone(loginUser);// 登录token
                }catch (e){

                }
            }
        }
    }catch (e){}


    try{// 读秒器
        // 处理验证码的读秒器
        if(sending == true){// 注册读秒器
            if(--codeTime < 0){
                $("#codeBt").html("获取验证码");
                sending = false;
            }else{
                $("#codeBt").html(codeTime + "秒");
            }
        }

        if(sending1 == true){// 忘记密码读秒器
            if(--codeTime1 < 0){
                $("#codeBt1").html("获取验证码");
                sending1 = false;
            }else{
                $("#codeBt1").html(codeTime1 + "秒");
            }
        }
    }catch (e){}

    try{// loading的时间计数器
        if(loadingFlag == true){
            ++loadTime;

            if(loadTime >= 4){
                loadingFlag = false;
                loadTime = 0;
                tipNetwork();
            }

        }
    }catch (e){}


},1000*1);

var homeScoller = null;

function picPath(fileName){
    if(!fileName){
        return "./images/t0.png";
    }
    if(fileName.toLowerCase().startWith('http://') ||fileName.toLowerCase().startWith('www.')){
        return fileName;
    }
    if(fileName){
        var path = config.picServer + fileName.substring(0, 4) + "/" + fileName.substring(4, 6) + "/" + fileName.substring(6, 8) + "/" + fileName;
        return path;
    }else{
        return "./images/t0.png";
    }
}

// 设置头像
function randomHeader(){
    var index = commUtil.random(41);

    return './icons/icon' + index + '.jpg';
}

function picHeader(fileName){
    if(!fileName){
        return randomHeader();
    }

    if(fileName.toLowerCase().endWith('default-del.png')){
        return randomHeader();
    }


    if(fileName.toLowerCase().startWith('http://') ||fileName.toLowerCase().startWith('www.')){
        return fileName;
    }
    if(fileName){
        var path = config.picServer + fileName.substring(0, 4) + "/" + fileName.substring(4, 6) + "/" + fileName.substring(6, 8) + "/" + fileName;
        return path;
    }else{
        return randomHeader();
    }
}

function getPicPath(fileName){
    if(!fileName){
        return "./images/t0.png";
    }

    if(fileName.toLowerCase().startWith('http://') ||fileName.toLowerCase().startWith('www.')){
        return fileName;
    }

    if(fileName){
        var path = config.picServer + fileName.substring(0, 4) + "/" + fileName.substring(4, 6) + "/" + fileName.substring(6, 8) + "/" + fileName;
        return path;
    }else{
        return "./images/t0.png";
    }
}

// 返回书城首页
function goBackLoanHome(){
    showPage('loanHome',20);
}

function goLoanHome(){// 书城首页
    var data = {};
    // showLoading();
    //
    // hideLoading();
    showPage('loanHome',20);

    // $.requestData(2,service.getHomeInfo,$.toJasonParams(data),function(result){// 提交服务器
    //     hideLoading();
    //     showPage('loanHome',20);
    //
    //     if(result.status == 1){
    //
    //         var rsdata = result.data;
    //         var content = templateUtil.render(service.getHomeInfo,rsdata);
    //
    //         $("#myself").html(content);
    //
    //         staticScroll({
    //             scrollId:"siftFoucus1",
    //             pageCount:2,
    //             autoSlider:false,
    //             dot:"focusDot",
    //             dotSelect:"dotSelected"
    //         });
    //
    //
    //         if(myself == null){
    //             myself = new iScroll("loanScroller");
    //         }
    //
    //         myself.refresh();
    //         setTimeout(function(){myself.refresh();},1000);// 刷新列表
    //
    //     }
    // },function(){
    //     hideLoading();
    //     showMessage("请确认网络连接正常后重试");
    // });
    //
    // setTimeout(function(){myself.refresh();},500);// 刷新列表
}

// 加入书架
function add2BookShelf(id){// 加入到书架

    if(loginUser == null){
        go4Login();
        return;
    }

    if(isInShelf(id)){
        showMessage('本书已在书架中');
        return;
    }else{
        addShelfCache(id);// 放入书架
    }

    var currBookVolumNo = 0;
    var currChapterNo = 0;

    if(!id && currBook){
        id = currBook.id;
        currBookVolumNo = currBook.currBookVolumNo;
        currChapterNo = currBook.currChapterNo;
    }

    var data = {
        token:loginUser.token,
        id:id,
        currBookVolumNo:currBookVolumNo,
        currChapterNo: currChapterNo
    };// 优惠券

    $.requestData(2,service.add2Shelf,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){
            var user = result.data;
            showMessage('加入书架成功');
        }

    },function(){

    });
}

var currRadio = 0;// 默认为女频道

var homeFlag = 0;// 是否执行过进入首页

function goHome(){// 投资首页
    //goInvestHome();

    goLoanHome();

    autoGo = false;//
}

var currDefaultShelfBooks = [];// 推荐书架小说
var currDefaultShelfBookMap = {};// 推荐书架小说
var currUserShelfBooks = [];//用户放入书架的小说

// 获取小说收藏id
function getMyShelfKey(id){
    return config.shelfKeyword + getUserKey() + id;
}

// 是否在书架
function isInShelf(id){
    var vl = storeUtil.get(getMyShelfKey(id));

    if(vl){
        return true;
    }else{
        if(currDefaultShelfBookMap[id]){
            return true;
        }
        return false;
    }
}

// 放入书架
function addShelfCache(id){
    storeUtil.set(getMyShelfKey(id),1);
    var sb = {};
    sb.author = currBook.author;
    sb.books_id = currBook.id;
    sb.books_name = currBook.name;
    sb.booktype = currBook.booktype;
    sb.descp = currBook.descp;
    sb.icon = currBook.icon;

    currUserShelfBooks.push(sb);
    storeUtil.set(getShelfKey(),currUserShelfBooks);
}

// 书架默认key
function getShelfKey(){
    if(loginUser == null){
        return config.shelfKeyword + config.defaultShelfKey;
    }else{
        return config.shelfKeyword + loginUser.id;
    }
}

// 加载书架数据
function loadShelfBook(){
    currDefaultShelfBooks = storeUtil.getJson(config.defaultShelfKey);
    currUserShelfBooks = storeUtil.getJson(getShelfKey());

    if(currDefaultShelfBooks == null){
        currDefaultShelfBooks = [];
    }else{
        for(var i = 0; i <currDefaultShelfBooks.length; ++i){
            var bk = currDefaultShelfBooks[i];
            currDefaultShelfBookMap[bk.books_id] = bk;
        }
    }

    if(currUserShelfBooks == null){
        currUserShelfBooks = [];
    }
}

// 更新本地书架小说
function updateShelfBook(myshelfbook,dfshelfbook){
    currDefaultShelfBooks = dfshelfbook;
    currUserShelfBooks = myshelfbook;

    // 设置书架中默认小说
    setTimeout(function(){
        if(currDefaultShelfBooks.length > 0){
            for(var i = 0; i <currDefaultShelfBooks.length; ++i){
                var bk = currDefaultShelfBooks[i];
                currDefaultShelfBookMap[bk.books_id] = bk;
            }
        }

        if(currUserShelfBooks.length > 0){
            for(var i = 0; i < currUserShelfBooks.length; ++i){
                var bk = currUserShelfBooks[i];
                storeUtil.set(getMyShelfKey(bk.books_id),1);
            }
        }
    },10);

    storeUtil.set(config.defaultShelfKey,currDefaultShelfBooks);
    storeUtil.set(getShelfKey(),currUserShelfBooks);
}

// 返回书架
function goBackInvestHome(){
    var rsdata = currUserShelfBooks;
    var otherdata = currDefaultShelfBooks;

    if(rsdata.length <= 0){
        otherdata[0].progress = '0%';
        rsdata = [];
        rsdata.push(otherdata[0]);
    }

    var content = templateUtil.render(service.getShelfList,rsdata);

    content += templateUtil.render(service.dfShelfList,otherdata);

    $("#homeContent1").html(content);

    setBook2Shelf();// 设置当前阅读过的书


    setTimeout(function(){productScoller.refresh();},100);

    showPage('investHome',10);
}

function goInvestHome(){// 书架界面
    var data = {};
    if(loginUser != null){
        data.token = loginUser.token;
    }

    loadShelfBook();// 加载书架小说

    showLoading();

    $.requestData(2,service.getShelfList,$.toJasonParams(data),function(result){// 提交服务器
        hideLoading();
        showPage('investHome',10);

        if(result.status == 1){

            var rsdata = result.data;
            var otherdata = result.otherData;

            if(rsdata.length <= 0){

                if(currUserShelfBooks.length > 0){
                    rsdata = currUserShelfBooks;

                    updateShelfBook(rsdata,otherdata);// 更新本地缓存
                }else if(otherdata.length > 0){
                    otherdata[0].progress = '0%';
                    rsdata.push(otherdata.shift());

                    updateShelfBook([],otherdata);// 更新本地缓存
                }
            }else{
                updateShelfBook(rsdata,otherdata);// 更新本地缓存
            }

            var content = templateUtil.render(service.getShelfList,rsdata);


            content += templateUtil.render(service.dfShelfList,otherdata);

            currDefaultShelfBooks = otherdata;// 书架推荐

            $("#homeContent1").html(content);

            setTimeout(function(){productScoller.refresh();},100);
            setTimeout(function(){productScoller.refresh();},1500);

        }
    },function(){
        hideLoading();
        showMessage("请确认网络连接正常后重试");
    });

    setTimeout(function(){productScoller.refresh();},500);// 刷新列表

}

function goAds(adstype,adsurl){// 进入广告内容
    switch (adstype){
        case 1://专题活动

            break;
        case 2://产品
            goInvestDetail(adsurl);
            break;
        case 3://商户

            break;
        case 4://外部链接

            break;
    }

}

var currActivity = null;
function goActivityDetail(id){// 活动详细
    if(!id){
        id = getDid();
    }

    var data = dataSet.get4Cache(id);

    currActivity = data;
    $("#activityDetailContent").html(data.descp);

    $("#activityDetailContent img").addClass("contentPic");

    showPage('activityDetail',90);
}

var currMerchantid = null;// 当前商户id
var currProductId = null;// 当前产品
var currProduct = null;// 当前产品


function goAllComment(){// 评论
    if(currProduct.qulity <= 0){
        showMessage("暂未评论");
        return;
    }

    var score = ((currProduct.qulity1*10 + currProduct.qulity2*8 + currProduct.qulity3*6)/ (currProduct.qulity*10) * 5).toFixed(1);
    $("#pdScore").html(score);// 得分
    $("#pdTotal").html(currProduct.qulity + "人评论");// 评论人数

    $("#pdStars").html(processBigStar(score));// 处理评星星

    $("#pdquality1").html("非常惊喜(" + currProduct.qulity1 + ")");// 评论人数
    $("#pdquality2").html("一般一般(" + currProduct.qulity2 + ")");// 评论人数
    $("#pdquality3").html("大跌眼镜(" + currProduct.qulity3 + ")");// 评论人数
    $("#pdservice1").html("服务态度好(" + currProduct.service1 + ")");// 评论人数
    $("#pdservice2").html("服务态度一般(" + currProduct.service2 + ")");// 评论人数
    $("#pdservice3").html("我只能呵呵(" + currProduct.service3 + ")");// 评论人数
    $("#pdtransite1").html("非常快(" + currProduct.transite1 + ")");// 评论人数
    $("#pdtransite2").html("可以接受(" + currProduct.transite2 + ")");// 评论人数
    $("#pdtransite3").html("比蜗牛还慢(" + currProduct.transite3 + ")");// 评论人数

    var commentScorller = new iScroller({
        id:"commentScroller",
        url:service.findComment,
        templateId:service.findComment,
        paramters:{id:currProduct.id},// 查询条件进行查询
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"commentContent",
        refreshFlag:true,
        cacheData:false
    });

    show("comments");
}

function goBackStoreHome(){
    showPage('storeHome',1010);
}

function goStoreHome4List(){// 商户详细
    var id = $(event.target).attr("did");
    if(id != undefined){
        goStoreHome(id);
    }

    return false;
}

var currMerchant = null;// 当前商户
function goAllComment(){// 评论
    if(currMerchant.qulity <= 0){
        showMessage("暂未评论");
        return;
    }

    var score = ((currMerchant.qulity1*10 + currMerchant.qulity2*8 + currMerchant.qulity3*6)/ (currMerchant.qulity*10) * 5).toFixed(1);
    $("#pdScore1").html(score);// 得分
    $("#pdTotal1").html(currMerchant.qulity + "人评论");// 评论人数

    $("#pdStars1").html(processBigStar(score));// 处理评星星

    $("#pdquality11").html("非常惊喜(" + currMerchant.qulity1 + ")");// 评论人数
    $("#pdquality12").html("一般一般(" + currMerchant.qulity2 + ")");// 评论人数
    $("#pdquality13").html("大跌眼镜(" + currMerchant.qulity3 + ")");// 评论人数
    $("#pdservice11").html("服务态度好(" + currMerchant.service1 + ")");// 评论人数
    $("#pdservice12").html("服务态度一般(" + currMerchant.service2 + ")");// 评论人数
    $("#pdservice13").html("我只能呵呵(" + currMerchant.service3 + ")");// 评论人数
    $("#pdtransite11").html("非常快(" + currMerchant.transite1 + ")");// 评论人数
    $("#pdtransite12").html("可以接受(" + currMerchant.transite2 + ")");// 评论人数
    $("#pdtransite13").html("比蜗牛还慢(" + currMerchant.transite3 + ")");// 评论人数

    var commentScorller = new iScroller({
        id:"commentScroller",
        url:service.findComment,
        templateId:service.findComment,
        paramters:{id:currMerchant.id},// 查询条件进行查询
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"commentContent",
        refreshFlag:true,
        cacheData:false
    });


    showPage('comments',1030);
}

// 30000
function go4Login(){// 登陆系统
    //show2('login4Phone');
    //hide("regist");

    showPage('login4Phone',30000);
}

// 注册
function go4Regist(){
    registFlag = 1;

    showPage('regist',31000);
}

// 设置密码
function go4SetPassword(){// 进设置密码的页面
    showPage('setPassword',32000);
}

// 忘记密码
function go4Forget(){
    hide('login4Phone');// 隐藏登录窗口

    $("#yourPhone").val($("#loginName").val());
    $("#registPassword").val($("#password").val());

    show2("forgetPassword");
}

var homeLogin = false;// 没有点击登录
function goHomeLogin(){// 首页进入注册登录
    show("investHome");
    homeLogin = true;// 点击了登录
    show2('login');
}

// 进入post支付
function goPostPay(){
    show2('postpay');
}

function goMyLoves(){
    if(loginUser == null){
        go4Login();

        return;
    }

    if(favosMerchants.length <= 0){
        showMessage('暂无收藏，快去发现您的最爱吧');
        return;
    }

    var content = templateUtil.render(service.getMercahntList,favosMerchants);
    $("#myLovesList").html(content);

    showPage('myLoves',440);
}

var merchantCoupans = {};// 优惠券



var currProductType = 1;// 当前产品类别
var searchCondition = {};// 查询条件
var merchantOrProducts = 1;// 1.商户，2.产品
var nearMerchant = 1;// 是否附近


function searchProduct4Key(){// 查询产品
    var propertyScroller = new iScroller({
        id:"subTypeMerchantsScroller",
        url:service.getMercahntList,
        templateId:service.getMercahntList,
        paramters:searchCondition,// 查询条件进行查询
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"subTypeMerchantsContent",
        refreshFlag:false,
        hasDataProcesser:function(){
            showPage('subTypeMerchants',73);
        },
        noDataProcesser:function(d){
            if(d == 0){// 没有数据
                //showMessage('没有找到相关产品');
                //goBack();
                show2("searchTip");

                setTimeout(function(){
                    hide("searchTip");
                },4000);
            }
        },
        cacheData:true
    });

}


function goStudy(){
    show("study");
}


function goAllStores(){
    orderScorller = new iScroller({
        id:"allStoresScroller",
        url:service.getStoreList,
        templateId:service.getStoreList,
        paramters:{entitycode:currMerchant.entitycode},// 查询条件进行查询
        isShare:true,
        autoLoad:false,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"allStoreContent",
        refreshFlag:true,
        noDataProcesser:function(d){
            if(d == 0){// 没有数据
                goBack();
                showMessage('没有其他门店');
            }
        },
        cacheData:true
    });

    $("#allstoreTitle").html('<div onclick="goBack();" class="headerIconDiv1"> <img src="images/rdr7.png" class="headerIcon1"></div>' + currMerchant.entityname + '<div onclick="goInvestShare(2);" class="headerIconDiv hide"> <img src="images/share.png" class="headerIcon3"></div>');


    showPage('allStores',1020);
}

function goAllComment1(){

    showPage('comments',1030);
}

function goAds(){

}



function goOrderHome(){
    showPage('orderHome',60);
}


function goInvestShare(){// 分享
    showPage('investShare',1800);

}


function goLoanHome2(){// 借钱首页,
    showPage('merchant',24);
}

function goLoanHome3(){// 借钱首页,自定义
    showPage('friend',28);

}

function goMerchantDetail(){// 商户产品详细详细
    showPage('loanProduct',240);
}

function goMerchantLoan(){// 商户信息
    showPage('loanDetail',241);
}


function goMyHome(){// 美食首页
	//show("myHome");
	//setStatus(40);
    setTimeout(function(){myHomeScroller.refresh();},50);
    showPage('myHome',40);
}

function goPrivilegeHome(){// 尊享首页
    showPage('privilegeC',120);
}

function goOpenStar(){
    showPage('starinfo1',4100);
}

// 设置性别
var currSex = '男';// 性别
function checkSex(val){
    if(val == 1){
        currSex = '男';
        $("#sexitem1").addClass('sexitemvaluechecked');
        $("#sexitem2").removeClass('sexitemvaluechecked');
    }else{
        currSex = '女';
        $("#sexitem2").addClass('sexitemvaluechecked');
        $("#sexitem1").removeClass('sexitemvaluechecked');
    }
}

// 我的订单
function goMyOrders(){
    showPage('myOrderHome',420);
}

// 我的充值记录
function goMyRecharges(){
    new iScroller({
        id:"myRechargesScroller",
        url:service.getRechargeList,
        templateId:service.getRechargeList,
        paramters:{token:loginUser.token},
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"myRechargesList",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:false
    });

    showPage('myRecharges',4210);
}

// 我的消费记录
function goMyConsume(){
    new iScroller({
        id:"myConsumeScroller",
        url:service.getBookPayList4User,
        templateId:service.getBookPayList4User,
        paramters:{token:loginUser.token},
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"myConsumeList",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:false
    });

    showPage('myConsume',4220);
}

// 我的打赏记录
function goMyReward(){
    new iScroller({
        id:"myRewardScroller",
        url:service.getBonusList,
        templateId:service.getBonusList,
        paramters:{token:loginUser.token},
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"myRewardList",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:false
    });

    showPage('myReward',4230);
}

// 我的打赏记录
function goMyVipOrderList(){
    new iScroller({
        id:"myVipOrderScroller",
        url:service.getVipOrderList,
        templateId:service.getVipOrderList,
        paramters:{token:loginUser.token},
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"myVipOrderList",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:false
    });

    showPage('myVipOrder',4240);
}


function goMyOrder(status,title){
    if(loginUser == null){
        go4Login();
        return;
    }

    if(status){
        orderstatus = status;
    }

    if(title){
        ordertitle = title;
    }

    $("#orderTitle").html(ordertitle);

    coupansScorller = new iScroller({
        id:"myOrderScroller",
        url:service.findCoupanList,
        templateId:service.findCoupanList,
        paramters:{token:loginUser.token,status:orderstatus},
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:(status == 2 ? false:true),
        request:2,
        contentId:"myOrderList",
        refreshFlag:(status == 2? true:false),
        noDataProcesser:function(){},
        cacheData:true
    });

    showPage('myOrder',430);
}

//
function goMsgTip(){
    if(loginUser == null){
        go4Login();
        return;
    }

    showMessage('暂无消息');
}

var orderstatus = 1;// 订单状态
var ordertitle = "订单";
var coupansScorller = null;// 优惠券
function goMyDiscount(status,title){
    if(loginUser == null){
        go4Login();
        return;
    }

    if(status){
        orderstatus = status;
    }

    if(title){
        ordertitle = title;
    }

    switch (status){
        case 1:
            loginUser.wait4pay = 0;
            hide("wait4pay");
            break;
        case 2:
            loginUser.wait4receive = 0;
            hide("wait4comment");
            break;
        case 3:
            loginUser.wait4return = 0;
            hide("wait4return");
            break;
        case 4:
            loginUser.wait4comment = 0;
            hide("wait4receive");
            break;
    }

    $("#discountTitle").html('<div onclick="goBack();" class="headerIconDiv1"> <img src="images/rdr7.png" class="headerIcon1"></div><div class="headTitleDiv1" >'+ ordertitle +'</div>');

    coupansScorller = new iScroller({
        id:"myDiscountScroller",
        url:service.findCoupanList,
        templateId:service.findCoupanList,
        paramters:{token:loginUser.token,status:orderstatus},
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"myDiscountList",
        refreshFlag:true,
        noDataProcesser:function(){},
        cacheData:true
    });

    showPage('myDiscount',4300);
}

function back2goMyDiscount(){
    showPage('myDiscount',4300);
}

// 修改密码
function goChangePassword(){
    if(loginUser == null){
        showMessage('尚未登录');
        return;
    }
    show2("changePassword");
}

function clearCache(){
    showMessage('正在清理');
}

function goMyInfo(){// 设置

    if(loginUser == null){
        go4Login();// 手机登录
        return;
    }

    showPage('myInfo',435);
}


function goMySetting(){// 设置
    showPage('mySetting',10500);
}


// 关于
function goAbout(){
    showPage('about',450);
}

function exit(){// 退出系统

    $("#myName").html('未登陆');
    //goBack();
    loginUser = null;
    storeUtil.del(config.userKey);

    // 退出登录
    $("#myName").html('未登陆');
    $("#myId").html('登陆更好玩');
    $("#loginOut").html('点击登陆');

    show2("loginOut");
    hide('myicon');
    hide('myexit');


    $("#myLoveProducts").html(0);// 收藏

    $("#myLoveMerchant").html(0);// 订单数量
    $("#exploerCount").html(0);// 评论

    try{
        nativeUtils.exit();
    }catch (e){}
}

function goNewOrder(){
    showPage('newOrder',1700);
}

function goNewOrder1(){
    showPage('newOrder1',1701);
}

function goCities(){
    show2("cities");
    //setStatus(80);
}


var quickButton = 1;// 快捷按钮
function goHomeOrder(){
    /*   goMyDiscount(1,'我的折扣券');

    show("homeOrders");
    setStatus(60);*/

    if(quickButton == 1){
        quickButton = 0;
        show2("Footerhuiicon");
    }else{
        quickButton = 1;
        hide("Footerhuiicon");
    }

    //document.getElementById("Footerhuiicon").style.display = "block";
}

function goMyMessage(){
    findMyMsg(1);
}

function checkCity(obj){

    var city = $(obj).children("div").html();

    if(cityHasOpen(city)){
        $(".cityLabel").html(city);

        setCity(city + "市");
    }else{
        showMessage('[' + city  + "]  尚未开通服务，谢谢关注！");
    }

}

function setCurrCity(obj){

    var city = $(obj).attr('city');

    setCity(city);
}

function goPackage(){
    showPage('packageList',50);
}

/*
function checkQtCondition(obj){
    var className = $(obj).attr("class");

    if(className.indexOf("conditionBtCheck") != -1){
        $(obj).removeClass("conditionBtCheck");
    }else{
        $(obj).addClass("conditionBtCheck");
    }

}*/

function checkQtCondition(obj){
    var className = $(obj).attr("class");

    var value = $(obj).attr("did");// 范围取值

    if(className.indexOf("conditionBtCheck") != -1){
        $(obj).removeClass("conditionBtCheck");

        if(value != -1){// 不限制
            searchCondition.other = searchCondition.other.replace(";" + value,'');
        }
    }else{
        if(value == -1){// 不限制
            $(obj).addClass("conditionBtCheck").siblings().removeClass("conditionBtCheck");
            searchCondition.other = '';
        }else{
            if(!searchCondition.other){
                searchCondition.other = ";" + value;
            }else{
                searchCondition.other += ";" + value;
            }

            $(obj).addClass("conditionBtCheck");
            $('#noprice').removeClass("conditionBtCheck");
        }
    }
}

// 类型
function goBookTypes(){
    //#bigClassContent
    //#smallClassScroller
    var bigClassScroller = new iScroller({
        id:"bigClassScroller",
        url:service.getBookType,
        templateId:service.getBookType,
        paramters:{},
        isShare:true,
        autoLoad:false,
        director:3,//只向下获取数据
        hasDataProcesser:function(dataList){
            if(dataList){
                goBookSubType(dataList[0].id);
            }
        },
        pageFlag:false,
        request:2,
        contentId:"bigClassContent",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:true
    });

    showPage('bookTypes',100);
}

// 显示详细类型
function goBookSubType(id){
    if(!id){
        id = getDid();
    }

    try{
        getEventTargt().addClass("bigClassItemChecked").siblings().removeClass("bigClassItemChecked");
    }catch (e){}
    if(id != undefined){
        var data = dataSet.get4Cache(id);
        processSubBookType(data);
    }

    return true;
}

// 处理小说小类
function processSubBookType(data){
    var cnt = templateUtil.render(service.subBookType,data.children);
    $("#smallClassContent").html(cnt);

    setTimeout(function(){smallClassScroller.refresh();},100);
}

// 根据类型查询小说
var currBookType = null;
function goBookList4Type(id){
    if(!id){
        id = getDid();
    }

    if(id){
        currBookType = id;// 设置当前类型
    }

    $("#bookTypeTitle").html('<div onclick="goBack();" class="headerIconDiv1"><img src="images/rdr7.png" class="headerIcon1"></div>' + dataSet.get4Cache(currBookType).name);

    var data = {};
    data.booktype_id = currBookType;

    new iScroller({
        id:"bookList4TypeScroller",
        url:service.getBookListByType,
        templateId:service.getBookListByType,
        paramters:data,
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"bookList4TypeContent",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:true
    });
    showPage('bookList4Type',500);
}

// 显示过滤条件
var topTypes = 1;// 过滤类型
function setTopList(filterType,obj){
    if(filterType){
        topTypes = filterType;
    }

    if(obj){
        $(obj).addClass("subTitleDivChecked").siblings().removeClass('subTitleDivChecked');
    }

    switch (filterType){
        case 1:
            var topListScroller = new iScroller({
                id:"topListScroller",
                url:service.getGroomTopBooks,
                templateId:service.getGroomTopBooks,
                paramters:{},
                isShare:true,
                autoLoad:false,
                director:3,//只向下获取数据
                pageFlag:false,
                request:2,
                contentId:"topListContent",
                refreshFlag:false,
                noDataProcesser:function(){},
                cacheData:true
            });
            break;


        case 2:
            var topListScroller = new iScroller({
                id:"topListScroller",
                url:service.getSubscribeTopBooks,
                templateId:service.getGroomTopBooks,
                paramters:{},
                isShare:true,
                autoLoad:false,
                director:3,//只向下获取数据
                pageFlag:false,
                request:2,
                contentId:"topListContent",
                refreshFlag:false,
                noDataProcesser:function(){},
                cacheData:true
            });
            break;

        case 3:

            var topListScroller = new iScroller({
                id:"topListScroller",
                url:service.getClickTopBooks,
                templateId:service.getGroomTopBooks,
                paramters:{},
                isShare:true,
                autoLoad:false,
                director:3,//只向下获取数据
                pageFlag:false,
                request:2,
                contentId:"topListContent",
                refreshFlag:false,
                noDataProcesser:function(){},
                cacheData:true
            });
            break;

        case 4:

            var topListScroller = new iScroller({
                id:"topListScroller",
                url:service.getCellectTopBooks,
                templateId:service.getGroomTopBooks,
                paramters:{},
                isShare:true,
                autoLoad:false,
                director:3,//只向下获取数据
                pageFlag:false,
                request:2,
                contentId:"topListContent",
                refreshFlag:false,
                noDataProcesser:function(){},
                cacheData:true
            });
            break;

        case 5:
            var topListScroller = new iScroller({
                id:"topListScroller",
                url:service.getShareTopBooks,
                templateId:service.getGroomTopBooks,
                paramters:{},
                isShare:true,
                autoLoad:false,
                director:3,//只向下获取数据
                pageFlag:false,
                request:2,
                contentId:"topListContent",
                refreshFlag:false,
                noDataProcesser:function(){},
                cacheData:true
            });

            break;

        default :
            var topListScroller = new iScroller({
                id:"topListScroller",
                url:service.getGroomTopBooks,
                templateId:service.getGroomTopBooks,
                paramters:{},
                isShare:true,
                autoLoad:false,
                director:3,//只向下获取数据
                pageFlag:false,
                request:2,
                contentId:"topListContent",
                refreshFlag:false,
                noDataProcesser:function(){},
                cacheData:true
            });

            break;
    }
}

// 排行
function goTopList(){
    var topListScroller = new iScroller({
        id:"topListScroller",
        url:service.getGroomTopBooks,
        templateId:service.getGroomTopBooks,
        paramters:{},
        isShare:true,
        autoLoad:false,
        director:3,//只向下获取数据
        pageFlag:false,
        request:2,
        contentId:"topListContent",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:true
    });

    showPage('topList',200);
}
// 返回
function goBackTopList(){
    setTopList(topTypes);
    showPage('topList',200);
}

// 限免
function goFreeList(){
    var topListScroller = new iScroller({
        id:"freeListScroller",
        url:service.getLimitFreeBooks,
        templateId:service.getLimitFreeBooks,
        paramters:{},
        isShare:true,
        autoLoad:false,
        director:3,//只向下获取数据
        pageFlag:false,
        request:2,
        contentId:"freeListContent",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:true
    });
    showPage('freeList',300);
}

var currRewardId = null;// 道具id
// 选择道具
function setReward(id,obj){
    $(".rewardsitemcontentchecked").removeClass('rewardsitemcontentchecked');
    $(obj).addClass('rewardsitemcontentchecked');

    currRewardId = id;
}

// 设置充值产品
var currProductId = null;
function setChargeProduct(id,obj,price){
    $(".rewardsitemcontentchecked").removeClass('rewardsitemcontentchecked');
    $(obj).addClass('rewardsitemcontentchecked');

    currProductId = id;
    $("#feetotal").html('￥'+price);
    $("#paytotal").html('￥'+price);
}

// 设置畅读产品
function setVipProduct(id,obj,price){
    $(".rewardsitemcontentchecked").removeClass('rewardsitemcontentchecked');
    $(obj).addClass('rewardsitemcontentchecked');

    currProductId = id;
    $("#feetotal").html('￥'+price);
}

// 打赏
var rewardFlag = false;// 没有初始化
function goRewards(){
    if(loginUser == null){
        go4Login();
        return;
    }
    $("#mybookbcoins").html('余额：' + loginUser.amount + '书币');
    if(rewardFlag == false){
        var data = {};

        showLoading();

        $.requestData(2,service.getRewardsList,$.toJasonParams(data),function(result){// 提交服务器
            hideLoading();

            if(result.status == 1){
                rewardFlag = true;
                var rsdata = result.data;
                var content = templateUtil.render(service.getRewardsList,rsdata);

                $("#rewardsitems").html(content);

            }
        },function(){
            hideLoading();
            showMessage("请确认网络连接正常后重试");
        });
    }
    show2("rewards");
}

// 打赏小说
function goBoundBook(){

    if(loginUser.amount <= 0){// 没有足够的书币打赏
        hide('rewards');
        goBuyHome();
        showMessage('书币余额不足，快去充点吧');
        return;
    }

    var data = {}; // 请求数据
    data.token = loginUser.token;
    data.books_id = currBook.id;
    data.books_name = currBook.name;
    data.id = currRewardId;


    $.requestData(2,service.addBonus,$.toJasonParams(data),function(result){// 提交服务器
        loginTime = loginInterl * 60 * 1000;// 20分钟登录一下

        if(result.status == 1){
            var data = result.data;

            loginUser = data;// 登陆信息
            loginSuccess();// 登录成功

            hide('rewards');
        }

    },function(){

    });
}

// 充值购买页面
var buyHomeFlag = false;// 是否初始化充值界面
function goBuyHome(){
    if(loginUser == null){
        go4Login();
        return;
    }

    $("#chargeTipBalance").html('余额  ' + loginUser.amount + '书币');
    if(buyHomeFlag == false){
        var data = {};

        showLoading();

        $.requestData(2,service.getProductList,$.toJasonParams(data),function(result){// 提交服务器
            hideLoading();

            if(result.status == 1){
                buyHomeFlag = true;
                var rsdata = result.data;
                var content = templateUtil.render(service.getProductList,rsdata);

                $("#chargeProductListContent").html(content);

                rsdata = result.otherData;

                content = templateUtil.render(service.getProductList1,rsdata);
                $("#vipProductListContent").html(content);

                setTimeout(function(){chargeProductListScoller.refresh();},50);
                setTimeout(function(){vipProductListScoller.refresh();},50);

            }
        },function(){
            hideLoading();
            showMessage("请确认网络连接正常后重试");
        });
    }

    showPage('buyHome',15000);
}

// 拼单
function goAAOrder(){
    var data = {};
    //data.token = loginUser.token


    showLoading();

    $.requestData(2,service.getPkorderList,$.toJasonParams(data),function(result){// 提交服务器
        hideLoading();

        if(result.status == 1){

            var rsdata = result.data;
            var content = templateUtil.render(service.getPkorderList,rsdata);

            $("#luckorderlist").html(content);

            rsdata = result.otherData;

            content = templateUtil.render(service.getPkorderList1,rsdata);
            $("#viporderlist").html(content);


            setTimeout(function(){aaOrderHomeScroller.refresh();},100);// 刷新列表

        }
    },function(){
        hideLoading();
        showMessage("请确认网络连接正常后重试");
    });

    setTimeout(function(){aaOrderHomeScroller.refresh();},100);// 刷新列表

    showPage('aaOrderHome',50);
}

// 手气拼单产品列表
function goLuckPkProductList(){
    var data = {};
    showLoading();

    $.requestData(2,service.getPkproductList,$.toJasonParams(data),function(result){// 提交服务器
        hideLoading();

        if(result.status == 1){

            var rsdata = result.data;
            var content = templateUtil.render(service.getPkproductList,rsdata);

            dataSet.add2Cache(rsdata);

            $("#luckpkcontent").html(content);

            rsdata = result.otherData;

            content = templateUtil.render(service.getPkproductList1,rsdata);
            $("#vippkcontent").html(content);



            setTimeout(function(){luckPkProductListScroller.refresh();dataSet.add2Cache(rsdata);},50);// 刷新列表

        }
    },function(){
        hideLoading();
        showMessage("请确认网络连接正常后重试");
    });

    setTimeout(function(){luckPkProductListScroller.refresh();},50);// 刷新列表

    showPage('luckPkProductList',510);
}

// 创建拼单
var currPkProductId = null;
function createpkorder(code){
    //currPkProductId = id;

    currModel = code;// 创建拼单 5 手气拼单 6 畅读拼单

    if(loginUser == null){
        go4Login();

        return;
    }

    var pd = dataSet.get4Cache(currPkProductId);
    $("#paytotal").html('￥'+pd.price);

    show2('payhome');// 显示支付
}

var currPkOrder = null;// 当前拼单订单
// 手气拼单详细
function goLuckPkProductDetail(id){
    var data = {};
    data.id = id;
    showLoading();

    $.requestData(2,service.getPkOrder,$.toJasonParams(data),function(result){// 提交服务器
        hideLoading();

        if(result.status == 1){
            var rsdata = result.data;

            currPkOrder = rsdata;// 设置当前拼单订单

            $("#luckordericon").attr('src',picHeader(rsdata.members[0].icon));// 头像
            $("#luckordername").html(rsdata.members[0].members_name);// 姓名

            $("#luckorderno").html('单号:' + rsdata.orderno);//
            $("#luckorderwin").html(rsdata.winnerbonus + '书币');//
            $("#luckorderlose").html(rsdata.loserbonus + '书券');//
            $("#luckordertotalvalue").html('总价值：￥' + rsdata.totalvalues);//
            $("#luckorderprice").html('￥' + rsdata.price + '<span class="luckypkProdcutJoin">立刻加入拼单</span>');//
            $("#luckorderrulewin").html(rsdata.winnerbonus);//
            $("#luckorderrulelose").html(rsdata.loserbonus);//

            $("#lkpricetip").html('金额<span style="color: #e8554d;">￥' + rsdata.price +'</span>');
            $("#paytotal").html('￥'+rsdata.price);

            setTimeout(function(){luckPkProductDetailScroller.refresh();},50);
        }
    },function(){
        hideLoading();
        showMessage("请确认网络连接正常后重试");
    });

    showPage('luckPkProductDetail',5100);
}

// 创建手气拼单
function createLuckPkOrder(id){
    currPkProductId = id;
    var pd = dataSet.get4Cache(currPkProductId);

    $("#luckordericon1").attr('src',picHeader(loginUser.headericon));// 头像
    $("#luckordername1").html(loginUser.name);// 姓名

    //$("#luckorderno").html('单号:' + rsdata.orderno);//
    $("#luckorderwin1").html(pd.winnerbonus + '书币');//
    $("#luckorderlose1").html(pd.loserbonus + '书券');//
    $("#luckordertotalvalue1").html('总价值：￥' + pd.totalvalues);//
    $("#luckorderprice1").html('￥' + pd.price + '<span class="luckypkProdcutJoin">立刻发起拼单</span>');//
    $("#luckorderrulewin1").html(pd.winnerbonus);//
    $("#luckorderrulelose1").html(pd.loserbonus);//

    $("#lkpricetip1").html('金额<span style="color: #e8554d;">￥' + pd.price +'</span>');
    $("#paytotal").html('￥'+pd.price);

    setTimeout(function(){luckPkProductDetailScroller1.refresh();},50);

    showPage('luckPkProductDetailc',5110);
}

// 返回
function goBackLuckPkOrderDetail(){
    showPage('luckPkProductDetail',5100);
}

// 添加默认按钮
function addDefaultIcon(m,n){
    var cnt = '';
    for(var k = 0; k < (m - n); ++k){
        cnt += '<div class="homePartternIconDiv"><div class="homeNoPatternIcon">...</div></div>';
    }

    return cnt;
}

// VIP拼单详细
function goVipPkProductDetail(id){
    var data = {};
    data.id = id;
    showLoading();

    $.requestData(2,service.getPkOrder,$.toJasonParams(data),function(result){// 提交服务器
        hideLoading();

        if(result.status == 1){
            var rsdata = result.data;

            currPkOrder = rsdata;// 设置当前拼单订单

            $("#vipordername").html(rsdata.name);// 姓名
            $("#viporderno").html('单号:' + rsdata.orderno);//
            $("#viporderamount").html('原价：￥' + rsdata.totalvalues);//
            $("#viporderprice").html('￥' + rsdata.price + '<span class="luckypkProdcutJoin">立刻加入拼单</span>');//


            var cnt = '';
            for(var i = 0; i < rsdata.members.length; ++i){
                var m = rsdata.members[i];
                cnt += '<div class="homePartternIconDiv1"><img src="' + picHeader(m.icon) + '" class="homePartternIcon"></div>';
            }

            for(var k = 0; k < (rsdata.pkcounts - rsdata.members.length); ++k){
                cnt += '<div class="homePartternIconDiv1"><div class="homeNoPatternIcon">...</div></div>';
            }

            $("#vipordermembers").html(cnt);//

            $("#vippricetip").html('金额<span style="color: #e8554d;">￥' + rsdata.price +'</span>');
            $("#paytotal").html('￥'+rsdata.price);

            setTimeout(function(){vipPkProductDetailScroller.refresh();},50);
        }
    },function(){
        hideLoading();
        showMessage("请确认网络连接正常后重试");
    });

    showPage('vipPkProductDetail',5200);
}

// VIP拼单详细
function createVipPkOrder(id){
    currPkProductId = id;
    var pd = dataSet.get4Cache(currPkProductId);

    $("#vipordername1").html(pd.name);// 姓名
    //$("#viporderno").html('单号:' + rsdata.orderno);//
    $("#viporderamount1").html('原价：￥' + pd.totalvalues);//
    $("#viporderprice1").html('￥' + pd.price + '<span class="luckypkProdcutJoin">立刻发起拼单</span>');//


    var cnt = '<div class="homePartternIconDiv1"><img src="' + picHeader(loginUser.headericon) + '" class="homePartternIcon"></div>';

    for(var k = 0; k < 2; ++k){
        cnt += '<div class="homePartternIconDiv1"><div class="homeNoPatternIcon">...</div></div>';
    }

    $("#vipordermembers1").html(cnt);//

    $("#vippricetip1").html('金额<span style="color: #e8554d;">￥' + pd.price +'</span>');
    $("#paytotal").html('￥'+pd.price);

    setTimeout(function(){vipPkProductDetailScroller1.refresh();},50);


    showPage('vipPkProductDetailc',5210);
}

//goBackCreateLuckyOrder goBackCreateVipOrder
function goBackCreateLuckyOrder(){
    showPage('vipPkProductDetailc',5110);
}

function goBackCreateVipOrder(){
    showPage('vipPkProductDetailc',5210);
}

// 畅读拼单
function goBack2VipPkOrderDetail(){
    showPage('vipPkProductDetail',5200);
}

// 小说列表
function goBookList(){
    showPage('bookList',500);
}

// 小说详情
var bookDetailFlag = false;//
var currBook = null;// 当前产品
var chapterListFlag = 0;// 从详情进去是否已经获取列表

function goBookDetail(id){
    chapterListFlag = 0;// 从详情进去是否已经获取列表

    if(bookDetailFlag == false){
        bookDetailFlag = true;
    }else{
        return;
    }

    try{
        if(!id){
            id = getDid();
        }

        currBook = dataSet.get4Cache(id);

        if(currBook){
            // 默认设置为收起
            $("#openClose").html('展开&raquo;');
            $("#detailBookDesc").removeClass("detailBookDescOpen");
            openCloseFlag = 1;

            $("#detailBookIcon").attr('src',picPath(currBook.icon));// 大图
            $("#detailBookIconBG").css('background-image','url(' + picPath(currBook.icon) + ')');
            $("#detailBookTitle").html(currBook.name);// 小说名称

            $("#detailauthoer").html('作者：' +currBook.author);// 进度
            $("#detailtype").html('分类：' +currBook.booktype_name);// 进度
            $("#detailwords").html('字数：' +currBook.wordcounts);// 进度


            $("#detailBookDesc").html(currBook.descp);// 介绍

            //$("#boolchaptertitle").html();// 更新信息 lastvipchapterid
            $("#updatedate").html('更新于' + commUtil.transformDateS(currBook.vipchapterupdatetime*1000));// 更新信息

            if(currBook.commits.length > 0){
                var cnt = templateUtil.render(service.getCommiteList,currBook.commits);
                cnt += '<div class="allComments" onclick="goBookComments();">更多评论&gt;&gt;</div>';

                $("#detailBookCommentList").html(cnt);
            }else{
                var cnt = '<div class="allComments" onclick="goSendCommit();">快抢沙发&gt;&gt;</div>';

                $("#detailBookCommentList").html(cnt);
            }

            // 处理

            setTimeout(function(){bookDetailScroller.refresh();},100);// 滚动

            showPage('bookDetail',1000);
            bookDetailFlag = false;

            getBook4User();// 设置用户阅读权限
            loadChapterList();// 加载章节列表

        }else{
            $.requestData(2,service.getBook, $.toJasonParams({id:id}),function(result){

                if(result.status == 1){
                    var data = result.data;
                    dataSet.add2Cache(data);// 加入缓存
                    currBook = data;

                    // 默认设置为收起
                    $("#openClose").html('展开&raquo;');
                    $("#detailBookDesc").removeClass("detailBookDescOpen");
                    openCloseFlag = 1;

                    $("#detailBookIcon").attr('src',picPath(data.icon));// 大图
                    $("#detailBookIconBG").css('background-image','url(' + picPath(currBook.icon) + ')');
                    $("#detailBookTitle").html(data.name);// 小说名称

                    $("#detailauthoer").html('作者：' +data.author);// 进度
                    $("#detailtype").html('分类：' +data.booktype_name);// 进度
                    $("#detailwords").html('字数：' +data.wordcounts);// 进度


                    $("#detailBookDesc").html(data.descp);// 介绍

                    //$("#boolchaptertitle").html();// 更新信息 lastvipchapterid
                    $("#updatedate").html('更新于' + commUtil.transformDateS(data.vipchapterupdatetime*1000));// 更新信息

                    if(currBook.commits.length > 0){
                        var cnt = templateUtil.render(service.getCommiteList,currBook.commits);
                        cnt += '<div class="allComments" onclick="goBookComments();">更多评论&gt;&gt;</div>';

                        $("#detailBookCommentList").html(cnt);
                    }else{
                        var cnt = '<div class="allComments" onclick="goSendCommit();">快抢沙发&gt;&gt;</div>';

                        $("#detailBookCommentList").html(cnt);
                    }

                    // 处理
                    setTimeout(function(){bookDetailScroller.refresh();},100);// 滚动
                    showPage('bookDetail',1000);
                    bookDetailFlag = false;

                    getBook4User();// 设置用户阅读权限
                    loadChapterList();// 加载章节列表
                }

                hideLoading();
            },function(){
                bookDetailFlag = false;
                hideLoading();
                showMessage(result.message);
            });

        }
    }catch (e){
        bookDetailFlag = false;
    }
}

// 设置用户
function setBook4User(){
    currUserBook.currBookVolumNo = currBook.currBookVolumNo;
    currUserBook.currChapterNo = currBook.currChapterNo;
    storeUtil.set(config.buyKeyword + getUserKey() + currBook.id,currUserBook);// 放到本地存储
}

// 获取用户key
function getUserKey(){
    if(loginUser == null){
        return config.defaultUserKey;
    }else{
        return loginUser.id;
    }
}

// 设置该书用户权限
var currUserBook;// 当前用户权限 当前阅读的 分卷 当前章节 整书购买
function getBook4User(volumNo,chapterNo){
    currUserBook = storeUtil.getJson(config.buyKeyword + getUserKey() + currBook.id);// 获取用户订阅信息

    if(!currUserBook){
        currUserBook = {};

        currUserBook.books_id = currBook.id;// 小说id
        currUserBook.mychapters = -1;// 没有获取过

        if(!chapterNo){// 为0则为0
            chapterNo = 0;
        }

        if(!volumNo){
            volumNo = 0;
        }

        currUserBook.currBookVolumNo = volumNo;// 0
        currUserBook.currChapterNo = chapterNo;// 0
        currUserBook.timestamp = commUtil.getCurrTime();// 当前时间

        currBookVolum = currBook.bookVolums[currUserBook.currBookVolumNo];// 当前分卷


        storeUtil.set(config.buyKeyword + getUserKey() + currBook.id,currUserBook);// 放到本地存储

        getBookVolum4User();// 获取分卷权限

        if(loginUser == null){// 不取数据，直接返回
            return;
        }

        var data = {};
        data.token = loginUser.token;
        data.books_id = currBook.id;

        if(currBook.chargemodel == 1){// 按章节购买
            currUserBook.mychapters = 1;
        }else if(currBook.chargemodel == 3){// 按章节购买
            data.bookvolumes_id = currBookVolum.id;
        }

        $.requestData(2,service.getUserBookPay, $.toJasonParams(data),function(result){

            if(result.status == 1){
                var data = result.data;

                if(currBook.chargemodel == 2){
                    currUserBook.mychapters = data.mychapters;
                    storeUtil.set(config.buyKeyword + loginUser.id + currBook.id,currUserBook);// 放到本地存储
                }else if(currBook.chargemodel == 3){
                    data.timestamp = commUtil.getCurrTime();// 当前时间
                    currUserBookVolum = data;
                    storeUtil.set(config.buyKeyword + loginUser.id + currBook.id + currBookVolum.id,data);// 放到本地存储
                }
            }
        },function(){

        });
    }else{
        currBook.currBookVolumNo = volumNo == undefined ? currUserBook.currBookVolumNo : volumNo;
        currBook.currChapterNo = chapterNo==undefined ? currUserBook.currChapterNo : chapterNo;

        currUserBook.currBookVolumNo = volumNo == undefined ? currUserBook.currBookVolumNo : volumNo;
        currUserBook.currChapterNo = chapterNo==undefined ? currUserBook.currChapterNo : chapterNo;

        currBookVolum = currBook.bookVolums[currUserBook.currBookVolumNo];// 当前分卷
        storeUtil.set(config.buyKeyword + getUserKey() + currBook.id,currUserBook);// 放到本地存储

        getBookVolum4User();// 获取分卷权限
    }
}

var currUserBookVolum;// 用户当前分卷权限
// 获取小说分卷
function getBookVolum4User(){
    currUserBookVolum = storeUtil.getJson(config.buyKeyword + getUserKey() + currBook.id + currBookVolum.id);// 获取用户订阅信息

    if(!currUserBookVolum){

        if(loginUser == null){
            currUserBookVolum = {};
            currUserBookVolum.books_id = currBook.id;
            currUserBookVolum.bookvolumes_id = currBookVolum.id;
            currUserBookVolum.mychapters = -1;

            storeUtil.set(config.buyKeyword + getUserKey() + currBookVolum.id,data);// 放到本地存储
            return;
        }

        var data = {};
        data.token = loginUser.token;
        data.books_id = currBook.id;

        data.bookvolumes_id = currBookVolum.id;

        $.requestData(2,service.getUserBookPay, $.toJasonParams(data),function(result){

            if(result.status == 1){
                var data = result.data;

                data.timestamp = commUtil.getCurrTime();// 当前时间
                currUserBookVolum = data;
                storeUtil.set(config.buyKeyword + loginUser.id + currBook.id + currBookVolum.id,data);// 放到本地存储
            }
        },function(){

        });
    }
}

function goBackBookDetail(){
    showPage('bookDetail',1000);
}

function loadChapterList(){
    var data = {};

    data.id = currBookVolum.id;

    if(!currBookVolum.currCount){// 设置当前索引值
        currBookVolum.currCount = 0;
    }

    data.currCount = currBookVolum.currCount;

    data.zone = currBook.oid;// 小说id
    data.director = 1;// 取数据的方向

    if(chapterListFlag == 1){
        return;
    }

    // 获取章节
    var chapterListPageNo = getChapterListPageNo();
    var myChapterList = storeUtil.getJson(config.bkkey + chapterListPageNo);

    if(myChapterList == null){
        $.requestData(2,service.getChapterList,$.toJasonParams(data),function(result){// 提交服务器
            if(result.status == 1){
                var list = result.data;

                currBookVolum.allCount = list.length;// 总的章节数量
                currChapterList = list;

                chapterListFlag = 1;// 从详情进去是否已经获取列表

                setTimeout(function(){
                    storeUtil.set(config.bkkey + chapterListPageNo,list);
                    addChapter2Book(list);
                },10);
            }
        },function(){// 设置类型

        });
    }else{
        currBookVolum.allCount = myChapterList.length;// 总的章节数量
        currChapterList = myChapterList;

        chapterListFlag = 1;// 从详情进去是否已经获取列表
    }
}

// 全部评论
function goBookComments(){
    var data = {};
    //data.token = loginUser.token;
    data.books_id = currBook.id;
    data.zone = currBook.oid;

    var chaptersListScoller = new iScroller({
        id:"commentsListScroller",
        url:service.getCommiteList,
        templateId:service.getCommiteList,
        paramters:data,
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"bookCommentList",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:true
    });

    showPage('commentsList',1100);
}

var chaptersListScoller = null;// 章节列表
var currChapterList4BookVolumeId = "";// 当前渲染的列表
// 小说目录
function goChaptersList(){
    if(currBookVolum.id == currChapterList4BookVolumeId){
        showPage('chaptersList',1200);
        return;
    }

    ascDescFlag = 1;// 默认升序
    $("#chapterListName").html(currBook.name);
    $("#chapterListCount").html('共' + currBook.chaptercounts + '章');



    if(chapterListFlag == 0){
        var data = {};

        data.id = currBookVolum.id;

        if(!currBookVolum.currCount){// 设置当前索引值
            currBookVolum.currCount = 0;
        }

        data.currCount = currBookVolum.currCount;

        data.zone = currBook.oid;// 小说id
        data.director = 1;// 取数据的方向

        var chapterListPageNo = getChapterListPageNo();
        var myChapterList = storeUtil.getJson(config.bkkey + chapterListPageNo);

        if(myChapterList == null){
            $.requestData(2,service.getChapterList,$.toJasonParams(data),function(result){// 提交服务器
                if(result.status == 1){
                    var list = result.data;

                    currBookVolum.allCount = list.length;// 总的章节数量
                    currChapterList = list;

                    var cnt = templateUtil.render(service.getChapterList,list);
                    $("#chapterListContent").html(cnt);

                    setTimeout(function(){chaptersListScroller.refresh();},100);// 目录

                    chapterListFlag = 1;// 从详情进去是否已经获取列表

                    setTimeout(function(){
                        storeUtil.set(config.bkkey + chapterListPageNo,list);
                        addChapter2Book(list);
                    },10);
                }
            },function(){// 设置类型

            });
        }else{
            currBookVolum.allCount = myChapterList.length;// 总的章节数量
            currChapterList = myChapterList;

            var cnt = templateUtil.render(service.getChapterList,list);
            $("#chapterListContent").html(cnt);

            setTimeout(function(){chaptersListScroller.refresh();},100);// 目录

            chapterListFlag = 1;// 从详情进去是否已经获取列表
        }
    }else{
        var cnt = templateUtil.render(service.getChapterList,currChapterList);
        $("#chapterListContent").html(cnt);

        setTimeout(function(){chaptersListScroller.refresh();},100);// 目录
    }

    currChapterList4BookVolumeId = currBookVolum.id;// 设置当前小说分卷id
    showPage('chaptersList',1200);
}

// 设置升序降序
var ascDescFlag = 1;// 1:升序 2:降序
function setAscDesc(){
    if(ascDescFlag == 1){
        var cnt = templateUtil.render(service.getChapterList,currChapterList,true);
        $("#chapterListContent").html(cnt);

        setTimeout(function(){chaptersListScroller.refresh();},100);// 目录

        hide("bookChaptersAsc");
        show2("bookChaptersDesc");

        ascDescFlag = 2
    }else{
        var cnt = templateUtil.render(service.getChapterList,currChapterList);
        $("#chapterListContent").html(cnt);

        setTimeout(function(){chaptersListScroller.refresh();},100);// 目录

        show2("bookChaptersAsc");
        hide("bookChaptersDesc");


        ascDescFlag = 1;
    }
}

// 升序和倒序
function setAscDesc1(){
    if(ascDescFlag == 1){
        var cnt = templateUtil.render(service.getChapterList1,currChapterList,true);
        $("#readerChaptersListContent").html(cnt);

        setTimeout(function(){readerChaptersListScroller.refresh();},100);// 目录

        hide("readerBookChaptersAsc");
        show2("readerBookChaptersDesc");

        ascDescFlag = 2
    }else{
        var cnt = templateUtil.render(service.getChapterList1,currChapterList);
        $("#readerChaptersListContent").html(cnt);

        setTimeout(function(){readerChaptersListScroller.refresh();},100);// 目录

        show2("readerBookChaptersAsc");
        hide("readerBookChaptersDesc");


        ascDescFlag = 1;
    }
}

// 小说详情
function readerBookMarker(){
    show("readerBookMarker");
}

var currChapterList4BookVolumeId1 = "";// 当前渲染的列表
// 小说列表
function chapterList4Read(){

    if(currBookVolum.id == currChapterList4BookVolumeId1){
        show("readerInfoDiv");
        return;
    }

    $("#chapterListName1").html(currBook.name);
    $("#chapterListCount1").html('共' + currBook.chaptercounts + '章');

    if(ascDescFlag == 1){
        var cnt = templateUtil.render(service.getChapterList1,currChapterList);
        $("#readerChaptersListContent").html(cnt);

        setTimeout(function(){readerChaptersListScroller.refresh();},100);// 目录

        show2("readerBookChaptersAsc");
        hide("readerBookChaptersDesc");

    }else{
        var cnt = templateUtil.render(service.getChapterList1,currChapterList,true);
        $("#readerChaptersListContent").html(cnt);

        setTimeout(function(){readerChaptersListScroller.refresh();},100);// 目录

        hide("readerBookChaptersAsc");
        show2("readerBookChaptersDesc");
    }

    currChapterList4BookVolumeId1 = currBookVolum.id;
    show("readerInfoDiv");
}

// 小说书签
function bookInfo4Read(){
    show("readerBookDetail");
}

// 获取章节
function showBookInfo(){
    $("#bookinfoicon").attr('src',picPath(currBook.icon));
    $("#bookinfotitle").html(currBook.name);
    $("#bookinfoauthor").html(currBook.author);
    $("#bookinfotype").html(currBook.booktype_name);
    $("#bookinfodescp").html(currBook.descp);

    showPage('bookInfo',8000);
}

var fisrtReadBookFlag = 1;// 是否第一次进入阅读 1：第一次 2：第二次
var prezindexoffsize = 1000;// 偏移量 前偏移量
var postzindexoffsize = 999;// 偏移量 后偏移量
var currChapterZindex = {};
var currChapterZindexData = [];//当前章节数据

function goMyReader4Book(){


    var bk = storeUtil.getJson(config.keyPreWord + currBook.id);
    if(!bk){// 第一次阅读该书
        storeUtil.set(config.keyPreWord + currBook.id,currBook);// 设置为阅读
        showBookInfo();
        return;
    }else{
        hideReadBar();// 隐藏阅读按钮
        goMyReader(currBook.id);
    }
}

// 从章节列表进入阅读
function goReader4ChaperList(){
    fisrtReadBookFlag = 1;// 是否第一次进入阅读 1：第一次 2：第二次
    var chapterid = getDid()*1;

    if(ascDescFlag == 2){
        chapterid = currChapterList.length - (chapterid + 1);
    }
    goMyReader(currBook.id,currBook.currBookVolumNo,chapterid);

    hide('myReaderChapters');
}

var currOptModel = 1;// 1:正常阅读操作模式 2：书架编辑模式
var timeOutEvent=0;// 书架编辑模式
var currBookChecked = {};// 选择的小说

// 开始点击
function startTourchBook(){
    timeOutEvent = setTimeout(function(){
        timeOutEvent = 0;
        processShelfEdit();// 编辑书架模式
    },500);

    event.preventDefault();
}

// 移动
function touchMoveBook(){
    clearTimeout(timeOutEvent);
    timeOutEvent = 0;
}

// 结束
function endTouchBook(id){
    clearTimeout(timeOutEvent);

    if(timeOutEvent != 0){
        processShelfRead(id);
    }

    return false;
}

// 书架编辑
function processShelfEdit(){
    currOptModel = 2;
    $("[id^=sbk_]").addClass('bookshelfnck');
    $("[id^=ck_]").removeClass('hide');

    show2("editshelftool");
}

// 取消编辑书架
function cancleEditBookShelf(){
    hide("editshelftool");
    currOptModel = 1;
    $("[id^=sbk_]").removeClass('bookshelfnck');
    $("[id^=ck_]").addClass('hide');
    $("[id^=ck_]").removeClass('bookshelfchecked');

    currBookChecked = {};// 选择的小说
}

// 删除书架上的小说
function delShelfBook(){
    // 删除界面上的元素
    for(var bk in currBookChecked){
        console.log(bk + '  ' + currBookChecked[bk]);
        $("#sbk_" + bk).remove();
    }

    hide("editshelftool");
    currOptModel = 1;
    $("[id^=sbk_]").removeClass('bookshelfnck');
    $("[id^=ck_]").addClass('hide');
    $("[id^=ck_]").removeClass('bookshelfchecked');

    var ids = '';
    // 判读是否登录，没有登录只需要删除本地的
    for(var i = 0; i < currDefaultShelfBooks.length; ){
        var bk = currDefaultShelfBooks[i];
        if(currBookChecked[bk.books_id]){
            currDefaultShelfBooks.splice(i,1);

            if(ids == ''){
                ids += bk.books_id;
            }else{
                ids += "," + bk.books_id;
            }
            continue;
        }

        ++i;
    }

    // 已经登录删除服务器端的
    for(var i = 0; i < currUserShelfBooks.length; ){
        var bk = currUserShelfBooks[i];
        if(currBookChecked[bk.books_id]){
            currUserShelfBooks.splice(i,1);

            if(ids == ''){
                ids += bk.books_id;
            }else{
                ids += "," + bk.books_id;
            }
            continue;
        }

        ++i;
    }

    storeUtil.set(getShelfKey(),currUserShelfBooks);

    // 登录了的就删除
    if(loginUser != null){
        $.requestData(2,service.delShelfList, $.toJasonParams({id:ids,token:loginUser.token}),function(result){
            if(result.status == 1){

            }

            hideLoading();
        },function(){
            showMessage(result.message);
        });
    }
    currBookChecked = {};// 选择的小说

    showMessage('删除成功');

}

// 从书架进行阅读
function processShelfRead(id){
    if(currOptModel == 1){// 正常操作模式
        goMyReader(id);
    }else{// 书架编辑模式
        if(currBookChecked[id]){
            currBookChecked[id] = undefined;
            $("#sbk_" + id).addClass('bookshelfnck');
            $("#ck_" +id).removeClass('bookshelfchecked');
        }else{
            currBookChecked[id] = 1;
            $("#sbk_" + id).removeClass('bookshelfnck');
            $("#ck_" +id).addClass('bookshelfchecked');
        }

    }
}

// 将小说加入到缓存中
function addBook2Cache(){

}

// 设置到书架
function setBook2Shelf(){
    $("#myCurrentBookIcon").attr('src',picPath(currBook.icon));// 大图
    $("#myCurrentBookIconBG").css('background-image','url(' + picPath(currBook.icon) + ')');
    $("#myCurrentBookTitle").html(currBook.name);// 小说名称

    $("#detailauthoer").html('作者：' +currBook.author);// 进度
    $("#detailtype").html('分类：' +currBook.booktype_name);// 进度
    $("#myCurrentBookProgressInfo").html('读至1%：');// 进度
}

// 阅读器
var currChapter = null;
function goMyReader(id,volumNo,chapterid){
    // 判断该小说是否为第一次阅读
    fisrtReadBookFlag = 1;// 是否第一次进入阅读 1：第一次 2：第二次
    prezindexoffsize = 1000;// 偏移量 前偏移量
    postzindexoffsize = 999;// 偏移量 后偏移量
    currChapterZindex = {};
    currChapterZindexData = [];//当前章节数据
    currPageCount = 0;// 当前总页数
    currPageNo = 0;// 当前页码

    hideReadBar();// 隐藏工具按钮

    // 从缓存中获取小说信息

    // 没有小说信息则从服务器端获取


    // 判断用户要阅读的章节有没有，没有的话从服务器端获取


    try{
        if(id){
            currBook = dataSet.get4Cache(id);// 加入缓存
        }

        if(currBook == null){
            $.requestData(2,service.getBook, $.toJasonParams({id:id}),function(result){

                if(result.status == 1){
                    var data = result.data;
                    dataSet.add2Cache(data);// 加入缓存
                    currBook = data;

                    setBook2Shelf();

                    // 加载内容
                    chapterContent = [];// 先清空数组


                    getBook4User(volumNo,chapterid);// 设置
                    loadChapterList();// 加载章节列表

                    autoLoadChapterList(0);// 自动加载

                    //showPage('myReader',10000);
                }

                hideLoading();
            },function(){
                bookDetailFlag = false;
                hideLoading();
                showMessage(result.message);
            });
        }else{
            chapterContent = [];// 先清空数组

            setBook2Shelf();

            getBook4User(volumNo,chapterid);// 设置
            loadChapterList();// 加载章节列表

            autoLoadChapterList(0);// 自动加载

            //showPage('myReader',10000);
        }
    }catch (e){
        //bookDetailFlag = false;
        console.log(e);
    }
}

// 返回我的阅读
function goBackMyReader(){
    hideReadBar();// 隐藏工具按钮
    showPage('myReader',10000);
}


var currBookVolum;// 当前分卷
// 预取内容
function getContent4Ready(index){
    try{
        if(id){
            currBook = dataSet.get4Cache(id);// 加入缓存
        }
        var param = {};
        param.id = chapterid;
        currChapter = dataSet.get4Cache(chapterid);// 加入缓存

        var bookVolum = currBook.bookVolums[currBook.currBookVolumNo];
        bookVolum.currCount = index;

        hideReadBar();// 隐藏阅读按钮

        chapterContent = [];// 先清空数组
        autoLoadChapterList(0);// 自动加载

        showPage('myReader',10000);
    }catch (e){
        bookDetailFlag = false;
    }
}

// 显示或隐藏阅读按钮
var readOpt = false;// 隐藏按钮
function hideShowReaderOpt(){
    if(readOpt == false){
        readOpt = true;
        show2("myReaderTitle");
        show2("myReaderOpt");
    }else{
        readOpt = false;
        hide("myReaderTitle");
        hide("myReaderOpt");
        hide("readerSetFooter");
    }
}

// 隐藏工具按钮
function hideReaderOpt(){
    readOpt = false;
    hide("myReaderTitle");
    hide("myReaderOpt");
    hide("readerSetFooter");
}

function goRaidersHome(){// 攻略首页

    setTimeout(function(){raiderScroller.refresh();},50);
    showPage('raidersHome',30);
}

// 阅读时的目录显示
function goReaderChapters(){
    $("#readBookDetailListIcon").attr('src',picPath(currBook.icon));
    $("#readBookDetailListName").html(currBook.name);
    $("#readBookDetailListAuthor").html(currBook.author);
    $("#readBookDetailListType").html(currBook.booktype_name);
    $("#readBookDetailListDescp").html(currBook.descp);

    show2('myReaderChapters');
}

// 活动列表
function goActivityList(){
    var activityListScroller = new iScroller({
        id:"activityListScroller",
        url:service.getActivity,
        templateId:service.getActivity,
        paramters:{},
        isShare:true,
        autoLoad:false,
        director:3,//只向下获取数据
        pageFlag:false,
        request:2,
        contentId:"activityListContent",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:true
    });

    setTimeout(function(){activityListScroller.refresh();},500);
    showPage('activityList',3100);
}


function setCloseScreen(num){
    $("[id^=csc_]").addClass('hide');
    $("#csc_" + num).removeClass('hide');
}

// 书单列表
function goBookBillList(){
    var bookBillListScroller = new iScroller({
        id:"bookBillListScroller",
        url:service.getBookList,
        templateId:service.getBookList,
        paramters:{},
        isShare:true,
        autoLoad:false,
        director:3,//只向下获取数据
        pageFlag:false,
        request:2,
        contentId:"bookBillListContent",
        refreshFlag:false,
        noDataProcesser:function(){},
        cacheData:true
    });

    setTimeout(function(){bookBillListScroller.refresh();},500);
    showPage('bookBillList',3200);
}

// 进入书单详情
function goBookBillDetail(){
    var id = getDid();

    var bl = dataSet.get4Cache(id);

    var cnt = templateUtil.render(service.bookListDetail,bl);

    $("#bookBillListContent1").html(cnt);

    setTimeout(function(){bookBillListScroller1.refresh();},500);
    showPage("bookBillList1",3300);
}

function goBack2BookBillDetail(){
    showPage("bookBillList1",3300);
}

var currCount = 1;// 当前签到
// 今天是否已经签到
function isSignToday(){
    var key = config.sgnKey + commUtil.getBeginDateTimestamp();

    var mySign = storeUtil.get(key);

    if(mySign){
        return true;
    }

    return false;
}

// 签到
function sendSign(){
    var count = $("#currSing").attr("did");// 数量
    var data = {};
    data.token = loginUser.token;
    data.counts = count;

    // 首先判断今天是否已签到，如果已经签到就不能签到了

    if(isSignToday()){
        showMessage('今天已经签到，明天再来吧');
        return;
    }



    if(count > currCount){
        count = currCount;
    }

    if(count == 0){
        count = 1;
    }

    $.requestData(2,service.addSignRecord,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){
            var dts = result.data;

            var key = config.sgnKey + commUtil.getBeginDateTimestamp();

            var mySign = storeUtil.set(key,1);// 缓存签名数据

            $("#quanerCount").html(dts.coupanbalance + '书券');

            count = count%8;
            currCount = (count+1)%8;

            var cnt = '';// 内容
            for(var i = 0; i < 7; ++i){
                cnt +=   '<div class="checkPageListItem"  ' + ((i==count-1)?'id="currSing" did="' + (i+1) + '" ':'') + '">'
                    +   '<div class="checkPageListItemHeader">'
                    +   '<div class="checkPageListItemHeaderChecked ' + (i>=count?'hide':'') + '">'
                    +   '   <img src="./images/check.png" class="checkPageListItemHeaderCheckedIcon">'
                    +   '    </div>'
                    +   '    <div class="checkPageListItemHeaderNotChecked ' + (i<count?'hide':'') + '">'
                    +   '        <img src="./images/quaner.png" class="checkPageListItemQuanIcon">'
                    +   '        X ' + (i+1) * 2
                    +   '        </div>'
                    +   '    </div>'
                    +   '    <div class="checkPageListItemTitle">'
                    +   '    第' + (i+1) + '天'
                    +   '    </div>'
                    +   '</div>'
            }

            $('#checkPageList').html(cnt);

        }

    },function(){

    });
}


// 签到
function goCheckPage(){
    if(loginUser == null){
        go4Login();
        return;
    }

    var coupanbalance = 0;
    if(loginUser.coupanbalance){
        coupanbalance = loginUser.coupanbalance;
    }

    $("#quanerCount").html(coupanbalance + '书券');

    if(isSignToday()){
        $("#todaystatus").html('今日已签到');
    }else{
        $("#todaystatus").html('今日未签到');
    }

    var data = {};
    data.token = loginUser.token;

    $.requestData(2,service.getSignRecordsList,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){
            var dts = result.data;

            // 根据连续签到产生界面
            var count = 0;
            if(dts.length > 0){
                count = dts[0].counts;
            }

            count = count%8;
            currCount = count;

            var cnt = '';// 内容
            for(var i = 0; i < 7; ++i){
                cnt +=   '<div class="checkPageListItem"  ' + ((i==count-1)?'id="currSing" did="' + (i+1) + '" ':'') + ' >'
                     +   '<div class="checkPageListItemHeader">'
                     +   '<div class="checkPageListItemHeaderChecked ' + (i>=count?'hide':'') + '">'
                     +   '   <img src="./images/check.png" class="checkPageListItemHeaderCheckedIcon">'
                     +   '    </div>'
                     +   '    <div class="checkPageListItemHeaderNotChecked ' + (i<count?'hide':'') + '">'
                     +   '        <img src="./images/quaner.png" class="checkPageListItemQuanIcon">'
                     +   '        X ' + (i+1) * 2
                     +   '        </div>'
                     +   '    </div>'
                     +   '    <div class="checkPageListItemTitle">'
                     +   '    第' + (i+1) + '天'
                     +   '    </div>'
                     +   '</div>'
            }

            $('#checkPageList').html(cnt);

        }

    },function(){

    });

    showPage('myCheckPage',3300);
}

var currTipFlag = 1;// 要提示 2：确定 3：取消
function tip2Add2Shelf(){
    show2("tip4Add2Shelf");
}

// 取消加入书架
function cancleAdd2Shel(){
    currTipFlag = 2;
    hide("tip4Add2Shelf");

    goBack();
}

// 确定加入书架
function okAdd2Shelf(){
    var id = currBook.id;
    if(isInShelf(id)){
        showMessage('本书已在书架中');
        return;
    }else{
        addShelfCache(id);// 放入书架
    }

    if(loginUser == null){
        showMessage('加入书架成功');

        currTipFlag = 3;
        hide("tip4Add2Shelf");
        goBack();
        return;
    }

    var currBookVolumNo = 0;
    var currChapterNo = 0;

    if(!id && currBook){
        id = currBook.id;
        currBookVolumNo = currBook.currBookVolumNo;
        currChapterNo = currBook.currChapterNo;
    }

    var data = {
        token:loginUser.token,
        id:id,
        currBookVolumNo:currBookVolumNo,
        currChapterNo: currChapterNo
    };//

    $.requestData(2,service.add2Shelf,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){
            var user = result.data;
            showMessage('加入书架成功');

            currTipFlag = 3;
            goBack();
        }

    },function(){

    });


    hide("tip4Add2Shelf");

}

function goBack(type){// 返回功能

    if(preStatus == 10000 && currTipFlag == 1){
        console.log('从阅读器返回');
        if(!isInShelf(currBook.id)){
            tip2Add2Shelf();
            return;
        }
    }

    currTipFlag = 1// 重置提示标志

	var status = getStatus(type);

    if(status == 8000){
        status = backOnce(type);
    }

	switch(status){
		case 10:// 书架
            goBackInvestHome();
			break;
		case 20:// 书城
            goBackLoanHome();
			break;
        case 21:// 书城
            studyData();
            break;
        case 23:// 个人中心首页
            goPersonal();
            break;
        case 24:// 知识竞赛
            goPage('competition',24);
            break;

        case 26:
            goPage('studyplanadd',26);
            break;

        case 31://笔记界面  zzc20180709
            goPage('noteDetail',31);
            break;

        case 32:
            goPage('quiz',32);
            break;

        case 33:
            goPage('noteBookDetail',33);
            break;

        case 34:
            goPage('collection',34);
            break;

        case 35:
            goPage('record',35);
            break;

        case 341:
            goPage('collectionDetail',341);
            break;

        case 4210://进入账号详情
            goAccount();
            break;
        case 4240://进入我的账户
            goMyAccount();
            break;

        case 4250://已购买
            goPurchased();
            break;

        case 4260://帮助中心
            goHelp();
            break;

        case 4215://进入第一个改绑界面
            goChangePhone1();
            break;



		case 30:// 发现
            goRaidersHome();
			break;	
		case 40:// 个人中心首页
            goMyHome();
			break;
        case 41:// 个人中心
            goPersonal();
            break;
        case 50:// 拼单
            goAAOrder();
            break;
        case 70://搜索
            searchHome();
            break;
        case 510:// 拼单产品列表
            goLuckPkProductList();
            break;
        case 550://

            break;
        case 5100:// 手气拼单详情
            goBackLuckPkOrderDetail();
            break;
        case 5200:// VIP拼单
            goBack2VipPkOrderDetail();
            break;

        case 5110:// 手气拼单详情
            goBackCreateLuckyOrder();
            break;
        case 5210:// VIP拼单
            goBackCreateVipOrder();
            break;
        case 100:// 类型
            goBookTypes();
            break;

        case 200:// 排行
            goBackTopList();
            break;

        case 300:// 限免
            goFreeList();
            break;
        case 400:// 拼单专区
            goAAOrder();
            break;

        case 500://小说列表 按类型
            goBookList4Type();
            break;

		case 1000:// 小说详情
            goBackBookDetail();
			break;
        case 1100:// 全部评论
            goBookComments();
            break;
        case 1110:// 评论
            goBookComments();
            break;
        case 1200:// 小说目录
            goChaptersList();
            break;
        case 10000:// 阅读器
            goBackMyReader();
            break;
        case 3100:// 活动列表
            goActivityList();
            break;
        case 3200:// 书单列表
            goBookBillList();
            break;
        case 3250:// 书单详情列表
            goBack2BookBillDetail();
            break;
        case 3300:// 签到
            goCheckPage();
            break;

        case 30000:// 登录
            go4Login();

            break;



        case 1000://标的详细
            goInvestDetail();
            break;
        case 1010://店铺首页
            goBackStoreHome();
            break;

        case 240:// 产品详细
            goMerchantDetail();
            break;

        case 241:// 产品借贷
            goMerchantLoan();
            break;

        case 420:// 我的订单
            goMyOrders();
            break;
        case 4100:// 开通艺人主页
            goOpenStar();
            break;
        case 4110:// 开通艺人主页
            goOpenStar1();
            break;
        case 4120:// 开通艺人主页
            goOpenStar2();
            break;
        case 4130:// 开通艺人主页
            goOpenStar3();

            //

        case 4300:// 我的折扣
            back2goMyDiscount();
            break;

        case 440:// 我的最爱
            goMyLoves();
            break;

        case 430:// 我的订单
            goMyOrder();
            break;

        case 446:// 我的设置
            goMySetting();

        default:
           
            break;		
	}
}
// 导航功能结束


function goLogin(){// 登录
	show("loginC");
}

function goRegiste(){// 注册
	show("registC");
}

function checkProtocl(e){
	if(e.checked == true){
		goProtocl();
	}
}

var protoclInit = false;
function goProtocl(){// 显示注册条款
	show("protoclC");

	if(protoclInit == false){
		protoclInit = true;
		new iScroll("protocl");
	}
}

function goStart(){// 启动动画
	var data = '';
	if($("#loginName").val() == ''){
		$("#loginName").attr('placeholder','昵称/手机号码/邮件不能为空');
		return;
	}else{
		data += "loginName=" + $("#loginName").val() +"&";
	}

	if($("#loginPassword").val() == ''){
		$("#loginPassword").attr('placeholder','密码不能为空');
		return;
	}else{
		data += "password=" + $("#loginPassword").val() +"&";
	}

	$.postData(loginUrl, data,function(result){// 提交服务器		
		loginSuccess(result);// 登录处理
	},function(){
		showMessage("网络异常，稍后重试");
	});
}

function showCities(){// 显示城市
	if($("#city").val() != ''){
		$("#cities").removeClass("hide");
	}
}

function hideCities(){// 隐藏城市
	$("#cities").addClass("hide");
}

function showStore(){// 显示门店
	if($("#city").val() != ''){
		$("#stores").removeClass("hide");
	}
}

function hideStore(){// 隐藏城市
	$("#stores").addClass("hide");
}


function processBigStar(stars){
    var redStars = Math.floor(stars);
    var selfStars = Math.ceil(stars) - redStars;
    var blackStars = 5 - (redStars + selfStars);
    var content = "";
    for(var i = 0; i < redStars; ++i){
        content += '<img src="images/star.png" class="star">';
    }

    if(selfStars > 0){
        content += '<img src="images/star1.png" class="star">';
    }

    for(var j = 0; j < blackStars; ++j){
        content += '<img src="images/star2.png" class="star">';
    }

    return content;
}

function processStar(stars){
    if(stars == 1){
        stars = 5;
    }else if(stars == 2){
        stars = 4;
    }else{
        stars = 3;
    }
    var redStars = Math.floor(stars);
    var selfStars = Math.ceil(stars) - redStars;
    var blackStars = 5 - (redStars + selfStars);
    var content = "";
    for(var i = 0; i < redStars; ++i){
        content += '<img src="images/star.png" class="commentStar">';
    }

    if(selfStars > 0){
        content += '<img src="images/star1.png" class="commentStar">';
    }

    for(var j = 0; j < blackStars; ++j){
        content += '<img src="images/star2.png" class="commentStar">';
    }

    return content;
}


/**上传图片相关函数**/
function goCaptionPhoto(){// 显示拍照
    show2("captionPhoto");
    hide('loading');
}

function takePhotoUpload(){// 拍照上传
    nativeUtils.takePhoto(123);
    show2("loading");
}

function pickPhotoUpload(){// 拍照上传
    nativeUtils.uploadPhoto(123);
    show2("loading");
}

function unionpaymentlocal(obj){// pos通进场支付
    if(loginUser == null){
        go4Login();
        return;
    }

    //$(obj).addClass("btchecked").siblings().removeClass("btchecked");
    nativeUtils.unionpaymentlocal(loginUser.tel);

    hide('Footerhuiicon');
}

function unionpaymentremote(obj){// pos通远程支付
    if(loginUser == null){
        go4Login();
        return;
    }

    $(obj).addClass("btchecked").siblings().removeClass("btchecked");

    nativeUtils.unionpaymentremote(123);
}

//var images = [];// 数组
function uploadCallBack(message){
    //alert(message);
    var result = JSON.parse(message);

    //alert(result.result + '   coco  ' + result.filename);
    if(result.result == 'Y'){
        hide("captionPhoto");

        $("#myheadericon").attr('src',picPath(result.filename));

        hide('loading');

        goBack();

        loginUser.icon = result.filename;// 设置头像
        setTimeout(function(){storeUtil.set(config.userKey,loginUser);},30);//  保存用户信息

        var data = {};// 数据
        data.id = loginUser.id;
        data.value = loginUser.icon;
        data.token = loginUser.token;
        data.name = 'icon';

        $.requestData(2,service.setPersonInfo,$.toJasonParams(data),function(result){// 提交服务器
            if(result.status == 1){
            }else{
            }

        });

    }else{
        showMessage('上传失败，稍后再试');
        hide('loading');
    }
}


var shareContent = "";
function goInvestShare(type){// 分享
    show("investShare");
    setStatus(2000);

    shareContent = type;
    switch (type){
        case 1:// 产品
            //shareContent += ","+ currProduct.id + "," + currProduct.icon + "," + currProduct.name;
            break;
        case 2:// 商户
            shareContent += ","+ currMerchant.entitycode + "," + currMerchant.icon + "," + currMerchant.entityname +'(' + currMerchant.adstitle + ')';
            break;

        case 3:// 活动
            //shareContent += ","+ currActivity.id + "," + currActivity.icon + "," +  currActivity.title;
            break;
    }

}

function share2WXQQ(shareWay){// 分享产品，商户，活动
    // 分享目的地+数据类型+id+title
    var content = "" + shareWay + "," + shareContent;
    nativeUtils.share(content);
}

// 隐藏按钮
function hideReadBar(){
    readermodel = 1;
    readOpt = false;
    hide("myReaderTitle");
    hide("myReaderOpt");
    hide("readerSetFooter");
}

// 阅读操作
var readermodel = 1;// 阅读器模式 1：阅读 2：隐藏按钮状态
var readOptMoel = 1;// 1 没有效果 2: 滑动 3：仿真 4：覆盖

// 为其他效果做准备
function prepare4GoodReader(){
    if(readOptMoel == 1){
        $("#bookContent").removeClass('readerContainer');

        var width = $("body").width() - 40;// 文字显示区域大小 40
        var height = $("body").height() - 90;// 文字显示区域大小

        var words = Math.floor(width / (currFontSize+2)); // 每行显示文字数量

        var dist = (width - (currFontSize+2) * words) / 2;// 内边距

        $("#bookContent").html('<div><div class="readerBookTitle" id="readerTitle">我想和你好好的</div><div class="readerChapterTitle" id="readerChapter">第1章 倘若有来生</div><div class="readercontent" id="readercontent" style="padding-left:' + dist + 'px"></div></div>');

        show2("bookContent");
        hide("bookContent1");
    }else if(readOptMoel == 2){

        show2("bookContent");
        hide("bookContent1");
    }else if(readOptMoel == 3){
        if(fisrtReadBookFlag == 1){// 第一次阅读
            $("#bookContent1").html('<div class="flipbook-viewport"><div class="container"><div class="flipbook" id="flipbook"></div></div></div>');
        }

        show2("bookContent1");
        hide("bookContent");
    }else if(readOptMoel == 4){
        if(fisrtReadBookFlag == 1){// 第一次阅读
            $("#bookContent").html('');
        }

        show2("bookContent");
        hide("bookContent1");
    }
}


var currPageCount = 0;// 当前阅读器的总章数
var currPageNo = 0;// 当前阅读页码
var currPageZindex = 0;// 降序
// 给DOM元素绑定事件
function bindTouch4Reader(id){
    var self = $("#" + id);
    self.unbind();
    //self.css("-webkit-transform", "translateX(0)");
    self.css("-webkit-transform-style","preserve-3d");
    self.data("page","");

    var preEndX = 0;// x累计滑动
    var preEndY = 0;// y累计滑动

    var	page = 0;// 初始页码
    var director = 0;// 0:没有开始滑动，1:x方向，2：y方向

    // 滑动加速度
    var lastMoveTime = 0;
    var lastMoveStartY = 0;
    var stopInertiaMove = false; // 是否停止缓动


    var pageWidth = self.parent().width();
    if(pageWidth == 0){
        pageWidth = $('body').width();
    }

    //prepare4GoodReader();// 准备设置不同模式


    if(readOptMoel == 1){// 没有效果的阅读模式
        self.bind('touchstart', function(){
            var x = eventUtil.getPoint(event).x;
            var y = eventUtil.getPoint(event).y;// y 轴
            self.animStop().data("touchBegin", true).data("startX", x).data("endX", x).data("startY", y).data("endY", y);

        }).bind('touchmove', function(){
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

                    self.data("moving", true).data("endX", x);//

                    if(moveY != 0){// 响应上下滚动事件
                        return true;
                    }
                    return true;// 修改事件响应
                }
            }).bind('touchend', function(){

                if(readermodel == 2){//
                    readermodel = 1;
                    hideShowReaderOpt();
                    return;
                }

                if($(this).data("touchBegin")){
                    self.data("touchBegin", false).data("moving", false);
                    var startX = self.data("startX"), endX = self.data("endX"),
                        page = self.data("page") || 0,
                        moveX = endX - startX;

                    director = 0;// 重置滑动标识

                    if(readOptMoel == 1){// 无效果,其他有效果的操作，在没有滑动时不翻页
                        if(moveX == 0){
                            var screenX = $("#bookContent").width();
                            var clientX = endX;

                            var optWidth = 60;// 中间40个像素为点击操作区
                            var optBegin = screenX / 2 - optWidth / 2;
                            var optEnd = screenX / 2 + optWidth;

                            // 中间40个像素为点击操作，左边为前翻页，右边为后翻页

                            var opt = 0;// 点击 0 , 前翻 1 后翻 2

                            if(clientX < optBegin){// 左侧
                                opt = 1;
                            }else if(clientX > optEnd){// 右侧
                                opt = 2;
                            }

                            switch (opt){
                                case 0:
                                    hideShowReaderOpt();
                                    readermodel  = 2;
                                    break;
                                case 1:
                                    readermodel  = 1;
                                    goChapterTiles(-1);// 前翻页
                                    break;

                                case 2:
                                    readermodel  = 1;
                                    goChapterTiles(1);// 后翻页
                                    break;
                            }
                        }
                    }

                    if(moveX > 0){// 向右拉
                        goChapterTiles(-1);// 前翻页
                        readermodel  = 1;
                    }else if(moveX < 0){// 向左拉
                        goChapterTiles(1);// 后翻页
                        readermodel  = 1;
                    }

                    return true;// 修改事件响应
                }
            });
    }else if(readOptMoel == 2){// 滑动阅读效果模式
        var slider = function(number, tempDuration){
            pageWidth = self.parent().width();
            if(pageWidth == 0){
                pageWidth = $('body').width();
            }
            currPageNo = number >= 0 ? number-1 : 0;

            moveX = -(++currPageNo) * pageWidth / $("#" + id).width() * 100 + "%";
            self.animation({x: moveX}, tempDuration || 800, function(){

            });

            // 处理 滑动到边上的情况
        };

        self.bind('touchstart', function(){
            var x = eventUtil.getPoint(event).x;
            var y = eventUtil.getPoint(event).y;// y 轴
            self.animStop().data("touchBegin", true).data("startX", x).data("endX", x).data("startY", y).data("endY", y);

        }).bind('touchmove', function(){
                if(self.data("touchBegin")){
                    var pageWidth = self.parent().width(),
                        x = eventUtil.getPoint(event).x,
                        moveX = x - self.data("startX");
                    moveX = ((-pageWidth * currPageNo) + moveX) / self.width() * 100 + "%";
                    self.data("moving", true).data("endX", x).animation({x: moveX}, 0);


                    var y = eventUtil.getPoint(event).y;
                    var moveY = y - self.data("startY");

                    if(moveY != 0){// 响应上下滚动事件
                        return true;
                    }

                    return true;// 修改事件响应
                }
            }).bind('touchend', function(){

                if(readermodel == 2){//
                    readermodel = 1;
                    hideShowReaderOpt();
                    return;
                }

                if($(this).data("touchBegin")){
                    self.data("touchBegin", false).data("moving", false);
                    var startX = self.data("startX"), endX = self.data("endX"),
                        moveX = endX - startX;

                    director = 0;// 重置滑动标识


                    if(moveX == 0){
                        var screenX = $("#bookContent").width();
                        var clientX = endX;

                        var optWidth = 60;// 中间40个像素为点击操作区
                        var optBegin = screenX / 2 - optWidth / 2;
                        var optEnd = screenX / 2 + optWidth;

                        // 中间40个像素为点击操作，左边为前翻页，右边为后翻页

                        var opt = 0;// 点击 0 , 前翻 1 后翻 2

                        if(clientX < optBegin){// 左侧
                            opt = 1;
                        }else if(clientX > optEnd){// 右侧
                            opt = 2;
                        }

                        switch (opt){
                            case 0:
                                hideShowReaderOpt();
                                readermodel  = 2;
                                break;
                            case 1:
                                readermodel  = 1;


                                if(((currPageNo == 0 || currPageNo == 2) && currPageCount >=2) ||  (currPageCount == 1)){
                                    setTimeout(function(){
                                        loadChapter(-1);
                                    },10);
                                }

                                currPageNo = currPageNo > 0 ? currPageNo - 1 : currPageNo;
                                break;

                            case 2:
                                readermodel  = 1;

                                if((currPageNo == currPageCount - 2 && currPageCount >=2 ) || (currPageCount == 1)){
                                    setTimeout(function(){
                                        loadChapter(1);
                                    },10);
                                }

                                currPageNo = currPageNo < currPageCount - 1 ? currPageNo + 1 : currPageNo;
                                break;
                        }
                    }

                    var position = 0;//0：表示没滑动到最左边或最右边的边缘，-1：表示滑动到最左边，1：表示滑动到最右边
                    if(moveX > 10) {
                        if(((currPageNo == 0 || currPageNo == 2) && currPageCount >=2) ||  (currPageCount == 1)){
                            setTimeout(function(){
                                loadChapter(-1);
                            },10);
                        }
                        currPageNo = currPageNo > 0 ? currPageNo - 1 : currPageNo;
                    } else if(moveX < -10) {
                        if((currPageNo == currPageCount - 2 && currPageCount >=2 ) || (currPageCount == 1)){
                            setTimeout(function(){
                                loadChapter(1);
                            },10);
                        }

                        currPageNo = currPageNo < currPageCount - 1 ? currPageNo + 1 : currPageNo;
                    }
                    slider(currPageNo, 300);

                    return true;// 修改事件响应
                }
            });

    }else if(readOptMoel == 3){// 仿真阅读模式
        yepnope({
            test: Modernizr.csstransforms,
            yep: ['js/turn.js'],
            complete: loadTurn
        });
    }else if(readOptMoel == 4){// 覆盖阅读模式
        self.bind('touchstart', function(){
            var x = eventUtil.getPoint(event).x;
            var y = eventUtil.getPoint(event).y;// y 轴
            self.animStop().data("touchBegin", true).data("startX", x).data("endX", x).data("startY", y).data("endY", y);
            console.log(x);
        }).bind('touchmove', function(){
            if(self.data("touchBegin")){
                var pageWidth = self.parent().width(),
                    x = eventUtil.getPoint(event).x,
                    moveX = x - self.data("startX");

                if(moveX < 0){// 向左
                    //moveX = ((-pageWidth * page) + moveX) / self.width() * 100 + "%";
                    // 添加移动过程中的阴影
                    $("#rd_" + currPageNo).addClass('pagemoving').data("moving", true).animation({x: moveX}, 0);
                }else{
                    moveX = (-100 +(moveX) / self.width() * 100) + "%";
                    $("#rd_" + (currPageNo-1)).addClass('pagemoving').data("moving", true).animation({x: moveX}, 0);
                }


                self.data("endX", x);

                console.log(x);
                var y = eventUtil.getPoint(event).y;
                var moveY = y - self.data("startY");

                if(moveY != 0){// 响应上下滚动事件
                    return true;
                }

                return true;// 修改事件响应
            }
        }).bind('touchend', function(){

            if(readermodel == 2){//
                readermodel = 1;
                hideShowReaderOpt();
                return;
            }

            if($(this).data("touchBegin")){
                self.data("touchBegin", false).data("moving", false);
                var startX = self.data("startX"), endX = self.data("endX"),
                    moveX = endX - startX;

                director = 0;// 重置滑动标识
                console.log(moveX);

                if(moveX == 0){
                    var screenX = $("#bookContent").width();
                    var clientX = endX;

                    var optWidth = 60;// 中间40个像素为点击操作区
                    var optBegin = screenX / 2 - optWidth / 2;
                    var optEnd = screenX / 2 + optWidth;

                    // 中间40个像素为点击操作，左边为前翻页，右边为后翻页

                    var opt = 0;// 点击 0 , 前翻 1 后翻 2

                    if(clientX < optBegin){// 左侧
                        opt = 1;
                    }else if(clientX > optEnd){// 右侧
                        opt = 2;
                    }

                    switch (opt){
                        case 0:
                            hideShowReaderOpt();
                            readermodel  = 2;
                            break;
                        case 1:
                            readermodel  = 1;

                            if(((currPageNo == 0 || currPageNo == 2) && currPageCount >=2) ||  (currPageCount == 1)){
                                setTimeout(function(){
                                    loadChapter(-1);
                                },10);
                            }

                            currPageNo = currPageNo > 0 ? currPageNo - 1 : currPageNo;

                            $("#rd_" + getPageId()).addClass('pagemoving');// 添加移动过程中的阴影
                            $("#rd_" + getPageId()).data("moving", true).animation({x: '0%'}, 400,function(){
                                $("#rd_" + (getPageId())).removeClass('pagemoving');
                            });
                            break;

                        case 2:
                            readermodel  = 1;

                            if((currPageNo == currPageCount - 2 && currPageCount >=2 ) || (currPageCount == 1)){
                                setTimeout(function(){
                                    loadChapter(1);
                                },10);
                            }

                            $("#rd_" + getPageId()).addClass('pagemoving');// 添加移动过程中的阴影
                            $("#rd_" + getPageId()).data("moving", true).animation({x: '-100%'}, 400,function(){
                                $("#rd_" + (getPageId()+1)).removeClass('pagemoving');
                            });

                            currPageNo = currPageNo < currPageCount - 1 ? currPageNo + 1 : currPageNo;
                            break;
                    }
                }

                var position = 0;//0：表示没滑动到最左边或最右边的边缘，-1：表示滑动到最左边，1：表示滑动到最右边
                if(moveX > 10) {
                    if(((currPageNo == 0 || currPageNo == 2) && currPageCount >=2) ||  (currPageCount == 1)){
                        setTimeout(function(){
                            loadChapter(-1);
                        },10);
                    }

                    currPageNo = currPageNo > 0 ? currPageNo - 1 : currPageNo;

                    $("#rd_" + getPageId()).data("moving", true).animation({x: '0%'}, 400,function(){
                        $("#rd_" + (getPageId())).removeClass('pagemoving');
                    });

                } else if(moveX < -10) {
                    if((currPageNo == currPageCount - 2 && currPageCount >=2 ) || (currPageCount == 1)){
                        setTimeout(function(){
                            loadChapter(1);
                        },10);
                    }

                    $("#rd_" + getPageId()).data("moving", true).animation({x: '-100%'}, 400,function(){
                        $("#rd_" + (getPageId()+1)).removeClass('pagemoving');
                    });

                    currPageNo = currPageNo < currPageCount - 1 ? currPageNo + 1 : currPageNo;
                }
                return true;// 修改事件响应
            }
        });
    }
}

// 获取页面id
function getPageId(){
    return prezindexoffsize - currPageNo -1;
}


function loadTurn() {
    var w = $(window).width();
    var h = $(window).height();
    $('#flipboox').width(w).height(h);
    $(window).resize(function () {
        w = $(window).width();
        h = $(window).height();
        $('#flipboox').width(w).height(h);
    });
    $('#flipbook').turn({
        // Width
        width: w,
        // Height
        height: h,
        // Elevation
        elevation: 50,
        display: 'single',
        duration:600,
        page:currPageNo+1,// 当前页码
        pages:currPageCount,//总页数
        // Enable gradients
        gradients: true,
        // Auto center this flipbook
        autoCenter: true,
        when: {
            turning: function (e, page, view) {
                if (page == 1) {

                } else {

                }
            },
            turned: function (e, page, view) {
                console.log(page);
                currPageNo = page - 1;

                if(currPageNo > page){// 向前翻书
                    if(((currPageNo == 0 || currPageNo == 2) && currPageCount >=2) ||  (currPageCount == 1)){
                        setTimeout(function(){
                            loadChapter(-1);
                        },10);
                    }

                    currPageNo = page;
                }else{// 向后翻书
                    if((currPageNo == currPageCount - 2 && currPageCount >=2 ) || (currPageCount == 1)){
                        setTimeout(function(){
                            loadChapter(1);
                        },10);
                    }

                    currPageNo = page;
                }
            }
        }
    })
}


// 设置阅读模式
var readMode = 1;// 正常模式 1 夜间模式 2
function setReadModel(){
    if(readMode == 1){
        $("#bookContent").addClass('night');
        $("#readmodeltitle").html('夜间模式');
        $("#readmodelicon").attr('src','images/open.png');

        readMode = 2;
    }else{
        $("#bookContent").removeClass('night');
        $("#readmodeltitle").html('正常模式');
        $("#readmodelicon").attr('src','images/close.png');
        readMode = 1;
    }

    storeUtil.set(config.nightKey,readMode);// 保存到本地
}

// 初始化进度同步
function initReadModel(){
    readMode = storeUtil.get(config.nightKey);

    if(readMode){
        if(readMode == 1){
            $("#bookContent").removeClass('night');
            $("#readmodeltitle").html('正常模式');
            $("#readmodelicon").attr('src','images/close.png');
        }else{
            $("#bookContent").addClass('night');
            $("#readmodeltitle").html('夜间模式');
            $("#readmodelicon").attr('src','images/open.png');
        }
    }else{
        readMode = 1;
        $("#bookContent").removeClass('night');
        $("#readmodeltitle").html('正常模式');
        $("#readmodelicon").attr('src','images/close.png');

        storeUtil.set(config.nightKey,readMode);// 保存到本地
    }
}

// 设置模式
function setAtuoBuyModel4Read(){
    if(autoBuyMode == 1){
        $("#autobuyicon").attr('src','images/open.png');

        show2("autord1");
        hide("autord2");

        autoBuyMode = 2;
    }else{
        $("#autobuyicon").attr('src','images/close.png');
        autoBuyMode = 1;

        show2("autord2");
        hide("autord1");
    }

    storeUtil.set(config.autoBuyKey,autoBuyMode);// 保存到本地
}

var autoBuyMode = 1;// 关闭 1 开启 2
function setAutoBuyModel(){
    if(autoBuyMode == 1){
        $("#autobuyicon").attr('src','images/open.png');

        show2("autord1");
        hide("autord2");

        autoBuyMode = 2;
    }else{
        $("#autobuyicon").attr('src','images/close.png');
        autoBuyMode = 1;

        show2("autord2");
        hide("autord1");
    }

    storeUtil.set(config.autoBuyKey,autoBuyMode);// 保存到本地
}

// 初始化进度同步
function initAutoBuyModel(){
    autoBuyMode = storeUtil.get(config.autoBuyKey);

    if(autoBuyMode){
        if(autoBuyMode == 1){
            $("#autobuyicon").attr('src','images/close.png');

            show2("autord2");
            hide("autord1");
        }else{
            $("#autobuyicon").attr('src','images/open.png');

            show2("autord1");
            hide("autord2");
        }
    }else{
        autoBuyMode = 1;
        $("#autobuyicon").attr('src','images/close.png');

        show2("autord2");
        hide("autord1");

        storeUtil.set(config.autoBuyKey,autoBuyMode);// 保存到本地
    }
}

var sychMode = 2;// 关闭 1 开启 2
function setSychModel(){
    if(sychMode == 1){
        $("#readprogressicon").attr('src','images/open.png');

        sychMode = 2;
    }else{
        $("#readprogressicon").attr('src','images/close.png');
        sychMode = 1;
    }

    storeUtil.set(config.sychProgressKey,sychMode);// 保存到本地
}

// 初始化进度同步
function initSychModel(){
    sychMode = storeUtil.get(config.sychProgressKey);

    if(sychMode){
        if(sychMode == 1){
            $("#readprogressicon").attr('src','images/close.png');
        }else{
            $("#readprogressicon").attr('src','images/open.png');
        }
    }else{
        sychMode = 1;
        $("#readprogressicon").attr('src','images/close.png');
        storeUtil.set(config.sychProgressKey,sychMode);// 保存到本地
    }
}

// 到设置主页
function setHome(){
    $("#readerSetFooter").show();
    $("#myReaderOpt").hide();
}

var currFontSize = 16;// 当前字体大小

// 设置字体
function setFontSize(opt){

    if(readOptMoel != 1){
        var dt = currChapterZindex[currChapter.id];// 当前章节
        if(currPageNo >= dt.beginPageNo && currPageNo <= dt.endPageNo){// 本章节

        }else if(currPageNo < dt.beginPageNo){// 前一个章节
            dt = currChapterZindexData[dt.index-1];
        }else if(currPageNo > dt.endPageNo){// 后一个章节
            dt = currChapterZindexData[dt.index+1];
        }

        currChapterTiles = dt.currChapterTiles;
        currChapter = dt.currChapter;

        if(readOptMoel == 3){// 销毁
            --currChapterTilesIndex;

            for(var i = 0; i < currPageNo; ++i){
                $("#flipbook").turn("removePage", 10);
            }
        }

        currChapterTilesIndex = currPageNo - dt.beginPageNo;


    }

    // 判断该小说是否为第一次阅读
    fisrtReadBookFlag = 1;// 是否第一次进入阅读 1：第一次 2：第二次
    prezindexoffsize = 1000;// 偏移量 前偏移量
    postzindexoffsize = 999;// 偏移量 后偏移量
    currChapterZindex = {};
    currChapterZindexData = [];//当前章节数据

    currPageCount = 0;// 当前总页数
    currPageNo = 0;// 当前页码

    if(opt == 1){
        if(currFontSize >= 32){
            return;
        }

        ++currFontSize;
        $("#readercontent").css('font-size',currFontSize + 'px');
        $("#fontSizeContent").html(currFontSize);

        processSetFontSize();// 重算字体
    }else{
        if(currFontSize <= 12){
            return;
        }

        --currFontSize;
        $("#readercontent").css('font-size',currFontSize + 'px');
        $("#fontSizeContent").html(currFontSize);

        processSetFontSize();// 重算字体
    }
}

// 重置字体，重新计算
function processSetFontSize(){
    setFontSizeFlag = true;// 重置字体
    setFontSizeChapterContentIndex = currChapterContentIndex;


    currChapterTiles = [];// 当前篇
    currChapterTilesIndex = 0;// 当前该章屏分数量
    currChapterContentIndex = 0;// 已经解析的内容索引值

    chapterContent = [];// 先清空数组

    computeWords(1);
    setChapterData(1);// 设置缓存
}

// 计算一屏幕多少字
var currChapterTiles = [];// 当前篇
var currChapterTilesIndex = 0;// 当前该章屏分数量
var currChapterContentIndex = 0;// 已经解析的内容索引值

var setFontSizeFlag = false;// 重新设置字体大小的标识
var setFontSizeChapterContentIndex = 0;// 重新设置字体大小计数器

var chapterContent = [];// 保留3个章节的数据，包括
var chapterContentIndex = 0;// 章节数据索引

// 获取章节数据
function goChapterTiles(opt){// 没有效果的阅读切换页码
    if(opt == 1){// 向后翻书
        if(currChapterTilesIndex < currChapterTiles.length-1){//
            ++currChapterTilesIndex;
            appendChapterContent(1);
        }else{
            if(readOptMoel == 1){// 没有效果
                changeChapter(1);// 切换章节
            }else{// 有效果的加载方式
                loadChapter(1);
            }
        }
    }else{// 向前翻书
        if(currChapterTilesIndex == 0){// 切换到前一章
            if(readOptMoel == 1){// 没有效果
                changeChapter(-1);// 切换章节
            }else{// 有效果的加载方式
                loadChapter(-1);
            }

        }else{
            --currChapterTilesIndex;
            appendChapterContent(-1);
        }
    }
}

// 加载有动态效果的章节
function loadChapter(director){// -1 向前 1 向后
    switch (director){
        case -1:// 向前

            if(currBook.currBookVolumNo == 0 && currBook.currChapterNo == 0){// 小说最前面了，没有内容了
                showMessage('已经是小说第一页了');
                return;
            }

            var bookVolue = currBook.bookVolums[currBook.currBookVolumNo];// 当前分卷 chapters

            if(currBook.currChapterNo == 0){// 切换分卷
                --currBook.currBookVolumNo;// 分卷编号
                bookVolue = currBook.bookVolums[currBook.currBookVolumNo];// 当前分卷 chapters

                // 向前获取章节数据
                autoLoadChapterList(-1);

            }else{// 切换章节
                --currBook.currChapterNo;
                currChapter = bookVolue.chapters[currBook.currChapterNo];

                loadChapterContent4Read(currChapter.id,-1);// 从后往前加载章节数据

                setBook4User();// 更新当前分卷 章节 ??
            }

            break;
        case 1:// 向后
        default :

            var bookVolue = currBook.bookVolums[currBook.currBookVolumNo];// 当前分卷 chapters

            if(currBook.currBookVolumNo == currBook.bookVolums.length && currBook.currChapterNo == bookVolue.chapters.length){// 小说最前面了，没有内容了
                showMessage('已经是小说最后一页了');
                return;
            }

            if(currBook.currChapterNo == bookVolue.chapters.length - 1){// 切换分卷

                if(bookVolue.chapters.length >= bookVolue.allCount){
                    ++currBook.currBookVolumNo;// 分卷编号
                    bookVolue = currBook.bookVolums[currBook.currBookVolumNo];// 当前分卷 chapters
                }else{
                    ++currBook.currChapterNo;
                }

                // 向后获取章节数据
                autoLoadChapterList(1);
            }else{// 切换章节
                ++currBook.currChapterNo;
                currChapter = bookVolue.chapters[currBook.currChapterNo];

                loadChapterContent4Read(currChapter.id,1);// 从后往前加载章节数据

                setBook4User();// 更新当前分卷 章节 ??
            }

            break;
    }
}

// 为有动态效果的阅读模式加载章节内容
function loadChapterContent4Read(id,direcotr){
// 设置请求标识
    if(bookDetailFlag == false){
        bookDetailFlag = true;
    }else{
        return;
    }

    try{
        var param = {};
        param.id = id;

        param.zone = currBook.oid;

        // 获取章节内容
        $.requestData(2,service.getContent, $.toJasonParams(param),function(result){

            if(result.status == 1){
                var data = result.data;
                currChapter = data;

                loadNewChapter(direcotr);

                setBookTitle4Reader(data.books_name,data.name);// 设置标题和名称

                bookDetailFlag = false;

                showPage('myReader',10000);
            }

        },function(){

        });
    }catch (e){
        bookDetailFlag = false;
    }
}

// 切换章节
function changeChapter(director){// -1 向前 1 向后
    switch (director){
        case -1:// 向前

            if(chapterContentIndex >= 1){// 未到尽头
                var chapterData = chapterContent[--chapterContentIndex];

                currChapterTiles = chapterData.currChapterTiles;// 当前篇
                currChapterTilesIndex = chapterData.currChapterTiles.length -1;// 当前该章屏分数量
                currChapter = chapterData.currChapter;// 当前章节

                setBookTitle4Reader(currBook.name,currChapter.name);// 设置标题和名称

                appendChapterContent(-1);

            }else{// 已到尽头 向前获取

                if(currBook.currBookVolumNo == 0 && currBook.currChapterNo == 0){// 小说最前面了，没有内容了
                    showMessage('已经是小说第一页了');
                    return;
                }

                var bookVolue = currBook.bookVolums[currBook.currBookVolumNo];// 当前分卷 chapters

                if(currBook.currChapterNo == 0){// 切换分卷
                    --currBook.currBookVolumNo;// 分卷编号
                    bookVolue = currBook.bookVolums[currBook.currBookVolumNo];// 当前分卷 chapters

                    // 向前获取章节数据
                    autoLoadChapterList(-1);

                }else{// 切换章节
                    --currBook.currChapterNo;
                    currChapter = bookVolue.chapters[currBook.currChapterNo];

                    getChapterContent(currChapter.id,-1);// 从后往前加载章节数据

                    setBook4User();// 更新当前分卷 章节
                }
            }

            break;
        case 1:// 向后
        default :

            if(chapterContentIndex < chapterContent.length-1){// 未到尽头
                var chapterData = chapterContent[++chapterContentIndex];

                currChapterTiles = chapterData.currChapterTiles;// 当前篇
                currChapterTilesIndex = 0;// 当前该章屏分数量
                currChapter = chapterData.currChapter;// 当前章节

                setBookTitle4Reader(currBook.name,currChapter.name);// 设置标题和名称

                appendChapterContent(1);

            }else{// 已到尽头

                var bookVolue = currBook.bookVolums[currBook.currBookVolumNo];// 当前分卷 chapters

                if(currBook.currBookVolumNo == currBook.bookVolums.length && currBook.currChapterNo == bookVolue.chapters.length){// 小说最前面了，没有内容了
                    showMessage('已经是小说最后一页了');
                    return;
                }

                if(currBook.currChapterNo == bookVolue.chapters.length - 1){// 切换分卷

                    if(bookVolue.chapters.length >= bookVolue.allCount){
                        ++currBook.currBookVolumNo;// 分卷编号
                        bookVolue = currBook.bookVolums[currBook.currBookVolumNo];// 当前分卷 chapters
                    }else{
                        ++currBook.currChapterNo;
                    }

                    // 向后获取章节数据
                    autoLoadChapterList(1);
                }else{// 切换章节
                    ++currBook.currChapterNo;
                    currChapter = bookVolue.chapters[currBook.currChapterNo];

                    getChapterContent(currChapter.id,1);// 从后往前加载章节数据

                    setBook4User();// 更新当前分卷 章节
                }
            }

            break;
    }
}

// 获取章节内容
function getChapterContent(id,direcotr){
    if(currBook.chargemodel != 1 && currChapter.vipflag == 1 && loginUser == null){// 登录,不是免费阅读
        go4Login();
        return;
    }


    if(currChapter.vipflag == 1){// 重新获取小说权限信息
        currUserBook = storeUtil.getJson(config.buyKeyword + getUserKey() + currBook.id);// 获取用户订阅信息

        if(!currUserBook){// 小说信息或分卷信息为空
            currUserBook = {};

            currUserBook.books_id = currBook.id;// 小说id
            currUserBook.mychapters = -1;// 没有获取过
            currUserBook.currBookVolumNo = currBook.currBookVolumNo;
            currUserBook.currChapterNo = currBook.currChapterNo;
            currUserBook.timestamp = commUtil.getCurrTime();// 当前时间

            currBookVolum = currBook.bookVolums[currUserBook.currBookVolumNo];// 当前分卷


            storeUtil.set(config.buyKeyword + getUserKey() + currBook.id,currUserBook);// 放到本地存储

            var data = {};
            data.token = loginUser.token;
            data.books_id = currBook.id;

            if(currBook.chargemodel == 3){// 按章节购买
                data.bookvolumes_id = currBookVolum.id;
            }

            $.requestData(2,service.getUserBookPay, $.toJasonParams(data),function(result){
                if(result.status == 1){
                    var data = result.data;

                    if(currBook.chargemodel == 2){
                        currUserBook.mychapters = data.mychapters;
                        storeUtil.set(config.buyKeyword + loginUser.id + currBook.id,currUserBook);// 放到本地存储

                        if(currUserBook.mychapters == 1){// 已经购买可直接阅读
                            getChapterContent4Read(id,direcotr);
                        }else{// 没有购买不能直接阅读，提醒购买
                            if(autoBuyMode == 2){// 自动购买
                                getChapterContent4Read(id,direcotr);// 继续阅读
                                autoBuyChapter();// 自动购买
                            }else{
                                goBuyChapter(id,direcotr);
                            }
                        }
                    }else if(currBook.chargemodel == 3){
                        data.timestamp = commUtil.getCurrTime();// 当前时间
                        currUserBookVolum = data;
                        storeUtil.set(config.buyKeyword + loginUser.id + currBook.id + currBookVolum.id,data);// 放到本地存储

                        var mychapters = currUserBookVolum.mychapters;// 购买权限
                        if(mychapters.length < currChapter.sort){// 没有购买，提示购买章节
                            if(autoBuyMode == 2){// 自动购买
                                getChapterContent4Read(id,direcotr);// 继续阅读
                                autoBuyChapter();// 自动购买
                            }else{
                                goBuyChapter(id,direcotr);
                            }
                        }else{
                            var myauth = mychapters[currChapter.sort];

                            if(myauth == 1){// 已经购买
                                getChapterContent4Read(id,direcotr);
                            }else{//  没有购买，提示购买章节
                                if(autoBuyMode == 2){// 自动购买
                                    getChapterContent4Read(id,direcotr);// 继续阅读
                                    autoBuyChapter();// 自动购买
                                }else{
                                    goBuyChapter(id,direcotr);
                                }
                            }
                        }
                    }
                }
            },function(){

            });
        }else{
            currBook.currBookVolumNo = currUserBook.currBookVolumNo;
            currBook.currChapterNo = currUserBook.currChapterNo;

            if(currBook.chargemodel == 2){
                if(currUserBook.mychapters == 1){// 已经购买可直接阅读
                    getChapterContent4Read(id,direcotr);
                }else{// 没有购买不能直接阅读，提醒购买
                    if(autoBuyMode == 2){// 自动购买
                        getChapterContent4Read(id,direcotr);// 继续阅读
                        autoBuyChapter();// 自动购买
                    }else{
                        goBuyChapter(id,direcotr);
                    }
                }
            }else if(currBook.chargemodel == 3){
                currUserBookVolum = storeUtil.getJson(config.buyKeyword + loginUser.id + currBook.id + currBookVolum.id);// 放到本地存储

                if(!currUserBookVolum){
                    var data = {};
                    data.token = loginUser.token;
                    data.books_id = currBook.id;

                    data.bookvolumes_id = currBookVolum.id;

                    $.requestData(2,service.getUserBookPay, $.toJasonParams(data),function(result){
                        if(result.status == 1){
                            var data = result.data;

                            data.timestamp = commUtil.getCurrTime();// 当前时间
                            currUserBookVolum = data;
                            storeUtil.set(config.buyKeyword + loginUser.id + currBook.id + currBookVolum.id,data);// 放到本地存储

                            var mychapters = currUserBookVolum.mychapters;// 购买权限
                            if(mychapters.length < currChapter.sort){// 没有购买，提示购买章节
                                if(autoBuyMode == 2){// 自动购买
                                    getChapterContent4Read(id,direcotr);// 继续阅读
                                    autoBuyChapter();// 自动购买
                                }else{
                                    goBuyChapter(id,direcotr);
                                }
                            }else{
                                var myauth = mychapters[currChapter.sort];

                                if(myauth == 1){// 已经购买
                                    getChapterContent4Read(id,direcotr);
                                }else{//  没有购买，提示购买章节
                                    if(autoBuyMode == 2){// 自动购买
                                        getChapterContent4Read(id,direcotr);// 继续阅读
                                        autoBuyChapter();// 自动购买
                                    }else{
                                        goBuyChapter(id,direcotr);
                                    }
                                }
                            }
                        }
                    },function(){

                    });
                }else{
                    var mychapters = currUserBookVolum.mychapters;// 购买权限
                    if(mychapters.length < currChapter.sort){// 没有购买，提示购买章节
                        if(autoBuyMode == 2){// 自动购买
                            getChapterContent4Read(id,direcotr);// 继续阅读
                            autoBuyChapter();// 自动购买
                        }else{
                            goBuyChapter(id,direcotr);
                        }
                    }else{
                        var myauth = mychapters[currChapter.sort];

                        if(myauth == 1){// 已经购买
                            getChapterContent4Read(id,direcotr);
                        }else{//  没有购买，提示购买章节
                            if(autoBuyMode == 2){// 自动购买
                                getChapterContent4Read(id,direcotr);// 继续阅读
                                autoBuyChapter();// 自动购买
                            }else{
                                goBuyChapter(id,direcotr);
                            }
                        }
                    }
                }
            }
        }
    }else{// 非vip章节 直接阅读
        getChapterContent4Read(id,direcotr);
    }
}

// 购买章节
var currBuyChapterModel = 1;// 1 购买章节 2:充值
var currChapterPrice = 0;// 价格
var currChapterDirctor = 0;// 阅读方向
function goBuyChapter(id,direcotr){

    currChapterDirctor = direcotr;// 方向
    $("#buyChapterName").html(currChapter.name);
    if(currChapter.descp){
        $("#buyChapterTitle").html(currChapter.descp);
    }else{
        $("#buyChapterTitle").html(currBook.descp);
    }


    if(!loginUser.coupanbalance){
        loginUser.coupanbalance = 0;
    }

    if(currBook.chargemodel == 2){
        $("#buyChapterPrice").html('本书价格：'+ currBook.price + '书币');
        $("#buyChapterBalance").html('余额：' +  loginUser.amount + '书币' + (loginUser.coupanbalance ? loginUser.coupanbalance:0) + '书券');

        hide("buyChapterAutoBuy");

        if((loginUser.coupanbalance + loginUser.amount) > currBook.price){
            $("buyBookBt").html('购买本书(' + currBook.price + '书币)');
        }else{
            $("buyBookBt").html('充值');
        }

        currChapterPrice = currBook.price;// 价格
    }else if(currBook.chargemodel == 3){
        $("#buyChapterPrice").html('本书价格：'+ currChapter.price + '书币');
        $("#buyChapterBalance").html('余额：' +  loginUser.amount + '书币' + (loginUser.coupanbalance ? loginUser.coupanbalance:0) + '书券');
        show2("buyChapterAutoBuy");

        if((loginUser.coupanbalance + loginUser.amount) > currChapter.price){
            $("buyBookBt").html('购买本章(' + currChapter.price + '书币)');
        }else{
            $("buyBookBt").html('充值');
        }

        currChapterPrice = currChapter.price;// 价格
    }

    showPage('buyChapter',10010);
}

// 购买章节
function buyChapter(){
    if(currBuyChapterModel == 2){
        goBuyHome();// 充值
    }else{
        var data = {};
        data.token = loginUser.token;
        data.zone = currBook.oid;

        data.books_id = currBook.id;
        data.books_name = currBook.name;
        data.bookvolumes_id = currBookVolum.id;
        data.bookvolumes_name = currBookVolum.name;
        data.chapters_id = currChapter.id;
        data.chapters_name = currChapter.name;


        $.requestData(2,service.addBookPay, $.toJasonParams(data),function(result){
            if(result.status == 1){
                var data = result.data;

                if(currBook.chargemodel == 2){
                    currUserBook.mychapters = data.mychapters;
                    storeUtil.set(config.buyKeyword + loginUser.id + currBook.id,currUserBook);// 放到本地存储


                    getChapterContent4Read(currChapter.id,currChapterDirctor);// 购买后继续阅读
                }else if(currBook.chargemodel == 3){
                    data.timestamp = commUtil.getCurrTime();// 当前时间
                    currUserBookVolum = data;
                    storeUtil.set(config.buyKeyword + loginUser.id + currBook.id + currBookVolum.id,data);// 放到本地存储


                    getChapterContent4Read(currChapter.id,currChapterDirctor);// 购买后继续阅读
                }
            }
        },function(){

        });
    }
}

// 自动购买
function autoBuyChapter(){
    var data = {};
    data.token = loginUser.token;
    data.zone = currBook.oid;

    data.books_id = currBook.id;
    data.books_name = currBook.name;
    data.bookvolumes_id = currBookVolum.id;
    data.bookvolumes_name = currBookVolum.name;
    data.chapters_id = currChapter.id;
    data.chapters_name = currChapter.name;


    $.requestData(2,service.addBookPay, $.toJasonParams(data),function(result){
        if(result.status == 1){
            var data = result.data;

            if(currBook.chargemodel == 2){
                currUserBook.mychapters = data.mychapters;
                storeUtil.set(config.buyKeyword + loginUser.id + currBook.id,currUserBook);// 放到本地存储


                getChapterContent4Read(currChapter.id,currChapterDirctor);// 购买后继续阅读
            }else if(currBook.chargemodel == 3){
                data.timestamp = commUtil.getCurrTime();// 当前时间
                currUserBookVolum = data;
                storeUtil.set(config.buyKeyword + loginUser.id + currBook.id + currBookVolum.id,data);// 放到本地存储


                getChapterContent4Read(currChapter.id,currChapterDirctor);// 购买后继续阅读
            }
        }
    },function(){

    });
}

// 为阅读器设置标题或书名
function setBookTitle4Reader(bookName,chapterTitle){
    $("#readerTitle").html(bookName);// 小说名称
    $("#readerChapter").html(chapterTitle);// 章节名称

    $("#readerProgress").html(chapterTitle);
}


// 进行权限判断后获取章节内容阅读
function getChapterContent4Read(id,direcotr){
// 设置请求标识
    try{
        var param = {};
        param.id = id;

        param.zone = currBook.oid;

        var myChapter = storeUtil.getJson(config.bkkey + id);

        if(myChapter == null){// 我的章节为空

            if(bookDetailFlag == false){
                bookDetailFlag = true;
            }else{
                return;
            }

            // 获取章节内容
            $.requestData(2,service.getContent, $.toJasonParams(param),function(result){

                if(result.status == 1){
                    var data = result.data;
                    currChapter = data;

                    loadNewChapter(direcotr);

                    setBookTitle4Reader(data.books_name,data.name);// 设置标题和名称

                    bookDetailFlag = false;

                    showPage('myReader',10000);

                    setTimeout(function(){
                        storeUtil.set(config.bkkey + id,data);
                    },10);
                }

            },function(){

            });
        }else{
            currChapter = myChapter;

            loadNewChapter(direcotr);

            setBookTitle4Reader(currChapter.books_name,currChapter.name);// 设置标题和名称

            bookDetailFlag = false;

            showPage('myReader',10000);
        }



        param = {};
        param.token = loginUser.token;
        param.books_id = currBook.id;
        param.books_name = currBook.name;
        param.bookvolumes_id = currBookVolum.id;
        param.bookvolumes_name = currBookVolum.name;
        param.chapters_id = currChapter.id;
        param.chapters_name = currChapter.name;


        var bk = storeUtil.get(config.keyPreWord + currBook.id);
        if(!bk){// 第一次阅读该书
            storeUtil.set(config.keyPreWord + currBook.id,1);// 设置为阅读

            // 记录阅读
            $.requestData(2,service.addBookRead, $.toJasonParams(param),function(result){
                if(result.status == 1){
                    var data = result.data;
                }

            },function(){

            });
        }
    }catch (e){
        bookDetailFlag = false;
    }
}

// 切换充值和购买畅读权利
var currModel = 1;// 支付模式 1:充值2:vip 3:手气拼单4:vip拼单
function checkCharge(model){
    switch (model){
        case 1:
            $("#rechargeDivHeaderTitle1").addClass('rechargeDivHeaderTitleCheck');
            $("#rechargeDivHeaderTitle2").removeClass('rechargeDivHeaderTitleCheck');

            show2("chargeProductList");
            hide("vipProductList");
            break;

        case 2:
            $("#rechargeDivHeaderTitle2").addClass('rechargeDivHeaderTitleCheck');
            $("#rechargeDivHeaderTitle1").removeClass('rechargeDivHeaderTitleCheck');

            hide("chargeProductList");
            show2("vipProductList");
            break;
    }

    currModel = model;// 设置模式
}

function pkOrderCharge(model){
    switch (model){
        case 1:
            $("#mypklist1").addClass('pkchecked');
            $("#mypklist2").removeClass('pkchecked');

            show2("mypkorderlist1");
            hide("mypkorderlist2");

            setTimeout(function(){aaOrderHomeScroller.refresh();},50);// 刷新列表
            break;

        case 2:
            $("#mypklist2").addClass('pkchecked');
            $("#mypklist1").removeClass('pkchecked');

            hide("mypkorderlist1");
            show2("mypkorderlist2");

            setTimeout(function(){aaOrderHomeScroller.refresh();},50);// 刷新列表
            break;
    }
}

var currChapterList = [];// 当前章节
// 获取章节列表页码
function getChapterListPageNo(){
    var bookVolum = currBook.bookVolums[currBook.currBookVolumNo];
    return bookVolum.id;// + parseInt(currUserBook.currChapterNo / 20);
}


// 根据用户的操作自动加载章节
function autoLoadChapterList(director){
    var data = {};

    var bookVolum = currBook.bookVolums[currBook.currBookVolumNo];

    if(director == 0){// 取当前章节
        bookVolum = currBook.bookVolums[currBook.currBookVolumNo];
    }else if(director == 1){向后获取章节
        bookVolum = currBook.bookVolums[++currBook.currBookVolumNo];
    }else if(director == -1){// 向前获取章节
        bookVolum = currBook.bookVolums[--currBook.currBookVolumNo];
    }

    data.id = bookVolum.id;
    currBookVolum = bookVolum;// 设置当前分卷

    getBookVolum4User();// 获取分卷权限

    if(!bookVolum.currCount){// 设置当前索引值
        bookVolum.currCount = 0;
    }

    data.currCount = bookVolum.currCount;

    data.zone = currBook.oid;// 小说id
    data.director = director;// 取数据的方向

    $("#chapterListName").html(currBook.name);
    $("#chapterListCount").html('共' + currBook.chaptercounts + '章');

    // 获取章节
    var chapterListPageNo = getChapterListPageNo();
    var myChapterList = storeUtil.getJson(config.bkkey + chapterListPageNo);

    if(myChapterList == null){
        $.requestData(2,service.getChapterList,$.toJasonParams(data),function(result){// 提交服务器
            if(result.status == 1){
                var list = result.data;

                if(director == -1){// 向前

                    // 判断是否切换分卷
                    currChapter = list[list.length - 1];
                    currBook.currChapterNo = list.length - 1;
                    currUserBook.currChapterNo = currBook.currChapterNo;

                    bookVolum.allCount = list.length;// 总的章节数量
                    getChapterContent(currChapter.id,-1);// 从后往前加载章节数据

                    //setBook4User();// 更新当前分卷 章节

                    setTimeout(function(){
                        storeUtil.set(config.bkkey + chapterListPageNo,list);
                        insertChapter2Book(list);
                    },10);
                }else if(director == 0){// 向后
                    currChapter = list[currUserBook.currChapterNo];
                    currBook.currChapterNo = currUserBook.currChapterNo;

                    bookVolum.allCount = list.length;// 总的章节数量
                    getChapterContent(currChapter.id,1);// 从前往后加载章节数据


                    setTimeout(function(){
                        storeUtil.set(config.bkkey + chapterListPageNo,list);
                        addChapter2Book(list);
                    },10);
                }else{
                    currBook.currChapterNo = 0;

                    currChapter = list[0];
                    currBook.currChapterNo = 0;
                    currUserBook.currChapterNo = currBook.currChapterNo;

                    bookVolum.allCount = list.length;// 总的章节数量
                    getChapterContent(currChapter.id,1);// 从后往前加载章节数据

                    setTimeout(function(){
                        storeUtil.set(config.bkkey + chapterListPageNo,list);
                        insertChapter2Book(list);
                    },10);
                }
            }
        },function(){// 设置类型

        });
    }else{
        currChapterList = myChapterList;

        currChapter = currChapterList[currUserBook.currChapterNo];
        currBook.currChapterNo = currUserBook.currChapterNo;

        getChapterContent(currChapter.id,1);// 从前往后加载章节数据
    }
}

function autoLoadChapterList1(director){
    var data = {};

    var bookVolum = currBook.bookVolums[currBook.currBookVolumNo];
    data.id = bookVolum.id;
    currBookVolum = bookVolum;// 设置当前分卷

    if(director == 0){// 向前
        if(currBook.currBookVolumNo > 1){
            data.id += ',' + currBook.bookVolums[currBook.currBookVolumNo -1].id;
        }
    }else{// 向后
        if(currBook.currBookVolumNo < currBook.bookVolums.length -1 ){
            data.id += ',' + currBook.bookVolums[currBook.currBookVolumNo +1].id;
        }
    }

    getBookVolum4User();// 获取分卷权限

    if(!bookVolum.currCount){// 设置当前索引值
        bookVolum.currCount = 0;
    }

    data.currCount = bookVolum.currCount;

    data.zone = currBook.oid;// 小说id
    data.director = director;// 取数据的方向

    $("#chapterListName").html(currBook.name);
    $("#chapterListCount").html('共' + currBook.chaptercounts + '章');

    // 获取章节
    var chapterListPageNo = getChapterListPageNo();
    var myChapterList = storeUtil.getJson(config.bkkey + chapterListPageNo);

    if(myChapterList == null){
        $.requestData(2,service.getChapterList,$.toJasonParams(data),function(result){// 提交服务器
            if(result.status == 1){
                var list = result.data;

                if(director == 0){// 向前

                    // 判断是否切换分卷
                    currChapter = list[list.length - 1];

                    if(currChapter.bookvolumes_id != bookVolum.id){
                        --currBook.currBookVolumNo;
                        bookVolum = currBook.bookVolums[currBook.currBookVolumNo];

                        currBook.currChapterNo = result.allCount-1;// 向前获取
                    }

                    bookVolum.allCount += list.length;// 总的章节数量
                    //bookVolum.currCount = result.currCount;
                    getChapterContent(currChapter.id,-1);// 从后往前加载章节数据

                    //setBook4User();// 更新当前分卷 章节

                    setTimeout(function(){
                        storeUtil.set(config.bkkey + chapterListPageNo,list);
                        //insertChapter2Book(list);
                    },10);
                }else{// 向后

                    var bk = storeUtil.get(config.keyPreWord + currBook.id);
                    if(!bk){// 第一次阅读该书
                        // 判断是否切换分卷
                        currChapter = list[0];
                        currBook.currChapterNo = 0;
                    }else{
                        if(currBook.currChapterNo >= 0){
                            currChapter = list[currBook.currChapterNo];
                        }
                    }


                    if(currChapter.bookvolumes_id != bookVolum.id){
                        ++currBook.currBookVolumNo;
                        bookVolum = currBook.bookVolums[currBook.currBookVolumNo];

                        currBook.currChapterNo = 0;

                    }

                    bookVolum.allCount += list.length;// 总的章节数量
                    //bookVolum.currCount = result.currCount;
                    getChapterContent(currChapter.id,1);// 从前往后加载章节数据

                    //setBook4User();// 更新当前分卷 章节
                    setTimeout(function(){
                        storeUtil.set(config.bkkey + chapterListPageNo,list);
                        //addChapter2Book(list);
                    },10);
                }
            }
        },function(){// 设置类型

        });
    }else{
        currChapterList = myChapterList;

        currUserBook.currBookVolumNo = 0;// 0
        currUserBook.currChapterNo = 0;// 0
    }
}

// 设置章节数据
function setChapterData(dirctor){
    var currChapterData = {};// 当前章节数据

    currChapterData.currChapterTiles = [];
    currChapterData.currChapterTiles = currChapterTiles; //currChapterData.currChapterTiles.concat(currChapterTiles);
    currChapterData.currChapter = currChapter;

    if(dirctor == -1){
        currChapterData.currChapterTilesIndex = currChapterData.currChapterTiles.length-1;
        chapterContent.unshift(currChapterData);
        chapterContentIndex = 0;
    }else{
        currChapterData.currChapterTilesIndex = 0;
        chapterContent.push(currChapterData);
        chapterContentIndex = chapterContent.length-1;// 章节数据索引
    }

    return currChapterData;
}

// 加载新的章节数据
function loadNewChapter(dirctor){
    //var chapterData = setChapterData(dirctor);// 加载章节数据

    currChapterTiles = [];// 当前篇
    currChapterTilesIndex = 0;// 当前该章屏分数量
    currChapterContentIndex = 0;// 已经解析的内容索引值

    if(dirctor == 0){
        chapterContent = [];// 先清空数组
        computeWords(1);
    }else if(dirctor == 1){// 从前往后
        computeWords(1);
    }else if(dirctor == -1){// 从后往前
        computeWords(-1);
    }

    setChapterData(dirctor);// 设置缓存
}

// 计算每页字数
function computeWords(dirctor){
    var width = $("body").width() - 40;// 文字显示区域大小 40
    var height = $("body").height() - 90;// 文字显示区域大小

    var lines = Math.floor(height / 32);// 显示的文字行
    var words = Math.floor(width / (currFontSize+2)); // 每行显示文字数量

    var dist = (width - (currFontSize+2) * words) / 2;// 内边距
    //$("#readercontent").css("padding-left",dist + "px");

    var resizeFontSize = false;// 是否修改肢体大小


    if(currChapterContentIndex == 0){// 解析第一页
        currChapterTiles = [];

        //currChapter.content = currChapter.content.replaceAll("<br><br>",'<br>');
    }

    var cnt = '';// 每页内容
    var currLineNum = 0;// 当前页行数
    var currLineWords = 0;// 当前行字数

    var countleft = 0;// 上次残留字数


    /*
    if(currChapterTilesIndex == 0){// 每行开头空2个字
        currLineWords = 2;
    }*/

    for(; currChapterContentIndex < currChapter.content.length;){
        var count = currChapter.content.length - currChapterContentIndex;

        var linecnt = '';// 一行的内容
        var wordscount = words - countleft;// 读取的字数
        if(count > wordscount){// 截取内容
            linecnt = currChapter.content.substr(currChapterContentIndex,wordscount);
        }else{
            linecnt = currChapter.content.substr(currChapterContentIndex,count);
            wordscount = count;
        }

        // 判断是否截取了不完整的换行
        if(linecnt.endWith('<')){
            if(currChapterContentIndex + wordscount + 7 < currChapter.content.length){
                wordscount+= 7;
                linecnt = currChapter.content.substr(currChapterContentIndex,wordscount);
            }

        }else if(linecnt.endWith('<b')){
            if(currChapterContentIndex + wordscount + 6 < currChapter.content.length){
                wordscount+= 6;
                linecnt = currChapter.content.substr(currChapterContentIndex,wordscount);
            }
        }else if(linecnt.endWith('<br')){
            if(currChapterContentIndex + wordscount + 5 < currChapter.content.length){
                wordscount+= 5;
                linecnt = currChapter.content.substr(currChapterContentIndex,wordscount);
            }
        }else if(linecnt.endWith('<br>')){
            if(currChapterContentIndex + wordscount + 4 < currChapter.content.length){
                wordscount+= 4;
                linecnt = currChapter.content.substr(currChapterContentIndex,wordscount);
            }
        }

        if(linecnt.indexOf('<br>') != -1){// 含有换行
            var mylinecnt = linecnt.split('<br>');

            for(var k = 0; k < mylinecnt.length; ++k){
                var mcnt = mylinecnt[k];
                var cc = 0;// 字数计数器

                if(mcnt == ''){// 空内容
                    cc = 0;

                    countleft = 0; // 残留字数
                }else{
                    cc = mcnt.length;

                    cnt += mcnt;// 添加内容

                    currLineWords = cc;// 当前字数

                    countleft = 0; // 残留字数

                    if(k == mylinecnt.length-1){ // 不是最后一行
                        countleft = cc; // 残留字数
                    }else{
                        ++currLineNum;// 当前页行数累加1
                    }
                }

                if(k != mylinecnt.length-1){
                    cc += 4;
                }

                currChapterContentIndex += cc;// 累加字数计数器

                // 处理添加换行
                if(currLineNum < lines){
                    if(k < mylinecnt.length-1){
                        cnt += "<br>";// 换行
                        ++currLineNum;// 当前页行数累加1

                        if(currLineNum >= lines){
                            if(k+1 < mylinecnt.length){
                                if(mylinecnt[k+1] == ''){// 最后两行是否为换行，处理切页后里面就换行
                                    currChapterContentIndex += 4;// 累加字数计数器
                                }
                            }

                            if(k+2 < mylinecnt.length){
                                if(mylinecnt[k+2] == ''){// 最后两行是否为换行，处理切页后里面就换行
                                    currChapterContentIndex += 4;// 累加字数计数器
                                }
                            }

                            if(k+3 < mylinecnt.length){
                                if(mylinecnt[k+3] == ''){// 最后两行是否为换行，处理切页后里面就换行
                                    currChapterContentIndex += 4;// 累加字数计数器
                                }
                            }

                            // 处理内容显示
                            break;
                        }
                    }
                }else{// 刚好等于行数
                    if(k+1 < mylinecnt.length){
                        if(mylinecnt[k+1] == ''){// 最后两行是否为换行，处理切页后里面就换行
                            currChapterContentIndex += 4;// 累加字数计数器
                        }
                    }

                    if(k+2 < mylinecnt.length){
                        if(mylinecnt[k+2] == ''){// 最后两行是否为换行，处理切页后里面就换行
                            currChapterContentIndex += 4;// 累加字数计数器
                        }
                    }

                    if(k+3 < mylinecnt.length){
                        if(mylinecnt[k+3] == ''){// 最后两行是否为换行，处理切页后里面就换行
                            currChapterContentIndex += 4;// 累加字数计数器
                        }
                    }

                    // 处理内容显示
                    break;
                }
            }

        }else{
            cnt += linecnt;// 添加内容
            ++currLineNum;// 当前页行数累加1

            currChapterContentIndex += wordscount;

            countleft = 0;// 残留字数

            currLineWords = cc;// 当前字数
        }

        if(currLineNum >= lines || currChapterContentIndex >= currChapter.content.length-1){// 页面满了

            if(wordscount < words){// 尾部补齐内容

                if(currChapterContentIndex + (wordscount - words) < currChapter.content.length){
                    linecnt = currChapter.content.substr(currChapterContentIndex,(words - wordscount));
                }else{
                    linecnt = currChapter.content.substr(currChapterContentIndex,(currChapter.content.length - currChapterContentIndex));
                }


                var tails = linecnt.split("<br>");

                currChapterContentIndex += tails[0].length;
                cnt += tails[0];
            }

            currChapterTiles.push(cnt);

            if(setFontSizeFlag == true){// 改变字体重新计算
                if(readOptMoel == 1){
                    if(currChapterContentIndex >= setFontSizeChapterContentIndex){
                        currChapterTilesIndex = currChapterTiles.length;
                        //$("#readercontent").html(cnt);

                        setFontSizeFlag = false;// 重新设置字体大小的标识
                    }
                }

                resizeFontSize = true;// 是否修改肢体大小
            }

            cnt = '';
            currLineNum = 0;// 当前页行数
            currLineWords = 0;// 当前行字数

            countleft = 0;// 上次残留字数
        }
    }

    if(resizeFontSize == true){// 重新设置字体
        loadChapterContent(1);
    }else{
        if(!dirctor || dirctor == 1){
            currChapterTilesIndex = 0;
            loadChapterContent(1);
        }else if(dirctor == -1){
            currChapterTilesIndex = currChapterTiles.length - 1;

            loadChapterContent(-1);
        }else{
            currChapterTilesIndex = 0;
            loadChapterContent(1);
        }
    }
}

// 加载章节内容
function appendChapterContent(dirctor){
    if(readOptMoel == 1){
        $("#readercontent").html(currChapterTiles[currChapterTilesIndex]);
    }
}

function setEffectModel(model){
    if(readOptMoel != model){

        if(readOptMoel != 1){

            var dt = currChapterZindex[currChapter.id];// 当前章节
            if(currPageNo >= dt.beginPageNo && currPageNo <= dt.endPageNo){// 本章节

            }else if(currPageNo < dt.beginPageNo){// 前一个章节
                dt = currChapterZindexData[dt.index-1];
            }else if(currPageNo > dt.endPageNo){// 后一个章节
                dt = currChapterZindexData[dt.index+1];
            }

            currChapterTiles = dt.currChapterTiles;
            currChapter = dt.currChapter;

            currChapterTilesIndex = currPageNo - dt.beginPageNo;

            if(readOptMoel == 3){// 销毁
                --currChapterTilesIndex;
            }
        }

        // 判断该小说是否为第一次阅读
        fisrtReadBookFlag = 1;// 是否第一次进入阅读 1：第一次 2：第二次
        prezindexoffsize = 1000;// 偏移量 前偏移量
        postzindexoffsize = 999;// 偏移量 后偏移量
        currChapterZindex = {};
        currChapterZindexData = [];//当前章节数据

        currPageCount = 0;// 当前总页数
        currPageNo = 0;// 当前页码

        readOptMoel = model;

        loadChapterContent(1);// 加载章节内容

        setTimeout(function(){// 更新缓存
            storeUtil.set(config.rdmdKey,readOptMoel);
        },10);
    }

    if(readermodel == 2){//
        readermodel = 1;
        hideShowReaderOpt();
    }
}

// 加载章节内容
function loadChapterContent(dirctor){

    prepare4GoodReader();// 初始化

    $("#bookContent").unbind();// 解除事件绑定
    $("#contentPages").unbind();// 解除事件绑定


    if(readOptMoel == 1){// 没有效果

        $("#readercontent").html(currChapterTiles[currChapterTilesIndex]);

        bindTouch4Reader('bookContent');

    }else if(readOptMoel == 2){// 滑动效果
        if(fisrtReadBookFlag == 1){
            var cnt = '<div class="readerContainer" id="contentPages" '+ (currChapterTilesIndex > 0 ? 'style="transform: translateX(-' + (currChapterTilesIndex * 0.1) + '%); transform-style: preserve-3d; backface-visibility: hidden; transition: 300ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0ms;"':'') +'>';


            for(var i = 0; i < currChapterTiles.length; ++ i){
                cnt += '<div class="readerContentItem"><div class="readerBookTitle" >'+ currBook.name +'</div><div class="readerChapterTitle" >'+ currChapter.name +'</div><div class="readercontent" style="font-size:' +currFontSize + 'px;">' + currChapterTiles[i] + '</div></div>';
            }

            cnt += '</div> ';

            $("#bookContent").html(cnt);// 设置内容

            currPageCount = currChapterTiles.length;// 总的页数
            currPageNo = currChapterTilesIndex;

            var dt = {};// 章节页码信息
            dt.beginPageNo = 0;// 开始页码
            dt.endPageNo = currChapterTiles.length-1;// 结束页码
            dt.index = 0;// 数组索引

            dt.currChapterTiles = currChapterTiles;// 内容缓存
            dt.currChapter = currChapter;

            currChapterZindex[currChapter.id] = dt;// 章节id和页码
            currChapterZindexData.unshift(dt);// 放入到数组
        }else{
            var cnt = '';


            for(var i = 0; i < currChapterTiles.length; ++ i){
                cnt += '<div class="readerContentItem"><div class="readerBookTitle" >'+ currBook.name +'</div><div class="readerChapterTitle" >'+ currChapter.name +'</div><div class="readercontent"  style="font-size:' +currFontSize + 'px;">' + currChapterTiles[i] + '</div></div>';
            }

            if(dirctor == -1){
                $("#contentPages").prepend(cnt);// 设置内容

                currPageNo += currChapterTiles.length;
                currPageCount += currChapterTiles.length;// 总的页数

                $("#contentPages").animation({x: '-' + (currPageNo*0.1) + '%'}, 0);

                var dt = {};// 章节页码信息
                dt.beginPageNo = 0;// 开始页码
                dt.endPageNo = currChapterTiles.length-1;// 结束页码
                dt.index = 0;// 数组索引

                dt.currChapterTiles = currChapterTiles;// 内容缓存
                dt.currChapter = currChapter;

                currChapterZindex[currChapter.id] = dt;// 章节id和页码
                for(var i = 0; i <currChapterZindexData.length; ++i){// 添加
                    var data = currChapterZindexData[i];
                    data.beginPageNo += currChapterTiles.length;
                    data.endPageNo += currChapterTiles.length;
                    ++dt.index;
                }
                currChapterZindexData.unshift(dt);// 放入到数组
            }else{
                $("#contentPages").append(cnt);// 设置内容

                var dt = {};// 章节页码信息
                dt.beginPageNo = currPageCount;// 开始页码
                currPageCount += currChapterTiles.length;// 总的页数
                dt.endPageNo = currPageCount-1;// 结束页码

                dt.currChapterTiles = currChapterTiles;// 内容缓存
                dt.currChapter = currChapter;

                currChapterZindex[currChapter.id] = dt;// 章节id和页码
                dt.index = currChapterZindexData.length;
                currChapterZindexData.push(dt);// 放入到数组
            }
        }

        bindTouch4Reader('contentPages');


    }else if(readOptMoel == 3){// 仿真效果
        if(fisrtReadBookFlag == 1){// 第一次阅读
            var cnt = '';
            for(var i = 0; i < currChapterTiles.length; ++ i){
                cnt += '<div class="readerContentItem"><div class="readerBookTitle" >'+ currBook.name +'</div><div class="readerChapterTitle" >'+ currChapter.name +'</div><div class="readercontent"  style="font-size:' +currFontSize + 'px;">' + currChapterTiles[i] + '</div></div>';
            }

            $("#flipbook").html(cnt);// 设置内容

            var dt = {};// 章节页码信息
            dt.beginPageNo = currPageCount;// 开始页码
            currPageCount = currChapterTiles.length;// 总的页数
            currPageNo = currChapterTilesIndex;

            dt.endPageNo = currPageCount-1;// 结束页码

            dt.index = 0;// 数组索引
            dt.currChapterTiles = currChapterTiles;// 内容缓存
            dt.currChapter = currChapter;

            currChapterZindex[currChapter.id] = dt;// 章节id和页码
            currChapterZindexData.push(dt);// 放入到数组

            bindTouch4Reader('contentPages');
        }else{
            if(dirctor == -1){
                //$("#flipbook").prepend(cnt);// 设置内容

                //$("#flipbook").html(cnt + $("#flipbook").html());// 设置内容

                for(var i = 0; i < currChapterTiles.length; ++ i){
                    var cnt = $('<div class="readerContentItem"><div class="readerBookTitle" >'+ currBook.name +'</div><div class="readerChapterTitle" >'+ currChapter.name +'</div><div class="readercontent"  style="font-size:' +currFontSize + 'px;">' + currChapterTiles[i] + '</div></div>');

                    $("#flipbook").turn("addPage", cnt, i);
                }

                currPageNo += currChapterTiles.length;
                currPageCount += currChapterTiles.length;// 总的页数

                var dt = {};// 章节页码信息
                dt.beginPageNo = 0;// 开始页码
                dt.endPageNo = currChapterTiles.length-1;// 结束页码
                dt.index = 0;// 数组索引

                dt.currChapterTiles = currChapterTiles;// 内容缓存
                dt.currChapter = currChapter;

                currChapterZindex[currChapter.id] = dt;// 章节id和页码
                for(var i = 0; i <currChapterZindexData.length; ++i){// 添加
                    var data = currChapterZindexData[i];
                    data.beginPageNo += currChapterTiles.length;
                    data.endPageNo += currChapterTiles.length;
                    ++data.index;
                }
                currChapterZindexData.unshift(dt);// 放入到数组
            }else{
                //$("#flipbook").append(cnt);// 设置内容

                var dt = {};// 章节页码信息
                dt.beginPageNo = currPageCount;// 开始页码

                showLoading();

                for(var i = 0; i < currChapterTiles.length; ++ i){
                    var cnt = $('<div class="readerContentItem"><div class="readerBookTitle" >'+ currBook.name +'</div><div class="readerChapterTitle" >'+ currChapter.name +'</div><div class="readercontent"  style="font-size:' +currFontSize + 'px;">' + currChapterTiles[i] + '</div></div>');

                    $("#flipbook").turn("addPage", cnt, currPageCount++);
                }

                setTimeout(function(){hideLoading();},2000);
                //$("#flipbook").html($("#flipbook").html() + cnt);// 设置内容


                //currPageCount += currChapterTiles.length;// 总的页数
                dt.endPageNo = currPageCount-1;// 结束页码

                dt.currChapterTiles = currChapterTiles;// 内容缓存
                dt.currChapter = currChapter;

                currChapterZindex[currChapter.id] = dt;// 章节id和页码
                dt.index = currChapterZindexData.length;

                currChapterZindexData.push(dt);// 放入到数组
            }
        }
    }else if(readOptMoel == 4){// 覆盖效果

        if(dirctor == -1){
            var cnt = '';
            for(var i = 0; i < currChapterTiles.length; ++ i){
                cnt += '<div class="readerTopItem" id="rd_' + (prezindexoffsize+currChapterTiles.length-i-1) + '" style="z-index:' + (prezindexoffsize+currChapterTiles.length-i-1) + ';'+ (i < currChapterTilesIndex?'transform-style: preserve-3d; backface-visibility: hidden; transform: translateX(-100%); transition: 400ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0ms;':'') +'"><div class="readItem4Scorller"><div class="readerBookTitle" >'+ currBook.name +'</div><div class="readerChapterTitle" >'+ currChapter.name +'</div><div class="readercontent"  style="font-size:' +currFontSize + 'px;">' + currChapterTiles[i] + '</div></div></div>';
            }

            prezindexoffsize += currChapterTiles.length;// 添加长度

            $("#bookContent").prepend(cnt);// 设置内容

            currPageNo += currChapterTiles.length;
            currPageCount += currChapterTiles.length;// 总的页数

            var dt = {};// 章节页码信息
            dt.beginPageNo = 0;// 开始页码
            dt.endPageNo = currChapterTiles.length-1;// 结束页码

            dt.index = 0;
            dt.currChapterTiles = currChapterTiles;// 内容缓存
            dt.currChapter = currChapter;

            currChapterZindex[currChapter.id] = dt;// 章节id和页码
            for(var i = 0; i <currChapterZindexData.length; ++i){// 添加
                var data = currChapterZindexData[i];
                data.beginPageNo += currChapterTiles.length;
                data.endPageNo += currChapterTiles.length;
                ++data.index;
            }
            currChapterZindexData.unshift(dt);// 放入到数组
        }else{
            var cnt = '';
            for(var i = 0; i < currChapterTiles.length; ++ i){
                cnt += '<div class="readerTopItem" id="rd_' + (postzindexoffsize) + '" style="z-index:' + (postzindexoffsize--) + ';'+ (i < currChapterTilesIndex?'transform-style: preserve-3d; backface-visibility: hidden; transform: translateX(-100%); transition: 400ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0ms;':'') +'"><div class="readItem4Scorller"><div class="readerBookTitle" >'+ currBook.name +'</div><div class="readerChapterTitle" >'+ currChapter.name +'</div><div class="readercontent"  style="font-size:' +currFontSize + 'px;">' + currChapterTiles[i] + '</div></div></div>';
            }

            $("#bookContent").append(cnt);// 设置内容


            var dt = {};// 章节页码信息
            dt.beginPageNo = currPageCount;// 开始页码

            currPageNo += currChapterTilesIndex;
            currPageCount += currChapterTiles.length;// 总的页数
            dt.endPageNo = currPageCount-1;// 结束页码

            dt.currChapterTiles = currChapterTiles;// 内容缓存
            dt.currChapter = currChapter;

            currChapterZindex[currChapter.id] = dt;// 章节id和页码
            dt.index = currChapterZindexData.length;

            currChapterZindexData.push(dt);// 放入到数组

        }

        bindTouch4Reader('bookContent');
    }

    fisrtReadBookFlag = 2;// 不是第一次进入
}

// 设置背景
var currBG = 1;// 当前背景风格
function setBG(opt){
    if(currBG == opt){
        return;
    }

    $("#bookContent").addClass('st' + opt);
    $("#bookContent").removeClass('st' + currBG);
    currBG = opt;

}

// 添加章节到小说
function addChapter2Book(list){
    if(list.length > 0){
        var b = list[0];
        var book = currBook;

        if(currBook){// 是否有当前小说
            if(b.books_id != book.id){
                book = dataSet.get4Cache(b.books_id);
            }
        }else{
            book = dataSet.get4Cache(b.books_id);
        }

        // 获取章节所在分卷
        var bv = book.bookVolums[0];
        if(bv.id != b.bookvolumes_id){
            for(var i = 0; i < book.bookVolums.length; ++i){// 获分卷
                var bv1 = book.bookVolums[i];
                if(bv1.id == b.bookvolumes_id){
                    bv = bv1;
                    break;
                }
            }
        }

        if(bv.chapters){
            bv.chapters = bv.chapters.concat(list);
        }else{
            bv.chapters = list;
        }
    }
}

// 插入数据
function insertChapter2Book(list){
    if(list.length > 0){
        var b = list[0];
        var book = currBook;

        if(currBook){// 是否有当前小说
            if(b.books_id != book.id){
                book = dataSet.get4Cache(b.books_id);
            }
        }else{
            book = dataSet.get4Cache(b.books_id);
        }

        // 获取章节所在分卷
        var bv = book.bookVolums[0];
        if(bv.id != b.bookvolumes_id){
            for(var i = 0; i < book.bookVolums.length; ++i){// 获分卷
                var bv1 = book.bookVolums[i];
                if(bv1.id == b.bookvolumes_id){
                    bv = bv1;
                    break;
                }
            }
        }

        if(bv.chapters){
            bv.chapters = list.concat(bv.chapters);
        }else{
            bv.chapters = list;
        }
    }
}

// 充值或畅读购买
function payOrder4Wx(){// 订单id
    showLoading();
    $.requestData(2,(currModel==1?service.addRecharge:service.addVipOrder),$.toJasonParams({id:currProductId,token:loginUser.token}),function(result){// 提交服务器

        if(result.status == 1){

            var content = result.message;

            nativeUtils.wxpayment(content);
        }
    },function(){
        //showMessage("网络异常，稍后重试");
    });
}

function payOrder4Alipay(){// 支付宝支付
    //id+内容+price
    var info = "微阅小说平台购物";
    var info1 = "";
    var values = loginUser.currOrder4Pay.productinfo.split(";");
    for(var i = 0; i < values.length; ++i){
        var v = values[i];
        var vs = v.split(",");
        info1 += " " + vs[1];
    }
    var content = loginUser.currOrder4Pay.id + "," + info1 + "," + loginUser.currOrder4Pay.totalfee;

    nativeUtils.alipayment(content);
    showLoading();
}

var currPayWay = 1;// 支付方式
// 设置支付方式
function setpayWay(opt){
    switch (opt){
        case 1:
            $("#wxicon").attr('src','images/ck.png');
            $("#zfbicon").attr('src','images/nck.png');
            break;
        case 2:
            $("#wxicon").attr('src','images/nck.png');
            $("#zfbicon").attr('src','images/ck.png');
            break;
    }

    currPayWay = opt;
}

// 支付
var payMsg = "";// 支付信息
function pay4Order(){
    show2('payhome');
}

function pay4Native(){

    if(currModel ==1 || currModel == 2){// 充值 或 畅读订单
        showLoading();
        $.requestData(2,(currModel==1?service.addRecharge:service.addVipOrder),$.toJasonParams({id:currProductId,token:loginUser.token,paytype:currPayWay}),function(result){// 提交服务器

            if(result.status == 1){
                var dt = result.data;
                payMsg = dt.msg;

                if(currPayWay == 1){
                    nativeUtils.wxpayment(payMsg);
                }else if(currPayWay == 2){
                    var dt = result.data;
                    nativeUtils.alipayment(payMsg);
                }
            }
        },function(){
            //showMessage("网络异常，稍后重试");
        });
    }else if(currModel ==3 || currModel == 4){// 3:手气拼单 4：畅读拼单
        var data = {};
        data.token = loginUser.token;
        data.id = currPkOrder.id;
        showLoading();

        $.requestData(2,service.joinPkOrder,$.toJasonParams(data),function(result){// 提交服务器
            hideLoading();

            if(result.status == 1){
                var dt = result.data;
                payMsg = dt.msg;
                currPkMemberId = dt.id;// 拼单成员ID

                if(currPayWay == 1){
                    nativeUtils.wxpayment(payMsg);
                }else if(currPayWay == 2){
                    var dt = result.data;
                    nativeUtils.alipayment(payMsg);
                }
            }
        },function(){
            hideLoading();
            showMessage("请确认网络连接正常后重试");
        });
    }else if(currModel ==5 || currModel == 6){// 5:创建手气拼单 6：创建畅读拼单
        var data = {};
        data.token = loginUser.token
        data.id = currPkProductId;
        showLoading();

        $.requestData(2,service.createPkOrder,$.toJasonParams(data),function(result){// 提交服务器
            hideLoading();

            if(result.status == 1){
                var dt = result.data;
                payMsg = dt.msg;

                if(currPayWay == 1){
                    nativeUtils.wxpayment(payMsg);
                }else if(currPayWay == 2){
                    var dt = result.data;
                    nativeUtils.alipayment(payMsg);
                }
            }
        },function(){
            hideLoading();
            showMessage("请确认网络连接正常后重试");
        });
    }
}

// 加入订单
function joinPkOrder(id){
    if(loginUser == null){
        go4Login();
        return;
    }

    show2('payhome');// 显示支付
}

function alipaymentCallBack(code){
    hideLoading();
    switch (code){
        case 9000:// 支付成功

            processAfterPay(1);// 正常支付

            try{
                if(orderScorller != null){
                    orderScorller.loadData(0);
                }
            }catch (e){}

            showMessage("支付成功！");
            break;


        case 8000:// 支付异常
            showMessage("支付确认中，稍后再试！");
            break;

        default:
            processAfterPay(2);// 取消支付
            showMessage("取消了支付");
            break;

    }
}

var currPkMemberId='';// 当前拼单id
function processAfterPay(status){// 支付后处理
    if(status == 1){// 隐藏支付界面
        hide('payhome');
    }

    if(currModel ==1 || currModel == 2){// 充值 或 畅读订单
        $.requestData(2,service.processAfterPayment,$.toJasonParams({id:loginUser.currOrder4Pay.id,token:loginUser.token,paystatus:status}),function(result){// 提交服务器

            if(result.status == 1){

                loginUser.currOrder4Pay = undefined;
            }
        },function(){
            //showMessage("网络异常，稍后重试");
        });
    }else if(currModel ==3 || currModel == 4){

        var data = {};
        data.token = loginUser.token;
        data.pkorders_id = currPkOrder.id;// 拼单单号id
        data.paystatus = status;// 支付状态
        data.vipproducts_id = currPkOrder.pkproducts_id;// 畅读产品id
        data.id = currPkMemberId;// 拼单成员id
        showLoading();

        $.requestData(2,service.process4Paypk,$.toJasonParams(data),function(result){// 提交服务器
            hideLoading();

            if(result.status == 1){
                var rsdata = result.data;

                currPkOrder = rsdata;// 设置当前拼单订单

                $("#vipordername").html(rsdata.name);// 姓名
                $("#viporderno").html('单号:' + rsdata.orderno);//
                $("#viporderamount").html('原价：￥' + rsdata.totalvalues);//
                $("#viporderprice").html('￥' + rsdata.price + '<span class="luckypkProdcutJoin">立刻加入拼单</span>');//


                var cnt = '';
                for(var i = 0; i < rsdata.members.length; ++i){
                    var m = rsdata.members[i];
                    cnt += '<div class="homePartternIconDiv1"><img src="' + picPath(m.icon) + '" class="homePartternIcon"></div>';
                }

                for(var k = 0; k < (rsdata.pkcounts - rsdata.members.length); ++k){
                    cnt += '<div class="homePartternIconDiv1"><div class="homeNoPatternIcon">...</div></div>';
                }

                $("#vipordermembers").html(cnt);//
            }
        },function(){
            hideLoading();
            showMessage("请确认网络连接正常后重试");
        });
    }else if(currModel ==5){
        showPage('passionpk',550);
    }else if(currModel ==6){
        showPage('passionpk',550);
    }
}

var shareContent = "";
function goInvestShare(type){// 分享
    show("investShare");
    setStatus(2000);

    shareContent = type;
    switch (type){
        case 1:// 产品
            shareContent += ","+ currProduct.id + "," + currProduct.icon + "," + currProduct.name;
            break;
        case 2:// 商户
            shareContent += ","+ currMerchant.entitycode + "," + currMerchant.icon + "," + currMerchant.entityname;
            break;

        case 3:// 活动
            shareContent += ","+ currActivity.id + "," + currActivity.icon + "," +  currActivity.title;
            break;
    }

}


function share2WXQQ(shareWay){// 分享产品，商户，活动
    // 分享目的地+数据类型+id+title
    var content = "" + shareWay + "," + shareContent;
    nativeUtils.share(content);
}

function wxpaymentCallBack(code){
    hideLoading();
    switch (code){
        case 0:// 支付成功

            processAfterPay(1);// 支付后处理

            try{
                if(orderScorller != null){
                    orderScorller.loadData(0);
                }
            }catch (e){}

            showMessage("支付成功！");
            break;


        case -1:// 支付异常
            showMessage("支付失败，稍后再试！");
            break;

        case -2:// 取消支付
            processAfterPay(2);// 支付后处理
            showMessage("取消了支付！");
            break;

        default:
            showMessage("只有上帝才知道发生了什么！");
            break;

    }
}

// 进入评论
function goSendCommit(){
    if(loginUser == null){
        go4Login();
        return;
    }

    $("#commentText").val('');
    //show2('sendCommits');
    showPage('sendCommits',1110);
}

function hideHomeMessage(){
    hide('homeMessage');
    hide('homeMessage1');
}

// 手气展开
var openCloseFlag = 1;// 1：收起 2：展开
function openClose(){
    if(openCloseFlag == 1){
        $("#openClose").html('&laquo;收起');
        $("#detailBookDesc").addClass("detailBookDescOpen");
        openCloseFlag = 2;
    }else{
        $("#openClose").html('展开&raquo;');
        $("#detailBookDesc").removeClass("detailBookDescOpen");
        openCloseFlag = 1;
    }
}

// 评论
function goodCommit(id){
    if(loginUser == null){
        go4Login();
    }

    if(isGood(id)){
        showMessage('已点过赞了');
        return;
    }

    // 设置点赞
    storeUtil.set('gd_' + getUserKey() + id,1);

    var gdv = $("#gd_" + id).attr('did')*1+1;

    $("#gd_" + id).html('(' + gdv + ')');
    $("#gd_" + id).attr('did',gdv);

    var data = {}; // 请求数据
    data.id = id;
    data.token = loginUser.token;

    data.zone = currBook.oid;// 分区

    data.books_id = currBook.id;
    data.books_name = currBook.name;

    $.requestData(2,service.goodCommit,$.toJasonParams(data),function(result){// 提交服务器
        if(result.status == 1){
            var data = result.data;

            var goods = data.goods;

            //$("#gd_" + id).html('(' + goods + ')');
            //$("#gd_" + id).attr('did',goods);
        }

    },function(){

    });
}

function isGood(id){
    var key = 'gd_' + getUserKey() + id;
    var v = storeUtil.get(key);

    if(v){
        return true;
    }

    return false;
}

// 查询我的消息
function findMyMsg(msgtype){
    if(loginUser == null){
        go4Login();
    }

    new iScroller({
        id:"myMessageScroller",
        url:service.findUserMessage,
        templateId:service.findUserMessage,
        paramters:{token:loginUser.token,msgtype:msgtype},
        isShare:true,
        autoLoad:true,
        director:3,//只向下获取数据
        pageFlag:true,
        request:2,
        contentId:"myMessageList",
        refreshFlag:false,
        noDataProcesser:function(){
            $("#myMessageList").html('<div style="margin-top: 50px;text-align: center;font-size: 11px;color: #E8554D;">暂无消息</div>');
        },
        cacheData:false
    });

    $(".myMessageTitleItemChecked").removeClass("myMessageTitleItemChecked");
    $("#msg_" + msgtype).addClass("myMessageTitleItemChecked");

    showPage('myMessage',450);
}