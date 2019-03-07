(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(65)},33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),s=(a(33),a(2)),i=a(3),o=a(5),u=a(4),h=a(6),m=(a(34),a(35),a(69)),p=a(68),d=a(66),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"main-login-signup"},r.a.createElement("p",null,"Do you have an account?"),r.a.createElement("p",null,r.a.createElement(d.a,{to:"/Login"},"Login"))," or",r.a.createElement("p",null,r.a.createElement(d.a,{to:"/Signup"},"Signup")))}}]),t}(n.Component),g=a(11),v=a(13),y=a.n(v),E=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,a){return t.service.post("signup",{username:e,password:a}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.login=function(e,a){return t.service.post("login",{username:e,password:a},{validateStatus:function(e){return e>=200&&e<300}}).then(function(e){return e.data}).catch(function(e){throw console.log(e),e})},this.edit=function(e){return t.service.put("edit",{username:e}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.loggedin=function(){return t.service.get("loggedin").then(function(e){return e.data})},this.loginSpotify=function(e){return t.service.post("login-spotify",{code:e},{validateStatus:function(e){return e>=200&&e<300}}).then(function(e){return e.data}).catch(function(e){throw console.log(e),e})};var a=y.a.create({baseURL:"http://localhost:3001/auth",withCredentials:!0});this.service=a},b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({username:"",password:""}),a.props.getUser(e)}).catch(function(e){return console.log(e)})},a.state={username:"",password:""},a.service=new E,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",null,r.a.createElement("h2",null,"Sign up!"),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"username",name:"username",value:this.state.username,placeholder:"Username"}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,type:"password",id:"password",name:"password",value:this.state.password,placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit},"Create your account"))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){console.log("Respuesta login: "+JSON.stringify(e)),a.setState({username:t,password:n,error:!1,logged:!0,spotifyLoginUrl:e.spotifyLoginUrl}),a.props.getUser(e.theUser)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.state={username:"marujon",password:"1111"},a.service=new E,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.logged?(window.location=this.state.spotifyLoginUrl,null):r.a.createElement("div",{class:"main-login-signup"},r.a.createElement("h1",null,"Log in"),r.a.createElement("div",{className:"left-column"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"username",name:"username",value:this.state.username}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",id:"password",name:"password",value:this.state.password})),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit},"Log in"),r.a.createElement("p",null,this.state.error?"Wrong user or password":""))}}]),t}(n.Component),j=a(70),S=a(57),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={logged:!1},a.service=new E,setTimeout(function(){console.log("Logging to spotify");var e=S.parse(a.props.location.search,{ignoreQueryPrefix:!0}).code;a.service.loginSpotify(e).then(function(e){console.log("Logged to spotify"),a.setState({logged:!0})}).catch(function(e){console.log("Not logged to spotify"),a.setState({error:!0})})},1e3),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.logged?r.a.createElement(j.a,{to:"/profile"}):r.a.createElement("div",{class:"main-login-signup"},r.a.createElement("h1",null,"Login to Spotify..."))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"My profile"),r.a.createElement("p",null,r.a.createElement(d.a,{to:"/profile/edit"},"Edit")),r.a.createElement("p",null,r.a.createElement(d.a,{to:"/create-party"},"Create Playlist")),r.a.createElement("p",null,r.a.createElement(d.a,{to:"/playlists"},"My playlists")))}}]),t}(n.Component),C=a(26),P=function e(){var t=this;Object(s.a)(this,e),this.getParties=function(){return t.service.get("/").then(function(e){return e.data})},this.createParty=function(e){return t.service.post("/",{partyName:e}).then(function(e){return e.data}).catch(function(e){throw console.log(e),e})},this.getPlayList=function(e){return t.service.get("/"+e).then(function(e){return e.data})};var a=y.a.create({baseURL:"http://localhost:3001/party",withCredentials:!0});this.service=a},N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getParties=function(){a.PartyService.getParties().then(function(e){a.setState(Object(C.a)({},a.state,{playlists:e.data}))}).catch(function(e){return console.log(e)})},a.state={playlists:[]},a.PartyService=new P,a.getParties(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"My Playlists"),this.state.playlists.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",null,r.a.createElement("p",null,"Party name: ",e.partyName," ",r.a.createElement(d.a,{to:"/playlists-detail/"+e._id},r.a.createElement("h4",{className:"go-link"},"GO!")))))}))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),U=function e(){var t=this;Object(s.a)(this,e),this.getTrack=function(){return t.service.get("/").then(function(e){return e.data})},this.searchTrack=function(e,a){return t.service.post("/search",{track:e,userId:a}).then(function(e){return e.data}).catch(function(e){throw console.log(e),e})},this.addTrack=function(e,a){return t.service.post("/",{track:e,partyId:a}).then(function(e){return e.data}).catch(function(e){throw console.log(e),e})};var a=y.a.create({baseURL:"http://localhost:3001/tracks",withCredentials:!0});this.service=a},L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.track;a.service.searchTrack(t).then(function(e){console.log(e),a.setState({tracks:e,trackHere:!0,message:"your track"})}).catch(function(e){a.setState({message:"No track yet"})})},a.addTrack=function(e){var t=a.props.match.params.partyId;a.service.addTrack(e,t).then(function(e){a.setState({songAdded:!0})}).catch(function(e){a.setState({message:"Error adding song"})})},a.state={tracks:[]},a.service=new U,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.match.params.partyId;return this.state.songAdded?r.a.createElement(j.a,{to:"/playlists-detail/"+t}):r.a.createElement("div",null,r.a.createElement("p",null,"Search a song!"),r.a.createElement("div",{className:"left-column"},r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"track",name:"track",placeholder:"Search",value:this.state.track}))),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit},"Go!"),r.a.createElement("div",null,this.state.tracks.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"info-track"},r.a.createElement("h3",null,t.name),r.a.createElement("img",{src:t.image,alt:t.album}),r.a.createElement("button",{onClick:function(){return e.addTrack(t)}},"Add to party!")))})),r.a.createElement("span",null,this.state.message))}}]),t}(n.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{to:"/profile"},"Update"))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getPlayList=function(){console.log(a.state);var e=a.props.match.params.partyId;console.log(e),a.PartyService.getPlayList(e).then(function(e){console.log(e),a.setState({playlist:e})}).catch(function(e){return console.log(e)})},a.state={playlist:void 0},a.PartyService=new P,a.getPlayList(),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.playlist?r.a.createElement("div",null,r.a.createElement("div",null,"Playlist: ",this.state.playlist.partyName),r.a.createElement("div",null,"Created at: ",this.state.playlist.created_at),r.a.createElement("p",null,r.a.createElement(d.a,{to:"/add-track-to-party/"+this.state.playlist._id},"add song"))):r.a.createElement("div",null,"Cargando...")}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"MAIN USER")}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.partyName;a.service.createParty(t).then(function(e){a.setState({partySaved:!0,message:"Party saved"})}).catch(function(e){a.setState({message:"Party not saved"})})},a.state={partyName:""},a.service=new P,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.partySaved?r.a.createElement(j.a,{to:"/playlists"}):r.a.createElement("div",null,r.a.createElement("p",null,"Create Party"),r.a.createElement("div",{className:"left-column"},r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"partyName",name:"partyName",placeholder:"Party name",value:this.state.partyName}))),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit},"Save"),r.a.createElement("span",null,this.state.message),r.a.createElement("p",null,r.a.createElement(d.a,{to:"/playlists"},"My playlists")))}}]),t}(n.Component),R=function e(){var t=this;Object(s.a)(this,e),this.getSpotifyParties=function(){return t.service.get("/").then(function(e){return e.data})},this.createSpotifyParty=function(e){return t.service.post("/",{partyName:e}).then(function(e){return e.data}).catch(function(e){throw console.log(e),e})},this.getSpotifyPlayList=function(){return t.service.get("/").then(function(e){return e.data})};var a=y.a.create({baseURL:"http://localhost:3001/spotify",withCredentials:!0});this.service=a},A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.partyName;a.service.createSpotifyParty(t).then(function(e){a.setState({partySaved:!0,message:"Party saved"})}).catch(function(e){a.setState({message:"Party not saved"})})},a.state={partyName:""},a.service=new R,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.partySaved?r.a.createElement(j.a,{to:"/playlists"}):r.a.createElement("div",null,r.a.createElement("p",null,"Create Spotify Party"),r.a.createElement("div",{className:"left-column"},r.a.createElement("div",null,r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"partyName",name:"partyName",placeholder:"Party name",value:this.state.partyName}))),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit},"Save"),r.a.createElement("span",null,this.state.message),r.a.createElement("p",null,r.a.createElement(d.a,{to:"/playlists"},"My playlists")))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.service=new E,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h2",{class:"main-logo"},"jukeBar"),r.a.createElement(m.a,null,r.a.createElement(p.a,{exact:!0,path:"/main",component:f}),r.a.createElement(p.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(b,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(O,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/login-spotify",component:w}),r.a.createElement(p.a,{exact:!0,path:"/profile",component:k}),r.a.createElement(p.a,{exact:!0,path:"/profile/edit",component:I}),r.a.createElement(p.a,{exact:!0,path:"/create-party",component:D}),r.a.createElement(p.a,{exact:!0,path:"/playlists",component:N}),r.a.createElement(p.a,{exact:!0,path:"/playlists-detail/:partyId",component:T}),r.a.createElement(p.a,{exact:!0,path:"/addsong-vote",component:x}),r.a.createElement(p.a,{exact:!0,path:"/main-user",component:M}),r.a.createElement(p.a,{exact:!0,path:"/add-track-to-party/:partyId",component:L}),r.a.createElement(p.a,{exact:!0,path:"/create-spotify-party",component:A})),r.a.createElement(d.a,{to:"/main",className:"Home"},"HOME"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(67);l.a.render(r.a.createElement(H.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.e893b3b3.chunk.js.map