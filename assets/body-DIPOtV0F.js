import{j as t}from"./index-BTOa301H.js";import{a as e,F as s,b as i}from"./util-BhAw9G53.js";function r(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"A bit silly, you might say. What if we restrict ourselves to symmetric (even) potential functions?"}),t.jsx("p",{children:"As intuition suggests, it turns out that the SHO is indeed the unique symmetric constant-period oscillator. We will denote the potential by \\(U(x)\\), and make the following assumptions:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"As discussed, we assume \\(U(x) = U(-x)\\)."}),t.jsx("li",{children:"For simplicity, we set \\(U(0) = 0\\)."}),t.jsx("li",{children:"Since we are doing physics, we assume that \\(U(x)\\) is differentiable."}),t.jsxs("li",{children:["To avoid the particle getting stuck, we will assume that \\(U(x)\\) is strictly increasing on \\(x > 0\\).",t.jsx(e,{id:1})]})]}),"In what follows, we assume \\(x > 0\\). Suppose we launch the particle rightwards at time \\(t = 0\\) with kinetic energy \\(E\\). By time-symmetry, the particle must come to rest at time \\(t = T/4\\), where \\(T\\) is the period of the oscillator. Thus",String.raw`\[
        \begin{aligned}
            T &= 4 \int_0^{T/4} \dd{t} \\
            &= 4 \int_0^E \frac{\dd{t}}{\dd{x}} \frac{\dd{x}}{\dd{U}} \, \dd{U} \\
            &= 4 \int_0^E \frac{\dd{U}}{v \, U'(x)},
        \end{aligned}
        \]`,"where \\(v\\) is the velocity of the particle. Since ","\\(E - U = \\frac{1}{2} m v^2\\)"," is the kinetic energy of the particle, we have",String.raw`\[
        \begin{aligned}
            T &\propto \int_0^E \frac{\dd{U}}{U'(U) \, \sqrt{E - U}} \\
            &= \int_0^E \frac{1}{\sqrt{U} \, \sqrt{E - U}} \underbrace{\frac{\sqrt{U}}{U'(U)}}_{\defeq f(U)} \, \dd{U}.
        \end{aligned}
        \]`,"Making the substitution ","\\(U = E \\sin^2{\\theta}\\)",", we obtain",String.raw`\[
            T \propto \int_0^{\pi/2} f(E \sin^2{\theta}) \, \dd{\theta}.
        \]`,"The proportionality constant throughout depends only on \\(m\\) and fixed numerical factors. If the oscillator is to have a fixed period, the integral","\\[\\int_0^{\\pi/2} f(E \\sin^2{\\theta}) \\, \\dd{\\theta}\\]","must be independent of \\(E\\). Under some mild continuity assumptions, it is a fun analysis exercise to show that \\(f\\) must be constant.",t.jsx(e,{id:2}),"But integrating the equality",String.raw`\[
        \frac{\dd{U}}{\sqrt{U}} = \frac{U'}{\sqrt{U}} \, \dd{x} = \frac{\dd{x}}{f(U)} = C \, \dd{x}
        \]`,"yields ","\\(2 \\sqrt{U} = Cx\\)",",",t.jsx(e,{id:3}),"the harmonic oscillator potential.",t.jsxs(s,{children:[t.jsx(i,{id:1,children:"This condition implies that \\(U\\) is a parameterization of \\(x\\) for \\(x > 0\\). We will frequently omit pullbacks and write \\(f(U)\\) instead of \\(f(x(U))\\)."}),t.jsx(i,{id:2,children:"This makes intuitive sense; the integral is essentially a weighted average of \\(f\\) on the interval \\([0, E]\\). For all such averages to be equal, the function \\(f\\) must be constant."}),t.jsx(i,{id:3,children:"Recall that \\(U(0) = 0\\)."})]})]})}export{r as default};
//# sourceMappingURL=body-DIPOtV0F.js.map
