(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t,a){},207:function(e,t,a){e.exports=a.p+"static/media/down-arrow.da3d1537.svg"},208:function(e,t,a){e.exports=a.p+"static/media/toronto-blurred.063c2e83.jpg"},209:function(e,t,a){e.exports=a.p+"static/media/banner-image-compressed.4aa58350.jpg"},215:function(e,t,a){e.exports=a(561)},422:function(e,t,a){},423:function(e,t,a){},495:function(e,t,a){},496:function(e,t,a){e.exports=a.p+"static/media/github.62367fef.svg"},497:function(e,t,a){e.exports=a.p+"static/media/linkedin.02b94020.svg"},541:function(e,t,a){},542:function(e,t,a){},543:function(e,t,a){},544:function(e,t,a){},552:function(e,t,a){},553:function(e,t,a){e.exports=a.p+"static/media/hopf-fibration-compressed.f9e319df.jpg"},554:function(e,t,a){e.exports=a.p+"static/media/complex-function-plotter-compressed.2f708490.jpg"},555:function(e,t,a){e.exports=a.p+"static/media/quantum-simulator-compressed.adda1f0b.png"},556:function(e,t,a){e.exports=a.p+"static/media/latex-scratchpad.a55362c6.png"},557:function(e,t,a){e.exports=a.p+"static/media/hs-teaching-aid.160eaf35.png"},558:function(e,t,a){e.exports=a.p+"static/media/piano-transcription-compressed.53d8263b.jpg"},559:function(e,t,a){e.exports=a.p+"static/media/simpletex-compressed.6505ef76.png"},560:function(e,t,a){e.exports=a.p+"static/media/raytracer-compressed.f0c02b16.jpg"},561:function(e,t,a){"use strict";a.r(t);a(216);var n=a(0),i=a.n(n),r=a(48),o=(a(422),a(18)),c=a(19),s=a(21),l=a(20),u=a(22),d=(a(423),a(139)),p=a.n(d),h=a(97),m=a(140),g=Object(h.createMuiTheme)({palette:{primary:m.blue,secondary:m.blue}}),f=a(75),b=a(205),v=a.n(b),y=a(206),j=a.n(y),E=a(141),w=a.n(E),k=a(203),x=a.n(k),O=a(204),T=a.n(O),C=(a(495),{github:{icon:a(496),url:"https://github.com/wgxli"},linkedin:{icon:a(497),url:"https://www.linkedin.com/in/samuelj-li"}}),I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderTabs",value:function(){return this.props.tabs.map(function(e){return i.a.createElement(x.a,{key:e.id,label:e.label})})}},{key:"handleTabChange",value:function(e,t){var a=this.props.tabs[t];window.history.pushState(a.id,"","./"+a.id),this.props.onTabChange(t)}},{key:"renderSocialButtons",value:function(){for(var e=[],t=Object.entries(C),a=0;a<t.length;a++){var n=t[a],r=Object(f.a)(n,2),o=r[0],c=r[1];e.push(i.a.createElement("a",{key:o,href:c.url},i.a.createElement(T.a,{className:"social-button"},i.a.createElement("img",{className:"social-icon",src:c.icon,alt:o+" social media icon"}))))}return e}},{key:"render",value:function(){var e=this,t=i.a.createElement("div",{id:"main-logo-container"},i.a.createElement("a",{href:"/",id:"main-logo"},"Samuel J. Li")),a=i.a.createElement("div",{id:"social-buttons"},this.renderSocialButtons());return i.a.createElement(v.a,{id:"navigation-bar"},i.a.createElement(j.a,null,t,i.a.createElement("div",{className:"desktop navigation-tabs"},i.a.createElement(w.a,{value:this.props.tabIndex,onChange:function(t,a){return e.handleTabChange(t,a)}},this.renderTabs())),a),i.a.createElement("div",{className:"mobile navigation-tabs"},i.a.createElement(w.a,{value:this.props.tabIndex,onChange:function(t,a){return e.handleTabChange(t,a)},fullWidth:!0},this.renderTabs())))}}]),t}(i.a.PureComponent),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"page-base"},this.props.children)}}]),t}(i.a.PureComponent),P=(a(541),a(207)),S=a.n(P),A=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"banner-container"},i.a.createElement("div",{className:"banner-background",style:{backgroundImage:"url(".concat(this.props.image,")")}}),i.a.createElement("div",{className:"banner-overlay"},i.a.createElement("span",{className:"banner-text"},this.props.children),i.a.createElement("img",{className:"down-arrow",src:S.a,alt:"Down Arrow"})))}}]),t}(i.a.PureComponent),M=a(208),J=a.n(M),L=(a(201),a(542),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"page-container"},i.a.createElement(A,{image:J.a},i.a.createElement("h1",null,"About Me"),i.a.createElement("p",null,"Who I am, where I'm at, and where I'm going.")),i.a.createElement("div",{id:"content-container"},i.a.createElement("div",{className:"text-container"},i.a.createElement("p",null,"Hi! I\u2019m Samuel Li, an undergraduate at the University of Toronto. I\u2019m doing a double specialist in mathematics and physics."),i.a.createElement("p",null,"I like to solve problems and learn as broadly as possible. I\u2019ve worked with everything from video production to machine learning to machining to differential geometry, and if there\u2019s one thing I learned, it\u2019s that learning is never wasted. It\u2019s not about the subject, it\u2019s about the ideas. And ideas are cross-domain."),i.a.createElement("p",null,"I first put up this website in July 2018 as a learning project, picking up React in the process. I had been programming for over a decade, but mainly for back-end applications, so I decided to give web development a shot. What you\u2019re seeing is the product of one of my many \u201cdon\u2019t know that yet, might as well try\u201d journeys."),i.a.createElement("p",null,"If I don\u2019t know something, I\u2019ll just learn it \u2014 and by now, I\u2019ve gotten a lot of experience doing that."))))}}]),t}(i.a.PureComponent)),_=a(214),F=a(213),H=a(209),B=a.n(H),W=(a(543),a(211)),q=a.n(W),D=a(210),z=a.n(D),X=a(212),R=a.n(X),K=a(99),U=a.n(K),G=a(98),Q=a.n(G),V=(a(544),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).data=a.props.data,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){window.location.href=this.data.url}},{key:"renderImage",value:function(){return i.a.createElement("a",{href:this.data.url},i.a.createElement(z.a,{className:"project-image",image:this.data.image}))}},{key:"renderHeader",value:function(){return i.a.createElement("div",{className:"project-header"},i.a.createElement(U.a,{className:"project-title",variant:"title",noWrap:!0},this.data.title),i.a.createElement(U.a,{className:"project-date",variant:"caption",style:{marginTop:3,marginLeft:10}},this.data.date))}},{key:"renderTags",value:function(){var e=this;return this.data.tags.map(function(t){return i.a.createElement(Q.a,{key:t,label:t,className:"project-tag",onClick:function(a){return e.props.handleTagClick(a,t)}})})}},{key:"render",value:function(){var e=this;return i.a.createElement(q.a,{className:"project-card"},this.renderImage(),i.a.createElement(R.a,{className:"project-info-container",onClick:function(){return e.handleClick()}},i.a.createElement("div",{className:"project-info"},this.renderHeader(),i.a.createElement("p",null,this.data.description)),i.a.createElement("div",{className:"project-tags"},i.a.createElement(U.a,{style:{display:"inline"},variant:"caption"},"Tags:"),this.renderTags())))}}]),t}(i.a.PureComponent)),Y=a(142),Z=a(96),$=a.n(Z),ee=(a(552),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.tags.length>0?i.a.createElement($.a,{key:"tag-filter",className:[t.root,"tag-filter"].join(" ")},i.a.createElement("p",null,"Filter Tags:"),i.a.createElement("div",null,i.a.createElement(Y.b,{flipKey:this.props.tags.join(" ")},this.props.tags.map(function(a){return i.a.createElement(Y.a,{flipId:a},i.a.createElement(Q.a,{key:a,label:a,onDelete:function(){return e.props.deleteTag(a)},className:t.chip}))})))):null}}]),t}(i.a.PureComponent)),te=Object(h.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",padding:e.spacing.unit/2},chip:{margin:e.spacing.unit/2}}})(ee),ae={hopf_fibration:{title:"Hopf Fibration Visualization",description:"An interactive visualization of the Hopf fibration, stereographically projected into 3-space. Made with three.js.",date:"March 2019",image:a(553),url:"https://wgxli.github.io/hopf-fibration/",tags:["math","webgl","three.js"]},complex_function_plotter:{title:"Complex Function Plotter",description:"An interactive domain coloring plotter for visualizing complex functions. Highly responsive visualization of functions parameterized by an arbitrary number of variables. Made with React and WebGL.",date:"July 2018",image:a(554),url:"https://wgxli.github.io/complex-function-plotter/",tags:["math","react","webgl"]},quantum_simulator:{title:"Quantum Simulator",description:"An interactive simulation of the one-dimensional time-dependent Schr\xf6dinger equation. Features stable time acceleration, views in different eigenbases, and simulated measurement. Made with Python 3.",date:"July 2018",image:a(555),url:"https://github.com/wgxli/quantum-simulator",tags:["python","simulation","physics"]},latex_scratchpad:{title:"LaTeX Scratchpad",description:"Minimalist, highly responsive equation editor for quick-and-dirty scratch work. Made with the KaTeX library.",date:"December 2017",image:a(556),url:"https://wgxli.github.io/legacy-website/pages/latex-scratchpad/scratchpad.html",tags:["latex","math"]},hs_teaching_aids:{title:"High-School Teaching Aids",description:"Past teaching aids for an IB Mathematics HL class of about twenty students. Includes interactive applets and challenging exercises.",date:"August 2017",image:a(557),url:"https://wgxli.github.io/legacy-website/index.html",tags:["teaching","math"]},piano_transcription:{title:"DNN-Based Piano Transcription",description:"Uses deep neural networks to extract note onset times from piano recordings. I was selected to present this research at the 2017 Joint Mathematics Meetings. Made with TensorFlow.",date:"July 2017",image:a(558),url:"https://github.com/wgxli/piano-transcription",tags:["machine-learning","music","tensorflow","python"]},simpletex:{title:"SimpleTeX Python Library",description:"A simple, hassle-free library for creating LaTeX documents in Python. Features automatic import management, easy global styling, and minimalist syntax. Available on the Python 3 package index.",date:"July 2016",image:a(559),url:"https://pypi.org/project/simpletex",tags:["python","latex","package"]},toy_raytracer:{title:"Toy Raytracer",description:"A simple raytracer I wrote in C++. Features depth of field, adaptive sampling, and correct treatment of reflective, refractive, and diffuse surfaces (including Fresnel).",date:"August 2015",image:a(560),url:"https://github.com/wgxli/toy-raytracer",tags:["C++","3D","graphics"]}},ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={tags:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderProjects",value:function(e){var t=this;return Object.entries(ae).filter(function(t){var a=Object(f.a)(t,2),n=(a[0],a[1]),i=new Set(n.tags);return e.every(function(e){return i.has(e)})}).map(function(e){var a=Object(f.a)(e,2),n=a[0],r=a[1];return i.a.createElement(V,{key:n,data:r,handleTagClick:t.handleTagClick.bind(t)})})}},{key:"addTag",value:function(e){this.setState(function(t){var a=Object(_.a)(t.tags);return a.indexOf(e)<0&&a.push(e),{tags:a}})}},{key:"deleteTag",value:function(e){this.setState(function(t){return{tags:t.tags.filter(function(t){return t!==e})}})}},{key:"handleTagClick",value:function(e,t){e.stopPropagation(),this.addTag(t)}},{key:"render",value:function(){var e=this.state.tags;return i.a.createElement("div",{id:"page-container"},i.a.createElement(A,{image:B.a},i.a.createElement("h1",null,"Projects"),i.a.createElement("p",null,"A library of the small projects I\u2019ve compiled over the years.")),i.a.createElement("div",{id:"content-container"},i.a.createElement(te,{tags:e,deleteTag:this.deleteTag.bind(this)}),i.a.createElement(F.a,{id:"project-container"},this.renderProjects(e))))}}]),t}(i.a.PureComponent),ie={projects:{title:"Projects",content:i.a.createElement(ne,null)},about:{title:"About",content:i.a.createElement(L,null)}},re=["projects","about"],oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={tabIndex:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handlePageChange(),window.addEventListener("popstate",this.handlePageChange.bind(this))}},{key:"handlePageChange",value:function(){var e=window.location.pathname.slice(1);if(""!==e){e.endsWith(".html")&&(e=e.slice(0,e.length-5));var t=re.indexOf(e);-1!==t&&this.state.tabIndex!==t&&this.handleTabChange(t)}else this.handleTabChange(re.indexOf("projects"))}},{key:"handleTabChange",value:function(e){this.setState({tabIndex:e}),document.title="Samuel J. Li \u2014 "+ie[re[e]].title}},{key:"renderNavigationBar",value:function(){var e=this,t=re.map(function(e){return{id:e,label:ie[e].title}});return i.a.createElement(I,{tabs:t,tabIndex:this.state.tabIndex,onTabChange:function(t){return e.handleTabChange(t)}})}},{key:"renderPage",value:function(e){return i.a.createElement(N,{key:e},ie[e].content)}},{key:"render",value:function(){return i.a.createElement(p.a,{theme:g},this.renderNavigationBar(),this.renderPage(re[this.state.tabIndex]))}}]),t}(i.a.PureComponent),ce=document.getElementById("root");ce.hasChildNodes()?Object(r.hydrate)(i.a.createElement(oe,null),ce):Object(r.render)(i.a.createElement(oe,null),ce)}},[[215,1,2]]]);
//# sourceMappingURL=main.41baa7c5.chunk.js.map