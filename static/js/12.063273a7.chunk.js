(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{452:function(e,a,t){"use strict";t.r(a);var r=t(479),n=t(0),i=t.n(n);function o(){var e=Object(r.a)(["[\begin{aligned}\n        mathrm{erf}(z) &= \frac{2}{sqrt{pi}} omega [C(r) - i , S(r)] + \frac{2}{sqrt{pi}} iomega e^{-ir^2} [e^{2rs} I_{2r}(s) - I_{2r}(0)] \\\n        &approx 1 - \frac{2}{sqrt{pi}} \frac{cos{r^2} - i sin{r^2}}{2r} left[\frac{1}{2r} - i\right] \\\n        &+ \frac{iomega}{2 sqrt{pi}} e^{-ir^2} left[e^{2rs + is^2} left(2r^{-1} -2isr^{-2} + (i + 2s^2) , r^{-3}\right) -2r^{-1} - ir^{-3}\right],\n        end{aligned}]"],["\\[\\begin{aligned}\n        \\mathrm{erf}(z) &= \\frac{2}{\\sqrt{\\pi}} \\omega [C(r) - i \\, S(r)] + \\frac{2}{\\sqrt{\\pi}} i\\omega e^{-ir^2} [e^{2rs} I_{2r}(s) - I_{2r}(0)] \\\\\n        &\\approx 1 - \\frac{2}{\\sqrt{\\pi}} \\frac{\\cos{r^2} - i \\sin{r^2}}{2r} \\left[\\frac{1}{2r} - i\\right] \\\\\n        &+ \\frac{i\\omega}{2 \\sqrt{\\pi}} e^{-ir^2} \\left[e^{2rs + is^2} \\left(2r^{-1} -2isr^{-2} + (i + 2s^2) \\, r^{-3}\\right) -2r^{-1} - ir^{-3}\\right],\n        \\end{aligned}\\]"]);return o=function(){return e},e}function m(){var e=Object(r.a)(["[\begin{aligned}\n        int_0^x e^{at} e^{it^2} , mathrm{d}t &= e^{ax} , I_a(x) - I_a(0) \\\n        &approx e^{ax + ix^2} , [a^{-1} - 2ixa^{-2} + (2i - 4x^2) , a^{-3}] - a^{-1} - 2ia^{-3}\n        end{aligned}]"],["\\[\\begin{aligned}\n        \\int_0^x e^{at} e^{it^2} \\, \\mathrm{d}t &= e^{ax} \\, I_a(x) - I_a(0) \\\\\n        &\\approx e^{ax + ix^2} \\, [a^{-1} - 2ixa^{-2} + (2i - 4x^2) \\, a^{-3}] - a^{-1} - 2ia^{-3}\n        \\end{aligned}\\]"]);return m=function(){return e},e}function l(){var e=Object(r.a)(["(x < 0)"],["\\(x < 0\\)"]);return l=function(){return e},e}function c(){var e=Object(r.a)(["[I_a(x) = e^{-ix^2} , [a^{-1} - 2ixa^{-2} + (2i-4x^2) , a^{-3} + mathcal{O}(a^{-4})].]"],["\\[I_a(x) = e^{-ix^2} \\, [a^{-1} - 2ixa^{-2} + (2i-4x^2) \\, a^{-3} + \\mathcal{O}(a^{-4})].\\]"]);return c=function(){return e},e}function f(){var e=Object(r.a)(["[\begin{aligned}\n        int_0^{u/a} e^{i , (x-v)^2} , mathrm{d}v &= e^{ix^2} int_0^{u/a} e^{-2ixv + iv^2} , mathrm{d}v \\\n        &= e^{ix^2} int_0^{u/a} [1 - 2ixv + iv^2 - 2x^2 v^2 + mathcal{O}(v^3)] , mathrm{d}v \\\n        &= e^{ix^2} left[\frac{u}{a} - \frac{ixu^2}{a^2} + \frac{(i - 2x^2) , u^3}{3a^3} + mathcal{O}(a^{-4})\right].\n        end{aligned}]"],["\\[\\begin{aligned}\n        \\int_0^{u/a} e^{i \\, (x-v)^2} \\, \\mathrm{d}v &= e^{ix^2} \\int_0^{u/a} e^{-2ixv + iv^2} \\, \\mathrm{d}v \\\\\n        &= e^{ix^2} \\int_0^{u/a} [1 - 2ixv + iv^2 - 2x^2 v^2 + \\mathcal{O}(v^3)] \\, \\mathrm{d}v \\\\\n        &= e^{ix^2} \\left[\\frac{u}{a} - \\frac{ixu^2}{a^2} + \\frac{(i - 2x^2) \\, u^3}{3a^3} + \\mathcal{O}(a^{-4})\\right].\n        \\end{aligned}\\]"]);return f=function(){return e},e}function u(){var e=Object(r.a)(["[I_a(x) = int_0^infty e^{-u} int_0^{u/a} e^{i , (x-v)^2} , mathrm{d}v , mathrm{d}u.]"],["\\[I_a(x) = \\int_0^\\infty e^{-u} \\int_0^{u/a} e^{i \\, (x-v)^2} \\, \\mathrm{d}v \\, \\mathrm{d}u.\\]"]);return u=function(){return e},e}function g(){var e=Object(r.a)(["[\begin{aligned}\n        I_a(x)  &:= e^{-ax} int_{-infty}^x e^{at} e^{it^2} , mathrm{d}t \\\n        &= a int_{-infty}^x int_x^{infty} e^{a , (t-s)} e^{it^2} , mathrm{d}s , mathrm{d}t.\n        end{aligned}]"],["\\[\\begin{aligned}\n        I_a(x)  &:= e^{-ax} \\int_{-\\infty}^x e^{at} e^{it^2} \\, \\mathrm{d}t \\\\\n        &= a \\int_{-\\infty}^x \\int_x^{\\infty} e^{a \\, (t-s)} e^{it^2} \\, \\mathrm{d}s \\, \\mathrm{d}t.\n        \\end{aligned}\\]"]);return g=function(){return e},e}function x(){var e=Object(r.a)(["[C(x) - i , S(x) = \frac{sqrt{pi}}{2} omega^{-1} - [1 + mathcal{O}(x^{-4})] \frac{cos{x^2} - i sin{x^2}}{2x} left[\frac{1}{2x^2} - i\right]]"],["\\[C(x) - i \\, S(x) = \\frac{\\sqrt{\\pi}}{2} \\omega^{-1} - [1 + \\mathcal{O}(x^{-4})] \\frac{\\cos{x^2} - i \\sin{x^2}}{2x} \\left[\\frac{1}{2x^2} - i\\right]\\]"]);return x=function(){return e},e}function s(){var e=Object(r.a)(["[\begin{aligned}\n        \frac{sqrt{pi}}{2} , mathrm{erf}(z) &=\n        int_0^z e^{-x^2} , mathrm{d}x \\\n        &= int_0^r e^{-(tomega)^2} omega , mathrm{d}t\n        + int_0^s e^{-(r omega + t i omega)^2} i omega , mathrm{d}t \\\n        &= omega , [C(r) - i , S(r)] + i omega e^{-ir^2} int_0^s e^{2rt + it^2} , mathrm{d}t,\n        end{aligned}]"],["\\[\\begin{aligned}\n        \\frac{\\sqrt{\\pi}}{2} \\, \\mathrm{erf}(z) &=\n        \\int_0^z e^{-x^2} \\, \\mathrm{d}x \\\\\n        &= \\int_0^r e^{-(t\\omega)^2} \\omega \\, \\mathrm{d}t\n        + \\int_0^s e^{-(r \\omega + t i \\omega)^2} i \\omega \\, \\mathrm{d}t \\\\\n        &= \\omega \\, [C(r) - i \\, S(r)] + i \\omega e^{-ir^2} \\int_0^s e^{2rt + it^2} \\, \\mathrm{d}t,\n        \\end{aligned}\\]"]);return s=function(){return e},e}function h(){var e=Object(r.a)(["(omega := e^{ipi/4})"],["\\(\\omega := e^{i\\pi/4}\\)"]);return h=function(){return e},e}a.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Let ",String.raw(h()),", and parameterize the complex plane via \\(z = r\\omega + s \\, i \\omega\\). Consider the piecewise linear contour travelling from \\(0\\) to \\(r \\omega\\), and then from \\(r \\omega\\) to \\(r \\omega + s \\, i \\omega\\). Using this contour, we compute"),String.raw(s()),i.a.createElement("p",null,"where \\(S(x)\\) and \\(C(x)\\) are the Fresnel integrals. From Wikipedia, we have the asymptotic expansion"),String.raw(x()),i.a.createElement("p",null,"for large positive \\(x\\). The second term is more annoying. For large \\(a > 0\\), consider the integral"),String.raw(g()),i.a.createElement("p",null,"Making the change of variables \\((u, v) := (a \\, (s-t), \\, x-t)\\), we obtain"),String.raw(u()),i.a.createElement("p",null,"The inner integral can be evaluated as a sum of four Fresnel integrals, and is therefore bounded by a constant. Then for large \\(a\\), it is fruitful to perform the Taylor expansion"),String.raw(f()),i.a.createElement("p",null,"Evaluating the standard gamma integrals, we thus obtain"),String.raw(c()),i.a.createElement("p",null,"We were a bit handwavy with the justification for Fubini. Indeed, the above expansion works well for \\(x>0\\), but fails catastrophically for ",String.raw(l()),". From the definition of \\(I_a(x)\\), it is evident that small errors in the integral are exponentially amplified for negative \\(x\\). Empirically, however, we find that the approximation"),String.raw(m()),i.a.createElement("p",null,"works very well, and could probably be derived rigorously with more effort. Combining all the above, we have"),String.raw(o()),i.a.createElement("p",null,"which is the implementation I use in my ",i.a.createElement("a",{href:"/complex-function-plotter"},"complex function plotter"),". (I go up to fourth order in the app.)"))}},479:function(e,a,t){"use strict";function r(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}t.d(a,"a",function(){return r})}}]);
//# sourceMappingURL=12.063273a7.chunk.js.map