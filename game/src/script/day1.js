const script = {
  a1a:
    "[say]You arrive to the surveillance site, a five-story building in Friedrichsfelde, within a surprinsgly a short distance from Headquarters. Mostly brown, with a few blotches of colors in the windows from the furnishings of the tenants. Room 6 is the field office. On paper, it's where a pensioner resides. A lifetime of service to the Party has given her free lodgings, free food, free everything. That is, as long as she keeps to all of ten square meters and the rest of the house functions as an outpost for Division XIX. At least she gets something out of a lifetime of work.",
  a2a:
    "[say]You hand in your paperwork and you are led to a dark room lit only by the glow of the tube monitors, and the blinking lights of recording equipment. A desk populated by cathode-ray-tube, long reel recorders, plenty notebooks and pens, a typewriter, and a standard issue Ministry of State Security pair of headphones that could masticate your entire head if they were alive.",
  a3a:
    "[say]The two bedroom flat is located a few floors above you, and is fitted with two cameras, the kitchen and the living room. The phone line bugs are active, as is standard issue ten-milimeter microphones dotted in every room. It was weird for a subject that was previously not considered a threat to the state to have video surveillance, but it appears Bryce had gone ahead of you in operations and installed them anyway. Preliminary surveillance before your addition to the team stated that at least one occupant constantly remained in the house, namely this Nadine Lietzka. Not odd for a housewife, however to your knowledge Ms. Leitzka was not married to Mr. Hassler. While it's not illegal for couples to occupy the same dwelling, it still raises some eyes from older agents at entry-level surveillance. As much as the Party wants to avoid it, society is like a river: It changes and flows.",
  a4a:
    "[say]Your long watch begins, as you sit down on the metal chair provided to you, and, by the light of television, you lay in wait to observe and record.",
  a5a: "[say]Observe and record. You are the Sword and Shield of the State.",
  a7a: "[msg]Day 1",
  a8a:
    "[say]You observe Nadine Leitzka, washing dishes in the kitchen. She hums a tune you can't quite make through the microphone and the noise of the rushing water.",
  a9a: {
    instruction: "dec",
    content:
      "You observe Leitzka opening the fridge to produce two baked hams and proceeds to cut slices from them, preparing food. <br/><br/> <i>Of note, these baked hams have been on short supply in stores due to produciton goals changing from hams to sausages, which means that this foodstuff may not have been bought from local industry. This would mean they got it at an Intershop selling Western goods, but the price of each foodstuff does not quite match the amount of money paid to Hassel. Leitzka is currently not gainfully employed either. So the origin of these two portions of ham is not explained by the current circumstances.</i>",
    opts: {
      choices: [
        {
          content: `You document the evidence.`,
          line: "[awt]<jmp>a1b",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a10a",
        },
      ],
    },
  },
  a1b: "[msg{INV}]EV1-1",
  a2b: "[res]",
  a10a: "[say]You observe Leitzka turn on the radio and start drinking coffee.",
  a11a:
    "[say]You observe Leitzka leave the kitchen and go into the hallway where there are no cameras to continue surveillance, analysis of the noises from audio match normal bathroom bodily activities. Audio analysis is difficult due to the sound of the radio drowning out the unseen activity.",
  a12a: {
    instruction: "dec",
    content:
      "You observe Leitzka continues to be away from camera view, presumably having left the bathroom and stay in one of the two bedrooms of the residence. Audio analysis is inconclusive as to what she is doing, again, due to the sound of the radio in the kitchen. <br/><br/> <i>Common activity of citizens, whether on direct surveillance or not is to attempt to drown out their noises beneath the sounds of radio and television. This practice could be of note on a subject for subversion.</i>",
    opts: {
      choices: [
        {
          content: `You document the evidence.`,
          line: "[awt]<jmp>a1c",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a13a",
        },
      ],
    },
  },
  a1c: "[msg{INV}]EV1-2",
  a2c: "[res]",
  a13a:
    '[say]The door opens on the camera feed pointing to the living room, in comes another individual, presumably Mr. Hassel. "Albert?" Leitzka asks from a room that is not in view of the surveillance equipment. "Yes Nadine, it\'s me." the man answers. Confirmed the individual to be Albert Hassel.',
  a14a: {
    instruction: "dec",
    content: `You observe Hassel greet Lietzka, take his coat off and leave it by one of two sofas in the living room.<br/><br/><i>This is non-standard, however Hassel's dossier does denote that he did buy off a certain cadre of items from a friend who moved away to [REDACTED] on assignment.One of these items might be the sofa.</i>`,
    opts: {
      choices: [
        {
          content: `You document the evidence.`,
          line: "[awt]<jmp>a1d",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a15a",
        },
      ],
    },
  },
  a1d: "[msg{INV}]EV1-3",
  a2d: "[res]",
  a15a:
    '[say]You observe Hassel sit on the sofa, relaxing his belt buckle. "Could you turn that thing off, Nadine? I grow tired of the same shrill voice saying the same things over and over." Lietzka complies, and turns the radio off. Audio analysis is no longer a challenge.',
  a16a:
    '[say]"So," Lietzka inquires. "Have you gotten anything back from State Security? You know, for the exit visas?" ',
  a17a:
    '[say]"Ugh," Hassel grunts. "No, let\'s not talk about that right now Nadine. I have had enough with Gerhart\'s prodding and pulling and all these-- these little grubby things that get in the way of accomplishing anything in a single day of work." Lietzka stands by the kitchen door, arms crossed. She is not satisfied with Hassel\'s evasive answer. After a brief moment of silence, Lietzka storms off to the kitchen, throws the meal on a plate, then comes back to the living room and slams it in front of Hassel on the living room table. The noise is very sharp. It stings to hear through the headphones.',
  a18a:
    '[say]"Could you have a tantrum with your own belongings, Nadine? You know, instead of mine?" Hassel chides, as he grabs the plate and a fork to eat.',
  a19a:
    "[say]\"I don't believe I asked you about that grubby boss of yours, Albert. I don't want to think about that man's smell of week-old tobacco.\" Leitzka snarls back. \"I am asking about exit visas, for you, and me. I have been asking for exit visas for three months now. Laurie from a floor above only had to wait for a month, Albert. Quite frankly I don't understand why am I more upset than you, since the Ministry is clearly interrogating your... kindergarden teacher or something.\"",
  a20a:
    '[say]Hassel sighs in exasperation, and speaks in between chews. "Look, I don\'t know what to tell you. I have gone to my nearest State Security Office, you know, the one by the movie theater?" Lietzka nods in agreement. "Been going three times a day since I put in the papers to get exit visas. The man at the door already knows me by name, for God\'s sake. And it\'s always the same answer, no matter what."',
  a21a:
    '[say]"Your petition is currently being reviewed by Security authorities, an ongoing petition is not a subsitute for a visa." Nadine recites as if out of a prayer book.',
  a22a:
    '[say]"Clearly a you are a spitting image of the comrade." Hassel gets up and pecks Leitzka with a kiss. "But on a much closer appraisal, you are much better looking."',
  a23a:
    '[say]Leitzka chuckles as she pulls a chair from the kitchen to sit at a ninety-degree angle from Hassel. "Oh you, don\'t say that," she says in a playful tone "at this point saying any party member is less than an Adonis might be a crime and... you never know who\'s listening."',
  a24a: {
    instruction: "dec",
    content: `\"I don't know what is with the Ministry,\" He says, returning the couch to finish his plate. \"I ask for something that I have a right to ask for. I have never done or said anything against doctrine. I attend every meeting of my local chapter, I am a volunteer tutor for the school... I may not be a chipper beaver inside the Party, but I haven't done anything wrong either! Security's just run by a nut job. As it always has.\" <br/><br/><i>Subversive attitude against the State apparatus detected.</i>`,
    opts: {
      choices: [
        {
          content: `You document the evidence.`,
          line: "[awt]<jmp>a1e",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a25a",
        },
      ],
    },
  },
  a1e: "[msg{INV}]EV1-4",
  a2e: "[res]",
  a25a:
    '[say]"Don\'t lie, Albert." Leitzka says. "It\'s not every single Party meeting."',
  a26a:
    "[say]\"Well, neither does Laurie's husband. No, no, h-he-he gets his things the old fashioned way, from a cousin of someone up in Border Troops high command. It's all the same everywhere, all the time. Some Party we got, eh.\" Hassel, says.",
  a27a:
    "[say]Leitzka mouths something that is not visible to the camera, nor loud enough to make out.",
  a28a:
    "[say]\"Let's watch some television, Nadine. Ok?\" Hassel says as you observe him reach out to Leitzka's shoulder, she responds leaning into him.",
  a29a:
    "[say]You observe both of them sit on the sofa and turn on the television set. They watch television in silence for the following two hours, without much to note or observe.",
  a30a:
    "[say]You observe Hassel break the silence. \"I wish you'd tell me what's the rush in getting an exit visa. I know it's important, but these things th-the-they take time.\" ",
  a31a:
    "[say]\"I hope you're not one of those tattletale stooges in the Party who tell on every Dick and Jane in hopes to get a promotion. You're in too deep for that. I just want to leave in the same train you do.\"",
  a32a:
    "[say]You observe that after this conversation, Hassel does not say a word. Neither does Leitzka. They both retire to their room, with no further activity of note.",
  a33a:"[end]"
  };
export default script;
