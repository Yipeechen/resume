(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{111:function(e,n,t){"use strict";t.r(n);var r=t(85),a=t.n(r),o=t(86),i=t.n(o),u=t(58),c=t.n(u),l=t(87),s=t.n(l),p=t(89),f=t.n(p),d=t(91),m=t.n(d),v=t(10),h=t.n(v),g=t(3),y=t.n(g),b=t(0),w=t.n(b),x=t(1),T=t.n(x),k=t(20),P=t(2);function E(){var e=y()(["\n  background-color: ",";\n  flex: 2;\n  padding: 9.5px;\n  outline: none;\n  border: 0;\n  cursor: pointer;\n"]);return E=function(){return e},e}function S(){var e=y()(["\n  margin-right: 8px;\n  outline: none;\n  flex: 10;\n  font-size: 16px;\n  line-height: 2;\n  border: 1px solid ",";\n  padding: 0 0 0 8px;\n"]);return S=function(){return e},e}function O(){var e=y()(["\n    width: 100%;\n  "]);return O=function(){return e},e}function j(){var e=y()(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 0 auto;\n  ","\n"]);return j=function(){return e},e}var R=P.d.div(j(),(function(e){return e.theme.tablet_mobile(O())})),D=P.d.input.attrs({type:"text",placeholder:"搜尋"})(S(),(function(e){return e.theme.color.grey})),M=P.d.button.attrs({type:"button"})(E(),(function(e){return e.theme.color.grey})),V=function(e){var n=e.searchTerm,t=e.updateSearchTerm,r=e.fetchPlaylist,a=e.resetPlaylist;return w.a.createElement(R,null,w.a.createElement(D,{onChange:function(e){var n=e.target.value;t(n)},onKeyUp:function(e){13===(e.keyCode||e.which)&&n&&(a(),r({searchTerm:n}))},value:n}),w.a.createElement(M,{onClick:function(){n&&(a(),r({searchTerm:n}))}},"Search"))};V.propTypes={fetchPlaylist:T.a.func,resetPlaylist:T.a.func,searchTerm:T.a.string,updateSearchTerm:T.a.func},V.defaultProps={fetchPlaylist:null,resetPlaylist:null,searchTerm:"",updateSearchTerm:null};var I=V,U=t(8),F=t.n(U);var C={convertISOtoTimestamp:function(e){return new Date(e).getTime()},relativeNow:function(e){var n=(new Date).getTime()-e;if(n<36e5){var t=Math.floor(n/6e4);return 0===t?"剛剛":"".concat(t," 分鐘前")}if(n<864e5){var r=Math.floor(n/36e5);return"".concat(r," 小時前")}if(n<6048e5){var a=Math.floor(n/864e5);return"".concat(a," 天前")}if(n<2592e6){var o=Math.floor(n/6048e5);return"".concat(o," 週前")}if(n<31104e6){var i=Math.floor(n/2592e6);return"".concat(i," 月前")}var u=Math.floor(n/31104e6);return"".concat(u," 年前")}};function N(){var e=y()(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  line-height: 2rem;\n  max-height: 4rem;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n"]);return N=function(){return e},e}function q(){var e=y()(["\n  grid-area: info;\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n"]);return q=function(){return e},e}function J(){var e=y()(["\n  grid-area: title;\n  color: #000;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  line-height: 2rem;\n  max-height: 4rem;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  text-align: left;\n"]);return J=function(){return e},e}function L(){var e=y()(["\n  margin-top: -4px;\n  width: 95%;\n  border-radius: 50%;\n"]);return L=function(){return e},e}function A(){var e=y()(["\n  grid-area: avatar;\n"]);return A=function(){return e},e}function _(){var e=y()(['\n  margin: 8px auto;\n  display: grid;\n  grid-template-columns: 2fr 10fr;\n  grid-template-rows: auto;\n  grid-gap: 8px 8px;\n  grid-template-areas:\n  "avatar title"\n  "avatar info";\n']);return _=function(){return e},e}function z(){var e=y()(["\n  width: 100%;\n  background: ",";\n"]);return z=function(){return e},e}function K(){var e=y()(["\n  overflow: hidden;\n  width: 100%;\n  text-align: center;\n\n  &:empty {\n    position: relative; \n    background: ",";\n    min-height: 200px;\n    &::after {\n      display: block; \n      content: ''; \n      position: absolute; \n      width: 100%; \n      height: 100%; \n      transform: translateX(-100%); \n      background: -webkit-gradient(linear, left top, right top,\n                  from(transparent),  \n                  color-stop(rgba(255, 255, 255, 0.2)), \n                  to(transparent)); \n                    \n      background: linear-gradient(90deg, transparent, \n                  rgba(255, 255, 255, 0.2), transparent); \n      animation: "," 0.8s infinite;\n    }\n  }\n"]);return K=function(){return e},e}function B(){var e=y()(["\n  100% { \n    transform: translateX(100%); \n  } \n"]);return B=function(){return e},e}function G(){var e=y()(["\n    grid-template-columns: repeat(1 ,1fr);\n  "]);return G=function(){return e},e}function H(){var e=y()(["\n    grid-template-columns: repeat(3 ,1fr);\n  "]);return H=function(){return e},e}function Q(){var e=y()(["\n  display: grid;\n  grid-template-columns: repeat(4 ,1fr);\n  grid-gap: 32px 16px;\n  margin: 48px auto;\n  ","\n  ","\n"]);return Q=function(){return e},e}var W=P.d.div(Q(),(function(e){return e.theme.tablet(H())}),(function(e){return e.theme.mobile(G())})),X=Object(P.e)(B()),Z=P.d.a.attrs((function(e){return{href:"https://www.youtube.com/watch?v=".concat(e.videoId),target:"_blank"}}))(K(),(function(e){return e.theme.color.grey}),X),Y=P.d.img.attrs((function(e){return{src:e.img}}))(z(),(function(e){return e.theme.color.grey})),$=P.d.div(_()),ee=P.d.div(A()),ne=P.d.img.attrs({src:"https://via.placeholder.com/400?text=avatar"})(L()),te=P.d.h5(J()),re=P.d.div(q(),(function(e){return e.theme.color.greyDark})),ae=P.d.p(N()),oe=function(e){var n=e.cardDetail;return w.a.createElement(w.a.Fragment,null,n?w.a.createElement(Z,{videoId:n.videoId},w.a.createElement(Y,{img:n.img}),w.a.createElement($,null,w.a.createElement(ee,null,w.a.createElement(ne,null)),w.a.createElement(te,null,n.title),w.a.createElement(re,null,w.a.createElement(ae,null,n.channelTitle),n.publishTime))):w.a.createElement(Z,null))};oe.propTypes={cardDetail:T.a.object},oe.defaultProps={cardDetail:{}};var ie=function(e){var n=e.data,t=Object(k.c)((function(e){return e.yt.loading}));return w.a.createElement(W,null,n.map((function(e,n){var t,r,a,o,i;return w.a.createElement(oe,{key:n,cardDetail:{videoId:null==e||null===(t=e.id)||void 0===t?void 0:t.videoId,img:null==e||null===(r=e.snippet)||void 0===r?void 0:r.thumbnails.medium.url,title:null==e||null===(a=e.snippet)||void 0===a?void 0:a.title,channelTitle:null==e||null===(o=e.snippet)||void 0===o?void 0:o.channelTitle,publishTime:C.relativeNow(C.convertISOtoTimestamp(null==e||null===(i=e.snippet)||void 0===i?void 0:i.publishedAt))}})})),t&&F()(Array(8)).map((function(e,n){return w.a.createElement(oe,{key:n,cardDetail:null})})))};ie.propTypes={data:T.a.array},ie.defaultProps={data:[]};var ue=ie,ce=t(59),le=t.n(ce),se=t(60),pe=t.n(se),fe=t(6),de=t(93);function me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var ve,he,ge=(ve={timeout:1e4,headers:{"content-type":"application/json;charset=UTF-8"},baseURL:"https://www.googleapis.com/youtube/v3",interceptors:{response:function(e){return e.data}}},(he=t.n(de).a.create(ve)).interceptors.request.use((function(e){var n,t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?me(Object(t),!0).forEach((function(n){h()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.data),r={url:"".concat(e.baseURL).concat(e.url),method:e.method,params:e.params,data:t};return console.info("REQUEST",JSON.stringify(r)),null!==(n=ve.interceptors)&&void 0!==n&&n.request?ve.interceptors.request(e):e})),he.interceptors.response.use((function(e){var n,t={status:e.status,url:e.config.url,data:e.data},r=JSON.stringify(t);return r.length>300&&(r="".concat(r.slice(0,300)," ...more}")),console.info("RESPONSE_SUCCESS",r),e.data=e.data||void 0,null!==(n=ve.interceptors)&&void 0!==n&&n.response?ve.interceptors.response(e):e.data}),(function(e){var n,t,r={status:null===(n=e.response)||void 0===n?void 0:n.status,code:e.code,message:e.message,url:null===(t=e.config)||void 0===t?void 0:t.url};return console.info("REQUEST_FAILURE",JSON.stringify(r)),Promise.reject(e)})),he),ye=function(e){return ge(e)},be="AIzaSyBKKsfmCBsnM1RTiewoWD-O1qf5fZaw5fo",we=function(){var e=pe()(le.a.mark((function e(n){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye({url:"/videos",method:"GET",params:{part:"snippet",chart:"mostPopular",pageToken:n.nextPageToken,maxResults:12,key:be}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),xe=function(){var e=pe()(le.a.mark((function e(n){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye({url:"/search",method:"GET",params:{part:"snippet",type:"video",pageToken:n.nextPageToken,q:n.searchTerm,maxResults:12,key:be}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function Te(){return function(e){e({type:fe.a})}}function ke(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=m()(e);if(n){var a=m()(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return f()(this,t)}}function Pe(){var e=y()(["\n  margin: 40px auto;\n  width: 90%;\n"]);return Pe=function(){return e},e}var Ee=P.d.div(Pe()),Se=function(e){s()(t,e);var n=ke(t);function t(e){var r;return a()(this,t),r=n.call(this),h()(c()(r),"componentDidMount",(function(){var e=r.props.onFetchMostPopularVideo;window.addEventListener("scroll",r.infiniteScroll),e({})})),h()(c()(r),"componentWillUnmount",(function(){window.removeEventListener("scroll",r.infiniteScroll)})),h()(c()(r),"infiniteScroll",(function(){var e=r.props,n=e.videos,t=e.onSearchVideo,a=e.nextPageToken,o=e.loading,i=e.onFetchMostPopularVideo,u=r.state.searchTerm,c=window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-300;n.length&&a&&!o&&c&&(u?t({searchTerm:u,nextPageToken:a}):i({nextPageToken:a}))})),h()(c()(r),"updateSearchTerm",(function(e){r.setState({searchTerm:e})})),r.state={searchTerm:""},r}return i()(t,[{key:"render",value:function(){var e=this.props,n=e.videos,t=e.onSearchVideo,r=e.onResetPlaylist,a=this.state.searchTerm;return w.a.createElement(Ee,null,w.a.createElement(I,{searchTerm:a,updateSearchTerm:this.updateSearchTerm,fetchPlaylist:t,resetPlaylist:r}),w.a.createElement(ue,{data:n}))}}]),t}(w.a.Component);Se.propTypes={loading:T.a.bool,nextPageToken:T.a.string,videos:T.a.array,onFetchMostPopularVideo:T.a.func,onResetPlaylist:T.a.func,onSearchVideo:T.a.func},Se.defaultProps={loading:!1,nextPageToken:"",videos:[],onFetchMostPopularVideo:null,onResetPlaylist:null,onSearchVideo:null};n.default=Object(k.b)((function(e){return{videos:e.yt.videos,loading:e.yt.loading,nextPageToken:e.yt.nextPageToken}}),(function(e){return{onFetchMostPopularVideo:function(n){return e((t=n.nextPageToken,r=void 0===t?null:t,function(){var e=pe()(le.a.mark((function e(n){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:fe.b}),e.prev=1,e.next=4,we({nextPageToken:r});case 4:t=e.sent,n((o={items:t.items,nextPageToken:t.nextPageToken},{type:fe.d,payload:o})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn(e.t0),n((a=e.t0,{type:fe.c,payload:a}));case 12:case"end":return e.stop()}var a,o}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()));var t,r},onSearchVideo:function(n){return e((r=(t=n).searchTerm,a=t.nextPageToken,o=void 0===a?null:a,function(){var e=pe()(le.a.mark((function e(n){var t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:fe.e}),e.prev=1,e.next=4,xe({nextPageToken:o,searchTerm:r});case 4:t=e.sent,n((i={items:t.items,nextPageToken:t.nextPageToken},{type:fe.g,payload:i})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn(e.t0),n((a=e.t0,{type:fe.f,payload:a}));case 12:case"end":return e.stop()}var a,i}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()));var t,r,a,o},onResetPlaylist:function(){return e(Te())}}}))(Se)}}]);