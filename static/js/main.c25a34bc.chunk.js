(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){var n={"./2020-07-29-harmonic-oscillator/intro.js":[543,4]};function r(e){var t=n[e];return t?a.e(t[1]).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(n)},r.id=207,e.exports=r},213:function(e,t,a){e.exports=a.p+"static/media/down-arrow.b63a6dc0.svg"},217:function(e,t,a){e.exports=a(542)},424:function(e,t,a){},497:function(e,t,a){},498:function(e,t,a){e.exports=a.p+"static/media/github.62367fef.svg"},499:function(e,t,a){e.exports=a.p+"static/media/linkedin.02b94020.svg"},517:function(e,t,a){},518:function(e,t,a){},519:function(e,t,a){},538:function(e,t,a){},539:function(e,t,a){},540:function(e,t,a){var n={"./2020-07-29-harmonic-oscillator/body.js":[544,3]};function r(e){var t=n[e];return t?a.e(t[1]).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(n)},r.id=540,e.exports=r},541:function(e,t,a){},542:function(e,t,a){"use strict";a.r(t);a(218);var n=a(0),r=a.n(n),i=a(69),o=(a(424),a(12)),c=a(13),l=a(15),s=a(14),u=a(16),m=a(52),d=a(45),p=a(141),h=a.n(p),g=a(100),b=a(143),f=Object(g.createMuiTheme)({palette:{primary:b.blue,secondary:b.blue}}),v=a(24),y=(a(497),{github:{icon:a(498),url:"https://github.com/wgxli"},linkedin:{icon:a(499),url:"https://www.linkedin.com/in/samuelj-li"}}),j=a(209),E=a.n(j),w=a(210),O=a.n(w),k=function(e){var t=e.size;return r.a.createElement("div",{className:"jsx-2141921728 container"},r.a.createElement(O.a,{value:window.location.href,size:t}),r.a.createElement(E.a,{id:"2141921728"},[".container.jsx-2141921728{-webkit-transform-origin:top right;-ms-transform-origin:top right;transform-origin:top right;-webkit-transform:scale(0.25);-ms-transform:scale(0.25);transform:scale(0.25);position:absolute;top:0;right:0;z-index:1000;display:none;}","@media print{.container.jsx-2141921728{display:block;}}"]))},x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderTabs",value:function(){var e=this.props.tabs;return Object.entries(e).map(function(e){var t=Object(v.a)(e,2),a=t[0],n=t[1];return r.a.createElement(d.c,{key:n,to:n,className:"nav-tab",activeClassName:"selected"},a)})}},{key:"renderSocialButtons",value:function(){for(var e=[],t=Object.entries(y),a=0;a<t.length;a++){var n=t[a],i=Object(v.a)(n,2),o=i[0],c=i[1];e.push(r.a.createElement("a",{key:o,href:c.url},r.a.createElement("img",{className:"social-icon",src:c.icon,alt:o+" social media icon"})))}return e}},{key:"render",value:function(){var e=r.a.createElement("div",{id:"main-logo-container"},r.a.createElement(d.c,{to:"/",id:"main-logo"},"Samuel J. Li")),t=r.a.createElement("div",{id:"social-buttons"},this.renderSocialButtons());return r.a.createElement("header",{id:"navigation-bar"},r.a.createElement("div",{id:"main-bar"},e,r.a.createElement("nav",{className:"desktop navigation-tabs"},this.renderTabs()),t),r.a.createElement("nav",{className:"mobile navigation-tabs"},this.renderTabs()),r.a.createElement(k,{size:300}))}}]),t}(r.a.PureComponent),N=a(103),T=a(51),P=a(102),S=(a(517),a(213)),C=a.n(S),I=[256,512,1024,2048,4096],_=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.children,n=e.thin;return r.a.createElement("div",{className:"banner-container"+(n?" thin":"")},r.a.createElement("img",{className:"banner-background",src:"/images/banner/".concat(t,"-1024.jpg"),srcSet:I.map(function(e){return"/images/banner/".concat(t,"-").concat(e,".jpg ").concat(e,"w")}).join(", "),alt:"".concat(t," banner background")}),r.a.createElement("div",{className:"banner-overlay"},r.a.createElement("span",{className:"banner-text"},a),r.a.createElement("a",{href:"#content-container",className:"down-arrow"},r.a.createElement("img",{src:C.a,alt:"down arrow icon"}))))}}]),t}(r.a.PureComponent);function A(){var e=window.renderMathInElement;e?e(document.body,{macros:{"\\dd":"{\\mathrm{d} #1}","\\defeq":":="}}):setTimeout(A,500)}var M=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.root=document.getElementById("page-container"),this.scrollHandler=function(){return e.handleScroll()},this.root.addEventListener("scroll",this.scrollHandler),this.scrollHandler(),A()}},{key:"componentWillUnmount",value:function(){this.root.removeEventListener("scroll",this.scrollHandler)}},{key:"handleScroll",value:function(){this.root.scrollLeft>0&&(this.root.scrollLeft=0);var e=Math.max(this.root.scrollTop,0);document.documentElement.dataset.scroll=e}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children;return r.a.createElement("div",{id:"page-container"},r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 ",t)),a)}}]),t}(n.PureComponent),L=(a(139),a(518),a(215)),J=a.n(L),H=a(214),F=a.n(H),z=a(216),B=a.n(z),D=a(146),q=a.n(D),W=a(101),U=a.n(W),R=(a(519),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderImage",value:function(){var e=this.props.data;return r.a.createElement("a",{href:e.url},r.a.createElement(F.a,{className:"project-image",image:"/images/projects/"+e.image,role:"img","aria-label":e.title.toLowerCase()+" image"}))}},{key:"renderHeader",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"project-header"},r.a.createElement("h2",{className:"project-title"},e.title),r.a.createElement("div",{className:"project-date"},r.a.createElement(q.a,{variant:"caption",noWrap:!0},e.date)))}},{key:"renderTag",value:function(e){var t=this;return r.a.createElement(U.a,{key:e,label:e,className:"project-tag",onClick:function(a){return t.props.handleTagClick(a,e)}})}},{key:"renderSocial",value:function(){var e=this.props.data,t=[];if("social"in e)for(var a in e.social){var n=e.social[a],i="/icons/social/"+a+".svg";t.push(r.a.createElement("a",{href:n,key:a},r.a.createElement("img",{src:i,alt:a+" social icon"})))}return t}},{key:"render",value:function(){var e=this.props.data;return r.a.createElement(J.a,{className:"project-card"},this.renderImage(),r.a.createElement(B.a,{className:"project-info-container"},r.a.createElement("a",{href:e.url,className:"project-info"},this.renderHeader(),r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"project-footer"},r.a.createElement("div",{className:"project-tags-container"},r.a.createElement(q.a,{className:"project-tag-label",variant:"caption"},"Tags:"),r.a.createElement("div",{className:"project-tags"},e.tags.map(this.renderTag.bind(this)))),r.a.createElement("div",{className:"project-social"},this.renderSocial()))))}}]),t}(r.a.PureComponent)),X=a(147),G=a(142),K=a.n(G),V=(a(538),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.tags,i=[a.root,"tag-filter"];return 0===n.length&&i.push("empty"),r.a.createElement(K.a,{key:"tag-filter",className:i.join(" ")},r.a.createElement("p",null,"Filter Tags:"),r.a.createElement("div",{className:"tags"},r.a.createElement(X.b,{flipKey:n.join(" ")},n.map(function(t){return r.a.createElement(X.a,{key:t,flipId:t},r.a.createElement(U.a,{key:t,label:t,onDelete:function(){return e.props.deleteTag(t)},className:a.chip}))}))))}}]),t}(r.a.PureComponent)),Q=Object(g.withStyles)(function(e){return{root:{flexWrap:"wrap"},chip:{margin:"0 ".concat(e.spacing.unit/2,"px")}}})(V),Y={simplefhe:{title:"SimpleFHE Python Library",description:"A dead-simple Python library for full homomorphic encryption (FHE). Allows computation on encrypted client data without any server-side decryption. Available on the Python 3 package index.",date:"July 2020",image:"simplefhe.png",url:"https://github.com/wgxli/simple-fhe",tags:["python","library","cryptography"],social:{github:"https://github.com/wgxli/simple-fhe"}},ising_spin_model:{title:"Ising Spin Model",description:"A blazing-fast interactive implementation of the Ising square-lattice spin model. Made with WebGL.",date:"July 2020",image:"ising-spin-model.png",url:"/ising-spin-model",tags:["physics","react","webgl","simulation"],social:{github:"https://github.com/wgxli/ising-spin-model"}},elliptic_curve_explorer:{title:"Elliptic Curve Explorer",description:"An interactive tool to explore rational elliptic curves in Weierstrass form. Visualization in both 2D (affine) and 3D (projective) space. Made with React and three.js.",date:"April 2019",image:"elliptic-curve-explorer-compressed.jpg",url:"/elliptic-curve-explorer",tags:["math","react","webgl","three.js"],social:{github:"https://github.com/wgxli/elliptic-curve-explorer"}},hopf_fibration:{title:"Hopf Fibration Visualization",description:"An interactive visualization of the Hopf fibration, stereographically projected into 3-space. Made with three.js.",date:"March 2019",image:"hopf-fibration-compressed.jpg",url:"/hopf-fibration",tags:["math","webgl","three.js"],social:{reddit:"https://www.reddit.com/r/math/comments/b4xcxe/i_made_an_interactive_visualization_of_the_hopf/",github:"https://github.com/wgxli/hopf-fibration"}},complex_function_plotter:{title:"Complex Function Plotter",description:"An interactive domain coloring plotter for visualizing complex functions. Highly responsive visualization of functions parameterized by an arbitrary number of variables. Made with React and WebGL.",date:"July 2018",image:"complex-function-plotter-compressed.jpg",url:"/complex-function-plotter",tags:["math","react","webgl"],social:{reddit:"https://www.reddit.com/r/math/comments/dofwty/zooming_in_on_the_natural_boundary_of_z2n/",github:"https://github.com/wgxli/complex-function-plotter"}},quantum_simulator:{title:"Quantum Simulator",description:"An interactive simulation of the one-dimensional time-dependent Schr\xf6dinger equation. Features stable time acceleration, views in different eigenbases, and simulated measurement. Made with Python 3.",date:"July 2018",image:"quantum-simulator-compressed.png",url:"https://github.com/wgxli/quantum-simulator",tags:["python","simulation","physics"],social:{github:"https://github.com/wgxli/quantum-simulator"}},latex_scratchpad:{title:"LaTeX Scratchpad",description:"Minimalist, highly responsive equation editor for quick-and-dirty scratch work. Made with the KaTeX library.",date:"December 2017",image:"latex-scratchpad.png",url:"/legacy-website/pages/latex-scratchpad/scratchpad.html",tags:["latex","math"]},hs_teaching_aids:{title:"High-School Teaching Aids",description:"Past teaching aids for an IB Mathematics HL class of about twenty students. Includes interactive applets and challenging exercises.",date:"August 2017",image:"hs-teaching-aid.png",url:"/legacy-website/index.html",tags:["teaching","math"]},piano_transcription:{title:"DNN-Based Piano Transcription",description:"Uses deep neural networks to extract note onset times from piano recordings. I was selected to present this research at the 2017 Joint Mathematics Meetings. Made with TensorFlow.",date:"July 2017",image:"piano-transcription-compressed.jpg",url:"https://github.com/wgxli/piano-transcription",tags:["machine-learning","music","tensorflow","python"],social:{github:"https://github.com/wgxli/piano-transcription"}},simpletex:{title:"SimpleTeX Python Library",description:"A simple, hassle-free library for creating LaTeX documents in Python. Features automatic import management, easy global styling, and minimalist syntax. Available on the Python 3 package index.",date:"July 2016",image:"simpletex-compressed.png",url:"https://pypi.org/project/simpletex",tags:["python","latex","library"],social:{github:"https://github.com/wgxli/simpletex"}},toy_raytracer:{title:"Toy Raytracer",description:"A simple raytracer I wrote in C++. Features depth of field, adaptive sampling, and correct treatment of reflective, refractive, and diffuse surfaces (including Fresnel).",date:"August 2015",image:"raytracer-compressed.jpg",url:"https://github.com/wgxli/toy-raytracer",tags:["C++","3D","graphics"],social:{github:"https://github.com/wgxli/toy-raytracer"}}},Z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={tags:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderProjects",value:function(e){var t=this;return Object.entries(Y).filter(function(t){var a=Object(v.a)(t,2),n=(a[0],a[1]),r=new Set(n.tags);return e.every(function(e){return r.has(e)})}).map(function(e){var a=Object(v.a)(e,2),n=a[0],i=a[1];return r.a.createElement(R,{key:n,data:i,handleTagClick:t.handleTagClick.bind(t)})})}},{key:"addTag",value:function(e){this.setState(function(t){var a=Object(N.a)(t.tags);return a.indexOf(e)<0&&a.push(e),{tags:a}})}},{key:"deleteTag",value:function(e){this.setState(function(t){return{tags:t.tags.filter(function(t){return t!==e})}})}},{key:"handleTagClick",value:function(e,t){e.stopPropagation(),this.addTag(t)}},{key:"render",value:function(){var e=this.state.tags;return r.a.createElement(M,{title:"Projects"},r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 Projects")),r.a.createElement(_,{image:"projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement("p",null,"A library of the projects I\u2019ve compiled over the years.")),r.a.createElement("div",{id:"content-container"},r.a.createElement(Q,{tags:e,deleteTag:this.deleteTag.bind(this)}),r.a.createElement(P.a,{id:"project-container"},this.renderProjects(e))))}}]),t}(r.a.PureComponent),$=(a(206),a(539),["January","February","March","April","May","June","July","August","September","October","November","December"]);var ee=function(e){var t=e.match.params.postId,i=Object(n.useState)({title:null,date:null}),o=Object(v.a)(i,2),c=o[0],l=o[1],s=Object(n.useState)(null),u=Object(v.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(null),h=Object(v.a)(p,2),g=h[0],b=h[1];Object(n.useEffect)(function(){"#page-top"===window.location.hash&&(window.scrollTo(0,0),document.getElementById("page-container").scrollTo(0,0)),A()}),null===c.title&&a(207)("./".concat(t,"/intro.js")).then(function(e){l(e.metadata),d(e.default)}).catch(function(e){console.error("Couldn\u2019t load post ".concat(t,":"),e),l({title:"Not Found"}),d("The blog post you requested could not be found."),b(" ")}),null===g&&a(540)("./".concat(t,"/body.js")).then(function(e){return b(e.default)}).catch(function(e){console.error("Couldn\u2019t load post body ".concat(t,":"),e),b("Content failed to load!")});var f=r.a.createElement("div",{className:"loading-placeholder"},"Loading...");return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 ",c.title||"Blog")),r.a.createElement("div",{id:"page-top"}),r.a.createElement(_,{image:"blog",thin:!0},r.a.createElement("h1",null,c.title||"Loading...")),r.a.createElement("div",{id:"content-container",className:"blog"},r.a.createElement("div",{id:"blog-content"},function(e){if(null===e)return null;var t=Object(v.a)(e,3),a=t[0],n=t[1],i=t[2];return r.a.createElement("p",{className:"date"},"Published ",$[n-1]," ",i,", ",a)}(c.date),m||f,g||(m?f:null))))},te=(a(541),["January","February","March","April","May","June","July","August","September","October","November","December"]),ae=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={data:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderHeader",value:function(){var e=this.props.destination,t=this.state.data,a=Object(v.a)(t.date,3),n=a[0],i=a[1],o=a[2],c="".concat(te[i-1]," ").concat(o,", ").concat(n);return r.a.createElement(d.b,{to:e,className:"blog-header"},r.a.createElement("h2",{className:"blog-title"},t.title),r.a.createElement("p",{className:"blog-date"},c))}},{key:"renderTag",value:function(e){var t=this;return r.a.createElement("div",{className:"blog-tag",key:e,onClick:function(a){return t.props.handleTagClick(a,e)}},e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.promise,i=t.destination;if(null===this.state.data)return n.then(function(t){return e.setState({data:t.metadata,intro:t.default})}).catch(function(e){return console.error("Blog post ".concat(a," failed to load:"),e)}),r.a.createElement("div",null,"Loading...");var o=this.state,c=o.data,l=o.intro;return r.a.createElement("div",{className:"blog-card"},this.renderHeader(),r.a.createElement("div",{className:"blog-tags"},c.tags.map(this.renderTag.bind(this))),r.a.createElement(d.b,{to:i,className:"blog-info"},l(),r.a.createElement("div",{className:"blog-info-cover"})))}}]),t}(r.a.PureComponent),ne=["2020-07-29-harmonic-oscillator"],re=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={tags:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderProjects",value:function(e){var t=[],n=!0,i=!1,o=void 0;try{for(var c,l=ne[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var s=c.value,u=a(207)("./".concat(s,"/intro.js"));t.push(r.a.createElement(ae,{key:s,id:s,promise:u,destination:"/blog/".concat(s,"#page-top"),handleTagClick:this.handleTagClick.bind(this)}))}}catch(m){i=!0,o=m}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return t}},{key:"addTag",value:function(e){this.setState(function(t){var a=Object(N.a)(t.tags);return a.indexOf(e)<0&&a.push(e),{tags:a}})}},{key:"deleteTag",value:function(e){this.setState(function(t){return{tags:t.tags.filter(function(t){return t!==e})}})}},{key:"handleTagClick",value:function(e,t){e.stopPropagation(),this.addTag(t)}},{key:"render",value:function(){var e=this.state.tags;return r.a.createElement(M,{title:"Blog"},r.a.createElement(T.Helmet,null,r.a.createElement("title",null,"Samuel J. Li \u2014 Blog")),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/blog/:postId",component:ee}),r.a.createElement(m.b,{path:"/blog"},r.a.createElement(_,{image:"blog"},r.a.createElement("h1",null,"Blog"),r.a.createElement("p",null,"My ramblings, some of which are coherent.")),r.a.createElement("div",{id:"content-container"},r.a.createElement(Q,{tags:e,deleteTag:this.deleteTag.bind(this)}),r.a.createElement(P.a,{id:"blog-container"},this.renderProjects(e))))))}}]),t}(r.a.PureComponent),ie=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(M,{title:"About Me"},r.a.createElement(_,{image:"about"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"Who I am, where I'm at, and where I'm going.")),r.a.createElement("div",{id:"content-container"},r.a.createElement("div",{className:"text-container"},r.a.createElement("p",null,"Hi! I\u2019m Samuel Li, an undergraduate at the University of Toronto. I\u2019m doing a double specialist in mathematics and physics."),r.a.createElement("p",null,"I like to solve problems and learn as broadly as possible. I\u2019ve worked with everything from video production to machine learning to machining to differential geometry, and if there\u2019s one thing I learned, it\u2019s that learning is never wasted. It\u2019s not about the subject, it\u2019s about the ideas. And ideas are cross-domain."),r.a.createElement("p",null,"I first put up this website in July 2018 as a learning project, picking up React in the process. I had been programming for over a decade, but mainly for back-end applications, so I decided to give web development a shot. What you\u2019re seeing is the product of one of my many \u201cdon\u2019t know that yet, might as well try\u201d journeys."),r.a.createElement("p",null,"If I don\u2019t know something, I\u2019ll just learn it \u2014 and by now, I\u2019ve gotten a lot of experience doing that."))))}}]),t}(r.a.PureComponent),oe=[{name:"Projects",path:"/projects/",component:r.a.createElement(Z,null)},{name:"Blog",path:"/blog/",component:r.a.createElement(re,null)},{name:"About",path:"/about/",component:r.a.createElement(ie,null)}],ce=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getTabs",value:function(){return Object.fromEntries(oe.map(function(e){return[e.name,e.path]}))}},{key:"renderRoutes",value:function(){return oe.map(function(e){var t=e.path,a=e.component;return r.a.createElement(m.b,{key:t,path:t},a)})}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{theme:f},r.a.createElement(x,{tabs:this.getTabs()}),r.a.createElement(m.d,null,this.renderRoutes(),r.a.createElement(m.b,{path:"/"},r.a.createElement(m.a,{to:"/projects/"})))))}}]),t}(r.a.PureComponent),le=document.getElementById("root");le.hasChildNodes()?Object(i.hydrate)(r.a.createElement(ce,null),le):Object(i.render)(r.a.createElement(ce,null),le)}},[[217,1,2]]]);
//# sourceMappingURL=main.c25a34bc.chunk.js.map