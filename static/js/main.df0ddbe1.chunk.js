(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(8),l=n.n(a),c=(n(15),n(1)),u=n(2),i=n(4),s=n(3),m=n(5),h=(n(16),function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={number:0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,"\uc548\ub155\ud558\uc138\uc694, \uc81c \uc774\ub984\uc740 ",this.props.name," \uc785\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc800\uc758 \ub098\uc774\ub294 ",this.props.age," \uc785\ub2c8\ub2e4.",r.a.createElement("br",null),"\uc22b\uc790: ",this.state.number,r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){e.setState({number:e.state.number+1})}},"\ub354\ud558\uae30"))}}]),t}(o.Component));h.defaultProps={name:"\u314b\u314b"};var p=n(9),d=n(6),f=(o.Component,n(17),o.Component,o.Component,function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={number:0,color:null},n.myRef=null,n.handleClick=function(){n.setState({number:n.state.number+1})},console.log("constructor"),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate",e,t),t.number%10!==4}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("getSnapshotBeforeUpdate"),e.color!==t.color?this.myRef.style.color:null}},{key:"componentDidUpdate",value:function(e,t,n){console.log("componentDidUpdate",e,t),n&&console.log("\uc5c5\ub370\uc774\ud2b8 \ub418\uae30 \uc9c1\uc804 \uc0c9\uc0c1",n)}},{key:"render",value:function(){var e=this;console.log("render");var t={color:this.props.color};return r.a.createElement("div",null,r.a.createElement("h1",{style:t,ref:function(t){return e.myRef=t}},this.state.number),r.a.createElement("p",null,"color:",this.state.color),r.a.createElement("button",{onClick:this.handleClick},"\ub354\ud558\uae30"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.color!==t.color?{color:e.color}:null}}]),t}(o.Component));var b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={color:"#000000"},n.handleClick=function(){n.setState({color:"#"+Math.floor(16777215*Math.random()).toString(16)})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){Math.round(300*Math.random()),Math.round(300*Math.random());return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleClick},"\ub79c\ub364\uc0c9\uc0c1"),r.a.createElement(f,{color:this.state.color}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.df0ddbe1.chunk.js.map