(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports={ImageLoader:"ImageLoader_ImageLoader__3F7dU"}},12:function(e,t,n){e.exports=n(26)},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),c=n(1),l=n(2),s=n(4),p=n(3),u=n(5),h=n(10),m=(n(20),n(6)),d=n.n(m),f=function(e){return e.children},v={boundary:{width:300,height:300},showZoomer:!0,mouseWheelZoom:"ctrl"},y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={result:null,type:"square"},n.crop=function(){n.croppie.result({type:"base64",format:"png",quality:1}).then(function(e){n.setState({result:e})})},n.optionSelectHandler=function(e){n.setState({type:e.target.value})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"createCroppieInstance",value:function(){var e={viewport:{width:200,height:200,type:this.state.type}},t=Object.assign({},v,e,this.props.opts);this.croppie=new h.Croppie(this.croppieCont,t),this.croppie.bind({url:this.props.imgUrl})}},{key:"componentDidMount",value:function(){this.createCroppieInstance()}},{key:"componentDidUpdate",value:function(e,t){t.type!==this.state.type&&(this.croppie.destroy(),this.createCroppieInstance())}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",{className:d.a.Preview},r.a.createElement("img",{src:this.state.result,alt:"result"}));return r.a.createElement(f,null,r.a.createElement("div",{className:d.a.Controls},r.a.createElement("div",{className:d.a.RadioGroup},r.a.createElement("label",null,"Circle",r.a.createElement("input",{name:"type",type:"radio",value:"circle",onChange:this.optionSelectHandler,checked:"circle"===this.state.type})),r.a.createElement("label",null,"Square",r.a.createElement("input",{name:"type",type:"radio",value:"square",onChange:this.optionSelectHandler,checked:"square"===this.state.type}))),r.a.createElement("button",{onClick:this.crop},"Show result")),r.a.createElement("div",{id:"demo",ref:function(t){return e.croppieCont=t}}),this.state.result&&t)}}]),t}(a.Component),g=n(11),w=n.n(g),b=function(e){return r.a.createElement("div",{className:w.a.ImageLoader},r.a.createElement("input",{id:"fileinput",type:"file",onChange:e.onchange}),r.a.createElement("label",{htmlFor:"fileinput"},"Upload an image"))},C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={file:null},n.fileHandler=function(e){n.setState({file:URL.createObjectURL(e.target.files[0])})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{onchange:this.fileHandler}),this.state.file&&r.a.createElement(y,{imgUrl:this.state.file}))}}]),t}(a.Component);n(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports={Controls:"Croppie_Controls__3V0dn",RadioGroup:"Croppie_RadioGroup__3Q9ab",Preview:"Croppie_Preview__1XCUT"}}},[[12,2,1]]]);
//# sourceMappingURL=main.e550a02e.chunk.js.map