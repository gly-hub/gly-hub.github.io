import{_ as e,o as i,c as n,a as d}from"./app-304f5532.js";const c={},l=d(`<h1 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h1><h2 id="rpc服务" tabindex="-1"><a class="header-anchor" href="#rpc服务" aria-hidden="true">#</a> rpc服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── boot
│   └── boot.go              //需要初始化的方法在该处注册
├── cmd
│   ├── api
│   │   └── server.go        //服务启动入口
│   └── cobra.go             //cobra命令注册
├── config                    //服务配置文件夹
│   └── configs_local.yaml    //本地配置文件
├── global
│   └── global.go            //全局变量
├── internal
│   ├── dao                  //数据库操作
│   ├── enum                 //枚举、常量
│   ├── logic                //业务逻辑
│   ├── model                //数据模型
│   └── <span class="token function">service</span>              //服务
│       └── api.go           //服务接口
├── static
│   └── rpc-server.txt       //服务名
├── tools                    //工具类
│
└── main.go                  //入口文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>boot</code>: 对应的初始化方法在<code>boot</code>目录下实现。在<code>boot/boot.go</code>中提供注册方法。</li><li><code>cmd</code>: <code>cobra</code>命令注册，目前提供<code>api</code>服务启动入口。</li><li><code>config</code>: 配置文件夹，配置文件为<code>yaml</code>格式，需要严格按照<code>yaml</code>格式书写，否则会报错。初始化创建时提供本地环境配置文件<code>config/configs_local.yaml</code>。</li><li><code>global</code>: 全局变量，用于自定义全局变量。</li><li><code>internal</code>: 业务代码实现目录。<code>internal/dao</code>为数据库操作，<code>internal/logic</code>为业务逻辑，<code>internal/model</code>为数据模型，<code>internal/service</code>为服务接口。</li><li><code>static</code>: 存放静态文件。</li><li><code>tools</code>: 工具类。自定义的工具类需要在该目录下。</li></ul><div class="custom-container tip"><p class="custom-container-title">根据项目合理使用DDD分层架构</p><p><code>internal</code>层下的目录结构可以自定义，但是需要保证每个目录下的文件都是同一类型的文件，例如<code>internal/dao</code>下的文件都是数据库操作文件， <code>internal/logic</code>下的文件都是业务逻辑文件。</p></div><h2 id="http服务" tabindex="-1"><a class="header-anchor" href="#http服务" aria-hidden="true">#</a> http服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── cmd
│   ├── api
│   │   └── server.go        //服务启动入口
│   └── cobra.go             //cobra命令注册
├── config                    //服务配置文件夹
│   └── configs_local.yaml    //本地配置文件
├── internal
│   ├── middleware           //自定义中间件
│   ├── route                //路由管理
│   │   └── route.go         //提供基础路由
│   └── <span class="token function">service</span>              //服务
├── static
│   └── http-server.txt       //服务名
│ 
└── main.go                  //入口文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cmd</code>: <code>cobra</code>命令注册，目前提供<code>api</code>服务启动入口。</li><li><code>config</code>: 配置文件夹，配置文件为<code>yaml</code>格式，需要严格按照<code>yaml</code>格式书写，否则会报错。初始化创建时提供本地环境配置文件<code>config/configs_local.yaml</code>。</li><li><code>internal</code>: 业务代码实现目录。<code>internal/middleware</code>用于存放自定义中间件，<code>internal/route</code>用于路由管理，<code>internal/service</code>用于服务接口实现，rpc调用。</li><li><code>static</code>: 存放静态文件。</li></ul>`,8),a=[l];function s(o,r){return i(),n("div",null,a)}const t=e(c,[["render",s],["__file","dir.html.vue"]]);export{t as default};
