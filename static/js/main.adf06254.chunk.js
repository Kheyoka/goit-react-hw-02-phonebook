(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{101:function(e,t){},103:function(e,t){},137:function(e,t){},138:function(e,t){},181:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(87),o=n.n(c),u=n(88),i=n(26),l=n(28),m=n(29),s=n(31),h=n(30),b=n(32),d=n(20),f=n.n(d),p=n(27),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.nameInputId=f.a.generate(),n.numberInputId=f.a.generate(),n.handleChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmitContact(Object(i.a)({},n.state)),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:this.nameInputId},"Name",r.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,id:this.nameInputId,name:"name"})),r.a.createElement("label",{htmlFor:this.numberInputId},"Number",r.a.createElement("input",{type:"tel",value:n,onChange:this.handleChange,id:this.numberInputId,name:"number"})),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),t}(a.Component),g=function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Find contacts by name"),r.a.createElement("input",{value:t,onChange:n}))};g.defaultProps={value:""};var v=g,E=function(e){var t=e.name,n=e.number,a=e.onDeleteContactFor;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"".concat(t,": ").concat(n)),r.a.createElement("button",{type:"button",onClick:a},"Delete"))},j=function(e){var t=e.items,n=e.onDeleteContact;return t.length>0&&r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(E,Object.assign({},e,{onDeleteContactFor:function(){return n(e.id)}})))})))},O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.handleSubmitContact=function(e){var t=Object(i.a)({},e,{id:f.a.generate()});n.state.contacts.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts.")):t.name&&t.number&&n.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[t])}}))},n.deleteContact=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n.changeFilter=function(e){n.setState({filter:e.target.value})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(C,{onSubmitContact:this.handleSubmitContact}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(v,{value:n,onChangeFilter:this.changeFilter}),r.a.createElement(j,{items:a,onDeleteContact:this.deleteContact}))}}]),t}(a.Component);o.a.render(r.a.createElement(O,null),document.getElementById("root"))},89:function(e,t,n){e.exports=n(181)}},[[89,1,2]]]);
//# sourceMappingURL=main.adf06254.chunk.js.map