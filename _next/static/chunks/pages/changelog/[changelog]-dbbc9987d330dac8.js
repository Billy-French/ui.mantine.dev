(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{2907:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/[changelog]",function(){return o(8599)}])},1707:function(e,r,o){"use strict";o.d(r,{u:function(){return k}});var n=o(5893),t=o(7294),a=o(8574),c=o(4761),i=o(7414),s=o(1111),d=o(4332),l=o(3731),u=o(6817),m=o(6768),p=o(8404);function f(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var h=(0,u.k)((function(e){return{canvas:{borderRadius:e.radius.md,border:"".concat((0,m.h)(1)," solid ").concat("dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[2]),backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,"&:not(:first-of-type)":{marginTop:"calc(".concat(e.spacing.xl," * 2)")}},body:f({backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],padding:"".concat(e.spacing.xs," ").concat(e.spacing.md),borderBottomRightRadius:"calc(".concat(e.radius.md," - ").concat((0,m.h)(1),")"),borderBottomLeftRadius:"calc(".concat(e.radius.md," - ").concat((0,m.h)(1),")")},e.fn.smallerThan("sm"),{padding:0}),bodyRaw:f({padding:0},"& .".concat((0,p.A)("preview")),{padding:(0,m.h)(4),borderTopRightRadius:0,borderTopLeftRadius:0}),bodyWithCode:{padding:0,backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.white},previewDimmed:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},code:{borderBottomRightRadius:"calc(".concat(e.radius.md," - ").concat((0,m.h)(1),")"),borderBottomLeftRadius:"calc(".concat(e.radius.md," - ").concat((0,m.h)(1),")"),borderTopRightRadius:0,borderTopLeftRadius:0},preview:f({ref:(0,p.A)("preview"),backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,padding:e.spacing.md,borderRadius:e.radius.md,position:"relative"},e.fn.smallerThan("sm"),{padding:e.spacing.xs,borderTopRightRadius:0,borderTopLeftRadius:0})}})),b=o(8393),g=o(9834),v=(0,o(853).Z)("database","IconDatabase",[["path",{d:"M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0",key:"svg-0"}],["path",{d:"M4 6v6a8 3 0 0 0 16 0v-6",key:"svg-1"}],["path",{d:"M4 12v6a8 3 0 0 0 16 0v-6",key:"svg-2"}]]),y=o(2972);function w(e){var r=e.state,o=e.onToggle,t="code"===r?v:y.Z;return(0,n.jsx)(b.u,{label:"View ".concat("code"===r?"mockdata":"code"),position:"left",withArrow:!0,arrowSize:4,children:(0,n.jsx)(g.A,{onClick:o,sx:{position:"absolute",top:(0,m.h)(42),right:(0,m.h)(10),zIndex:1e3},children:(0,n.jsx)(t,{size:"1rem",stroke:1.5})})})}function x(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function j(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(r){x(e,r,o[r])}))}return e}function k(e){var r,o=(0,t.useState)("preview"),u=o[0],m=o[1],p=(0,t.useState)("blue"),f=p[0],b=p[1],g=(0,t.useState)("code"),v=g[0],y=g[1],k=h(),O=k.classes,R=k.cx,S=s[e.component],C=e.attributes.props;return(0,n.jsxs)("div",{className:O.canvas,children:[(0,n.jsx)(l.X,j({},e,{state:u,primaryColor:f,onStateChange:m,onPrimaryColorChange:b})),(0,n.jsx)("div",{className:R(O.body,(r={},x(r,O.bodyWithCode,"code"===u),x(r,O.bodyRaw,!e.attributes.canvas.center),r)),children:"preview"===u?(0,n.jsx)("div",{className:R(O.preview,x({},O.previewDimmed,e.attributes.dimmed)),style:{zIndex:e.zIndex},children:(0,n.jsx)(d.M,{canvas:e.attributes.canvas,children:(0,n.jsx)(c.Me,{inherit:!0,theme:{primaryColor:f},children:(0,n.jsx)(S,j({},e.attributes.props))})})}):(0,n.jsxs)(i.x,{sx:{position:"relative"},children:[C&&(0,n.jsx)(w,{state:v,onToggle:function(){return y((function(e){return"code"===e?"mockdata":"code"}))}}),(0,n.jsx)(a.p,{language:"code"===v?"tsx":"json",classNames:{code:O.code},children:"code"===v?e.code:JSON.stringify(C,null,2)})]})})]})}},8599:function(e,r,o){"use strict";o.r(r),o.d(r,{__N_SSG:function(){return f},default:function(){return h}});var n=o(5893),t=o(7294),a=o(9008),c=o(1163),i=o(2445),s=o(9236),d=o(6768),l=o(5117),u=o(2146),m=o(1707);function p(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var f=!0,h=function(e){var r=e.components,o=(0,c.useRouter)(),f="New components: ".concat((0,u.j)(o.query.changelog.replace("-"," "))),h=r.map((function(e,o){return(0,t.createElement)(m.u,function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(r){p(e,r,o[r])}))}return e}({},e,{key:e.slug,zIndex:r.length-o}))}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{children:(0,n.jsx)("title",{children:"".concat(f," | Mantine UI")})}),(0,n.jsxs)(i.W,{size:"xl",mt:50,children:[(0,n.jsx)(s.D,{sx:function(e){return p({fontFamily:"Greycliff CF, ".concat(e.fontFamily)},e.fn.smallerThan(500),{fontSize:(0,d.h)(26)})},fw:900,children:f}),(0,n.jsxs)(l.x,{size:"sm",color:"dimmed",mb:"xl",mt:"sm",children:[r.length," new components were added"]}),h]})]})}}},function(e){e.O(0,[630,680,546,604,774,888,179],(function(){return r=2907,e(e.s=r);var r}));var r=e.O();_N_E=r}]);