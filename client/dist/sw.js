if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let t={};const o=e=>i(e,d),l={module:{uri:d},exports:t,require:o};s[d]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-cd63daf5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BVVoHdy1.js",revision:null},{url:"assets/index-ClcOuUFl.css",revision:null},{url:"index.html",revision:"f431dab083a79699771b271359252493"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-64x64.png",revision:"ac5f0f0717723aabeb341b6d81dee52d"},{url:"pwa-192x192.png",revision:"fa65a77414cfcddb06b49cfaf4b7852a"},{url:"pwa-512x512.png",revision:"085de4523513a2cdd40a30fa85cc99f4"},{url:"manifest.webmanifest",revision:"dffe609d3e6121b928073cfd047458b2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));