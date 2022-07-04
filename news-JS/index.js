(()=>{"use strict";var e={669:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n\n.no-news {\n    text-align: center;\n    font-size: 50px;\n}\n",""]);const s=r},501:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,".sources {\n    display: flex;\n    flex-wrap: wrap;\n    height: 130px;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n    justify-content: center;\n}\n\n.sources::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n    background-color: #fff3ee;\n    border-radius: 9em;\n}\n\n.sources::-webkit-scrollbar-thumb {\n    background-color: #ffbda2;\n    border-radius: 9em;\n}\n\n.category-news {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    text-transform: capitalize;\n    flex-wrap: wrap;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #ffbda2;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #ffbda2;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border: none;\n    background-color: #fff3ee;\n    box-shadow: 10px 5px 5px #ffbda2;\n    transform: translateY(-0.25em);\n    transition: 0.3s;\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}",""]);const s=r},767:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"body {\n    color: #fff;\n    background: #4d4e4e;\n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-height: 100vh;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n    text-align: center;\n}\n\nheader h1::after {\n    content: '';\n    display: block;\n    width: 10%;\n    border-bottom: 3px solid #ffbda2;\n    margin: 0 auto;\n}\n\nfooter {\n    padding-top: 10px;\n    max-width: 1920px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #ffffff;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #ffffff;\n}\nfooter .copyright a:hover {\n    color: #ffbda2;\n}\nfooter .copyright:before {\n    content: '©';\n}\n\n.footer__icon-rsschool {\n    width: 150px;\n}\n\n.footer__icon-git,\n.footer__icon-rsschool {\n    filter: invert(100%) sepia(0%) saturate(1393%) hue-rotate(157deg) brightness(115%) contrast(101%);\n    transition: 0.5s;\n}\n\n.footer__icon-git:hover,\n.footer__icon-rsschool:hover {\n    filter: invert(74%) sepia(53%) saturate(413%) hue-rotate(319deg) brightness(104%) contrast(102%);\n}\n\n.github {\n    align-items: center;\n    display: flex;\n    gap: 20px;\n    text-decoration: none;\n    color: #ffffff;\n}\n\n@media (max-width: 445px) {\n    footer {\n        flex-direction: column;\n        gap: 10px;\n    }\n}\n",""]);const s=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},242:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var o=t(379),r=t.n(o),s=t(669);r()(s.Z,{insert:"head",singleton:!1});const i=s.Z.locals||{}},595:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var o=t(379),r=t.n(o),s=t(501);r()(s.Z,{insert:"head",singleton:!1});const i=s.Z.locals||{}},427:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var o=t(379),r=t.n(o),s=t(767);r()(s.Z,{insert:"head",singleton:!1});const i=s.Z.locals||{}},379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function i(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],c=n.base?a[0]+n.base:a[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=i(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:d,updater:_(f,n),references:1}),o.push(d)}return o}function c(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var s=t.nc;s&&(o.nonce=s)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var s=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(s,i[n]):e.appendChild(s)}}function f(e,n,t){var o=t.css,r=t.media,s=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function _(e,n){var t,o,r;if(n.singleton){var s=m++;t=p||(p=c(n)),o=u.bind(null,t,s,!1),r=u.bind(null,t,s,!0)}else t=c(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=i(t[o]);s[r].references--}for(var c=a(e,n),l=0;l<t.length;l++){var d=i(t[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}t=c}}}},717:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(842)),s=t(527);n.default=class{constructor(){this.controller=new r.default,this.view=new s.AppView}start(){document.querySelector(".sources").addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}}},853:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(24));class s extends r.default{constructor(){super("https://nodenews.herokuapp.com/",{apiKey:"6476e5a3c8e94a3cbd13c018b8fc48e7"})}}n.default=s},842:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(853));class s extends r.default{getSources(e){super.getResp({endpoint:"sources"},e)}getNews(e,n){let t=e.target;const o=e.currentTarget;for(;t!==o;){if(t.classList.contains("source__item")){const e=t.getAttribute("data-source-id");return void(e&&o.getAttribute("data-source")!==e&&(o.setAttribute("data-source",e),super.getResp({endpoint:"everything",options:{sources:e}},n)))}t=t.parentNode}}}n.default=s},24:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0});const o=t(267);n.default=class{constructor(e,n){this.baseLink=e,this.options=n}getResp({endpoint:e,options:n},t=(()=>{console.error("No callback for GET response")})){this.load("GET",e,t,n)}errorHandler(e){if(!e.ok)throw e.status!==o.ErrorStatusCode.Unauthorized&&e.status!==o.ErrorStatusCode.NotFound||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,n){const t=Object.assign(Object.assign({},this.options),e);let o=`${this.baseLink}${n}?`;return Object.keys(t).forEach((e=>{o+=`${e}=${t[e]}&`})),o.slice(0,-1)}load(e,n,t,o={}){fetch(this.makeUrl(o,n),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>t(e))).catch((e=>console.error(e)))}}},267:(e,n)=>{var t;Object.defineProperty(n,"__esModule",{value:!0}),n.ErrorStatusCode=void 0,(t=n.ErrorStatusCode||(n.ErrorStatusCode={}))[t.Unauthorized=401]="Unauthorized",t[t.NotFound=404]="NotFound"},527:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.AppView=void 0;const r=o(t(798)),s=o(t(53));class i{constructor(){this.news=new r.default,this.sources=new s.default}drawNews(e){const n=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(n)}drawSources(e){const n=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(n)}}n.AppView=i,n.default=i},798:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(242),n.default=class{draw(e){const n=e.length>=10?e.filter(((e,n)=>n<10)):e;if(0===n.length){document.querySelector(".news").innerHTML="";const e=document.createElement("p");e.classList.add("no-news"),e.textContent="No news",document.querySelector(".news").append(e)}else{const e=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp");n.forEach(((n,o)=>{const r=t.content.cloneNode(!0);o%2&&r.querySelector(".news__item").classList.add("alt"),r.querySelector(".news__meta-photo").style.backgroundImage=`url(${n.urlToImage||"./assets/news.jpeg"})`,r.querySelector(".news__meta-author").textContent=n.author||n.source.name,r.querySelector(".news__meta-date").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),r.querySelector(".news__description-title").textContent=n.title,r.querySelector(".news__description-source").textContent=n.source.name,r.querySelector(".news__description-content").textContent=n.description,r.querySelector(".news__read-more a").setAttribute("href",n.url),e.append(r)})),document.querySelector(".news").innerHTML="",document.querySelector(".news").appendChild(e)}}}},53:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(595),n.default=class{constructor(){this.objSources={}}draw(e){const n=new Set;e.forEach((e=>{n.add(e.category)})),[...n].forEach((n=>this.drawCategories(n,e)))}drawCategories(e,n){const t=document.querySelector(".category-news"),o=document.createDocumentFragment(),r=document.querySelector("#categoryNewsTemp"),s=null==r?void 0:r.content.cloneNode(!0);s.querySelector(".category-news__label").textContent=e;const i=this.objSources,a=this.drawSources.bind(this);s.querySelector(".category-news__checkbox").addEventListener("input",(function(){document.querySelector(".sources").textContent="";const t=n.filter((n=>n.category===e));this.checked?i[e]=t:delete i[e];const o=Object.values(i).flat(1);a(o)})),o.append(s),null==t||t.append(o)}drawSources(e){const n=document.querySelector(".sources");e.forEach((e=>{const t=document.createDocumentFragment(),o=document.querySelector("#sourceItemTemp"),r=null==o?void 0:o.content.cloneNode(!0);r.querySelector(".source__item-name").textContent=e.name,r.querySelector(".source__item").setAttribute("data-source-id",e.id),t.append(r),null==n||n.append(t)}))}}},607:function(e,n,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=o(t(717));t(427),(new r.default).start()}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={id:o,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(607)})();