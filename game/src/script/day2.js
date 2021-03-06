const script = {
  a34a: "[say]Surveillance starts at 0500 hours on Wednesday, March 10th.",
  a35a:
    "[say]Hassel wakes up at 0630 hours, followed by Lietzka shortly thereafter.",
  a36a:
    "[say]You observe subjects Lietzka and Hassel exchange pleasentries over breakfast prepared by Lietzka. From the objects obserbed to be taken from the refrigerator, it is an egg-based breakfast. More to follow. Casual conversation follows, over the morning radio broadcast. ",
  a37a:
    "[say]At around 0730, you observe a phone call is made to Hassel's residence. Previous surveillance indicates the call is from The People's Electronics Fabricant, approximately 700 meters away from the Hassel surveillance site, Hassel's workplace. On the other line is Hassel's boss, citizen Gerhart Kleiner, Head of Day-Shift Production. The conversation is as follows:",
  a38a:
    "[say]Hassel (H): This is Albert Hassel, number HXT9115. To who am I speaking?",
  a39a:
    "[say]Kleiner (K): Yes, Hassel. This is Kleiner, I need to speak to you about the papers you submitted for a promotion. I don't know what dirt you have on that blowhard Mayer, but it worked. You will be promoted to Engineer Team Lead, beginning next semester. ",
  a40a:
    "[say]H: Ah, Mr. Kleiner! That is the best news I have heard in a long time.",
  a41a:
    "[say]K: Yeah, yeah. Probably you should start packing but not quickly, who knows when Housing is going to assign you your new flat. Even though they should. Don't get too comfortable though, the Party is breathing down my neck.",
  a42a: "[say]H: How so?",
  a43a:
    "[say]K: Well, you haven't been a good enough boy, Hassel. What do you want me to say? You're a no-show at your local Party meetings, and even if you say you tutor children as volunteer work that's not going to be enough in your new position. You know, they might actually block your promotion if you don't show your face around at least.",
  a44a:
    "[say]H: Oh c'mon Kleiner, a man's got to have some peace and quiet! I get back home, and I have cook my meals, sweep my floors... I got things to do other than sit every week for two or three hours to hear some patsy from Berlin-",
  a45a:
    "[say]K: Don't you be starting now, you never know who's listening. At any rate, the Party wants your face in their offices as soon as possible. Have something to hand them, anything will do.",
  a46a:
    "[say]H: That how you got ahead Mr. Keliner? Making stuff up and hoping nobody catches on?",
  a47a:
    "[say]K: I swear to God boy, it's like you're begging to be taken away. I am not answering that.",
  a48a:
    "[say]H: My mistake, my mistake. I got some legitimate to show at the Party offices so I'll pop over there after I'm done working.",
  a49a:
    "[say]K: Nah, we're so close to *meeting* our production quotas for the year it isn't worth it to even turn on the machines. Leadership decided to give the day off to everyone, and I'd rather save you the nasty surprise of coming to the factory to an empty floor. It's probably going to take you the whole day at the Party offices anyway.",
  a50a:
    "[say]H: Really? How is everyone else going to know the factory's closed?",
  a51a:
    "[say]K: Does that sound like my problem, Hassel? I am giving you a courtesy call, that should be enough for you.",
  a52a:
    "[say]H: That's fine Kleiner, always a pleasure talking to you and thank you for the heads up.",
  a53a: {
    instruction: "dec",
    content:
      `Before hanging up, the microphone on the phone picks up Hassel muttering "Little tyrant..." <br/><br/> <i>Prospect for a promotion does not really reflect a subersive element for the intergity of the State.</i>`,
    opts: {
      choices: [
        {
          content: `You document the evidence.`,
          line: "[awt]<jmp>a1b",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a54a",
        },
      ],
    },
  },
  a1b:"[msg{INV}]EV2-1",
  a2b:"[res]",
  a54a:
    '[say]You observe Lietzka take notice of the conversation that just transpired. "Good news, from the looks of it." She comments.',
  a55a:
    '[say]Hassel sits down and takes a bite of his nondescript breakfast. "Uhm, yes. Looks like I will be getting a promotion come June. Before that I have to make good with the Party. If I show up we might actually see those exit visas, finally." He responds.',
  a56a: {
    instruction: "dec",
    content:
      `Well that\'s dandy." Lietzka says. This is the first time you have observed her smile since coming across her dossier and surveillance started. "I guess you and that Gerhart made like thieves with the production numbers, if they\'re so good they\'re giving off holidays like they were bargains." She comments.  <br/><br/> <i>Lying about meeting production quotas is a serious offense and classifed as a cause for sedition accusations. However, the investigation to prove subversion to the state through industry will not suffice the needs of the surveillance investigation.</i>`,
    opts: {
      choices: [
        {
          content: `You document the evidence.`,
          line: "[awt]<jmp>a1c",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a57a",
        },
      ],
    },
  },
  a1c: "[msg{INV}]EV2-2",
  a2c: "[res]",
  a57a:
    '[say]"For once, woud it kill you to be happy for me Nadine?" Hassel says, with a tinge of annoyance. "We have our numbers, everyone at the factory gets a new thing to put on their tables, and for once we\'re producing what we actually need to produce instead of brand new boards just sitting in warehouses where they won\'t go anywhere.  Hon-hon-honestly, it frustrates me to no end seeing something I worked so hard on sit there doing... nothing. If there is a surplus of demand, then the market will adjust if it can\'t go anywhere."',
  a58a: '[say]Leitzka smirks. "I see you\'ve been reading lover-boy." ',
  a59a:
    '[say]Hassel chuckles. "Hey, it doesn\'t hurt to take a leaf from their book every now and then."',
  a60a: "[say]Leitzka laughs lightly at that remark.",
  a61a:
    '[say]Hassel finishes his breakfast and starts to walk out the door. "I will be gone probably all day, so don\'t wait for me. You could visit Laurie, actually. You told me you enjoy her company." ',
  a62a:
    '[say]Leitzka looks dejected. "Yes, I guess..." Hassel then leaves the flat and exits the building. ',
  a63a:
    "[say]You phone the Party offices near Hassel's residence to send a Telefax to report his arrival. You give instructions to retain him as much as possible, for as long as possible. Party offices acknowledge the message, and will comply with the needs of the investigation. It's always nice when other people do your tedious work for you, in silence and contemplation.",
  a64a:
    "[say]You observe Letizka is the only person in the apartment. You observe her sit on the living room sofa and pull out a briefcase from under it. She opens it and starts shuffling around its contents. She ponders on a couple of items for a long period of time. From the faint noises you hear through the surveillance microphones, it seems that she is crying over the contents of this briefcase. ",
  a65a:
    '[say]You hear faint whispers, "One day, one day, one day" in between the sobs.',
  a66a:
    "[say]After around thirty minutes of silence and cotemplation, Leitzka puts the briefcase back under the sofa and leaves the flat.",
  a67a:
    "[say]Surveillance around the building, provided by the same Field Office, indicates that she did not visit her neighbor Laurie Weiss.One of the other agents in the Field Office noticed that she instead she decided to sit down at the nearby park and playground and pass the time in silence there. A perfect time to improve the surveillance equipment on the premises, and search for any materials that could build a case for the investigation. ",
  a68a:
    "[say]You phone the local Coordination Office and ask for a team of surveillance setups at the earliest notice. The operation has the approval from Bayer to be top priority, so they assemble who they can and send them to you. In a matter of 10 minutes, you can hear the sirens of a modified fire truck, with a distinct variation in alarm pattern, meaning it's a Stasi covert car. Ten seconds later, the team knocks on the door of the Field Office, and present themselves to you, ready to work.",
  a71a: {
    instruction: "dec",
    content:
      `The surveillance team enters the flat. At your direction, they install cameras in the remaining two bedrooms of the flat. As it happens, the map you were given was incorrect, and there is only one additional room that is not surveyed, and a bathroom that is not surveyed. Construction of the flat don't make it feasible to incorporate additional cameras without concelament in a reasonable amount of time, more microphones are placed in using the wires of existing equipment. On the living room there are two objects of interest. A book on top of the coffee table, and the briefcase Leitzka had taken from under the sofa.`,
    opts: {
      choices: [
        {
          content: `You look at the book.`,
          line: "[jmp]a1d",
        },
        {
          content: `You look at the briefcase.`,
          line: "[jmp]a1e",
        },
        {
          content: `You leave the apartment`,
          line: "[jmp]a75a"
        }
      ],
    },
  },
  a1d: {
    instruction: "dec",
    content:
      `The cover seems to indicate a perfectly normal cooking book, but one the dust jacket is removed, the true contents reveal themselves to be Freedom of Nations by Adam Smith.<br/><br/> <i>Hiding the contents of a published work is suspicious enough, the fact that it is western propaganda is even more disturbing. The publisher house on the first page of the cover is from a company in the West. This was clearly not produced here, nor was it authorized for sell in the Intershops. This is posession of unauthorized public goods.</i>`,
    opts: {
      choices: [
        {
          content: `You document the evidence.`,
          line: "[awt]<jmp>a2d",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a71a",
        },
      ],
    },
  },
  a2d:"[msg{INV}]EV2-3",
  a3d:"[res]",
  a4d:"[jmp]a71a",
  a1e:{
    instruction: "dec",
    content:
      `The briefcase reveals itself to be an assortments of various knick knacks of personal siginficance to Leitzka. On top of the pile, two items of interest. You snap a picture for the evidence file.`,
    opts: {
      choices: [
        {
          content: `There's a faded picture.`,
          line: "[jmp]a1f",
        },
        {
          content: `There's a scribbled paper.`,
          line: "[jmp]a1g",
        },
        {
          content: `You close the briefcase`,
          line: "[jmp]a71a"
        }
      ],
    },
  },
  a1f: {
    instruction: "dec",
    content:
      `A faded, sepia tone picture of a woman holding two children. The picture seems to have been taken some time ago. You take out a pocket camera and snap a picture that will record what the photo is. Given that the picture was still somewhat warm, this is most likely the object Nadine Lietzka was crying over. <br/><br/> <i>Further analysis should uncover who these people are and how are they relevant to Lietzka.</i>`,
    opts: {
      choices: [
        {
          content: `You document the evidence with your instant camera.`,
          line: "[awt]<jmp>a2f",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a1e",
        },
      ],
    },
  },
  a2f:"[msg{INV}]EV2-4",
  a3f:"[res]",
  a4f:"[jmp]a1e",
  a1g:{
    instruction: "dec",
    content:
      `A hastily scribbled diagram which is some sort of map on slight aged graphing paper. It seem to indicate a series of roads and sewer tunnels. You take out a pocket camera and snap a picture of that diagram.<br/><br/> <i>Sending the diagram for analysis should ellucidate what is this location referring to.</i>`,
    opts: {
      choices: [
        {
          content: `You document the evidence.`,
          line: "[awt]<jmp>a2g",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a1e",
        },
      ],
    },
  },
  a2g: "[msg{INV}]EV2-5",
  a3g: "[res]",
  a4g: "[jmp]a1e",

  a75a:
    "[say]You return the objects to their previous state and exit the premises with care to not have been seen inside or leave any trace of yourselves. ",
  a76a: {
    instruction: "dec",
    content:
      `Several hours later, Hassel returns to the flat with a package under his arm and places it on the kitchen table. Cameras are not able to distinguish who is the package for or what it contains.<br/><br/> <i>Subjects under direct surveillance of the Ministry of State Safety are by policy not allowed to recieve any mail unless already examined and reported to the acting surveillance Agent. This is a break in procedure.</i>`,
    opts: {
      choices: [
        {
          content: `You document the evidence.`,
          line: "[awt]<jmp>a2h",
        },
        {
          content: `You let it go.`,
          line: "[jmp]a77a",
        },
      ],
    },
  },
  a2h: "[msg{INV}]EV2-6",
  a3h: "[res]",
  a77a:
    "[say]You phone in immediately to Division XIX to ask for a status report.",
  a78a:
    "[say]Division XIX reports no parcels were addressed to Albert Hassel or Nadine Leitzka therefore there was nothing to intercept. ",
  a79a:
    "[say]Nadine Leitzka does not return until late in the evening, after Hassel had already eaten and gone to bed. You do not detect any night time activities between the two of them.",
  a80a:"[say]As you take off your heavy headphones and prepare the desk for your night shift surveillance partner, you receive a phone call from the internal Ministry network. The voice on the other end is the same monotone that had preluded the interrogation from yesterday.",
  a81a:`[say]"Agent Designation: Eight-Red-Zero-Whiskey-One-Seven-One-Three. You are required to present yourself at once to Central for dossier review following every day of operation while on assignment. Authorization. Delta-Sierra-Charlie-Hotel. Review of dossier will be conducted by Operations managers. Confirm receipt."`,
  a82a:`[say]You respond affirmatively. Fifteen minutes later, in the same office, in the same building, with the same yellow light illuminating a balding crow and a stoic rock. Two men who will decide the merits of your investigation.`,
  a83a:`[say]"Delta-Sierra interrogation day number two. I do hope that the evidence presented to day will be more fortuitous and conducive to establishing any and all culpability for Mr. Hassel." Bryce says, chewing something before spitting it out in a nearby bin.`,
  a84a:`[say]"Plausible culpability, Lieutenant Bryce." Bayer says with a stern tone. "Plausible culpability."`,
  a85a:`[say]"Excuse me, how many years have you been in service to the Ministry Sergeant Bayer?" Bryce responds, offended.`,
  a86a:`[say]"Enough to have out ranked you, Lieutenant." Bayer says in low tones, unmoved by Bryce's accusations.`,
  a87a: `[end]`,

};
export default script;
