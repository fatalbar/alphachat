(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{39053:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/room",function(){return t(77329)}])},33246:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var s=t(85893),n=t(67294),o=t(94184),a=t.n(o),i=t(42138),c=t(70130),u=t.n(c);let l=(0,n.memo)(e=>{let{rounded:r,children:t,className:n}=e;return(0,s.jsx)(i.x,{direction:"column",className:a()(u().wrap,{[u().rounded]:r},n),children:t})})},77329:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return eb},default:function(){return ev}});var s,n=t(85893),o=t(5152),a=t.n(o),i=t(94184),c=t.n(i),u=t(67294),l=t(24697),m=t(27484),d=t.n(m),h=t(32819),f=t(88767),_=function(e){let{connector:r,key:t}=e,{data:s,isFetchingNextPage:n,fetchNextPage:o,hasNextPage:a}=(0,f.useInfiniteQuery)([t],e=>{let{pageParam:t}=e;return r(t)},{refetchOnWindowFocus:!1,getNextPageParam:e=>e.hasNextPage?{timestamp:e.timestamp}:void 0}),{pages:i}=s||{},c=(0,u.useMemo)(()=>(i||[]).reduce((e,r)=>{let{list:t}=r;return[...e,...t||[]]},[]),[i]);return{isFetchingNextPage:n,data:c,total:(null==i?void 0:i.length)?i[i.length-1].total:0,fetchNextPage:o,hasNextPage:a||!1}},p=t(45007),g=t(11163),y=t(53920),b=t(97094),v=t(5056),x=t(57979),w=t(48764).Buffer;class M{generatePrivateKeyByType(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex";return"hex"===r?w.from(e,"hex").toString("base64"):e}setPrivateKey(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex";return this._privateKey=this.generatePrivateKeyByType(e,r),this}async encrypt(e){if(!this._privateKey)throw Error("Private key required");return b.Crypto.encrypt(e,{algo:v.CryptoAlgorithm.AES,encoding:v.Encoding.base64,key:this._privateKey,cipher:x.Cipher.AES_256_GCM})}async decrypt(e){if(!this._privateKey)throw Error("Private key required");if(!e)throw Error("Encryption is not defined");return e.key=this._privateKey,b.Crypto.decrypt(e)}constructor(){this._privateKey=""}}var C=t(48764).Buffer;class R{async encryptMessage(e,r){if(!e)throw Error("Message required for encription service");if("string"!=typeof e)throw Error("Message must be string");if(!r)throw Error("Private key required for encription service");return this._cipher.setPrivateKey(r).encrypt(C.from(e,"utf-8").toString("binary"))}async decryptMessage(e,r){if(!e)throw Error("Encription required for encription service");if(!r)throw Error("Private key required for encription service");return C.from(await this._cipher.setPrivateKey(r).decrypt(e),"binary").toString("utf-8")}setMessages(e){return this._messages=e,this}async getMessagesDecrypted(e){return Promise.all(this.messages.map(async r=>{let{encryption:t,senderName:s,...n}=r,o=await this.decryptMessage(JSON.parse(t),e).catch(()=>this.undecryptedMessageText);return{...n,message:o,senderName:this._helpers.textFromBase64(s)}}))}async getMessageDecrypted(e,r){if(!r)throw Error("Password required");if(!e)return null;let{encryption:t,senderName:s,...n}=e,o=await this.decryptMessage(JSON.parse(t),r).catch(()=>this.undecryptedMessageText);return{...n,message:o,senderName:this._helpers.textFromBase64(s)}}async getMessageDecryptedById(e,r){if(!r)throw Error("Password required");if(!e)throw Error("Message id required");let t=this._messages.find(r=>r.id===e);return t?this.getMessageDecrypted(t,r):null}async getMessage(e){if(!e)throw Error("Message id required");let r=this._messages.find(r=>r.id===e);return r||null}async getMessages(e){if(!(null==e?void 0:e.length))return[];let r=this._messages.filter(r=>!e.includes(r.id));return r||[]}get messages(){return this._messages}constructor(e){this._messages=[],this.undecryptedMessageText="This message cannot be decrypted";let{helperService:r,cipherService:t}=e||{};this._helpers=r,this._cipher=t}}var N=t(48764).Buffer;class j{textToBase64(e){return e&&"string"==typeof e?N.from(e).toString("base64"):""}textFromBase64(e){return e&&"string"==typeof e?N.from(e,"base64").toString("utf8"):""}bufferFromHex(e){return N.from(e,"hex")}}class k extends R{constructor(){super({helperService:new j,cipherService:new M})}}class E{setUsers(e){return this._users=e,this}getUsersDb(){return this._users}getUsersResponse(){return this._users.map(e=>{let{name:r,...t}=e;return{...t,name:this._helpers.textFromBase64(r)}})}getUserResponseById(e){if(!e)throw Error("User id required");let r=this._users.find(r=>{let{id:t}=r;return e===t});return r?{...r,name:this._helpers.textFromBase64(null==r?void 0:r.name)}:null}getUserDbById(e){if(!e)throw Error("User id required");let r=this._users.find(r=>{let{id:t}=r;return e===t});return r||null}getUsersResponseByIds(e){if(!(null==e?void 0:e.length))throw Error("Users ids are empty");return this._users.filter(r=>e.includes(r.id)).map(e=>{let{name:r,...t}=e;return{...t,name:this._helpers.textFromBase64(r)}})}getUsersDbByIds(e){if(!(null==e?void 0:e.length))throw Error("Users ids are empty");return this._users.filter(r=>e.includes(r.id))}get users(){return this._users}constructor(e){this._users=[];let{helperService:r,cipherService:t}=e||{};this._helpers=r,this._cipherService=t}}class I extends E{constructor(){super({helperService:new j,cipherService:new M})}}var P=t(6969);(s||(s={})).AVAILABLE="AVAILABLE";var U=t(34155);let S=U.env.NEXT_PUBLIC_REDIRECT_TIME||"300000",T=e=>{let{messages:r,setMessages:t,room:n}=e,o=(0,u.useRef)(new k),a=(0,u.useRef)(new I),[i,c]=(0,u.useState)(!1),[l,m]=(0,u.useState)(!1),d=(0,g.useRouter)(),{push:f}=d,{getRoomInfo:_,getAuthToken:b,getConnectPassword:v}=n,x=(0,u.useRef)(null),[w,M]=(0,u.useState)({}),C=(0,u.useRef)(null),R=(0,u.useRef)(),N=(0,u.useRef)(null),j=(0,P.D)(i),E=(0,u.useRef)([]),U=(0,u.useRef)(null),T=(0,u.useCallback)(()=>{let{userName:e}=_();x.current&&x.current.emit("joinRoom",e)},[_]),A=(0,u.useCallback)(()=>{t([]),M({}),C.current=null},[t]),B=(0,u.useCallback)(()=>{if(x.current){var e;x.current.emit("leaveRoom"),(null===(e=x.current)||void 0===e?void 0:e.connected)&&x.current.disconnect(),A()}},[A]),L=(0,u.useCallback)(async e=>{try{var r;let n=new Date().toISOString(),a=(0,p.Z)(),{userName:c,connectPassword:u}=_();t(r=>{var t;return[...r,{messageClientId:a,senderName:c,message:e,createdAt:n,updatedAt:n,id:"",senderId:(null===(t=C.current)||void 0===t?void 0:t.id)||""}]});let l={encryption:JSON.stringify(await o.current.encryptMessage(e,u)),messageClientId:a};i&&U.current===s.AVAILABLE&&(null===(r=x.current)||void 0===r?void 0:r.connected)?x.current.emit("message",l):E.current=[...E.current,l]}catch(e){}},[x,_,i,t]);(0,u.useEffect)(()=>{let e=()=>{x.current=(0,y.ZP)({query:{token:b()},reconnectionDelay:2e3,transports:["websocket"]});let r=async()=>{var e;(null===(e=x.current)||void 0===e?void 0:e.connected)&&x.current.disconnect(),A(),await (0,h.jL)().catch(e=>{}),f({pathname:"/",query:{deleted:!0}})},n=e=>{var r;(null===(r=x.current)||void 0===r?void 0:r.connected)&&x.current.disconnect(),l&&(A(),f("/"))},i=r=>{if(c(!1),"io server disconnect"===r){var t;null===(t=R.current)||void 0===t||t.call(R),R.current=e()}},u=e=>{Array.isArray(e)&&e.length&&M(r=>{let t={...r};return e.forEach(e=>{delete t[e]}),t})},m=async e=>{if(x.current){let r=a.current.setUsers([e]).getUserResponseById(e.id);r&&M(e=>({...e,[r.id]:r}))}},d=async e=>{if(x.current){let r=a.current.setUsers(e).getUsersResponse();M(r.reduce((e,r)=>({...e,[r.id]:r}),{}))}},_=async e=>{let r=a.current.setUsers(e).getUsersResponse();M(r.reduce((e,r)=>({...e,[r.id]:r}),{}))},p=async e=>{let r=await o.current.setMessages(e).getMessagesDecrypted(v());r.length&&t(e=>{let t=new Map(r.map(e=>[e.messageClientId,e])),s=e.map(e=>{let r=t.get(e.messageClientId);return r?(t.delete(e.messageClientId),r):e});return[...s,...t.values()].sort((e,r)=>new Date(e.createdAt).valueOf()-new Date(r.createdAt).valueOf())})},g=async e=>{e&&await p([e])},w=async e=>{(null==e?void 0:e.length)&&await p(e)},N=async()=>{c(!0)},j=()=>{E.current.length&&(E.current.forEach(e=>{x.current&&x.current.emit("message",e)}),E.current=[])},k=e=>{U.current=e,e===s.AVAILABLE&&j()},I=e=>{let r=a.current.setUsers([e]).getUserResponseById(e.id);C.current=r};return x.current.on("leaveRoom",u),x.current.on("newUserJoinedToRoom",m),x.current.on("usersUpdatedInRoom",d),x.current.on("message",g),x.current.on("messages",w),x.current.on("getRoomUsers",_),x.current.on("deleteRoom",r),x.current.on("getRoomStatus",k),x.current.on("getCurrentUser",I),x.current.on("connect_error",n),x.current.on("disconnect",i),x.current.on("connect",N),()=>{x.current&&(x.current.off("leaveRoom",u),x.current.off("newUserJoinedToRoom",m),x.current.off("usersUpdatedInRoom",d),x.current.off("getRoomUsers",_),x.current.off("message",g),x.current.off("messages",w),x.current.off("deleteRoom",r),x.current.off("getRoomStatus",k),x.current.off("getCurrentUser",I),x.current.off("connect_error",n),x.current.off("disconnect",i),x.current.off("connect",N))}};return R.current=e(),()=>{var e,r;null===(e=R.current)||void 0===e||e.call(R),(null===(r=x.current)||void 0===r?void 0:r.connected)&&x.current.disconnect()}},[b,A,f,v,l,t]),(0,u.useEffect)(()=>(N.current&&clearTimeout(N.current),!i&&j&&(N.current=setTimeout(()=>{m(!0)},Number(S))),()=>{N.current&&clearTimeout(N.current)}),[i,j]);let D=(0,u.useMemo)(()=>({socket:x,joinRoom:T,leaveRoom:B,sendMessage:L,messages:r,roomMembers:w,connected:i}),[x,T,B,L,r,w,i]);return D};var A=t(28760),B=()=>{let[e,r]=(0,u.useState)(0),t=(0,A.N)(),[s,n]=(0,u.useState)([]),o=_({connector:async s=>{let{timestamp:n=+d()()}=s||{};return(0,h.rZ)(n,50).then(async e=>({...e,list:await new k().setMessages(null==e?void 0:e.messages).getMessagesDecrypted(t.getConnectPassword())})).then(t=>(e?t.list.length&&r(e=>Math.max(0,e-t.list.length)):r(Math.max(0,(null==t?void 0:t.total)||0)),t))},key:"messages"}),a=(0,u.useMemo)(()=>({...o,data:[...o.data,...s].sort((e,r)=>new Date(e.updatedAt).valueOf()-new Date(r.updatedAt).valueOf()),pageSize:Math.abs(50)}),[o,s,50]),i=T({messages:a.data,setMessages:n,room:t});return{socket:i,room:t,messages:a,firstItemIndex:e,setFirstItemIndex:r}},L=t(81740),D=t(85217),q=t(79719),O=t(61802),F=t(67266),K=t.n(F);let J=(0,u.memo)(e=>{let{count:r,onClick:t,className:s,isMobile:o}=e;return(0,n.jsxs)(O.z,{variant:"base-link",className:c()(K().wrap,s,{[K().desktop]:!o}),onClick:t,children:[(0,n.jsx)("span",{children:"Users:"}),"\xa0",(0,n.jsx)("span",{className:K().count,children:r||0})]})});var X=t(89184),Z=t(36444),z=t(42138),W=t(98949),Q=t(15146),V=t(84144),G=t.n(V);let H=(0,u.memo)(e=>{let{name:r,className:t}=e;return(0,n.jsxs)(z.x,{direction:"row",alignItems:"center",className:t,children:[(0,n.jsx)(Q.J,{width:14,name:"profile",className:G().icon}),(0,n.jsx)("span",{className:G().name,children:r})]})});var Y=t(84045),$=t.n(Y);let ee=(0,u.memo)(e=>{let{list:r,className:t}=e;return(0,n.jsx)(z.x,{direction:"column",className:c()($().list,t),children:r.map(e=>{let{id:r,name:t}=e;return(0,n.jsx)(H,{name:t,className:$().item},r)})})});var er=t(35957),et=t.n(er);let es=(0,u.memo)(e=>{let{className:r,onClickCross:t,list:s}=e,{theme:o}=(0,Z.Fg)();return(0,n.jsxs)(z.x,{direction:"column",className:c()(et().wrap,r),children:[(0,n.jsxs)(z.x,{alignItems:"center",justifyContent:"space-between",className:et().header,children:[(0,n.jsx)(z.x,{children:(0,n.jsx)(X.T,{theme:o})}),(0,n.jsx)(z.x,{children:(0,n.jsx)(W.X,{theme:o,onClick:t})})]}),(0,n.jsxs)(z.x,{direction:"column",alignItems:"center",className:et().content,children:[(0,n.jsx)(J,{count:s.length,className:et().membersCount,onClick:t}),(0,n.jsx)(ee,{list:s,className:et().membersList})]})]})});var en=t(47357),eo=t(33246),ea=t(59713),ei=t(22091),ec=t.n(ei);let eu=(0,u.memo)(e=>{let{className:r,list:t,onLeaveRoom:s}=e,{isMobile:o}=(0,q.XA)();return(0,n.jsxs)(eo.Z,{rounded:!0,className:r,children:[(0,n.jsxs)(z.x,{direction:"column",className:ec().membersWrap,children:[(0,n.jsx)(J,{count:t.length,className:ec().count,isMobile:o}),(0,n.jsx)(ee,{list:t,className:ec().members})]}),(0,n.jsx)(z.x,{children:(0,n.jsx)(ea.d,{onLeaveRoom:s})})]})});var el=t(62985),em=t(1058),ed=t.n(em);let eh=(0,u.memo)(e=>{let{className:r,roomName:t,connectPassword:s}=e;return(0,n.jsxs)(z.x,{direction:"column",className:r,children:[(0,n.jsx)(el.r,{className:ed().accordion}),(0,n.jsx)(en.J,{connectPassword:s,domainUrl:(0,L.AT)(),roomName:t})]})}),ef=e=>{let r=e.reduce((e,r)=>{let{token:t,name:s}=r;return{...e,[t]:s}},{});return Object.entries(r).reduce((e,r)=>{let[t,s]=r;return[...e,{id:t,name:s}]},[])};var e_=t(91721),ep=t.n(e_);let eg=a()(()=>Promise.all([t.e(326),t.e(748)]).then(t.bind(t,15748)),{loadableGenerated:{webpack:()=>[15748]},ssr:!1}),ey=(0,u.memo)(()=>{let e=(0,u.useRef)(!0),r=(0,u.useRef)(null),t=(0,u.useRef)(null),s=(0,u.useRef)(),[o,a]=(0,u.useState)(!1),{isMobile:i}=(0,q.XA)(),m=(0,u.useCallback)(e=>{var t;null===(t=r.current)||void 0===t||t.scrollToIndex(e)},[]),d=(0,u.useCallback)(function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{m(e)},r)},[m]),{room:h,socket:f,messages:_,firstItemIndex:p}=B(),{connected:g,joinRoom:y,roomMembers:b}=f,v=(0,u.useMemo)(()=>_.data,[_]),{getRoomInfo:x,getAuthToken:w}=h,M=(0,u.useMemo)(()=>ef(Object.values(b)),[b]),C=(0,u.useCallback)(()=>{a(!0)},[]),R=(0,u.useCallback)(()=>{a(!1)},[]),N=(0,u.useMemo)(()=>x(),[x]),j=(0,u.useMemo)(()=>w(),[w]),k=(0,u.useCallback)(()=>{(null==v?void 0:v.length)&&d(v.length-1)},[v,d]),E=(0,u.useCallback)(e=>{f.sendMessage(e)},[f]),I=(0,u.useCallback)(e=>{t.current=e},[]),P=(0,u.useCallback)(()=>{if(!t.current)return;let r=t.current;r.scrollHeight<=r.scrollTop+r.offsetHeight+100?e.current=!0:e.current=!1},[]),U=(0,l.y1)(P,100);return(0,u.useEffect)(()=>{g&&y()},[y,g]),(0,u.useEffect)(()=>{e.current&&k()},[k]),(0,n.jsxs)(z.x,{direction:"column",className:c()(ep().wrap,{[ep().wrapMobile]:i}),children:[(0,n.jsx)(D.h,{authToken:j}),(0,n.jsxs)(z.x,{className:c()(ep().container,{[ep().containerMobile]:i}),children:[i&&(0,n.jsxs)(z.x,{justifyContent:"space-between",className:ep().mobileTop,children:[(0,n.jsx)(J,{count:M.length,onClick:C}),(0,n.jsx)(en.J,{domainUrl:(0,L.AT)(),roomName:N.roomName,connectPassword:N.connectPassword,className:ep().invationLinkMobile,mode:"two"})]}),!i&&(0,n.jsx)(eu,{className:ep().members,list:M}),i&&o&&(0,n.jsx)(es,{list:M,className:ep().mobileMembersCount,onClickCross:R}),(0,n.jsx)(z.x,{className:c()(ep().chat,{[ep().chatMobile]:i}),children:(0,n.jsx)(eg,{scrollerRef:I,forwardRef:r,messages:_.data,fetchNextPage:_.fetchNextPage,roomInfo:N,onSendMessage:E,firstItemIndex:p,pageSize:_.pageSize,isScrolling:U})}),!i&&(0,n.jsx)(eh,{className:ep().info,roomName:N.roomName,connectPassword:N.connectPassword})]})]})});var eb=!0,ev=()=>(0,n.jsx)(ey,{})},67266:function(e){e.exports={wrap:"ChatMembersCount_wrap__N6q0R",count:"ChatMembersCount_count__lRrn4",desktop:"ChatMembersCount_desktop__v_bCf"}},84045:function(e){e.exports={list:"ChatMembersList_list___EFof",item:"ChatMembersList_item___3Dpz"}},84144:function(e){e.exports={icon:"ChatMembersListItem_icon__nr9_A",name:"ChatMembersListItem_name___x8zk"}},35957:function(e){e.exports={wrap:"MobileChatMembers_wrap__Ri_ZU",header:"MobileChatMembers_header__sAkQP",content:"MobileChatMembers_content__emByh",membersCount:"MobileChatMembers_membersCount__ci8A4",membersList:"MobileChatMembers_membersList__GkWjI"}},22091:function(e){e.exports={membersWrap:"ChatMembers_membersWrap__aumlR",count:"ChatMembers_count__AtiPn"}},1058:function(e){e.exports={accordion:"Info_accordion__T_3DX"}},91721:function(e){e.exports={chat:"Room_chat__GEVR_",members:"Room_members__QlMm2",wrap:"Room_wrap__B4BkU",wrapMobile:"Room_wrapMobile__NxMQX",container:"Room_container__ct1tf",mobileMembersCount:"Room_mobileMembersCount__vpeDE",info:"Room_info__MbBHc",containerMobile:"Room_containerMobile__FO1hZ",chatMobile:"Room_chatMobile__TJnOd",invationLinkMobile:"Room_invationLinkMobile__uQ4I_",mobileTop:"Room_mobileTop__vee2j"}},70130:function(e){e.exports={wrap:"Card_wrap__T_WP6",rounded:"Card_rounded__h1Ma9"}},23369:function(){},33490:function(){},17472:function(){},78486:function(){},46601:function(){},89214:function(){},85568:function(){},52361:function(){},94616:function(){},55024:function(){}},function(e){e.O(0,[204,714,662,754,179,952,891,382,736,774,888,377],function(){return e(e.s=39053)}),_N_E=e.O()}]);