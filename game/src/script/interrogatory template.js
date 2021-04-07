const script = {
    a1a:"[neq{numItems}]0=<jmp>b1a",
    a7a: "[jmp]z1a",
    
    b1a:`[neq{EV1-1}]1=<jmp>c1a`,

    c1a:`[neq{EV1-2}]1=<jmp>d1a`,

    d1a:`[neq{EV1-3}]1=<jmp>e1a`,

    e1a:`[neq{EV1-4}]1=<jmp>z1a`,

    z1a:"[end]"
}
export default script;