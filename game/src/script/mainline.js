const mainScript = {
    "1":"[say]Once upon a time, there was a filmmaker called Wrecko Gekko. He did movies with his friends. He really liked Nerf Gun fights set to epic music. It was the best times and the promising filmmaker set out to recruit people for his next adventure.",
    "2":"[say]One day he came across a very talented feller. He was an accomplished musician and vocalist named ThatMaestroGuy",
    "3":"[dia {ThatMaestroGuy}]Hey, how's it going? I am ThatMaestroGuy. I am a big softie and I sing very well.",
    "4":`[dec{The Narrator}]*That Maestro Guy looks like a guy you can trust, do you want to tell him about your movies? He might help!*"Hey! I'm Wrecko Gekko. I make movies on YouTube!" you say.|<jmp>a1|ThatMaestroGuy will join your party if you click this option.^"Screw you, buddy!" You yell like a New Yorker in an oddly pleasant day.|<jmp>b1`,

    "a1": "[say]That Maestro Guy joins your party!",
    "a2": "[jmp]meet",
    "b1": "[say]After you insulted the musician, you seem him both dejected and confused.",
    "b2": "[jmp]meet",
    "meet": "[say]Having said that, you go on your merry way to make the next Nerf Gun fight.",
    "end":"[end]"

}

export default mainScript;

/**
 * These commands output the same thing:
 *  "6":`[dec{Voice Box}]*Identifier. Eight-Red-Zero-Whiskey-One-Seven-One-Three. Acknowledge.*You remain silent.|<jmp>a1|Remaining silent could result in a bad outcome.,You acknowledge|<jmp>b1`,
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

    },
*/