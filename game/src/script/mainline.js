const mainScript = {
    "7":{
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

    },
    "a1": "[say]Choice a1",
    "a2": "[say]Choice a2"


}

export default mainScript;