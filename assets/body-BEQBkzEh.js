import{j as e}from"./index-BTOa301H.js";function a(){return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Let ",String.raw`\(\omega := e^{i\pi/4}\)`,", and parameterize the complex plane via \\(z = r\\omega + s \\, i \\omega\\). Consider the piecewise linear contour travelling from \\(0\\) to \\(r \\omega\\), and then from \\(r \\omega\\) to \\(r \\omega + s \\, i \\omega\\). Using this contour, we compute"]}),String.raw`\[\begin{aligned}
        \frac{\sqrt{\pi}}{2} \, \mathrm{erf}(z) &=
        \int_0^z e^{-x^2} \, \mathrm{d}x \\
        &= \int_0^r e^{-(t\omega)^2} \omega \, \mathrm{d}t
        + \int_0^s e^{-(r \omega + t i \omega)^2} i \omega \, \mathrm{d}t \\
        &= \omega \, [C(r) - i \, S(r)] + i \omega e^{-ir^2} \int_0^s e^{2rt + it^2} \, \mathrm{d}t,
        \end{aligned}\]`,e.jsx("p",{children:"where \\(S(x)\\) and \\(C(x)\\) are the Fresnel integrals. From Wikipedia, we have the asymptotic expansion"}),String.raw`\[C(x) - i \, S(x) = \frac{\sqrt{\pi}}{2} \omega^{-1} - [1 + \mathcal{O}(x^{-4})] \frac{\cos{x^2} - i \sin{x^2}}{2x} \left[\frac{1}{2x^2} - i\right]\]`,e.jsx("p",{children:"for large positive \\(x\\). The second term is more annoying. For large \\(a > 0\\), consider the integral"}),String.raw`\[\begin{aligned}
        I_a(x)  &:= e^{-ax} \int_{-\infty}^x e^{at} e^{it^2} \, \mathrm{d}t \\
        &= a \int_{-\infty}^x \int_x^{\infty} e^{a \, (t-s)} e^{it^2} \, \mathrm{d}s \, \mathrm{d}t.
        \end{aligned}\]`,e.jsx("p",{children:"Making the change of variables \\((u, v) := (a \\, (s-t), \\, x-t)\\), we obtain"}),String.raw`\[I_a(x) = \int_0^\infty e^{-u} \int_0^{u/a} e^{i \, (x-v)^2} \, \mathrm{d}v \, \mathrm{d}u.\]`,e.jsx("p",{children:"The inner integral can be evaluated as a sum of four Fresnel integrals, and is therefore bounded by a constant. Then for large \\(a\\), it is fruitful to perform the Taylor expansion"}),String.raw`\[\begin{aligned}
        \int_0^{u/a} e^{i \, (x-v)^2} \, \mathrm{d}v &= e^{ix^2} \int_0^{u/a} e^{-2ixv + iv^2} \, \mathrm{d}v \\
        &= e^{ix^2} \int_0^{u/a} [1 - 2ixv + iv^2 - 2x^2 v^2 + \mathcal{O}(v^3)] \, \mathrm{d}v \\
        &= e^{ix^2} \left[\frac{u}{a} - \frac{ixu^2}{a^2} + \frac{(i - 2x^2) \, u^3}{3a^3} + \mathcal{O}(a^{-4})\right].
        \end{aligned}\]`,e.jsx("p",{children:"Evaluating the standard gamma integrals, we thus obtain"}),String.raw`\[I_a(x) = e^{-ix^2} \, [a^{-1} - 2ixa^{-2} + (2i-4x^2) \, a^{-3} + \mathcal{O}(a^{-4})].\]`,e.jsxs("p",{children:["We were a bit handwavy with the justification for Fubini. Indeed, the above expansion works well for \\(x>0\\), but fails catastrophically for ",String.raw`\(x < 0\)`,". From the definition of \\(I_a(x)\\), it is evident that small errors in the integral are exponentially amplified for negative \\(x\\). Empirically, however, we find that the approximation"]}),String.raw`\[\begin{aligned}
        \int_0^x e^{at} e^{it^2} \, \mathrm{d}t &= e^{ax} \, I_a(x) - I_a(0) \\
        &\approx e^{ax + ix^2} \, [a^{-1} - 2ixa^{-2} + (2i - 4x^2) \, a^{-3}] - a^{-1} - 2ia^{-3}
        \end{aligned}\]`,e.jsx("p",{children:"works very well, and could probably be derived rigorously with more effort. Combining all the above, we have"}),String.raw`\[\begin{aligned}
        \mathrm{erf}(z) &= \frac{2}{\sqrt{\pi}} \omega [C(r) - i \, S(r)] + \frac{2}{\sqrt{\pi}} i\omega e^{-ir^2} [e^{2rs} I_{2r}(s) - I_{2r}(0)] \\
        &\approx 1 - \frac{2}{\sqrt{\pi}} \frac{\cos{r^2} - i \sin{r^2}}{2r} \left[\frac{1}{2r} - i\right] \\
        &+ \frac{i\omega}{2 \sqrt{\pi}} e^{-ir^2} \left[e^{2rs + is^2} \left(2r^{-1} -2isr^{-2} + (i + 2s^2) \, r^{-3}\right) -2r^{-1} - ir^{-3}\right],
        \end{aligned}\]`,e.jsxs("p",{children:["which is the implementation I use in my ",e.jsx("a",{href:"/complex-function-plotter",children:"complex function plotter"}),". (I go up to fourth order in the app.)"]})]})}export{a as default};
//# sourceMappingURL=body-BEQBkzEh.js.map
