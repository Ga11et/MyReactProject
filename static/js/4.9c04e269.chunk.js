/*! For license information please see 4.9c04e269.chunk.js.LICENSE.txt */
(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[4],{230:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(3),c=(n(0),n(231)),o=n.n(c),i=n(2),a=function(t){return Object(i.jsx)("span",Object(r.a)(Object(r.a)({className:o.a.item},t),{},{children:t.content}))}},231:function(t,e,n){t.exports={item:"error_item__2NDaC"}},232:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var r=function(t){if(void 0===t)return"Required field"},c=function(t){return function(e){if(e&&e.length>t)return"Maximum: ".concat(t," simbols")}}},234:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(3),c=n(57),o=(n(0),n(17)),i=n(7),a=n(2),s=["isAuth"];function u(t){return Object(o.b)((function(t){return{isAuth:t.auth.isAuth}}))((function(e){var n=e.isAuth,o=Object(c.a)(e,s);return n?Object(a.jsx)(t,Object(r.a)({},o)):Object(a.jsx)(i.a,{to:"/login"})}))}},235:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(61);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){c=!0,o=s}finally{try{r||null==a.return||a.return()}finally{if(c)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},241:function(t,e,n){"use strict";var r=n(3),c=n(60),o=n(57),i=n(230),a=n(242),s=n.n(a),u=n(243),l=n.n(u),f=(n(0),n(2)),j=["input","meta"];e.a=function(t){var e=t.input,n=t.meta,a=Object(o.a)(t,j),u=n.touched&&n.error;return Object(f.jsxs)("div",{className:s.a.main,children:[Object(f.jsx)("input",Object(r.a)(Object(r.a)(Object(r.a)({},e),a),{},{className:l()(Object(c.a)({},s.a.error,u))})),u?Object(f.jsx)(i.a,{content:n.error}):null]})}},242:function(t,e,n){t.exports={main:"Input_main__3cdLk",error:"Input_error__2s9Uc"}},243:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var i=c.apply(null,r);i&&t.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&t.push(a);else t.push(r.toString())}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):void 0===(r=function(){return c}.apply(e,[]))||(t.exports=r)}()},244:function(t,e,n){"use strict";function r(t,e){return t===e}function c(t,e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,c=0;c<r;c++)if(!t(e[c],n[c]))return!1;return!0}function o(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return e}n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f}));var i=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(){for(var e=arguments.length,r=Array(e),c=0;c<e;c++)r[c]=arguments[c];var i=0,a=r.pop(),s=o(r),u=t.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(n)),l=t((function(){for(var t=[],e=s.length,n=0;n<e;n++)t.push(s[n].apply(null,arguments));return u.apply(null,t)}));return l.resultFunc=a,l.dependencies=s,l.recomputations=function(){return i},l.resetRecomputations=function(){return i=0},l}}((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,o=null;return function(){return c(e,n,arguments)||(o=t.apply(null,arguments)),n=arguments,o}}));var a=function(t){return t.findpeople},s={isLoadingSelector:i(a,(function(t){return t.isLoading})),getPeopleSelector:i(a,(function(t){return t.people})),countPagesSelector:i(a,(function(t){return t.countPages})),countPeopleOnPageSelector:i(a,(function(t){return t.countPeopleOnPage})),activePageSelector:i(a,(function(t){return t.active}))},u=function(t){return t.contentPage},l={profileInfoSelector:i(u,(function(t){return t.profile})),statusSelector:i(u,(function(t){return t.status})),isSuccessedSelector:i(u,(function(t){return t.successed}))},f={authIdSelector:i((function(t){return t.auth}),(function(t){return t.userId}))}},257:function(t,e,n){t.exports={item:"description_item__3PL5U",profile:"description_profile__2ET0W",change:"description_change__9lSCx",noPic:"description_noPic__21Vrp",description:"description_description__1_gO7",redact:"description_redact__22dQr",searchWork:"description_searchWork__2kdwL",contacts:"description_contacts__-OZnv"}},306:function(t,e,n){t.exports={main:"content_main__2xxUk"}},307:function(t,e,n){t.exports={item:"posts_item__2TLVC",error:"posts_error__C-IQO",swap:"posts_swap__3Htqk"}},308:function(t,e,n){t.exports={item:"post_item__aF53b"}},309:function(t,e,n){t.exports={main:"infoForm_main__EL0W0"}},310:function(t,e,n){t.exports={main:"profileStatus_main__zVw6H"}},319:function(t,e,n){"use strict";n.r(e);var r=n(306),c=n.n(r),o=n(3),i=n(17),a=n(57),s=n(307),u=n.n(s),l=n(308),f=n.n(l),j=n.p+"static/media/miku.43c6175c.jpg",b=n(0),p=n(2),d=function(t){return Object(p.jsxs)("div",{className:f.a.item,children:[Object(p.jsx)("img",{src:j,alt:""}),Object(p.jsx)("p",{children:t.message})]})},m=n(112),h=n(113),O=n(232),x=n(230),v=["input","meta"],g=Object(O.a)(30),_=function(t){var e=t.input,n=t.meta,r=Object(a.a)(t,v),c=n.error&&n.touched;return Object(p.jsxs)("div",{className:c?u.a.error:"",children:[Object(p.jsx)("textarea",Object(o.a)(Object(o.a)({},e),r)),c&&Object(p.jsx)(x.a,{content:n.error})]})},S=Object(h.a)({form:"posts"})((function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)(m.a,{name:"writePost",component:_,validate:[O.b,g]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{children:"Send"})]})})),y=function(t){var e=t.posts.map((function(t){return Object(p.jsx)(d,{message:t.message},t.id)}));return Object(p.jsxs)("div",{className:u.a.item,children:[Object(p.jsx)(S,{onSubmit:function(e){t.createNewPost(e.writePost)}}),Object(p.jsx)("div",{className:u.a.swap,children:e})]})},P=n(62),I={createNewPost:P.a.createNewPost,setProfile:P.a.setProfile},N=Object(i.b)((function(t){return{posts:t.contentPage.posts}}),I)((function(t){return Object(p.jsx)(y,Object(o.a)({},t))})),k=n(235),w=n(257),A=n.n(w),F=n(309),M=n.n(F),C=n(241),E=function(t){var e=t.contacts,n=t.handleSubmit,r=t.error;return Object(p.jsxs)("form",{className:M.a.main,onSubmit:n,children:[Object(p.jsx)(m.a,{component:C.a,name:"fullName",placeholder:"Write your name"}),Object(p.jsx)(m.a,{component:"input",type:"checkbox",name:"lookingForAJob",id:"areYouWork"}),Object(p.jsx)("label",{htmlFor:"areYouWork",children:"Are you work?"}),Object(p.jsx)(m.a,{component:C.a,name:"lookingForAJobDescription",placeholder:"Where you work"}),Object(p.jsx)(m.a,{component:C.a,name:"aboutMe",placeholder:"Tell about you"}),Object(p.jsx)("h4",{children:"Contacts:"}),Object.keys(e).map((function(t){return Object(p.jsx)(m.a,{component:C.a,name:"contacts.".concat(t),placeholder:t},t)})),r&&Object(p.jsx)(x.a,{content:r}),Object(p.jsx)("button",{children:"Save"})]})},W=function(t){var e=t.profileInfo,n=t.searchIcon,r=t.isMyProfile,c=t.Contact,o=t.setEditMode;return Object(p.jsxs)(p.Fragment,{children:[e.lookingForAJob?Object(p.jsxs)("div",{className:A.a.searchWork,children:[Object(p.jsx)("img",{src:n,alt:"searchIcon"}),Object(p.jsx)("label",{children:e.lookingForAJobDescription})]}):null,Object(p.jsx)("div",{className:A.a.contacts,children:Object.keys(e.contacts).filter((function(t){return t in e.contacts})).map((function(t){return Object(p.jsx)(c,{name:t,data:e.contacts[t]},t)}))}),Object(p.jsxs)("p",{className:A.a.description,children:[" ",e.aboutMe]}),r&&Object(p.jsx)("button",{className:A.a.redact,onClick:function(){o(!0)},children:"Redact"})]})},L=n(310),U=n.n(L),J=["isMyProfile"],D=function(t){var e=t.isMyProfile,n=Object(a.a)(t,J),r=Object(b.useState)(!1),c=Object(k.a)(r,2),o=c[0],i=c[1],s=Object(b.useState)(n.status),u=Object(k.a)(s,2),l=u[0],f=u[1],j=function(){o?(i(!1),n.putStatus(l)):e&&i(!0)},d=Object(b.createRef)();return Object(p.jsx)("div",{className:U.a.main,children:o?Object(p.jsx)("input",{ref:d,onChange:function(){d.current&&f(d.current.value)},autoFocus:!0,onBlur:function(){j()},value:l}):Object(p.jsx)("p",{onDoubleClick:function(){j()},children:l})})},R=["searchIcon","isMyProfile","profileFormSubmit","changeProfilePhoto","profileInfo"],T=Object(h.a)({form:"profileForm"})(E),V=function(t){var e=t.name,n=t.data;return n?Object(p.jsxs)("p",{children:[e,": ",Object(p.jsx)("span",{children:n})]}):null},q=function(t){var e=t.searchIcon,n=t.isMyProfile,r=t.profileFormSubmit,c=t.changeProfilePhoto,o=t.profileInfo,i=Object(a.a)(t,R),s=Object(b.useState)(!1),u=Object(k.a)(s,2),l=u[0],f=u[1];return Object(p.jsx)("div",{className:A.a.item,children:Object(p.jsxs)("section",{className:A.a.profile,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:o.photos.large?o.photos.large:i.altphoto,alt:"avatar"}),Object(p.jsxs)("div",{className:A.a.change,children:[Object(p.jsx)("input",{type:"file",id:"file",onChange:function(t){c(t.target.files[0])}}),n&&Object(p.jsx)("label",{htmlFor:"file",children:"Change"})]})]}),Object(p.jsxs)("div",{className:A.a.noPic,children:[Object(p.jsx)("h3",{children:o.fullName}),Object(p.jsx)(D,{status:i.status,putStatus:i.putStatus,isMyProfile:n}),l?Object(p.jsx)(T,{contacts:o.contacts,initialValues:o,setEditMode:f,onSubmit:function(t){r(t).then((function(){f(!1)}))}}):Object(p.jsx)(W,{setEditMode:f,Contact:V,profileInfo:o,searchIcon:e,isMyProfile:n})]})]})})},H=n.p+"static/media/search.6174e09b.svg",Q=n(7),Y=n.p+"static/media/user.5edf0c2b.jpg",z=n(234),B=n(46),Z=n(244),G=n(30),K=["authId","getUserInfo"],X={getUserInfo:P.b.getUserInfo,putStatus:P.b.putStatus,setProfile:P.a.setProfile,changeProfilePhoto:P.b.changeProfilePhoto,profileFormSubmit:P.b.profileFormSubmit},$=Object(G.d)(Q.g,z.a,Object(i.b)((function(t){return{searchIcon:H,altphoto:Y,profileInfo:Z.b.profileInfoSelector(t),status:Z.b.statusSelector(t),authId:Z.a.authIdSelector(t),isSuccessed:Z.b.isSuccessedSelector(t)}}),X))((function(t){var e=t.authId,n=t.getUserInfo,r=Object(a.a)(t,K),c=Object(b.useState)(r.match.params.userId),i=Object(k.a)(c,2),s=i[0],u=i[1],l=Object(b.useState)(r.isSuccessed),f=Object(k.a)(l,2),j=f[0],d=f[1],m=+s===+e;return Object(b.useEffect)((function(){u(r.match.params.userId)}),[r.match.params.userId]),Object(b.useEffect)((function(){d(r.isSuccessed)}),[r.isSuccessed]),Object(b.useMemo)((function(){s&&n(s)}),[s,n]),s?j?Object(p.jsx)(q,Object(o.a)({isMyProfile:m},r)):Object(p.jsx)(B.a,{}):Object(p.jsx)(Q.a,{to:"profile/".concat(e)})}));e.default=function(t){return Object(p.jsxs)("div",{className:c.a.main,children:[Object(p.jsx)($,{}),Object(p.jsx)(N,{})]})}}}]);
//# sourceMappingURL=4.9c04e269.chunk.js.map