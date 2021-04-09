const script = {
    a1a:"[nq{numberItems}]0=<jmp>b1a",
    a2a: "[say]Bryce and Bayer sit on a pregnant silence as you explain that, despite what the surveillance might suggest, there was no evidence of malfeacance or wrongdoing on part of either Albert Hassel or Nadine Leitzka. They appeared to be a perfectly normal, perfectly fine couple.",
    a3a:`[say]"Agent, I'm sure that setting up an operation on such short notice is not something you may want to do every day," Bayer quizes. "But, I find it hard to believe that there was a complete lack of any evidence on either party under surveillance."`,
    a4a:`[say]"Are you trying to pull the wool over our eyes, Brownie? Is Leitzka a friend of yours? Is Hassel?" Bryce accuses, with some anger in his voice. "If so, you are entirely innappropriate for this operation and we have wasted precious resources from your lack of professionalism."`,
    a5a:`[say]"Now, now Lt. Bryce" Bayer interjects. "No such connections have been established for the Agent. I'm sure given his time in the Ministry he knows better than to keep close association with citizens should it compromise the Operation, and he is required to disclose such relationships on operations and daily briefings." He shuffles through some of the documents in your binder. <br/><br/> "Now, I don't see such a disclosure document from the Agent. If there is a such a relationship, now would be a good time to mention it."<br/><br/>You feel Bayer's absent stare sit on you like an elephant on a cushion.`,
    a6a: "[say]You respond there is no such relationship.",
    a7a: "[jmp]z1a",

    b1a:`[nq{EV1-1}]1=<jmp>c1a`,
    b2a:"[LOCKCHAR]",
    b3a:"[SETCHAR]EV1-1",
    b4a:"[say]Bryce and Bayer hear your report on Hassel's aparent material wealth. Both men stay in silence for a moment. They look at each other with a bit of amusement.",
    b5a:`[say]"Really?" Bayer starts to question. "You presume to convict a man on owning one two many cold meats? That's the standard we will be going off on the Ministry now?"`,
    b6a:`[say]"Bayer, please." Bryce interjects. "Exactly how often can you afford to have a high ticket item on your kitchen that doesn't dissappear in a day, hm? Specially when, as the Agent has said, hams have not been in distribution for weeks?" `,
    b7a:`[say]Bayer motions to answer immediately, but pauses for thought. "I certainly have not had ham in a few months. If anything I'd like to stop Albert Hassel to ask where got them." Bryce continues, smugly.`,
    b8a:`[say]"It's very simple Bryce." Bayer says, with a bit of a laugh. "He froze them. He froze them! You want to detain people for using their freezers, Bryce. Honestly. I don't blame the Agent for think it's odd but there are simpler explanations that do not require government resources." `,
    b9a: {
        instruction: "dec",
        content: `"This line of questioning is beyond silly, Agent. I move to expunge it from record and move on." Bayer says. <br/><br/> "Nonsense, Agent. There is a reasonable fear of contraband with foods that did not come from state stores." Bryce says, huffing with discontent.`,
        opts: {
            choices: [
                {
                    content: `Argue for its inclusion in the record to agree with Bryce.`,
                    line: "[jmp]b10a",
                },
                {
                    content: `Withdraw the evidence, to agree with Bayer..`,
                    line: "[jmp]b15a",
                },
            ],
        },
    },
    b10a:"[say]You argue that while Sgt. Bayer's suggestion is plausible, it doesn't account for the shortage of similar food stuffs in recent months. far beyond safe consumption of hams even when frozen. It would be easier to check for a thawed ham, but the couple made no mention of where they got it, and how, and of it's taste. Not enough information is available to disprove contraband. ",
    b11a: "[say]Bryce reclines his chair, a bit too triumphant to win in an argument involving hand. Bayer tuts and shakes his head, displeased.",
    b12a: `[add{lambda_leader_player}]1`,
    b13a: `[add{lambda_super_player}]-1`,
    b14a:`[jmp]b999a`,
    b15a:`[say]You lend credence to Bayer's objections and make a note to expunge the evidence from the surveillance record. Bryce is non-chalant about it, showing his displeasure with a pursed lip, showing his yellow goulish teeth.`,
    b999a:"[UNLOCKCHAR]",

    c1a:`[nq{EV1-2}]1=<jmp>d1a`,
    c2a: "[LOCKCHAR]",
    c3a: "[SETCHAR]EV1-2",
    c4a: "[say]Using a Radio content",
    c5a: `[say]Bryce and Bayer hear your reports about Leitzka and Hassel having a conversation that seems to be deliberately drowned out with a radio broadcast.`,
    c6a: `[say]After a pause, Bryce asks "What time did this broadcast happen?"`,
    c7a: `[say]You answer that it was around 0900 hours.`,
    c8a: `[say]"Oh so, they're guilty of listening to the morning news with Raquel Gant." Bryce spits back with incredulity. "I listen to that show too. By your logic, Agent, I should be led away to a cell in handcuffs right now."`,
    c9a: `[say]"I think there's a little more to this than just a loud radio." Bayer says. "Subject wasn't just listening to the radio as a matter of habit, and just happened to have a conversation while the radio was still on. I think they turned on the radio to talk. The contents of the broadcast itself are largely irrelevant. They were seeking the noise to cover up their conversation. It's a pity that this is just the first day of surveillance."`,
    c10a:`[say]"It's a pity we are not increasing surveillance on a potential subversive element, Bayer?" Bryce asks. "It's almost as if that's exactly what we are doing."`,
    c11a:`[say]"You knew well what I mean Lieutant, being obtuse gets us nowhere." Bayer barks at Bryce, with annoyance. "We cannot establish a pattern unless we see a repeated incidence of behavior, but I do believe this should be entered into evidence."`,
    c12a: {
        instruction: "dec",
        content: `"It's a coincidence, Sargeant Bayer." Bryce proclaims. "Nothing more, nothing less."`,
        opts: {
            choices: [
                {
                    content: `Withdraw the evidence, to agree with Bryce.`,
                    line: "[jmp]c22a",
                },
                {
                    content: `Argue for its inclusion in the record to agree with Bayer.`,
                    line: "[jmp]c13a",
                },
            ],
        },
    },
    c13a:`[say]You argue that Sgt. Bayer's suggestion is plausible, and how it could be the start of establishing a pattern of behavior. Small bits of behavior may tell of a larger offense to prosecute under state law.`,
    c14a:`[say]Bayer looks in Bryce's direction with an air of smugness, while Bryce rolls his eyes.`,
    c15a: `[add{lambda_leader_player}]-1`,
    c16a: `[add{lambda_super_player}]1`,
    c17a:`[jmp]c999a`,
    c22a:`[say]You lend credence to Bryce's objections and make a note to expunge the evidence from the surveillance record. Bryce purses his lips, and moves on to the next part of the interrogation. Bayer tuts.`,
    c999a: "[UNLOCKCHAR]",

    d1a:`[nq{EV1-3}]1=<jmp>e1a`,
    d2a: "[LOCKCHAR]",
    d3a: "[SETCHAR]EV1-3",
    d4a: "[say]Bryce and Bayer listen to you make a note of Hassel owning two sofas not being much in line with someone of his earned income and station. Evidence may suggest that he is recieving more money than is reported in official documentation.",
    d5a:`[say]"Agent, there are hundreds of explanations that fit this piece of evidence that are much simpler than any malfeasance in another department that's not yours." Bayer chides.`,
    d6a:{
        instruction:"dec",
        content:`Not to mention that's there's already something in file that explains this course of action, Hassel was unfortunately involved with an element that has been taken care of and if I think owning a piece of furniture from a friend is not against the law." Bryce agrees, a suprised look on his face. <br/><br/> "Now, Agent, please tell us why we should even entertain this piece of evidence to be included into the dossier." Bayer says, rapping his finger on the papers.`,
        opts: {
            choices: [
                {
                    content: `Previous association with a detained subject.`,
                    line: "[jmp]d7a",
                },
                {
                    content: `Insist on the money angle.`,
                    line: "[jmp]d22a",
                },
            ],
        },
    },
    d7a:`[say]You say that precisely owning belongings that are potentially from a previous association are more than enough to arise suspicion of subversive attitudes. The rational thing would have been to shun and dissasiocate from the relation for one's own benefit and the country's.`,
    d8a:`[say]Bryce nods in agreement. Bayer shakes his head. "If the Lieutant wants to continue with our previous pattern in leaping to conclusions, I cannot help but think this is a gross misuse of state resources." <br/><br/> "What do you mean, Bayer?" Bryce asks, annoyed. <br/><br/> Sargeant Bayer sighs and raises his hands. "Add it to the record if you want, Bryce. I will not be co-signing sloppy work."`,
    d9a: `[add{lambda_super_player}]-1`,
    d10a:"[jmp]d999a",
    d22a:"[say]You insist that owning multiple pieces of this kind of furniture was not something that Hassel could afford easily, let alone with his time as a worker in the electronics factory he labored. Even if there were other, simpler explanations, they should not deter from the fact that this a pattern interrupt that needs to be on the record.",
    d23a:`[say]Bayer rests his hand on his face for a few seconds, processing the information. He reads the papers, mouthing the words written. "I think this may have some merit, Agent." He finally says. "Not the best piece of evidence we've had against a potentially subersive element, but worth following up on should the prosecution deem it needed." `,
    d24a: `[say]"Unbelievable," Bryce says, angrily. "This kind of reasoning is going to convince you to note the subject's choice of home decor. This will put anti-citizen elements behind bars, Bryce? Really?" He says with and increasingly louder voice.`,
    d25a: `[say]"I was very clear with my assesment, Lieutant." Bayer responds, leaning on the last word of that sentence. "I think it's worth pursuing for any other behaviors that are not consistent. The Agent's right to point it out even if it's slim."`,
    d26a: `[add{lambda_leader_player}]-1`,
    d999a: "[UNLOCKCHAR]",
    e1a:`[nq{EV1-4}]1=<jmp>z1a`,
    e2a: "[LOCKCHAR]",
    e3a: "[SETCHAR]EV1-4",
    e4a: "[say]Disatisfied with the party content",
    e5a:`[say]A very clearly stated dissatisfaction with the state of government and the Party, while not in and of itself an act of treason or subversion, is often the gateway to subversive attitudes and affiliations. <br/><br/> You were about to explain this, when both the Lieutenant and the Sargeant interrupt you. "Agent." Bryce says. "No need to go on about that matter. It has to be on the record as a matter of form. We've always done that." <br/><br/>  "Of course," Bayer responds. "This is just protocol. However I do have to wonder what could have motivated this outburst."`,
    e6a:`[say]"Could have been simply that we created the dissatisfaction?" Bayer inquires. "We have put him on the no-exit visa list as a matter of form previous to the investigation. This might just be this man annoyed at something we did. He had never been in our interest sphere before, so some manner of discomfort is justified."`,
    e7a:{
        instruction: "dec",
        content: `"We didn't start surveillance on this man out of the blue, Sargeant." Bryce responds. "This fits a pattern of behavior that precisely justifies surveillance. Intelligence has put him on a list for reasons of state security If Division XXI has reason to suspect something through independent informants, then we should heed their call."`,
        opts: {
            choices: [
                {
                    content: `Agree with Bryce.`,
                    line: "[jmp]e8a",
                },
                {
                    content: `Agree with Bayer.`,
                    line: "[jmp]e22a",
                },
            ],
        },
    },
    e8a: `[say]Bryce grunts with an affirmative tone. "Right you are, Agent. Right you are."`,
    e9a: `[add{lambda_leader_player}]1`,
    e10a: `[jmp]e999a`,
    e22a: `[say]Bayer hums with a bit of a humorous tone. "In his position I'd be upset too."`,
    e23a: `[say][add{lambda_leader_player}]1`,
    e999a: "[UNLOCKCHAR]",

    z1a: "[say]Having heard everything you had to report, both men get up from their seats. You respond with a standing salute.",
    z2a: `[say]"The surveillance goes on Agent," Bryce hollers. "Do not forget. We are the Shield and Sword of the State. You would do well to remember your oath and duty."`,
    z3a: "[say]And with that, they leave, leaving you completely alone.",
    z4a: "[lxs]day2",
    z999a:"[end]"
}
export default script;