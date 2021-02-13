const mainScript = {
    "6":`[dec{Voice Box}]*Identifier. Eight-Red-Zero-Whiskey-One-Seven-One-Three. Acknowledge.*You remain silent.|<jmp>a1|Remaining silent could result in a bad outcome.,You acknowledge|<jmp>b1`,
    /*"7":{
        instruction: 'dec',
        content: "Identifier. Eight-Red-Zero-Whiskey-One-Seven-One-Three. Acknowledge.",
        opts: {
            character: 'Voice Box',
            choices: [
            {
                content: "You remain silent.",
                line: "[jmp]a1",
                extra: "Remaining silent could result in a bad outcome."
            },
            {
                content: "You acknowledge.",
                line: "[jmp]a2"
            },
            ]
        }

    },*/
    "a1": "[say]Choice a1",
    "a2": "[msg]Hello",
    "b1": "[say]Choice b1",
    "ma": "[say]Beautiful people"

}

export default mainScript;