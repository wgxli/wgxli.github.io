(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e){e.exports=JSON.parse('[{"id":"2020-07-29-harmonic-oscillator","title":"Constant-Period Oscillation implies SHM","date":[2020,7,29],"tags":["physics","classical-mechanics"]}]')},140:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){var n={"./2020-07-29-harmonic-oscillator/intro.js":[544,4]};function r(e){if(!a.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return a.e(t[1]).then(function(){return a(r)})}r.keys=function(){return Object.keys(n)},r.id=208,e.exports=r},214:function(e,t,a){e.exports=a.p+"static/media/down-arrow.b63a6dc0.svg"},218:function(e,t,a){e.exports=a(543)},425:function(e,t,a){},498:function(e,t,a){},499:function(e,t,a){e.exports=a.p+"static/media/github.62367fef.svg"},500:function(e,t,a){e.exports=a.p+"static/media/linkedin.02b94020.svg"},518:function(e,t,a){},519:function(e,t,a){},520:function(e,t,a){},539:function(e,t,a){},540:function(e,t,a){},541:function(e,t,a){var n={"./2020-07-29-harmonic-oscillator/body.js":[545,3]};function r(e){if(!a.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return a.e(t[1]).then(function(){return a(r)})}r.keys=function(){return Object.keys(n)},r.id=541,e.exports=r},542:function(e,t,a){},543:function(e,t,a){"use strict";a.r(t);a(219);var n=a(0),r=a.n(n),i=a(69),o=(a(425),a(9)),c=a(10),l=a(12),s=a(11),u=a(13),m=a(52),d=a(42),p=a(142),h=a.n(p),g=a(100),b=a(144),f=Object(g.createMuiTheme)({palette:{primary:b.blue,secondary:b.blue}}),v=a(30),y=(a(498),{github:{icon:a(499),url:"https://github.com/wgxli"},linkedin:{icon:a(500),url:"https://www.linkedin.com/in/samuelj-li"}}),j=a(210),E=a.n(j),w=a(211),O=a.n(w),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.history;this.unlisten=e.listen(this.update.bind(this)),this.update()}},{key:"update",value:function(){this.setState({url:window.location.href})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"render",value:function(){var e=this.props.size,t=this.state.url;return r.a.createElement("div",{className:"jsx-959105480 container"},r.a.createElement(O.a,{value:t,size:e}),r.a.createElement(E.a,{id:"959105480"},[".container.jsx-959105480{-webkit-transform-origin:top right;-ms-transform-origin:top right;transform-origin:top right;-webkit-transform:scale(0.25);-ms-transform:scale(0.25);transform:scale(0.25);position:absolute;top:0;right:0;z-index:1000;display:none;}","@media print{.container.jsx-959105480{display:block;}}"]))}}]),t}(n.PureComponent),x=Object(m.g)(k),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderTabs",value:function(){var e=this.props.tabs;return Object.entries(e).map(function(e){var t=Object(v.a)(e,2),a=t[0],n=t[1];return r.a.createElement(d.c,{key:n,to:n,className:"nav-tab",activeClassName:"selected"},a)})}},{key:"renderSocialButtons",value:function(){for(var e=[],t=Object.entries(y),a=0;a<t.length;a++){var n=t[a],i=Object(v.a)(n,2),o=i[0],c=i[1];e.push(r.a.createElement("a",{key:o,href:c.url},r.a.createElement("img",{className:"social-icon",src:c.icon,alt:o+" social media icon"})))}return e}},{key:"render",value:function(){var e=r.a.createElement("div",{id:"main-logo-container"},r.a.createElement(d.c,{to:"/",id:"main-logo"},"Samuel J. Li")),t=r.a.createElement("div",{id:"social-buttons"},this.renderSocialButtons());return r.a.createElement("header",{id:"navigation-bar"},r.a.createElement("div",{id:"main-bar"},e,r.a.createElement("nav",{className:"desktop navigation-tabs"},this.renderTabs()),t),r.a.createElement("nav",{className:"mobile navigation-tabs"},this.renderTabs()),r.a.createElement(x,{size:300}))}}]),t}(r.a.PureComponent),T=a(104),P=a(51),S=a(102),C=(a(518),a(214)),I=a.n(C),_=[256,512,1024,2048,4096],M=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.children,n=e.thin;return r.a.createElement("div",{className:"banner-container"+(n?" thin":"")},r.a.createElement("img",{className:"banner-background",src:"/images/banner/".concat(t,"-1024.jpg"),srcSet:_.map(function(e){return"/images/banner/".concat(t,"-").concat(e,".jpg ").concat(e,"w")}).join(", "),alt:"".concat(t," banner background")}),r.a.createElement("div",{className:"banner-overlay"},r.a.createElement("span",{className:"banner-text"},a),r.a.createElement("a",{href:"#banner-content-anchor",className:"down-arrow"},r.a.createElement("img",{src:I.a,alt:"down arrow icon"}))),r.a.createElement("div",{id:"banner-content-anchor"}))}}]),t}(r.a.PureComponent);function A(){var e=window.renderMathInElement;e?e(document.getElementById("page-container"),{macros:{"\\dd":"{\\mathrm{d} #1}","\\defeq":":="}}):setTimeout(A,500)}var L=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.root=document.getElementById("page-container"),this.scrollHandler=function(){return e.handleScroll()},this.root.addEventListener("scroll",this.scrollHandler),this.scrollHandler(),A()}},{key:"componentWillUnmount",value:function(){this.root.removeEventListener("scroll",this.scrollHandler)}},{key:"handleScroll",value:function(){this.root.scrollLeft>0&&(this.root.scrollLeft=0);var e=Math.max(this.root.scrollTop,0);document.documentElement.dataset.scroll=e}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children;return r.a.createElement("div",{id:"page-container"},r.a.createElement(P.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 ",t)),a)}}]),t}(n.PureComponent),J=(a(140),a(519),a(216)),H=a.n(J),D=a(215),F=a.n(D),z=a(217),B=a.n(z),q=a(147),W=a.n(q),U=a(101),R=a.n(U),X=(a(520),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderImage",value:function(){var e=this.props.data;return r.a.createElement("a",{href:e.url},r.a.createElement(F.a,{className:"project-image",image:"/images/projects/"+e.image,role:"img","aria-label":e.title.toLowerCase()+" image"}))}},{key:"renderHeader",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"project-header"},r.a.createElement("h2",{className:"project-title"},e.title),r.a.createElement("div",{className:"project-date"},r.a.createElement(W.a,{variant:"caption",noWrap:!0},e.date)))}},{key:"renderTag",value:function(e){var t=this;return r.a.createElement(R.a,{key:e,label:e,className:"project-tag",onClick:function(a){return t.props.handleTagClick(a,e)}})}},{key:"renderSocial",value:function(){var e=this.props.data,t=[];if("social"in e)for(var a in e.social){var n=e.social[a],i="/icons/social/"+a+".svg";t.push(r.a.createElement("a",{href:n,key:a},r.a.createElement("img",{src:i,alt:a+" social icon"})))}return t}},{key:"render",value:function(){var e=this.props.data;return r.a.createElement(H.a,{className:"project-card"},this.renderImage(),r.a.createElement(B.a,{className:"project-info-container"},r.a.createElement("a",{href:e.url,className:"project-info"},this.renderHeader(),r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"project-footer"},r.a.createElement("div",{className:"project-tags-container"},r.a.createElement(W.a,{className:"project-tag-label",variant:"caption"},"Tags:"),r.a.createElement("div",{className:"project-tags"},e.tags.map(this.renderTag.bind(this)))),r.a.createElement("div",{className:"project-social"},this.renderSocial()))))}}]),t}(r.a.PureComponent)),G=a(148),K=a(143),V=a.n(K),Q=(a(539),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.tags,i=[a.root,"tag-filter"];return 0===n.length&&i.push("empty"),r.a.createElement(V.a,{key:"tag-filter",className:i.join(" ")},r.a.createElement("p",null,"Filter Tags:"),r.a.createElement("div",{className:"tags"},r.a.createElement(G.b,{flipKey:n.join(" ")},n.map(function(t){return r.a.createElement(G.a,{key:t,flipId:t},r.a.createElement(R.a,{key:t,label:t,onDelete:function(){return e.props.deleteTag(t)},className:a.chip}))}))))}}]),t}(r.a.PureComponent)),Y=Object(g.withStyles)(function(e){return{root:{flexWrap:"wrap"},chip:{margin:"0 ".concat(e.spacing.unit/2,"px")}}})(Q),Z={simplefhe:{title:"SimpleFHE Python Library",description:"A dead-simple Python library for full homomorphic encryption (FHE). Allows computation on encrypted client data without any server-side decryption. Available on the Python 3 package index.",date:"July 2020",image:"simplefhe.png",url:"https://github.com/wgxli/simple-fhe",tags:["python","library","cryptography"],social:{github:"https://github.com/wgxli/simple-fhe"}},ising_spin_model:{title:"Ising Spin Model",description:"A blazing-fast interactive implementation of the Ising square-lattice spin model. Made with WebGL.",date:"July 2020",image:"ising-spin-model-compressed.png",url:"/ising-spin-model",tags:["physics","react","webgl","simulation"],social:{github:"https://github.com/wgxli/ising-spin-model"}},elliptic_curve_explorer:{title:"Elliptic Curve Explorer",description:"An interactive tool to explore rational elliptic curves in Weierstrass form. Visualization in both 2D (affine) and 3D (projective) space. Made with React and three.js.",date:"April 2019",image:"elliptic-curve-explorer-compressed.jpg",url:"/elliptic-curve-explorer",tags:["math","react","webgl","three.js"],social:{github:"https://github.com/wgxli/elliptic-curve-explorer"}},hopf_fibration:{title:"Hopf Fibration Visualization",description:"An interactive visualization of the Hopf fibration, stereographically projected into 3-space. Made with three.js.",date:"March 2019",image:"hopf-fibration-compressed.jpg",url:"/hopf-fibration",tags:["math","webgl","three.js"],social:{reddit:"https://www.reddit.com/r/math/comments/b4xcxe/i_made_an_interactive_visualization_of_the_hopf/",github:"https://github.com/wgxli/hopf-fibration"}},complex_function_plotter:{title:"Complex Function Plotter",description:"An interactive domain coloring plotter for visualizing complex functions. Highly responsive visualization of functions parameterized by an arbitrary number of variables. Made with React and WebGL.",date:"July 2018",image:"complex-function-plotter-compressed.jpg",url:"/complex-function-plotter",tags:["math","react","webgl"],social:{reddit:"https://www.reddit.com/r/math/comments/dofwty/zooming_in_on_the_natural_boundary_of_z2n/",github:"https://github.com/wgxli/complex-function-plotter"}},quantum_simulator:{title:"Quantum Simulator",description:"An interactive simulation of the one-dimensional time-dependent Schr\xf6dinger equation. Features stable time acceleration, views in different eigenbases, and simulated measurement. Made with Python 3.",date:"July 2018",image:"quantum-simulator-compressed.png",url:"https://github.com/wgxli/quantum-simulator",tags:["python","simulation","physics"],social:{github:"https://github.com/wgxli/quantum-simulator"}},latex_scratchpad:{title:"LaTeX Scratchpad",description:"Minimalist, highly responsive equation editor for quick-and-dirty scratch work. Made with the KaTeX library.",date:"December 2017",image:"latex-scratchpad.png",url:"/legacy-website/pages/latex-scratchpad/scratchpad.html",tags:["latex","math"]},hs_teaching_aids:{title:"High-School Teaching Aids",description:"Past teaching aids for an IB Mathematics HL class of about twenty students. Includes interactive applets and challenging exercises.",date:"August 2017",image:"hs-teaching-aid.png",url:"/legacy-website/index.html",tags:["teaching","math"]},piano_transcription:{title:"DNN-Based Piano Transcription",description:"Uses deep neural networks to extract note onset times from piano recordings. I was selected to present this research at the 2017 Joint Mathematics Meetings. Made with TensorFlow.",date:"July 2017",image:"piano-transcription-compressed.png",url:"https://github.com/wgxli/piano-transcription",tags:["machine-learning","music","tensorflow","python"],social:{github:"https://github.com/wgxli/piano-transcription"}},simpletex:{title:"SimpleTeX Python Library",description:"A simple, hassle-free library for creating LaTeX documents in Python. Features automatic import management, easy global styling, and minimalist syntax. Available on the Python 3 package index.",date:"July 2016",image:"simpletex-compressed.png",url:"https://pypi.org/project/simpletex",tags:["python","latex","library"],social:{github:"https://github.com/wgxli/simpletex"}},toy_raytracer:{title:"Toy Raytracer",description:"A simple raytracer I wrote in C++. Features depth of field, adaptive sampling, and correct treatment of reflective, refractive, and diffuse surfaces (including Fresnel).",date:"August 2015",image:"raytracer-compressed.jpg",url:"https://github.com/wgxli/toy-raytracer",tags:["C++","3D","graphics"],social:{github:"https://github.com/wgxli/toy-raytracer"}}},$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={tags:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderProjects",value:function(e){var t=this;return Object.entries(Z).filter(function(t){var a=Object(v.a)(t,2),n=(a[0],a[1]),r=new Set(n.tags);return e.every(function(e){return r.has(e)})}).map(function(e){var a=Object(v.a)(e,2),n=a[0],i=a[1];return r.a.createElement(X,{key:n,data:i,handleTagClick:t.handleTagClick.bind(t)})})}},{key:"addTag",value:function(e){this.setState(function(t){var a=Object(T.a)(t.tags);return a.indexOf(e)<0&&a.push(e),{tags:a}})}},{key:"deleteTag",value:function(e){this.setState(function(t){return{tags:t.tags.filter(function(t){return t!==e})}})}},{key:"handleTagClick",value:function(e,t){e.stopPropagation(),this.addTag(t)}},{key:"render",value:function(){var e=this.state.tags;return r.a.createElement(L,{title:"Projects"},r.a.createElement(P.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 Projects")),r.a.createElement(M,{image:"projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement("p",null,"A library of the projects I\u2019ve compiled over the years.")),r.a.createElement("div",{id:"content-container"},r.a.createElement(Y,{tags:e,deleteTag:this.deleteTag.bind(this)}),r.a.createElement(S.a,{id:"project-container"},this.renderProjects(e))))}}]),t}(r.a.PureComponent),ee=(a(207),a(540),a(103)),te=["January","February","March","April","May","June","July","August","September","October","November","December"];var ae=function(e){var t=e.match.params.postId,i=ee.find(function(e){return e.id===t}),o=Object(n.useState)(null),c=Object(v.a)(o,2),l=c[0],s=c[1],u=Object(n.useState)(null),m=Object(v.a)(u,2),d=m[0],p=m[1];Object(n.useEffect)(function(){"#page-top"===window.location.hash&&(window.scrollTo(0,0),document.getElementById("page-container").scrollTo(0,0)),A()}),null===l&&a(208)("./".concat(t,"/intro.js")).then(function(e){s(e.default)}).catch(function(e){console.error("Couldn\u2019t load post ".concat(t,":"),e),s("The blog post you requested could not be found."),p(" ")}),null===d&&a(541)("./".concat(t,"/body.js")).then(function(e){return p(e.default)}).catch(function(e){console.error("Couldn\u2019t load post body ".concat(t,":"),e),p("Content failed to load!")});var h=r.a.createElement("div",{className:"loading-placeholder"},"Loading...");return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 ",i.title||"Blog")),r.a.createElement("div",{id:"page-top"}),r.a.createElement(M,{image:"blog",thin:!0},r.a.createElement("h1",null,i.title||"Loading...")),r.a.createElement("div",{id:"content-container",className:"blog"},r.a.createElement("div",{id:"blog-content"},function(e){if(null===e)return null;var t=Object(v.a)(e,3),a=t[0],n=t[1],i=t[2];return r.a.createElement("p",{className:"date"},"Published ",te[n-1]," ",i,", ",a)}(i.date),l||h,d||(l?h:null))))},ne=(a(542),["January","February","March","April","May","June","July","August","September","October","November","December"]),re=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderHeader",value:function(){var e=this.props.destination,t=this.props.metadata,a=Object(v.a)(t.date,3),n=a[0],i=a[1],o=a[2],c="".concat(ne[i-1]," ").concat(o,", ").concat(n);return r.a.createElement(d.b,{to:e,className:"blog-header"},r.a.createElement("h2",{className:"blog-title"},t.title),r.a.createElement("p",{className:"blog-date"},c))}},{key:"renderTag",value:function(e){var t=this;return r.a.createElement("div",{className:"blog-tag",key:e,onClick:function(a){return t.props.handleTagClick(a,e)}},e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.metadata,n=t.promise,i=t.destination;if(void 0===this.state.intro)return n.then(function(t){return e.setState({intro:t.default})}).catch(function(e){return console.error("Blog post ".concat(a.id," failed to load:"),e)}),r.a.createElement("div",null,"Loading...");var o=this.state.intro;return r.a.createElement("div",{className:"blog-card"},this.renderHeader(),r.a.createElement("div",{className:"blog-tags"},a.tags.map(this.renderTag.bind(this))),r.a.createElement(d.b,{to:i,className:"blog-info"},o(),r.a.createElement("div",{className:"blog-info-cover"})))}}]),t}(r.a.PureComponent),ie=[{name:"Projects",path:"/projects/",component:$},{name:"Blog",path:"/blog/",component:function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={tags:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderProjects",value:function(){var e=[],t=!0,n=!1,i=void 0;try{for(var o,c=ee[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){var l=o.value;if(this.shouldDisplayPost(l)){var s=l.id,u=a(208)("./".concat(s,"/intro.js"));e.push(r.a.createElement(re,{key:s,metadata:l,promise:u,destination:"/blog/".concat(s,"#page-top"),handleTagClick:this.handleTagClick.bind(this)}))}}}catch(m){n=!0,i=m}finally{try{t||null==c.return||c.return()}finally{if(n)throw i}}return e}},{key:"shouldDisplayPost",value:function(e){return this.state.tags.every(function(t){return e.tags.includes(t)})}},{key:"addTag",value:function(e){this.setState(function(t){var a=Object(T.a)(t.tags);return a.indexOf(e)<0&&a.push(e),{tags:a}})}},{key:"deleteTag",value:function(e){this.setState(function(t){return{tags:t.tags.filter(function(t){return t!==e})}})}},{key:"handleTagClick",value:function(e,t){e.stopPropagation(),this.addTag(t)}},{key:"render",value:function(){var e=this.state.tags;return r.a.createElement(L,{title:"Blog"},r.a.createElement(P.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 Blog")),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/blog/:postId",component:ae}),r.a.createElement(m.b,{path:"/blog"},r.a.createElement(M,{image:"blog"},r.a.createElement("h1",null,"Blog"),r.a.createElement("p",null,"My ramblings, some of which are coherent.")),r.a.createElement("div",{id:"content-container"},r.a.createElement(Y,{tags:e,deleteTag:this.deleteTag.bind(this)}),r.a.createElement(S.a,{id:"blog-container"},this.renderProjects())))))}}]),t}(r.a.PureComponent)},{name:"About",path:"/about/",component:function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(L,{title:"About Me"},r.a.createElement(M,{image:"about"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"Who I am, where I'm at, and where I'm going.")),r.a.createElement("div",{id:"content-container"},r.a.createElement("div",{className:"text-container"},r.a.createElement("p",null,"Hi! I\u2019m Samuel Li, an undergraduate at the University of Toronto. I\u2019m doing a double specialist in mathematics and physics."),r.a.createElement("p",null,"I like to solve problems and learn as broadly as possible. I\u2019ve worked with everything from video production to machine learning to machining to differential geometry, and if there\u2019s one thing I learned, it\u2019s that learning is never wasted. It\u2019s not about the subject, it\u2019s about the ideas. And ideas are cross-domain."),r.a.createElement("p",null,"I first put up this website in July 2018 as a learning project, picking up React in the process. I had been programming for over a decade, but mainly for back-end applications, so I decided to give web development a shot. What you\u2019re seeing is the product of one of my many \u201cdon\u2019t know that yet, might as well try\u201d journeys."),r.a.createElement("p",null,"If I don\u2019t know something, I\u2019ll just learn it \u2014 and by now, I\u2019ve gotten a lot of experience doing that."))))}}]),t}(r.a.PureComponent)}],oe=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getTabs",value:function(){return Object.fromEntries(ie.map(function(e){return[e.name,e.path]}))}},{key:"renderRoutes",value:function(){return ie.map(function(e){var t=e.path,a=e.component;return r.a.createElement(m.b,{key:t,path:t,component:a})})}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{theme:f},r.a.createElement(N,{tabs:this.getTabs()}),r.a.createElement(m.d,null,this.renderRoutes(),r.a.createElement(m.b,{path:"/"},r.a.createElement(m.a,{to:"/projects/"})))))}}]),t}(r.a.PureComponent),ce=document.getElementById("root");ce.hasChildNodes()?Object(i.hydrate)(r.a.createElement(oe,null),ce):Object(i.render)(r.a.createElement(oe,null),ce)}},[[218,1,2]]]);
//# sourceMappingURL=main.b910357a.chunk.js.map