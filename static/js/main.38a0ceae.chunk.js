(this["webpackJsonpadam-batstone-project-five"]=this["webpackJsonpadam-batstone-project-five"]||[]).push([[0],{21:function(e,t,a){e.exports=a(34)},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),s=(a(26),a(16)),c=a(17),i=a(18),m=a(20),u=a(19),p=a(7),d=a.n(p);a(27);d.a.initializeApp({apiKey:"AIzaSyCSuCFIe2ch2hRdRIHk3tQYh0MzQBJx-8A",authDomain:"music-notes-app-3a127.firebaseapp.com",databaseURL:"https://music-notes-app-3a127.firebaseio.com",projectId:"music-notes-app-3a127",storageBucket:"music-notes-app-3a127.appspot.com",messagingSenderId:"36567821030",appId:"1:36567821030:web:f97f5aec5248fdefcd6927"});var h=d.a,E=a(4),v=a.n(E),f=function(){var e=v()().format("dddd MMMM Do YYYY");return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"headerContainer"},r.a.createElement("h1",null,"Music Notes \u266b"),r.a.createElement("p",null,e))))},N=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"footerContainer"},r.a.createElement("p",null,"\xa9 2020 Adam Batstone ||",r.a.createElement("a",{href:"https://junocollege.com/",className:"junoFooterLink"}," Created at Juno College")))))},b=a(8),g=a(5),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.handleClick=function(t){t.preventDefault();var a=document.getElementById("repList"),n=document.getElementById("newNote"),r=document.querySelector(".submitBtn");if(console.log(r),""===e.state.repList||""===e.state.noteInput)a.placeholder="Please enter repertoire details",n.placeholder="Please enter rehearsal notes",r.style.backgroundColor="red";else{a.placeholder="Enter repertoire details",n.placeholder="Enter rehearsal notes",r.style.backgroundColor="#4a5859";var l=h.database().ref(),o=v()().format("MMM Do LT"),s={rep:e.state.repList,note:e.state.noteInput,date:o};l.push(s),e.setState({repList:"",noteInput:""})}},e.minimizeNote=function(e){var t=e.target,a=t.parentNode.parentNode,n=t.parentNode.nextSibling;e.target.matches(".min")&&(a.classList.toggle("border"),n.classList.toggle("noteDetails"))},e.removeNote=function(e){h.database().ref().child(e).remove()},e.state={notes:[],repList:"",noteInput:"",deleteNotes:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().on("value",(function(t){var a=[],n=t.val();for(var r in n)console.log(n[r]),a.push({key:r,note:n[r].note,rep:n[r].rep,date:n[r].date});var l=a.reverse();e.setState({notes:l}),console.log(a)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("div",{className:"bannerImg"},r.a.createElement("div",{className:"bannerTextContainer"},r.a.createElement("div",{className:"bannerText"},r.a.createElement("h2",null,"Take notes during rehearsal and track your progress \u266c")))),r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",{className:"newPracticeSession"},r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",{action:"submit"},r.a.createElement("label",{htmlFor:"newNote"},"Repertoire"),r.a.createElement("textarea",{type:"textarea",name:"repList",id:"repList",placeholder:"Enter repertoire details",onChange:this.handleChange,value:this.state.repList}),r.a.createElement("label",{htmlFor:"newNote"},"Rehearsal Notes"),r.a.createElement("textarea",{type:"textarea",name:"noteInput",id:"newNote",placeholder:"Enter rehearsal notes",onChange:this.handleChange,value:this.state.noteInput}),r.a.createElement("button",{className:"submitBtn",onClick:this.handleClick},"Submit"))))),r.a.createElement("div",{className:"listContainer"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",null,this.state.notes.map((function(t){return r.a.createElement("li",{key:t.key,className:"border"},r.a.createElement("div",{className:"dateContainer",onClick:function(a){return e.minimizeNote(a,t.key)}},r.a.createElement("h3",null,r.a.createElement("span",null,"\u266b"),t.date),r.a.createElement("button",{className:"min iconMinus"},r.a.createElement(b.a,{icon:g.a})),r.a.createElement("button",{className:"iconDelete",onClick:function(){return e.removeNote(t.key)}},r.a.createElement(b.a,{icon:g.b}))),r.a.createElement("div",{className:"notesContainer"},r.a.createElement("div",{className:"repContainer"},r.a.createElement("h4",null,"Repertoire"),r.a.createElement("p",null,t.rep)),r.a.createElement("div",{className:"noteContainer"},r.a.createElement("h4",null,"Notes"),r.a.createElement("p",null,t.note))))})))))),r.a.createElement(N,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.38a0ceae.chunk.js.map