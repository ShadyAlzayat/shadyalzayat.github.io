if(!self.define){let a,e={};const s=(s,i)=>(s=new URL(s+".js",i).href,e[s]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=s,a.onload=e,document.head.appendChild(a)}else a=s,importScripts(s),e()})).then((()=>{let a=e[s];if(!a)throw new Error(`Module ${s} didn’t register its module`);return a})));self.define=(i,n)=>{const t=a||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let c={};const d=a=>s(a,t),r={module:{uri:t},exports:c,require:d};e[t]=Promise.all(i.map((a=>r[a]||d(a)))).then((a=>(n(...a),c)))}}define(["./workbox-1bb06f5e"],(function(a){"use strict";importScripts(),self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"/shadyalzayat/_next/static/chunks/243-001112784e5d6b81.js",revision:"001112784e5d6b81"},{url:"/shadyalzayat/_next/static/chunks/78e521c3-6ab752b78a465e06.js",revision:"6ab752b78a465e06"},{url:"/shadyalzayat/_next/static/chunks/d0447323-7b76cb1743ed76ce.js",revision:"7b76cb1743ed76ce"},{url:"/shadyalzayat/_next/static/chunks/framework-fae63b21a27d6472.js",revision:"fae63b21a27d6472"},{url:"/shadyalzayat/_next/static/chunks/main-d61a787917f4371e.js",revision:"d61a787917f4371e"},{url:"/shadyalzayat/_next/static/chunks/pages/_app-92565efb456aef35.js",revision:"92565efb456aef35"},{url:"/shadyalzayat/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/shadyalzayat/_next/static/chunks/pages/index-1774d7f5943df801.js",revision:"1774d7f5943df801"},{url:"/shadyalzayat/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/shadyalzayat/_next/static/chunks/webpack-57ddde6e740cd4a5.js",revision:"57ddde6e740cd4a5"},{url:"/shadyalzayat/_next/static/css/4fcb2f241c1a79eb.css",revision:"4fcb2f241c1a79eb"},{url:"/shadyalzayat/_next/static/media/background-dark.b13fe4f0.jpg",revision:"b13fe4f0"},{url:"/shadyalzayat/_next/static/media/background-light.d42a3196.jpg",revision:"d42a3196"},{url:"/shadyalzayat/_next/static/media/questrial-latin-400-normal.1ffa50e1.woff",revision:"1ffa50e1"},{url:"/shadyalzayat/_next/static/media/questrial-latin-400-normal.221a17ee.woff2",revision:"221a17ee"},{url:"/shadyalzayat/_next/static/media/questrial-latin-ext-400-normal.9da0a37f.woff",revision:"9da0a37f"},{url:"/shadyalzayat/_next/static/media/questrial-latin-ext-400-normal.e07800a6.woff2",revision:"e07800a6"},{url:"/shadyalzayat/_next/static/media/questrial-vietnamese-400-normal.830a06b4.woff2",revision:"830a06b4"},{url:"/shadyalzayat/_next/static/media/questrial-vietnamese-400-normal.99e5a3ff.woff",revision:"99e5a3ff"},{url:"/shadyalzayat/_next/static/ywCGiR3BRDA5Zeo1rY9_d/_buildManifest.js",revision:"b1d2d17a89e200c360969766034b2378"},{url:"/shadyalzayat/_next/static/ywCGiR3BRDA5Zeo1rY9_d/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/shadyalzayat/background-dark.jpg",revision:"75366303aaac9af2fb4cc91ba3f03fb3"},{url:"/shadyalzayat/background-light.jpg",revision:"6a7b773c7a465943310f2542f01c20a6"},{url:"/shadyalzayat/devicon/adplist-icon.svg",revision:"8113382560bc210beb898ef729fafe4d"},{url:"/shadyalzayat/devicon/adplist.svg",revision:"6268fc55109427e5ce79a157d9743b4e"},{url:"/shadyalzayat/devicon/angular.svg",revision:"d881b28e95d2b7f224ffda214b43086c"},{url:"/shadyalzayat/devicon/astro.svg",revision:"8c3ab42f2617093af28a968486ea7ad2"},{url:"/shadyalzayat/devicon/bootstrap.svg",revision:"ef464025ab2713c6b9c58d29faf9e8cd"},{url:"/shadyalzayat/devicon/chakra-ui.svg",revision:"c1e816730197517b6977fda1c8ee0ec9"},{url:"/shadyalzayat/devicon/devto.svg",revision:"cae872c87a77bff0ddad2f47178901d8"},{url:"/shadyalzayat/devicon/digitalocean.svg",revision:"afbe56a197b08944a8753e25ecf67f42"},{url:"/shadyalzayat/devicon/docker.svg",revision:"ff73f4ac316925d0bd9a6ac3f96c1097"},{url:"/shadyalzayat/devicon/figma.svg",revision:"5469474802f827aed53a4776548411e1"},{url:"/shadyalzayat/devicon/firebase.svg",revision:"e82ac0d543eef3eee95655e430f8645c"},{url:"/shadyalzayat/devicon/github.svg",revision:"1485b113bf9651afdb50d96465e3e983"},{url:"/shadyalzayat/devicon/go.svg",revision:"974a75814a1339c82cb497ea1ab56383"},{url:"/shadyalzayat/devicon/google-cloud.svg",revision:"0e67159c560419d29c39a8c2d72bbe27"},{url:"/shadyalzayat/devicon/google-translate.svg",revision:"1f5016e15e6dae2cd611178066e3d1d1"},{url:"/shadyalzayat/devicon/meilisearch.svg",revision:"0966c0f87a96c82ca13255c3cc121902"},{url:"/shadyalzayat/devicon/netlify.svg",revision:"41555d529c6dac488b4292fe55632cad"},{url:"/shadyalzayat/devicon/nextjs.svg",revision:"8bed324391af60e266ba29523a45e6af"},{url:"/shadyalzayat/devicon/npm.svg",revision:"c9ec3ecc87c4d47e961e10642b1397cd"},{url:"/shadyalzayat/devicon/partytown.svg",revision:"2418e2f5dd5a5a527ae417a26d6c04cc"},{url:"/shadyalzayat/devicon/php.svg",revision:"a33a27344c0f16ef0545481cbb9e7419"},{url:"/shadyalzayat/devicon/pwa.svg",revision:"f2a8c28208e6f6ff42dd00f9c2737945"},{url:"/shadyalzayat/devicon/rails.svg",revision:"9381a4729b2a47ba531d87aba9795a00"},{url:"/shadyalzayat/devicon/react.svg",revision:"42c60246d6cc083be05201c7ae581092"},{url:"/shadyalzayat/devicon/render.svg",revision:"70345ead7cc534b930d002cc181cd9f2"},{url:"/shadyalzayat/devicon/ruby.svg",revision:"913e833558509f26312e57461aef663c"},{url:"/shadyalzayat/devicon/sass.svg",revision:"03f6561f5624ee2f1419f973dae38241"},{url:"/shadyalzayat/devicon/strapi.svg",revision:"16e816aaabcf0c54044f5265cd6d1a7e"},{url:"/shadyalzayat/devicon/supabase.svg",revision:"357c209cd8c6fa1c20761fe5486aac22"},{url:"/shadyalzayat/devicon/svelte.svg",revision:"a44d391a11f4ebc63d538c5f98b2c37e"},{url:"/shadyalzayat/devicon/tailwind.svg",revision:"0596c723c20edd4b27d05af0d4b4fe9c"},{url:"/shadyalzayat/devicon/typescript.svg",revision:"5e5bfe703238e5e2e39929b5f1039e1b"},{url:"/shadyalzayat/devicon/upstash.svg",revision:"df41f8bb3e67d1b4d40e08bc4e2f7e23"},{url:"/shadyalzayat/devicon/vercel.svg",revision:"ee5c56fe3eee4d431c633793aa1f8052"},{url:"/shadyalzayat/devicon/vite.svg",revision:"5d1b52185429a0d414c5861617e99513"},{url:"/shadyalzayat/devicon/webpack.svg",revision:"6fcc12a3fa21c99066dada06fca0068e"},{url:"/shadyalzayat/devicon/wordpress.svg",revision:"e101d94609765a0090b32bb49f094143"},{url:"/shadyalzayat/favicon.ico",revision:"042a1315da406f3b6e05243feb2a9e4f"},{url:"/shadyalzayat/hobbies/drumming.jpg",revision:"e400baaeba29f8a5a23a06d604a277c5"},{url:"/shadyalzayat/hobbies/snowboarding.jpg",revision:"aeca699f407c8a5fde7aeb755d36e8c5"},{url:"/shadyalzayat/manifest.json",revision:"5a12e397a83504e714627717a1380ca6"},{url:"/shadyalzayat/portfolio/Atlas-Logo.png",revision:"6eaf84cd712c171c76c190965fe0cd69"},{url:"/shadyalzayat/portfolio/Tillster-Logo.png",revision:"cda9b3a63529ab556d643fea63c3bb61"},{url:"/shadyalzayat/profilePhoto.jpg",revision:"94498e29221a2255763b152b2bf62264"}],{ignoreURLParametersMatching:[]}),a.cleanupOutdatedCaches(),a.registerRoute("/shadyalzayat",new a.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:a,response:e,event:s,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),a.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new a.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new a.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),a.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new a.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new a.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),a.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new a.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new a.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),a.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new a.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new a.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\/_next\/image\?url=.+$/i,new a.StaleWhileRevalidate({cacheName:"next-image",plugins:[new a.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:mp3|wav|ogg)$/i,new a.CacheFirst({cacheName:"static-audio-assets",plugins:[new a.RangeRequestsPlugin,new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:mp4)$/i,new a.CacheFirst({cacheName:"static-video-assets",plugins:[new a.RangeRequestsPlugin,new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:js)$/i,new a.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:css|less)$/i,new a.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new a.StaleWhileRevalidate({cacheName:"next-data",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:json|xml|csv)$/i,new a.NetworkFirst({cacheName:"static-data-assets",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute((({url:a})=>{if(!(self.origin===a.origin))return!1;const e=a.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new a.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new a.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),a.registerRoute((({url:a})=>{if(!(self.origin===a.origin))return!1;return!a.pathname.startsWith("/api/")}),new a.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute((({url:a})=>!(self.origin===a.origin)),new a.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
