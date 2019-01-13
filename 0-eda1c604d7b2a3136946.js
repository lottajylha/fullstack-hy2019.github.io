(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return g}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),o=t(4),i=t.n(o),s=t(139),l=t.n(s);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var c=t(161),u=t.n(c);t.d(a,"PageRenderer",function(){return u.a});var m=t(29);t.d(a,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},141:function(e,a,t){"use strict";t(28),t(186);var n=t(4),r=t.n(n),o=t(0),i=t.n(o),s=function(e){var a=e.Tag,t=e.children,n=e.className,r=e.flex,o=e.dirColumn,s=e.spaceAround,l=e.spaceBetween,c=e.centered,u=e.autoBottomMargin,m=e.horizontalHalf,d=e.flexStart,p=e.props,g=[];return r&&g.push("element--flex"),u&&g.push("element--auto-bottom-margin"),o&&g.push("element--column"),s&&g.push("element--space-around"),l&&g.push("element--space-between"),c&&g.push("element--centered"),m&&g.push("element--horizontal-half"),d&&g.push("element--flex-start"),i.a.createElement(a,Object.assign({className:n+" "+g.join(" ")},p),t)};s.defaultProps={className:"",Tag:"div"},s.propTypes={Tag:r.a.string,children:r.a.node,className:r.a.string,flex:r.a.bool,spaceAround:r.a.bool,spaceBetween:r.a.bool,dirColumn:r.a.bool,centered:r.a.bool,horizontalHalf:r.a.bool,autoBottomMargin:r.a.bool,flexStart:r.a.bool},a.a=s},146:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28),t(163);var n=t(140),r=t.n(n),o=(t(188),t(4)),i=t.n(o),s=t(0),l=t.n(s),c=function(e){var a=e.src,t=e.alt,n=(e.hover,e.className),o=e.overlay,i=e.contain,s=e.circle,c=e.extraSmall,u=e.small,m=e.medium,d=e.large,p=e.fullWidth,g=e.actualSize,f=e.squareBig,h=r()(e,["src","alt","hover","className","overlay","contain","circle","extraSmall","small","medium","large","fullWidth","actualSize","squareBig"]),b=[];return i&&b.push("image--contain"),p&&b.push("image--full-width"),s&&b.push("image--circle"),c&&b.push("image--extra-small"),u&&b.push("image--small"),m&&b.push("image--medium"),d&&b.push("image--large"),f&&b.push("image--square-big"),g&&b.push("image--acctual-size"),l.a.createElement("div",Object.assign({className:"image "+n+" "+b.join(" ")},h),l.a.createElement("div",{className:"image__container"},l.a.createElement("img",{style:{backgroundColor:o,backgroundOpacity:"0.5"},className:"image__content",src:a,alt:t})))};c.defaultProps={src:"",alt:"",overlay:"",className:""},c.propTypes={overlay:i.a.string,src:i.a.oneOfType([i.a.string,i.a.object]),alt:i.a.oneOfType([i.a.string,i.a.array]),hover:i.a.string,className:i.a.string,contain:i.a.bool,circle:i.a.bool,extraSmall:i.a.bool,small:i.a.bool,medium:i.a.bool,large:i.a.bool,squareBig:i.a.bool,fullWidth:i.a.bool,actualSize:i.a.bool}},148:function(e,a,t){"use strict";t(189),t(190);var n=t(4),r=t.n(n),o=t(0),i=t.n(o),s=t(138),l=t(154),c=function(){return i.a.createElement("div",{className:"container",style:{alignItems:"center"}},i.a.createElement(s.Link,{to:"/",style:{textDecoration:"none"}},i.a.createElement(l.a,{className:"nav-item-hover",childrenClassName:"triple-border__logo"},"{() => fs}")),i.a.createElement("div",{className:"col-6 push-left-2",style:{display:"flex",justifyContent:"space-between",fontWeight:"bold"}},i.a.createElement(s.Link,{to:"/about",className:"nav-item-hover"},"KURSSISTA"),i.a.createElement(s.Link,{to:"/#course-contents",className:"nav-item-hover"},"KURSSIN SISÄLTÖ"),i.a.createElement(s.Link,{to:"/faq",className:"nav-item-hover"},"FAQs"),i.a.createElement(s.Link,{to:"/companies",className:"nav-item-hover"},"YRITYSESITTELYT")))},u=function(e){var a=e.children;return i.a.createElement("div",null,i.a.createElement(c,null),a)};u.propTypes={children:r.a.node.isRequired};a.a=u},150:function(e,a,t){e.exports=t.p+"static/hgin_yliopisto-30c68104749d830b6cef6ea8c6339b16.png"},151:function(e,a,t){e.exports=t.p+"static/houston_logo-356bd2a9a75b44bdf7897b2cdd387600.png"},154:function(e,a,t){"use strict";t.d(a,"a",function(){return s});t(28),t(191);var n=t(4),r=t.n(n),o=t(0),i=t.n(o),s=function(e){var a=e.children,t=e.largeMargin,n=e.className,r=e.childrenClassName,o=e.backgroundColor,s=e.props;return i.a.createElement("div",Object.assign({className:"triple-border "+n+" "+(t?"triple-border--large-margin":""),style:{padding:t?"":"0.2em"}},s),i.a.createElement("div",{className:"triple-border__container "+r,style:{backgroundColor:o}},a))};s.defaultProps={className:"",childrenClassName:"",largeMargin:!1,backgroundColor:"transparent"},s.propTypes={children:r.a.node.isRequired,className:r.a.string,childrenClassName:r.a.string,largeMargin:r.a.bool,backgroundColor:r.a.string}},161:function(e,a,t){var n;e.exports=(n=t(185))&&n.default||n},167:function(e,a,t){"use strict";var n=t(422),r=t(138),o=t(4),i=t.n(o),s=t(0),l=t.n(s),c=t(423),u=t.n(c);function m(e){var a=e.description,t=e.lang,o=e.meta,i=e.keywords,s=e.title;return l.a.createElement(r.StaticQuery,{query:d,render:function(e){var n=a||e.site.siteMetadata.description;return l.a.createElement(u.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=m;var d="1025518380"},185:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),r=t.n(n),o=t(4),i=t.n(o),s=t(50),l=t(2),c=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=c},186:function(e,a,t){},188:function(e,a,t){},189:function(e,a,t){},190:function(e,a,t){},191:function(e,a,t){},422:function(e){e.exports={data:{site:{siteMetadata:{title:"Fullstack 2019",description:"",author:"Houston Inc. Consulting oy"}}}}}}]);
//# sourceMappingURL=0-eda1c604d7b2a3136946.js.map