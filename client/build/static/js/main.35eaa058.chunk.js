(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),c=a(9),i=a.n(c),s=a(15),o=a(20),l=a(55),u=a(17),d="FETCH_ALL",p="CREATE",j="UPDATE",b="DELETE",f=[],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;case p:return[].concat(Object(u.a)(e),[t.payload]);case j:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case b:return e.filter((function(e){return e.id!==t.payload}));default:return e}},x=Object(o.c)({posts:m}),h=a(18),O=a(142),g=a(143),v=a(135),y=a(146),C=a(141),w=a.p+"static/media/memories.9cfa8a46.png",k=a(128),N=Object(k.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),I=a(59),S=a.n(I),E=a(131),D=a(133),T=a(134),W=a(145),z=a(137),F=a(138),_=a(136),B=a(139),A=a(140),M=a(16),L=a.n(M),R=a(30),H=a(31),J=a.n(H),P="https://memories-keeper.herokuapp.com/posts",U=function(e,t){return J.a.patch("".concat(P,"/").concat(e),t)},V=function(e){return J.a.delete("".concat(P,"/").concat(e))},q=function(e){return J.a.patch("".concat(P,"/").concat(e,"/likePost"))},G=function(e){var t=e.post,a=e.setCurrentId,r=N(),c=Object(s.b)();return Object(n.jsxs)(E.a,{className:r.card,children:[t.selectedFile?Object(n.jsx)(T.a,{className:r.media,image:t.selectedFile,title:t.title}):Object(n.jsx)(D.a,{}),Object(n.jsxs)("div",{className:r.overlay,children:[Object(n.jsx)(v.a,{variant:"h6",children:t.creator}),Object(n.jsx)(v.a,{variant:"body2",children:S()(t.createdAt).fromNow()})]}),Object(n.jsx)("div",{className:r.overlay2,children:Object(n.jsx)(W.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(n.jsx)(_.a,{fontSize:"default"})})}),Object(n.jsx)("div",{className:r.details,children:Object(n.jsx)(v.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(n.jsx)(v.a,{className:r.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(n.jsx)(z.a,{children:Object(n.jsx)(v.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(n.jsxs)(F.a,{className:r.cardActions,children:[Object(n.jsxs)(W.a,{size:"small",color:"primary",onClick:function(e){return e.preventDefault(),c((a=t._id,function(){var e=Object(R.a)(L.a.mark((function e(t){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=q(a),r=n.data,t({type:j,payload:r})}catch(c){console.log(c)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var a},children:[Object(n.jsx)(B.a,{fontSize:"small"}),"\xa0 Likes \xa0",t.likeCount]}),Object(n.jsxs)(W.a,{size:"small",color:"primary",onClick:function(e){return e.preventDefault(),c((a=t._id,function(){var e=Object(R.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(a);case 3:t({type:b,payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()));var a},children:[Object(n.jsx)(A.a,{fontSize:"small"}),"\xa0 Delete \xa0"]})]})]})},K=Object(k.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Q=function(e){var t=e.setCurrentId,a=K(),r=Object(s.c)((function(e){return e.posts}));return r.length?Object(n.jsx)(C.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:r.map((function(e){return Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(G,{post:e,setCurrentId:t})},e._id)}))}):Object(n.jsx)(D.a,{})},X=a(11),Y=a(35),Z=Object(k.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),$=a(62),ee=a(144),te=a(60),ae=a.n(te),ne=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(r.useState)({creator:"",title:"",tags:"",message:"",selectedFile:""}),i=Object(h.a)(c,2),o=i[0],l=i[1],u=Z(),d=Object(s.b)(),b=o.creator,f=o.title,m=o.tags,x=o.message,O=Object(s.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null}));Object(r.useEffect)((function(){O&&l(O)}),[O]);var g=function(e){l(Object(Y.a)(Object(Y.a)({},o),{},Object(X.a)({},e.target.name,e.target.value.split(","))))},y=function(){a(null),l({creator:"",title:"",tags:"",message:"",selectedFile:""})};return Object(n.jsx)($.a,{className:u.paper,children:Object(n.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(u.root," ").concat(u.form),onSubmit:function(e){e.preventDefault(),d(t?function(e,t){return function(){var a=Object(R.a)(L.a.mark((function a(n){var r,c;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,U(e,t);case 3:r=a.sent,c=r.data,n({type:j,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,o):function(e){return function(){var t=Object(R.a)(L.a.mark((function t(a){var n,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,J.a.post(P,c);case 3:n=t.sent,r=n.data,a({type:p,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(o)),y()},children:[Object(n.jsxs)(v.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(n.jsx)(ee.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:b,onChange:g}),Object(n.jsx)(ee.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:f,onChange:g}),Object(n.jsx)(ee.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:x,onChange:g}),Object(n.jsx)(ee.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:m,onChange:g}),Object(n.jsx)("div",{className:u.fileInput,children:Object(n.jsx)(ae.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;l(Object(Y.a)(Object(Y.a)({},o),{},{selectedFile:t}))}})}),Object(n.jsx)(W.a,{className:u.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(n.jsx)(W.a,{className:u.buttonSubmit,variant:"contained",color:"secondary",size:"large",onClick:y,fullWidth:!0,children:"Clear"})]})})},re=Object(k.a)((function(e){return Object(X.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mobileContainer:{flexDirection:"column-reverse"}})})),ce=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),a=t[0],c=t[1],i=re(),o=Object(s.b)();return Object(r.useEffect)((function(){o(function(){var e=Object(R.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get(P);case 3:a=e.sent,n=a.data,t({type:d,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,o]),Object(n.jsxs)(O.a,{maxWidth:"lg",children:[Object(n.jsxs)(g.a,{className:i.appBar,position:"static",color:"inherit",children:[Object(n.jsx)(v.a,{className:i.heading,variant:"h2",align:"center",children:"Memories"}),Object(n.jsx)("img",{className:i.image,src:w,alt:"memories",height:"60"})]}),Object(n.jsx)(y.a,{in:!0,children:Object(n.jsx)(O.a,{children:Object(n.jsxs)(C.a,{className:i.mobileContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(n.jsx)(C.a,{item:!0,xs:12,sm:7,children:Object(n.jsx)(Q,{setCurrentId:c})}),Object(n.jsx)(C.a,{item:!0,xs:12,sm:4,children:Object(n.jsx)(ne,{currentId:a,setCurrentId:c})})]})})})]})},ie=(a(98),Object(o.e)(x,Object(o.d)(Object(o.a)(l.a))));i.a.render(Object(n.jsx)(s.a,{store:ie,children:Object(n.jsx)(ce,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.35eaa058.chunk.js.map