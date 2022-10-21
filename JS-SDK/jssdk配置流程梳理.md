# JS-SDK鉴权流程

## 步骤一：绑定域名
1. 微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
> 需要事先下载一个MP_verify_myWfdHLI9kXIVLwE.txt文件，放在我们自己填写的域名的静态资源文件夹下去
> 保证我们可以通过域名路径+MP_verify_myWfdHLI9kXIVLwE.txt的方式可以访问到该文件，已做验证
> 例如：我们想要配置aifoosen.applinzi.com 域名
> 则我们要保证通过 http://aifoosen.applinzi.com/MP_verify_myWfdHLI9kXIVLwE.txt  可以访问到服务器上的这个文件

2. IP白名单配置
> 微信公众平台进入“安全中心”的“IP白名单”里填写，跟js-sdk鉴权相关的所有ip
> 新浪云相关IP的位置：文档中心----入口与出口IP----外网访问出口 IP 列表

## 步骤二：引入JS文件
> 在需要调用JS接口的页面引入如下JS文件，(支持https): http://res.wx.qq.com/open/js/jweixin-1.4.0.js

## 步骤三：通过config接口注入权限验证配置
> 所有需要使用JS-sdk的页面必须先注入配置信息，否则将无法调用
配置项代码如下：
```
```