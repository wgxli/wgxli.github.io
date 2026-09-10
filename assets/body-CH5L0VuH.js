import{j as e}from"./index-BTOa301H.js";import{R as a,a as i,C as t,F as o,b as n}from"./util-BhAw9G53.js";const l="/assets/example-CxEqGQXR.png",h="/assets/example-padded-D6zPvrfB.png",r="/assets/ieee3-CMezdd-u.png",s="/assets/storage-Do4t957n.png";function u(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{desktopSource:h,mobileSource:l,alt:"Multiplication as a convolution followed by carry resolution."}),e.jsxs("p",{children:["The core idea of the algorithm is illustrated above. Grade-school multiplication can be viewed as a ",e.jsx("b",{children:"convolution"}),", followed by a final ",e.jsx("b",{children:"carry-resolution"})," step. Although you were probably taught to resolve carries during each partial product, it is equivalent (and simpler, as we’ll see later) to defer them to the end."]}),e.jsxs("p",{children:["Schönhage-Strassen is implements this convolution using a Fast Fourier Transform (FFT). According to the ",e.jsx("a",{href:"https://en.wikipedia.org/wiki/Convolution_theorem",children:"convolution theorem"}),", one can compute the convolution by performing a forward FFT on the two inputs,",e.jsx(i,{id:1})," followed by a pointwise multiplication and an inverse FFT. This would suggest an ",String.raw`\(\mathcal{O}(n \, \log{n})\)`," time complexity — but this isn’t correct!"]}),e.jsxs("p",{children:["The issue with a naïve implementation (e.g. with FP32 or FP64 FFTs) is the ",e.jsx("i",{children:"precision"})," required to store the intermediate products. Consider the multiplication of two \\(N\\)-digit numbers, where each digit can have \\(D\\) possible values. There will be \\(N\\) partial products, each with digits up to \\(D^2\\), so the final convolution result can have entries up to \\(ND^2\\). If we take 32-bit “digits,” then multiplying two gigabit numbers gives ",String.raw`\(N = 2^{25}\)`,", and each bin requires \\(25 + 2 \\times 32 = 89\\)-bit precision."]}),e.jsx(a,{desktopSource:r,mobileSource:r,alt:"Multiplication as a convolution followed by carry resolution."}),e.jsxs("p",{children:["This significantly exceeds the precision of 64-bit floats (which have 53-bit mantissa). Fundamentally, the “extra” factor of ",String.raw`\(\log{\log{n}}\)`," in the asymptotic runtime of Schönhage-Strassen is ",e.jsx("b",{children:"precisely"})," due to the size of the convolution products increasing with the length of the FFT.",e.jsx(i,{id:2})," So if double-precision floats won’t cut it, what do we do?"]}),e.jsx("h2",{children:"The Number-Theoretic Transform (NTT)"}),e.jsxs("p",{children:["Recall the definition of the discrete Fourier transform:",e.jsx(i,{id:3})]}),String.raw`\[
        X_k = \sum_{n=0}^{N-1} x \omega^{-kn},
        \]`,e.jsxs("p",{children:["where \\(\\omega\\) is an \\(N\\)-th root of unity. Importantly, the fact that \\(\\omega\\) is a principal \\(N\\)-th root of unity is the the ",e.jsx("i",{children:"only property"})," of \\(\\omega\\) which is necessary for the FFT algorithm to work. There’s no reason we need to choose a complex root of unity — we may as well work modulo some modulus \\(m\\), as long as there exists an \\(N\\)-th root of unity modulo \\(m\\). If \\(m\\) is larger than any convolution product \\(ND^2\\), then the final result will still be correct. This variant of the FFT is known as the ",e.jsx("b",{children:"number-theoretic transform (NTT)"}),", and is precisely what the Schönhage-Strassen algorithm uses.",e.jsx(i,{id:4})]}),e.jsx("p",{children:"Based on my requirements, I can make two assumptions which simplify the implementation (and pedagogy) considerably:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["I only need FFTs of length ",String.raw`\(N = 2^n\)`," for ",String.raw`\(n \leq 31\)`,". Thus I only need an element \\(\\omega\\) of multiplicative order ",String.raw`\(2^{31}\)`,"."]}),e.jsx("li",{children:"The FFTs will be used exclusively to compute convolutions. The order of the frequency bins does not matter. In particular, the FFT bins can be output in so-called “bit-reversed” order, which turns out to save some shuffling."})]}),e.jsxs("p",{children:["In my implementation, I use ",String.raw`\(D = 2^{32}\)`," and work modulo the prime ",String.raw`\(p := 2^{96} - 2^{32} + 1\)`,", which is large enough for an NTT of length ",String.raw`\(N = 2^{32}-1\)`,". The specific value of \\(p\\) is chosen so that multiplication modulo \\(p\\) is quite efficient."]}),e.jsxs("p",{children:["The multiplicative group ",String.raw`\(\mathbb{Z}_p^{\times}\)`," is cyclic of order ",String.raw`\(p-1 = 2^{32} \, (2^{64} - 1)\)`,", with smallest generator \\(g = 13\\). Although the NTT algorithm will work for any \\(N\\) dividing \\(p-1\\), I only need an element of order ",String.raw`\(2^{31}\)`,". We will use ",String.raw`\(\omega := g^{2 \cdot (2^{64}-1)} \equiv 11400757213810637157897717999\)`," (mod \\(p\\))."]}),e.jsx("h2",{children:"Top-Level Implementation"}),e.jsx("p",{children:"Here’s a high-level overview of the steps involved in multiplying two \\(N\\)-digit numbers."}),e.jsx(a,{desktopSource:s,mobileSource:s,alt:"Step-by-step algorithm for multiplying two numbers."}),e.jsxs("p",{children:["We start with two integers \\(A\\) and \\(B\\), stored as sequences of 32-bit words (",String.raw`\(D = 2^{32}\)`,"). Next, we copy \\(A\\) and \\(B\\) into FFT buffers, each of length \\(2N\\) and with enough precision per bin to hold ",String.raw`\(ND^2\)`,". We apply a forward NTT, perform an (in-place) pointwise multiplication modulo \\(p\\), and then an inverse NTT. Finally, we copy the result back into a length-\\(2N\\) sequence of 32-bit words, while resolving any carries."]}),e.jsxs("p",{children:["Let’s focus on the NTT first. As each FFT bin is a 96-bit integer, it seems natural to store the bins in a \\(N \\times 3\\) array of ",e.jsx("tt",{children:"uint32_t"}),", where \\(N = 2^n\\). However, to ensure coalesced memory access, it’s better to store the bins in a \\(3 \\times N\\) array, with each row representing the low, middle, and high word of each bin, respectively."]}),e.jsx(t,{language:"c",children:`typedef struct {
    int n;
    uint32_t* bins; // GPU array with dimensions 3 × (2^n).
} ntt_bins_t;`}),e.jsx("p",{children:"For efficient parallelization, we may want to multiply several pairs of numbers at once. For this, we need to define a datatype to hold arrays of many big integers. I assume that each integer has \\(2^k\\) 32-bit “digits,” and that the number of integers in the array is a power of 2."}),e.jsx(t,{language:"c",children:`typedef struct {
    int n; // array holds 2^n integers.
    int k; // each integer has 2^k 32-bit limbs.
    uint32_t* limbs; // GPU array with dimensions 2^n × 2^k.
    uint8_t* carries; // explained later!
} bigint_array_t;`}),e.jsx("p",{children:"Since we now have many integers, each FFT may not necessarily span all \\(N\\) bins. We will define our NTT function to perform a “level-\\(L\\) FFT” with \\(L \\leq n\\), where the array is segmented into chunks of length \\(2^L\\) and an NTT is performed on each chunk in parallel. We also need functions to copy bigints to/from FFT bins with the appropriate \\(2^L\\) spacing."}),e.jsx(t,{language:"c",children:`// must have level >= src.k and dst.n == src.n + level.
void copy_to_ft(ntt_bins_t& dst, const bigint_array_t& src, const int level);

void ntt_fwd(ntt_bins_t& bins, const int level);
void modmul_inplace(ntt_bins_t& dst, const ntt_bins_t& src);
void ntt_inv(ntt_bins_t& bins, const int level);

// must have dst.k >= level and dst.n == src.n - level.
void copy_from_ft(bigint_array_t& dst, const ntt_bins_t& src, const int level);
void resolve_carries(bigint_array_t&);
`}),e.jsx("p",{children:"With these declarations out of the way, we can implement our multiplication function as follows."}),e.jsx(t,{language:"c",children:`void bigint_multiply(
    bigint_array_t& dst,
    const bigint_array_t& A,
    const bigint_array_t& B,
    ntt_bins_t& A_buff,
    ntt_bins_t& B_buff
) {
    // Check that all array sizes line up.
    assert((dst.k == A.k + 1) && (dst.k == B.k + 1));
    assert((dst.n == A.n) && (dst.n == B.n));
    assert((A_buff.n == dst.n + dst.k) && (B_buff.n == dst.n + dst.k));

    // Copy to NTT buffer with enough spacing to hold product AB.
    copy_to_ft(A_buff, A, dst.k);
    copy_to_ft(B_buff, B, dst.k);

    // Perform forward NTTs.
    ntt_fwd(A_buff, dst.k);
    ntt_fwd(B_buff, dst.k);

    // Pointwise multiplication.
    modmul_inplace(A_buff, B_buff);

    // Inverse NTT and resolve carries.
    ntt_inv(A_buff, dst.k);
    copy_from_ft(dst, A_buff, dst.k);
    resolve_carries(dst);
}`}),e.jsx("h2",{children:"Multiplication Modulo \\(p\\)"}),e.jsxs("p",{children:["The primary operation in the NTT is multiplication modulo ",String.raw`\(p = 2^{96} - 2^{32} + 1\)`,". It’s well worth the effort to optimize this as much as possible."]}),e.jsxs("p",{children:["Each integer ",String.raw`\(a < p\)`," consists of three 32-bit chunks ",String.raw`\(a = a_0 + a_1 2^{32} + a_2 2^{64}\)`,". In this representation, we have"]}),String.raw`\[
        \begin{aligned}
        a \cdot b \, (\mathrm{mod}\,p) &= a_0 b_0 \\
        &+ 2^{32} \, (a_0 b_1 + a_1 b_0) \\
        &+ 2^{64} \, (a_0 b_2 + a_1 b_1 + a_2 b_0) \\
        &+ 2^{96} \, (a_1 b_2 + a_2 b_1) \\
        &+ 2^{128} \, a_2 b_2.
        \end{aligned}
        \]`,e.jsxs("p",{children:["Using ",String.raw`\(2^{96} \equiv 2^{32} - 1 \, (\mathrm{mod}\,p)\)`,", we reduce to"]}),String.raw`\[
        \begin{aligned}
        a \cdot b \, (\mathrm{mod}\,p) &= (a_0 b_0 - a_1 b_2 - a_2 b_1) \\
        &+ 2^{32} \, (a_0 b_1 + a_1 b_0 \\
        &\qquad + a_1 b_2 + a_2 b_1 - a_2 b_2) \\
        &+ 2^{64} \, (a_0 b_2 + a_1 b_1 + a_2 b_0 \\
        &\qquad + a_2 b_2).
        \end{aligned}
        \]`,e.jsx("p",{children:"Writing"}),String.raw`\[
        a_0 b_2 + a_1 b_1 + a_2 b_0 + a_2 b_2 = L + 2^{32} H
        \]`,e.jsxs("p",{children:["with ",String.raw`\(0 \leq L < 2^{32}\)`," and ",String.raw`\(0 \leq H \leq 2^{34}-8\)`,", we obtain"]}),String.raw`\[
        \begin{aligned}
        a \cdot b \, (\mathrm{mod}\,p) &= (a_0 b_0 - a_1 b_2 - a_2 b_1 - H) \\
        &+ 2^{32} \, (a_0 b_1 + a_1 b_0 \\
        &\qquad + a_1 b_2 + a_2 b_1 \\
        &\qquad- a_2 b_2 + H) \\
        &+ 2^{64} \, L.
        \end{aligned}
        \]`,e.jsx("p",{children:"To avoid dealing with signed integers, we will separately evaluate"}),String.raw`\[
        \begin{aligned}
        A &:= a_0 b_0 \\
        &+ 2^{32} \, (a_0 b_1 + a_1 b_0 \\
        &\qquad + a_1 b_2 + a_2 b_1 + H) \\
        &+ 2^{64} \, L \\
        &< 5p - 2^{66}
        \end{aligned}
        \]`,e.jsx("p",{children:"and"}),String.raw`\[
        \begin{aligned}
        B &:= (a_1 b_2 + a_2 b_1 + H) + 2^{32} \, a_2 b_2 \\
        &< p + 2^{33},
        \end{aligned}
        \]`,e.jsxs("p",{children:["then compute \\(M := A + (2p - B)\\). Since \\(p\\) is, relatively speaking, within ",String.raw`\(2^{-64}\)`," of ",String.raw`\(2^{96}\)`,", the final reduction modulo \\(p\\) can be performed as follows:"]}),e.jsx(t,{language:"c",children:`__device__ __uint128_t reduce_mod_p(__uint128 M) {
    // approximate M/p.
    // q is an underestimate,
    // off by 0 or 1.
    const uint32_t q = M >> 96;

    // reduce to range 0 ≤ M < 2p.
    M -= q*p; 

    // subtract p if M ≥ p.
    if ((M + 0xFFFFFFFF) >> 96) {M -= p;} 
    return M;
}`}),e.jsxs("p",{children:["This gives the correct result for any ",e.jsx("tt",{children:"__uint128_t"})," input."]}),e.jsx("p",{children:"Implementing the above calculations, I achieve 170 Gmodmul/s on an A100. Although this seems low, it’s high enough that our NTT will be limited by memory bandwidth and not compute."}),e.jsx("h2",{children:"Implementing the NTT"}),e.jsx("p",{children:"With the task of each function clearly defined, we can go ahead and dive into the technical details."}),e.jsx("h2",{children:"Deferring and Resolving Carries"}),e.jsx("p",{children:"Recall our data structure for storing bigint arrays:"}),e.jsx(t,{language:"c",children:`typedef struct {
    int n; // array holds 2^n integers.
    int k; // each integer has 2^k 32-bit limbs.
    uint32_t* limbs; // GPU array with dimensions 2^n × 2^k.
    uint8_t* carries; // explained later!
} bigint_array_t;`}),e.jsxs("p",{children:["What’s the ",e.jsx("tt",{children:"carries"})," array for?"]}),e.jsx("p",{children:"It turns out that handling carries is annoying. They can propagate right-to-left through many digits, and potentially the entire length of the array."}),e.jsxs(o,{children:[e.jsx(n,{id:1,children:"To multiply an \\(N\\)-digit number by a \\(M\\)-digit number, each FFT buffer should have length \\(N+M\\)."}),e.jsxs(n,{id:2,children:["To achieve a factor of ",String.raw`\(\mathcal{O}(n \, \log{n} \, \log{\log{n}})\)`,", the algorithm should be run recusively, with smaller multiplications using a lower-precision datatype. If a precision sufficient to hold \\(ND^2\\) is used for the entire FFT, as shown here, the runtime becomes ",String.raw`\(\mathcal{O}(n \, \log^2{n})\)`,". For my purposes, this is fine."]}),e.jsx(n,{id:3,children:"Here \\(N\\) is the length of the FFT, which is not the same as the length of each input."}),e.jsxs(n,{id:4,children:["The ",e.jsx("i",{children:"bona-fide"})," Schönhage-Strassen algorithm works modulo \\(2^n + 1\\) for some \\(n\\). For ease of implementation, I deviate slightly from this and work modulo \\(p\\), but the overarching idea is the same."]})]})]})}export{u as default};
//# sourceMappingURL=body-CH5L0VuH.js.map
