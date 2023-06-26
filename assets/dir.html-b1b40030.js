import{_ as e,o as i,c as n,a as s}from"./app-304f5532.js";const a={},o=s(`<h1 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure" aria-hidden="true">#</a> Directory Structure</h1><h2 id="rpc-service" tabindex="-1"><a class="header-anchor" href="#rpc-service" aria-hidden="true">#</a> RPC Service</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── boot
│   └── boot.go              // Register initialization methods here
├── cmd
│   ├── api
│   │   └── server.go        // Service startup entry point
│   └── cobra.go             // Cobra <span class="token builtin class-name">command</span> registration
├── config                    // Service configuration folder
│   └── configs_local.yaml    // Local configuration <span class="token function">file</span>
├── global
│   └── global.go            // Global variables
├── internal
│   ├── dao                  // Database operations
│   ├── enum                 // Enums and constants
│   ├── logic                // Business logic
│   ├── model                // Data models
│   └── <span class="token function">service</span>              // Services
│       └── api.go           // Service interface
├── static
│   └── rpc-server.txt       // Service name
├── tools                    // Utility classes
│
└── main.go                  // Entry <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>boot</code>: Register the corresponding initialization methods in the <code>boot</code> directory. Implement the registration method in <code>boot/boot.go</code>.</li><li><code>cmd</code>: Register <code>cobra</code> commands. Currently, provides the <code>api</code> service startup entry point.</li><li><code>config</code>: Configuration folder. Configuration files are in YAML format and must be strictly written in YAML format, otherwise errors may occur. The initial creation includes a local environment configuration file <code>config/configs_local.yaml</code>.</li><li><code>global</code>: Global variables for custom global variables.</li><li><code>internal</code>: Directory for implementing business code. <code>internal/dao</code> is for database operations, <code>internal/logic</code> is for business logic, <code>internal/model</code> is for data models, and <code>internal/service</code> is for service interfaces.</li><li><code>static</code>: Stores static files.</li><li><code>tools</code>: Utility classes. Custom utility classes should be placed in this directory.</li></ul><h2 id="http-service" tabindex="-1"><a class="header-anchor" href="#http-service" aria-hidden="true">#</a> HTTP Service</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── cmd
│   ├── api
│   │   └── server.go        // Service startup entry point
│   └── cobra.go             // Cobra <span class="token builtin class-name">command</span> registration
├── config                    // Service configuration folder
│   └── configs_local.yaml    // Local configuration <span class="token function">file</span>
├── internal
│   ├── middleware           // Custom middleware
│   ├── route                // Route management
│   │   └── route.go         // Provides basic routes
│   └── <span class="token function">service</span>              // Services
├── static
│   └── http-server.txt       // Service name
│ 
└── main.go                  // Entry <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>cmd</code>: Register <code>cobra</code> commands. Currently, provides the <code>api</code> service startup entry point.</li><li><code>config</code>: Configuration folder. Configuration files are in YAML format and must be strictly written in YAML format, otherwise errors may occur. The initial creation includes a local environment configuration file <code>config/configs_local.yaml</code>.</li><li><code>internal</code>: Directory for implementing business code. <code>internal/middleware</code> is used to store custom middleware, <code>internal/route</code> is for route management, <code>internal/service</code> is for service implementation and RPC invocation.</li><li><code>static</code>: Stores static files.</li></ul>`,7),c=[o];function r(l,d){return i(),n("div",null,c)}const v=e(a,[["render",r],["__file","dir.html.vue"]]);export{v as default};
