(this.webpackJsonpwikimagic=this.webpackJsonpwikimagic||[]).push([[0],{15:function(e,t,a){e.exports=a(32)},20:function(e,t,a){},21:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(14),l=a.n(c),i=(a(20),a(21),a(7)),r=a(10),u=a.n(r);var s=function(){var e,t=Object(n.useState)("adult"),a=Object(i.a)(t,2),c=a[0],l=a[1],r=Object(n.useState)(0),s=Object(i.a)(r,2),m=s[0],g=s[1],v=Object(n.useState)("hat"),d=Object(i.a)(v,2),E=d[0],h=d[1],b=Object(n.useState)(0),w=Object(i.a)(b,2),f=w[0],k=w[1],S=Object(n.useState)(0),j=Object(i.a)(S,2),O=j[0],I=j[1],y=Object(n.useState)(""),M=Object(i.a)(y,2),B=M[0],C=M[1],A={age:c,category:E,price:m,cnt:f,totalPrice:O};return"adult"===c&&(e=o.a.createElement(n.Fragment,null,o.a.createElement("option",{value:"hat"},"\ubaa8\uc790"),o.a.createElement("option",{value:"socks"},"\uc591\ub9d0"),o.a.createElement("option",{value:"sunglasses"},"\uc120\uae00\ub77c\uc2a4"),o.a.createElement("option",{value:"hairband"},"\ud5e4\uc5b4\ubc34\ub4dc"),o.a.createElement("option",{value:"hairpin"},"\ud5e4\uc5b4\ud540"),o.a.createElement("option",{value:"scarf"},"\uc2a4\uce74\ud504 / \uc190\uc218\uac74"),o.a.createElement("option",{value:"clothes"},"\uc7a0\uc637"),o.a.createElement("option",{value:"umbrella"},"\uc6b0\uc591\uc0b0"),o.a.createElement("option",{value:"tie"},"\ub125\ud0c0\uc774"),o.a.createElement("option",{value:"mask"},"\ub9c8\uc2a4\ud06c / \ub9c8\uc2a4\ud06c\uc904"))),"kids"===c&&(e=o.a.createElement(n.Fragment,null,o.a.createElement("option",{value:"hat"},"\ubaa8\uc790"),o.a.createElement("option",{value:"socks"},"\uc591\ub9d0"),o.a.createElement("option",{value:"sunglasses"},"\uc120\uae00\ub77c\uc2a4"),o.a.createElement("option",{value:"hairband"},"\ud5e4\uc5b4\ubc34\ub4dc"),o.a.createElement("option",{value:"hairpin"},"\ud5e4\uc5b4\ud540"),o.a.createElement("option",{value:"ring"},"\ubc18\uc9c0"),o.a.createElement("option",{value:"bag"},"\uac00\ubc29"),o.a.createElement("option",{value:"etc"},"\uae30\ud0c0"))),o.a.createElement(n.Fragment,null,o.a.createElement("div",null,o.a.createElement("select",{id:"age",className:"select_age",onChange:function(e){var t=e.target,a=(t.name,t.value);l(a)}},o.a.createElement("option",{value:"adult"},"\uc131\uc778"),o.a.createElement("option",{value:"kids"},"\uc544\ub3d9")),o.a.createElement("select",{id:"category",className:"category",onChange:function(e){var t=e.target,a=(t.name,t.value);h(a)}},e),o.a.createElement(u.a,{id:"price",onChange:function(e){g(parseInt(e.target.value)),I(parseInt(e.target.value)*f),console.log(m),console.log(f),console.log(O)}}),o.a.createElement(u.a,{id:"cnt",onChange:function(e){k(parseInt(e.target.value)),I(m*parseInt(e.target.value)),console.log(m),console.log(f),console.log(O)}}),o.a.createElement("p",{id:"totalPrice"},O),o.a.createElement("p",{id:"warnning"},B),o.a.createElement("button",{type:"submit",onClick:function(){if(void 0!==m&&void 0!==f&&0!==m&&0!==f){var e=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+t}(),t=function(){var e=new Date;return String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0")+":"+String(e.getSeconds())}();p.collection("wiki").doc("sale").collection(e).doc(t).set({data:A}),p.collection("wiki").doc("sale").collection(e).doc(t).get().then((function(e){window.location.reload(!1)}))}else C("\ub2e8\uac00\uc640 \uc218\ub7c9\uc744 \uc785\ub825\ud558\uc138\uc694")}},"\uc785\ub825")))},m=a(11),g=a.n(m);g.a.initializeApp({apiKey:"AIzaSyAuMUMqkpuvevgi9pu_NM6ZqUBniwvhuQs",authDomain:"wikimagic-4ce55.firebaseapp.com",databaseURL:"https://wikimagic-4ce55.firebaseio.com",projectId:"wikimagic-4ce55",storageBucket:"wikimagic-4ce55.appspot.com",messagingSenderId:"999608533978",appId:"1:999608533978:web:1328133731ac663f2836e3",measurementId:"G-K3WGGRGWHB"});var p=g.a.firestore();var v=function(){return o.a.createElement("div",{className:"App"},"\uc704\ud0a4\ub9e4\uc9c1",o.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.9700ac96.chunk.js.map