(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{36:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(23),a=n.n(s),i=n(15),j=n(14),l=n(10),o=n(11),b=n(13),d=n(12),h=n(8),u=n(3),O=n(25),p=n(16),x=[{name:"About",href:"",icon:"user"},{name:"Blog",href:"blog",icon:"pen"},{name:"Music",href:"music",icon:"music"},{name:"Projects",href:"projects",icon:"keyboard"}];n(36);var m=function(e){var t=Object(r.useState)(window.innerWidth),n=Object(O.a)(t,2),s=n[0],a=n[1];Object(r.useEffect)((function(){window.addEventListener("resize",(function(){a(window.innerWidth)}))}),[]);var i=s<=900,j=s<=500;return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(y,{}),Object(c.jsxs)("div",{className:"header-banner",children:[Object(c.jsx)(f,{}),!i&&Object(c.jsx)(v,{}),!j&&Object(c.jsx)(w,{}),i&&Object(c.jsx)(g,{toggleSidebar:function(){return e.toggleSidebar()}})]})]})};function f(){return Object(c.jsxs)(h.b,{className:"header-logo",to:"/",children:[Object(c.jsx)("span",{className:"header-title",children:"Robert Wise"}),Object(c.jsx)("span",{className:"header-subtitle",children:"Fledgling Developer"})]})}function v(){var e=window.location.pathname.split("/")[1];Object(u.f)();var t=x.map((function(t){var n=t.href===e?"header-link-active":"";return Object(c.jsxs)(h.b,{className:"header-link "+n,to:"/"+t.href,children:[Object(c.jsx)("span",{children:t.name}),Object(c.jsx)(p.a,{icon:t.icon})]},t.name)}));return Object(c.jsx)("nav",{className:"header-nav",children:t})}var g=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{onClick:function(){return e.props.toggleSidebar()},className:"header-burger",children:Object(c.jsx)(p.a,{icon:"bars"})})})}}]),n}(r.Component);function w(){return Object(c.jsx)("span",{className:"header-motto",children:'"We\'ll get there eventually."'})}function y(){return Object(c.jsx)("div",{className:"header-warning",children:"//  Under Construction  //"})}function N(){var e=window.location.pathname.split("/")[1];Object(u.f)();var t=x.map((function(t){var n=t.href===e?"sidebar-link-active":"";return Object(c.jsxs)(h.b,{className:"sidebar-link "+n,to:"/"+t.href,children:[Object(c.jsx)(p.a,{icon:t.icon}),Object(c.jsx)("span",{children:t.name})]},t.name)}));return Object(c.jsx)(c.Fragment,{children:t})}var k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){console.log(this.props.sidebarOpen);var e=this.props.sidebarOpen?"":" closed";return Object(c.jsx)("nav",{className:"sidebar-nav"+e,children:Object(c.jsx)(N,{})})}}]),n}(r.Component);function S(){return Object(c.jsxs)("div",{className:"generic-article",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"This will eventually contain info about me... hopefully."})]})}function C(){return Object(c.jsxs)("div",{className:"generic-article",children:[Object(c.jsx)("h2",{children:"Blog"}),Object(c.jsx)("p",{children:"Here's where I'll include any short articles or musings, should I chose to write them."})]})}function I(){return Object(c.jsxs)("div",{className:"generic-article",children:[Object(c.jsx)("h2",{children:"Music"}),Object(c.jsx)("p",{children:"Here's where any and all my music degree related stuff might go, particularly any recordings if I have them."})]})}function E(){return Object(c.jsxs)("div",{className:"generic-article",children:[Object(c.jsx)("h2",{children:"Projects"}),Object(c.jsx)("p",{children:"This is where I'll host demos/explanations on any personal projects. Eventually."})]})}var W=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={sidebarOpen:!1},c}return Object(o.a)(n,[{key:"toggleSidebar",value:function(){this.setState({sidebarOpen:!this.state.sidebarOpen}),console.log(this.state.sidebarOpen)}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(h.a,{children:[Object(c.jsx)(m,{toggleSidebar:function(){return e.toggleSidebar()}}),Object(c.jsxs)("div",{className:"content-area",children:[Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/blog",children:Object(c.jsx)(C,{})}),Object(c.jsx)(u.a,{path:"/music",children:Object(c.jsx)(I,{})}),Object(c.jsx)(u.a,{path:"/projects",children:Object(c.jsx)(E,{})}),Object(c.jsx)(u.a,{path:"/",children:Object(c.jsx)(S,{})})]})}),Object(c.jsx)(k,{sidebarOpen:this.state.sidebarOpen})]})]})}}]),n}(r.Component);n(39);i.b.add(j.e,j.d,j.c,j.b,j.a),a.a.render(Object(c.jsx)(W,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.30a1015d.chunk.js.map