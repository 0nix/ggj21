const script = {
    "e": {
        instruction: "dec",
        content: "The disembodied voice chimes in with a flat tone, carefuly manicured to not reflect any kind of emotion from the speaker box on the hallway.<br/><br/>Designation. State Protection Agent.<br/><br/>Identifier. Eight-Red-Zero-Whiskey-One-Seven-One-Three. Acknowledge.",
            opts: {
                choices: [
                    {
                        content: "Eight-Red-Zero-Whiskey-One-Seven-Three. Acknowledged.",
                        line: "[jmp]n1",
                    },
                    {
                        content: "You say nothing.",
                        line: "[jmp]decEnd"
                    }
                ]
        }
    },
    "decEnd": "[add{lambda_leader_player}]-1",
    "lp": {
        instruction: "dec",
        content: `After a brief silence, the disembodied monotone voice chimes in again.<br/><br/>"To continue with State Security Proceeding 1138, Agent must identify to proceed. In accordance with State Security Ministry Protocol Alpha-Charlie-One-One-Five Dot Four-Five-Zulu."<br/><br/>"Designation. State Protection Agent."<br/><br/>"Identifier. Eight-Red-Zero-Whiskey-One-Seven-Three. Acknowledge."`,
        opts: {
            choices: [
                {
                    content: "Eight-Red-Zero-Whiskey-One-Seven-Three. Acknowledged.",
                    line: "[jmp]n1"
                },
                {
                    content: "You remain silent again.",
                    line: "[jmp]lp"
                }
            ]
        }
    },
    "n1": {
        instruction:"dec",
        content:`A loud buzz drones in your ears, and an equally heavy mechanical latch spring to life, signaling that you were allowed entry. It's a room painted a milky white with a metal table and two chairs on oppsite ends. The light pouring in from the cube-glass window allowing you to see the person on the other side of the room. <br/><br/>It's a man clad in olive green, a perfectly pressed military uniform. However, he did not carry the patches or the insignias that followed his authority. He didn't even look authoritative himself: A cueball head without a hair sticking out, with a face like a crow framed by small circular spectacles, and eyes sunken in so deep you can barely see the color in his pupils.<br/><br/>No patches to identify him.<br/><br/>Because he didn't need to be.`,
        opts: {
            choices: [
                {
                    content: `"Lieutenant Bryce, sir." You say, saluting him swiftly`,
                    line: "[jmp]ce"
                },
                {
                    content: "You say nothing.",
                    line: "[jmp]lp1a"
                }
            ]
        }
    },
    "lp1a": `[say]The man in the olive green uniform stares at you from across the table. His lips unmoveable, his eyes boring into the wall behind your head. <br/><br/> Not a word is exachanged for a few minutes that felt like an eternity. <br/><br/> He clears his throat, and lick his lips.From how he's leaning forward, there is a note of displeasure about him. <br/><br/>"Well, Agent. I did not expect to be disrespected by a common operative today, but it seems that today is a day of surprises for me. I would advise you that the surprises I have in store will not be of your liking either. You apologize.<br/><br/> Bryce nods.<br/><br/>"Hm yes, very well. To the subject at hand."`,
    "lp2a": "[dia{The voice of Reason}]<i>Your actions will have irreversible consequences on the reputation you have with certain characters in the game. The Ministry for State Security is not kind to breaches in protocol, nor sub-standard performance. However, the right choices will ingratiate you to your superiors.</i>",
    "lp3a": "[add{lambda_leader_player}]-1",
    "lp4a":"[sto{diag_choices_clear}]1",
    "ce": {
        instruction: "dec",
        content: `Lieutenant Bryce produces a manila folder from his coat, and opens with delicacy. "Agent Eight-Red-Zero-Whiskey-One-Seven-One-Three... " he murmurs.<br/><br/>"8R0W..1713" he muses, eyeing over what no doubt is your previous record at the Ministry. He smirks.<br/><br/>"They actually spelled something your designation, Agent. Brownie, right? It spells Brownie." He chuckles lightly.<br/><br/>"What do you think, *Brownie*?" He asks you, mockery in his tongue, leaning into that word like a drunk idiot onto a wall.`,
        opts: {
            choices: [
                {
                    content: `It's the probably the millionth time you've heard the joke, but because it's Bryce by God you have to put on a shit-munching smile and sell that it's the first time you're hearing this.`,
                    line: "[jmp]ceb"
                },
                {
                    content: "You say nothing.",
                    line: "[jmp]cebb"
                }
            ]
        }
    },
    "cebb": "[say]You sit there, quiet as a rock. Lieutenant Bryce sits in that silence with you, a comedian waiting for an audience to react to a joke that had no reaction whatsoever.<br/><br/>After a solid 20 seconds, he coughs and proceeds with the briefing.<br/><br/>He picks up a couple of papers attached together with a clip and slid them across the table to you.",
    "cebb2b":"[add{lambda_leader_player}]-1",
    "cebb3b":"[eq{diag_choices_clear}]1=<jmp>ceb",
    "cebb4b": "[dia{The voice of Reason}]<i>Your actions will have irreversible consequences on the reputation you have with certain characters in the game. The Ministry for State Security is not kind to breaches in protocol, nor sub-standard performance. However, the right choices will ingratiate you to your superiors.</i>",
    "ceb": `[say]With a brief chuckle, you respond. "I had not thought about that sir, Services has quite the sense of humor then."<br/><br/>Bryce grunted in approval. He picked up a couple of papers attached together with a clip and slid them across the table to you.`,
    "ceb1a": "[add{lambda_leader_player}]1",
    "ceb2a": "[eq{diag_choices_clear}]1=<jmp>f",
    "ceb3a": "[dia{The voice of Reason}]<i>Your actions will have irreversible consequences on the reputation you have with certain characters in the game. The Ministry for State Security is not kind to breaches in protocol, nor sub-standard performance. However, the right choices will ingratiate you to your superiors.</i>",
    "f":`[say]The papers contain the dossier of a man and a woman you have never seen in your life. Perfectly manicured typewritten messages, with attached scribblings and diagrams for a standard State Security Ministry surveillance job located on a two-bedroom flat in Fredericksfield. Their pictures came attached with the documents:`,
    "f2a":`[say]The man looked to be about fourty years old. Mousy appearance, like he feared even being seen away from home. The thick, kettle-black frame of a state-issued pair of eyeglasses is unmistakable - completely round, and able to withstand a nuclear blast along with the cockroaches`,
    "f3a":`[say]The woman looked a lot more alive, so to speak. Could not be a day above thirty years old. Frazzled, messy hair framed a heart-shaped face. But those eyes. Man, the stare of those eyes could make a hole through a steel door. As if the she was daring the man taking her picture at the Registration Office to a fight.`,
    "f4a":`[say]"These two are your new assignment, Agent Brownie." Bryce said with a snicker.`,
    "f5a":`[say]"Their names are Albert Hassel and Nadine Leitzka. They cohabitate in the same flat together. We have suspsicions that Mr. Hassel is a part of the United Left organization. If our preliminary investigations are correct, he is the distrbutor of anti-government literature and subversive operations against the state and her institutions. We also suspect that Ms. Leitzka may not be living with Mr. Hassel of her own volition, but rather on the threat of blackmail." Bryce says.`,
    "f6a":{
        instruction:"dec",
        content: "Usually, this kind of operation would require an increased amount of resources and equipment. However, we are also aware that United Left plans a larger operation in six days. Which means you have four days to acquire information on Mr. Hassel's activities.",
        opts:{
            choices: [
                {
                    content: `"Three days?" You say. "That's not nearly enough to obtain an official warrant. Just arrest him whenever he's eating lunch or something, who cares?" `,
                    line: "[jmp]f1b"
                },
                {
                    content: `"Three days, huh?" You say. "Wouldn't that get Sargeant Bayer angry?" `,
                    line: "[jmp]f1c"
                }
            ]
        }
    },
    "f1b":`[say]Lieutenant Bryce grunts in agreement. "If this were a year or two ago, Brownie, I wouldn't even bother with it. But I'm in no mood to anger Sargeant Bayer with warrantless arrests, and if I were you I wouldn't want to do that either. The Party wants results, not just a bunch of John Q Publics locked up eating and doing nothing," he says. That bit about our Party, he said it quite mockingly.`,
    "f2b":`[say]He stops a moment and looks at you in the eye, "I agree with you Brownie, as much as I'd like to simply arrest the man, we will need enough evidence for a formal arrest in three days and you will provide it Brownie. That's it."`,
    "f3b":`[add{lambda_leader_player}]1`,
    "f4b":"[add{lambda_super_player}]-1",
    "f5b":"[jmp]g1a",
    "f1c":`[say]Lieutenant Bryce grunts, annoyed. "If this were a year or two ago, Brownie, I wouldn't even bother with it. But I'm in no mood to anger Sargeant Bayer with warrantless arrests. After all, the Party wants results, as if we didn't get them already." Spite laced his last words.`,
    "f2c":`[say]He stops a moment and looks at you in the eye, "As much as I'd like to simply arrest the man, Bayer won't have it. And, as it so happens, you will have to make his well wishes and fairy tales into reality. We will need enough evidence for a formal arrest in three days and you will provide it Brownie."<br/><br/>He paused just to let that sting in a bit deeper. "No pressure, though." Bryce snides.`,
    "f3c": "[add{lambda_super_player}]1",
    "g1a": `[say]Leiutenant Bryce gets up, the metal chair making an extremely nasty noise as he rises. You get up as well.`,
    "g2a": `[say]"Four days, Brownie. I need evidence on Mr. Hassell to rid this nation from the pest of subversion. You have this country and Ms. Leitzka to save." He declares.`,
    "g3a": `[say]"You will report to Sargeant Bayer immediately, give him Form 451F to confirm your assignment and he will write the paperwork for you to take over monitoring Hassel's flat and workplace. After that, head over immediately to the Field Office in the ground floor of his apartment building, number 6 to begin your assignment." Bryce says as he leaves the room. You follow suit from another door beside you.`,
    "g4a":`[say]As he walks away, Bryce shouts at you "We are the Sword and Shield, Agent. The Sword and the Shield of the Party! Don't you forget it!" His partisan platitudes echo throughout the building. As big a deal as Bryce is, he still has to lick boots and do so publicly. It would be hilarious, were it not for the fact that you have to do that too on occasion.`,
    "e1a":`[say]On the other side of Division VIII, Surveillance of Suspicious Citizens, is Sargeant Bayer's office. You double time it, and by the time you get there you have worked up a bit of a sweat and ragged breath.`,
    "e2a":`[say]Bayer has great expectations from operations from Division VIII, having recently left Division XIX with good notes and recommendation from Party leaders. A knock on the door gets you in front of the man immedately, famously never acquiring the services of a secretary. Odd for a man of his position.`,
    "e3a": `[say]You hand him the paperwork signed with Bryce's name, and he quickly scans it.`,
    "e4a":`[say]"May I have the rest of the documentation, Agent?" You obey. Bayer did not need long to understand the situation. `,
    "e5a": {
        instruction: "dec",
        content: `"Typical Bryce operation. If it were up to him he'd try to get nine women pregnant to deliver a baby in a month. Four days for a comprehensive surveillance and official warrant is not nearly enough. Looks like you've drawn the short stick, Agent 8R0W1713."`,
        opts:{
            choices: [
                {
                    content: `"I said the same thing sir. But, I welcome the challenge."`,
                    line: "[jmp]e1b"
                },
                {
                    content: `"For our subjects of surveillance in Division VIII, better to have ten innocents than one enemy of the state free."`,
                    line: "[jmp]e1c"
                }
            ]
        }
    },
    "e1b":`[say]Sargeant Bayer hums in agreement. "I welcome the enthusiasm... and your candor, Agent 8R0W173. I am not satisfied with jobs done with crayons and kraft paper, let alone have one more wailing Otto in a cell yelling about his innocence until he doesn't have a voice. A jailed, good worker is an unproductive good worker."`,
    "e2b": "[add{ lambda_super_player }]1",
    "e3b":"[jmp]h1a",
    "e1c":`[say]Sargeant Bayer grunts, and starts speaking with slow, calculated aggresion. "I am not satisfied with jobs done with crayons and kraft paper,  Agent 8R0W173. Let alone have one more wailing Otto in a cell yelling about his innocence until he doesn't have a voice because you or Lietuant Bryce think the coffers of this Republic are infinite, and her bounty without limit. It may have been how the Eighth conducted themselves before, but I am not them and this is not going to happen today."`,
    "e2c": "[add{ lambda_super_player }]-1",
    "h1a":`[say]"I have to say," Sargeant Bayer says with a huff "the alacrity of this job that Bryce has assigned to you is rather odd. Very conveniently for our timing with the United Left operation at the Nineteenth."`,
    "h2a":`[say]He stops a moment to think, leans forward and adopts a much more serious façade.`,
    "h3a":`[say]"Agent 8R0W713, you are hererby assigned an additional task. It is clear that Bryce wants something more than the safety of this country, and he has been personally compromised. As you report at the end of every workday in the surveillance of this Mr. Hassel and Ms. Leitzka I will join the briefing. I expect you to truthful of what you see, and find evidence of Bryce's personal involvement in this affair. I am sure Bryce is using the State as his personal cudgel and I will need require evidence for this crime. Same standards apply. Counter-intelligence would be thrilled to find a little tyrant in the company, and you will be rewarded for it.`,
    "h4a":`[say]He produces the permission slip you need from a drawer under his desks, signs it, stamps it, and hands it over to you.`,
    "h5a":`[say]"We are the sword and shield of the State, Agent 8R0W713. Not a roving band of thugs."`
}
export default script;