(this.webpackJsonpwikimagic=this.webpackJsonpwikimagic||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),o=(a(83),a(84),a(57)),i=a.n(o),m=a(35),d=a(6),u=a(16),s=a(34),p=a.n(s);function E(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+t}function h(e){var t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+t}function g(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var v=function(){var e,t=Object(n.useState)("\uc131\uc778"),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(0),i=Object(u.a)(o,2),m=i[0],d=i[1],s=Object(n.useState)("\ubaa8\uc790"),h=Object(u.a)(s,2),v=h[0],b=h[1],f=Object(n.useState)(0),C=Object(u.a)(f,2),w=C[0],S=C[1],k=Object(n.useState)(0),y=Object(u.a)(k,2),N=y[0],x=y[1],j=Object(n.useState)(""),F=Object(u.a)(j,2),I=F[0],M=F[1],P=Object(n.useState)(""),A=Object(u.a)(P,2),B=(A[0],A[1],{time:"",age:c,category:v,price:m,cnt:w,totalPrice:N});return"\uc131\uc778"===c&&(e=l.a.createElement(n.Fragment,null,l.a.createElement("option",{value:"\ubaa8\uc790"},"\ubaa8\uc790"),l.a.createElement("option",{value:"\uc591\ub9d0"},"\uc591\ub9d0"),l.a.createElement("option",{value:"\uc120\uae00\ub77c\uc2a4"},"\uc120\uae00\ub77c\uc2a4"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ubc34\ub4dc"},"\ud5e4\uc5b4\ubc34\ub4dc"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ud540"},"\ud5e4\uc5b4\ud540"),l.a.createElement("option",{value:"\uc2a4\uce74\ud504 / \uc190\uc218\uac74"},"\uc2a4\uce74\ud504 / \uc190\uc218\uac74"),l.a.createElement("option",{value:"\uc7a0\uc637"},"\uc7a0\uc637"),l.a.createElement("option",{value:"\uc6b0\uc591\uc0b0"},"\uc6b0\uc591\uc0b0"),l.a.createElement("option",{value:"\ub125\ud0c0\uc774"},"\ub125\ud0c0\uc774"),l.a.createElement("option",{value:"\ub9c8\uc2a4\ud06c / \ub9c8\uc2a4\ud06c\uc904"},"\ub9c8\uc2a4\ud06c / \ub9c8\uc2a4\ud06c\uc904"),l.a.createElement("option",{value:"\ub9e4\ucd9c \ub204\ub77d"},"\ub9e4\ucd9c \ub204\ub77d"))),"\uc544\ub3d9"===c&&(e=l.a.createElement(n.Fragment,null,l.a.createElement("option",{value:"\ubaa8\uc790"},"\ubaa8\uc790"),l.a.createElement("option",{value:"\uc591\ub9d0"},"\uc591\ub9d0"),l.a.createElement("option",{value:"\uc120\uae00\ub77c\uc2a4"},"\uc120\uae00\ub77c\uc2a4"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ubc34\ub4dc"},"\ud5e4\uc5b4\ubc34\ub4dc"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ud540"},"\ud5e4\uc5b4\ud540"),l.a.createElement("option",{value:"\ubc18\uc9c0"},"\ubc18\uc9c0"),l.a.createElement("option",{value:"\uac00\ubc29"},"\uac00\ubc29"),l.a.createElement("option",{value:"\uae30\ud0c0"},"\uae30\ud0c0"))),l.a.createElement(n.Fragment,null,l.a.createElement("select",{id:"age",className:"select_age",onChange:function(e){var t=e.target,a=(t.name,t.value);r(a)}},l.a.createElement("option",{value:"\uc131\uc778"},"\uc131\uc778"),l.a.createElement("option",{value:"\uc544\ub3d9"},"\uc544\ub3d9")),l.a.createElement("select",{id:"category",className:"category",onChange:function(e){var t=e.target,a=(t.name,t.value);b(a)}},e),l.a.createElement(p.a,{id:"price",placeholder:"\ub2e8\uac00\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:function(e){d(parseInt(e.target.value)),x(parseInt(e.target.value)*w),console.log(m),console.log(w),console.log(N)}}),l.a.createElement(p.a,{id:"cnt",placeholder:"\uc218\ub7c9\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:function(e){S(parseInt(e.target.value)),x(m*parseInt(e.target.value)),console.log(m),console.log(w),console.log(N)}}),l.a.createElement("div",{id:"totalPrice"},"\ucd1d \uae08\uc561: ",g(N),l.a.createElement("button",{id:"submit",type:"submit",onClick:function(){if(void 0===m||void 0===w||0===m||0===w||isNaN(m)||isNaN(w))M("\ub2e8\uac00\uc640 \uc218\ub7c9\uc744 \uc785\ub825\ud558\uc138\uc694");else{var e=E(),t=function(){var e=new Date;return String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0")+":"+String(e.getSeconds()).padStart(2,"0")}();B.time=t,O.collection("wiki").doc("sale").collection(e).doc(t).set({data:B}),O.collection("wiki").doc("sale").collection(e).doc(t).get().then((function(e){window.location.reload(!1)}))}}},"\uc785\ub825")),l.a.createElement("div",{id:"warnning"},I))},b=0;var f=function(e){var t=0;return O.collection("wiki").doc("sale").collection(e.date).get().then((function(a){a.forEach((function(a){t++,e.date===E()?function(e,t,a){var n=document.querySelector("#item"),l=document.querySelector("#today-sold"),c=document.createElement("tr"),r=document.createElement("td"),o=document.createElement("td"),i=document.createElement("td"),m=document.createElement("td"),d=document.createElement("td"),u=document.createElement("td"),s=document.createElement("td"),p=document.createElement("button");c.setAttribute("data-id",e.id),r.className="item-number",o.className="item-time",i.className="item-name",m.className="item-cnt",d.className="item-price",u.className="item-totalPrice",s.className="item-del",p.id="item-del",p.addEventListener("click",(function(t){O.collection("wiki").doc("sale").collection(a).doc(e.id).delete(),setTimeout((function(){return window.location.reload()}),1e3)}),!1),1===t&&(b=0),b+=e.data().data.totalPrice,O.collection("wiki").doc("static").collection(a).doc("total sales").set({sold:b}),r.textContent=t,o.textContent=e.id.slice(0,5),i.textContent=e.data().data.age+" - "+e.data().data.category,m.textContent=e.data().data.cnt,d.textContent=g(e.data().data.price),u.textContent=g(e.data().data.totalPrice),p.textContent="X",p.value=e.id,s.appendChild(p),c.appendChild(r),c.appendChild(o),c.appendChild(i),c.appendChild(m),c.appendChild(d),c.appendChild(u),c.appendChild(s),null===n||void 0===n||n.appendChild(c),l&&(l.textContent="\ucd1d \ub9e4\ucd9c: "+g(b))}(a,t,e.date):function(e,t,a){var n=document.querySelector("#item"),l=document.querySelector("#today-sold"),c=document.createElement("tr"),r=document.createElement("td"),o=document.createElement("td"),i=document.createElement("td"),m=document.createElement("td"),d=document.createElement("td"),u=document.createElement("td"),s=document.createElement("td");c.setAttribute("data-id",e.id),r.className="item-number",o.className="item-time",i.className="item-name",m.className="item-cnt",d.className="item-price",u.className="item-totalPrice",s.className="item-del",1===t&&(b=0),b+=e.data().data.totalPrice,O.collection("wiki").doc("static").collection(a).doc("total sales").set({sold:b}),r.textContent=t,o.textContent=e.id.slice(0,5),i.textContent=e.data().data.age+" - "+e.data().data.category,m.textContent=e.data().data.cnt,d.textContent=g(e.data().data.price),u.textContent=g(e.data().data.totalPrice),c.appendChild(r),c.appendChild(o),c.appendChild(i),c.appendChild(m),c.appendChild(d),c.appendChild(u),null===n||void 0===n||n.appendChild(c),l&&(l.textContent="\ucd1d \ub9e4\ucd9c: "+g(b))}(a,t,e.date)}))})),l.a.createElement(n.Fragment,null)};var C=function(){var e=E();return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"\uc704\ud0a4\ub9e4\uc9c1 \ud310\ub9e4\uc77c\ubcf4"),l.a.createElement("h3",null,E()),l.a.createElement("div",{className:"input-data"},l.a.createElement(v,null)),l.a.createElement("div",{id:"content"},l.a.createElement("p",{id:"today-sold"},"\uc624\ub298 \ub9e4\ucd9c: ",l.a.createElement(f,{date:e})),l.a.createElement("table",{id:"item-list"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\ubc88\ud638"),l.a.createElement("th",null,"\ud310\ub9e4\uc2dc\uac04"),l.a.createElement("th",null,"\uc0c1\ud488\uba85"),l.a.createElement("th",null,"\uc218\ub7c9"),l.a.createElement("th",null,"\ub2e8\uac00"),l.a.createElement("th",null,"\ucd1d\uae08\uc561"),l.a.createElement("th",null,"\uc0ad\uc81c"))),l.a.createElement("tbody",{id:"item"}))))};var w=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("p",null,l.a.createElement(m.b,{to:"/write-purchase-record"},"\uad6c\uc785\ub0b4\uc5ed \uae30\ub85d")),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/show-purchase-record"},"\uad6c\uc785\ub0b4\uc5ed \uc870\ud68c")))},S=a(77);var k=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(S.a,null),l.a.createElement("div",{className:"input-data"},l.a.createElement("select",null,l.a.createElement("option",{value:"a"},"\uce74\ud14c\uace0\ub9ac")),l.a.createElement("select",null,l.a.createElement("option",{value:"a"},"\uc5c5\uccb4")),l.a.createElement(p.a,{id:"price",placeholder:"\ub2e8\uac00\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:function(e){}})),l.a.createElement("table",{id:"item-list"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\ud488\ubaa9"),l.a.createElement("th",null,"\uc218\ub7c9"),l.a.createElement("th",null,"\ub2e8\uac00"),l.a.createElement("th",null,"\ucd1d\uae08\uc561"),l.a.createElement("th",null,"\uc0ad\uc81c"))),l.a.createElement("tbody",{id:"item"})),l.a.createElement("p",null,l.a.createElement("button",null," \ud655\uc778")))};var y=function(){return l.a.createElement(n.Fragment,null,"dkdkdkdk")},N=a(76);var x=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{display:"inline-block",width:"400px",textAlign:"left"}},"\uc6d4\uac04 \ub9e4\ucd9c:"))};var j=function(){var e=new Date,t=Object(n.useState)(e),a=Object(u.a)(t,2),c=a[0],r=a[1];return l.a.createElement(n.Fragment,null,l.a.createElement("div",null,l.a.createElement(N.a,{onChange:function(e){return function(e){var t=document.getElementById("item");t&&(t.innerHTML=""),r(e),console.log(e)}(e)},value:c,style:{display:"inline-block",margin:"10px"}}),l.a.createElement(x,null)),l.a.createElement("p",{id:"today-sold"},"\ub9e4\ucd9c: ",l.a.createElement(f,{date:h(c)})),l.a.createElement("table",{id:"item-list"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\ubc88\ud638"),l.a.createElement("th",null,"\ud310\ub9e4\uc2dc\uac04"),l.a.createElement("th",null,"\uc0c1\ud488\uba85"),l.a.createElement("th",null,"\uc218\ub7c9"),l.a.createElement("th",null,"\ub2e8\uac00"),l.a.createElement("th",null,"\ucd1d\uae08\uc561"),l.a.createElement("th",null,"\uc0ad\uc81c"))),l.a.createElement("tbody",{id:"item"})))};a(137);i.a.initializeApp({apiKey:"AIzaSyAuMUMqkpuvevgi9pu_NM6ZqUBniwvhuQs",authDomain:"wikimagic-4ce55.firebaseapp.com",databaseURL:"https://wikimagic-4ce55.firebaseio.com",projectId:"wikimagic-4ce55",storageBucket:"wikimagic-4ce55.appspot.com",messagingSenderId:"999608533978",appId:"1:999608533978:web:1328133731ac663f2836e3",measurementId:"G-K3WGGRGWHB"});var O=i.a.firestore(),F=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement(m.a,null,l.a.createElement(d.a,{path:"/purchase",component:w}),l.a.createElement(d.a,{path:"/static",component:j}),l.a.createElement(d.a,{path:"/write-purchase-record",component:k}),l.a.createElement(d.a,{path:"/show-purchase-record",component:y}),l.a.createElement(d.a,{excat:!0,path:"/home",component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a(138)},83:function(e,t,a){},84:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.a1760f69.chunk.js.map