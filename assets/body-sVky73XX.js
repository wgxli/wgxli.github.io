import{j as a}from"./index-DFQelQQ0.js";const n=String.raw`\(\mathbb{R}\)`,i=String.raw`\(\mathbb{Q}\)`,e=String.raw`\(\mathbb{Q}_p\)`,t=String.raw`\(\mathbb{Q}_\infty\)`;function s(){return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["By ",a.jsx("a",{href:"https://en.wikipedia.org/wiki/Ostrowski%27s_theorem",children:"Ostrowski's theorem"}),", the only possible absolute values on ",i," are the usual absolute value \\(|\\cdot| = |\\cdot|_\\infty\\) and the \\(p\\)-adic absolute value \\(|\\cdot|_p\\). The completion of ",i," with respect to these absolute values give the real numbers ",String.raw`\(\mathbb{R} = \mathbb{Q}_\infty\)`," and the \\(p\\)-adic rationals ",e,", respectively."]}),a.jsxs("p",{children:["One performs Fourier analysis over ",n," by executing a change of basis to the eigenfunctions ",String.raw`\(\chi_{u, \infty} \defeq \mathrm{exp}(2\pi iux)\)`," of the translation group ",String.raw`\(\mathbb{R}/\mathbb{Z}\)`,". Here the frequency \\(u\\) takes values in ",t,". An analogous basis exists for the \\(p\\)-adics; we may take ",String.raw`\(\chi_{u, p} \defeq \mathrm{exp}(2\pi i [ux]_p)\)`,", where ",String.raw`\(u \in \mathbb{Q}_p\)`," and \\([ux]_p\\) denotes the “fractional part.”"]}),a.jsx("p",{children:"In either case, we may define the Fourier transform"}),String.raw`\[\mathcal{F}_v f(u) \defeq \int_{\mathbb{Q}_v} f(x) \, \chi_{u, v}(x) \, \dd{x}_v.\]`,a.jsxs("p",{children:["It is natural to ask about the ",String.raw`\(\mathcal{F}\)`,"-invariant functions. In the case of ",t,", the answer is the familiar Gaussian ",String.raw`\(\mathrm{exp}(-\pi x^2)\)`,". For ",e,", a possible solution is the closed ball"]}),String.raw`\[\gamma_p(x) \defeq \begin{cases}
        1, &|x|_p \leq 1, \\
        0, &|x|_p > 1
        \end{cases}\]`,a.jsx("p",{children:"of radius 1. Indeed, we may write out"}),String.raw`\[\begin{aligned}
        \mathcal{F}_p \gamma_p(u)
        &= \int_{\mathbb{Q}_p} \mathbf{1}_{|x|_p \leq 1} \mathrm{exp}(2\pi i [ux]_p) \dd{x}_p \\
        &= \int_{\mathbb{Z}_p} \mathrm{exp}(2\pi i [ux]_p) \dd{x}_p.
        \end{aligned}\]`,a.jsxs("p",{children:["Here the measure ",String.raw`\(\dd{x}_p\)`," satisfies"]}),String.raw`\[\dd{x}_p(a + p^n \mathbb{Z}_p) = p^{-n}\]`,a.jsxs("p",{children:["for integers \\(a\\) and \\(n \\geq 0\\). If \\(|u|_p \\leq 1\\), then all ",String.raw`\(ux \in \mathbb{Z}_p\)`,", so the integral reduces to"]}),String.raw`\[\begin{aligned}
        \int_{\mathbb{Z}_p} \dd{x}_p
        &= \dd{x}_p(\mathbb{Z}_p) \\
        &= 1 \\
        &= \gamma_p(u),
        \end{aligned}\]`,a.jsx("p",{children:"as claimed. If \\(|u|_p = p^k > 1\\), then the integral becomes"}),String.raw`\[\begin{aligned}
        &\sum_{a=0}^{p^k} \int_{a + p^k \mathbb{Z}_p} \mathrm{exp}(2\pi i [ux]_p) \dd{x}_p \\
        &= \sum_{a=0}^{p^k}  \mathrm{exp}(2\pi i [ua]_p) \, \dd{x}_p(a + p^k \mathbb{Z}_p) \\
        &= p^{-k} \sum_{a=0}^{p^k}  \mathrm{exp}(2\pi i a/p^k) \\
        &= 0 \\
        &= \gamma_p(u),
        \end{aligned}\]`,a.jsx("p",{children:"again as claimed, where the second equality involves reshuffling the values of \\([ua]_p\\)."}),a.jsx("p",{children:"Now define the function"}),String.raw`\[\zeta_v(s) \defeq \int_{\mathbb{Q}_v} \gamma_v(x) \, |x|_v^s \dd{x}^*_v,\]`,a.jsxs("p",{children:["where we now use the ",a.jsx("i",{children:"multiplicatively-invariant"})," normalized Haar measure"]}),String.raw`\[\dd{x}_\infty^* \defeq \frac{\dd{x}_\infty}{\abs{x}_\infty} \qquad \mathrm{and} \qquad \dd{x}_p^* \defeq \frac{p}{p-1} \frac{\dd{x}_p}{\abs{x}_p},\]`,a.jsxs("p",{children:["since the main object of integration \\(|x|_p^s\\) transforms multiplicatively (i.e. \\(|x|_p^s |y|_p^s = |xy|_p^s\\)). For the case of ",t,", we straightforwardly obtain the result"]}),String.raw`\[\begin{aligned}
        \int_{\mathbb{R}} e^{-\pi x^2} |x|^s \dd{x}_\infty^*
        &= 2 \int_0^\infty e^{-\pi x^2} x^{s-1} \dd{x} \\
        &= \pi^{-s/2} \Gamma(s/2).
        \end{aligned}\]`,"For the case of ",e,", we obtain",String.raw`\[\begin{aligned}
        &\int_{\mathbb{Q}_p} \mathbb{1}_{|x|_p \leq 1} |x|_p^s \dd{x}_p^* \\
        &= \frac{p}{p-1} \int_{\mathbb{Z}_p} |x|_p^{s-1} \dd{x}_p \\
        &= \frac{p}{p-1} \sum_{n=0}^\infty \int_{|x|_p = p^{-n}} |x|_p^{s-1} \dd{x}_p \\
        &= \frac{p}{p-1} \sum_{n=0}^\infty (p^{1-s})^n \dd{x}_p(p^n \mathbb{Z}_p - p^{n+1} \mathbb{Z}_p) \\
        &= \frac{p}{p-1} \sum_{n=0}^\infty (p^{1-s})^n  \, \frac{p-1}{p^{n+1}} \\
        &= \frac{1}{1-p^{-s}},
        \end{aligned}\]`,a.jsx("p",{children:"where we have evaluated"}),String.raw`\[\begin{aligned}
        &\dd{x}_p(p^n \mathbb{Z}_p - p^{n+1} \mathbb{Z}_p) \\
        &= \sum_{a=1}^{p-1} \dd{x}_p(a p^n + p^{n+1} \mathbb{Z}_p) \\
        &= \frac{p-1}{p^{n+1}}.
        \end{aligned}\]`,a.jsxs("p",{children:["It is then natural to combine all the ",String.raw`\(\zeta_v\)`," to obtain an ",a.jsx("i",{children:"adelic"})," zeta function"]}),String.raw`\[\zeta_{\mathbb{A}}(s) \defeq \prod_v \zeta_v(s) = \pi^{-s/2} \, \Gamma(s/2) \, \zeta(s),\]`,a.jsxs("p",{children:["which obeys the simple functional equation ",String.raw`\(\zeta_{\mathbb{A}}(s) = \zeta_{\mathbb{A}}(1-s)\)`,"."]})]})}export{s as default};
//# sourceMappingURL=body-sVky73XX.js.map
