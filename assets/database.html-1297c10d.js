import{_ as i,r as c,o as p,c as l,b as n,d as s,e,w as t,a as o}from"./app-304f5532.js";const d={},u=n("h1",{id:"database-and-caching",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#database-and-caching","aria-hidden":"true"},"#"),s(" Database and Caching")],-1),r=n("h2",{id:"_1-database",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-database","aria-hidden":"true"},"#"),s(" 1. Database")],-1),k={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"Note",-1),m=n("code",null,"Gorm",-1),b=o(`<h3 id="_1-1-database-types" tabindex="-1"><a class="header-anchor" href="#_1-1-database-types" aria-hidden="true">#</a> 1.1 Database Types</h3><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Only MySQL and PostgreSQL databases are supported (more databases will be continuously integrated in the future).</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	Mysql    <span class="token operator">=</span> <span class="token string">&quot;mysql&quot;</span>
	Postgres <span class="token operator">=</span> <span class="token string">&quot;postgres&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="_1-2-using-the-database" tabindex="-1"><a class="header-anchor" href="#_1-2-using-the-database" aria-hidden="true">#</a> 1.2 Using the Database</h3><p>The <code>DB</code> class is provided in <code>application/db.go</code>. You can call the <code>GetDB</code> method to get the <code>*gorm.DB</code> instance. Example:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> logic

<span class="token keyword">var</span> Test testLogic

<span class="token keyword">type</span> testLogic <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	application<span class="token punctuation">.</span>DB
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a testLogic<span class="token punctuation">)</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	db <span class="token operator">:=</span> a<span class="token punctuation">.</span><span class="token function">GetDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-model-registration" tabindex="-1"><a class="header-anchor" href="#_1-3-model-registration" aria-hidden="true">#</a> 1.3 Model Registration</h3><p>The framework does not provide model registration functionality. You can customize the implementation in the <code>boot</code> directory. Example:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> boot

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-redis" tabindex="-1"><a class="header-anchor" href="#_2-redis" aria-hidden="true">#</a> 2. Redis</h2>`,9),g={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"Note",-1),f=n("code",null,"redigo",-1),_=o(`<h3 id="_2-1-redis-modes" tabindex="-1"><a class="header-anchor" href="#_2-1-redis-modes" aria-hidden="true">#</a> 2.1 Redis Modes</h3><div class="custom-container tip"><p class="custom-container-title">Supported</p><p>Currently, the framework supports standalone (<code>alone</code>), sentinel (<code>sentinel</code>), and cluster (<code>cluster</code>) modes.</p></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>No configuration for the database (<code>db</code>) is provided. By default, it uses <code>db0</code>. This is mainly because Redis cluster only supports <code>db0</code> and does not allow selecting a specific database. If you need to differentiate different business scenarios using different databases, it is recommended to manage multiple Redis instances. If you really need to select a database and cannot avoid it, you can use the <code>SELECT</code> command to control it manually (not recommended).</p></div><h3 id="_2-2-using-redis" tabindex="-1"><a class="header-anchor" href="#_2-2-using-redis" aria-hidden="true">#</a> 2.2 Using Redis</h3><p>The <code>Redis</code> class is provided in <code>application/redis.go</code>. You can call the <code>GetRedis</code> method to get the <code>*redigo.Client</code> instance.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> logic

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-available-methods" tabindex="-1"><a class="header-anchor" href="#_2-3-available-methods" aria-hidden="true">#</a> 2.3 Available Methods</h3><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Specific methods are provided in <code>database/redigo/redigo.go</code>.</p></div>`,8);function y(w,x){const a=c("RouterLink");return p(),l("div",null,[u,r,n("div",k,[v,n("p",null,[s("The framework integrates the "),m,s(" component. By configuring the "),e(a,{to:"/guide/baseconfig.html"},{default:t(()=>[s("database settings")]),_:1}),s(" in the configuration file, the database will be automatically initialized.")])]),b,n("div",g,[h,n("p",null,[s("The framework integrates the "),f,s(" component. By configuring the "),e(a,{to:"/guide/baseconfig.html"},{default:t(()=>[s("Redis settings")]),_:1}),s(" in the configuration file, Redis will be automatically initialized.")])]),_])}const R=i(d,[["render",y],["__file","database.html.vue"]]);export{R as default};
