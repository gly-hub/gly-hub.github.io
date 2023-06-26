import{_ as p,r as c,o as i,c as l,b as n,d as s,e,w as t,a as o}from"./app-304f5532.js";const u={},d=n("h1",{id:"数据库及缓存",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数据库及缓存","aria-hidden":"true"},"#"),s(" 数据库及缓存")],-1),r=n("h2",{id:"_1-数据库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-数据库","aria-hidden":"true"},"#"),s(" 1.数据库")],-1),k={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"提示",-1),m=n("code",null,"Gorm",-1),b=o(`<h3 id="_1-1-数据库类型" tabindex="-1"><a class="header-anchor" href="#_1-1-数据库类型" aria-hidden="true">#</a> 1.1 数据库类型</h3><div class="custom-container warning"><p class="custom-container-title">提示</p><p>只支持mysql、postgres两个数据库。（后期将持续集成）</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	Mysql    <span class="token operator">=</span> <span class="token string">&quot;mysql&quot;</span>
	Postgres <span class="token operator">=</span> <span class="token string">&quot;postgres&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_1-2-数据库使用" tabindex="-1"><a class="header-anchor" href="#_1-2-数据库使用" aria-hidden="true">#</a> 1.2 数据库使用</h3><p>在<code>application/db.go</code>中提供<code>DB</code>类，可调用<code>GetDB</code>方法获取<code>*gorm.DB</code>。 示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> logic

<span class="token keyword">var</span> Test testLogic

<span class="token keyword">type</span> testLogic <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	application<span class="token punctuation">.</span>DB
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a testLogic<span class="token punctuation">)</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	db <span class="token operator">:=</span> a<span class="token punctuation">.</span><span class="token function">GetDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-模型注册" tabindex="-1"><a class="header-anchor" href="#_1-3-模型注册" aria-hidden="true">#</a> 1.3 模型注册</h3><p>框架不提供模型注册功能，可在<code>boot</code>目录下自定义实现。 示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> boot

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gly-hub/go-dandelion/application&quot;</span>
	<span class="token string">&quot;github.com/gly-hub/go-dandelion/logger&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	models <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Register</span><span class="token punctuation">(</span>model <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	models <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>models<span class="token punctuation">,</span> model<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">MigrateModels</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	db <span class="token operator">:=</span> <span class="token operator">&amp;</span>application<span class="token punctuation">.</span>DB<span class="token punctuation">{</span><span class="token punctuation">}</span>
	dbIns <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">GetDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;gorm:table_options&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ENGINE=InnoDB CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> model <span class="token operator">:=</span> <span class="token keyword">range</span> models <span class="token punctuation">{</span>
		<span class="token keyword">if</span> dbIns<span class="token punctuation">.</span><span class="token function">Migrator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasTable</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		err <span class="token operator">:=</span> dbIns<span class="token punctuation">.</span><span class="token function">Migrator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			logger<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Migrate Model Error&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-redis" tabindex="-1"><a class="header-anchor" href="#_2-redis" aria-hidden="true">#</a> 2.Redis</h2>`,9),g={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"提示",-1),_=n("code",null,"redigo",-1),f=o(`<h3 id="_2-1-redis模式" tabindex="-1"><a class="header-anchor" href="#_2-1-redis模式" aria-hidden="true">#</a> 2.1 Redis模式</h3><div class="custom-container tip"><p class="custom-container-title">支持</p><p>目前支持单机（alone）, 哨兵（sentinel）, 集群（cluster）。</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>没有提供 db 相关的配置，默认使用 db0。主要因为 redis cluster 的默认也仅支持 db0, 不支持 db 的选择。 如果存在通过 db 区分不同的业务场景，建议使用多个 redis 实例进行管理。如果真存在选择 db 场景，且无法避 开，使用<code>select</code>命令自行控制（不建议）。</p></div><h3 id="_2-2-redis使用" tabindex="-1"><a class="header-anchor" href="#_2-2-redis使用" aria-hidden="true">#</a> 2.2 Redis使用</h3><p>在<code>application/redis.go</code>中提供<code>Redis</code>类，可调用<code>GetRedis</code>方法获取<code>*redigo.Client</code>。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> logic

<span class="token keyword">var</span> Test testLogic

<span class="token keyword">type</span> testLogic <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	application<span class="token punctuation">.</span>DB
	application<span class="token punctuation">.</span>Redis
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a testLogic<span class="token punctuation">)</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	db <span class="token operator">:=</span> al<span class="token punctuation">.</span><span class="token function">GetRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	db<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>c redis<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">(</span>res <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// do something</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-提供方法" tabindex="-1"><a class="header-anchor" href="#_2-3-提供方法" aria-hidden="true">#</a> 2.3 提供方法</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>具体提供方法<code>database/redigo/redigo.go</code>。</p></div>`,8);function y(w,x){const a=c("RouterLink");return i(),l("div",null,[d,r,n("div",k,[v,n("p",null,[s("框架集成了"),m,s("组件，只需要配置文件中配置 "),e(a,{to:"/zh/guide/baseconfig.html"},{default:t(()=>[s("数据库配置")]),_:1}),s("，即可自动初始化。")])]),b,n("div",g,[h,n("p",null,[s("框架集成了"),_,s("组件，只需要配置文件中配置 "),e(a,{to:"/zh/guide/baseconfig.html"},{default:t(()=>[s("redis配置")]),_:1}),s("，即可自动初始化。")])]),f])}const B=p(u,[["render",y],["__file","database.html.vue"]]);export{B as default};
