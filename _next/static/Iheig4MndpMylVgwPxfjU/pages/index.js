(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{111:function(e,t,a){"use strict";a.r(t),t.default=function(e,t){return t=t||{},new Promise(function(a,n){var r=new XMLHttpRequest;for(var c in r.open(t.method||"get",e,!0),t.headers)r.setRequestHeader(c,t.headers[c]);function s(){var e,t=[],a=[],n={};return r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(r,c,s){t.push(c=c.toLowerCase()),a.push([c,s]),n[c]=(e=n[c])?e+","+s:s}),{ok:2==(r.status/100|0),status:r.status,statusText:r.statusText,url:r.responseURL,clone:s,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},headers:{keys:function(){return t},entries:function(){return a},get:function(e){return n[e.toLowerCase()]},has:function(e){return e.toLowerCase()in n}}}}r.withCredentials="include"==t.credentials,r.onload=function(){a(s())},r.onerror=n,r.send(t.body||null)})}},209:function(e,t,a){__NEXT_REGISTER_PAGE("/",function(){return e.exports=a(237),{page:e.exports.default}})},237:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a.n(n),c=a(0),s=a.n(c),o=a(50),i=function(e){var t=e.precio,a=t.price,n=t.percent_change_24h,r=t.percent_change_1h,c=t.percent_change_7d;return s.a.createElement("div",{className:"card text-white bg-success mb-3"},s.a.createElement("div",{className:"card-header"},"Precio del Bitcoin"),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Precio Actual: $ ",a),s.a.createElement("div",{className:"d-md-flex justify-content-between"},s.a.createElement("p",{className:"card-text"},s.a.createElement("span",{className:"font-weight-bold"},"Última hora: "),r," %"),s.a.createElement("p",{className:"card-text"},s.a.createElement("span",{className:"font-weight-bold"},"Últimas 24 horas: "),n," %"),s.a.createElement("p",{className:"card-text"},s.a.createElement("span",{className:"font-weight-bold"},"Últimos 7 Días: "),c))))},l=function(e){var t=e.noticia,a=t.urlToImage,n=t.url,r=t.title,c=t.description,o=t.source,i="";return i=""!==a?s.a.createElement("img",{src:a,alt:r,className:"card-img-top"}):s.a.createElement("p",{className:"text-center my-5"},"Imagen no Disponible"),s.a.createElement("div",{className:"col-md-6 col-12 mb-4"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-image"},i)),s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"card-title"},r),s.a.createElement("p",{className:"card-text"},c),s.a.createElement("p",{className:"card-text"},o.name),s.a.createElement("a",{href:n,className:"btn btn-primary d-block",target:"_blank"},"Leer Notica")))},m=function(e){return s.a.createElement("div",{className:"row"},e.noticias.map(function(e){return s.a.createElement(l,{key:e.url,noticia:e})}))},u=a(52),d=a.n(u),p=function(e){var t=e.info,a=t.url,n=t.name,r=t.description.text,c=n.text;return c.length>150&&(c=c.substr(0,100)+"..."),r&&(r=r.substr(0,250)+"..."),s.a.createElement("a",{href:a,target:"_blank",className:"list-group-item active text-light mb-1"},s.a.createElement("h3",{className:"mb-3"},c),s.a.createElement("p",{className:"mb-1"},r))},f=function(e){var t=Object.keys(e.eventos);return s.a.createElement("div",{className:"list-group"},t.map(function(t){return s.a.createElement(p,{key:t,info:e.eventos[t]})}))};function v(e,t,a,n,r,c,s){try{var o=e[c](s),i=o.value}catch(e){return void a(e)}o.done?t(i):Promise.resolve(i).then(n,r)}function h(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var c=e.apply(t,a);function s(e){v(c,n,r,s,o,"next",e)}function o(e){v(c,n,r,s,o,"throw",e)}s(void 0)})}}var E=function(e){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h2",null,"Precio del bitcoin"),s.a.createElement(i,{precio:e.precioBitcoin})),s.a.createElement("div",{className:"col-md-7"},s.a.createElement("h2",{"my-4":!0},"Noticias sobre Bitcoin"),s.a.createElement(m,{noticias:e.noticias})),s.a.createElement("div",{className:"col-md-5"},s.a.createElement("h2",{"my-4":!0},"Proximos Eventos del Bitcoin"),s.a.createElement(f,{eventos:e.eventos}))))};E.getInitialProps=h(r.a.mark(function e(){var t,a,n,c,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://api.coinmarketcap.com/v2/ticker/");case 2:return t=e.sent,e.next=5,d()("https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-09&sortBy=publishedAt&apiKey=a7e239836a454b27b7787f8b111288c4&language=es");case 5:return a=e.sent,e.next=8,d()("https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&sort_by=date&location.address=Mexico&token=6WGLAQENCTNJTEBTWHBI");case 8:return n=e.sent,e.next=11,t.json();case 11:return c=e.sent,e.next=14,a.json();case 14:return s=e.sent,e.next=17,n.json();case 17:return o=e.sent,e.abrupt("return",{precioBitcoin:c.data[1].quotes.USD,noticias:s.articles,eventos:o.events});case 19:case"end":return e.stop()}},e,this)}));t.default=E},52:function(e,t,a){e.exports=window.fetch||(window.fetch=a(111).default||a(111))},78:function(e,t,a){e.exports=a(87)}},[[209,1,0]]]);