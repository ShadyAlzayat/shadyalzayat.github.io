if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const o=e=>s(e,c),t={module:{uri:c},exports:r,require:o};i[c]=Promise.all(a.map((e=>t[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-ghaEcq3Ep6L2QPYtXtbM/_buildManifest.js",revision:"c1ed4eb99726420c14ff30252db98c81"},{url:"/_next/static/-ghaEcq3Ep6L2QPYtXtbM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/243-8414775365957ae6.js",revision:"8414775365957ae6"},{url:"/_next/static/chunks/78e521c3-ff3b9ff116a97631.js",revision:"ff3b9ff116a97631"},{url:"/_next/static/chunks/d0447323-7b76cb1743ed76ce.js",revision:"7b76cb1743ed76ce"},{url:"/_next/static/chunks/framework-fae63b21a27d6472.js",revision:"fae63b21a27d6472"},{url:"/_next/static/chunks/main-542d8410d305fcca.js",revision:"542d8410d305fcca"},{url:"/_next/static/chunks/pages/_app-92565efb456aef35.js",revision:"92565efb456aef35"},{url:"/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/_next/static/chunks/pages/index-cf6042ee8a478f6c.js",revision:"cf6042ee8a478f6c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5f93e287a529fdfa.js",revision:"5f93e287a529fdfa"},{url:"/_next/static/css/733b9754a6747409.css",revision:"733b9754a6747409"},{url:"/_next/static/media/background-dark.4725304f.jpg",revision:"4725304f"},{url:"/_next/static/media/background-light.b226602f.jpg",revision:"b226602f"},{url:"/_next/static/media/questrial-latin-400-normal.1ffa50e1.woff",revision:"1ffa50e1"},{url:"/_next/static/media/questrial-latin-400-normal.221a17ee.woff2",revision:"221a17ee"},{url:"/_next/static/media/questrial-latin-ext-400-normal.9da0a37f.woff",revision:"9da0a37f"},{url:"/_next/static/media/questrial-latin-ext-400-normal.e07800a6.woff2",revision:"e07800a6"},{url:"/_next/static/media/questrial-vietnamese-400-normal.830a06b4.woff2",revision:"830a06b4"},{url:"/_next/static/media/questrial-vietnamese-400-normal.99e5a3ff.woff",revision:"99e5a3ff"},{url:"/background-dark.jpg",revision:"c1db84ba01a459e9681884eb2d783878"},{url:"/background-light.jpg",revision:"7b4d68e4f7e6d2266069555bf55519c7"},{url:"/devicon/adplist-icon.svg",revision:"8113382560bc210beb898ef729fafe4d"},{url:"/devicon/adplist.svg",revision:"6268fc55109427e5ce79a157d9743b4e"},{url:"/devicon/angular.svg",revision:"d881b28e95d2b7f224ffda214b43086c"},{url:"/devicon/astro.svg",revision:"8c3ab42f2617093af28a968486ea7ad2"},{url:"/devicon/bootstrap.svg",revision:"ef464025ab2713c6b9c58d29faf9e8cd"},{url:"/devicon/chakra-ui.svg",revision:"c1e816730197517b6977fda1c8ee0ec9"},{url:"/devicon/devto.svg",revision:"cae872c87a77bff0ddad2f47178901d8"},{url:"/devicon/digitalocean.svg",revision:"afbe56a197b08944a8753e25ecf67f42"},{url:"/devicon/docker.svg",revision:"ff73f4ac316925d0bd9a6ac3f96c1097"},{url:"/devicon/figma.svg",revision:"5469474802f827aed53a4776548411e1"},{url:"/devicon/firebase.svg",revision:"e82ac0d543eef3eee95655e430f8645c"},{url:"/devicon/github.svg",revision:"1485b113bf9651afdb50d96465e3e983"},{url:"/devicon/go.svg",revision:"974a75814a1339c82cb497ea1ab56383"},{url:"/devicon/google-cloud.svg",revision:"0e67159c560419d29c39a8c2d72bbe27"},{url:"/devicon/google-translate.svg",revision:"1f5016e15e6dae2cd611178066e3d1d1"},{url:"/devicon/meilisearch.svg",revision:"0966c0f87a96c82ca13255c3cc121902"},{url:"/devicon/netlify.svg",revision:"41555d529c6dac488b4292fe55632cad"},{url:"/devicon/nextjs.svg",revision:"8bed324391af60e266ba29523a45e6af"},{url:"/devicon/npm.svg",revision:"c9ec3ecc87c4d47e961e10642b1397cd"},{url:"/devicon/partytown.svg",revision:"2418e2f5dd5a5a527ae417a26d6c04cc"},{url:"/devicon/php.svg",revision:"a33a27344c0f16ef0545481cbb9e7419"},{url:"/devicon/pwa.svg",revision:"f2a8c28208e6f6ff42dd00f9c2737945"},{url:"/devicon/rails.svg",revision:"9381a4729b2a47ba531d87aba9795a00"},{url:"/devicon/react.svg",revision:"42c60246d6cc083be05201c7ae581092"},{url:"/devicon/render.svg",revision:"70345ead7cc534b930d002cc181cd9f2"},{url:"/devicon/ruby.svg",revision:"913e833558509f26312e57461aef663c"},{url:"/devicon/sass.svg",revision:"03f6561f5624ee2f1419f973dae38241"},{url:"/devicon/strapi.svg",revision:"16e816aaabcf0c54044f5265cd6d1a7e"},{url:"/devicon/supabase.svg",revision:"357c209cd8c6fa1c20761fe5486aac22"},{url:"/devicon/svelte.svg",revision:"a44d391a11f4ebc63d538c5f98b2c37e"},{url:"/devicon/tailwind.svg",revision:"0596c723c20edd4b27d05af0d4b4fe9c"},{url:"/devicon/typescript.svg",revision:"5e5bfe703238e5e2e39929b5f1039e1b"},{url:"/devicon/upstash.svg",revision:"df41f8bb3e67d1b4d40e08bc4e2f7e23"},{url:"/devicon/vercel.svg",revision:"ee5c56fe3eee4d431c633793aa1f8052"},{url:"/devicon/vite.svg",revision:"5d1b52185429a0d414c5861617e99513"},{url:"/devicon/webpack.svg",revision:"6fcc12a3fa21c99066dada06fca0068e"},{url:"/devicon/wordpress.svg",revision:"e101d94609765a0090b32bb49f094143"},{url:"/favicon.ico",revision:"042a1315da406f3b6e05243feb2a9e4f"},{url:"/hobbies/drumming.jpg",revision:"e400baaeba29f8a5a23a06d604a277c5"},{url:"/hobbies/snowboarding.jpg",revision:"aeca699f407c8a5fde7aeb755d36e8c5"},{url:"/manifest.json",revision:"5a12e397a83504e714627717a1380ca6"},{url:"/portfolio/Atlas-App.jpg",revision:"030e9238d815a9393209bdf06c9a0f3a"},{url:"/portfolio/Atlas-Logo.png",revision:"6eaf84cd712c171c76c190965fe0cd69"},{url:"/portfolio/Tillster-Logo.png",revision:"88a2e973fc8d6f05f03c7d4f24a035a3"},{url:"/profilePhoto.jpg",revision:"94498e29221a2255763b152b2bf62264"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
