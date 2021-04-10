const script = {
    a1a:"[nq{numItems}]0=<jmp>b1a",
    a2a:`[say]Bryce and Bayer sit on a pregnant silence as you explain that, despite what the surveillance might suggest, there was no evidence of malfeacance or wrongdoing on part of either Albert Hassel or Nadine Leitzka. They appeared to be a perfectly normal, perfectly fine couple.`,
    a3a:`[say]"Agent, I'm sure that setting up an operation on such short notice is not something you may want to do every day," Bayer quizes. "But, I find it hard to believe, even after two days of surveillance, that there was a complete lack of any evidence on either party under surveillance."<br/><br/>"I find your lack of work to be disturbing at best, and worthy of being accused of constituing sabotage at worst." Bryce added, growling like a dog. `,
    a7a: "[jmp]z1a",
    
    b1a:`[nq{EV2-1}]1=<jmp>c1a`,
    b2a: "[LOCKCHAR]",
    b3a: "[SETCHAR]EV2-1",
    b4a:`[say]You report on a subject of the investigation, Albert Hassel, reportedly getting promoted to Engineer Team Lead at the State Electronic Fabricator Plant no. 3, supervised by one Gerhart Kleiner. Electronic Fabricator Plant no. 3 currently produces boards and chip sets for the state's Official Computer Manufacture that provides support and tools to offices both domestic and in allied countries. While not absolutely critical, the Fabricator Plant is an important sector of enterprise in the State, and it's organizational structure is cleared and reviewed constantly by the Ministry itself.`,
    b6a:`[say]"Well, there you go Bayer." Bryce says with a bit of a grin. "You have been asking over and over for a justification for this surveillance operation on Hassel. I'd say this is it. If Division XX has a reason to direct further work on the newest member of Worker Management, I don't see why wouldn't we."`,
    b8a:`[say]Bayer furrows his brow, puzzled. "I get that, I get that." He mutters. "It's not clear to me that we have had this level of mid management, specially if it's something that..." He trails off in thought.`,
    b10a:`[say]"Specially if what, Sargeant? Be more specific, please." Bryce responds through gritted teeth.`,
    b12a:`[say]"I don't see this much scrutiny over a move that, frankly sounds like a fat accompli. Frankly, from the way the conversation has been recorded and presented to us, Hassel's promotion is something that has already gone through the proper scrutiny channels, at the appropriate levels." Bayer says, scratching his chin still in a pensieve mood.`,
    b14a: `[say]"Are you saying that Division XX has engaged in dubious intelligence, Sgt. Bayer? If so, that is a very tall accusation that requires some ev-" Bryce accuses.`,
    b16a: `[say]"And my question to you Bayer is, do you have someone in Division XX you care this much?" Bayer responds, with that particular tone people use when they want to re-establish their authority. "They're good Lieutenant, but they're not gods. They're not infallible. Your defensiveness is becoming unreasonable, comrade and you are constantly forgetting yourself."`,
    b18a: `[say]The Sargeant turns to you and says. "At any rate, I think this is still useful Agent. We should look into this Gerhart Kleiner, and his relationship with Hassel as well as who cleared the usual check on his promotion."`,
    b20a: `[say]"I agree with the Sargeant on that matter, Agent. Even if I... disagree with his thoughts at the moment." Bryce says with a heavy sigh.`,
    b22a: {
        instruction:'dec',
        content: `Not to mention that's there's already something in file that explains this course of action, Hassel was unfortunately involved with an element that has been taken care of and if I think owning a piece of furniture from a friend is not against the law." Bryce agrees, a suprised look on his face. <br/><br/> "Now, Agent, please tell us why we should even entertain this piece of evidence to be included into the dossier." Bayer says, rapping his finger on the papers.`,
        opts: {
            choices: [
                {
                    content: `Argue to investigate the Division XX background check.`,
                    line: "[jmp]b24a",
                },
                {
                    content: `Argue to investigate Kleiner and the factory.`,
                    line: "[jmp]b30a",
                },
            ],
        },
    },
    b24a: `[say]You say that a perfectly fine citizen who is being slated to be promoted within state business must have had a record check done with a level of thoroughness that would have been all that was necessary to establish prosecutable offenses. That this individual is now under dedicated surveillance is not protocol. <br/><br/> Sargeant Bayer grunts in agreement and takes a note.`,
    b26a: `[add{lambda_super_player}]1`,
    b28a: `[jmp]b99a`,
    b30a: `[say]You say that the involvement of a factory supervisor of a state-owned operation adds an additional wrinkle to the surveillance operation, since such a position would allow a potential subversive element into sabotaging larger state interests and industries. The question the follows if Kleiner is involved into the matters that Hassel is being suspected of, and as such has become a suspect himself. Out of an abundance of caution, he and the factory operation should be investigated <br/><br/> Lieutenant Bryce smriks, and looks at Sargeant Bayer with some manner of contempt.`,
    b32a: `[add{lambda_leader_player}]1`,
    b99a:`[UNLOCKCHAR]`,
    c1a:`[nq{EV2-2}]1=<jmp>d1a`,

    d1a:`[nq{EV2-3}]1=<jmp>e1a`,

    e1a:`[nq{EV2-4}]1=<jmp>f1a`,

    f1a:`[nq{EV2-5}]1=<jmp>g1a`,

    g1a:`[nq{EV2-6}]1=<jmp>z1a`,

    z1a:"[end]"
}
export default script;