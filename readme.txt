https://mp.weixin.qq.com/s/jVUrqO-RGkxdY-EANKJF8Q







/*********************************************************************************
* Refused to execute inline event handler because it violates the following Content Security Policy directive: "xxx". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution.
 * 说明：
 *     主要是没想到Chrome扩展的HTML中不能添加事件，只能在JS中动态添加。
 *
 *                                              2018-4-10 深圳 宝安西乡 曾剑锋
 ********************************************************************************/

一、参考文档：
    1. Content Security Policy (CSP)
        https://developer.chrome.com/extensions/contentSecurityPolicy#relaxing-inline-script
    2. Content Security Policy Reference
        https://content-security-policy.com/
    3. Chrome Extension 中的 CSP（Content Security Policy） 开发小记
        https://div.io/topic/1669
    4. Chrome自定义插件—小温之家的私人订制
        http://wenqy.com/2017/03/06/chrome%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E4%BB%B6-%E5%B0%8F%E6%B8%A9%E4%B9%8B%E5%AE%B6%E7%9A%84%E7%A7%81%E4%BA%BA%E8%AE%A2%E5%88%B6.html

二、解决办法：
    在JS中注册触发事件。


https://github.com/camwiegert/typical 动画打字

http://chrome.cenchy.com/index.html

二维码 https://github.com/neocotic/qrious

参考： https://github.com/gopinav/Chrome-Extensions