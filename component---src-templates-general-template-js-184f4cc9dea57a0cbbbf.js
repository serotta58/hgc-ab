(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return R});var n=a(0),r=a.n(n),i=a(184),o=a(3952),l=a(248),u=a.n(l),c=a(249),s=a.n(c),d=a(217),m=a.n(d),f=a(222),h=a.n(f),p=a(221),g=a.n(p),y=a(220),v=a.n(y),E=a(218),b=a.n(E),_=a(4049),w=a.n(_),C=a(180),x=a.n(C),M=a(178),T=a(200),k=a(190),R="2417267934";t.default=Object(k.a)(Object(M.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes,a=e.data,n=a.markdownRemark.frontmatter,l=n.title,c=n.imageURL,d=a.markdownRemark.html;return r.a.createElement(o.ModalRoutingContext.Consumer,null,function(e){var a=e.modal;return e.closeTo,r.a.createElement(r.a.Fragment,null,a?r.a.createElement(T.a,{title:l},r.a.createElement(u.a,{color:"secondary",position:"sticky"},r.a.createElement(s.a,null,r.a.createElement(b.a,{component:i.Link,to:"/",color:"inherit","aria-label":"Close"},r.a.createElement(w.a,null)),r.a.createElement(x.a,{variant:"h6",color:"inherit",className:t.grow},l))),r.a.createElement(m.a,{elevation:0},r.a.createElement(v.a,{style:{height:"150px"},image:c}),r.a.createElement(g.a,null,r.a.createElement(x.a,{variant:"body1",dangerouslySetInnerHTML:{__html:d}})))):r.a.createElement(T.a,{title:l},r.a.createElement(u.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(b.a,{component:i.Link,to:"/",color:"default","aria-label":"Close"},r.a.createElement(w.a,null)),r.a.createElement(x.a,{variant:"h6",color:"inherit",className:t.grow},l))),r.a.createElement(h.a,{raised:!1},r.a.createElement(v.a,{style:{height:"150px"},image:c}),r.a.createElement(g.a,null,r.a.createElement(x.a,{variant:"body1",dangerouslySetInnerHTML:{__html:d}})))))})}))},184:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m}),a.d(t,"useStaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(36),u=a.n(l);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"parsePath",function(){return l.parsePath}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(185),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},185:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},190:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),o=a.n(i),l=a(178),u=a(213),c=a.n(u),s=a(208),d=a.n(s),m=a(214),f=a.n(m),h=a(191);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(h.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(d.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(l.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(c.a,null),o.a.createElement(f.a,{implementation:"css"},o.a.createElement(e,this.props))))},a}(o.a.Component)}},191:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return m});a(80),a(59),a(37),a(81),a(210);var r=a(181),i=a(178),o=a(197),l=a.n(o),u=a(212),c=a.n(u),s=Object(i.createMuiTheme)({palette:{primary:{light:l.a[400],main:l.a[500],dark:l.a[700]},secondary:{light:c.a[300],main:c.a[500],dark:c.a[700]}},typography:{useNextVariants:!0}});function d(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function m(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=d()),n.__INIT_MATERIAL_UI__):d()}}).call(this,a(209),a(58))},199:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(63),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(186),o=a.n(i);t.a=function(e){var t=e.children;return r.a.createElement(o.a,{container:!0,justify:"center",alignItems:"stretch"},r.a.createElement(o.a,{item:!0,xs:!0},t))}},3952:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0;var r=n(a(85));t.ModalRoutingContext=r.default;var i=n(a(3953));t.Link=i.default},3953:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0,t.default=void 0;var r=n(a(57)),i=n(a(86)),o=n(a(0)),l=a(184),u=n(a(85)),c=function(e){var t=e.to,a=e.asModal,n=e.state,c=(0,i.default)(e,["to","asModal","state"]);return o.default.createElement(u.default.Consumer,null,function(e){e.modal;var i=e.closeTo;return o.default.createElement(l.Link,(0,r.default)({to:t,state:(0,r.default)({},n,{modal:a,noScroll:t===i})},c))})};t.default=c},4049:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(251)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Close");t.default=i}}]);
//# sourceMappingURL=component---src-templates-general-template-js-184f4cc9dea57a0cbbbf.js.map