(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(6),r=n.n(o),i=(n(15),n(9)),u=n(2),l=n.p+"static/media/header_logo.a307e1c4.svg";var p=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:l,alt:"\u041c\u0435\u0441\u0442\u043e",className:"header__logo"})})},d=n.p+"static/media/avatar-redact.a086f758.svg",j=s.a.createContext();var h=function(e){var t=s.a.useContext(j),n=e.card.owner._id===t._id,c="place__delete ".concat(n?"place__delete_active":""),o=e.card.likes.some((function(e){return e._id===t._id})),r="place__counter_button ".concat(o?"place__counter_button_active":"");return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"place",children:[Object(a.jsx)("button",{type:"button",className:"place__open",onClick:function(){e.onCardClick(e.card)},children:Object(a.jsx)("img",{src:e.card.link,alt:e.card.name,className:"place__image"})}),Object(a.jsx)("button",{type:"button",className:c,onClick:function(){e.onCardDelete(e.card)}}),Object(a.jsxs)("div",{className:"place__main",children:[Object(a.jsx)("h3",{className:"place__name",children:e.card.name}),Object(a.jsxs)("div",{className:"place__counter",children:[Object(a.jsx)("button",{type:"button",className:r,onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("span",{className:"place__counter_like",children:e.card.likes.length})]})]})]})})})},b=s.a.createContext();var m=function(e){var t=s.a.useContext(j),n=s.a.useContext(b);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:"spinner",children:Object(a.jsx)("i",{})}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("button",{type:"button",className:"profile__avatar-button",onClick:e.onEditAvatar,children:[Object(a.jsx)("img",{src:d,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430",className:"profile__avatar_hover"}),Object(a.jsx)("img",{src:t.avatar?t.avatar:"",alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430",className:"profile__avatar"})]}),Object(a.jsxs)("div",{className:"profile__redact",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("p",{className:"profile__about",children:t.about}),Object(a.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile})]})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"places",children:n.map((function(t){return Object(a.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})]})})};var _=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa92020 Mesto Russia"})})};var f=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup__is-opened":""),children:[Object(a.jsx)("input",{className:"popup__overlay popup__overlay_active",onClick:e.onClose}),Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-image",onClick:e.onClose,children:" "}),Object(a.jsx)("h2",{className:"popup__head",children:e.title}),Object(a.jsx)("form",{name:"popup-".concat(e.name),className:"popup__content",onSubmit:e.onSubmit,children:e.children})]})]})})};var O=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("section",{className:"popup popup_type_image ".concat(e.isOpen?"popup__is-opened":""),id:"popup-image",children:[Object(a.jsx)("input",{className:"popup__overlay"}),Object(a.jsxs)("div",{className:"popup__image",id:"Image",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-image",onClick:e.onClose,children:" "}),Object(a.jsx)("img",{src:e.card.link,alt:"",className:"popup__photo"}),Object(a.jsx)("h4",{className:"popup__name",children:e.card.name})]})]})})},v=n(7),x=n(8),k=function(){function e(t){var n=t.baseUrl,a=t.headers;Object(v.a)(this,e),this.baseUrl=n,this._headers=a}return Object(x.a)(e,[{key:"getInfoUser",value:function(){return fetch("".concat(this.baseUrl,"/users/me "),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards  "),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"sendUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me "),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"sendPlace",value:function(e){return fetch("".concat(this.baseUrl,"/cards  "),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e," "),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this.baseUrl,"/cards/likes/").concat(e," "),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})):fetch("".concat(this.baseUrl,"/cards/likes/").concat(e," "),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"putLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e," "),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e," "),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"sendAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}(),C=k=new k({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-18",headers:{authorization:"a636e40b-41e2-4486-9487-73203d96297e","Content-Type":"application/json"}});var g=function(e){var t=s.a.useContext(j),n=s.a.useState(),c=Object(u.a)(n,2),o=c[0],r=c[1],i=s.a.useState(),l=Object(u.a)(i,2),p=l[0],d=l[1];return s.a.useEffect((function(){r(t.name),d(t.about)}),[t]),Object(a.jsx)(f,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:p})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",name:"name",className:"popup__input",required:!0,id:"name-input",onChange:function(e){r(e.target.value)},defaultValue:o,placeholder:"\u0418\u043c\u044f"}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(a.jsx)("input",{type:"text",name:"about",className:"popup__input",required:!0,id:"job-input",onChange:function(e){d(e.target.value)},defaultValue:p,placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}),Object(a.jsx)("span",{className:"popup__input-error",id:"job-input-error"}),Object(a.jsx)("button",{type:"submit",className:"popup__save-button popup__save-button_profile",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var N=function(e){var t=s.a.useRef();return Object(a.jsx)(f,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"url",name:"avatar",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:t,id:"link_avatar-input"}),Object(a.jsx)("span",{className:"popup__input-error",id:"link_avatar-input-error"}),Object(a.jsx)("button",{type:"submit",className:"popup__save-button popup__save-button_avatar",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var y=function(e){var t=s.a.useState("place"),n=Object(u.a)(t,2),c=n[0],o=n[1],r=s.a.useState("link"),i=Object(u.a)(r,2),l=i[0],p=i[1];return Object(a.jsx)(f,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:l})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",name:"name",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){o(e.target.value)},id:"place-input"}),Object(a.jsx)("span",{className:"popup__input-error",id:"place-input-error"}),Object(a.jsx)("input",{type:"url",name:"link",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){p(e.target.value)},id:"link-input"}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-input-error"}),Object(a.jsx)("button",{type:"submit",className:"popup__save-button popup__save-button_gallery ",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})};var P=function(){var e=s.a.useState(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],o=s.a.useState(!1),r=Object(u.a)(o,2),l=r[0],d=r[1],h=s.a.useState(!1),v=Object(u.a)(h,2),x=v[0],k=v[1],P=s.a.useState(!1),U=Object(u.a)(P,2),S=U[0],E=U[1],L=s.a.useState({name:"",link:""}),A=Object(u.a)(L,2),D=A[0],F=A[1],T=s.a.useState("user"),I=Object(u.a)(T,2),w=I[0],J=I[1],q=s.a.useState([]),B=Object(u.a)(q,2),H=B[0],M=B[1];function R(){E(!1),k(!1),d(!1),c(!1)}return s.a.useEffect((function(){C.getInfoUser().then((function(e){console.log(e),J(e)})).catch((function(e){console.log(e)})),C.getInitialCards().then((function(e){M(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsx)(j.Provider,{value:w,children:Object(a.jsxs)(b.Provider,{value:H,children:[Object(a.jsx)(p,{}),Object(a.jsx)(m,{onEditProfile:function(){c(!0)},onAddPlace:function(){k(!0)},onEditAvatar:function(){d(!0)},onCardClick:function(e){F(e),E(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===w._id}));C.changeLikeCardStatus(e._id,t).then((function(t){var n=H.map((function(n){return n._id===e._id?t:n}));M(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){C.deleteCard(e._id).then((function(){var t=H.filter((function(t){return t._id!==e._id}));M(t)})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(_,{}),Object(a.jsx)(g,{isOpen:n,onClose:R,onUpdateUser:function(e){C.sendUserInfo(e).then((function(e){J(e),R()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(y,{isOpen:x,onClose:R,onAddPlace:function(e){C.sendPlace(e).then((function(e){M([e].concat(Object(i.a)(H))),R()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(N,{isOpen:l,onClose:R,onUpdateAvatar:function(e){C.sendAvatar(e).then((function(e){J(e),R()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(f,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b",children:Object(a.jsx)("button",{type:"submit",className:"popup__delete-button",children:"\u0414\u0430"}),onClose:R}),Object(a.jsx)(O,{card:D,onClose:R,isOpen:S})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),U()}},[[16,1,2]]]);
//# sourceMappingURL=main.b22002ed.chunk.js.map