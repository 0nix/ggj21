const mainScript = {
    "r1":"[say]Once upon a time, there was a filmmaker called Wrecko Gekko. He did movies with his friends. He really liked Nerf Gun fights set to epic music. It was the best times and the promising filmmaker set out to recruit people for his next adventure.",
    "a0":"[audio]process here",
    "r2":"[say]One day he came across a very talented feller. He was an accomplished musician and vocalist named ThatMaestroGuy",
    "eethree":"[msg]Hello There",
    "r3":"[dia {ThatMaestroGuy}]Hey, how's it going? I am ThatMaestroGuy. I am a big softie and I sing very well.",
    "r4":`[dec{The Narrator}]*That Maestro Guy looks like a guy you can trust, do you want to tell him about your movies? He might help!*"Hey! I'm Wrecko Gekko. I make movies on YouTube!" you say.|<jmp>a1|ThatMaestroGuy will join your party if you click this option.^"Screw you, buddy!" You yell like a New Yorker in an oddly pleasant day.|<jmp>b1^"HERE COMES THE MONKEY!!!" You yell at the top of your lungs.|<jmp>c1|This idea is not your own, a certain very small and very angry potato in your brain came up with the idea.`,
    "a1": "[say]That Maestro Guy joins your party!",
    "a2": "[jmp]meet",
    "b1": "[say]After you insulted the musician, you seem him both dejected and confused.",
    "b2": "[jmp]meet",
    "c1": "[say]Having yelled that the monkey was coming, ThatMaestroGuy screamed horrified sounds and ran away.",
    "c2": "[say]Suddenly, a monkey with a 6 pack of a generic brand cola exits out of the broom closet. Upon closer inspection, you are sure that there was never a broom closet there to begin with, nevertheless, the monkey hands you the generic pack of cola and leaves, without so much of a word.",
    "c3": "[sto{cola}]6",
    "c4": {
        instruction:"dec",
        content:"You're kinda thirsty at the moment, do you drink a can of cola from the sixpack that monkey gave you?",
        opts:{
            choices:[
                        {
                            content:"You drink one can of cola.",
                            line:"[jmp]minuscola",
                            extra:"This will remove one cola from your inventory."
                        },
                        {
                            content:"You decide not to drink the can of generic cola, and just keep them about you.",
                            line:"[jmp]meet"
                        },
                        {
                            content:"You decide that the whole premise is quite silly, and decide to throw away the entire six-pack of generic cola. Monkeys should not have access to cheap fizzy drinks.",
                            line:"[jmp]minus6cola",
                            extra:"This will remove all 6 colas from your inventory."
                        }
                ]       
        }
    },
    "minuscola":"[add{cola}]-1",
    "-1":"[say]On this we should multiply cola",
    "minuscola2":"[mul{cola}]3",
    "minuscol3b": "[sto{com}]20",
    "-3":"[say]Hold on a sec. Do we have exactly 15 cans of cola now?",
    "-EQ":"[lt{cola}]com=<jmp>mm1",
    "mc3":"[jmp]meet",
    "minus6cola":"[add{cola}]-6",
    "m61":"[say]Upon throwing aside the cola, you spot out of the corner of your eye the very same monkey from before. You see a single tear roll down one of its cheeks. Though as you blink....the monkey is gone.",
    "m62": "[jmp]meet",
    "mm1":"[say]I guess you do have 15 cans of cola!",
    "meet":"[say]Having said that, you go on your merry way to make the next Nerf Gun fight.",
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