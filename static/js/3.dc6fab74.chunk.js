(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{444:function(e,t,n){"use strict";n.r(t);var a=n(472),i=n(0),r=n.n(i),o=n(470),l=n(33),s=n(96),c=(n(478),function(e){var t=e.n,n=e.mobileN,a=e.imageGetter,o=Object(s.a)(Array(t).keys()).map(function(e){var t={display:0===e?"none":"inline-block"},o=a(e),s=Object(l.a)(o,3),c=s[0],u=s[1],m=s[2];return r.a.createElement(i.Fragment,{key:e},r.a.createElement("span",{className:"arrow desktop",style:t},"\u2192"),e<n?r.a.createElement("span",{className:"arrow mobile",style:t},"\u2193"):null,r.a.createElement("img",{key:e,alt:m,src:c,width:Math.round(u),height:Math.round(u),className:e<n?null:"desktop"}))});return r.a.createElement("div",{className:"image-sequence-container"},o)}),u=n(473),m=n.n(u),A=function(e){var t=e.startSize,n=e.n,a=e.mobileN;return r.a.createElement(c,{n:n,mobileN:a,imageGetter:function(e){return[m.a,t/Math.pow(2,e),"Downscaled ".concat(e," times")]}})},h=function(e){var t=e.size,a=e.n,i=e.mobileN,o=e.source,l=e.alt;return r.a.createElement(c,{n:a,mobileN:i,imageGetter:function(e){return[n(479)("./".concat(o,"/").concat(e,".png")),t,l(e)]}})},d=n(475),g=n.n(d),f=n(474),p=n.n(f);n(501);function w(e){var t=e.source,n=e.size,a=e.alt,i=e.label;return r.a.createElement("div",{className:"labelled-image"},r.a.createElement("img",{src:t,width:n,height:n,alt:a,className:"desktop"}),r.a.createElement("img",{src:t,width:.7*n,height:.7*n,alt:a,className:"mobile"}),r.a.createElement("p",{className:"label"},"\\(".concat(i,"\\)")))}var b=function(){return r.a.createElement("div",{className:"convolution-diagram"},r.a.createElement(w,{source:m.a,size:128,alt:"Original",label:"I_0"}),r.a.createElement("p",{className:"operator"},"\\(*\\)"),r.a.createElement(w,{source:g.a,size:50,alt:"Gaussian Kernel",label:"K"}),r.a.createElement("p",{className:"operator"},"\\(=\\)"),r.a.createElement(w,{source:p.a,size:128,alt:"Blurred Once",label:"I_1 = I_0 * K"}))},E=n(502),v=n.n(E),B=n(503),y=n.n(B),x=n(504),C=n.n(x),Q=n(505),I=n.n(Q),K=n(506),Y=n.n(K),M=n(507),F=n.n(M);function O(){var e=Object(a.a)(["(hat{K}')"],["\\(\\hat{K}'\\)"]);return O=function(){return e},e}function k(){var e=Object(a.a)(["[N approx 2 Q^2 log{n},]"],["\\[N \\approx 2 Q^2 \\log{n},\\]"]);return k=function(){return e},e}function q(){var e=Object(a.a)(["[\begin{aligned}\n            mathbb{E}(M) &approx sigma sqrt{-2 log(1 - sqrt[n^2/2]{1/2})} \\\n            &approx sqrt{\frac{2log{n} - log{2} - log{log{2}}}{N}}.\n            end{aligned}]"],["\\[\\begin{aligned}\n            \\mathbb{E}(M) &\\approx \\sigma \\sqrt{-2 \\log(1 - \\sqrt[n^2/2]{1/2})} \\\\\n            &\\approx \\sqrt{\\frac{2\\log{n} - \\log{2} - \\log{\\log{2}}}{N}}.\n            \\end{aligned}\\]"]);return q=function(){return e},e}function z(){var e=Object(a.a)(["(F(x)^{n^2/2} = \frac{1}{2})"],["\\(F(x)^{n^2/2} = \\frac{1}{2}\\)"]);return z=function(){return e},e}function S(){var e=Object(a.a)(["[mathbb{E}(M) = int_0^infty (1 - F(x)^{n^2/2}) , dd{x}.]"],["\\[\\mathbb{E}(M) = \\int_0^\\infty (1 - F(x)^{n^2/2}) \\, \\dd{x}.\\]"]);return S=function(){return e},e}function G(){var e=Object(a.a)(["(F(x) = 1-e^{-x^2 / (2 sigma^2)})"],["\\(F(x) = 1-e^{-x^2 / (2 \\sigma^2)}\\)"]);return G=function(){return e},e}function N(){var e=Object(a.a)(["(M defeq ell^infty(hat{K}'))"],["\\(M \\defeq \\ell^\\infty(\\hat{K}')\\)"]);return N=function(){return e},e}function j(){var e=Object(a.a)(["[abss{hat{K}(u, v)} sim \frac{x}{sigma^2} e^{-x^2/(2 sigma^2)}, quad x geq 0,]"],["\\[\\abss{\\hat{K}(u, v)} \\sim \\frac{x}{\\sigma^2} e^{-x^2/(2 \\sigma^2)}, \\quad x \\geq 0,\\]"]);return j=function(){return e},e}function D(){var e=Object(a.a)(["(abss{hat{K}(u, v)})"],["\\(\\abss{\\hat{K}(u, v)}\\)"]);return D=function(){return e},e}function Z(){var e=Object(a.a)(["(mathrm{Re}(hat{K}(u, v)) sim mathcal{N}(0, 1/(2N)))"],["\\(\\mathrm{Re}(\\hat{K}(u, v)) \\sim \\mathcal{N}(0, 1/(2N))\\)"]);return Z=function(){return e},e}function V(){var e=Object(a.a)(["[\frac{1}{2pi}int_0^{2pi} cos^2{\theta} , dd{\theta} = \frac{1}{2}.]"],["\\[\\frac{1}{2\\pi}\\int_0^{2\\pi} \\cos^2{\\theta} \\, \\dd{\\theta} = \\frac{1}{2}.\\]"]);return V=function(){return e},e}function T(){var e=Object(a.a)(["(hat{e}_{i, j}(u, v))"],["\\(\\hat{e}_{i, j}(u, v)\\)"]);return T=function(){return e},e}function U(){var e=Object(a.a)(["(hat{e}_{i, j}(u, v))"],["\\(\\hat{e}_{i, j}(u, v)\\)"]);return U=function(){return e},e}function W(){var e=Object(a.a)(["(ell^0(K) leq N)"],["\\(\\ell^0(K) \\leq N\\)"]);return W=function(){return e},e}function J(){var e=Object(a.a)(["(Q(K)^{-n})"],["\\(Q(K)^{-n}\\)"]);return J=function(){return e},e}function R(){var e=Object(a.a)(["(hat{I}_n \to hat{I}_infty)"],["\\(\\hat{I}_n \\to \\hat{I}_\\infty\\)"]);return R=function(){return e},e}function L(){var e=Object(a.a)(["[Q(K) defeq \frac{1}{ell^infty(hat{K'})}.]"],["\\[Q(K) \\defeq \\frac{1}{\\ell^\\infty(\\hat{K'})}.\\]"]);return L=function(){return e},e}function P(){var e=Object(a.a)(["(hat{I}_n(0, 0) = hat{I}_infty(0, 0))"],["\\(\\hat{I}_n(0, 0) = \\hat{I}_\\infty(0, 0)\\)"]);return P=function(){return e},e}function H(){var e=Object(a.a)(["(hat{e}_{i, j}(0, 0) = 1)"],["\\(\\hat{e}_{i, j}(0, 0) = 1\\)"]);return H=function(){return e},e}function X(){var e=Object(a.a)(["(e_{i, j})"],["\\(e_{i, j}\\)"]);return X=function(){return e},e}function _(){var e=Object(a.a)(["(hat{e}_{i, j})"],["\\(\\hat{e}_{i, j}\\)"]);return _=function(){return e},e}function $(){var e=Object(a.a)(["(e_{i, j})"],["\\(e_{i, j}\\)"]);return $=function(){return e},e}function ee(){var e=Object(a.a)(["(hat{I}_n \to hat{I}_infty)"],["\\(\\hat{I}_n \\to \\hat{I}_\\infty\\)"]);return ee=function(){return e},e}function te(){var e=Object(a.a)(["(hat{I}_infty)"],["\\(\\hat{I}_\\infty\\)"]);return te=function(){return e},e}function ne(){var e=Object(a.a)(["(hat{I}_infty(0, 0) = hat{I}_0(0, 0))"],["\\(\\hat{I}_\\infty(0, 0) = \\hat{I}_0(0, 0)\\)"]);return ne=function(){return e},e}function ae(){var e=Object(a.a)(["(langle I_0 \rangle)"],["\\(\\langle I_0 \\rangle\\)"]);return ae=function(){return e},e}function ie(){var e=Object(a.a)(["(hat{I}_n = hat{I}_0 cdot hat{K}^n)"],["\\(\\hat{I}_n = \\hat{I}_0 \\cdot \\hat{K}^n\\)"]);return ie=function(){return e},e}function re(){var e=Object(a.a)(["(hat{I}_n = hat{I}_{n-1} cdot hat{K})"],["\\(\\hat{I}_n = \\hat{I}_{n-1} \\cdot \\hat{K}\\)"]);return re=function(){return e},e}var oe=Object(i.lazy)(function(){return Promise.all([n.e(8),n.e(7)]).then(n.bind(null,513))});t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{startSize:150,n:5,mobileN:3}),r.a.createElement("p",null,"This works, but has a few disadvantages:"),r.a.createElement("ul",{className:"bullet-x"},r.a.createElement("li",null,"It\u2019s a pain to deal with images with sidelength not a power of 2. It can be done, but I wouldn\u2019t want to do it.",r.a.createElement(o.c,{id:2})),r.a.createElement("li",null,"Each iteration requires a texture of a different size. Instantiating and swapping around all of these textures (or managing ",r.a.createElement("code",null,"glViewport"),") is a pain."),r.a.createElement("li",null,"Perhaps most importantly, this technique clearly works and is thus mathematically uninteresting.")),r.a.createElement("p",null,"An alternative technique that \u201cresolves\u201d some of these issues is to just blur the image repeatedly until it becomes a solid color, then read an arbitrary pixel."),r.a.createElement(h,{size:100,n:4,mobileN:3,source:"blurred",alt:function(e){return"Blurred ".concat(e," times")}}),r.a.createElement("p",null,"This technique:"),r.a.createElement("ul",{className:"bullet-check"},r.a.createElement("li",null,"Works equally well on images of any size or shape."),r.a.createElement("li",null,"Uses textures of all the same size, so we only need to instantiate two textures and render back and forth between them."),r.a.createElement("li",null,"And, as we\u2019re about to see, is ",r.a.createElement("i",null,"very")," interesting.")),r.a.createElement("p",null,"To obtain an accurate average and avoid edge-effects, we treat the texture as a torus. What the blur operation is really doing, then, is circularly convolving the input image with a Gaussian kernel:"),r.a.createElement(b,{size:128}),r.a.createElement("p",null,"As you may have guessed from the above images, however, repeated Gaussian blurring is ",r.a.createElement("i",null,"really bad")," for this purpose. The issue is that the Gaussian kernel is very local, so information doesn\u2019t spread very fast throughout the image."),r.a.createElement("h2",null,"How to Judge a Kernel"),r.a.createElement("p",null,"Perhaps a kernel that\u2019s more spread out would do better \u2014 indeed, there\u2019s no reason for the kernel to even be contiguous!"),r.a.createElement("p",null,"But first, we need a way to quantify the \u201cquality\u201d of a kernel \\(K\\). Let \\(I_0\\) denote the original image, and let \\(I_n\\) denote the image after convolving with \\(K\\) a total of \\(n\\) times. Then ","\\(I_n = I_{n-1} * K\\)",", and taking the 2D discrete Fourier transform yields ",String.raw(re()),".",r.a.createElement(o.c,{id:3}),"From here, we easily obtain ",String.raw(ie()),"."),r.a.createElement("p",null,"The image \\(I_\\infty\\) we want to eventually converge to has all pixels equal to the average value ",String.raw(ae())," of \\(I_0\\), so that ",String.raw(ne())," is the only non-zero coefficient in ",String.raw(te()),". Intuitively, the \u201cquality\u201d of the kernel \\(K\\) should quantify how quickly the \\(I_n \\to I_\\infty\\), say in \\(\\ell^2\\) norm. By Parseval\u2019s theorem, it is equivalent to study the convergence of ",String.raw(ee())," in \\(\\ell^2\\). To do this, we\u2019ll first need to deduce a bit more about ","\\(\\hat{K}\\)","."),r.a.createElement("p",null,"Let ",String.raw($())," for \\(0 \\leq i, j \\leq N\\) denote the image with value 1 at pixel \\((i, j)\\) and 0 elsewhere. Then every coefficient in ",String.raw(_())," has magnitude 1, by definition.",r.a.createElement(o.c,{id:4}),"If we assume that the kernel \\(K\\) is a convex linear combination of the ",String.raw(X()),",",r.a.createElement(o.c,{id:5})," then every coefficient in its Fourier transform ","\\(\\hat{K}\\)"," is a convex linear combination of norm-1 complex numbers \u2014 and thus has norm at most 1. Thus all components of ","\\(\\hat{I}_n\\)"," either decay exponentially to zero or remain fixed as \\(n \\to \\infty\\)."),r.a.createElement("p",null,"In fact, since all ",String.raw(H()),", we have ","\\(\\hat{K}(0, 0)\\) = 1",", and so all ",String.raw(P()),". Letting \\(K'\\) denote the kernel \\(K\\) with the entry \\((0, 0)\\) set to zero, we finally define the ",r.a.createElement("i",null,"quality")," of \\(K\\) to be"),r.a.createElement("p",{className:"emphasis"},String.raw(L())),r.a.createElement("p",null,"Put simply, we look at the largest coefficient in ","\\(\\hat{K}\\)"," by magnitude, excluding ","\\(\\hat{K}(0, 0)\\)",". Then the rate of convergence of ",String.raw(R())," is on the order of ",String.raw(J()),": our average becomes roughly \\(Q(K)\\) times better on each iteration."),r.a.createElement("p",null,r.a.createElement("i",null,"Sidenote:")," We can now understand precisely why the Gaussian kernel is so bad: the magnitude of the Fourier transform of a Gaussian is a Gaussian, which has a very \u201cflat\u201d peak near \\((0, 0)\\). Thus the Fourier coefficients near \\((0, 0)\\) have magnitudes almost exactly equal to 1."),r.a.createElement("h2",null,"The Search Begins"),r.a.createElement("p",null,"We now have a clearly defined task: find a kernel \\(K\\) of maximal quality \\(Q(K)\\)."),r.a.createElement("p",null,"Clearly, the optimal quality is \\(\\infty\\), when all coefficients of ","\\(\\hat{K}\\)"," other than ","\\(\\hat{K}(0, 0)\\)"," are zero. This corresponds to a filter with equal weight on every pixel of the image, so we converge in one step. End of post!"),r.a.createElement("p",null,"Of course, in practice this would be horrendously slow, even on the GPU. The performance of our fragment shader is related to the number of input pixels we access per output pixel \u2014 i.e., the number of non-zero entries of \\(K\\). So, our task is really:"),r.a.createElement("p",{className:"emphasis"},"Find a kernel \\(K\\) of maximal quality \\(Q(K)\\), subject to ",String.raw(W()),"."),r.a.createElement("p",null,"There\u2019s just one issue: this task is ",r.a.createElement("i",null,"horrendously")," difficult.",r.a.createElement(o.c,{id:6})),r.a.createElement("p",null,"This forces us to turn to brute-force Monte-Carlo methods. The procedure I used is as follows:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Randomly choose \\(N\\) pixels without replacement from the \\(n \\times n\\) input image. These locations represent precisely the non-zero entries of \\(K\\)."),r.a.createElement("li",null,"Given this restriction, maximize \\(Q(K)\\) using the method of your choice. This is an \\(N\\)-dimensional optimization problem where the variables must be non-negative and sum to one.",r.a.createElement(o.c,{id:7})," I used ",r.a.createElement("code",null,"scipy.optimize"),"."),r.a.createElement("li",null,"Repeat.")),r.a.createElement("p",null,"Keeping track of the maximum-quality kernel during this procedure should give a good estimate of the true solution. Here\u2019s some experimental results for a square image of sidelength \\(n =128\\):"),r.a.createElement(o.d,{desktopSource:v.a,mobileSource:y.a,alt:"Experimental results"}),r.a.createElement("p",null,"As expected, the quality increases as the sparsity budget \\(N\\) is increased. For a given \\(N\\), the median kernel quality, in the grand scheme of things, isn\u2019t ",r.a.createElement("i",null,"that")," much worse than that of the best observed candidate."),r.a.createElement("p",null,"So perhaps we don\u2019t need to find the absolute ",r.a.createElement("i",null,"best")," kernel for a given sparsity; using randomly chosen pixel locations yields comparable quality, and we can just increase \\(N\\) by a bit if it\u2019s not good enough."),r.a.createElement("h2",null,"Theoretical Insight"),r.a.createElement("p",null,"How can we understand this result theoretically? The optimization step (Step 2) is quite difficult to think about, so let\u2019s assume that all \\(N\\) randomly chosen pixels end up with equal weights.",r.a.createElement(o.c,{id:8})),r.a.createElement("p",null,"Consider an arbitrary coefficient ","\\(\\hat{K}(u, v)\\)",", excluding \\((u, v) = (0, 0)\\). This coefficient will be the average of ",String.raw(U())," for \\(N\\) randomly chosen pairs \\((i, j)\\). Since ",String.raw(T())," has unit norm and essentially random phase, its real part has a mean of zero and a variance of",String.raw(V()),"Assuming the \\((i, j)\\) are roughly independent and \\(N\\) is relatively large, we have ",String.raw(Z())," by the Central Limit Theorem. The same holds for the imaginary component, so ",String.raw(D())," has the Rayleigh distribution",String.raw(j()),"where \\(\\sigma^2 = 1/(2N)\\)."),r.a.createElement("p",null,"Since the kernel \\(K\\) is real-valued, half of its Fourier coefficients will be redundant, so we may treat ",String.raw(N())," as the maximum of \\(n^2/2\\) independent",r.a.createElement(o.c,{id:9})," Rayleigh-distributed random variables. The CDF of each Rayleigh-distributed variable is ",String.raw(G()),", so the expected value of the maximum is",String.raw(S()),"Assuming \\(N\\) and \\(n^2\\) are both fairly large, the integrand can be well-approximated as a step function that transitions from \\(1\\) to \\(0\\) at the \\(x\\)-value satisfying ",String.raw(z()),". Solving, we obtain"),r.a.createElement("p",{className:"emphasis"},String.raw(q())),r.a.createElement("p",null,"The median quality \\(Q(K)\\) should be roughly the inverse of this. With fingers crossed, we compare the theory to experiment:"),r.a.createElement(o.d,{desktopSource:C.a,mobileSource:I.a,alt:"Comparison of theory and experiment"}),r.a.createElement("p",null,"Not bad, but not great. The actual median \\(Q(K)\\) is a bit higher, presumably due to the optimization step (Step 2) that we overlooked. Indeed, if we disable the optimization step and weight each kernel entry equally, the results match quite closely:"),r.a.createElement(o.d,{desktopSource:Y.a,mobileSource:F.a,alt:"Comparison of theory and experiment, optimization step disabled"}),r.a.createElement("p",null,"Thus we can expect our estimate to provide a reliable lower bound for the optimized median. This is actually great news: even randomly choosing pixels and setting equal weights, to achieve a target quality \\(Q\\), we need only choose a filter with a size of"),r.a.createElement("p",{className:"emphasis"},String.raw(k())),r.a.createElement("p",null,"which grows only logarithmically with the image size! Thus, even for fairly large images, the kernel remains sparse enough for near-constant-time evaluation on the GPU."),r.a.createElement("h2",null,"Demo Time!"),r.a.createElement("p",null,"The example image I\u2019ve been using has sidelength \\(n = 256\\). Aiming for a quality of \\(Q = 4\\), our formula tells us we need to choose a random kernel with \\(N = 178\\) entries. Here\u2019s the results with no kernel optimization (equal weights):",r.a.createElement(o.c,{id:11})),r.a.createElement(h,{size:100,n:4,mobileN:3,source:"unoptimized",alt:function(e){return"random kernel, no optimization, applied ".concat(e," times")}}),r.a.createElement("p",null,"Here\u2019s the results after optimizing the kernel (Step 2 in the procedure described before):"),r.a.createElement(h,{size:100,n:4,mobileN:3,source:"optimized",alt:function(e){return"random kernel, with optimization, applied ".concat(e," times")}}),r.a.createElement("p",null,"Yep. Even with the unoptimized kernel, after two iterations the average is resolved to a resolution of at least \\(256 / Q^2 = 16\\) in each channel, which is barely perceptible. For comparison, the Gaussian kernel I used at the beginning of the post had \\(101 \\times 101 = 10,201\\) entries.",r.a.createElement(o.c,{id:10})),r.a.createElement("p",null,"To achieve the same result with the scaling-based algorithm outlined at the start of the post, you would need to scale down by \\(16 \\times\\) at each step, so each output pixel would need to look at \\(256\\) input pixels. Admittedly, this isn\u2019t a direct comparison, since the scaling method provides an exact solution \u2014 but for many applications, a rapidly converging approximate solution does the job."),r.a.createElement("p",null,"And finally, for fun, a demo that calculates the value of \\(\\pi\\) by averaging an image of a circle! The estimate shown is derived from a ",r.a.createElement("i",null,"single pixel")," in the displayed image.",r.a.createElement(o.c,{id:12})),r.a.createElement(i.Suspense,{fallback:"Loading Demo..."},r.a.createElement(oe,null)),r.a.createElement(o.b,null,r.a.createElement(o.a,{id:1},"Assuming we\u2019re hitting up against the 60 FPS frame cap, this is a reasonable assumption."),r.a.createElement(o.a,{id:2},"Incidentally, the ",r.a.createElement("code",null,"glGenerateMipmap")," function executes essentially this procedure \u2014 and is restricted to power-of-two sidelengths only. WebGL 2 supports non-power-of-two textures, but there\u2019s no guarantee the edge effects will be treated as to give an accurate average..."),r.a.createElement(o.a,{id:3},"Here, we use \\(\\cdot\\) to denote component-wise multiplication."),r.a.createElement(o.a,{id:4},"This also defines the convention we\u2019re using for our Fourier transforms."),r.a.createElement(o.a,{id:5},"This is a reasonable assumption \u2014 the components should sum to one to preserve the average on each iteration. You can convince yourself (fun exercise!) that negative components will lead to exponential blowups in certain situations."),r.a.createElement(o.a,{id:6},"To the best of my knowledge, anyway. If anyone manages to find a reference, I\u2019d ",r.a.createElement("a",{href:"mailto:contact@samuelj.li"},"love to hear about it"),"!"),r.a.createElement(o.a,{id:7},"So really, there are \\(N-1\\) degrees of freedom."),r.a.createElement(o.a,{id:8},"There is some theoretical basis to this assumption \u2014 choosing all weights equal minimizes the \\(\\ell^2\\) norm of \\(K\\), which (by Parseval\u2019s theorem) minimizes the \\(\\ell^2\\) norm of ",String.raw(O()),". The \\(\\ell^2\\) norm is an upper bound for the \\(\\ell^\\infty\\) norm we really care about."),r.a.createElement(o.a,{id:9},"As with many of the assumptions here, this isn\u2019t strictly true, but works well enough."),r.a.createElement(o.a,{id:10},"Since the Gaussian kernel can be factored, this really only needs 2 passes, one horizontal and one vertical, with a kernel of size 101. But even then, the results with the Gaussian are objectively much worse."),r.a.createElement(o.a,{id:11},"For fun, you can try to figure out what kernel I used by downloading the first two images, dividing their 2D discrete Fourier transforms, and taking an inverse DFT. I haven't tried this and have no idea if it will work (since the pixel colors are quantized)."),r.a.createElement(o.a,{id:12},"Through some clever WebGL hacks, I am using all four color channels internally to increase the precision. There also appears to be a bug on mobile (possibly due to low precision?) that causes a small bit of drift in the final average.")))}},470:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return s});var a=n(0),i=n.n(a);n(471);function r(e){var t=e.desktopSource,n=e.mobileSource,a=e.alt;return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:t,className:"desktop",alt:a}),i.a.createElement("img",{src:n,className:"mobile",alt:a}))}function o(e){var t=e.children;return i.a.createElement("section",{className:"footnotes"},i.a.createElement("hr",null),i.a.createElement("h2",null,"Footnotes"),i.a.createElement("ol",null,t))}function l(e){var t=e.children,n=e.id;return i.a.createElement("li",null,i.a.createElement("span",{className:"label"},"[",n,"]"),t,i.a.createElement("a",{className:"reference return",href:"#reference-".concat(n)},"\u21a9"),i.a.createElement("span",{className:"anchor",id:"footnote-".concat(n)}))}function s(e){var t=e.id;return i.a.createElement("a",{className:"reference",href:"#footnote-".concat(t)},i.a.createElement("sup",null,"[",t,"]"),i.a.createElement("span",{className:"anchor",id:"reference-".concat(t)}))}},471:function(e,t,n){},472:function(e,t,n){"use strict";function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",function(){return a})},473:function(e,t,n){e.exports=n.p+"static/media/tux.2710825d.png"},474:function(e,t,n){e.exports=n.p+"static/media/1.91ad5ba6.png"},475:function(e,t){e.exports="data:image/png;base64,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"},478:function(e,t,n){},479:function(e,t,n){var a={"./blurred/0.png":480,"./blurred/1.png":474,"./blurred/2.png":481,"./blurred/3.png":482,"./blurred/4.png":483,"./blurred/5.png":484,"./blurred/6.png":485,"./blurred/7.png":486,"./blurred/8.png":487,"./blurred/9.png":488,"./blurred/kernel.png":475,"./optimized/0.png":489,"./optimized/1.png":490,"./optimized/2.png":491,"./optimized/3.png":492,"./optimized/4.png":493,"./optimized/kernel.png":494,"./tux.png":473,"./unoptimized/0.png":495,"./unoptimized/1.png":496,"./unoptimized/2.png":497,"./unoptimized/3.png":498,"./unoptimized/4.png":499,"./unoptimized/kernel.png":500};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=479},480:function(e,t,n){e.exports=n.p+"static/media/0.44d4b873.png"},481:function(e,t,n){e.exports=n.p+"static/media/2.800fe9c7.png"},482:function(e,t,n){e.exports=n.p+"static/media/3.9343afc8.png"},483:function(e,t,n){e.exports=n.p+"static/media/4.72a352ab.png"},484:function(e,t,n){e.exports=n.p+"static/media/5.ad93b374.png"},485:function(e,t,n){e.exports=n.p+"static/media/6.557c5205.png"},486:function(e,t,n){e.exports=n.p+"static/media/7.613e1ffb.png"},487:function(e,t,n){e.exports=n.p+"static/media/8.5313b58d.png"},488:function(e,t,n){e.exports=n.p+"static/media/9.83b453b0.png"},489:function(e,t,n){e.exports=n.p+"static/media/0.44d4b873.png"},490:function(e,t,n){e.exports=n.p+"static/media/1.8355392b.png"},491:function(e,t,n){e.exports=n.p+"static/media/2.e8b20584.png"},492:function(e,t,n){e.exports=n.p+"static/media/3.e1a2f3a2.png"},493:function(e,t,n){e.exports=n.p+"static/media/4.9de047b0.png"},494:function(e,t){e.exports="data:image/png;base64,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"},495:function(e,t,n){e.exports=n.p+"static/media/0.44d4b873.png"},496:function(e,t,n){e.exports=n.p+"static/media/1.923ff5b0.png"},497:function(e,t,n){e.exports=n.p+"static/media/2.e328c156.png"},498:function(e,t,n){e.exports=n.p+"static/media/3.5a55f317.png"},499:function(e,t,n){e.exports=n.p+"static/media/4.8d7cf948.png"},500:function(e,t){e.exports="data:image/png;base64,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"},501:function(e,t,n){},502:function(e,t,n){e.exports=n.p+"static/media/128.147128ba.svg"},503:function(e,t,n){e.exports=n.p+"static/media/128-mobile.3d0fa057.svg"},504:function(e,t,n){e.exports=n.p+"static/media/128-fit.882f3da2.svg"},505:function(e,t,n){e.exports=n.p+"static/media/128-fit-mobile.c6913a87.svg"},506:function(e,t,n){e.exports=n.p+"static/media/128-raw-fit.5d5376bc.svg"},507:function(e,t,n){e.exports=n.p+"static/media/128-raw-fit-mobile.7f718fff.svg"}}]);
//# sourceMappingURL=3.dc6fab74.chunk.js.map