(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(t,e,n){t.exports={listItem:"Statistics_listItem__Rp-EK"}},function(t,e,n){t.exports={btn:"FeedbackOptions_btn__27JZi"}},,,,,,function(t,e,n){t.exports={title:"Section_title__aJq4h"}},function(t,e,n){t.exports={notification:"Notification_notification__K4gjX"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n.n(c),s=n(5),o=n.n(s),r=(n(18),n(6)),l=n(7),d=n(8),u=n(12),b=n(11),j=n(2),h=n.n(j),m=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,s=t.positivePercentage;return Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{className:h.a.listItem,children:["Good: ",e]}),Object(a.jsxs)("li",{className:h.a.listItem,children:["Neutral: ",n]}),Object(a.jsxs)("li",{className:h.a.listItem,children:["Bad: ",c]}),Object(a.jsxs)("li",{className:h.a.listItem,children:["Total: ",i]}),Object(a.jsxs)("li",{className:h.a.listItem,children:["Positive feedback: ",s,"%"]})]})},f=m;m.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var O=n(3),p=n.n(O),v=function(t){var e=t.onLeaveFeedback;return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:p.a.btn,type:"button",name:"good",onClick:e,children:"Good"}),Object(a.jsx)("button",{className:p.a.btn,type:"button",name:"neutral",onClick:e,children:"Neutral"}),Object(a.jsx)("button",{className:p.a.btn,type:"button",name:"bad",onClick:e,children:"Bad"})]})},x=n(9),g=n.n(x),k=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{className:g.a.title,children:e}),n]})},N=n(10),_=n.n(N),P=function(t){var e=t.message;return Object(a.jsx)("p",{className:_.a.notification,children:e})},F=P;P.defaultProps={message:""};var y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.addReview=function(e){t.setState((function(t){return Object(r.a)({},e.target.name,t[e.target.name]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(k,{title:"Leave your feedback",children:Object(a.jsx)(v,{onLeaveFeedback:this.addReview})}),Object(a.jsx)(k,{title:"Statistics",children:this.countTotalFeedback()?Object(a.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(a.jsx)(F,{message:"No feedback given"})})]})}}]),n}(c.Component);y.defaultProps={},o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e738ceb0.chunk.js.map