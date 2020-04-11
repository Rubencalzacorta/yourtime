(this["webpackJsonpproyecto-react-hooks-redux-udemy"]=this["webpackJsonpproyecto-react-hooks-redux-udemy"]||[]).push([[0],{115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(77),u=n(30),d=n(22),g=n(35),m=n(15),h=n(17),f=(n(96),function(e){return{type:"SET_LOGGED_USER",payload:e}}),p=function(e){return{type:"SET_USER_TODO_LIST",payload:e}},E=n(57),b=function(e){return Object(E.get)(e,"authReducers.loggedUser")},v=n(36),w=n(37),y=n.n(w),O=function e(){var t=this;Object(v.a)(this,e),this.signup=function(e){var n=e.username,a=e.password;return t.service.post("/signup",{username:n,password:a}).then((function(e){return e.data}))},this.login=function(e){var n=e.username,a=e.password;return t.service.post("/login",{username:n,password:a}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.REACT_APP_URL="\u200bhttps://apptodoing.herokuapp.com/api",this.service=y.a.create({baseURL:"https://apptodoing.herokuapp.com/api/auth",withCredentials:!0})},j=function e(){var t=this;Object(v.a)(this,e),this.addTodo=function(e){return t.service.post("/addtodo",{id:e}).then((function(e){return e.data}))},this.removeTodo=function(e){return t.service.post("/removetodo",{id:e}).then((function(e){return e.data}))},this.getUser=function(){return t.service.get("/getuser").then((function(e){return e.data}))},this.service=y.a.create({baseURL:"\u200bhttps://apptodoing.herokuapp.com/api/user",withCredentials:!0})},C=n(173),S=n(174),T=n(160),k=n(171),D=n(162),L=n(163),x=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{open:e.showSignupModal,onClose:e.toggleSignup,"aria-labelledby":"form-dialog-title"},o.a.createElement(S.a,{id:"form-dialog-title"},"Signup"),o.a.createElement(T.a,null,o.a.createElement(k.a,{autoFocus:!0,margin:"dense",id:"username",name:"username",label:"Username",type:"text",fullWidth:!0,onChange:e.handleChange}),o.a.createElement(k.a,{autoFocus:!0,margin:"dense",id:"password",name:"password",label:"Password",type:"password",placeholder:"Enter a password of 8 characters",fullWidth:!0,onChange:e.handleChange}),e.errorMessage&&o.a.createElement("div",null,o.a.createElement("p",{style:{color:"red",marginTop:10,textAlign:"center"}},e.errorMessage))),o.a.createElement(D.a,null,o.a.createElement(L.a,{onClick:e.toggleSignup,color:"primary"},"Cancel"),o.a.createElement(L.a,{onClick:e.handleSignupSubmit,color:"primary"},"Signup"))))},N=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C.a,{open:e.showLoginModal,onClose:e.toggleLogin,"aria-labelledby":"form-dialog-title"},o.a.createElement(S.a,{id:"form-dialog-title"},"Login"),o.a.createElement(T.a,null,o.a.createElement(k.a,{autoFocus:!0,margin:"dense",id:"username",name:"username",label:"Username",type:"text",fullWidth:!0,onChange:e.handleChange}),o.a.createElement(k.a,{autoFocus:!0,margin:"dense",id:"password",name:"password",label:"Password",type:"password",fullWidth:!0,onChange:e.handleChange}),e.errorMessage&&o.a.createElement("div",null,o.a.createElement("p",{style:{color:"red",marginTop:10,textAlign:"center"}},e.errorMessage))),o.a.createElement(D.a,null,o.a.createElement(L.a,{onClick:e.toggleLogin,color:"primary"},"Cancel"),o.a.createElement(L.a,{onClick:e.handleLoginSubmit,color:"primary"},"Login"))))},M=function(e){var t=e.history,n=Object(d.b)(),r=Object(d.c)((function(e){return b(e)})),c=Object(a.useState)(!1),i=Object(h.a)(c,2),l=i[0],s=i[1],u=new O,E=new j;Object(a.useEffect)((function(){r||l||(s(!0),u.loggedin().then((function(e){return E.getUser()})).then((function(e){n(f({user:e})),n(p({todos:e.todos})),t.push("/todos")})).catch((function(e){return console.log("error chequeando al usuario",e)})))}));var v=Object(a.useState)(!1),w=Object(h.a)(v,2),y=w[0],C=w[1],S=Object(a.useState)(!1),T=Object(h.a)(S,2),k=T[0],D=T[1],L=Object(a.useState)(""),M=Object(h.a)(L,2),U=M[0],R=M[1],W=Object(a.useState)({username:"",password:""}),_=Object(h.a)(W,2),A=_[0],z=_[1],F=function(e){C(!y)},P=function(e){D(!k)},I=function(e){z(Object(m.a)({},A,Object(g.a)({},e.target.name,e.target.value)))};return o.a.createElement("main",{className:"home-container centered-items"},o.a.createElement("div",{className:"buttons-container centered-items"},o.a.createElement("button",{className:"link",onClick:P},"Signup"),o.a.createElement("div",{className:"centered-text"},o.a.createElement("h1",null,"to doing"),o.a.createElement("p",null,"Timed to do list")),o.a.createElement("button",{className:"button",onClick:F},"Login")),o.a.createElement(N,{showLoginModal:y,toggleLogin:F,handleChange:I,handleLoginSubmit:function(e){e.preventDefault(),u.login({username:A.username,password:A.password}).then((function(e){if("failed"===e.status)return R(e.message),void console.log("pasa por failes");E.getUser().then((function(e){n(f({gotUser:e})),n(p({todos:e.todos})),F(),t.push("/todos")}))})).catch((function(e){return console.log("RC error login in",e)}))},errorMessage:U}),o.a.createElement(x,{showSignupModal:k,toggleSignup:P,handleChange:I,handleSignupSubmit:function(e){e.preventDefault(),u.signup({username:A.username,password:A.password}).then((function(e){"failed"===e.status?R(e.message):(F(),t.push("/todos"))})).catch((function(e){return console.log("RC error login in",e)}))},errorMessage:U}))},U=n(169),R=n(170),W=(n(115),n(121)),_=n(76),A=n.n(_),z=Object(W.a)({container:{height:"100vh",justifyContent:"center",backgroundImage:"url(".concat(A.a,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"rgba(255,255,255,0.5)",backgroundAttachment:"fixed",paddingTop:60},todoWrapper:{display:"inline",margin:"0px 10px",padding:10,backgroundColor:"rgba(0,0,0,.1)",maxWidth:300}}),F=function e(){var t=this;Object(v.a)(this,e),this.newTodo=function(e){return t.service.post("/newtodo",e).then((function(e){return e.data}))},this.changeStatus=function(e,n){return t.service.post("/changestatus",{id:e,status:n}).then((function(e){return e.data}))},this.deleteTodo=function(e){return t.service.post("/deleteTodo",{id:e}).then((function(e){return e.data}))},this.setBeginning=function(e,n){return t.service.post("/setbeginning",{id:e,date:n}).then((function(e){return e.data}))},this.setEnd=function(e,n){return t.service.post("/setend",{id:e,date:n}).then((function(e){return e.data}))},this.service=y.a.create({baseURL:"\u200bhttps://apptodoing.herokuapp.com/api/todo",withCredentials:!0})},P=(n(116),n(161)),I=function(e){return o.a.createElement(P.a,e,o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z"}))},G=function(e){return o.a.createElement(P.a,e,o.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}))},H=function(e){return o.a.createElement(P.a,e,o.a.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},B=function(e){return o.a.createElement(P.a,e,o.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},J=function(e){return o.a.createElement(P.a,e,o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))},V=function(e){var t=e._id,n=e.name,r=e.time,c=e.status,i=e.beginningDate,l=e.idx,s=Object(d.b)(),u=new F,g=new j,m=Object(a.useState)(!1),f=Object(h.a)(m,2),E=f[0],b=f[1],v=Object(a.useState)(!1),w=Object(h.a)(v,2),y=w[0],O=w[1],C=Object(a.useState)(void 0),S=Object(h.a)(C,2),T=S[0],k=S[1],D=function(){return b(!E)},L=function(e){u.changeStatus(t,e).then((function(){return g.getUser()})).then((function(e){return s(p({todos:e.todos}))})).catch((function(e){return console.log("error updating el user list",e)})),"Doing"!==e||i||N(),"Done"===e&&(M(),x()),"Todo"===e&&T&&x()},x=function(){return clearInterval(T)},N=function(){var e=new Date;u.setBeginning(t,e).catch((function(e){return console.log("error incluyendo la fecha de inicio",e)}))},M=function(){var e=new Date;u.setEnd(t,e).catch((function(e){return console.log("error incluyendo la fecha de inicio",e)}))};Object(a.useEffect)((function(){if("Doing"===c&&!y){var e=setInterval((function(){r++,s({type:"UPDATE_DOING",payload:{idx:l,time:r}})}),1e3);k(e),O(!0)}}));return o.a.createElement("div",{className:"todo-card ".concat("Todo"===c?"todo":"Doing"===c?"doing":"done")},o.a.createElement("div",{container:!0,className:"card-info"},o.a.createElement("div",{item:!0,className:"title-wrapper"},o.a.createElement("h5",null,c," "),o.a.createElement("p",{className:"time ".concat("Doing"===c&&"play-time")}," ","Doing"===c?"live":"time"," ",o.a.createElement("br",null)," ",function(e){var t=new Date(1e3*e),n=t.getUTCHours(),a=t.getUTCMinutes(),o=t.getSeconds();return n.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")+":"+o.toString().padStart(2,"0")}(r))),o.a.createElement("div",{className:"task ".concat("Todo"===c&&"todo")},o.a.createElement("p",null,n)),o.a.createElement("div",{className:"todo-controls"},o.a.createElement("div",{className:"secundary-controls"},E?o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{style:{width:30,height:30},onClick:function(){return L("Done")}}),o.a.createElement(G,{style:{width:30,height:30},onClick:function(){u.deleteTodo(t).then((function(){return g.removeTodo(t)})).then((function(e){return s(p({todos:e.todos}))})).catch((function(e){return console.log("error borrando un todo",e)}))}}),o.a.createElement(J,{style:{width:50,height:50},onClick:D})):o.a.createElement(J,{style:{width:50,height:50},onClick:D})),o.a.createElement("div",{className:"primary-controls"},"Doing"!=c?o.a.createElement(B,{style:{width:50,height:50},onClick:function(){return L("Doing")}}):o.a.createElement(H,{style:{width:50,height:50},onClick:function(){return L("Todo")}})))))},q=n(164),Q=n(167),$=n(168),K=n(166),X=n(165),Y=Object(q.a)((function(e){return{title:{flexGrow:1,textAlign:"right"}}}));function Z(e){var t=e.children,n=e.window,a=Object(X.a)({target:n?n():void 0});return o.a.createElement(K.a,{appear:!1,direction:"down",in:!a},t)}function ee(e){var t=Y();return o.a.createElement(Z,e,o.a.createElement(Q.a,{className:t.root},o.a.createElement($.a,{className:"justify-xs-space-between"},o.a.createElement("button",{className:"button",onClick:e.toggleAddTodo},"Add to do"),o.a.createElement("p",{className:t.title,style:{textDecoration:"underline"},onClick:e.logOut},"Log out"))))}var te=n(175),ne=function(e){return o.a.createElement(C.a,{open:e.showTodoModal,onClose:e.toggleAddTodo,"aria-labelledby":"form-dialog-title"},o.a.createElement(S.a,{id:"form-dialog-title"},"New ToDo"),o.a.createElement(T.a,null,o.a.createElement(k.a,{autoFocus:!0,margin:"dense",id:"name",name:"name",label:"name",type:"text",fullWidth:!0,onChange:e.handleChange}),o.a.createElement(k.a,{autoFocus:!0,margin:"dense",id:"category",name:"category",label:"Choose a category",select:!0,value:e.newTodo&&e.newTodo.category,fullWidth:!0,onChange:e.handleChange},e.category.map((function(e,t){return o.a.createElement(te.a,{key:t,value:e},e)})))),o.a.createElement(D.a,null,o.a.createElement(L.a,{onClick:e.toggleAddTodo,color:"primary"},"Cancel"),o.a.createElement(L.a,{onClick:e.handleAddTodoSubmit,color:"primary"},"Create")))},ae=["Work","Study","Personal Project","Workout","Fun","Reading"],oe=function(e){var t=e.history,n=new F,r=new j,c=new O,i=Object(d.b)(),l=z(),s=Object(a.useState)(!1),u=Object(h.a)(s,2),v=u[0],w=u[1],y=Object(d.c)((function(e){return b(e)})),C=Object(d.c)((function(e){return function(e){return Object(E.get)(e,"todoReducers.todoList")}(e)}));Object(a.useEffect)((function(){y||c.loggedin().then((function(){return r.getUser()})).then((function(e){i(f({user:e})),i(p({todos:e.todos}))})).catch((function(e){console.log("RC error checking user in todos",e),t.push("/")}))}));var S=Object(a.useState)({creator:y?y._id:void 0,name:"",category:"",time:0,status:"Todo",beginningDate:null,endDate:null}),T=Object(h.a)(S,2),k=T[0],D=T[1],L=function(e){w(!v)},x=function(e){return C?C.map((function(t,n){return t.status===e&&o.a.createElement(V,Object.assign({key:n},t,{idx:n}))})):o.a.createElement(U.a,{size:50,color:"primary"})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(ee,{toggleAddTodo:L,logOut:function(){c.logout(),t.push("/")}}),o.a.createElement(R.a,{container:!0,className:l.container},o.a.createElement(R.a,{className:l.todoWrapper,xs:12,sm:3},x("Doing")),o.a.createElement(R.a,{className:l.todoWrapper,xs:12,sm:3},x("Todo")),o.a.createElement(R.a,{className:l.todoWrapper,xs:12,sm:3},x("Done")),o.a.createElement(ne,{showTodoModal:v,toggleAddTodo:L,handleChange:function(e){D(Object(m.a)({},k,Object(g.a)({},e.target.name,e.target.value)))},handleAddTodoSubmit:function(e){e.preventDefault(),n.newTodo(k).then((function(e){return r.addTodo(e._id)})).then((function(e){i(f({user:e})),i(p({todos:e.todos}))})).catch((function(e){return console.log("RC error creado el todo en el front",e)})).then((function(){D({creator:y?y._id:void 0,name:"",category:"",time:0,status:"Todo",beginningDate:null,endDate:null}),L()}))},newTodo:k,category:ae})))},re=(n(117),function(e){var t=e.store;return o.a.createElement(d.a,{store:t},o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(u.a,{exact:!0,path:"/",component:M}),o.a.createElement(u.a,{path:"/todos",component:oe}))))}),ce=n(28),ie=n(79),le={},se=n(80),ue={},de=Object(ce.combineReducers)({authReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGGED_USER":return Object(m.a)({},e,{loggedUser:t.payload.user});default:return Object(m.a)({},e)}},todoReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_TODO_LIST":return Object(m.a)({},e,{todoList:t.payload.todos});case"UPDATE_DOING":var n=t.payload.idx,a=t.payload.time,o=Object(se.a)(e.todoList),r=o[n];return r.time=a,o.splice(n,1,r),Object(m.a)({},e,{todoList:o});default:return Object(m.a)({},e)}}}),ge=function(){return Object(m.a)({},Object(ce.createStore)(de,Object(ie.composeWithDevTools)(Object(ce.applyMiddleware)())))}();c.a.render(o.a.createElement(re,{store:ge}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");i?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):l(e)}))}}()},76:function(e,t,n){e.exports=n.p+"static/media/d511ce029edd7821931446e4bd7266bd.a391b707.jpg"},87:function(e,t,n){e.exports=n(119)},96:function(e,t,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.58ce6c1d.chunk.js.map