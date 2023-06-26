import{_ as e,o as a,c as n,a as s}from"./app-304f5532.js";const i={},d=s(`<h1 id="快速构建" tabindex="-1"><a class="header-anchor" href="#快速构建" aria-hidden="true">#</a> 快速构建</h1><div class="custom-container warning"><p class="custom-container-title">前提条件</p><p>golang版本 &gt;= 1.18</p></div><p>本文会帮助你从头搭建一个简单的 go-dandelion 应用。</p><h2 id="_1-安装go-dandelion脚手架工具" tabindex="-1"><a class="header-anchor" href="#_1-安装go-dandelion脚手架工具" aria-hidden="true">#</a> 1.安装go-dandelion脚手架工具</h2><p>安装go-dandelion-cli方便快速生成项目结构。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get github.com/gly-hub/go-dandelion/go-dandelion-cli@latest
go <span class="token function">install</span> github.com/gly-hub/go-dandelion/go-dandelion-cli@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-创建go-admin-example应用" tabindex="-1"><a class="header-anchor" href="#_2-创建go-admin-example应用" aria-hidden="true">#</a> 2.创建go-admin-example应用</h2><p>执行命令将会创建一个go-admin-example的文件夹作为应用主目录。</p><div class="custom-container warning"><p class="custom-container-title">应用名称</p><p>该应用下的所有服务共用一个mod，需要报错所有服务应用名称一致<strong>go-admin-example</strong></p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建应用并进入</span>
go-dandelion-cli app <span class="token parameter variable">-n</span> go-admin-example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> go-admin-example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-rpc服务构建" tabindex="-1"><a class="header-anchor" href="#_3-rpc服务构建" aria-hidden="true">#</a> 3.rpc服务构建</h2><p>初始化一个rpc-server的服务作为该示例的rpc服务，用于业务层逻辑编写。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 构建rpc服务</span>
go-dandelion-cli build <span class="token parameter variable">-n</span> go-admin-example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要选择所需有的组件，如mysql、redis、logger、trace链路等。 示例中将全部初始化。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>需要创建的服务类型，输入数字（1-rpc 2-http）:1
rpc服务名称:rpc-server
是否初始化mysql（y/n）:y
是否初始化redis（y/n）:y
是否初始化logger（y/n）:y
是否初始化trace链路（y/n）:y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-http服务构建" tabindex="-1"><a class="header-anchor" href="#_4-http服务构建" aria-hidden="true">#</a> 4.http服务构建</h2><p>初始化一个http-server的服务作为该示例的网关服务，用于对外的数据交互。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 构建http服务</span>
go-dandelion-cli build <span class="token parameter variable">-n</span> go-admin-example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要选择所需有的组件，如mysql、redis、logger、trace链路等。 由于网关层不会进行dao层的操作，所以不需要初始化mysql和redis。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>需要创建的服务类型，输入数字（1-rpc 2-http）:2
rpc服务名称:http-server
是否初始化mysql（y/n）:n
是否初始化redis（y/n）:n
是否初始化logger（y/n）:y
是否初始化trace链路（y/n）:y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_5-修改配置文件" aria-hidden="true">#</a> 5.修改配置文件</h2><p>需要将对应的mysql、redis、trace链路以及etcd等配置修改为自己开发环境的配置。关于配置字段解释可浏览<a href="/guide/baseconfig">基础配置</a>。</p><h2 id="_6-启动服务" tabindex="-1"><a class="header-anchor" href="#_6-启动服务" aria-hidden="true">#</a> 6.启动服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 启动rpc服务</span>
<span class="token builtin class-name">cd</span> rpc-server
<span class="token comment">#进入服务目录</span>
go build <span class="token parameter variable">-o</span> rpc-server
<span class="token comment">#运行</span>
./rpc-server server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 启动http服务</span>
<span class="token builtin class-name">cd</span> http-server
<span class="token comment">#进入服务目录</span>
go build <span class="token parameter variable">-o</span> http-server
<span class="token comment">#运行</span>
./http-server server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[d];function r(c,t){return a(),n("div",null,l)}const p=e(i,[["render",r],["__file","started.html.vue"]]);export{p as default};
