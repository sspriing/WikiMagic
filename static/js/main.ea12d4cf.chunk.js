(this.webpackJsonpwikimagic=this.webpackJsonpwikimagic||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),o=(a(89),a(90),a(61)),i=a.n(o),d=a(38),m=a(7),u=a(4),s=a.n(u),p=a(12),E=a(10),h=a(21),g=a.n(h);function v(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+t}function f(e){return e.slice(0,7)}function w(e){var t;return t=e.slice(8,10),parseInt(t)}function b(e){var t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+t}function y(){var e=new Date;return String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0")+":"+String(e.getSeconds()).padStart(2,"0")}function x(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var C=function(){var e,t=Object(n.useState)("\uc131\uc778"),a=Object(E.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(0),i=Object(E.a)(o,2),d=i[0],m=i[1],u=Object(n.useState)("\uc591\ub9d0"),h=Object(E.a)(u,2),f=h[0],w=h[1],b=Object(n.useState)(1),C=Object(E.a)(b,2),k=C[0],S=C[1],N=Object(n.useState)(0),j=Object(E.a)(N,2),O=j[0],I=j[1],B=Object(n.useState)(""),F=Object(E.a)(B,2),M=F[0],L=F[1],q=Object(n.useState)(0),P=Object(E.a)(q,2),T=(P[0],P[1]),z={time:"",age:c,category:f,price:d,cnt:k,totalPrice:O};function A(){return(A=Object(p.a)(s.a.mark((function e(){var t,a,n,l,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==d&&void 0!==k&&0!==d&&0!==k&&!isNaN(d)&&!isNaN(k)){e.next=3;break}return L("\ub2e8\uac00\uc640 \uc218\ub7c9\uc744 \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 3:a=v(),n=y(),z.time=n,l=document.querySelector("#today-sold"),void 0!==(c=null===l||void 0===l||null===(t=l.textContent)||void 0===t?void 0:t.toString().replace(/[^0-9]/g,""))&&null!==c?(T(parseInt(c)+O),console.log(parseInt(c)+O),W.collection("wiki").doc("static").collection(a).doc("total sales").set({sold:parseInt(c)+O})):W.collection("wiki").doc("static").collection(a).doc("total sales").set({sold:0}),W.collection("wiki").doc("sale").collection(a).doc(n).set({data:z}).then((function(e){console.log("setting"),console.log(z),window.location.reload(!0)}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return"\uc131\uc778"===c&&(e=l.a.createElement(n.Fragment,null,l.a.createElement("option",{value:"\uc591\ub9d0"},"\uc591\ub9d0"),l.a.createElement("option",{value:"\ubaa8\uc790"},"\ubaa8\uc790"),l.a.createElement("option",{value:"\uc2a4\uce74\ud504 / \uc190\uc218\uac74"},"\uba38\ud50c\ub7ec"),l.a.createElement("option",{value:"\uc204"},"\uc204"),l.a.createElement("option",{value:"\uc7a5\uac11"},"\uc7a5\uac11"),l.a.createElement("option",{value:"\uadc0\ub9c8\uac1c"},"\uadc0\ub9c8\uac1c"),l.a.createElement("option",{value:"\ub9c8\uc2a4\ud06c / \ub9c8\uc2a4\ud06c\uc904"},"\ub9c8\uc2a4\ud06c / \ub9c8\uc2a4\ud06c\uc904"),l.a.createElement("option",{value:"\uc7a0\uc637"},"\uc7a0\uc637"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ud540"},"\ud5e4\uc5b4\ud540"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ubc34\ub4dc"},"\ud5e4\uc5b4\ubc34\ub4dc"),l.a.createElement("option",{value:"\uc120\uae00\ub77c\uc2a4"},"\uc120\uae00\ub77c\uc2a4"),l.a.createElement("option",{value:"\uc6b0\uc591\uc0b0"},"\uc6b0\uc591\uc0b0"),l.a.createElement("option",{value:"\ub125\ud0c0\uc774"},"\ub125\ud0c0\uc774"),l.a.createElement("option",{value:"\ub9e4\ucd9c \ub204\ub77d"},"\ub9e4\ucd9c \ub204\ub77d"))),"\uc544\ub3d9"===c&&(e=l.a.createElement(n.Fragment,null,l.a.createElement("option",{value:"\ud5e4\uc5b4\ubc34\ub4dc"},"\ud5e4\uc5b4\ubc34\ub4dc"),l.a.createElement("option",{value:"\ubc18\uc9c0"},"\ubc18\uc9c0"),l.a.createElement("option",{value:"\uac00\ubc29"},"\uac00\ubc29"),l.a.createElement("option",{value:"\ubaa8\uc790"},"\ubaa8\uc790"),l.a.createElement("option",{value:"\uc591\ub9d0"},"\uc591\ub9d0"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ud540"},"\ud5e4\uc5b4\ud540"),l.a.createElement("option",{value:"\uc120\uae00\ub77c\uc2a4"},"\uc120\uae00\ub77c\uc2a4"),l.a.createElement("option",{value:"\uae30\ud0c0"},"\uae30\ud0c0"))),l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{width:"300px",display:"inline-block"}},l.a.createElement("select",{id:"age",className:"select_age",onChange:function(e){var t=e.target,a=(t.name,t.value);r(a)}},l.a.createElement("option",{value:"\uc131\uc778"},"\uc131\uc778"),l.a.createElement("option",{value:"\uc544\ub3d9"},"\uc544\ub3d9")),l.a.createElement("select",{id:"category",className:"category",onChange:function(e){var t=e.target,a=(t.name,t.value);w(a)}},e),l.a.createElement(g.a,{style:{width:"250px"},id:"price",placeholder:"\ub2e8\uac00\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:function(e){m(parseInt(e.target.value)),I(parseInt(e.target.value)*k)}}),l.a.createElement(g.a,{style:{width:"250px"},id:"cnt",placeholder:"1 (\uae30\ubcf8\uac12)",onChange:function(e){console.log(typeof e.target.value),void 0===e.target.value||isNaN(e.target.value)||""===e.target.value?(S(1),I(d)):(S(parseInt(e.target.value)),I(d*parseInt(e.target.value)),console.log(d),console.log(k),console.log(O))}}),l.a.createElement("div",{id:"totalPrice"},"\ucd1d \uae08\uc561: ",x(O),l.a.createElement("button",{id:"submit",type:"submit",onClick:function(){return A.apply(this,arguments)}},"\uc785\ub825")),l.a.createElement("div",{id:"warnning"},M)))};var k=function(e){var t=0;return W.collection("wiki").doc("sale").collection(e.date).get().then((function(a){a.forEach((function(a){!function(e,t,a){var n=document.querySelector("#item"),l=document.querySelector("#today-sold"),c=W.collection("wiki").doc("static").collection(a).doc("total sales"),r=document.createElement("tr"),o=document.createElement("td"),i=document.createElement("td"),d=document.createElement("td"),m=document.createElement("td"),u=document.createElement("td"),E=document.createElement("td"),h=document.createElement("td"),g=document.createElement("button"),f=document.createElement("button");function w(){return(w=Object(p.a)(s.a.mark((function t(n){var l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){t.next=9;break}return W.collection("wiki").doc("sale").collection(a).doc(e.id).delete(),t.next=5,c.get().then((function(e){return e.data().sold}));case 5:l=t.sent,l-=e.data().data.totalPrice,c.set({sold:l}),setTimeout((function(){return window.location.reload()}),1e3);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=Object(p.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.confirm("\ud658\ubd88\ucc98\ub9ac \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(1===e.data().data.cnt?C(1):window.confirm("\uc804\uccb4\ud658\ubd88\uc785\ub2c8\uae4c?")?C(e.data().data.cnt):null!=(n=window.prompt("\uba87 \uac1c \ud658\ubd88\uc785\ub2c8\uae4c?"))?(n=n.replace(/[^0-9]/g,""),parseInt(n)>0&&parseInt(n)<=e.data().data.cnt?C(parseInt(n)):window.alert("0 \uc774\uc0c1 "+e.data().data.cnt+" \uc774\ud558 \uc22b\uc790\ub85c \uc785\ub825\ud558\uc138\uc694")):window.alert("\uc22b\uc790\ub97c \uc785\ub825\ud558\uc138\uc694"));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(e){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(s.a.mark((function t(n){var l,c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=v(),c=y(),r={time:c,age:e.data().data.age,category:"\ud658\ubd88",price:-1*e.data().data.price,cnt:n,totalPrice:-1*e.data().data.price*n,memo:a+" "+e.data().data.time+" "+e.data().data.category+" "+n+"\uac1c"},W.collection("wiki").doc("sale").collection(l).doc(c).set({data:r}),window.alert("\ucc98\ub9ac \ub418\uc5c8\uc2b5\ub2c8\ub2e4");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r.setAttribute("data-id",e.id),o.className="item-number",i.className="item-time",d.className="item-name",m.className="item-cnt",u.className="item-price",E.className="item-totalPrice",h.className="item-del",g.id="item-del",f.className="item-refund",g.addEventListener("click",(function(e){return w.apply(this,arguments)}),!1),f.addEventListener("click",(function(e){return b.apply(this,arguments)}),!1),o.textContent=t,i.textContent=e.id.slice(0,5),e.data().data.memo?d.textContent=e.data().data.category+"\r\n"+e.data().data.memo:d.textContent=e.data().data.category,m.textContent=e.data().data.cnt,u.textContent=x(e.data().data.price),E.textContent=x(e.data().data.totalPrice),g.textContent="X",g.value=e.id,f.textContent="\ud658\ubd88",f.value=e.id,a===v()?h.appendChild(g):h.appendChild(f),r.appendChild(o),r.appendChild(i),r.appendChild(d),r.appendChild(m),r.appendChild(u),r.appendChild(E),r.appendChild(h),0===t?null===n||void 0===n||n.appendChild(r):null===n||void 0===n||n.insertBefore(r,n.firstChild),c.get().then((function(e){e.exists&&l&&!isNaN(e.data().sold)?l.textContent="\ucd1d \ub9e4\ucd9c: "+x(e.data().sold):l&&(W.collection("wiki").doc("static").collection(a).doc("total sales").set({sold:E.textContent}),l.textContent="\ucd1d \ub9e4\ucd9c: "+E.textContent)}))}(a,++t,e.date)}))})),l.a.createElement(n.Fragment,null)},S=a(65);function N(e){return j.apply(this,arguments)}function j(){return(j=Object(p.a)(s.a.mark((function e(t){var a,n,l,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Map,n=new Map,0,e.next=5,W.collection("wiki").doc("sale").collection(t).get();case 5:e.sent.forEach((function(e){var t=e.data().data.category,l=e.data().data.cnt,c=e.data().data.totalPrice;c,a.has(t)?(l=a.get(t)+l,c=n.get(t)+c,a.set(t,l),n.set(t,c)):(a.set(t,l),n.set(t,c))})),l=new Map(Object(S.a)(n.entries()).sort((function(e,t){return t[1]-e[1]}))),c=document.querySelector("#category-list"),r=1,l.forEach((function(e,t){var n=document.createElement("tr"),l=document.createElement("td"),o=document.createElement("td"),i=document.createElement("td"),d=document.createElement("td");l.textContent=r.toString(),o.textContent=t,i.textContent=x(a.get(t)),d.textContent=x(e),n.appendChild(l),n.appendChild(o),n.appendChild(d),n.appendChild(i),null===c||void 0===c||c.appendChild(n),r++}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(p.a)(s.a.mark((function e(t){var a,n,l,c,r,o,i,d,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=f(t),n=a===f(v())?w(v()):31,l=[],c=0;c<n;c++)l.push(a.concat("-").concat(String(c).padStart(2,"0")));for(r=new Map,o=new Map,0,c=0;c<n;c++)l.push(a.concat("-").concat(String(c).padStart(2,"0")));c=0;case 9:if(!(c<n)){e.next=17;break}return e.next=12,W.collection("wiki").doc("sale").collection(l[c]).get();case 12:e.sent.forEach((function(e){var t=e.data().data.category,a=e.data().data.cnt,n=e.data().data.totalPrice;n,r.has(t)?(a=r.get(t)+a,n=o.get(t)+n,r.set(t,a),o.set(t,n)):(r.set(t,a),o.set(t,n))}));case 14:c++,e.next=9;break;case 17:i=new Map(Object(S.a)(o.entries()).sort((function(e,t){return t[1]-e[1]}))),d=document.querySelector("#month-category-list"),m=1,i.forEach((function(e,t){var a=document.createElement("tr"),n=document.createElement("td"),l=document.createElement("td"),c=document.createElement("td"),o=document.createElement("td");n.textContent=m.toString(),l.textContent=t,c.textContent=x(r.get(t)),o.textContent=x(e),a.appendChild(n),a.appendChild(l),a.appendChild(o),a.appendChild(c),null===d||void 0===d||d.appendChild(a),m++}));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=v();return N(e),l.a.createElement(n.Fragment,null,l.a.createElement("h2",{style:{marginTop:"2px",marginBottom:"5px",borderBottom:"5px double",paddingBottom:"5px"}},v()),l.a.createElement("div",{className:"input-data1"},l.a.createElement(C,null),l.a.createElement("p",{style:{fontSize:"20px",marginTop:"15px",marginBottom:"2px"}},"--\uc885\ubaa9\ubcc4 \ub9e4\ucd9c--"),l.a.createElement("div",{style:{marginLeft:"10px"}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\uc21c\uc704"),l.a.createElement("th",null,"\uce74\ud14c\uace0\ub9ac"),l.a.createElement("th",null,"\ud310\ub9e4\uae08\uc561"),l.a.createElement("th",null,"\uc218\ub7c9")))),l.a.createElement("div",{id:"category-table-wrap"},l.a.createElement("table",null,l.a.createElement("tbody",{id:"category-list"}))))),l.a.createElement("div",{id:"content"},l.a.createElement("p",{id:"today-sold"},"\ucd1d \ub9e4\ucd9c: ",l.a.createElement(k,{date:e})),l.a.createElement("table",{id:"item-list"},l.a.createElement("colgroup",null,l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"10%"}),l.a.createElement("col",{width:"10%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"10%"}),l.a.createElement("col",{width:"3%"})),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\ubc88\ud638"),l.a.createElement("th",null,"\ud310\ub9e4\uc2dc\uac04"),l.a.createElement("th",null,"\uc0c1\ud488\uba85"),l.a.createElement("th",null,"\uc218\ub7c9"),l.a.createElement("th",null,"\ub2e8\uac00"),l.a.createElement("th",null,"\ucd1d\uae08\uc561"),l.a.createElement("th",null,"\uc0ad\uc81c")))),l.a.createElement("div",{id:"table-wrap"},l.a.createElement("table",{id:"item-list"},l.a.createElement("colgroup",null,l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"10%"}),l.a.createElement("col",{width:"10%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"10%"}),l.a.createElement("col",{width:"3%"})),l.a.createElement("tbody",{id:"item"})))))};var B=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("p",null,l.a.createElement(d.b,{to:"/write-purchase-record"},"\uad6c\uc785\ub0b4\uc5ed \uae30\ub85d")),l.a.createElement("p",null,l.a.createElement(d.b,{to:"/show-purchase-record"},"\uad6c\uc785\ub0b4\uc5ed \uc870\ud68c")))},F=a(83);var M=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(F.a,null),l.a.createElement("div",{className:"input-data"},l.a.createElement("select",null,l.a.createElement("option",{value:"a"},"\uce74\ud14c\uace0\ub9ac")),l.a.createElement("select",null,l.a.createElement("option",{value:"a"},"\uc5c5\uccb4")),l.a.createElement(g.a,{id:"price",placeholder:"\ub2e8\uac00\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:function(e){}})),l.a.createElement("table",{id:"item-list"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\ud488\ubaa9"),l.a.createElement("th",null,"\uc218\ub7c9"),l.a.createElement("th",null,"\ub2e8\uac00"),l.a.createElement("th",null,"\ucd1d\uae08\uc561"),l.a.createElement("th",null,"\uc0ad\uc81c"))),l.a.createElement("tbody",{id:"item"})),l.a.createElement("p",null,l.a.createElement("button",null," \ud655\uc778")))};var L=function(){return l.a.createElement(n.Fragment,null,"dkdkdkdk")},q=a(82);function P(){return(P=Object(p.a)(s.a.mark((function e(t){var a,n,l,c,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=0,n=W.collection("wiki").doc("static"),l=t===f(v())?w(v()):31,c=[],r=0;r<l;r++)c.push(t.concat("-").concat(String(r).padStart(2,"0")));r=0;case 6:if(!(r<l)){e.next=12;break}return e.next=9,n.collection(c[r]).doc("total sales").get().then((function(e){if(void 0!=e.data())return console.log(e.data().sold),a+=e.data().sold,e.data().sold}));case 9:r++,e.next=6;break;case 12:(o=document.querySelector("#month-total"))&&(o.textContent="\uc774\ubc88\ub2ec \ucd1d \ub9e4\ucd9c: "+x(a));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(){var e=new Date,t=Object(n.useState)(e),a=Object(E.a)(t,2),c=a[0],r=a[1];function o(e){var t=document.getElementById("item");t&&(t.innerHTML=""),r(e),console.log(e);var a=document.querySelector("#category-list");a&&(a.innerHTML="");var n=document.querySelector("#month-category-list");n&&(n.innerHTML=""),function(e){P.apply(this,arguments)}(f(b(e))),N(b(e)),function(e){O.apply(this,arguments)}(b(e))}return l.a.createElement(n.Fragment,null,l.a.createElement("div",null,l.a.createElement(q.a,{className:["c1","c2"],onChange:function(e){return o(e)},value:c}),l.a.createElement("div",null,l.a.createElement("p",{id:"month-total"}))),l.a.createElement("div",{className:"input-data"},l.a.createElement("p",{style:{fontSize:"20px",marginTop:"15px",marginBottom:"2px"}},"--\uc77c\ubcc4 \uc885\ubaa9\ubcc4 \ub9e4\ucd9c--"),l.a.createElement("div",{style:{marginLeft:"10px"}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\uc21c\uc704"),l.a.createElement("th",null,"\uce74\ud14c\uace0\ub9ac"),l.a.createElement("th",null,"\ud310\ub9e4\uae08\uc561"),l.a.createElement("th",null,"\uc218\ub7c9")))),l.a.createElement("div",{id:"category-table-wrap"},l.a.createElement("table",null,l.a.createElement("tbody",{id:"category-list"}))))),l.a.createElement("div",{className:"input-data"},l.a.createElement("p",{style:{fontSize:"20px",marginTop:"15px",marginBottom:"2px"}},"--\uc6d4\ubcc4 \uc885\ubaa9\ubcc4 \ub9e4\ucd9c--"),l.a.createElement("div",{style:{marginLeft:"10px"}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\uc21c\uc704"),l.a.createElement("th",null,"\uce74\ud14c\uace0\ub9ac"),l.a.createElement("th",null,"\ud310\ub9e4\uae08\uc561"),l.a.createElement("th",null,"\uc218\ub7c9")))),l.a.createElement("div",{id:"category-table-wrap"},l.a.createElement("table",null,l.a.createElement("tbody",{id:"month-category-list"}))))),l.a.createElement("div",{style:{height:"40px",width:"100%",display:"inline-block"}},l.a.createElement("p",{id:"today-sold",style:{marginRight:"40px"}},"\ub9e4\ucd9c: ",l.a.createElement(k,{date:b(c)}))),l.a.createElement("table",{id:"item-list",style:{width:"95vw",marginLeft:"10px"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\ubc88\ud638"),l.a.createElement("th",null,"\ud310\ub9e4\uc2dc\uac04"),l.a.createElement("th",null,"\uc0c1\ud488\uba85"),l.a.createElement("th",null,"\uc218\ub7c9"),l.a.createElement("th",null,"\ub2e8\uac00"),l.a.createElement("th",null,"\ucd1d\uae08\uc561"),l.a.createElement("th",null,"\uc0ad\uc81c"))),l.a.createElement("tbody",{id:"item"})))};var z=function(e){var t=0;return W.collection("wiki").doc("sale").collection(e.date).get().then((function(a){a.forEach((function(a){!function(e,t,a){var n=document.querySelector("#item"),l=document.querySelector("#today-sold"),c=W.collection("wiki").doc("static").collection(a).doc("total sales"),r=document.createElement("tr"),o=document.createElement("td"),i=document.createElement("td"),d=document.createElement("td"),m=document.createElement("td"),u=document.createElement("td"),E=document.createElement("td"),h=document.createElement("td"),g=document.createElement("button"),f=document.createElement("button");function w(){return(w=Object(p.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.alert("\uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(p.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.alert("\uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.setAttribute("data-id",e.id),o.className="item-number",i.className="item-time",d.className="item-name",m.className="item-cnt",u.className="item-price",E.className="item-totalPrice",h.className="item-del",g.id="item-del",f.className="item-refund",g.addEventListener("click",(function(e){return w.apply(this,arguments)}),!1),f.addEventListener("click",(function(e){return b.apply(this,arguments)}),!1),o.textContent=t,i.textContent=e.id.slice(0,5),e.data().data.memo?d.textContent=e.data().data.category+"\r\n"+e.data().data.memo:d.textContent=e.data().data.category,m.textContent=e.data().data.cnt,u.textContent=x(e.data().data.price),E.textContent=x(e.data().data.totalPrice),g.textContent="X",g.value=e.id,f.textContent="\ud658\ubd88",f.value=e.id,a===v()?h.appendChild(g):h.appendChild(f),r.appendChild(o),r.appendChild(i),r.appendChild(d),r.appendChild(m),r.appendChild(u),r.appendChild(E),r.appendChild(h),0===t?null===n||void 0===n||n.appendChild(r):null===n||void 0===n||n.insertBefore(r,n.firstChild),c.get().then((function(e){e.exists&&l&&!isNaN(e.data().sold)?l.textContent="\ucd1d \ub9e4\ucd9c: "+x(e.data().sold):l&&(W.collection("wiki").doc("static").collection(a).doc("total sales").set({sold:E.textContent}),l.textContent="\ucd1d \ub9e4\ucd9c: "+E.textContent)}))}(a,++t,e.date)}))})),l.a.createElement(n.Fragment,null)},A=a(81),D=a.n(A);function H(){var e,t=Object(n.useState)("\uc131\uc778"),a=Object(E.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(0),i=Object(E.a)(o,2),d=i[0],m=i[1],u=Object(n.useState)("\ub9c8\uc2a4\ud06c / \ub9c8\uc2a4\ud06c\uc904"),h=Object(E.a)(u,2),v=(h[0],h[1]),f=Object(n.useState)(1),w=Object(E.a)(f,2),b=w[0],y=w[1],C=Object(n.useState)(0),k=Object(E.a)(C,2),S=k[0],N=k[1],j=Object(n.useState)(""),O=Object(E.a)(j,2),I=O[0],B=O[1],F=Object(n.useState)(0),M=Object(E.a)(F,2);M[0],M[1];function L(){return(L=Object(p.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==d&&void 0!==b&&0!==d&&0!==b&&!isNaN(d)&&!isNaN(b)){e.next=3;break}return B("\ub2e8\uac00\uc640 \uc218\ub7c9\uc744 \uc785\ub825\ud558\uc138\uc694"),e.abrupt("return");case 3:B("\ud604\uc7ac \ud398\uc774\uc9c0\ub294 \uc2dc\ubc94\uc6a9 \ud398\uc774\uc9c0\ub85c \ub370\uc774\ud130\ub294 \uc785\ub825\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return"\uc131\uc778"===c&&(e=l.a.createElement(n.Fragment,null,l.a.createElement("option",{value:"\ub9c8\uc2a4\ud06c / \ub9c8\uc2a4\ud06c\uc904"},"\ub9c8\uc2a4\ud06c / \ub9c8\uc2a4\ud06c\uc904"),l.a.createElement("option",{value:"\ubaa8\uc790"},"\ubaa8\uc790"),l.a.createElement("option",{value:"\uc591\ub9d0"},"\uc591\ub9d0"),l.a.createElement("option",{value:"\uc7a0\uc637"},"\uc7a0\uc637"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ud540"},"\ud5e4\uc5b4\ud540"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ubc34\ub4dc"},"\ud5e4\uc5b4\ubc34\ub4dc"),l.a.createElement("option",{value:"\uc2a4\uce74\ud504 / \uc190\uc218\uac74"},"\uc2a4\uce74\ud504 / \uc190\uc218\uac74"),l.a.createElement("option",{value:"\uc120\uae00\ub77c\uc2a4"},"\uc120\uae00\ub77c\uc2a4"),l.a.createElement("option",{value:"\uc6b0\uc591\uc0b0"},"\uc6b0\uc591\uc0b0"),l.a.createElement("option",{value:"\ub125\ud0c0\uc774"},"\ub125\ud0c0\uc774"),l.a.createElement("option",{value:"\ub9e4\ucd9c \ub204\ub77d"},"\ub9e4\ucd9c \ub204\ub77d"))),"\uc544\ub3d9"===c&&(e=l.a.createElement(n.Fragment,null,l.a.createElement("option",{value:"\ud5e4\uc5b4\ubc34\ub4dc"},"\ud5e4\uc5b4\ubc34\ub4dc"),l.a.createElement("option",{value:"\ubc18\uc9c0"},"\ubc18\uc9c0"),l.a.createElement("option",{value:"\uac00\ubc29"},"\uac00\ubc29"),l.a.createElement("option",{value:"\ubaa8\uc790"},"\ubaa8\uc790"),l.a.createElement("option",{value:"\uc591\ub9d0"},"\uc591\ub9d0"),l.a.createElement("option",{value:"\ud5e4\uc5b4\ud540"},"\ud5e4\uc5b4\ud540"),l.a.createElement("option",{value:"\uc120\uae00\ub77c\uc2a4"},"\uc120\uae00\ub77c\uc2a4"),l.a.createElement("option",{value:"\uae30\ud0c0"},"\uae30\ud0c0"))),l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{width:"300px",display:"inline-block"}},l.a.createElement("select",{id:"age",className:"select_age",onChange:function(e){var t=e.target,a=(t.name,t.value);r(a)}},l.a.createElement("option",{value:"\uc131\uc778"},"\uc131\uc778"),l.a.createElement("option",{value:"\uc544\ub3d9"},"\uc544\ub3d9")),l.a.createElement("select",{id:"category",className:"category",onChange:function(e){var t=e.target,a=(t.name,t.value);v(a)}},e),l.a.createElement(g.a,{id:"price",placeholder:"\ub2e8\uac00\ub97c \uc785\ub825\ud558\uc138\uc694",onChange:function(e){m(parseInt(e.target.value)),N(parseInt(e.target.value)*b),console.log(d),console.log(b),console.log(S)}}),l.a.createElement(g.a,{id:"cnt",placeholder:"1 (\uae30\ubcf8\uac12)",onChange:function(e){console.log(typeof e.target.value),void 0===e.target.value||isNaN(e.target.value)||""===e.target.value?(y(1),N(d)):(y(parseInt(e.target.value)),N(d*parseInt(e.target.value)),console.log(d),console.log(b),console.log(S))}}),l.a.createElement("div",{id:"totalPrice"},"\ucd1d \uae08\uc561: ",x(S),l.a.createElement("button",{id:"submit",type:"submit",onClick:function(){return L.apply(this,arguments)}},"\uc785\ub825")),l.a.createElement("div",{id:"warnning"},I)))}var G=function(){var e=v();return N(e),l.a.createElement(n.Fragment,null,l.a.createElement("img",{src:D.a,height:"100px"}),l.a.createElement("h2",{style:{marginTop:"2px",marginBottom:"5px",borderBottom:"5px double",paddingBottom:"5px"}},v()),l.a.createElement("div",{className:"input-data"},l.a.createElement(H,null),l.a.createElement("p",{style:{fontSize:"20px",marginTop:"15px",marginBottom:"2px"}},"--\uc885\ubaa9\ubcc4 \ub9e4\ucd9c--"),l.a.createElement("div",{style:{marginLeft:"10px"}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\uc21c\uc704"),l.a.createElement("th",null,"\uce74\ud14c\uace0\ub9ac"),l.a.createElement("th",null,"\ud310\ub9e4\uae08\uc561"),l.a.createElement("th",null,"\uc218\ub7c9")))),l.a.createElement("div",{id:"category-table-wrap"},l.a.createElement("table",null,l.a.createElement("tbody",{id:"category-list"}))))),l.a.createElement("div",{id:"content"},l.a.createElement("p",{id:"today-sold"},"\ucd1d \ub9e4\ucd9c: ",l.a.createElement(z,{date:e})),l.a.createElement("table",{id:"item-list"},l.a.createElement("colgroup",null,l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"10%"}),l.a.createElement("col",{width:"15%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"5%"})),l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\ubc88\ud638"),l.a.createElement("th",null,"\ud310\ub9e4\uc2dc\uac04"),l.a.createElement("th",null,"\uc0c1\ud488\uba85"),l.a.createElement("th",null,"\uc218\ub7c9"),l.a.createElement("th",null,"\ub2e8\uac00"),l.a.createElement("th",null,"\ucd1d\uae08\uc561"),l.a.createElement("th",null,"\uc0ad\uc81c")))),l.a.createElement("div",{id:"table-wrap"},l.a.createElement("table",{id:"item-list"},l.a.createElement("colgroup",null,l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"10%"}),l.a.createElement("col",{width:"15%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"5%"}),l.a.createElement("col",{width:"5%"})),l.a.createElement("tbody",{id:"item"})))))};a(144);i.a.initializeApp({apiKey:"AIzaSyAuMUMqkpuvevgi9pu_NM6ZqUBniwvhuQs",authDomain:"wikimagic-4ce55.firebaseapp.com",databaseURL:"https://wikimagic-4ce55.firebaseio.com",projectId:"wikimagic-4ce55",storageBucket:"wikimagic-4ce55.appspot.com",messagingSenderId:"999608533978",appId:"1:999608533978:web:1328133731ac663f2836e3",measurementId:"G-K3WGGRGWHB"});var W=i.a.firestore(),R=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(m.a,{path:"/purchase",component:B}),l.a.createElement(m.a,{path:"/static",component:T}),l.a.createElement(m.a,{path:"/test",component:G}),l.a.createElement(m.a,{path:"/write-purchase-record",component:M}),l.a.createElement(m.a,{path:"/show-purchase-record",component:L}),l.a.createElement(m.a,{excat:!0,path:"/home",component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a.p+"static/media/wikimagic1.f04f82f5.png"},84:function(e,t,a){e.exports=a(145)},89:function(e,t,a){},90:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.ea12d4cf.chunk.js.map