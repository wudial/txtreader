if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),f={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-fb6485ce.js",revision:null},{url:"assets/index-fe8b2942.css",revision:null},{url:"index.html",revision:"bfc5eba1e6e29b361aafdb68a1183441"},{url:"registerSW.js",revision:"9e84b5e9661861236bc3d3590a62a743"},{url:"apple-touch-icon.png",revision:"5a87385de558df41c6b2c2fb86225a9d"},{url:"favicon.ico",revision:"4a4a2688053882f1d44cede9f18f397b"},{url:"manifest.webmanifest",revision:"13c8342abce72ad5cec12726e9fb9f79"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
