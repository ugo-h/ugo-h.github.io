(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{24:function(e,t,a){e.exports=a(45)},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(14),r=a.n(i),l=(a(29),a(30),a(9)),c=a(1),o=a(16),d=a.n(o),u=a(21),h=a(6),m=a(12),k=a(8),v=a(7),b=(a(32),function(e){return e.children}),f=(a(33),function(e){var t=e.isShown,a=e.title,n=e.children,i=e.onConfirm,l=e.onDecline;return r.a.createPortal(s.a.createElement(b,null,t?s.a.createElement(b,null,s.a.createElement("div",{className:"Backdrop"}),s.a.createElement("div",{className:"Modal Utility__card"},s.a.createElement("h2",{className:"Modal__title"},a),s.a.createElement("p",{className:"Modal_body"},n),s.a.createElement("div",{className:"Modal__buttons"},s.a.createElement("button",{className:"Utility__btn--danger",onClick:i},"Delete"),s.a.createElement("button",{className:"Utility__btn",onClick:l},"Cancel")))):""),document.getElementById("portal"))}),E=(a(34),a(35),a(36),{sm:"--sm",small:"--sm"}),y=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).type="delete",n.url="https://www.svgrepo.com/show/243868/delete.svg",n.size=E[e.size]||"",n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.clickHandler;return s.a.createElement("button",{className:"Button-icon".concat(this.size),onClick:e,form:"none"},s.a.createElement("img",{alt:this.type,src:this.url}))}}]),a}(n.Component),p=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return a}(y),_=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).type="edit",n.url="https://www.svgrepo.com/show/61278/edit.svg",n}return a}(y),g=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).type="undo",n.url="https://www.svgrepo.com/show/278483/undo.svg",n}return a}(y),N=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).type="redo",n.url="https://www.svgrepo.com/show/278479/redo.svg",n}return a}(y),w=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).type="checkmark",n.url="https://www.svgrepo.com/show/225864/check-success.svg",n}return a}(y),H=s.a.createContext(),T=function(e){return function(t){return s.a.createElement(H.Consumer,null,(function(a){return s.a.createElement(e,Object.assign({},t,{context:a}))}))}}((function(e){var t,a,n,i,r,l=e.content,c=e.disabled,o=e.deleteHandler,d=e.editHandler,u=e.checkHandler,h=e.context;return c||(t=h.taskId,a=h.taskValue,n=h.inputHandler,i=h.updateTasksHandler,r=t===l.id),s.a.createElement("li",{className:"Task"},s.a.createElement("input",{className:"Task__checkbox",checked:l.isChecked,value:l.isChecked,onChange:function(){return u(l.id)},id:l.id,disabled:c,type:"checkbox",from:"none"}),r?s.a.createElement("input",{className:"Task__input",onKeyDown:function(e){"Enter"===e.key&&i()},autoFocus:!0,name:"currentEditableTask",onBlur:i,onChange:n,value:a}):s.a.createElement("label",{htmlFor:l.id,className:"Task__content"},l.title),c?"":s.a.createElement("div",{className:"Task__buttons"},r?s.a.createElement(w,{size:"small",clickHandler:function(){return i()}}):s.a.createElement(_,{size:"small",clickHandler:d}),s.a.createElement(p,{size:"small",clickHandler:function(){return o(l.id)}})))})),O=function(e){var t=e.tasks,a=e.disabled,n=e.deleteHandler,i=e.editHandler,r=e.checkHandler;return s.a.createElement(b,null,t.length>0?s.a.createElement("ul",{className:"TasksList"},t.map((function(e){return s.a.createElement(T,{disabled:a,content:e,deleteHandler:n,editHandler:function(){return i(e.id,e.title)},checkHandler:r,key:e.id})}))):s.a.createElement("h3",{className:"Utility__caption"},"No tasks yet"))},S=(a(37),function(e){var t=e.content,a=e.deleteHandler;return s.a.createElement("li",{className:"NotesList__element Utility__card"},s.a.createElement("h2",{className:"NotesList__element__title"},t.title),s.a.createElement(O,{disabled:!0,tasks:t.tasks}),s.a.createElement(p,{className:"NotesList__element__delete-btn",clickHandler:a}),s.a.createElement(l.b,{to:"/note/".concat(t.id),className:"NotesList__element__open-btn Utility__btn--success"},"Open"))}),j=function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={notes:[],showModal:!1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getNotesAndSetToState()}},{key:"getNotesAndSetToState",value:function(){var e=JSON.parse(localStorage.getItem("notes"));e=e||[],this.setState({notes:e})}},{key:"deleteHandler",value:function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({showModal:!0}),this.id=t;case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"declineHandler",value:function(){this.setState({showModal:!1})}},{key:"confirmHandler",value:function(){this.setState({showModal:!1}),this.deleteNote(this.id)}},{key:"deleteNote",value:function(e){var t=this.state.notes.filter((function(t){return t.id!==e}));localStorage.setItem("notes",JSON.stringify(t)),this.setState({notes:t})}},{key:"render",value:function(){var e=this,t=this.state.notes;return s.a.createElement(b,null,t.length>0?s.a.createElement("ul",{className:"NotesList"},t.map((function(t,a){return s.a.createElement(S,{content:t,deleteHandler:e.deleteHandler.bind(e,t.id),key:a})}))):s.a.createElement("h2",{className:"Utility__caption"},"There are no notes yet..."),s.a.createElement(f,{isShown:this.state.showModal,title:"Delete",onConfirm:this.confirmHandler.bind(this),onDecline:this.declineHandler.bind(this)},"Do you want to delete this note?"))}}]),a}(n.Component),C=a(10),I=a(23),F=(a(43),function(e){Object(k.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={title:"",tasks:[],task:"",history:[],historyPointer:-1,allowEditing:!0,allowAddingTasks:!0,currentEditableTaskId:0,currentEditableTask:""},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;if(e&&"new"!==e){var t=this.getDataFromLocalStorage(e);this.id=e,this.setState({title:t.title,tasks:t.tasks,allowAddingTasks:!1,allowEditing:!1}),this.addToHistory({tasks:t.tasks})}}},{key:"getDataFromLocalStorage",value:function(e){return JSON.parse(localStorage.getItem("notes")).find((function(t){return t.id===e}))}},{key:"inputChangeHandler",value:function(e){var t=e.target,a=t.name;this.setState(Object(I.a)({},a,t.value))}},{key:"setCurrentEditableTask",value:function(e){var t=e.target.value;this.setState({currentEditableTask:t})}},{key:"updateTasks",value:function(){var e,t=this.state.currentEditableTaskId,a=this.state.currentEditableTask,n=Object(C.a)(this.state.tasks);n.forEach((function(a,n){a.id!==t||(e=n)}));var s={title:a,id:t,isChecked:!1};if(n[e].title!==s.title)return n[e]=s,this.addToHistory({tasks:n}),void this.setState({tasks:n,currentEditableTask:"",currentEditableTaskId:0});this.setState({currentEditableTask:"",currentEditableTaskId:0})}},{key:"submitHandler",value:function(e){var t=this;e.preventDefault();var a=JSON.parse(localStorage.getItem("notes"));a||(a=[]);var n={title:this.state.title,tasks:this.state.tasks},s=a.findIndex((function(e){return e.id===t.id}));s>=0?(n.id=this.id,a[s]=n):(n.id=Date.now().toString("16"),a.push(n)),localStorage.setItem("notes",JSON.stringify(a)),this.props.history.push("/")}},{key:"submitTaskHandler",value:function(e){"Enter"===e.key&&this.addTask()}},{key:"addTask",value:function(){var e=Object(C.a)(this.state.tasks);e.push({title:this.state.task,id:Date.now().toString(16),isChecked:!1}),this.setState({tasks:e,task:""}),this.addToHistory({tasks:e})}},{key:"deleteHandler",value:function(e){var t=Object(C.a)(this.state.tasks).filter((function(t){return t.id!==e}));this.setState({tasks:t}),this.addToHistory({tasks:t})}},{key:"editTaskHandler",value:function(e,t){var a=this.state,n=a.currentEditableTaskId,s=a.currentEditableTask;n=e,s=t,this.setState({currentEditableTaskId:n,currentEditableTask:s})}},{key:"checkHandler",value:function(e){var t=Object(C.a)(this.state.tasks),a=t.findIndex((function(t){return t.id===e}));t[a].isChecked=!t[a].isChecked,this.setState({tasks:t})}},{key:"addToHistory",value:function(e){var t=this.state.historyPointer,a=this.state.history.slice(0,t+1);t++,a.push(e),this.setState({history:a,historyPointer:t})}},{key:"undoHandler",value:function(){var e=Object(C.a)(this.state.history),t=this.state.historyPointer;if(!(t-1<0)){t--;var a=Object(C.a)(e[t].tasks);this.setState({tasks:a,historyPointer:t})}}},{key:"redoHandler",value:function(){var e=Object(C.a)(this.state.history),t=this.state.historyPointer;if(!(t+2>e.length)){t++;var a=Object(C.a)(e[t].tasks);this.setState({tasks:a,historyPointer:t})}}},{key:"enterKeyPressOnTitle",value:function(e){"Enter"===e.key&&this.setState({allowEditing:!1})}},{key:"render",value:function(){var e=this,t=this.state.tasks,a=this.state.allowEditing,n=this.state.allowAddingTasks,i=this.state.historyPointer>0,r=this.state.historyPointer<this.state.history.length-1;return s.a.createElement("form",{className:"NoteForm Utility__card",onSubmit:this.submitHandler.bind(this)},s.a.createElement("div",{className:"NoteForm__controls"},i?s.a.createElement(g,{clickHandler:this.undoHandler.bind(this)}):s.a.createElement("div",{style:{width:"2.3rem"}}),r?s.a.createElement(N,{clickHandler:this.redoHandler.bind(this)}):" "),s.a.createElement("label",{className:"NoteForm__field",onClick:function(){return e.setState({allowEditing:!0})}},"Title:",a?s.a.createElement("input",{autoFocus:a,className:"NoteForm__field__input",form:"none",onBlur:function(){return e.setState({allowEditing:!1})},name:"title",value:this.state.title,onChange:this.inputChangeHandler.bind(this),onKeyDown:this.enterKeyPressOnTitle.bind(this)}):s.a.createElement("h3",{className:"NoteForm__title"},this.state.title,s.a.createElement("img",{alt:"edit",src:"https://www.svgrepo.com/show/61278/edit.svg"}))),s.a.createElement("label",{className:"NoteForm__field"},"Tasks:"),s.a.createElement("div",{className:"NoteForm__field"},s.a.createElement(H.Provider,{value:{taskId:this.state.currentEditableTaskId,taskValue:this.state.currentEditableTask,inputHandler:this.setCurrentEditableTask.bind(this),updateTasksHandler:this.updateTasks.bind(this)}},t.length>0?s.a.createElement(O,{tasks:t,deleteHandler:this.deleteHandler.bind(this),checkHandler:this.checkHandler.bind(this),editHandler:this.editTaskHandler.bind(this)}):null),n?s.a.createElement("input",{autoFocus:!a,className:"NoteForm__field__input",onBlur:function(){return e.setState({allowAddingTasks:!1})},onKeyDown:this.submitTaskHandler.bind(this),name:"task",form:"none",value:this.state.task,onChange:this.inputChangeHandler.bind(this)}):s.a.createElement("button",{onClick:function(){return e.setState({allowAddingTasks:!0})},className:"NoteForm__btn Utility__btn--alert"},"Add Task")),s.a.createElement("input",{className:"NoteForm__btn--right Utility__btn--success",type:"submit",value:"Save Changes"}))}}]),a}(n.Component)),D=Object(c.h)(F);var M=function(){var e=Object(c.g)();return s.a.createElement(c.d,null,s.a.createElement(c.b,{path:"".concat(e.url,"/new/clear")},s.a.createElement("div",{className:"Layout__main"},s.a.createElement(c.a,{to:"".concat(e.url,"/new")}))),s.a.createElement(c.b,{path:"".concat(e.url,"/new")},s.a.createElement("div",{className:"Layout__main"},s.a.createElement(D,{type:"create"}))),s.a.createElement(c.b,{path:"".concat(e.url,"/:id")},s.a.createElement("div",{className:"Layout__main"},s.a.createElement(D,{type:"edit"}))))},P=(a(44),function(e){return s.a.createElement("header",{className:"Header"},s.a.createElement("nav",{className:"Header__nav"},s.a.createElement(l.b,{className:"Header__nav__el",to:"/"},"My Notes"),s.a.createElement(l.b,{className:"Header__nav__el",to:"/note/new/clear"},"New Note")))}),L=document.createElement("div");L.id="portal",document.body.appendChild(L);var A=function(){return s.a.createElement(l.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(P,null),s.a.createElement(c.d,null,s.a.createElement(c.b,{path:"/note"},s.a.createElement(M,null)),s.a.createElement(c.b,{path:"/"},s.a.createElement("div",{className:"Layout__main"},s.a.createElement(j,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.da5a3cb2.chunk.js.map