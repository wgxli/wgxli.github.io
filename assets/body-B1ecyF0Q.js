import{j as e}from"./index-C71_ZyU6.js";import{a as t,C as i,F as n,b as o}from"./util-xZHdt5tl.js";function s(){return e.jsxs(e.Fragment,{children:[String.raw`\[p + \epsilon = \left(k + \frac{1}{2}\right) \pi,\]`,e.jsx("p",{children:"which rearranges to"}),String.raw`\[\pi = \frac{2p}{2k + 1} + \frac{2\epsilon}{2k+1}.\]`,e.jsxs("p",{children:["Moreover, for small \\(\\epsilon\\), we have the excellent approximation"," \\(\\tan{p} \\sim \\epsilon^{-1}\\)",". Requiring "," \\(\\tan{p} > p\\)"," then imposes the condition \\(p \\epsilon \\in [0, 1)\\), or"]}),"\\[p \\cdot \\left[(2k + 1) \\, \\pi - 2p\\right] \\in [0, 2).\\]",e.jsxs("p",{children:["Summing up the above, we want rational approximations to \\(\\pi\\) that are a bit too small, but ",e.jsx("i",{children:"exceedingly"})," close.",e.jsx(t,{id:1}),"How do we go about looking for such approximations? The continued fraction expansion, of course!"]}),e.jsx(i,{language:"python",children:`def continued_fraction_coefficients():
    """Read the continued fraction coefficients of pi from a file."""
    # Left as an exercise to the reader

def rational_approximations():
    """Generate the sequence of best rational approximants of pi."""
    # We use the isomorphism between SL_2(R) and the fractional linear transformations.
    # We start with the function 1/x, and repeatedly pre-compose
    # with 1/(a + x), where a is the continued fraction coefficient.
    # We return the limit of the current rational function as x → ∞.
    n0, n1 = 0, 1
    d0, d1 = 1, 0
    for a in continued_fraction_coefficients():
        (n0, n1) = (n1, a * n1 + n0)
        (d0, d1) = (d1, a * d1 + d0)
        yield (n1, d1)
`}),e.jsx("p",{children:"For each rational approximation \\(n/d\\) with \\(n = 2p\\) even and \\(d = 2k+1\\) odd, we’d like to check if \\(p \\cdot (d \\pi - 2p) \\in [0, 2)\\). But since we’re going to be working with huge numbers, we want to avoid floating point math if possible."}),e.jsxs("p",{children:["One way to accomplish this is to replace the \\(\\pi\\) in this check with an even ",e.jsx("i",{children:"better"})," rational approximation \\(n' / d'\\). For this check to be accurate, we’d like \\(d' \\gg p \\cdot d\\). The condition then becomes"]}),e.jsx("p",{className:"emphasis",children:String.raw`\[0 \leq p \cdot (dn' - 2pd') < 2d',\]`}),e.jsx("p",{children:"which only involves integer math. Summing up the above:"}),e.jsx(i,{language:"python",start:17,children:`gen1 = rational_approximations()
gen2 = rational_approximations()

for n, d in gen1:
    # We want n/d with n even, d odd.
    if n % 2 != 0 or d % 2 == 0: continue
    p = n // 2

    # We'd like d' >> pd; I found that d' > 4pd works fine.
    threshold = 4 * p * d
    while True:
        nn, dd = next(gen2)
        if dd > threshold:
            break

    # Our integer-math-only check for an 'interesting' value of p.
    if 0 <= p * (d*nn - 2*p*dd) < 2*dd:
        # At this point, we should have tan(p) > p.
        # All that remains is a primality check:
        if is_probable_prime(p):
            print(p)
`}),e.jsxs("p",{children:["If you’re following along, you might want to add more logging just to see what the code is doing. All that remains is to define a reasonable probabilistic primality test ",e.jsx("code",{children:"is_probable_prime"}),". Personally, I got the best performance by doing trial division on primes up to a million, then calling ",e.jsx("a",{href:"https://sourceforge.net/projects/openpfgw/",children:"PFGW"})," via ",e.jsx("code",{children:"subprocess"}),". If you want to stay within Python, the ",e.jsx("a",{href:"https://pypi.org/project/gmpy2/",children:"gmpy2"})," library is also a reasonable option:"]}),e.jsx(i,{language:"python",children:`from gmpy2 import is_strong_prp, is_prime

PRIMES = [k for k in range(1, 1000000) if is_prime(k)]
def is_probable_prime(n):
    if any(n % p == 0 for p in PRIMES):
        return False
    return is_strong_prp(n, 3)
`}),e.jsxs("p",{children:["The verdict? In less than a second, we reproduce the 46-digit prime mentioned at the start of the blog post. In two or three seconds, we find a 1017-digit prime solution (which Matt ",e.jsx("a",{href:"https://twitter.com/standupmaths/status/1296400194721001472",children:"mentioned"}),"), which begins and ends as"]}),"\\[p = 230835870782\\dots 610326005069.\\]",e.jsx("p",{children:"And after a few hours, we find the monstrous 35,085-digit prime"}),"\\[p = 409461998988\\dots 829370185991,\\]",e.jsx("p",{children:"which, at the time of writing, I believe Matt (and, perhaps, everybody else in the world) is unaware of."}),e.jsx("p",{children:"I think that's enough for today."}),e.jsx(n,{children:e.jsxs(o,{id:1,children:["More precisely, we want an approximation accurate to the order of denominator squared. The constants are a bit too small to apply ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/Dirichlet%27s_approximation_theorem",children:"Dirichlet’s approximation theorem"})," directly, so we aren’t guaranteed infinitely many solutions (although I suspect there are)."]})})]})}export{s as default};
//# sourceMappingURL=body-B1ecyF0Q.js.map
