import{_ as c,a as i,b as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.A3EzhTwN.js";import{_ as h}from"./chunks/CloudinaryImg.vue_vue_type_script_setup_true_lang.khQMK8FL.js";import{_ as d}from"./chunks/CustomLink.IO3Z1wA_.js";import{_,o as u,c as b,I as a,k as s,a as o,R as m}from"./chunks/framework.7q_acuBE.js";import"./chunks/commonjsHelpers.5-cIlDoe.js";const A=JSON.parse('{"title":"如何正常访问 GitHub？","description":"","frontmatter":{},"headers":[],"relativePath":"tool/github520.md","filePath":"tool/github520.md","lastUpdated":1683964611000}'),y={name:"tool/github520.md"},g=s("h1",{id:"如何正常访问-github",tabindex:"-1"},[o("如何正常访问 GitHub？ "),s("a",{class:"header-anchor",href:"#如何正常访问-github","aria-label":'Permalink to "如何正常访问 GitHub？"'},"​")],-1),E=s("p",null,"本文教你如何优雅地访问 GitHub，不需要任何费用，钱老板也可以给作者提供一定的赞助，参考地址如下：",-1),w=s("blockquote",null,[s("p",null,[s("a",{href:"https://github.com/521xueweihan/GitHub520",target:"_blank",rel:"noreferrer"},"https://github.com/521xueweihan/GitHub520")])],-1),F=s("p",null,"不过个人在使用过程中还是会出现卡的情况，不是特别稳定，只做备用方案。",-1),C=s("h2",{id:"安装工具",tabindex:"-1"},[o("安装工具 "),s("a",{class:"header-anchor",href:"#安装工具","aria-label":'Permalink to "安装工具"'},"​")],-1),f=s("p",null,[o("我们需要安装一个名为 "),s("code",null,"SwitchHosts"),o(" 的工具，可以直接从 GitHub 的 release 地址下载：")],-1),H=s("p",null,"大家可以根据自己电脑的机型来选择安装即可。",-1),k=m(`<p>在这里贴两个地址吧：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">https://github.com/oldj/SwitchHosts/releases/download/v4.1.2/SwitchHosts_windows_installer_x64_4.1.2.6086.exe</span></span>
<span class="line"><span style="color:#B392F0;">https://github.com/oldj/SwitchHosts/releases/download/v4.1.2/SwitchHosts_mac_arm64_4.1.2.6086.dmg</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">https://github.com/oldj/SwitchHosts/releases/download/v4.1.2/SwitchHosts_windows_installer_x64_4.1.2.6086.exe</span></span>
<span class="line"><span style="color:#6F42C1;">https://github.com/oldj/SwitchHosts/releases/download/v4.1.2/SwitchHosts_mac_arm64_4.1.2.6086.dmg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>最好是以上述 releases 页面最新版本为主。</p></blockquote><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>当我们安装好了工具之后，打开，左上角会有一个加号，我们填写如下信息：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Hosts</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">类型：远程</span></span>
<span class="line"><span style="color:#B392F0;">Hosts</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">标题：（自定义，比如</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hellogithub）</span></span>
<span class="line"><span style="color:#B392F0;">URL:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://raw.hellogithub.com/hosts</span></span>
<span class="line"><span style="color:#B392F0;">自动刷新:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">最好选</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hour</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Hosts</span><span style="color:#24292E;"> </span><span style="color:#032F62;">类型：远程</span></span>
<span class="line"><span style="color:#6F42C1;">Hosts</span><span style="color:#24292E;"> </span><span style="color:#032F62;">标题：（自定义，比如</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hellogithub）</span></span>
<span class="line"><span style="color:#6F42C1;">URL:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://raw.hellogithub.com/hosts</span></span>
<span class="line"><span style="color:#6F42C1;">自动刷新:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">最好选</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hour</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,6),v=s("p",null,"至此，我们就可以正常访问 GitHub 了，开启你的开源之旅吧。",-1),B=s("h2",{id:"contributors",tabindex:"-1"},[o("Contributors "),s("a",{class:"header-anchor",href:"#contributors","aria-label":'Permalink to "Contributors"'},"​")],-1);function S(x,P,G,T,$,I){const t=c,e=d,n=h,l=i,p=r;return u(),b("div",null,[g,a(t,{readTime:"1",words:"287"}),E,w,F,C,f,a(e,{title:"SwitchHost Releases",href:"https://github.com/oldj/SwitchHosts/releases"}),H,a(n,{publicId:"tool/switchhost-download_ilseh0",alt:"switchhost-download"}),k,a(n,{publicId:"tool/switchhost-config_qjhkuk",alt:"switchhost-config"}),v,B,a(l),a(p)])}const L=_(y,[["render",S]]);export{A as __pageData,L as default};
