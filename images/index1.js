

书券：赠送 不给作者结算 不可打赏

书币：可打赏 一次购买 终身阅读

拼单：手气拼单 （好友拼单 系统拼单）
待拼列表
发起拼单

会员拼单：3个人
包月
半年
包年


完善的：
支付页面
打赏页面
购买章节页面


1.拼单
2.支付相关
3.登录注册
4.打赏


拼单首页

3000书币 + 3000书券
原价 ￥45
拼单价￥18
发起人


5000书币 + 5000书券
原价￥65
拼单价￥28


包月畅读
原价￥30
拼单价加￥10
人数3人 差1人
成员列表


存储策略
1.保留3个月的数据在OLTP 超过3个月的数据归档到OLAP系统
2.支撑运营的数据 每天做账务处理
3.分表分库 策略


1.把数据库 建表 脚本 导一份 或者有个 每个表字段的意思
2.现有系统 的技术 构架 ：从 web层  - > 缓存 -> 数据库  图片存储--
2.1分表 服务生成
3.现有 一些表 疑问 解答

1.添加 指定外键名字
2.处理 分表 增删改成

会员（用户）  作者  管理人员

解析
<a:Displayed>0</a:Displayed>
<a:Number>10</a:Number>


1.数据归档系统
2.数据同步系统
3.分表新增 分表查询
a.生成表--
b.生成查询--
c.生成操作 更新 删除 详细
d.生成 增删改查
f.编辑存储 查询存储

e.zsgc 基类处理

4.解析处理--
5.后台管理系统处理
CONCAT
concat


计划：
1.人员分组 每组4人
2.根据需求 分模块（熟悉需求）
3.设计（设计规范培训）
4.设计
6.架构培训
6.1后台架构
6.2接口架构培训
7.调整测试

tableName
zone
zoneNumber


1.处理生成 zone  和 传值
a.zone 设值
b.传值

列表页面--
编辑页面 传值 和 设值
其他页面


oid book members

本表分表字段
其他表分表字段

2.处理 id值 的分离--
3.处理 前端id连接用分号--
a.移动
b.选择



1.处理 功能 按钮--

2.开发数据同步 数据归档
3.开发主键服务



仓情详览

OA:请假管理流程和费用报销流程


千阳 职场
报表 视频
合同审批
结算审批


财务接口文档



用户表、作者、小说类型、小说、分卷、章节、标签、类型标签、小说标签



1.手机客户：
读者、家长、登录注册，读取书的信息、分类、电子书、借的书，要归还的书，评论，听读书音频，PDF文件 记录读取到的位置
2.PK答题系统：题库（图片、声音、文子） 答题 判卷 排行（全选择题）  后台
3.图书管理后台
4.各端接口

其中PK答题和各端接口系统优先级最高，年前完成，图书管理系统后台3月1号使用，其余 3月20号左右完成。

农贷通


1.处理 智慧图书系统



管区 冗余到 层号
处理 选择 书架 层的冗余




1.部署图片服务
2.mysql nginx redis tomcate jdk app


处理类型
edit index 配置文件

处理音频
处理比赛


接口处理


https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0c06abb5211ec8f8&redirect_uri=http://tp.cdcoder.cn/voice/qpIndex&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect
https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7a27b6d4c4b90d4c&redirect_uri=http://a.goodo.com.cn/vote/vote4wx/&response_type=code&scope=snsapi_base&state=xgs_sign#wechat_redirect

http://a.goodo.com.cn/vote/vote4wx/?code=021KCOoH1S2cE70i3YrH1FBHoH1KCOob&state=xgdd_list

https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4c5b3945b60cd725&redirect_uri=http://a.scymh.com/vote/vote4wx/&response_type=code&scope=snsapi_base&state=txz_sign#wechat_redirect

    http://i.scymh.com/uploadfile/2018/01/24/20180124a6be0c165cce48679d3adb76edac00c9.png

    http://i.scymh.com/uploadfile/2018/01/24/20180124cb8c3a8da4be46e4be83c88645ce76c4.png
    http://i.scymh.com/uploadfile/2018/01/24/20180124d681756c4d18476daf928aa72483e0ef.png
    http://i.scymh.com/uploadfile/2018/01/24/20180124ca9db5cc64464dd9a90f11688fb968d5.png

        http://i.scymh.com/uploadfile/2018/01/24/20180124ff9c2bba1b084e71a99638e607a742fb.jpg
            http://i.scymh.com/uploadfile/2018/01/24/201801244f1df8f0aa5d4c0ba839d243a0f0eb0d.png


                https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7a27b6d4c4b90d4c&redirect_uri=http://a.goodo.com.cn/vote/vote4wx/&response_type=code&scope=snsapi_base&state=shxgs_list#wechat_redirect


1.人物介绍
2.上传视频

3.接口开发
<bean id="answerpks" class="com.jason.biz.service.AnswerPksService" lazy-init="true"/>
    <bean id="answerpkitems" class="com.jason.biz.service.AnswerPkItemsService" lazy-init="true"/>
    <bean id="answerpkplayers" class="com.jason.biz.service.AnswerPkPlayersService" lazy-init="true"/>
    <bean id="answerplayerresults" class="com.jason.biz.service.AnswerPlayerResultsService" lazy-init="true"/>



SELECT readername,cardno,tel,headericon,readerstatus,readsex,readertype,studentno,readerbirthday,startdate,enddate,password,dllkey,availecounts,borrowcounts,readerdescp,readerscores,readerpkscores,grades_id,grades_name,idFROM readers;

SELECT * FROM mybooks.readers;




1.处理 必选项--
2.处理 评分标准--
3.卡：批量制造卡
读者：锁卡 换卡 领卡 掉卡

ReadersAction
BookcardsAction
1.批量制卡
2.注册用户
3.换卡 处理 系列
4.

1.计划部分
入库计划安排表（依据是什么）

2.合同管理
合同是否做成主从表 将数量、品种、价格放入到明细表
金额，付款信息 添加都 合同里面

3.品种 等级
扣量增量公式  扣价增价公式

4.收购价格信息
按品种 等级 库存性质

5.付款申请（p19)
审批

6.封仓 开仓 封账
出入库单 倒仓单 损益单 整理损耗单


7.查仓巡检作业 （计划  班组 人员）

通风计划 异常报告 通风申请 通风条件评估 作业方案 审批 任务下达 执行
作业记录  通风效果评估

熏蒸计划 异常虫情报告 熏蒸申请 条件评估 方案制定 方案审批
熏蒸任务下达 药剂申领 作业执行 作业记录 指标跟踪分析 效果评估


8.设备、物质 采购申请
类型  技术参数要求 购买数量 购买原因 用途 到货时间 建议厂家



1.要一个unity demo，这边提供的类库 在unity不要使
2.知识分发后台管理，不能直接看分类吗--

3.添加题目，随着类型不一样，显示不一样的填写数据，音乐类型，就让上传音乐，图片类型，就让上传图片，文字类型，就填写文字--

4.我的理解哈，读者评论应该是一个模块，左边有一个模块，有评论的时候要提示下，管理员去审核通过，就如论坛评论的后台一样--

pages/readercomments/index.jsp?commentstatus=3

readercomments	readercomments_edit	修改	按钮	edit	左	icon-edit			3	默认按钮

5.界面上有一列按钮 可以测试 每个接口，后端发现一个问题，用账户登录，无论是那个连接，都可以进入 用一个用户，我用图书馆登录音频管理，还是图书馆


http://bks.scymh.com/index.jsp
    tsgly  123456  图书管理员
tsgzry 123456 图书工作人员

http://kng.scymh.com/kindex.jsp  知识管理
    zsgly 123456 知识管理员

http://audi.scymh.com/aindex.jsp 音频
    yspgly 123456 音视频管理员

http://pk.scymh.com/pindex.jsp  答题比赛
    tkgly 123456 题库管理员

http://ebk.scymh.com/eindex.jsp 电子书管理员
    dzsgly 123456 电子书管理员



http://audi.scymh.com/aindex.jsp 音频
    yspgly 123456 音视频管理员


http://zh.scymh.com/zindex.jsp 智慧之源
    zhgly 123456 智慧之源管理员



6.上传文件后的图标和删除修改一下。现在太丑。
9.分成听模块和读模块，类型也分开。api也再加一个。
13.音频的路径需要完整路径。现在不知道怎么拼接。
14.用户行为的报表目前没有。
15.1读者录音需要添加功能，老师需要添加文字说明




1.排行榜 添加 状态控制
2.更新记录
3.排行榜作者丢失


1.硬件设备模块
2.审批模块


小说计划：


1.详情
2.阅读
3.章节
4.用户 注册 登录 认证
5.书架
6.按类型 搜索

详情 全放缓存  （按 新增日期 最后修改日期 更新）  按类型 直接 从 缓存取  按关键字 从数据库取
章节 热点数据 放缓存


章节 详情 内容


1.同步 数据库
2.保存 排序字段的 当前值
3.更新 新增
4.添加 同步数据库

sychxvalue
tablename,tablecode,pk,ordercolume,lastvalue


sychdatas
tablename,tablecode,oid,name,value1,value2



1.优化显示 图片 音频  视频--
2.默认图片
3.状态


a.查看控制不可改
b.主从表操作
c.文件预览 各类型文件



d.修改控制 某字段不可改



1.调试
2.控制某些字段 不可修改
3.事务控制


id,name,nid




章节 获取  章节 处理  注册 认证 书架

购买 拼单


测试服务器
1.图片服务器 接口服务器 后台管理服务器 缓存服务器

2.apple账号  android市场账号

3.验证码账号

4.微信支付账号 支付宝支付账号

5.数据库同步账号
会员 主键重复 的数据  导数据


1.借阅卡
a.数据库不存在 新增卡到库
b.数据库有卡 没有绑定 给读者  选择绑定的 读者
c.获取 用户借阅情况


1.可借出  归还  顺架  倒架  盘点 除旧 没有书 使用该RFID 选择书 续借


图片服务器上传地址：
http://i.iweyue.com/uploadpic.jsp

上传成功返回：
{"result":"Y","filename":"20180319ba75f06803dc48af9a466c168d6fc85a.jpg"}

result： Y 表示成功 N 表示失败
filename:图片服务器上的文件名，文件名 文件名中包含了文件的存储路径
比如：20180319ba75f06803dc48af9a466c168d6fc85a.jpg
url地址为：http://i.iweyue.com/uploadfile/2018/03/19/20180319ba75f06803dc48af9a466c168d6fc85a.jpg


图片地址解析算法：

var picServer:"http://i.iweyue.com/uploadfile/",// 图片服务服务器地址

function picPath(fileName){
    if(!fileName){
        return "./images/t0.png";
    }
    if(fileName.toLowerCase().startWith('http://') ||fileName.toLowerCase().startWith('www.')){
        return fileName;
    }
    if(fileName){
        var path = picServer + fileName.substring(0, 4) + "/" + fileName.substring(4, 6) + "/" + fileName.substring(6, 8) + "/" + fileName;
        return path;
    }else{
        return "./images/t0.png";
    }
}

http://i.iweyue.com/uploadfile/2018/03/19/20180319cf15b38d35d3450eab6356f8760bb6be.jpg


智慧粮仓
1.优化页面
2.报表显示
3.打印

5.物联网部分
6.硬件联调

7.APP--接口  前端


小说：
章节 注册登录 拼单


区块链：/usr/local/Cellar/ethereum/1.8.2

datadir: /Users/chensihong/testNet

> eth.accounts
    ["0x70ab47a132ce0abac99819ece854d4ffff564aed"]

> personal.newAccount("cshbbrain")
"0x4c18cd35dd3a8124132733c30d9e565746fe05e1"
> eth.accounts
    ["0x70ab47a132ce0abac99819ece854d4ffff564aed", "0x4c18cd35dd3a8124132733c30d9e565746fe05e1"]

Contract mined! address: 0xba62d1da037246482423ad9e32b5fc08cd80d46b transactionHash: 0xd4534d2eb0287656c646fb8ee5111439915813455bfdff4b4b1e1520d481265d



var _numProposals = "Hello Word";
var helloContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"delegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"_winningProposal","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"toVoter","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"toProposal","type":"uint8"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_numProposals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var hello = helloContract.new(
    _numProposals,
    {
        from: web3.eth.accounts[1],
        data: '0x6060604052341561000f57600080fd5b60405160208061085883398101604052808051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055508060ff166002816100e491906100eb565b505061013e565b815481835581811511610112578183600052602060002091820191016101119190610117565b5b505050565b61013b91905b80821115610137576000808201600090555060010161011d565b5090565b90565b61070b8061014d6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680635c19a95c14610067578063609ff1bd146100a05780639e7b8d61146100cf578063b3f98adc14610108575b600080fd5b341561007257600080fd5b61009e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061012e565b005b34156100ab57600080fd5b6100b3610481565b604051808260ff1660ff16815260200191505060405180910390f35b34156100da57600080fd5b610106600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104ff565b005b341561011357600080fd5b61012c600480803560ff169060200190919050506105fc565b005b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002091508160010160009054906101000a900460ff161561018e5761047c565b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141580156102bc57503373ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b1561032b57600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925061018f565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156103645761047c565b60018260010160006101000a81548160ff021916908315150217905550828260010160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff161561046457816000015460028260010160019054906101000a900460ff1660ff1681548110151561044457fe5b90600052602060002090016000016000828254019250508190555061047b565b816000015481600001600082825401925050819055505b5b505050565b6000806000809150600090505b6002805490508160ff1610156104fa578160028260ff168154811015156104b157fe5b90600052602060002090016000015411156104ed5760028160ff168154811015156104d857fe5b90600052602060002090016000015491508092505b808060010191505061048e565b505090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415806105a75750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff165b156105b1576105f9565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055505b50565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff168061066457506002805490508260ff1610155b1561066e576106db565b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548160ff021916908360ff160217905550806000015460028360ff168154811015156106bf57fe5b9060005260206000209001600001600082825401925050819055505b50505600a165627a7a72305820751649f10dd6ce90b5e52b81f1d1edd45c4ae5152ea03f447406b45338d3bef40029',
        gas: '4700000'
    }, function (e, contract){
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    })



EVM :以太坊虚拟机
Ganache:来开启一个私链来进行开发测试，默认会在7545端口上运行一个开发链
Truffle:集成了一个开发者控制台，可用来生成一个开发链用来测试和部署智能合约。
Solidity:是编译型语言，需要把可读的Solidity代码编译为EVM字节码才能运行。
Dapps:一个完整的去中心化（区块链）应用（Dapps）, 本文可以和编写智能合约结合起来看。
MetaMask:是一款插件形式的以太坊轻客户端，开发过程中使用MetaMask和我们的dapp进行交互是个很好的选择，通过此链接安装，安装完成后，浏览器工具条会显示一个小狐狸图标。


1.书架--
2.充值 购买
3.拼单 手气 畅读拼单--


书架
设置当前正在阅读的小说

2.充值
充值 购买章节  购买VIP

充值记录 购买章节记录 购买包月记录

3.拼单
拼单产品列表  畅读列表--

当前手气拼单列表 当前畅读拼单列表 --

手气拼单详细  畅读拼单详情--

加入拼单 手气  畅读

新建 手气  畅读--


1.放入列表 缓存  2.创建拼单成员 3.支付金额 4.判断是否满人数 5.抽取结果


2.充值
充值 购买章节  购买VIP

充值记录 购买章节记录 购买包月记录

拼单处理

上午：所有接口



页面
1.男频 女频--

首页设置  类型 添加频道

2.充值 支付--
3.购买章节
4.打赏
5.购买畅读会员--


6.查找小说-- 导航问题
7.评论--
8.查询拼单信息



充值
members 余额 总充值 赠送的--
拼单的处理--

畅读到期时间--


支付后进行处理：订阅--
拼单支付后进行处理：--

1.处理 拼单 状态更新--
2.拼单成功后 用户信息的刷新和更新--

3.购买章节
阅读--
打赏--


书币 数量  书券数量 书券id

书券

订阅
签到
消息


1.登记  视频监控  绑卡  开道闸
2.扦样 视频监控 动画 生成 二维码
3.检验 视频监控 不同指标 图形表示 操作
4.称重 视频监控 示意 车辆位置
5.值仓
6.称皮 视频监控 不同指标 图形操作
7.注销




4.购买
5.详情折叠 展开说明



2.购买 处理
3.章节阅读
4.详情



6.拼单问题参加问题？
7.消息问题

1.三种模式 切换--
2.两种模式章节更新--
4.判断权限问题
10.异步获取 章节列表  和 章节内容
11.进入列表就获取50章，5章节内容


a.获取列表b.获取章节c.判断是否有数据 已经获取的章节列表数量 已经获取内容的章节数量和映射表


1.页面开发
2.联合调试
3.接口开发




重庆市农村商业银行
6214 6510 1894 5849 陈宗田

40223 008010 8731763


接口服务器
1.根据配置文件自动实现增删改查
2.查询配置
3.缓存配置
4.单个缓存配置


1.接口服务器开发培训
2.阅读器
3.拼单处理
4.消息处理
5.优化 UI
6.



1.手气拼单 畅读拼单
2.账号中心 方块
3.左右滑动 事件
4.消息对接
5.推送 分享
6.接口培训 --


环境
windows添加域名：
https://blog.csdn.net/flyingstarwb/article/details/2173243

192.168.188.90
www.zhlc.com  web
i.zhlc.com  pic
a.zhlc.com app

192.168.188.90 www.zhlc.com
192.168.188.90 i.zhlc.com
192.168.188.90 a.zhlc.com

192.168.188.80
t1.zhlc.com  物联网1
v.zhlc.com  视频  物联网身份证的图片 环节视频 合成视频 道匝车牌识别图片  统一存储在 这里 ngnx
l.zhlc.com  led
vc.zhlc.com 视频控制服务器
c.zhlc.com 道闸控制服务器

192.168.188.80 t1.zhlc.com
192.168.188.80 v.zhlc.com
192.168.188.80 l.zhlc.com

192.168.188.118
t2.zhlc.com 物联网2

192.168.188.118 t2.zhlc.com


辅助决策与BI分析展示系统



1.手气pk
2.消息
3.优化阅读
4.记录小进度


1.测试出入库流程
2.测试气体 温度采集
3.优化 UI界面 -->




1.物联网团队  技术总结 交接
2.客户 团队安排？？

3.中广核 需求 培训
4.刘朋 面谈 合伙事宜？？
a.公司名称
b.法人代表
c.期权池 大小 谁人代持
d.蜗牛学院 约束的规则 （义务和权利）
e.巴人互动 约束规则（义务和权利）
f.朋帅 约束规则
g.前期怎样协调  3家公司 业务（对外和对内）

f.彭良燕 的安排事宜




处理模板：
1.工作流
2.上传文件

sql 功能 配置文件 页面 java


1.物联网
2.接口服务器
3.视频监控
4.视频采集
5.道闸控制
6.LED显示
7.数据同步
8.流程引擎









1.第一组
购买 支持 哪些方式的 购买？ 支付  有阅读吗？ 解决了什么问题

分工：






书架 收藏----
评论
搜索
签到----
仿真阅读器


a.处理库点 和企业信息--
b.处理过滤条件--
c.收上传
d.新增数据不完善的地方处理--

第一天
1.分布式架构设计--架构需求
a.系统的接入端有哪些：PC Android iOS 微信 小程序 物联网设备？各接入端的主要业务 各接入端的并发量 峰值设计。
b.系统图片量 大中小 各类图片 的分布情况  头像 列表图片  详情图片
c.系统视频 点播 直播
d.存储 归档策略
e.系统的并发性 数据量


2.分布式架构设计--拆分艺术
a.按IO能力拆分
b.按运算能力拆分
c.按存储能力拆分
d.横向拆分
e.纵向拆分
f.网格计算
g.分布式头像图片系统设计

第二天
3.分布式架构设计--负载均衡和集群
a.传统web系统负载均衡
b.进化后的web系统负载均衡
c.传统RESTful接口集群
d.激进的RESTful接口集群
e.nginx squid
f.突破网络瓶颈 路由节点 + 计算节点 （DIY)

4.分布式架构设计--缓存设计
a.缓存设计的目的、成本、收益和原则
b.缓存的更新策略：LRU/LFU/FIFO算法删除   超时删除  主动更新
c.缓存粒度控制：通用性 空间规划
d.缓存穿透：漏洞攻击 爬虫请求 系统bug  --> 缓存空对象 布隆过滤器
e.雪崩优化：HA
f.codis  mongdo Memcached
g.大型分布式缓存的横向切分：系统参数 基础数据 会话信息 和 业务数据

第三天
5.分布式架构设计--存储设计
a.数据库：读写分离 分库分表 数据库归档策略
b.文件存储：文件存储规划 上传 下载 归档策略


6.分布式架构开发--Java高级网络编程
a.JAVA IO NIO AIO编程

第四天
b.Mina Netty CshBBrainNIO和CshBBrinAIO
c.CshBBrainNIO 技术架构解密--分层架构 网络层 协议层 业务层 和 集群

第五六天
d.基于CshBBrainNIO开发 RESTful 接口服务器

第七天
e.基于CshBBRainNIO开发 分布式系统中 路由节点

第八天
f.基于CshBBrainNIO实现 路由节点 + 计算节点 的大型分布式 RESTful接口系统

第九天
g.基于CshBBainNIO + Codis 实现高可用 高性能的 RESTful接口系统

第十到十三天
7.大型分布式物联网项目实践
a.后台管理系统设计
b.图片存储设计
c.缓存设计
d.数据库设计
e.APP接口服务器设计
f.物联网服务器设计
g.视频采集控制服务设计



1.点赞 2.评论 3.样式调整 android ios 4.分享




































