(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(300),i=n(260),o=(n(374),n(655)),l=n.n(o),c=(n(377),n(646)),u=n.n(c),p=(n(237),n(253)),d=n.n(p),h=(n(379),n(654)),m=n.n(h),f=(n(13),n(66),n(30),n(31),n(14),n(94),n(97),n(40),n(380),n(568)),g=n.n(f),y=(n(133),n(50),n(38),n(22),n(395),n(403)),v=n.n(y),b=(n(401),n(200)),E=n.n(b);function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var S=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={fileList:[],content:""},t.handleChange=function(e){var n=w(e.fileList),a="";n=n.map(function(e){var n=new FileReader;return n.onload=function(e){a=e.target.result,t.props.onFileUploaded(a)},n.readAsText(e.originFileObj),e}),t.setState({fileList:n,content:a})},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e={onChange:this.handleChange,multiple:!1,showUploadList:!1};return r.a.createElement(v.a,Object.assign({},e,{fileList:this.state.fileList}),r.a.createElement(d.a,null,r.a.createElement(E.a,{type:"upload"})," Upload file"))},a}(r.a.Component);function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var C=g.a.Column,M="\nHi, {person},\nHello, {person},\nDear {person},\n\nThanks.\nSorry.\n\nBest regards.\nHave a nice weekend and best regards.\nHave a nice day and best regards.\n",F=function(e){var t,n;function a(t){var n;n=e.call(this,t)||this;var a=new Set,r=n.pushSentenceObjects(M);return n.state={available:r,chosen:[],keys:a,finalMessage:"",person:""},n.buildFinalMessage=n.buildFinalMessage.bind(k(n)),n.addSentence=n.addSentence.bind(k(n)),n.removeSentence=n.removeSentence.bind(k(n)),n.clearSentences=n.clearSentences.bind(k(n)),n.onChange=n.onChange.bind(k(n)),n.onFileUploaded=n.onFileUploaded.bind(k(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.pushSentenceObjects=function(e){var t,n=0,a=[];return(t=e,t.split("\n").map(function(e){return e.trim()}).filter(function(e){return""!==e})).forEach(function(e){a.push({key:n.toString(),sentence:e}),++n}),a},s.buildFinalMessage=function(e){var t=[];this.state.chosen.forEach(function(e){t.push(e.sentence)});var n=t.join("\n").replace(/\{person\}/g,e);this.setState({finalMessage:n})},s.addSentence=function(e,t){this.state.keys.has(e.key)||(this.state.keys.add(e.key),this.state.chosen.push(e),this.buildFinalMessage(this.state.person),this.setState({keys:this.state.keys,chosen:this.state.chosen}))},s.removeSentence=function(e,t){this.state.keys.delete(e.key);for(var n=0;n<this.state.chosen.length;n++){this.state.chosen[n]===e&&this.state.chosen.splice(n,1)}this.buildFinalMessage(this.state.person),this.setState({keys:this.state.keys,chosen:this.state.chosen})},s.clearSentences=function(){this.setState({chosen:[],keys:new Set,finalMessage:[]})},s.onChange=function(e){this.setState({person:e.target.value}),this.buildFinalMessage(e.target.value)},s.onFileUploaded=function(e){this.clearSentences();var t=this.pushSentenceObjects(e);this.setState({available:t})},s.render=function(){var e=this;return r.a.createElement(u.a,{gutter:16},r.a.createElement(m.a,{span:10},r.a.createElement(g.a,{pagination:!1,dataSource:this.state.available,scroll:{y:600},size:"small",showHeader:!0,onRow:function(t,n){return{onClick:function(){e.addSentence(t,n)}}}},r.a.createElement(C,{title:"Available sentences",dataIndex:"sentence",key:"sentence"}))),r.a.createElement(m.a,{span:7},r.a.createElement(g.a,{pagination:!1,dataSource:this.state.chosen,size:"small",showHeader:!0,onRow:function(t,n){return{onClick:function(){e.removeSentence(t,n)}}}},r.a.createElement(C,{title:"Chosen sentences",dataIndex:"sentence",key:"sentence"}))),r.a.createElement(m.a,{span:7},r.a.createElement(u.a,{gutter:16},r.a.createElement(m.a,{span:8},r.a.createElement(S,{onFileUploaded:this.onFileUploaded})),r.a.createElement(m.a,{span:8},r.a.createElement(d.a,{type:"primary",block:!0,disabled:!0},"Copy to clipboard")),r.a.createElement(m.a,{span:8},r.a.createElement(d.a,{type:"danger",block:!0,onClick:this.clearSentences},"Clear sentences"))),r.a.createElement("p",null),r.a.createElement(u.a,null,r.a.createElement("span",null,"Person:"),r.a.createElement(l.a,{id:"person",onChange:this.onChange})),r.a.createElement("p",null),r.a.createElement(u.a,null,r.a.createElement("span",null,"Final message:"),r.a.createElement(l.a.TextArea,{autosize:!0,value:this.state.finalMessage}))))},a}(r.a.Component);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement(F,null))}},230:function(e,t,n){var a;e.exports=(a=n(259))&&a.default||a},258:function(e){e.exports={data:{site:{siteMetadata:{title:"Answering Machine"}}}}},259:function(e,t,n){"use strict";n.r(t);n(22);var a=n(0),r=n.n(a),s=n(103);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null}},260:function(e,t,n){"use strict";var a=n(261),r=n(0),s=n.n(r),i=n(302),o=n.n(i);function l(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,l=a.data.site,c=t||l.siteMetadata.description;return s.a.createElement(o.a,{htmlAttributes:{lang:n},title:i,titleTemplate:""+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},261:function(e){e.exports={data:{site:{siteMetadata:{title:"Answering Machine",description:"Create a custom email message from a list of sentences.",author:"@andreoliwa"}}}}},300:function(e,t,n){"use strict";var a=n(258),r=n(0),s=n.n(r),i=n(70),o=n.n(i);n(230),n(9).default.enqueue,s.a.createContext({});var l=function(e){var t=e.siteTitle;return s.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"0.93rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:1960,padding:"0.93rem 1.0875rem"}},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.defaultProps={siteTitle:""};var c=l;n(301),t.a=function(e){var t=e.children,n=a.data;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c,{siteTitle:n.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:1960,padding:"0px 1.0875rem 0.93rem",paddingTop:0}},s.a.createElement("main",null,t),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1dd93dab58345c0a0603.js.map