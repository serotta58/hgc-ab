(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return M});var n=a(0),r=a.n(n),i=a(184),o=(a(3952),a(248)),u=a.n(o),s=a(249),l=a.n(s),c=a(217),d=a.n(c),f=a(221),m=a.n(f),h=a(220),p=a.n(h),g=a(218),y=a.n(g),v=a(4049),E=a.n(v),b=a(180),w=a.n(b),_=a(178),x=a(200),C=a(190),M="2417267934";t.default=Object(C.a)(Object(_.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes,a=e.data,n=a.markdownRemark.frontmatter,o=n.title,s=n.imageURL,c=a.markdownRemark.html;return r.a.createElement(x.a,{title:o},r.a.createElement(u.a,{color:"secondary",position:"sticky"},r.a.createElement(l.a,null,r.a.createElement(y.a,{component:i.Link,to:"/",color:"inherit","aria-label":"Close"},r.a.createElement(E.a,null)),r.a.createElement(w.a,{variant:"h6",color:"inherit",className:t.grow},o))),r.a.createElement(d.a,{elevation:0},r.a.createElement(p.a,{style:{height:"150px"},image:s}),r.a.createElement(m.a,null,r.a.createElement(w.a,{variant:"body1",dangerouslySetInnerHTML:{__html:c}}))))}))},184:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f}),a.d(t,"useStaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(36),s=a.n(u);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"parsePath",function(){return u.parsePath}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var l=a(185),c=a.n(l);a.d(t,"PageRenderer",function(){return c.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},m=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},185:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},190:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),o=a.n(i),u=a(178),s=a(213),l=a.n(s),c=a(208),d=a.n(c),f=a(214),m=a.n(f),h=a(191);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(h.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(d.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(u.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(l.a,null),o.a.createElement(m.a,{implementation:"css"},o.a.createElement(e,this.props))))},a}(o.a.Component)}},191:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return f});a(80),a(59),a(37),a(81),a(210);var r=a(181),i=a(178),o=a(197),u=a.n(o),s=a(212),l=a.n(s),c=Object(i.createMuiTheme)({palette:{primary:{light:u.a[400],main:u.a[500],dark:u.a[700]},secondary:{light:l.a[300],main:l.a[500],dark:l.a[700]}},typography:{useNextVariants:!0}});function d(){return{theme:c,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function f(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=d()),n.__INIT_MATERIAL_UI__):d()}}).call(this,a(209),a(58))},199:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(63),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(186),o=a.n(i);t.a=function(e){var t=e.children;return r.a.createElement(o.a,{container:!0,justify:"center",alignItems:"stretch"},r.a.createElement(o.a,{item:!0,xs:!0},t))}},3952:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0;var r=n(a(85));t.ModalRoutingContext=r.default;var i=n(a(3953));t.Link=i.default},3953:function(e,t,a){"use strict";var n=a(5);t.__esModule=!0,t.default=void 0;var r=n(a(57)),i=n(a(86)),o=n(a(0)),u=a(184),s=n(a(85)),l=function(e){var t=e.to,a=e.asModal,n=e.state,l=(0,i.default)(e,["to","asModal","state"]);return o.default.createElement(s.default.Consumer,null,function(e){e.modal;var i=e.closeTo;return o.default.createElement(u.Link,(0,r.default)({to:t,state:(0,r.default)({},n,{modal:a,noScroll:t===i})},l))})};t.default=l},4049:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(251)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Close");t.default=i}}]);
//# sourceMappingURL=component---src-templates-general-template-js-15a130056fd94635c708.js.map