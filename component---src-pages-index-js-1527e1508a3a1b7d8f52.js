(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(186),o=a.n(i),c=a(180),l=a.n(c),s=a(4060),u=a.n(s);function d(e){var t=e.title,a=e.defaultTitle,n=e.defaultDescription,i=e.domain,o=e.lang,c=e.keywords;return r.a.createElement(u.a,{htmlAttributes:{lang:o},title:a,titleTemplate:"%s - "+t},r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"keywords",content:c}),r.a.createElement("link",{rel:"canonical",href:i}))}d.defaultProps={lang:"en",meta:[],keywords:["Data Science","Product Management","Engineering","Software Development","Consulting"]};var m=a(4),p=a.n(m),g=a(248),h=a.n(g),f=a(249),y=a.n(f),v=a(218),b=a.n(v),E=a(4065),x=a.n(E),w=a(178);function k(e){var t=e.classes,a=e.title;return r.a.createElement("div",{className:t.root},r.a.createElement(h.a,{position:"static"},r.a.createElement(y.a,null,r.a.createElement(b.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(x.a,null)),r.a.createElement(l.a,{variant:"h6",color:"inherit",className:t.grow},a))))}k.propTypes={classes:p.a.object.isRequired};var j=Object(w.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(k);a(4066),a(4068);function C(e){var t=e.company,a=e.email;return r.a.createElement(l.a,{variant:"caption",component:"div"},"©",(new Date).getFullYear()," ",t," Email: ",a)}var R=Object(w.withStyles)(function(e){return{footer:{textAlign:"center",padding:2*e.spacing.unit,color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark,width:"100%",minHeight:"56px",position:"fixed",bottom:0}}})(function(e){var t=e.classes,a=e.company,n=e.email;return r.a.createElement("footer",{className:t.footer},r.a.createElement(C,{company:a,email:n}))}),T=a(6),M=a.n(T),N=a(4078),_=a.n(N),S=a(4088),O=a.n(S),L=a(4070),I=a.n(L);function P(e){var t=e.classes,a=e.children,n=e.dir;return r.a.createElement(l.a,{className:t.root,component:"div",dir:n},a)}P.propTypes={children:p.a.node.isRequired,dir:p.a.string.isRequired};var q=Object(w.withStyles)(function(e){return{root:{height:"100%",backgroundColor:e.palette.background.paper,padding:3*e.spacing.unit}}})(P),A=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:0},t.handleChange=function(e,a){t.setState({value:a})},t.handleChangeIndex=function(e){t.setState({value:e})},t}return M()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.theme,n=e.items;return r.a.createElement("div",{className:t.root},r.a.createElement(_.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"secondary",textColor:"inherit",centered:!0},n.map(function(e){return r.a.createElement(O.a,{key:e[0],label:e[0]})})),r.a.createElement(I.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:this.state.value,onChangeIndex:this.handleChangeIndex},n.map(function(e){return r.a.createElement(q,{key:e[0],dir:a.direction},e[1])})))},t}(r.a.Component);A.propTypes={classes:p.a.object.isRequired,theme:p.a.object.isRequired};var G=Object(w.withStyles)(function(e){return{root:{backgroundColor:e.palette.primary.light,color:e.palette.primary.contrastText,flexGrow:1},grow:{flexGrow:1},icon:{marginLeft:-12,marginRight:20}}},{withTheme:!0})(A),U=a(184),B=a(257),D=a.n(B),W=a(222),F=a.n(W),Q=a(4092),H=a.n(Q),J=a(4094),z=a.n(J),V=a(221),Y=a.n(V),K=a(220),X=a.n(K),Z=a(4091);var $=Object(w.withStyles)(function(e){return{grid:{height:"100%"},card:{height:"100%"},cardMedia:{height:"150px"},titleText:{textAlign:"center"},imageLink:{border:0,width:"80%",paddingTop:"40px",paddingBottom:"20px"}}})(function(e){var t=e.classes,a=Z.data.allMarkdownRemark.edges;return r.a.createElement(o.a,{spacing:24,container:!0,justify:"center"},a.map(function(e){var a=e.node,n=a.excerpt,i=a.frontmatter,c=i.path,s=i.title,u=i.imageURL;return r.a.createElement(o.a,{item:!0,xs:12,md:4,key:s},r.a.createElement(F.a,{className:t.card},r.a.createElement(H.a,null,r.a.createElement(X.a,{image:u,className:t.cardMedia}),r.a.createElement(Y.a,null,r.a.createElement(l.a,{gutterBottom:!0,variant:"h6",className:t.titleText},s),r.a.createElement(l.a,{variant:"body2"},n))),r.a.createElement(z.a,null,r.a.createElement(D.a,{component:U.Link,to:c,state:{modal:!0},size:"small",color:"primary"},"Read more ..."))))}))}),ee=a(4098);var te=Object(w.withStyles)(function(e){return{grid:{height:"100%"},card:{height:"100%"},cardMedia:{height:"150px"},titleText:{textAlign:"center"},imageLink:{border:0,width:"80%",paddingTop:"40px",paddingBottom:"20px"}}})(function(e){var t=e.classes,a=ee.data.allMarkdownRemark.edges;return r.a.createElement(o.a,{spacing:24,container:!0,justify:"center"},a.map(function(e){var a=e.node,n=a.excerpt,i=a.frontmatter,c=i.path,s=i.title,u=i.imageURL;return console.log("publicURL",u),r.a.createElement(o.a,{item:!0,xs:12,md:4,key:s},r.a.createElement(F.a,{className:t.card},r.a.createElement(X.a,{image:u,className:t.cardMedia}),r.a.createElement(Y.a,null,r.a.createElement(l.a,{gutterBottom:!0,variant:"h6",className:t.titleText},r.a.createElement(U.Link,{to:c,state:{modal:!0}},s)),r.a.createElement(l.a,{variant:"body2"},n))))}))}),ae=a(4099);var ne=a(190);t.default=Object(ne.a)(function(e){e.classes;var t=ae.data.site.siteMetadata,a=t.domain,n=t.company,i=t.defaultTitle,c=t.defaultDescription,s=t.preamble,u=t.postamble,m=t.contact.email;return r.a.createElement(o.a,{container:!0,justify:"center",alignItems:"stretch"},r.a.createElement(o.a,{item:!0,xs:!0},r.a.createElement(j,{title:i}),r.a.createElement(d,{title:"Home",defaultTitle:i,defaultDescription:c,company:n,domain:a}),r.a.createElement(G,{items:[["Services",r.a.createElement($,null)],["Articles",r.a.createElement(te,null)]]}),r.a.createElement(l.a,{paragraph:!0,gutterBottom:!0,variant:"body2",component:"span"},s),r.a.createElement(l.a,{paragraph:!0,gutterBottom:!0,variant:"body2",component:"span"},c),r.a.createElement(l.a,{paragraph:!0,gutterBottom:!0,variant:"body2",component:"span"},u),r.a.createElement(R,{company:n,email:m})))})},184:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m}),a.d(t,"useStaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(36),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"parsePath",function(){return c.parsePath}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(185),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},185:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},190:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),o=a.n(i),c=a(178),l=a(213),s=a.n(l),u=a(208),d=a.n(u),m=a(214),p=a.n(m),g=a(191);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(g.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(d.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(s.a,null),o.a.createElement(p.a,{implementation:"css"},o.a.createElement(e,this.props))))},a}(o.a.Component)}},191:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return m});a(80),a(59),a(37),a(81),a(210);var r=a(181),i=a(178),o=a(197),c=a.n(o),l=a(212),s=a.n(l),u=Object(i.createMuiTheme)({palette:{primary:{light:c.a[400],main:c.a[500],dark:c.a[700]},secondary:{light:s.a[300],main:s.a[500],dark:s.a[700]}},typography:{useNextVariants:!0}});function d(){return{theme:u,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function m(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=d()),n.__INIT_MATERIAL_UI__):d()}}).call(this,a(209),a(58))},199:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(63),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},4091:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"359f87e4-98bc-5646-81e6-08a95223d260",frontmatter:{imageURL:"https://d3lubguj0jcn6d.cloudfront.net/engineering.png",path:"/services/engineering",title:"Engineering",date:"11 February 2014"},excerpt:'Robust, scalable, and self-healingPython, Node.js, React.js, and moreInfrastructure as CodeNoOps / DevOpsAWS "everything": from Lambda to…'}},{node:{id:"25e29832-6006-50ce-9c55-defad21fa0ab",frontmatter:{imageURL:"https://d3lubguj0jcn6d.cloudfront.net/bigdata_800.jpg",path:"/services/data-science",title:"Data Science",date:"11 February 2014"},excerpt:"Our primary focus for over 10 years has been automated crawling, processing, and monitoring changes across millions of websites. \nWe excel…"}},{node:{id:"fa627520-248b-5166-8836-39aee6d1037c",frontmatter:{imageURL:"https://d3lubguj0jcn6d.cloudfront.net/what_is_a_product_manager-570x320.png",path:"/services/product-management",title:"Product Management",date:"11 February 2014"},excerpt:"We excel at complex product development.We've brought products to market across the globe: both customer-facing and\ninternal.We particularly…"}}]}}}},4098:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"8ba2b527-c1f8-59dd-8f2e-c39ff3176f69",frontmatter:{imageURL:"/images/javascript-illustration.png",path:"/articles/js-oop-explained",title:"OOP - explained",date:"14 March 2014"},excerpt:"Object Oriented Programming, OOP, refers to using self-contained pieces of code to develop applications. We call these \nself-contained…"}}]}}}},4099:function(e){e.exports={data:{site:{siteMetadata:{domain:"https://hgc.se",company:"HGC Consulting AB",defaultTitle:"HGC AB",preamble:"We're a Stockholm based company providing data scientists and software engineers.",defaultDescription:"Modern software development",postamble:"Think we can help your project? We'd love to hear from you:",contact:{email:"hgc-ab@outlook.com"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-1527e1508a3a1b7d8f52.js.map