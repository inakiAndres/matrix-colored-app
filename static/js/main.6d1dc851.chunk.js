(this["webpackJsonpmatix-colored-app"]=this["webpackJsonpmatix-colored-app"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(11),l=n.n(i),r=(n(19),n(4)),o=(n(20),n(3)),d=Object(o.a)({space:{marginLeft:"auto",marginRight:"auto",marginTop:"10px"},column:{minWidth:"25px",padding:10,"@media screen and (max-width: 575.98px)":{paddingLeft:5,paddingRight:5,paddingTop:2.5,paddingBottom:2.5}},input:{border:"2px solid #555",backgroundColor:"transparent",width:"50px",textAlign:"center"},buttons:{margin:"10px",border:"1px solid",backgroundColor:"transparent",textAlign:"center",fontFamily:"Itim",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0)"},firstClassified:{display:"flex",justifyContent:"space-around",marginBottom:"10px",backgroundColor:"goldenrod",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)"},secondClassified:{display:"flex",justifyContent:"space-around",marginBottom:"10px",backgroundColor:"silver",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)"},thirdClassified:{display:"flex",justifyContent:"space-around",marginBottom:"10px",backgroundColor:"#cd7f32",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)"},defaultClassified:{display:"flex",justifyContent:"space-around",marginBottom:"10px"}});function u(e){var t=[],n=localStorage.getItem(e);return"undefined"!==typeof n&&null!==n&&(t=JSON.parse(n)),t}var j=function(e){var t=e.level,n=e.onRestart,s=e.showQuestion,i=d(),l=Object(c.useState)(!1),o=Object(r.a)(l,2),j=o[0],b=o[1],x=u("scores");return Object(a.jsxs)(a.Fragment,{children:[s&&(j?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:"Insert your initials here:"}),Object(a.jsxs)("form",{onSubmit:function(e){!function(e,t){var n=u(e);n.push(t),(n=n.sort((function(e,t){return t.level-e.level}))).length>10&&(n=n.splice(0,10)),localStorage.setItem(e,JSON.stringify(n))}("scores",{nick:e.target.name.value,level:t-1})},children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{className:i.input,type:"text",name:"name",placeholder:"_ _ _",maxLength:"3"})}),Object(a.jsx)("input",{className:i.buttons,type:"submit",value:"Submit"})]})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:i.space,children:"Do you want to save your score?"}),Object(a.jsx)("button",{className:i.buttons,style:{backgroundColor:"hsl(120, 70%, 70%)"},onClick:function(){return b(!0)},children:"Yes"}),Object(a.jsx)("button",{className:i.buttons,style:{borderColor:"red"},onClick:n,children:"No, restart the game"})]})),Object(a.jsx)("div",{className:i.space,children:"LEADERBOARD"}),Object(a.jsxs)("div",{className:i.defaultClassified,children:[Object(a.jsx)("div",{className:i.column,children:"Nickname"}),Object(a.jsx)("div",{className:i.column,children:"Level"})]}),x.map((function(e,t){return{0:Object(a.jsxs)("div",{className:i.firstClassified,children:[Object(a.jsx)("div",{className:i.column,children:e.nick}),Object(a.jsx)("div",{className:i.column,children:e.level})]},t),1:Object(a.jsxs)("div",{className:i.secondClassified,children:[Object(a.jsx)("div",{className:i.column,children:e.nick}),Object(a.jsx)("div",{className:i.column,children:e.level})]},t),2:Object(a.jsxs)("div",{className:i.thirdClassified,children:[Object(a.jsx)("div",{className:i.column,children:e.nick}),Object(a.jsx)("div",{className:i.column,children:e.level})]},t)}[t]||Object(a.jsxs)("div",{className:i.defaultClassified,children:[Object(a.jsx)("div",{className:i.column,children:e.nick}),Object(a.jsx)("div",{className:i.column,children:e.level})]},t)}))]})};j.defaultProps={level:2};var b=j,x=Object(o.a)({container:{display:"flex",padding:20,"@media screen and (max-width: 575.98px)":{flexDirection:"column",height:"150vh",backgroundColor:"hsl(110, 50%, 60%)"}},column:{display:"flex",justifyContent:"center",alignItems:"center",width:"50%","@media screen and (max-width: 575.98px)":{width:"100%"}},content:{width:"50%",margin:"auto",textAlign:"center",fontSize:"24px","@media screen and (max-width: 575.98px)":{width:"100%",fontSize:"18px"}},buttons:{padding:10,margin:"20px",border:"1px solid",backgroundColor:"divansparent",textAlign:"center",fontFamily:"Itim",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0)",fontSize:"28px"}}),h=function(e){var t=e.onPlay,n=x();return Object(a.jsxs)("div",{className:n.container,children:[Object(a.jsx)("div",{className:n.column,children:Object(a.jsxs)("div",{className:n.content,children:[Object(a.jsx)("h2",{children:"Matrix Colored App"}),"The game consists in a matrix of squares and you have to tap the square which have the different color. If you tap the correct you will level up, and the matrix will be growing by levels.",Object(a.jsx)("br",{}),"The level 20 is the last level, I select this one because the difference of the color, and the size of the matrix and squares is enough.",Object(a.jsx)("br",{}),"GOOD LUCK!",Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:n.buttons,style:{borderColor:"green"},onClick:t,children:"PLAY"})]})}),Object(a.jsx)("div",{className:n.column,children:Object(a.jsx)("div",{className:n.content,children:Object(a.jsx)(b,{showQuestion:!1})})})]})},m=n(8),p=Object(o.a)({cards:{width:"40vw",height:"40vw",margin:"0 auto",display:"grid",gridGap:function(e){var t=e.gapSize;return"".concat(t,"rem")},gridTemplateColumns:function(e){var t=e.level;return"repeat(".concat(t,", 1fr)")},"@media screen and (max-width: 575.98px)":{width:"40vh",height:"40vh",gridGap:function(e){var t=e.gapSize;return"".concat(t/2.5,"rem")}}},card:{backgroundColor:function(e){var t=e.color,n=e.principalColorSatAndLum;return"hsl(".concat(t,", ").concat(n,"%, ").concat(n,"%)")},color:"white"},cardDifferent:{backgroundColor:function(e){var t=e.color,n=e.saturation,a=e.lightness;return"hsl(".concat(t,", ").concat(n,"%, ").concat(a,"%)")},color:"white"}}),v=function(e){var t=e.level,n=e.onBgColor,s=e.onCardClicked,i=Object(c.useState)(),l=Object(r.a)(i,2),o=l[0],d=l[1],u=Object(c.useState)(30),j=Object(r.a)(u,2),b=j[0],x=j[1],h=Object(c.useState)(30),v=Object(r.a)(h,2),g=v[0],O=v[1];Object(c.useEffect)((function(){!function(){var e=Math.floor(360*Math.random());d(e),n(e+180<=360?e+180:e-180);var a=20-t/2,c=Math.floor(Math.random()*a);x(50-(a-c)),O(50-c)}()}),[t]);var f=t*t,C=Math.floor(Math.random()*f),N=function(e){return function(){s(e===C?"levelUp":"lost")}},w=p({level:t,color:o,principalColorSatAndLum:50,saturation:b,lightness:g,gapSize:1-.02*t});return Object(a.jsx)("div",{className:w.cards,children:Object(m.a)(Array(f)).map((function(e,t){return t!==C?Object(a.jsx)("div",{className:w.card,onClick:N(t)},t):Object(a.jsx)("div",{className:w.cardDifferent,onClick:N(t)},t)}))})};v.defaultProps={level:2};var g=v,O=Object(o.a)({gameOver:{fontSize:"26px","@media screen and (max-width: 575.98px)":{fontSize:"22px"}}}),f=function(e){var t=e.level,n=e.title,c=e.isLastLevel,s=O();return Object(a.jsxs)("div",{className:s.gameOver,children:[n,c?Object(a.jsx)("div",{children:"You have reached to the last level "}):Object(a.jsxs)("div",{children:["You have reached the level: ",t-1," "]})]})},C=n(13),N=Object(o.a)({countDown:{marginTop:"20px"}}),w=function(e){var t=e.time,n=e.onCountDownEnds,c=N();return Object(a.jsx)("div",{className:c.countDown,children:Object(a.jsx)(C.CountdownCircleTimer,{isPlaying:!0,duration:t,colors:[["#004777",.33],["#F7B801",.33],["#A30000"]],onComplete:n,children:function(){return"That's correct!!"}})})};w.defaultProps={time:1};var y=w;var S=function(){var e=Object(c.useState)(2),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(140),l=Object(r.a)(i,2),o=l[0],d=l[1],u=Object(c.useState)(""),j=Object(r.a)(u,2),x=j[0],m=j[1],p=function(){s(2),m("")};return Object(a.jsxs)("div",{className:"App",style:{backgroundColor:"hsl(".concat(o,", 40%, 60%)")},children:[x&&Object(a.jsxs)("div",{className:"title",children:["LEVEL ",n-1]}),Object(a.jsx)("div",{className:"Game",children:{playing:Object(a.jsx)("div",{className:"alignCenter",children:Object(a.jsx)(g,{level:n,onBgColor:d,onCardClicked:m})}),levelUp:n<=20?Object(a.jsx)("div",{className:"alignCenter",children:Object(a.jsx)(y,{time:1,onCountDownEnds:function(){s(n+1),m("playing")}})}):Object(a.jsx)("div",{className:"alignCenter",children:Object(a.jsxs)("div",{className:"gameEnd",children:[Object(a.jsx)(f,{level:n,title:"YOU ARE THE BEST!",isLastLevel:!0}),Object(a.jsx)(b,{level:n,onRestart:p,showQuestion:!0})]})}),lost:Object(a.jsx)("div",{className:"alignCenter",children:Object(a.jsxs)("div",{className:"gameEnd",children:[Object(a.jsx)(f,{level:n,title:"GAME OVER",isLastLevel:!1}),Object(a.jsx)(b,{level:n,onRestart:p,showQuestion:!0})]})})}[x]||Object(a.jsx)(h,{onPlay:function(){m("playing")}})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),k()}},[[28,1,2]]]);
//# sourceMappingURL=main.6d1dc851.chunk.js.map