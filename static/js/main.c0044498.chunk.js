(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{101:function(e){e.exports=JSON.parse('[{"id":"2021-05-05-erf-expansion","title":"Asymptotic Expansion of the Error Function","date":[2021,5,5],"tags":["analysis"],"readTime":4},{"id":"2020-11-19-a-cone-eversion","title":"A Cone Eversion","date":[2020,11,19],"tags":["differential-geometry","visualization"],"readTime":4},{"id":"2020-10-28-putnam-1981-b5","title":"A Nice Solution of Putnam 1981 B5","date":[2020,10,28],"tags":["putnam"],"readTime":2},{"id":"2020-08-20-prime-tangents","title":"Primes \\\\(p\\\\) with \\\\(\\\\tan{p} > p\\\\)","date":[2020,8,20],"tags":["number-theory"],"readTime":3},{"id":"2020-08-01-kernel-averaging","title":"Optimal Kernel-Based Averaging","date":[2020,8,1],"tags":["fourier-analysis","webgl","monte-carlo","optimization"],"readTime":9},{"id":"2020-07-29-harmonic-oscillator","title":"Constant-Period Oscillation implies SHM","date":[2020,7,29],"tags":["classical-mechanics"],"readTime":2}]')},130:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){var n={"./2020-07-29-harmonic-oscillator/intro.js":[434,0,5],"./2020-08-01-kernel-averaging/intro.js":[435,0,8],"./2020-08-20-prime-tangents/intro.js":[436,15],"./2020-10-28-putnam-1981-b5/intro.js":[437,11],"./2020-11-19-a-cone-eversion/intro.js":[438,17],"./2021-05-05-erf-expansion/intro.js":[439,13]};function r(e){if(!a.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then(function(){return a(r)})}r.keys=function(){return Object.keys(n)},r.id=177,e.exports=r},184:function(e,t,a){e.exports=a.p+"static/media/down-arrow.b63a6dc0.svg"},190:function(e,t,a){e.exports=a(429)},399:function(e,t,a){},400:function(e,t,a){},401:function(e,t,a){e.exports=a.p+"static/media/github.62367fef.svg"},402:function(e,t,a){e.exports=a.p+"static/media/linkedin.02b94020.svg"},421:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){var n={"./2020-07-29-harmonic-oscillator/body.js":[440,0,6],"./2020-08-01-kernel-averaging/body.js":[445,0,4],"./2020-08-20-prime-tangents/body.js":[441,0,7],"./2020-10-28-putnam-1981-b5/body.js":[442,10],"./2020-11-19-a-cone-eversion/body.js":[443,16],"./2021-05-05-erf-expansion/body.js":[444,12]};function r(e){if(!a.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then(function(){return a(r)})}r.keys=function(){return Object.keys(n)},r.id=426,e.exports=r},427:function(e,t,a){},428:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);a(191);var n=a(0),r=a.n(n),i=a(46),o=a(179),c=(a(399),a(11)),l=a(12),s=a(14),u=a(13),m=a(15),d=a(55),p=a(50),h=a(468),g=a(186),f=a(102),b=Object(g.a)({palette:{primary:f.a,secondary:f.a}}),v=a(35),y=(a(400),{github:{icon:a(401),url:"https://github.com/wgxli"},linkedin:{icon:a(402),url:"https://www.linkedin.com/in/samuelj-li"}}),j=a(180),E=a.n(j),w=a(181),O=a.n(w),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={url:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history;this.unlisten=e.listen(this.update.bind(this)),this.update()}},{key:"update",value:function(){this.setState({url:window.location.href})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"render",value:function(){var e=this.props.size,t=this.state.url;return r.a.createElement("div",{className:"jsx-959105480 container"},r.a.createElement(O.a,{value:t,size:e}),r.a.createElement(E.a,{id:"959105480"},[".container.jsx-959105480{-webkit-transform-origin:top right;-ms-transform-origin:top right;transform-origin:top right;-webkit-transform:scale(0.25);-ms-transform:scale(0.25);transform:scale(0.25);position:absolute;top:0;right:0;z-index:1000;display:none;}","@media print{.container.jsx-959105480{display:block;}}"]))}}]),t}(n.PureComponent),x=Object(d.g)(k),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderTabs",value:function(){var e=this.props.tabs;return Object.entries(e).map(function(e){var t=Object(v.a)(e,2),a=t[0],n=t[1];return r.a.createElement(p.c,{key:n,to:n,className:"nav-tab",activeClassName:"selected"},a)})}},{key:"renderSocialButtons",value:function(){for(var e=[],t=Object.entries(y),a=0;a<t.length;a++){var n=t[a],i=Object(v.a)(n,2),o=i[0],c=i[1];e.push(r.a.createElement("a",{key:o,href:c.url},r.a.createElement("img",{className:"social-icon",src:c.icon,alt:o+" social media icon"})))}return e}},{key:"render",value:function(){var e=r.a.createElement("div",{id:"main-logo-container"},r.a.createElement(p.c,{to:"/",id:"main-logo"},"Samuel J. Li")),t=r.a.createElement("div",{id:"social-buttons"},this.renderSocialButtons());return r.a.createElement("header",{id:"navigation-bar"},r.a.createElement("div",{id:"main-bar"},e,r.a.createElement("nav",{className:"desktop navigation-tabs"},this.renderTabs()),t),r.a.createElement("nav",{className:"mobile navigation-tabs"},this.renderTabs()),r.a.createElement(x,{size:300}))}}]),t}(r.a.PureComponent),T=a(96),P=a(54),C=a(100),I=(a(421),a(184)),S=a.n(I),A=[256,512,1024,2048,4096],_=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.children,n=e.thin;return r.a.createElement("div",{className:"banner-container"+(n?" thin":"")},r.a.createElement("img",{className:"banner-background",src:"/images/banner/".concat(t,"-1024.jpg"),srcSet:A.map(function(e){return"/images/banner/".concat(t,"-").concat(e,".jpg ").concat(e,"w")}).join(", "),alt:"".concat(t," banner background")}),r.a.createElement("div",{className:"banner-overlay"},r.a.createElement("span",{className:"banner-text"},a),r.a.createElement("a",{href:"#banner-content-anchor",className:"down-arrow"},r.a.createElement("img",{src:S.a}))),r.a.createElement("div",{id:"banner-content-anchor"}))}}]),t}(r.a.PureComponent);function M(e){var t=window.renderMathInElement;e=e||document.getElementById("page-container"),t?t(e,{macros:{"\\dd":"{\\mathrm{d} #1}","\\defeq":":=","\\abs":"\\left|#1\\right|","\\abss":"|#1|"}}):setTimeout(function(){return M(e)},500)}var L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.root=document.getElementById("page-container"),this.scrollHandler=function(){return e.handleScroll()},this.root.addEventListener("scroll",this.scrollHandler),this.scrollHandler(),M()}},{key:"componentWillUnmount",value:function(){this.root.removeEventListener("scroll",this.scrollHandler)}},{key:"handleScroll",value:function(){this.root.scrollLeft>0&&(this.root.scrollLeft=0);var e=Math.max(this.root.scrollTop,0);document.documentElement.dataset.scroll=e}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children;return r.a.createElement("div",{id:"page-container"},r.a.createElement(P.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 ",t)),a)}}]),t}(n.PureComponent),J=(a(130),a(422),a(466)),D=a(464),H=a(467),F=a(465),z=a(470),B=(a(423),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderImage",value:function(){var e=this.props.data;return r.a.createElement("a",{href:e.url},r.a.createElement(D.a,{className:"project-image",image:"/images/projects/"+e.image,role:"img","aria-label":e.title.toLowerCase()+" image"}))}},{key:"renderHeader",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"project-header"},r.a.createElement("h2",{className:"project-title"},e.title),r.a.createElement("div",{className:"project-date"},r.a.createElement(F.a,{variant:"caption",noWrap:!0},e.date)))}},{key:"renderTag",value:function(e){var t=this;return r.a.createElement(z.a,{key:e,label:e,className:"project-tag",onClick:function(a){return t.props.handleTagClick(a,e)}})}},{key:"renderSocial",value:function(){var e=this.props.data,t=[];if("social"in e)for(var a in e.social){var n=e.social[a],i="/icons/social/"+a+".svg";t.push(r.a.createElement("a",{href:n,key:a},r.a.createElement("img",{src:i,alt:a+" social icon"})))}return t}},{key:"render",value:function(){var e=this.props.data;return r.a.createElement(J.a,{className:"project-card"},this.renderImage(),r.a.createElement(H.a,{className:"project-info-container"},r.a.createElement("a",{href:e.url,className:"project-info"},this.renderHeader(),r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"project-footer"},r.a.createElement("div",{className:"project-tags-container"},r.a.createElement(F.a,{className:"project-tag-label",variant:"caption"},"Tags:"),r.a.createElement("div",{className:"project-tags"},e.tags.map(this.renderTag.bind(this)))),r.a.createElement("div",{className:"project-social"},this.renderSocial()))))}}]),t}(r.a.PureComponent)),q=a(132),U=a(21),W=a(431),R=(a(424),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.tags,i=[a.root,"tag-filter"];return 0===n.length&&i.push("empty"),r.a.createElement(W.a,{key:"tag-filter",className:i.join(" ")},r.a.createElement("p",null,"Filter Tags:"),r.a.createElement("div",{className:"tags"},r.a.createElement(q.b,{flipKey:n.join(" ")},n.map(function(t){return r.a.createElement(q.a,{key:t,flipId:t},r.a.createElement(z.a,{key:t,label:t,onDelete:function(){return e.props.deleteTag(t)},className:a.chip}))}))))}}]),t}(r.a.PureComponent)),X=Object(U.a)(function(e){return{root:{flexWrap:"wrap"},chip:{margin:"0 ".concat(e.spacing(.5),"px")}}})(R),G={coherent_states:{title:"Atomic Coherent States",description:"An interactive visualization of the stretched representation for many coupled two-level systems. Made with WebGL.",date:"July 2021",image:"coherent-states.png",url:"/atomic-coherent-states",tags:["webgl","simulation","physics"],social:{github:"https://github.com/wgxli/atomic-coherent-states"}},simplefhe:{title:"SimpleFHE Python Library",description:"A dead-simple Python library for full homomorphic encryption (FHE). Allows computation on encrypted client data without any server-side decryption. Available on the Python 3 package index.",date:"July 2020",image:"simplefhe.png",url:"https://github.com/wgxli/simple-fhe",tags:["python","library","cryptography"],social:{github:"https://github.com/wgxli/simple-fhe"}},ising_spin_model:{title:"Ising Spin Model",description:"A blazing-fast interactive implementation of the Ising square-lattice spin model. Made with WebGL.",date:"July 2020",image:"ising-spin-model-compressed.png",url:"/ising-spin-model",tags:["physics","react","webgl","simulation"],social:{github:"https://github.com/wgxli/ising-spin-model"}},elliptic_curve_explorer:{title:"Elliptic Curve Explorer",description:"An interactive tool to explore rational elliptic curves in Weierstrass form. Visualization in both 2D (affine) and 3D (projective) space. Made with React and three.js.",date:"April 2019",image:"elliptic-curve-explorer-compressed.jpg",url:"/elliptic-curve-explorer",tags:["math","react","webgl","three.js"],social:{github:"https://github.com/wgxli/elliptic-curve-explorer"}},hopf_fibration:{title:"Hopf Fibration Visualization",description:"An interactive visualization of the Hopf fibration, stereographically projected into 3-space. Made with three.js.",date:"March 2019",image:"hopf-fibration-compressed.jpg",url:"/hopf-fibration",tags:["math","webgl","three.js"],social:{reddit:"https://www.reddit.com/r/math/comments/b4xcxe/i_made_an_interactive_visualization_of_the_hopf/",github:"https://github.com/wgxli/hopf-fibration"}},complex_function_plotter:{title:"Complex Function Plotter",description:"An interactive domain coloring plotter for visualizing complex functions. Highly responsive visualization of functions parameterized by an arbitrary number of variables. Made with React and WebGL.",date:"July 2018",image:"complex-function-plotter-compressed.jpg",url:"/complex-function-plotter",tags:["math","react","webgl"],social:{reddit:"https://www.reddit.com/r/math/comments/dofwty/zooming_in_on_the_natural_boundary_of_z2n/",github:"https://github.com/wgxli/complex-function-plotter"}},quantum_simulator:{title:"Quantum Simulator",description:"An interactive simulation of the one-dimensional time-dependent Schr\xf6dinger equation. Features stable time acceleration, views in different eigenbases, and simulated measurement. Made with Python 3.",date:"July 2018",image:"quantum-simulator-compressed.png",url:"https://github.com/wgxli/quantum-simulator",tags:["python","simulation","physics"],social:{github:"https://github.com/wgxli/quantum-simulator"}},latex_scratchpad:{title:"LaTeX Scratchpad",description:"Minimalist, highly responsive equation editor for quick-and-dirty scratch work. Made with the KaTeX library.",date:"December 2017",image:"latex-scratchpad.png",url:"/legacy-website/pages/latex-scratchpad/scratchpad.html",tags:["latex","math"]},hs_teaching_aids:{title:"High-School Teaching Aids",description:"Past teaching aids for an IB Mathematics HL class of about twenty students. Includes interactive applets and challenging exercises.",date:"August 2017",image:"hs-teaching-aid.png",url:"/legacy-website/index.html",tags:["teaching","math"]},piano_transcription:{title:"DNN-Based Piano Transcription",description:"Uses deep neural networks to extract note onset times from piano recordings. I was selected to present this research at the 2017 Joint Mathematics Meetings. Made with TensorFlow.",date:"July 2017",image:"piano-transcription-compressed.png",url:"https://github.com/wgxli/piano-transcription",tags:["machine-learning","music","tensorflow","python"],social:{github:"https://github.com/wgxli/piano-transcription"}},simpletex:{title:"SimpleTeX Python Library",description:"A simple, hassle-free library for creating LaTeX documents in Python. Features automatic import management, easy global styling, and minimalist syntax. Available on the Python 3 package index.",date:"July 2016",image:"simpletex-compressed.png",url:"https://pypi.org/project/simpletex",tags:["python","latex","library"],social:{github:"https://github.com/wgxli/simpletex"}},toy_raytracer:{title:"Toy Raytracer",description:"A simple raytracer I wrote in C++. Features depth of field, adaptive sampling, and correct treatment of reflective, refractive, and diffuse surfaces (including Fresnel).",date:"August 2015",image:"raytracer-compressed.jpg",url:"https://github.com/wgxli/toy-raytracer",tags:["C++","3D","graphics"],social:{github:"https://github.com/wgxli/toy-raytracer"}}},K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tags:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderProjects",value:function(e){var t=this;return Object.entries(G).filter(function(t){var a=Object(v.a)(t,2),n=(a[0],a[1]),r=new Set(n.tags);return e.every(function(e){return r.has(e)})}).map(function(e){var a=Object(v.a)(e,2),n=a[0],i=a[1];return r.a.createElement(B,{key:n,data:i,handleTagClick:t.handleTagClick.bind(t)})})}},{key:"addTag",value:function(e){this.setState(function(t){var a=Object(T.a)(t.tags);return a.indexOf(e)<0&&a.push(e),{tags:a}})}},{key:"deleteTag",value:function(e){this.setState(function(t){return{tags:t.tags.filter(function(t){return t!==e})}})}},{key:"handleTagClick",value:function(e,t){e.stopPropagation(),this.addTag(t)}},{key:"render",value:function(){var e=this.state.tags;return r.a.createElement(L,{title:"Projects"},r.a.createElement(P.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 Projects")),r.a.createElement(_,{image:"projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement("p",null,"A library of the projects I\u2019ve compiled over the years.")),r.a.createElement("div",{id:"content-container"},r.a.createElement(X,{tags:e,deleteTag:this.deleteTag.bind(this)}),r.a.createElement(C.a,{id:"project-container"},this.renderProjects(e))))}}]),t}(r.a.PureComponent),V=(a(176),a(425),a(101)),Q=["January","February","March","April","May","June","July","August","September","October","November","December"];var Y=function(e){var t=e.match.params.postId,i=V.find(function(e){return e.id===t}),o=Object(n.useState)(null),c=Object(v.a)(o,2),l=c[0],s=c[1],u=Object(n.useState)(null),m=Object(v.a)(u,2),d=m[0],p=m[1];if(Object(n.useEffect)(function(){"#page-top"===window.location.hash&&(window.scrollTo(0,0),document.getElementById("page-container").scrollTo(0,0)),M()}),null===l&&a(177)("./".concat(t,"/intro.js")).then(function(e){return s(e.default)}).catch(function(e){console.error("Couldn\u2019t load post ".concat(t,":"),e),s("The blog post you requested could not be found."),p(" ")}),null===d){setTimeout(function(){a(426)("./".concat(t,"/body.js")).then(function(e){return p(e.default)}).catch(function(e){console.error("Couldn\u2019t load post body ".concat(t,":"),e),p(r.a.createElement("p",{className:"loading-error"},"Content failed to load!"))})},0)}var h=r.a.createElement("div",{className:"loading-placeholder"},"Loading Post...");return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 ",i.title||"Blog")),r.a.createElement("div",{id:"page-top"}),r.a.createElement(_,{image:"blog",thin:!0},r.a.createElement("h1",null,i.title||"Loading...")),r.a.createElement("div",{id:"content-container",className:"blog"},r.a.createElement("div",{id:"blog-content"},r.a.createElement("p",{className:"aux-info"},function(e){if(null===e)return null;var t=Object(v.a)(e,3),a=t[0],n=t[1],i=t[2];return r.a.createElement("span",{className:"date"},"Published ",Q[n-1]," ",i,", ",a)}(i.date),"\uff5c",r.a.createElement("span",{className:"read-time"},i.readTime," minute read")),l||h,d||(l?h:null))))},Z=(a(427),["January","February","March","April","May","June","July","August","September","October","November","December"]),$=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderHeader",value:function(){var e=this.props.metadata,t=Object(v.a)(e.date,3),a=t[0],n=t[1],i=t[2],o="".concat(Z[n-1]," ").concat(i,", ").concat(a);return r.a.createElement("div",{className:"blog-header"},r.a.createElement("p",{className:"blog-subtitle"},r.a.createElement("span",{className:"date"},o),"\u2022",r.a.createElement("span",{className:"read-time"},e.readTime," minute read")),r.a.createElement("h2",{className:"blog-title"},e.title))}},{key:"renderTag",value:function(e){var t=this;return r.a.createElement("div",{className:"blog-tag",key:e,onClick:function(a){return a.stopPropagation(),a.preventDefault(),a.nativeEvent.stopImmediatePropagation(),t.props.handleTagClick(a,e),!1}},e)}},{key:"componentDidUpdate",value:function(){var e=this;setTimeout(function(){return M(e.ref.current)},0)}},{key:"render",value:function(){var e=this,t=this.props,a=t.metadata,i=t.promise,o=t.destination;if(this.ref=Object(n.createRef)(),void 0===this.state.intro)return i.then(function(t){return e.setState({intro:t.default})}).catch(function(e){return console.error("Blog post ".concat(a.id," failed to load:"),e)}),r.a.createElement("div",{className:"blog-card loading"},"Loading Entry...");var c=this.state.intro;return r.a.createElement(p.b,{to:o,className:"blog-card",ref:this.ref},this.renderHeader(),r.a.createElement("div",{className:"blog-tags"},a.tags.map(this.renderTag.bind(this))),r.a.createElement("div",{className:"blog-info"},c(),r.a.createElement("div",{className:"blog-info-cover"})))}}]),t}(r.a.PureComponent),ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tags:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderProjects",value:function(){var e=[],t=!0,n=!1,i=void 0;try{for(var o,c=V[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var l=o.value;if(this.shouldDisplayPost(l)){var s=l.id,u=a(177)("./".concat(s,"/intro.js"));e.push(r.a.createElement($,{key:s,metadata:l,promise:u,destination:"/blog/".concat(s,"#page-top"),handleTagClick:this.handleTagClick.bind(this)}))}}}catch(m){n=!0,i=m}finally{try{t||null==c.return||c.return()}finally{if(n)throw i}}return e}},{key:"shouldDisplayPost",value:function(e){return this.state.tags.every(function(t){return e.tags.includes(t)})}},{key:"addTag",value:function(e){this.setState(function(t){var a=Object(T.a)(t.tags);return a.indexOf(e)<0&&a.push(e),{tags:a}})}},{key:"deleteTag",value:function(e){this.setState(function(t){return{tags:t.tags.filter(function(t){return t!==e})}})}},{key:"handleTagClick",value:function(e,t){e.stopPropagation(),this.addTag(t)}},{key:"render",value:function(){var e=this.state.tags;return r.a.createElement(L,{title:"Blog"},r.a.createElement(P.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 Blog")),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/blog/:postId",component:Y}),r.a.createElement(d.b,{path:"/blog"},r.a.createElement(_,{image:"blog"},r.a.createElement("h1",null,"Blog"),r.a.createElement("p",null,"My ramblings, some of which are coherent.")),r.a.createElement("div",{id:"content-container"},r.a.createElement(X,{tags:e,deleteTag:this.deleteTag.bind(this)}),r.a.createElement(C.a,{id:"blog-container"},this.renderProjects())))))}}]),t}(r.a.PureComponent),te=(a(428),[{name:"Projects",path:"/projects/",component:K},{name:"Blog",path:"/blog/",component:ee},{name:"About",path:"/about/",component:function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(L,{title:"About Me"},r.a.createElement(_,{image:"about"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"Who I am, where I'm at, and where I'm going.")),r.a.createElement("div",{className:"about",id:"content-container"},r.a.createElement("div",{className:"text-container"},r.a.createElement("p",null,"Hi! I\u2019m Samuel Li. I'm currently a PhD candidate in atomic, molecular, and optical (AMO) physics in the ",r.a.createElement("a",{href:"https://sites.google.com/view/cheuk-lab/"},"Cheuk Lab")," at Princeton University. My research focuses on ultracold calcium monofluoride (CaF) molecules trapped in optical tweezer arrays, with potential long-term applications in quantum simulation or quantum computation."),r.a.createElement("p",null,"I completed my undergraduate degree in mathematics, physics, and computer science at the University of Toronto. During my senior year, I ran an experiment in the ",r.a.createElement("a",{href:"https://www.physics.utoronto.ca/~vutha/"},"Vutha lab")," to grow cryogenic neon crystals doped with barium monofluoride (BaF:Ne), and study their optical and magnetic spectra. These developments could be useful for future endeavours to measure the electron electric dipole moment (eEDM) using molecules trapped in solids."),r.a.createElement("p",null,"Put simply, I like to solve problems and learn as broadly as possible. I\u2019ve worked with everything from video production to machine learning to machining to differential geometry, and if there\u2019s one thing I learned, it\u2019s that learning is never wasted. It\u2019s not about the subject, it\u2019s about the ideas. And ideas are cross-domain."),r.a.createElement("p",null,"I first put up this website in July 2018 as a learning project, picking up React in the process. I had been programming for over a decade, but mainly for back-end applications, so I decided to give web development a shot. What you\u2019re seeing is the product of one of my many \u201cdon\u2019t know that yet, might as well try\u201d journeys."),r.a.createElement("p",null,"If I don\u2019t know something, I\u2019ll just learn it \u2014 and by now, I\u2019ve gotten a lot of experience doing that."),r.a.createElement("h2",null,"Contact & Info"),r.a.createElement("p",null,"For general inquiries and suggestions: ",r.a.createElement("a",{href:"mailto:contact@samuelj.li"},"contact@samuelj.li")),r.a.createElement("p",null,"To report a bug: ",r.a.createElement("a",{href:"mailto:bug.report@samuelj.li"},"bug.report@samuelj.li")))))}}]),t}(r.a.PureComponent)}]),ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getTabs",value:function(){return Object.fromEntries(te.map(function(e){return[e.name,e.path]}))}},{key:"renderRoutes",value:function(){return te.map(function(e){var t=e.path,a=e.component;return r.a.createElement(d.b,{key:t,path:t,component:a})})}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{theme:b},r.a.createElement(N,{tabs:this.getTabs()}),r.a.createElement(d.d,null,this.renderRoutes(),r.a.createElement(d.b,{path:"/"},r.a.createElement(d.a,{to:"/projects/"})))))}}]),t}(r.a.PureComponent),ne=document.getElementById("root");ne.hasChildNodes()?Object(i.hydrate)(r.a.createElement(ae,null),ne):Object(o.render)(r.a.createElement(ae,null),ne)}},[[190,2,3]]]);
//# sourceMappingURL=main.c0044498.chunk.js.map