"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[259],{259:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(439),r=n(791),s=n(434),c=n(440),o=n(208),i=function(e){return e.phonebook.contacts.items},l=function(e){return e.phonebook.contacts.isLoading},u=function(e){return e.phonebook.contacts.error},m=function(e){return e.phonebook.contactsFilter},d=n(184);var h=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],l=t[1],u=(0,r.useState)(""),m=(0,a.Z)(u,2),h=m[0],f=m[1],p=(0,s.v9)(i),b=(0,s.I0)(),x=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":l(a);break;case"number":f(a);break;default:return}};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),b((0,c.hk)()),p.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))&&p.find((function(e){return e.name===n}))?alert("".concat(n," is already in contacts")):p.find((function(e){return e.number===h}))?alert("Number ".concat(h," already exists")):(b((0,o.uK)({name:n,number:h})),l(""),f(""))},children:[(0,d.jsxs)("label",{className:"form-label",children:["Name",(0,d.jsx)("input",{className:"form-input",placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:x})]}),(0,d.jsxs)("label",{className:"form-label",children:["Number",(0,d.jsx)("input",{className:"form-input",placeholder:"Number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:h,onChange:x})]}),(0,d.jsx)("button",{className:"form-button",type:"submit",children:"Add contact"})]})})},f=n(264);var p=function(){var e=(0,s.v9)(i),t=(0,s.I0)(),n=(0,s.v9)(m);(0,r.useEffect)((function(){t((0,o.yF)())}),[t]);var a=function(e){t((0,c.hk)()),t((0,o.GK)(e.target.dataset.id))},l=n.length>0?n:e;return(0,d.jsx)("ul",{className:"contact",children:l.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,d.jsxs)("li",{className:"contact-item",children:[(0,d.jsx)(f.S8z,{size:20,color:"black"}),(0,d.jsx)("span",{children:" ".concat(n,": ").concat(r)}),(0,d.jsxs)("button",{"data-id":t,className:"contact-button ",type:"button",onClick:a,children:[(0,d.jsx)(f.sUl,{size:15,color:"red"}),"Delete"]})]},t)}))})};var b=function(){var e=(0,s.I0)(),t=(0,s.v9)(i);return(0,d.jsxs)("label",{className:"filter",children:["Find contacts by name",(0,d.jsx)("input",{className:"filter-input",type:"text",name:"filter",onChange:function(n){e((0,c.hk)());var a=n.target.value;e((0,c.a8)(a.toUpperCase())),e((0,c.xO)(t))}})]})};function x(){var e=(0,s.v9)(l),t=(0,s.v9)(u);return(0,d.jsxs)("div",{className:"main-contacts",children:[(0,d.jsx)("h1",{className:"form-text",children:"Phonebook"}),(0,d.jsx)(h,{}),(0,d.jsx)("h2",{className:"form-text",children:"Contacts"}),(0,d.jsx)(b,{}),e&&!t&&(0,d.jsx)("h3",{children:"Request in progress..."}),!e&&t&&(0,d.jsxs)("h3",{children:["Error...",t]}),(0,d.jsx)(p,{})]})}}}]);
//# sourceMappingURL=259.6869e5f8.chunk.js.map