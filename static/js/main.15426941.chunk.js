(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(18),i=a.n(s),c=a(9),o=a.n(c),u=a(19),l=a(3),h=a(4),m=a(6),p=a(5),j=a(20),b=a.n(j).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID fOqMVikl2SMBqkNJo_h3iN2xQd7TkoX64lg-YyNO0BQ"}}),f=a(0),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.text)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"ui segement",children:Object(f.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:" Image Search "}),Object(f.jsx)("input",{type:"text",value:this.state.text,onChange:function(t){return e.setState({text:t.target.value})}})]})})})}}]),a}(r.a.Component),v=(a(46),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return Object(f.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(f.jsx)("img",{ref:this.imageRef,alt:t,src:a.regular})})}}]),a}(r.a.Component)),O=function(e){console.log(e.image);var t=e.image.map((function(e){return Object(f.jsx)(v,{image:e},e.id)}));return Object(f.jsx)("div",{className:"image-list",children:t})},g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchBarSubmit=function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(f.jsx)(d,{onSubmit:this.onSearchBarSubmit}),Object(f.jsx)(O,{image:this.state.images})]})}}]),a}(r.a.Component);i.a.render(Object(f.jsx)(g,{}),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.15426941.chunk.js.map