(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(t,e,a){t.exports={listItem:"Statistics_listItem__Rp-EK"}},function(t,e,a){t.exports={btn:"FeedbackOptions_btn__27JZi"}},,,,,function(t,e,a){t.exports={title:"Section_title__aJq4h"}},function(t,e,a){t.exports={notification:"Notification_notification__K4gjX"}},,,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(1),s=a.n(c),o=a(5),i=a.n(o),r=(a(17),a(6)),l=a(7),d=a(11),u=a(10),b=a(2),j=a.n(b),h=function(t){var e=t.good,a=t.neutral,c=t.bad,s=t.total,o=t.positivePercentage;return Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{className:j.a.listItem,children:["Good: ",e]}),Object(n.jsxs)("li",{className:j.a.listItem,children:["Neutral: ",a]}),Object(n.jsxs)("li",{className:j.a.listItem,children:["Bad: ",c]}),Object(n.jsxs)("li",{className:j.a.listItem,children:["Total: ",s]}),Object(n.jsxs)("li",{className:j.a.listItem,children:["Positive feedback: ",o,"%"]})]})},m=h;h.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var f=a(3),O=a.n(f),g=function(t){var e=t.onLeaveFeedback;return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:O.a.btn,type:"button",name:"good",onClick:e,children:"Good"}),Object(n.jsx)("button",{className:O.a.btn,type:"button",name:"neutral",onClick:e,children:"Neutral"}),Object(n.jsx)("button",{className:O.a.btn,type:"button",name:"bad",onClick:e,children:"Bad"})]})},p=a(8),v=a.n(p),x=function(t){var e=t.title,a=t.children;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{className:v.a.title,children:e}),a]})},k=a(9),N=a.n(k),_=function(t){var e=t.message;return Object(n.jsx)("p",{className:N.a.notification,children:e})},P=_;_.defaultProps={message:""};var F=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.addReview=function(e){switch(e.target.name){case"good":t.setState({good:t.state.good+1});break;case"neutral":t.setState({neutral:t.state.neutral+1});break;default:t.setState({bad:t.state.bad+1})}},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{title:"Leave your feedback",children:Object(n.jsx)(g,{onLeaveFeedback:this.addReview})}),Object(n.jsx)(x,{title:"Statistics",children:this.countTotalFeedback()?Object(n.jsx)(m,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(n.jsx)(P,{message:"No feedback given"})})]})}}]),a}(c.Component);F.defaultProps={},i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.a3035464.chunk.js.map