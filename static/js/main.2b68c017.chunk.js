(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t,a){},209:function(e,t,a){e.exports=a.p+"static/media/down-arrow.b63a6dc0.svg"},215:function(e,t,a){e.exports=a(538)},422:function(e,t,a){},495:function(e,t,a){},496:function(e,t,a){e.exports=a.p+"static/media/github.62367fef.svg"},497:function(e,t,a){e.exports=a.p+"static/media/linkedin.02b94020.svg"},515:function(e,t,a){},516:function(e,t,a){},517:function(e,t,a){},536:function(e,t,a){},537:function(e,t,a){},538:function(e,t,a){"use strict";a.r(t);a(216);var n=a(0),i=a.n(n),r=a(66),o=(a(422),a(14)),c=a(15),l=a(17),s=a(16),u=a(18),m=a(49),p=a(73),d=a(138),h=a.n(d),g=a(99),b=a(140),f=Object(g.createMuiTheme)({palette:{primary:b.blue,secondary:b.blue}}),v=a(67),y=(a(495),{github:{icon:a(496),url:"https://github.com/wgxli"},linkedin:{icon:a(497),url:"https://www.linkedin.com/in/samuelj-li"}}),j=a(205),E=a.n(j),w=a(206),k=a.n(w),x=function(e){var t=e.size;return i.a.createElement("div",{className:"jsx-1395678410 container"},i.a.createElement(k.a,{value:window.location.href,size:t}),i.a.createElement(E.a,{id:"1395678410"},[".container.jsx-1395678410{display:none;}","@media print{.container.jsx-1395678410{display:block;position:absolute;top:0;right:0;z-index:1;}}"]))},O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderTabs",value:function(){var e=this.props.tabs;return Object.entries(e).map(function(e){var t=Object(v.a)(e,2),a=t[0],n=t[1];return i.a.createElement(p.b,{key:n,to:n,className:"nav-tab",activeClassName:"selected"},a)})}},{key:"renderSocialButtons",value:function(){for(var e=[],t=Object.entries(y),a=0;a<t.length;a++){var n=t[a],r=Object(v.a)(n,2),o=r[0],c=r[1];e.push(i.a.createElement("a",{key:o,href:c.url},i.a.createElement("img",{className:"social-icon",src:c.icon,alt:o+" social media icon"})))}return e}},{key:"render",value:function(){var e=i.a.createElement("div",{id:"main-logo-container"},i.a.createElement(p.b,{to:"/",id:"main-logo"},"Samuel J. Li")),t=i.a.createElement("div",{id:"social-buttons"},this.renderSocialButtons());return i.a.createElement("header",{id:"navigation-bar"},i.a.createElement("div",{id:"main-bar"},e,i.a.createElement("nav",{className:"desktop navigation-tabs"},this.renderTabs()),t),i.a.createElement("nav",{className:"mobile navigation-tabs"},this.renderTabs()),i.a.createElement(x,{size:100}))}}]),t}(i.a.PureComponent),N=a(214),T=a(100),I=a(213),_=(a(515),a(209)),P=a.n(_),S=[256,512,1024,2048,4096],C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.children;return i.a.createElement("div",{className:"banner-container"},i.a.createElement("img",{className:"banner-background",src:"/images/banner/".concat(t,"-1024.jpg"),srcSet:S.map(function(e){return"/images/banner/".concat(t,"-").concat(e,".jpg ").concat(e,"w")}).join(", "),alt:"".concat(t," banner background")}),i.a.createElement("div",{className:"banner-overlay"},i.a.createElement("span",{className:"banner-text"},a),i.a.createElement("a",{href:"#content-container",className:"down-arrow"},i.a.createElement("img",{src:P.a,alt:"down arrow icon"}))))}}]),t}(i.a.PureComponent),A=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.root=document.getElementById("page-container"),this.scrollHandler=function(){return e.handleScroll()},this.root.addEventListener("scroll",this.scrollHandler),this.scrollHandler()}},{key:"componentWillUnmount",value:function(){this.root.removeEventListener("scroll",this.scrollHandler)}},{key:"handleScroll",value:function(){this.root.scrollLeft>0&&(this.root.scrollLeft=0);var e=this.root.scrollTop;document.documentElement.dataset.scroll=e}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children;return i.a.createElement("div",{id:"page-container"},i.a.createElement(T.Helmet,null,i.a.createElement("title",null,"Samuel J. Li \u2014 ",t)),a)}}]),t}(n.PureComponent),M=(a(202),a(516),a(211)),L=a.n(M),z=a(210),H=a.n(z),J=a(212),q=a.n(J),F=a(143),W=a.n(F),D=a(101),B=a.n(D),R=(a(517),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderImage",value:function(){var e=this.props.data;return i.a.createElement("a",{href:e.url},i.a.createElement(H.a,{className:"project-image",image:"/images/projects/"+e.image,role:"img","aria-label":e.title.toLowerCase()+" image"}))}},{key:"renderHeader",value:function(){var e=this.props.data;return i.a.createElement("div",{className:"project-header"},i.a.createElement("h2",{className:"project-title"},e.title),i.a.createElement("div",{className:"project-date"},i.a.createElement(W.a,{variant:"caption",noWrap:!0},e.date)))}},{key:"renderTag",value:function(e){var t=this;return i.a.createElement(B.a,{key:e,label:e,className:"project-tag",onClick:function(a){return t.props.handleTagClick(a,e)}})}},{key:"renderSocial",value:function(){var e=this.props.data,t=[];if("social"in e)for(var a in e.social){var n=e.social[a],r="/icons/social/"+a+".svg";t.push(i.a.createElement("a",{href:n,key:a},i.a.createElement("img",{src:r,alt:a+" social icon"})))}return t}},{key:"render",value:function(){var e=this.props.data;return i.a.createElement(L.a,{className:"project-card"},this.renderImage(),i.a.createElement(q.a,{className:"project-info-container"},i.a.createElement("a",{href:e.url,className:"project-info"},this.renderHeader(),i.a.createElement("p",null,e.description)),i.a.createElement("div",{className:"project-footer"},i.a.createElement("div",{className:"project-tags-container"},i.a.createElement(W.a,{className:"project-tag-label",variant:"caption"},"Tags:"),i.a.createElement("div",{className:"project-tags"},e.tags.map(this.renderTag.bind(this)))),i.a.createElement("div",{className:"project-social"},this.renderSocial()))))}}]),t}(i.a.PureComponent)),X=a(144),U=a(139),G=a.n(U),K=(a(536),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.tags,r=[a.root,"tag-filter"];return 0===n.length&&r.push("empty"),i.a.createElement(G.a,{key:"tag-filter",className:r.join(" ")},i.a.createElement("p",null,"Filter Tags:"),i.a.createElement("div",{className:"tags"},i.a.createElement(X.b,{flipKey:n.join(" ")},n.map(function(t){return i.a.createElement(X.a,{key:t,flipId:t},i.a.createElement(B.a,{key:t,label:t,onDelete:function(){return e.props.deleteTag(t)},className:a.chip}))}))))}}]),t}(i.a.PureComponent)),V=Object(g.withStyles)(function(e){return{root:{flexWrap:"wrap"},chip:{margin:"0 ".concat(e.spacing.unit/2,"px")}}})(K),Q={ising_spin_model:{title:"Ising Spin Model",description:"A blazing-fast interactive implementation of the Ising square-lattice spin model. Made with WebGL.",date:"July 2020",image:"ising-spin-model.png",url:"/ising-spin-model",tags:["physics","react","webgl","simulation"],social:{github:"https://github.com/wgxli/ising-spin-model"}},elliptic_curve_explorer:{title:"Elliptic Curve Explorer",description:"An interactive tool to explore rational elliptic curves in Weierstrass form. Visualization in both 2D (affine) and 3D (projective) space. Made with React and three.js.",date:"April 2019",image:"elliptic-curve-explorer-compressed.jpg",url:"/elliptic-curve-explorer",tags:["math","react","webgl","three.js"],social:{github:"https://github.com/wgxli/elliptic-curve-explorer"}},hopf_fibration:{title:"Hopf Fibration Visualization",description:"An interactive visualization of the Hopf fibration, stereographically projected into 3-space. Made with three.js.",date:"March 2019",image:"hopf-fibration-compressed.jpg",url:"/hopf-fibration",tags:["math","webgl","three.js"],social:{reddit:"https://www.reddit.com/r/math/comments/b4xcxe/i_made_an_interactive_visualization_of_the_hopf/",github:"https://github.com/wgxli/hopf-fibration"}},complex_function_plotter:{title:"Complex Function Plotter",description:"An interactive domain coloring plotter for visualizing complex functions. Highly responsive visualization of functions parameterized by an arbitrary number of variables. Made with React and WebGL.",date:"July 2018",image:"complex-function-plotter-compressed.jpg",url:"/complex-function-plotter",tags:["math","react","webgl"],social:{reddit:"https://www.reddit.com/r/math/comments/dofwty/zooming_in_on_the_natural_boundary_of_z2n/",github:"https://github.com/wgxli/complex-function-plotter"}},quantum_simulator:{title:"Quantum Simulator",description:"An interactive simulation of the one-dimensional time-dependent Schr\xf6dinger equation. Features stable time acceleration, views in different eigenbases, and simulated measurement. Made with Python 3.",date:"July 2018",image:"quantum-simulator-compressed.png",url:"https://github.com/wgxli/quantum-simulator",tags:["python","simulation","physics"],social:{github:"https://github.com/wgxli/quantum-simulator"}},latex_scratchpad:{title:"LaTeX Scratchpad",description:"Minimalist, highly responsive equation editor for quick-and-dirty scratch work. Made with the KaTeX library.",date:"December 2017",image:"latex-scratchpad.png",url:"/legacy-website/pages/latex-scratchpad/scratchpad.html",tags:["latex","math"]},hs_teaching_aids:{title:"High-School Teaching Aids",description:"Past teaching aids for an IB Mathematics HL class of about twenty students. Includes interactive applets and challenging exercises.",date:"August 2017",image:"hs-teaching-aid.png",url:"/legacy-website/index.html",tags:["teaching","math"]},piano_transcription:{title:"DNN-Based Piano Transcription",description:"Uses deep neural networks to extract note onset times from piano recordings. I was selected to present this research at the 2017 Joint Mathematics Meetings. Made with TensorFlow.",date:"July 2017",image:"piano-transcription-compressed.jpg",url:"https://github.com/wgxli/piano-transcription",tags:["machine-learning","music","tensorflow","python"],social:{github:"https://github.com/wgxli/piano-transcription"}},simpletex:{title:"SimpleTeX Python Library",description:"A simple, hassle-free library for creating LaTeX documents in Python. Features automatic import management, easy global styling, and minimalist syntax. Available on the Python 3 package index.",date:"July 2016",image:"simpletex-compressed.png",url:"https://pypi.org/project/simpletex",tags:["python","latex","package"],social:{github:"https://github.com/wgxli/simpletex"}},toy_raytracer:{title:"Toy Raytracer",description:"A simple raytracer I wrote in C++. Features depth of field, adaptive sampling, and correct treatment of reflective, refractive, and diffuse surfaces (including Fresnel).",date:"August 2015",image:"raytracer-compressed.jpg",url:"https://github.com/wgxli/toy-raytracer",tags:["C++","3D","graphics"],social:{github:"https://github.com/wgxli/toy-raytracer"}}},Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={tags:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderProjects",value:function(e){var t=this;return Object.entries(Q).filter(function(t){var a=Object(v.a)(t,2),n=(a[0],a[1]),i=new Set(n.tags);return e.every(function(e){return i.has(e)})}).map(function(e){var a=Object(v.a)(e,2),n=a[0],r=a[1];return i.a.createElement(R,{key:n,data:r,handleTagClick:t.handleTagClick.bind(t)})})}},{key:"addTag",value:function(e){this.setState(function(t){var a=Object(N.a)(t.tags);return a.indexOf(e)<0&&a.push(e),{tags:a}})}},{key:"deleteTag",value:function(e){this.setState(function(t){return{tags:t.tags.filter(function(t){return t!==e})}})}},{key:"handleTagClick",value:function(e,t){e.stopPropagation(),this.addTag(t)}},{key:"render",value:function(){var e=this.state.tags;return i.a.createElement(A,{title:"Projects"},i.a.createElement(T.Helmet,null,i.a.createElement("title",null,"Samuel J. Li \u2014 About Me")),i.a.createElement(C,{image:"projects"},i.a.createElement("h1",null,"Projects"),i.a.createElement("p",null,"A library of the projects I\u2019ve compiled over the years.")),i.a.createElement("div",{id:"content-container"},i.a.createElement(V,{tags:e,deleteTag:this.deleteTag.bind(this)}),i.a.createElement(I.a,{id:"project-container"},this.renderProjects(e))))}}]),t}(i.a.PureComponent),Z=(a(537),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(A,{title:"About Me"},i.a.createElement(C,{image:"about"},i.a.createElement("h1",null,"About Me"),i.a.createElement("p",null,"Who I am, where I'm at, and where I'm going.")),i.a.createElement("div",{id:"content-container"},i.a.createElement("div",{className:"text-container"},i.a.createElement("p",null,"Hi! I\u2019m Samuel Li, an undergraduate at the University of Toronto. I\u2019m doing a double specialist in mathematics and physics."),i.a.createElement("p",null,"I like to solve problems and learn as broadly as possible. I\u2019ve worked with everything from video production to machine learning to machining to differential geometry, and if there\u2019s one thing I learned, it\u2019s that learning is never wasted. It\u2019s not about the subject, it\u2019s about the ideas. And ideas are cross-domain."),i.a.createElement("p",null,"I first put up this website in July 2018 as a learning project, picking up React in the process. I had been programming for over a decade, but mainly for back-end applications, so I decided to give web development a shot. What you\u2019re seeing is the product of one of my many \u201cdon\u2019t know that yet, might as well try\u201d journeys."),i.a.createElement("p",null,"If I don\u2019t know something, I\u2019ll just learn it \u2014 and by now, I\u2019ve gotten a lot of experience doing that."))))}}]),t}(i.a.PureComponent)),$=[{name:"Projects",path:"/projects/",component:i.a.createElement(Y,null)},{name:"About",path:"/about/",component:i.a.createElement(Z,null)}],ee=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getTabs",value:function(){return Object.fromEntries($.map(function(e){return[e.name,e.path]}))}},{key:"renderRoutes",value:function(){return $.map(function(e){var t=e.path,a=e.component;return i.a.createElement(m.b,{key:t,path:t},a)})}},{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,{theme:f},i.a.createElement(O,{tabs:this.getTabs()}),i.a.createElement(m.d,null,this.renderRoutes(),i.a.createElement(m.b,{path:"/"},i.a.createElement(m.a,{to:"/projects/"})))))}}]),t}(i.a.PureComponent),te=document.getElementById("root");te.hasChildNodes()?Object(r.hydrate)(i.a.createElement(ee,null),te):Object(r.render)(i.a.createElement(ee,null),te)}},[[215,1,2]]]);
//# sourceMappingURL=main.2b68c017.chunk.js.map