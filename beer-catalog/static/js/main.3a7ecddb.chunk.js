(this.webpackJsonpcatalog=this.webpackJsonpcatalog||[]).push([[0],{21:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(5),i=n.n(s),o=(n(21),n(3)),u=(n(30),n(6)),l=(n(31),n(2)),d=(n(32),"FETCH_PRODUCTS"),j="ADD_TO_CART",b="SORT",m="SET_PAGE",p="SET_CURRENT_SORT",O="TOGGLE_EXPLORE_MENU",f="SEARCH_PRODUCTS",g="SET_SEARCH_QUERY",h="SET_SEARCH_TIMER",_="TOGGLE_CART",v="TOGGLE_SIGNUP",x="SET_SIGNUP_FORM_FIELD_VALUE",C="UPDATE_FIELDS",y="EMPTY_FORM_INPUT",N=n(11),P=n.n(N),S=n(14);function E(){return(E=Object(S.a)(P.a.mark((function e(t,n){var r,a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.entries(n).map((function(e){return"".concat(e[0],"=").concat(e[1])})).join("&"),e.next=3,fetch("".concat(t,"?").concat(r),{method:"GET"});case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={string:function(e,t){return e.toUpperCase()>t.toUpperCase()?1:-1},number:function(e,t){return e-t}},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"string";return function(n){return n?function(n,r){return w[t](n[e],r[e])}:function(n,r){return w[t](r[e],n[e])}}},U=(T("name","string"),function(e,t){return Object(u.a)(e).sort(t)}),I=function(){return window.scrollTo({top:0})},F={getBeerPage:function(e){return function(e,t){return E.apply(this,arguments)}("https://api.punkapi.com/v2/beers",{page:e,per_page:80})}},k=function(e){return function(t){t({type:j,data:e})}},B=function(e){return function(t){t({type:m,data:{page:e}})}};var A=Object(o.b)(null,{addToCart:k})((function(e){var t=e.item;return Object(r.jsxs)("div",{className:"Item card",children:[Object(r.jsx)("img",{className:"Item__img card__img",src:t.imgUrl,alt:t.name}),Object(r.jsx)("h3",{className:"Item__title card__text",children:t.name}),Object(r.jsxs)("div",{className:"Item__content",children:[Object(r.jsxs)("div",{className:"card__text",children:["ABV: ",t.abv]}),Object(r.jsxs)("div",{className:"card__text",children:["IBU: ",t.ibu]})]}),Object(r.jsxs)("button",{type:"button",className:"Item__add-to-cart",children:[Object(r.jsx)("span",{className:"card__text",children:"Add to card"}),Object(r.jsx)("input",{className:"Item__checkbox",type:"checkbox",checked:t.isInCart,onChange:function(){var n=Object(l.a)(Object(l.a)({},t),{},{isInCart:!t.isInCart});e.addToCart(n)}})]})]})})),R=(n(34),function(e){var t=e.products;return Object(r.jsx)("ul",{className:"Products",children:t.map((function(e){return Object(r.jsx)("li",{className:"Product",children:Object(r.jsx)(A,{item:e})},e.id)}))})}),D=(n(35),function(e){var t=e.currentPage<e.pages,n=e.currentPage>1;return e.pages>1?Object(r.jsxs)("div",{className:"Paginator",children:[n?Object(r.jsx)("button",{className:"Paginator__btn",type:"button",onClick:function(){var t=e.currentPage-1;e.setPage(t),I()},children:"Prev"}):"",Object(r.jsx)("ul",{onClick:function(t){var n=t.target;if("BUTTON"!==!n.type){var r=Number(n.textContent.trim());e.setPage(r),I()}},className:"Paginator__pages list--horizontal",children:function(){for(var t=[],n=0;n<e.pages;n+=1){var a=n+1,c=a===e.currentPage?" active":"";t.push(Object(r.jsx)("li",{className:"Paginator__page",children:Object(r.jsx)("button",{className:"Paginator__btn".concat(c),type:"button",children:a})},a))}return t}()}),t?Object(r.jsx)("button",{className:"Paginator__btn",type:"button",onClick:function(){var t=e.currentPage+1;e.setPage(t),I()},children:"Next"}):""]}):""}),H=Object(o.b)((function(e){return{currentPage:e.products.currentPage}}),{setPage:B})(D);var L=Object(o.b)((function(e){var t,n,r=e.products;t=r.filter?(n="name",function(e,t){return e.filter((function(e){return e[n]===t?e:e[n].split(" ").find((function(e){return function(e,t){return e.toLowerCase().trim().split("").slice(0,t.length).join("")===t.toLowerCase()}(e,t)}))}))})(Object(u.a)(r.items),r.filter):r.items;var a=r.currentPage,c=r.productsPerPage,s=Math.round(t.length/c),i=(a-1)*c,o=a*c;return{products:t=t.slice(i,o),item:r.item,numberOfPages:s,currentPage:r.currentPage}}),{fetchProducts:function(){return function(e){F.getBeerPage(1).then((function(t){var n;e({type:d,data:(n=t,n.map((function(e){return{id:e.id,name:e.name,imgUrl:e.image_url,abv:e.abv,ibu:e.ibu,isInCart:!1}})))})}))}}})((function(e){var t=e.fetchProducts;return Object(a.useEffect)((function(){e.products.length<=0&&t()}),[t,e.products.length]),Object(r.jsxs)("div",{className:"Catalog",children:[Object(r.jsxs)("div",{className:"Catalog__header",children:[Object(r.jsx)("h1",{children:"Brewdog's beer catalog"}),Object(r.jsxs)("h4",{children:["Page: ",e.currentPage,"/",e.numberOfPages]})]}),Object(r.jsx)(R,{products:e.products,template:A}),Object(r.jsx)(H,{pages:e.numberOfPages})]})})),M=(n(36),function(e){return function(t){t({type:_,value:e})}}),G=function(e){return function(t){t({type:v,value:e})}},q=(n(37),Object(o.b)((function(e){var t=e.search;return{timer:t.timer,query:t.query}}),{searchProducts:function(e){return function(t){t({type:f,data:{query:e}})}},setSearchQuery:function(e){return function(t){t({type:g,data:{query:e}})}},setSearchTimer:function(e){return function(t){t({type:h,data:{timerId:e}})}},setPage:B})((function(e){return Object(r.jsx)("form",{className:"Search",onSubmit:function(e){e.preventDefault()},children:Object(r.jsxs)("label",{className:"Search__field",htmlFor:"search-input",children:["Search",Object(r.jsx)("input",{className:"Search__input",id:"search-input",onChange:function(t){var n=t.target;e.setSearchQuery(n.value),e.timer&&clearTimeout(e.timer);var r=setTimeout((function(){e.setPage(1),e.searchProducts(n.value)}),500);e.setSearchTimer(r)}})]})})}))),V=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("button",{className:"Header__btn",type:"button",onClick:e.onSortBtnClick,children:["Sort (",e.isAcsending?"acsending":"decsending",")"]}),Object(r.jsxs)("label",{htmlFor:"select-sort",children:["Sort by ",Object(r.jsxs)("select",{className:"Header__btn Header__select",id:"select-sort",onChange:e.onSortSelect,children:[Object(r.jsx)("option",{className:"Header__select__option",value:"name",children:"Name"}),Object(r.jsx)("option",{className:"Header__select__option",value:"abv",children:"ABV"}),Object(r.jsx)("option",{className:"Header__select__option",value:"ibu",children:"IBU"})]})]})]})},X=Object(o.b)((function(e){var t=e.header;return{isAcsending:t.isAcsending,sortBy:t.sortBy,isExploreOpen:t.isExploreMenuOpen}}),{sortProducts:function(e){return function(t){var n="name"===e.sortBy?"string":"number";t({type:b,data:Object(l.a)(Object(l.a)({},e),{},{propType:n})})}},setCurrentSort:function(e){return function(t){t({type:p,data:e})}},toggleCart:M,toggleSignUp:G,toggleExploreMenu:function(e){return function(t){t({type:O,data:{isOpen:e}})}}})((function(e){var t=e.isExploreOpen?" isOpen":"";return Object(r.jsxs)("header",{className:"Header",children:[Object(r.jsxs)("div",{className:"Header__explore-menu ".concat(t),children:[Object(r.jsx)(V,{onSortBtnClick:function(){e.sortProducts({sortBy:e.sortBy,isAcsending:e.isAcsending}),e.setCurrentSort({sortBy:e.sortBy,isAcsending:!e.isAcsending})},onSortSelect:function(t){var n=t.target;e.setCurrentSort({sortBy:n.value,isAcsending:!0})}}),Object(r.jsx)(q,{})]}),Object(r.jsx)("button",{className:"Header__btn Nav__explore",type:"button",onClick:function(){return e.toggleExploreMenu(!e.isExploreOpen)},children:"Explore!"}),Object(r.jsx)("button",{className:"Header__btn",type:"button",onClick:function(){return e.toggleCart(!0)},children:"Cart"}),Object(r.jsx)("button",{className:"Header__btn",type:"button",onClick:function(){return e.toggleSignUp(!0)},children:"Sign Up"})]})})),z=(n(38),n(39),Object(o.b)(null,{addToCart:k})((function(e){return Object(r.jsxs)("li",{className:"CartItem",children:[Object(r.jsxs)("span",{className:"CartItem__content",children:[Object(r.jsx)("img",{className:"CartItem__img",src:e.item.imgUrl,alt:e.item.name}),Object(r.jsx)("h3",{className:"CartItem__title",children:e.item.name})]}),Object(r.jsx)("button",{className:"CartItem__remove",type:"button",onClick:function(){var t=Object(l.a)(Object(l.a)({},e.item),{},{isInCart:!1});e.addToCart(t)},children:Object(r.jsx)("img",{src:"https://www.svgrepo.com/show/264838/remove.svg",alt:"remove"})})]},e.item.id)}))),Q=function(e){var t=e.items;return t.length>0?Object(r.jsx)("ul",{className:"Cart__list",children:t.map((function(e){return Object(r.jsx)(z,{item:e})}))}):Object(r.jsx)("h3",{className:"Cart__empty_cart_msg",children:"Your cart is empty..."})},Y=(n(40),function(e){var t=e.isOpen,n=e.children,c=e.onDecline;return Object(a.useEffect)((function(){document.body.style.overflow=t?"hidden":"unset"}),[t]),i.a.createPortal(Object(r.jsx)(r.Fragment,{children:t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"Backdrop",onClick:c}),n]}):""}),document.getElementById("root-modal"))}),J=(n(41),function(e){var t=e.action;return Object(r.jsx)("button",{className:"BtnClose",type:"button",onClick:t,children:Object(r.jsx)("img",{className:"BtnClose__img",src:"https://www.svgrepo.com/show/30681/close.svg",alt:"close"})})}),Z=Object(o.b)((function(e){var t,n=e.products,r=e.pages;return{items:(t="isInCart",function(e,n){return e.filter((function(e){return e[t]===n}))})(Object(u.a)(n.items),!0),isCartOpen:r.isCartOpen}}),{toggleCart:M})((function(e){var t=function(){return e.toggleCart(!1)};return Object(r.jsx)(Y,{isOpen:e.isCartOpen,onDecline:t,children:Object(r.jsxs)("div",{className:"Cart card",children:[Object(r.jsx)(J,{action:t}),Object(r.jsx)("h2",{className:"Cart__title",children:"Cart"}),Object(r.jsx)(Q,{items:e.items}),Object(r.jsxs)("div",{className:"Cart__controls",children:[Object(r.jsx)("button",{className:"btn--ok",type:"button",onClick:t,children:"Return to catalog"}),e.items.length>0?Object(r.jsx)("button",{className:"btn--success",type:"button",onClick:t,children:"Checkout"}):""]})]})})})),$=n(7),K=function(e,t){return function(n){var r=Object($.a)({},e,{value:t,error:""});n({type:x,data:r})}},W=(n(42),function(e){var t=e.label,n=e.name,a=e.fields,c=e.type,s=e.setSignUpFormFieldValue,i=a[n],o=i.value,u=i.error;return Object(r.jsxs)("label",{className:"Field",htmlFor:"".concat(n,"-input"),children:[t,Object(r.jsx)("input",{value:o,type:c,className:"Field__input",id:"".concat(n,"-input"),onChange:function(e){var t=e.target;t.scrollIntoViewIfNeeded(),s(n,t.value)}}),Object(r.jsx)("span",{className:"Field__error-container",children:u})]})}),ee=Object(o.b)((function(e){var t=e.signUpForm;return{fields:Object(l.a)({},t.fields)}}),{setSignUpFormFieldValue:K})(W),te=function(e){var t=e.onSubmit;return Object(r.jsxs)("form",{onSubmit:t,className:"SignUpForm",id:"sign-up-form",children:[Object(r.jsx)(ee,{label:"First name",type:"text",name:"firstName"}),Object(r.jsx)(ee,{label:"Last name",type:"text",name:"lastName"}),Object(r.jsx)(ee,{label:"Email",type:"email",name:"email"}),Object(r.jsx)(ee,{label:"Password",type:"password",name:"password"}),Object(r.jsx)(ee,{label:"Confirm password",type:"password",name:"confirmPassword"}),Object(r.jsx)("button",{className:"SignUpForm__submit",type:"submit",form:"sign-up-form",children:"Sign Up"})]})},ne=function(e){return e.trim().length>0},re=function(e){var t=e.fields,n=e.hasErrors,r={};return Object.keys(t).forEach((function(e){r[e]={value:"",error:""}})),{fields:r,hasErrors:n}},ae=function(e){var t={},n=!1;return Object.keys(e).forEach((function(r){var a=e[r].error,c=e[r].value;switch(r){case"email":(function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())})(c)&&ne(c)||(a="Email is not valid! Please enter a valid email.");break;case"password":(function(e){return e.length>=6})(c)&&ne(c)||(a="Password should be at least 6 characters long!");break;case"confirmPassword":(function(e,t){return e===t})(c,e.password.value)||(a="Password confirmation does not match the password!");break;default:ne(c)||(a="This field is required!")}a&&(n=!0),t[r]={error:a,value:c}})),{fields:Object(l.a)(Object(l.a)({},e),t),hasErrors:n}},ce=(n(43),Object(o.b)((function(e){var t=e.pages,n=e.signUpForm;return{isOpen:t.isSignUpOpen,fields:n.fields}}),{toggleSignUp:G,setSignUpFormFieldValue:K,updateFields:function(e){return function(t){t({type:C,data:e})}},clearFormInput:function(){return function(e){e({type:y})}}})((function(e){var t=function(){e.clearFormInput(),e.toggleSignUp(!1)};return Object(r.jsx)(Y,{isOpen:e.isOpen,onDecline:t,children:Object(r.jsxs)("div",{className:"SignUp card",children:[Object(r.jsx)(J,{action:t}),Object(r.jsx)("h2",{children:"Sign Up"}),Object(r.jsx)(te,{onSubmit:function(n){n.preventDefault();var r=ae(e.fields),a=r.hasErrors,c=r.fields;a?e.updateFields(c):t()}})]})})}))),se=n(4),ie=n(15),oe={isAcsending:!0,sortBy:"name",isExploreMenuOpen:!1};var ue={items:[],item:{},filter:"",currentPage:1,productsPerPage:18};var le={timer:null,query:""},de={isCartOpen:!1,isSignUpOpen:!1},je={fields:{firstName:{value:"",error:""},lastName:{value:"",error:""},email:{value:"",error:""},password:{value:"",error:""},confirmPassword:{value:"",error:""}},hasErrors:!1},be=Object(se.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{items:t.data});case j:return Object(l.a)(Object(l.a)({},e),{},{items:e.items.map((function(e){return e.id===t.data.id?Object(l.a)({},t.data):e})),item:t.data});case b:var n=t.data,r=n.propType,a=n.sortBy,c=n.isAcsending;return Object(l.a)(Object(l.a)({},e),{},{items:U(e.items,T(a,r)(c))});case f:return Object(l.a)(Object(l.a)({},e),{},{filter:t.data.query});case m:var s=t.data.page;return s<1||s>e.items.length/e.productsPerPage?e:Object(l.a)(Object(l.a)({},e),{},{currentPage:s});default:return e}},header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),t.data);case O:return Object(l.a)(Object(l.a)({},e),{},{isExploreMenuOpen:t.data.isOpen});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(l.a)(Object(l.a)({},e),{},{query:t.data.query});case h:return Object(l.a)(Object(l.a)({},e),{},{timer:t.data.timerId});default:return e}},pages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(l.a)(Object(l.a)({},e),{},{isCartOpen:t.value});case v:return Object(l.a)(Object(l.a)({},e),{},{isSignUpOpen:t.value});default:return e}},signUpForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)({},e),{},{fields:Object(l.a)(Object(l.a)({},e.fields),t.data)});case C:return Object(l.a)(Object(l.a)({},e),{},{fields:Object(l.a)({},t.data)});case y:return re(e);default:return e}}}),me=[ie.a],pe=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):se.d)(se.a.apply(void 0,me)),Oe=Object(se.e)(be,{},pe);var fe=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(o.a,{store:Oe,children:[Object(r.jsx)(X,{}),Object(r.jsx)(L,{}),Object(r.jsx)(Z,{}),Object(r.jsx)(ce,{})]})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(fe,{})}),document.getElementById("root")),ge()}},[[44,1,2]]]);
//# sourceMappingURL=main.3a7ecddb.chunk.js.map