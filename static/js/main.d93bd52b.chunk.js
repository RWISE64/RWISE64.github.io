(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{157:function(e,t,n){},158:function(e,t,n){var c={"./about.md":[171,3],"./blog/newYearNewAmbitions.md":[172,4],"./blog/shoutsToTheVoid.md":[173,5],"./music.md":[175,6],"./music/lonelyTown.md":[174,7],"./projects.md":[176,8]};function a(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(c)},a.id=158,e.exports=a},159:function(e,t,n){},160:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(63),i=n.n(s),o=n(25),l=n(11),j=n(17),d=n(18),u=n(20),b=n(19),h=n(9),p=n(3),m=n(21),O=n(12),f=[{name:"About",href:"",icon:"user"},{name:"Blog",href:"blog",icon:"pen"},{name:"Music",href:"music",icon:"music"},{name:"Projects",href:"projects",icon:"keyboard"}];n(79);var v=function(e){var t=Object(a.useState)(window.innerWidth),n=Object(m.a)(t,2),r=n[0],s=n[1];Object(a.useEffect)((function(){window.addEventListener("resize",(function(){s(window.innerWidth)}))}),[]);var i=r<=900,o=r<=500;return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(x,{}),!i&&Object(c.jsx)(N,{}),!o&&Object(c.jsx)(g,{}),i&&Object(c.jsx)(w,{toggleSidebar:function(){return e.toggleSidebar()}})]})};function x(){return Object(c.jsxs)(h.b,{className:"header-logo",to:"/",children:[Object(c.jsx)("span",{className:"header-title",children:"Robert\xa0Wise"}),Object(c.jsx)("span",{className:"header-subtitle",children:"Fledgling\xa0Developer"})]})}function N(){function e(){return window.location.href.split("/")[4]}var t=Object(a.useState)(e()),n=Object(m.a)(t,2),r=n[0],s=n[1],i=f.map((function(t){var n=t.href===r?"header-link-active":"";return Object(c.jsxs)(h.b,{className:"header-link "+n,to:"/"+t.href,onClick:function(){setTimeout((function(){return s(e())}),1)},children:[Object(c.jsx)("span",{children:t.name}),Object(c.jsx)(O.a,{icon:t.icon})]},t.name)}));return Object(c.jsx)("nav",{className:"header-nav",children:i})}var w=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{onClick:function(){return e.props.toggleSidebar()},className:"header-burger",children:Object(c.jsx)(O.a,{icon:"bars"})})})}}]),n}(a.Component);function g(){return Object(c.jsx)("span",{className:"header-motto",children:'"We\'ll\xa0get\xa0there\xa0eventually."'})}n(82);function k(){function e(){return window.location.href.split("/")[4]}var t=Object(a.useState)(e()),n=Object(m.a)(t,2),r=n[0],s=n[1],i=f.map((function(t){var n=t.href===r?"sidebar-link-active":"";return Object(c.jsxs)(h.b,{className:"sidebar-link "+n,to:"/"+t.href,onClick:function(){setTimeout((function(){return s(e())}),1)},children:[Object(c.jsx)(O.a,{icon:t.icon}),Object(c.jsx)("span",{children:t.name})]},t.name)}));return Object(c.jsx)(c.Fragment,{children:i})}var y=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.sidebarOpen?"":" closed";return Object(c.jsx)("div",{className:"sidebar",children:Object(c.jsx)("nav",{className:"sidebar-nav"+e,children:Object(c.jsx)(k,{})})})}}]),n}(a.Component),T=n(45),C=n.n(T),E=n(65),S=n(66),B=n.n(S);n(157);function D(e){var t=Object(a.useState)(),r=Object(m.a)(t,2),s=r[0],i=r[1];Object(a.useEffect)((function(){function t(){return(t=Object(E.a)(C.a.mark((function t(){var c,a,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(158)("./"+e.markdownName);case 2:return c=t.sent,t.next=5,fetch(c.default);case 5:return a=t.sent,t.next=8,a.text();case 8:return r=t.sent,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(e){return i(e)}))}));var o=s?"":" unloaded";return Object(c.jsx)("div",{className:"article-content"+o,children:Object(c.jsx)(B.a,{source:s})})}n(59);function A(e){var t=e.post;return Object(c.jsxs)("article",{className:"generic-post",children:[Object(c.jsxs)("div",{className:"generic-post-header",children:[Object(c.jsx)("h1",{className:"generic-post-title",children:t.postName}),Object(c.jsx)("span",{className:"generic-post-date",children:t.postDate})]}),Object(c.jsx)("div",{className:"generic-post-description",children:t.description}),Object(c.jsx)(D,{markdownName:e.markdownName})]})}var L=n(68);n(159);function F(){var e,t=document.getElementsByClassName("post-wrapper")[0],n=t.getBoundingClientRect().height,c=t.parentElement.parentElement.getBoundingClientRect().height;e=n>c,document.getElementById("bottom-back-button").style.display=e?"block":"none"}n(160);function M(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"file-alt",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";this.path=e,this.markdownName=t,this.postName=n,this.postDate=c,this.icon=a,this.description=r}function U(e,t,n){var a=Object(p.f)(),s=a.path,i=a.url,o=[],l=[],m=function(e,t,n){return function(a){Object(u.a)(s,a);var r=Object(b.a)(s);function s(){return Object(j.a)(this,s),r.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){F(),setTimeout((function(){return F()}),550),window.addEventListener("resize",(function(){F()}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"post-wrapper",children:[Object(c.jsxs)(h.b,{className:"back-button",to:"".concat(t),children:[Object(c.jsx)(O.a,{icon:"arrow-alt-circle-left"}),"Back to ",n]}),Object(c.jsx)(e,Object(L.a)({},this.props)),Object(c.jsxs)(h.b,{className:"back-button",id:"bottom-back-button",to:"".concat(t),children:[Object(c.jsx)(O.a,{icon:"arrow-alt-circle-left"}),"Back to ",n]})]})}}]),s}(r.a.Component)}(e,i,t);return n.forEach((function(e){o.push(Object(c.jsx)(p.a,{path:"".concat(s,"/").concat(e.path),children:Object(c.jsx)(m,{markdownName:"".concat(t.toLowerCase(),"/").concat(e.markdownName),post:e})},e.path)),l.push(Object(c.jsxs)(h.b,{className:"post-link",to:"".concat(i,"/").concat(e.path),children:[Object(c.jsx)("div",{className:"post-link-icon",children:Object(c.jsx)(O.a,{icon:e.icon})}),Object(c.jsxs)("div",{className:"post-link-info",children:[Object(c.jsxs)("div",{className:"post-link-header",children:[Object(c.jsx)("h1",{className:"post-link-title",children:e.postName}),Object(c.jsx)("span",{className:"post-link-date",children:e.postDate})]}),Object(c.jsx)("p",{className:"post-link-description",children:e.description})]})]},e.path))})),function(){return Object(c.jsxs)(p.c,{children:[o,Object(c.jsx)(p.a,{path:"/",children:Object(c.jsx)("div",{className:"post-links",children:l})})]})}}function V(){var e=new M("","shoutsToTheVoid.md","About","");return Object(c.jsx)(A,{markdownName:"about.md",post:e})}var W=[new M("shouts-to-the-void","shoutsToTheVoid.md","Shouts to the Void","1/9/21","info-circle","A quick overview of the purpose of this blog."),new M("new-year-new-ambitions","newYearNewAmbitions.md","New Year, New Ambitions","1/13/21","calendar-check","A reflection on 2020 and my overambitious goals for 2021.")];function P(){var e=U(A,"Blog",W);return Object(c.jsx)(e,{})}var R=n(67),Y=n.n(R);n(168);function z(e){var t=e.post;return Object(c.jsxs)("article",{className:"generic-post",children:[Object(c.jsx)("div",{className:"player-wrapper",children:Object(c.jsx)(Y.a,{className:"react-player",url:t.videoUrl,width:"100%",height:"100%"})}),Object(c.jsxs)("div",{className:"generic-post-header",children:[Object(c.jsx)("h1",{className:"generic-post-title",children:t.postName}),Object(c.jsx)("span",{className:"generic-post-date",children:t.postDate})]}),Object(c.jsx)("div",{className:"generic-post-description",children:t.description}),Object(c.jsx)(D,{markdownName:e.markdownName})]})}var I=[new function(e,t,n,c,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"music",i=new M(e,t,n,c,s,r);return i.videoUrl=a,i}("lonely-town","lonelyTown.md","Lonely Town","1/30/21","https://vimeo.com/506362883","Leonard Bernstein","microphone-alt")];function J(){var e=U(z,"Music",I);return Object(c.jsx)(e,{})}var _=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={sidebarOpen:!1},c}return Object(d.a)(n,[{key:"toggleSidebar",value:function(){this.setState({sidebarOpen:!this.state.sidebarOpen})}},{key:"render",value:function(){var e=this,t=this.state.sidebarOpen?" blur":"";return Object(c.jsxs)(h.a,{children:[Object(c.jsx)(v,{toggleSidebar:function(){return e.toggleSidebar()}}),Object(c.jsxs)("div",{className:"content-area",id:"content-area",children:[Object(c.jsx)("div",{className:"content"+t,children:Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{path:"/blog",children:Object(c.jsx)(P,{})}),Object(c.jsx)(p.a,{path:"/music",children:Object(c.jsx)(J,{})}),Object(c.jsx)(p.a,{path:"/projects",children:Object(c.jsx)(A,{markdownName:"projects.md",postName:"Projects"})}),Object(c.jsx)(p.a,{path:"/",children:Object(c.jsx)(V,{})})]})}),Object(c.jsx)(y,{sidebarOpen:this.state.sidebarOpen})]})]})}}]),n}(a.Component);n(169);o.b.add(l.k,l.j,l.i,l.g,l.b,l.f,l.e,l.d,l.a,l.c,l.h),i.a.render(Object(c.jsx)(_,{}),document.getElementById("root"))},59:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){}},[[170,1,2]]]);
//# sourceMappingURL=main.d93bd52b.chunk.js.map