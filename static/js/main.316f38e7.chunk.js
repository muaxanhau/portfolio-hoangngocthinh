(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{61:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var i,o,r,c,a,l,s,d,b,u,h,j,g,p,f,m,x,O,v,M,N,w,y,A,k,z,W,H,S,L,T,D,I,C,X,P,V,G,K,q,B,U,Z,E,F,Q,J,R,Y,_,$,ee,ne,te,ie,oe,re,ce,ae,le=t(1),se=t(15),de=t.n(se),be=t(6),ue=Object(le.createContext)(null),he={isMenuOpen:!0,isNightMode:!1},je=t(7),ge="toggle-menu",pe="toggle-night-mode",fe=function(e,n){switch(n.type){case ge:return Object(je.a)(Object(je.a)({},e),{},{isMenuOpen:!e.isMenuOpen});case pe:return Object(je.a)(Object(je.a)({},e),{},{isNightMode:!e.isNightMode});default:return e}},me=t(2),xe=function(e){var n=Object(le.useReducer)(fe,he),t=Object(be.a)(n,2),i=t[0],o=t[1];return Object(me.jsx)(ue.Provider,{value:[i,o],children:e.children})},Oe=t(3),ve=t(4),Me={smallWidthDevice:650,mediumWidthDevice:851,minHeightDevice:568,HeaderHeight:60,NavbarWidth:30},Ne={color1:"rgb(22, 87, 231)",color2:"rgb(24, 63, 148)",color3:"rgb(55, 0, 60)",color4:"rgb(249, 59, 120)",color5:"rgb(18, 243, 200)",color6:"rgb(245, 245, 245)",color7:"rgb(230, 229, 243)",color8:"rgb(197, 202, 241)",color9:"rgb(52, 70, 112)",color10:"rgb(0, 255, 21)",color11:"rgb(68, 67, 69)",color12:"rgb(52, 51, 52)"},we=Object(ve.a)(i||(i=Object(Oe.a)(["\n  width: 100%;\n  transition: 0.2s;\n  display: grid;\n  grid-template-columns: repeat(var(--defaultNumberColumn, 3), 1fr);\n  gap: var(--gap, 1rem);\n\n  @media screen and (max-width: ","px) {\n    grid-template-columns: repeat(\n      ",",\n      1fr\n    );\n  }\n\n  @media screen and (max-width: ","px) {\n    grid-template-columns: repeat(var(--mediumNumberColumn, 2), 1fr);\n  }\n\n  @media screen and (max-width: ","px) {\n    grid-template-columns: repeat(\n      ",",\n      1fr\n    );\n  }\n\n  @media screen and (max-width: ","px) {\n    grid-template-columns: repeat(var(--smallNumberColumn, 1), 1fr);\n  }\n"])),Me.mediumWidthDevice+window.innerWidth*Me.NavbarWidth/100,(function(e){return e.isMenuOpen?"var(--mediumNumberColumn, 2)":"var(--defaultNumberColumn, 3)"}),Me.mediumWidthDevice,Me.smallWidthDevice+window.innerWidth*Me.NavbarWidth/100,(function(e){return e.isMenuOpen?"var(--smallNumberColumn, 1)":"var(--mediumNumberColumn, 2)"}),Me.smallWidthDevice),ye=Object(ve.a)(o||(o=Object(Oe.a)(["\n  --text-color: ",";\n  --background-color: ",";\n  --shadow-color: 0 0 2px\n    ",";\n  width: 100%;\n  color: var(--text-color);\n  background-color: var(--background-color);\n  box-shadow: var(--shadow-color);\n  transition: 0.2s;\n  border: none;\n  font-size: 110%;\n  padding: 0.7rem 0.5rem;\n\n  &::placeholder {\n    opacity: 0.7;\n    color: gray;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    --autofill-background: 0 0 0 50px var(--background-color);\n    box-shadow: var(--autofill-background) inset, var(--shadow-color);\n  }\n\n  &:-webkit-autofill {\n    -webkit-text-fill-color: var(--text-color);\n  }\n"])),(function(e){return e.isNightMode?Ne.color6:Ne.color9}),(function(e){return e.isNightMode?Ne.color11:Ne.color6}),(function(e){return e.isNightMode?Ne.color8:Ne.color12})),Ae=ve.b.div(r||(r=Object(Oe.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8rem;\n"]))),ke=ve.b.div(c||(c=Object(Oe.a)(["\n  width: 90%;\n"]))),ze=ve.b.div(a||(a=Object(Oe.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n  width: 100%;\n  height: calc(100vh - ","px);\n  min-height: ","px;\n"])),Me.HeaderHeight,Me.minHeightDevice-Me.HeaderHeight),We=ve.b.img(l||(l=Object(Oe.a)(["\n  width: 275px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  object-fit: cover;\n"]))),He=ve.b.div(s||(s=Object(Oe.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n"]))),Se=ve.b.div(d||(d=Object(Oe.a)(["\n  position: absolute;\n  left: 50%;\n  bottom: 1rem;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 0.5rem;\n"]))),Le=ve.b.button(b||(b=Object(Oe.a)(["\n  width: 30px;\n  aspect-ratio: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  transition: 0.2s;\n  color: ",";\n  background: ",";\n\n  &:hover {\n    color: ",";\n    background: ",";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.isNightMode?Ne.color7:Ne.color9}),(function(e){return e.isNightMode?Ne.color11:Ne.color8}),Ne.color5,(function(e){return e.isNightMode?Ne.color4:Ne.color3})),Te=ve.b.div(u||(u=Object(Oe.a)(["\n  --gap: 2rem;\n  --defaultNumberColumn: 2;\n  ","\n"])),we),De=ve.b.div(h||(h=Object(Oe.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n"]))),Ie=ve.b.img(j||(j=Object(Oe.a)(["\n  width: 100%;\n  aspect-ratio: 4 / 3;\n  object-fit: cover;\n"]))),Ce=ve.b.span(g||(g=Object(Oe.a)(["\n  font-size: 120%;\n  font-weight: 600;\n  color: ",";\n"])),(function(e){return e.isNightMode?Ne.color5:Ne.color4})),Xe=ve.b.div(p||(p=Object(Oe.a)(["\n  ","\n"])),we),Pe=ve.b.div(f||(f=Object(Oe.a)(["\n  ","\n"])),we),Ve=ve.b.div(m||(m=Object(Oe.a)(["\n  --defaultNumberColumn: 2;\n  ","\n"])),we),Ge=ve.b.div(x||(x=Object(Oe.a)(["\n  width: 100%;\n  max-width: ","px;\n"])),Me.smallWidthDevice),Ke=t(63),qe={img01:t.p+"static/media/01.75ab69a3.jpg",img02:t.p+"static/media/02.a17bb1de.jpg",img03:t.p+"static/media/03.83336e13.png",img04:t.p+"static/media/04.7f9b2e2b.png",img05:t.p+"static/media/05.f46d384b.png",img06:"data:image/jpeg;base64,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",img07:t.p+"static/media/07.be1f5d5a.jpg"},Be=ve.b.button(O||(O=Object(Oe.a)(["\n  position: relative;\n  padding: 0.8rem 1.2rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s;\n  color: ",";\n  background: ",";\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 0.3rem;\n    height: 80%;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    background: ",";\n    transition: 0.2s;\n    opacity: 0;\n  }\n\n  &:hover {\n    color: ",";\n    ",";\n\n    &:before {\n      opacity: 1;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.isNightMode?Ne.color6:Ne.color7}),(function(e){return e.isNightMode?Ne.color11:Ne.color2}),Ne.color4,Ne.color5,(function(e){return e.isNightMode?"":"background: "+Ne.color1})),Ue=function(){var e=Object(le.useContext)(ue),n=Object(be.a)(e,2),t=n[0],i=n[1];return{state:t,setState:{setToggleMenu:function(){i({type:ge})},setToggleNightMode:function(){i({type:pe})}}}},Ze=function(e){var n=Ue().state,t=Object(le.useMemo)((function(){return e.title}),[e.title]);return Object(me.jsx)(Be,{isNightMode:n.isNightMode,children:t})},Ee={"size-s":1.1,"size-m":1.5,"size-l":1.9},Fe=ve.b.div(v||(v=Object(Oe.a)(["\n  --color-light-mode: ",";\n  --color-night-mode: ",";\n  font-size: ","rem;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-family: 'Roboto', sans-serif;\n  color: ",";\n"])),(function(e){return e.colorLightMode?e.colorLightMode:"black"}),(function(e){return e.colorNightMode?e.colorNightMode:"white"}),(function(e){return Ee[e.size]}),(function(e){return e.isNightMode?"var(--color-night-mode)":"var(--color-light-mode)"})),Qe=function(e){var n=Ue().state,t=Object(le.useMemo)((function(){return e.size}),[e.size]),i=Object(le.useMemo)((function(){return e.colorLightMode}),[e.colorLightMode]),o=Object(le.useMemo)((function(){return e.colorNightMode}),[e.colorNightMode]),r=Object(le.useMemo)((function(){return e.children}),[e.children]);return Object(me.jsx)(Fe,{size:t,isNightMode:n.isNightMode,colorLightMode:i,colorNightMode:o,children:r})},Je=t(11),Re=t(34),Ye=t(26),_e=t(35),$e=t(36),en=t(16),nn="60%",tn=[{icon:Object(me.jsx)(Je.a,{size:nn}),link:"http://www.facebook.com/Sercules"},{icon:Object(me.jsx)(Je.c,{size:nn}),link:"http://"},{icon:Object(me.jsx)(Ye.b,{size:nn}),link:"http://"},{icon:Object(me.jsx)(Re.a,{size:nn}),link:"mailto:thinhhoang17485@gmail.com"}],on="100%",rn=[{icon:Object(me.jsx)(_e.a,{size:on}),title:"Web Development",content:"I can create web apps that run on any device, accessible from anywhere. I can work with Laravel, ReactJs and I have great HTML, CSS skills."},{icon:Object(me.jsx)($e.a,{size:on}),title:"App Development",content:"I can create desktop app with high performance, stable and powerful because my products are built on .Net platform, with great support from Microsoft."},{icon:Object(me.jsx)(Ye.a,{size:on}),title:"Mobile Apps",content:"I use React Native for cross-platform programming that runs on both Android and IOS"},{icon:Object(me.jsx)(en.a,{size:on}),title:"Research",content:"I study technologies that meet customer requirements or specialized skills in a certain field. I adapt quickly to newness"}],cn=[{imgSrc:qe.img03,title:"BookStore Web App"},{imgSrc:qe.img04,title:"Shop Management Desktop App"},{imgSrc:qe.img05,title:"Virtual Wallet Mobile App"}],an=[{imgSrc:qe.img06,content:'"He is a hard worker. Quickly adapt to the working environment. Always complete the assigned work well."',author:"Cao Thanh Phu",tag:"Project Leader"},{imgSrc:qe.img07,content:'"The app helps a lot in classifying products, making everything faster and more convenient. In addition, the app is stable, the filter data is also quite accurate."',author:"Le Thi My Ha",tag:"Client"}],ln=ve.b.div(M||(M=Object(Oe.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3.5rem;\n"]))),sn=ve.b.div(N||(N=Object(Oe.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n"]))),dn=ve.b.div(w||(w=Object(Oe.a)(["\n  position: relative;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 65%;\n    height: 2px;\n    bottom: -0.5rem;\n    left: 50%;\n    transform: translateX(-50%);\n    background: ",";\n  }\n"])),Ne.color4),bn=ve.b.p(y||(y=Object(Oe.a)(["\n  max-width: 80%;\n  text-align: center;\n  font-size: 110%;\n"]))),un=ve.b.div(A||(A=Object(Oe.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),hn=function(e){var n=Object(le.useMemo)((function(){return e.title}),[e.title]),t=Object(le.useMemo)((function(){return e.intro&&Object(me.jsx)(bn,{children:e.intro})}),[e.intro]),i=Object(le.useMemo)((function(){return e.children}),[e.children]);return Object(me.jsxs)(ln,{children:[Object(me.jsxs)(sn,{children:[Object(me.jsx)(dn,{children:Object(me.jsx)(Qe,{size:"size-m",colorLightMode:Ne.color9,colorNightMode:Ne.color7,children:n})}),t]}),Object(me.jsx)(un,{children:i})]})},jn=ve.b.div(k||(k=Object(Oe.a)(["\n  position: relative;\n  width: 100%;\n  aspect-ratio: 7 / 8;\n  background-color: ",";\n  ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  padding: 3rem 1.5rem;\n  transform-origin: bottom;\n  transition: transform 0.2s;\n\n  &:hover {\n    transition: background 0.2s;\n    background-color: ",";\n    transform: scale(1.025);\n  }\n"])),(function(e){return e.isNightMode?Ne.color11:Ne.color6}),(function(e){return e.isNightMode?"":"border: 1px solid "+Ne.color8}),(function(e){return e.isNightMode?Ne.color4:Ne.color5})),gn=ve.b.div(z||(z=Object(Oe.a)(["\n  width: 55px;\n  aspect-ratio: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n"])),(function(e){return e.isNightMode?Ne.color5:Ne.color4})),pn=ve.b.div(W||(W=Object(Oe.a)(["\n  text-align: center;\n"]))),fn=function(e){var n=Ue().state,t=Object(le.useMemo)((function(){return e.icon&&Object(me.jsx)(gn,{isNightMode:n.isNightMode,children:e.icon})}),[e.icon,n.isNightMode]),i=e.title&&Object(me.jsx)(Qe,{size:"size-s",colorLightMode:Ne.color9,colorNightMode:Ne.color7,children:e.title}),o=e.content&&Object(me.jsx)(pn,{children:e.content});return Object(me.jsxs)(jn,{isNightMode:n.isNightMode,children:[t,i,o]})},mn="0.5s",xn=ve.b.img(H||(H=Object(Oe.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: ",";\n  z-index: 2;\n"])),mn),On=ve.b.div(S||(S=Object(Oe.a)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 3rem 1.5rem;\n  text-align: center;\n  transition: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n"])),mn),vn=ve.b.div(L||(L=Object(Oe.a)(["\n  position: relative;\n  width: 100%;\n  aspect-ratio: 7 / 8;\n  overflow: hidden;\n  background-color: ",";\n\n  &:hover {\n    "," {\n      bottom: 100%;\n    }\n\n    "," {\n      top: 0;\n    }\n  }\n"])),(function(e){return e.isNightMode?Ne.color4:Ne.color5}),xn,On),Mn=function(e){var n=Ue().state,t=Object(le.useMemo)((function(){return e.image&&Object(me.jsx)(xn,{src:e.image})}),[e.image]),i=Object(le.useMemo)((function(){return e.title&&Object(me.jsx)(On,{children:Object(me.jsx)(Qe,{size:"size-s",colorLightMode:Ne.color9,colorNightMode:Ne.color7,children:e.title})})}),[e.title]);return Object(me.jsxs)(vn,{isNightMode:n.isNightMode,children:[t,i]})},Nn=ve.b.div(T||(T=Object(Oe.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n"]))),wn=ve.b.img(D||(D=Object(Oe.a)(["\n  width: 80px;\n  aspect-ratio: 1;\n  object-fit: cover;\n"]))),yn=ve.b.p(I||(I=Object(Oe.a)(["\n  font-style: italic;\n"]))),An=ve.b.div(C||(C=Object(Oe.a)(["\n  align-self: flex-end;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 1rem;\n  position: relative;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 3px;\n    background-color: ",";\n  }\n"])),(function(e){return e.isNightMode?Ne.color5:Ne.color4})),kn=ve.b.p(X||(X=Object(Oe.a)(["\n  font-size: 80%;\n  opacity: 0.6;\n"]))),zn=ve.b.div(P||(P=Object(Oe.a)(["\n  width: 100%;\n  aspect-ratio: 13 / 9;\n\n  background-color: ",";\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: space-between;\n  transform-origin: bottom;\n  transition: transform 0.2s;\n\n  &:hover {\n    transition: background 0.2s;\n    background-color: ",";\n    transform: scale(1.025);\n  }\n"])),(function(e){return e.isNightMode?Ne.color11:Ne.color6}),(function(e){return e.isNightMode?Ne.color4:Ne.color5})),Wn=function(e){var n=Ue().state,t=Object(le.useMemo)((function(){return e.image&&Object(me.jsx)(wn,{src:e.image})}),[e.image]),i=Object(le.useMemo)((function(){return e.content&&Object(me.jsx)(yn,{children:e.content})}),[e.content]),o=Object(le.useMemo)((function(){return e.author&&Object(me.jsx)(Qe,{size:"size-s",colorLightMode:Ne.color9,colorNightMode:Ne.color7,children:e.author})}),[e.author]),r=Object(le.useMemo)((function(){return e.tag&&Object(me.jsx)(kn,{children:e.tag})}),[e.tag]);return Object(me.jsxs)(zn,{isNightMode:n.isNightMode,children:[Object(me.jsxs)(Nn,{children:[t,i]}),Object(me.jsxs)(An,{isNightMode:n.isNightMode,children:[o,r]})]})},Hn=t(39),Sn=ve.b.form(V||(V=Object(Oe.a)(["\n  --defaultNumberColumn: 2;\n  ","\n"])),we),Ln=ve.b.div(G||(G=Object(Oe.a)(["\n  width: 100%;\n  position: relative;\n"]))),Tn=Object(ve.b)(Ln)(K||(K=Object(Oe.a)(["\n  display: flex;\n  justify-content: center;\n  grid-column: span 2;\n\n  @media screen and (max-width: ","px) {\n    grid-column: ",";\n  }\n\n  @media screen and (max-width: ","px) {\n    grid-column: initial;\n  }\n"])),Me.smallWidthDevice+window.innerWidth*Me.NavbarWidth/100,(function(e){return e.isMenuOpen?"initial":"span 2"}),Me.smallWidthDevice),Dn=ve.b.div(q||(q=Object(Oe.a)(["\n  position: absolute;\n  width: 20px;\n  aspect-ratio: 1;\n  top: 5px;\n  right: 5px;\n  color: ",";\n"])),(function(e){return e.isNightMode?Ne.color5:Ne.color4})),In=ve.b.textarea(B||(B=Object(Oe.a)(["\n  ","\n  resize: none;\n"])),ye),Cn=(ve.b.button(U||(U=Object(Oe.a)(["\n  padding: 1rem 2rem;\n"]))),ve.b.input(Z||(Z=Object(Oe.a)(["\n  ","\n"])),ye)),Xn=function(e){var n=e.placeholder,t=e.label,i=e.type,o=e.register,r=e.required,c=Ue().state;return Object(me.jsx)(Cn,Object(je.a)({placeholder:n,type:i||"text",isNightMode:c.isNightMode},o(t,{required:r})))},Pn=ve.b.div(E||(E=Object(Oe.a)(["\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),Vn=ve.b.div(F||(F=Object(Oe.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n  opacity: 0.8;\n"])),Ne.color9),Gn=ve.b.div(Q||(Q=Object(Oe.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: center;\n"]))),Kn=ve.b.p(J||(J=Object(Oe.a)(["\n  text-align: center;\n  color: ",";\n"])),Ne.color6),qn=function(e){var n=Object(le.useMemo)((function(){return e.title}),[e.title]),t=Object(le.useMemo)((function(){return e.content}),[e.content]);return Object(me.jsxs)(Pn,{children:[Object(me.jsx)(Vn,{}),Object(me.jsxs)(Gn,{children:[Object(me.jsx)(Qe,{size:"size-l",colorLightMode:Ne.color5,colorNightMode:Ne.color5,children:n}),t&&Object(me.jsx)(Kn,{children:t})]})]})},Bn=t(37),Un={lightModeHourStart:5,lightModeHourEnd:17,urlFirebase:"https://portfolio-b76ba-default-rtdb.firebaseio.com/contact-list.json"},Zn=function(){var e,n,t,i=Ue().state,o=Object(le.useState)(!1),r=Object(be.a)(o,2),c=r[0],a=r[1],l=Object(le.useState)(!1),s=Object(be.a)(l,2),d=s[0],b=s[1],u=Object(Hn.a)(),h=u.register,j=u.formState.errors,g=u.handleSubmit,p=function(e){return"required"===e&&Object(me.jsx)(Dn,{isNightMode:i.isNightMode,children:Object(me.jsx)(Bn.a,{size:"100%"})})};return Object(le.useEffect)((function(){d&&setTimeout((function(){b((function(e){return!1}))}),3e3)}),[d]),Object(me.jsxs)(me.Fragment,{children:[c&&Object(me.jsx)(qn,{title:"SENDING..."}),d&&Object(me.jsx)(qn,{title:"Success",content:"I will reply you soon!"}),Object(me.jsxs)(Sn,{onSubmit:g((function(e,n){a((function(e){return!0})),fetch(Un.urlFirebase,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){return a((function(e){return!1}))})).then((function(){return n.target.reset()})).then((function(){return b((function(e){return!0}))}))})),isMenuOpen:i.isMenuOpen,children:[Object(me.jsxs)(Ln,{children:[Object(me.jsx)(Xn,{placeholder:"First Name",label:"firstName",register:h,required:!0}),p(null===(e=j.firstName)||void 0===e?void 0:e.type)]}),Object(me.jsx)(Ln,{children:Object(me.jsx)(Xn,{placeholder:"Last Name",label:"lastName",register:h})}),Object(me.jsxs)(Ln,{children:[Object(me.jsx)(Xn,{placeholder:"Email",label:"email",register:h,type:"email",required:!0}),p(null===(n=j.email)||void 0===n?void 0:n.type)]}),Object(me.jsx)(Ln,{children:Object(me.jsx)(Xn,{placeholder:"Mobile No.",label:"mobileNo",register:h})}),Object(me.jsxs)(Tn,{isMenuOpen:i.isMenuOpen,children:[Object(me.jsx)(In,Object(je.a)({isNightMode:i.isNightMode,placeholder:"Message",rows:6},h("message",{required:!0}))),p(null===(t=j.message)||void 0===t?void 0:t.type)]}),Object(me.jsx)(Tn,{isMenuOpen:i.isMenuOpen,children:Object(me.jsx)(Ze,{title:"SEND",type:"submit"})})]})]})},En=function(){var e=Ue().state;return Object(me.jsxs)(Ae,{children:[Object(me.jsx)(ke,{id:"home",children:Object(me.jsxs)(ze,{children:[Object(me.jsx)(We,{src:qe.img01,alt:"Ho\xe0ng Ng\u1ecdc Th\u1ecbnh"}),Object(me.jsxs)(He,{children:[Object(me.jsx)(Qe,{size:"size-m",colorLightMode:Ne.color9,colorNightMode:Ne.color7,children:"Ho\xe0ng Ng\u1ecdc Th\u1ecbnh"}),Object(me.jsx)("p",{children:"I'm a Front End Web Developer"}),Object(me.jsx)("a",{href:"http://hnthinh17485.ml",target:"_blank",rel:"noopener noreferrer",children:Object(me.jsx)(Ze,{title:"Download My CV"})})]}),Object(me.jsx)(Se,{children:tn.map((function(n){return Object(me.jsx)("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",children:Object(me.jsx)(Le,{isNightMode:e.isNightMode,children:n.icon})},Object(Ke.a)())}))})]})}),Object(me.jsx)(ke,{id:"about",children:Object(me.jsx)(hn,{title:"About Me",children:Object(me.jsxs)(Te,{isMenuOpen:e.isMenuOpen,children:[Object(me.jsxs)(De,{children:[Object(me.jsx)("p",{children:"I am the kind of positive, inspire everyone. I want to become who can lead everyone and pioneer in everything. I like innovation, advancement. I can walk by myself and by my way. I am not afraid of walking alone."}),Object(me.jsxs)("p",{children:[Object(me.jsx)(Ce,{isNightMode:e.isNightMode,children:"Objective:"})," Bring technology closer to everyone. Make our life is simple, convenient. I like creativity, innovatity and advanment. I wan to be pioneer. And I will be."]}),Object(me.jsx)("p",{children:"Life Motto: If others can do it, I should be able to do it too. If I can do it, others can too. If no one can do it, I will be the one to do it."})]}),Object(me.jsx)(Ie,{src:qe.img02,alt:"About Me"})]})})}),Object(me.jsx)(ke,{id:"services",children:Object(me.jsx)(hn,{title:"Our Services",intro:"What can I do? If you have a dream-app, but you still haven't implemented it, I will be the one to help you achieve that dream-app. Soon!!!! I make the dream come true",children:Object(me.jsx)(Xe,{isMenuOpen:e.isMenuOpen,children:rn.map((function(e){return Object(me.jsx)(fn,{icon:e.icon,title:e.title,content:e.content},Object(Ke.a)())}))})})}),Object(me.jsx)(ke,{id:"project",children:Object(me.jsx)(hn,{title:"Recent Work",intro:"So, what dreams have I helped make it come true? What have I done?",children:Object(me.jsx)(Pe,{isMenuOpen:e.isMenuOpen,children:cn.map((function(e){return Object(me.jsx)(Mn,{image:e.imgSrc,title:e.title},Object(Ke.a)())}))})})}),Object(me.jsx)(ke,{id:"testimonials",children:Object(me.jsx)(hn,{title:"Testimonials",intro:"A year of experence - over 5 projects - 10+ happy clients!",children:Object(me.jsx)(Ve,{isMenuOpen:e.isMenuOpen,children:an.map((function(e){return Object(me.jsx)(Wn,{image:e.imgSrc,content:e.content,author:e.author,tag:e.tag},Object(Ke.a)())}))})})}),Object(me.jsx)(ke,{id:"contact",children:Object(me.jsx)(hn,{title:"Let's say hi",intro:"Don't hesitate to contact me!",children:Object(me.jsx)(Ge,{children:Object(me.jsx)(Zn,{})})})})]})},Fn=t(17),Qn=ve.b.div(R||(R=Object(Oe.a)(["\n  z-index: 100;\n  position: fixed;\n  top: 0px;\n  left: 0;\n  width: ","%;\n  height: 100vh;\n  min-height: ","px;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  transition: width 0.5s, height 0s, background 0.2s, border 0.2s;\n  box-sizing: border-box;\n  ",";\n\n  @media screen and (max-width: ","px) {\n    top: ","px;\n    width: ",";\n    height: calc(100vh - "," * 1px);\n    border: none;\n    opacity: 0.9;\n  }\n"])),(function(e){return e.isOpen?Me.NavbarWidth:"0"}),Me.minHeightDevice,(function(e){return e.isNightMode?Ne.color11:Ne.color9}),(function(e){return e.isOpen&&e.isNightMode?"border-right: 1px solid "+Ne.color8:""}),Me.smallWidthDevice,Me.HeaderHeight,(function(e){return e.isOpen?"100%":0}),Me.HeaderHeight),Jn=ve.b.ul(Y||(Y=Object(Oe.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n"]))),Rn=Object(ve.b)(Fn.Link)(_||(_=Object(Oe.a)(["\n  color: ",";\n  list-style: none;\n  font-size: 1.1rem;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: 0.2s;\n  position: relative;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0.2rem;\n    height: 100%;\n    transition: 0.2s;\n    transform: translateX(-200%);\n    background: ",";\n    opacity: 0;\n  }\n\n  &:hover {\n    color: ",";\n  }\n\n  &.active {\n    color: ",";\n    &:before {\n      opacity: 1;\n    }\n  }\n"])),Ne.color8,Ne.color4,Ne.color6,Ne.color5),Yn=ve.b.div($||($=Object(Oe.a)(["\n  position: absolute;\n  bottom: 2rem;\n  left: 50%;\n  width: max-content;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n"]))),_n=ve.b.button(ee||(ee=Object(Oe.a)(["\n  height: 30px;\n  aspect-ratio: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 50%;\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  transition: 0.2s;\n\n  &:hover {\n    color: ",";\n    ",";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(e){return e.isNightMode?Ne.color11:Ne.color9}),(function(e){return e.isNightMode?Ne.color6:Ne.color8}),(function(e){return e.isNightMode?Ne.color9:Ne.color4}),(function(e){return e.isNightMode?"background-color: "+Ne.color5:""})),$n=ve.b.p(ne||(ne=Object(Oe.a)(["\n  font-size: 70%;\n  font-weight: 700;\n  color: ",";\n"])),(function(e){return e.isNightMode?Ne.color6:Ne.color8})),et=t(18),nt=[{content:"Home",toValue:"home"},{content:"About",toValue:"about"},{content:"Services",toValue:"services"},{content:"Project",toValue:"project"},{content:"Testimonials",toValue:"testimonials"},{content:"Contact",toValue:"contact"}],tt=function(){var e=Ue(),n=e.state,t=e.setState,i=Object(et.useSwipeable)({onSwipedLeft:function(e){return t.setToggleMenu()}}),o=Object(le.useCallback)((function(){window.innerWidth<=Me.smallWidthDevice&&t.setToggleMenu()}),[t]),r=Object(le.useCallback)((function(){t.setToggleNightMode()}),[t]);return Object(me.jsxs)(Qn,Object(je.a)(Object(je.a)({},i),{},{isOpen:n.isMenuOpen,isNightMode:n.isNightMode,children:[Object(me.jsx)(Jn,{children:nt.map((function(e){return Object(me.jsx)(Rn,{to:e.toValue,smooth:!0,duration:500,spy:!0,exact:"true",activeClass:"active",offset:-Me.HeaderHeight,onClick:o,children:e.content},Object(Ke.a)())}))}),Object(me.jsxs)(Yn,{children:[Object(me.jsx)(_n,{isNightMode:n.isNightMode,onClick:r,children:n.isNightMode?Object(me.jsx)(en.b,{size:"60%"}):Object(me.jsx)(Je.b,{size:"60%"})}),Object(me.jsxs)($n,{isNightMode:n.isNightMode,children:["Switch To ",n.isNightMode?"Light":"Night"," Mode"]})]})]}))},it=ve.b.div(te||(te=Object(Oe.a)(["\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: 0.5s;\n  width: calc(\n    100% - ","%\n  );\n  height: calc("," * 1px);\n  padding: 0 20px;\n  color: ",";\n  background-color: ",";\n  @media screen and (max-width: ","px) {\n    width: 100%;\n    transition: 0s;\n  }\n"])),(function(e){return e.isMinimize?Me.NavbarWidth:"0"}),Me.HeaderHeight,(function(e){return e.isNightMode?Ne.color6:Ne.color9}),(function(e){return e.isNightMode?Ne.color11:Ne.color8}),Me.smallWidthDevice),ot=(ve.b.div(ie||(ie=Object(Oe.a)(["\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  font-weight: 900;\n"]))),ve.b.button(oe||(oe=Object(Oe.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n  color: inherit;\n  border: none;\n  height: 70%;\n  aspect-ratio: 1;\n  transition: 0.2s;\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n  }\n  &:focus {\n    outline: none;\n  }\n"])),Ne.color4)),rt=t(38),ct=function(e){var n=Ue(),t=n.state,i=n.setState,o=Object(le.useMemo)((function(){return t.isMenuOpen}),[t.isMenuOpen]),r=Object(le.useMemo)((function(){return t.isNightMode}),[t.isNightMode]),c=Object(le.useMemo)((function(){return e.title}),[e.title]),a=Object(le.useCallback)((function(){window.innerWidth<=Me.smallWidthDevice&&o&&i.setToggleMenu(),Fn.animateScroll.scrollToTop()}),[o,i]),l=Object(le.useCallback)((function(){i.setToggleMenu()}),[i]);return Object(me.jsxs)(it,{isMinimize:o,isNightMode:r,children:[Object(me.jsx)("div",{onClick:a,style:{cursor:"pointer"},children:Object(me.jsx)(Qe,{size:"size-l",colorLightMode:Ne.color9,colorNightMode:Ne.color7,children:c})}),Object(me.jsx)(ot,{onClick:l,children:Object(me.jsx)(rt.a,{size:"100%"})})]})},at=ve.b.div(re||(re=Object(Oe.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n"]))),lt=function(e){var n=Object(le.useMemo)((function(){return e.children}),[e.children]);return Object(me.jsx)(at,{children:n})},st=ve.b.div(ce||(ce=Object(Oe.a)(["\n  padding-top: calc("," * 1px);\n  transition: width 0.5s, background 0.2s;\n  width: calc(\n    100% - ","%\n  );\n  min-height: 100vh;\n  color: ",";\n  background: ",";\n  overflow: hidden;\n\n  @media screen and (max-width: ","px) {\n    transition: 0s;\n    width: 100%;\n  }\n"])),Me.HeaderHeight,(function(e){return e.isMinimize?Me.NavbarWidth:"0"}),(function(e){return e.isNightMode?Ne.color7:Ne.color9}),(function(e){return e.isNightMode?Ne.color12:Ne.color7}),Me.smallWidthDevice),dt=function(e){var n=Ue(),t=n.state,i=n.setState,o=Object(le.useMemo)((function(){return e.children}),[e.children]),r=Object(et.useSwipeable)({onSwipedRight:function(e){!t.isMenuOpen&&i.setToggleMenu()}});return Object(me.jsx)(st,Object(je.a)(Object(je.a)({},r),{},{isNightMode:t.isNightMode,isMinimize:t.isMenuOpen,children:o}))},bt=ve.b.div(ae||(ae=Object(Oe.a)(["\n  height: 200px;\n  padding-bottom: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 2rem;\n  text-align: center;\n"]))),ut=function(){var e=(new Date).getFullYear();return Object(me.jsx)(bt,{children:Object(me.jsxs)("p",{children:["Copyright \xa9 ",e," Ho\xe0ng Ng\u1ecdc Th\u1ecbnh. All Right Reserved."]})})},ht=function(){var e=Ue(),n=e.state,t=e.setState;return Object(le.useEffect)((function(){window.innerWidth<=Me.smallWidthDevice&&n.isMenuOpen&&t.setToggleMenu();var e=(new Date).getHours();Un.lightModeHourStart<=e&&e<=Un.lightModeHourEnd?n.isNightMode&&t.setToggleNightMode():!n.isNightMode&&t.setToggleNightMode()}),[]),Object(me.jsxs)(lt,{children:[Object(me.jsx)(tt,{}),Object(me.jsx)(ct,{title:"Portfolio"}),Object(me.jsxs)(dt,{children:[Object(me.jsx)(En,{}),Object(me.jsx)(ut,{})]})]})};t(61);de.a.render(Object(me.jsx)(xe,{children:Object(me.jsx)(ht,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.316f38e7.chunk.js.map