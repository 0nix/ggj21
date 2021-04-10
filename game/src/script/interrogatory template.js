const script = {
    a1a:"[nq{numItems}]0=<jmp>b1a",
    a7a: "[jmp]z1a",
    
    b1a:`[nq{EV1-1}]1=<jmp>c1a`,

    c1a:`[nq{EV1-2}]1=<jmp>d1a`,

    d1a:`[nq{EV1-3}]1=<jmp>e1a`,

    e1a:`[nq{EV1-4}]1=<jmp>z1a`,

    z1a:"[end]"
}
export default script;