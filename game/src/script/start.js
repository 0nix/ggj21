const script = {
  e: {
    instruction: "dec",
    content:
      "The disembodied voice chimes in with a flat tone, carefuly manicured to not reflect any kind of emotion from the speaker box on the hallway.<br/><br/>Designation. State Protection Agent.<br/><br/>Identifier. Eight-Red-Zero-Whiskey-One-Seven-One-Three. Acknowledge.",
    opts: {
      choices: [
        {
          content: "Eight-Red-Zero-Whiskey-One-Seven-Three. Acknowledged.",
          line: "[jmp]n1",
        },
        {
          content: "You say nothing.",
          line: "[jmp]decEnd",
        },
      ],
    },
  },
  decEnd: "[add{lambda_leader_player}]-1",
  lp: {
    instruction: "dec",
    content: `After a brief silence, the disembodied monotone voice chimes in again.<br/><br/>"To continue with State Security Proceeding 1138, Agent must identify to proceed. In accordance with State Security Ministry Protocol Alpha-Charlie-One-One-Five Dot Four-Five-Zulu."<br/><br/>"Designation. State Protection Agent."<br/><br/>"Identifier. Eight-Red-Zero-Whiskey-One-Seven-Three. Acknowledge."`,
    opts: {
      choices: [
        {
          content: "Eight-Red-Zero-Whiskey-One-Seven-Three. Acknowledged.",
          line: "[jmp]n1",
        },
        {
          content: "You remain silent again.",
          line: "[jmp]lp",
        },
      ],
    },
  },
  n1: {
    instruction: "dec",
    content: `A loud buzz drones in your ears, and an equally heavy mechanical latch springs to life, signaling that you are allowed entry. It's a room painted a milky white with a metal table and two chairs on oppsite ends. The light pouring in from the cube-glass window allows you to see the person on the other side of the room. <br/><br/>Its a man clad in olive green, a somewhat faded military uniform, patched in places and coming undone in others. He did not carry the patches or the insignias that followed his authority. He doesn't even look authoritative himself: A cueball head without a hair sticking out, with a face like a crow framed by small circular spectacles, and eyes sunken in so deep you can barely see the color in his pupils.<br/><br/>No patches to identify him.<br/><br/>He doesn't need to be.`,
    opts: {
      choices: [
        {
          content: `"Lieutenant Sessler, sir." You say, saluting him swiftly`,
          line: "[jmp]ce",
        },
        {
          content: "You say nothing.",
          line: "[jmp]lp1a",
        },
      ],
    },
  },
  lp1a: `[say]The man in the olive green uniform stares at you from across the table. His lips unmoveable, his eyes boring into the wall behind your head. <br/><br/> Not a word is exchanged for a few minutes that felt like an eternity. <br/><br/> He clears his throat, and lick his lips.From how he's leaning forward, there is a note of displeasure about him. <br/><br/>"I asked for an operating Agent, not a damn greenhorn that doesn't know its place. But, it seems that today is a day of surprises for me. I should warn you, mine will not be of your liking." You apologize.<br/><br/> Sessler nods and grunts something you can't quite understand, motioning towards the chair in front of you.`,
  lp2a: "[dia{The voice of Reason}]<i>Your actions will have irreversible consequences on the reputation you have with certain characters in the game. The Ministry for State Security is not kind to breaches in protocol, nor sub-standard performance. However, the right choices will ingratiate you to your superiors.</i>",
  lp3a: "[add{lambda_leader_player}]-1",
  lp4a: "[sto{diag_choices_clear}]1",
  ce: {
    instruction: "dec",
    content: `Lieutenant Bryce produces a manila folder from his coat, and opens it with delicacy. "Agent Eight-Red-Zero-Whiskey-One-Seven-One-Three... " he murmurs.<br/><br/>"8R0W..1713" he muses, eyeing over what no doubt is your previous record at the Ministry. He smirks.<br/><br/>"They actually spelled something your designation, Agent. Brownie, right? It spells Brownie." He chuckles.<br/><br/>"What do you think, *Brownie*?" He asks you, mockery in his tongue, leaning into that word like a drunk idiot onto a wall.`,
    opts: {
      choices: [
        {
          content: `You go along with the joke.`,
          line: "[jmp]ceb",
        },
        {
          content: "You say nothing.",
          line: "[jmp]cebb",
        },
      ],
    },
  },
  cebb: "[say]You sit there, quiet as a rock. Lieutenant Sessler sits in that silence with you, a comedian waiting for an audience to react to a joke that had no reaction whatsoever.<br/><br/>After twenty seconds that feel like two thousand, he coughs and proceeds with the briefing.<br/><br/>He picks up a couple of papers attached together with a clip and slides them across the table to you.",
  cebb2b: "[add{lambda_leader_player}]-1",
  cebb3b: "[eq{diag_choices_clear}]1=<jmp>ceb",
  cebb4b:
    "[dia{The voice of Reason}]<i>Your actions will have irreversible consequences on the reputation you have with certain characters in the game. The Ministry for State Security is not kind to breaches in protocol, nor sub-standard performance. However, the right choices will ingratiate you to your superiors.</i>",
  ceb: `[say]With a brief chuckle, you respond. "I had not thought about that, sir. Internal Services must have quite the sense of humor then."<br/><br/>Sessler grunts in approval. He picks up a couple of papers attached together with a clip and slides them across the table to you.`,
  ceb1a: "[add{lambda_leader_player}]1",
  ceb2a: "[eq{diag_choices_clear}]1=<jmp>f",
  ceb3a:
    "[dia{The voice of Reason}]<i>Your actions will have irreversible consequences on the reputation you have with certain characters in the game. The Ministry for State Security is not kind to breaches in protocol, nor sub-standard performance. However, the right choices will ingratiate you to your superiors.</i>",
  f: `[say]The papers contain the dossier of two perfect strangers: A man and a woman. Attached to their pictures are perfectly manicured typewritten messages, with scribblings and diagrams for a standard State Security Ministry surveillance job. The site is a two-bedroom flat in Fredericksfield.`,
  f2a: `[say]The man looked to be about fourty years old. Mousy appearance, like he feared even being seen away from home. The thick, kettle-black frame of a state-issued pair of eyeglasses is unmistakable - completely round, and able to withstand a nuclear blast along with the cockroaches`,
  f3a: `[say]The woman looked a lot more alive, so to speak. Could not be a day above thirty years old. Frazzled, messy hair framed a heart-shaped face. But those eyes. She looked as if the she was daring the man taking her picture at the Registration Office to a fight.`,
  f4a: `[say]"These two are your new assignment, Agent Brownie." Sessler said with a snicker.`,
  f5a: `[say]"Their names are Albert Hassel and Nadine Leitzka. They cohabitate in the same flat together. We have suspsicions that Mr. Hassel is a part of the United Left organization. If our preliminary investigations are correct, he is the distrbutor of anti-government literature and subversive operations against the state and her institutions. We also suspect that Ms. Leitzka may not be living with Mr. Hassel of her own volition, but rather on the threat of blackmail." Sessler says.`,
  f6a: {
    instruction: "dec",
    content:
      "Usually, this kind of operation would require an increased amount of resources and equipment. However, we are also aware that United Left plans a larger operation in six days. Which means you have four days to acquire information on Mr. Hassel's activities.",
    opts: {
      choices: [
        {
          content: `"Three days?" You say. "Just usher him into the nearest station whenever he's out eating lunch, and interrogate the man." `,
          line: "[jmp]f1b",
        },
        {
          content: `"Three days, huh?" You say. "That's not nearly enough to obtain an official warrant. Wouldn't that make Sergeant Bayer angry?" `,
          line: "[jmp]f1c",
        },
      ],
    },
  },
  f1b: `[say]Lieutenant Sessler grunts in agreement. "If this were a year or two ago, Brownie, I wouldn't even bother with it. But I'm in no mood to anger Sargeant Bayer. If you know that pencil-pushing prick, neither would you. Our Party wants results, not just a bunch of Misters So-and-so locked up, eating, and doing nothing," he says.`,
  f2b: `[say]He stops to look at you in the eye, "I agree with you Brownie, as much as I'd like to simply arrest the man, we will need enough evidence for a formal arrest in three days and you will provide it." He snickers one last time as he calls you that name.`,
  f3b: `[add{lambda_leader_player}]1`,
  f5b: "[jmp]g1a",
  f1c: `[say]Lieutenant Sessler grunts, annoyed. "If this were a year or two ago, Brownie, I wouldn't even bother with it.  But I'm in no mood to anger Sargeant Bayer. If you know that pencil-pushing, traitor-spawn prick, neither would you. After all, our Party wants results, as if we didn't get them already." Spite laced his last words.`,
  f2c: `[say]He stops a moment and looks at you in the eye, "As much as I'd like to simply arrest the man, Bayer won't have it. We can't do it the way we used to, and men like him will make sure that the best days of this organization are behind us. We will need enough evidence for a formal arrest in three days and you will provide it, Brownie."<br/><br/>He paused just to let that sting in a bit deeper. "No pressure, though." Sessler remarks, snidely.`,
  f3c: "[add{lambda_super_player}]1",
  g1a: `[say]Leiutenant Sessler rises, his metal chair scrapes with a shriek against the floor like a violin crying for help. You get up as well.`,
  g3a: `[say]"You will report to Sergeant Bayer immediately, give him Form 451F to confirm your assignment and he will write the paperwork for you to take over monitoring Hassel's flat and workplace. After that, head over immediately to the Field Office in the ground floor of his apartment building to begin your assignment." Sessler says as he leaves the room. You follow suit from another door beside you.`,
  g4a: `[say]As he walks away, Sessler shouts at you "We are the Sword and Shield, Agent. The Sword and the Shield of the Party! Don't you forget it!" His partisan platitudes echo throughout the building. As big a deal as Sessler is, he still has to lick boots and do so publicly. It would be hilarious, were it not for the fact that you have to do that too on occasion.`,
  e1a: `[say]On the other side of Division VIII, Surveillance of Suspicious Citizens, is Sergeant Bayer's office. You double time it, and by the time you get there you have worked up a bit of a sweat and ragged breath.`,
  e2a: `[say]There's only a few details you know of Sergeant Bayer: He recently left Division XIX with good notes and recommendation from Party leaders. A week into his new job, he caught an Anti-Party element in Division VIII because he noticed the suspect was humming a foreign song. He never acquired the services of a secretary, odd for a man of his position. A knock on the door gets you in front of the man immedately.`,
  e2b: `[say]You find an office with the walls decorated in sigils and commendations, all in warm, patriotic colors. Sergeant Bayer sat behind a rusted metal desk clacking away at a typewriter, the surface of his workstation covered in a mountain of papework, stamps, folders, paperclips, and pictures. But even in all that workload, it looked imppecable. Bayer himself looks like he could have walked out of a propaganda poster: A wide square of a man clad in perfectly pressed and kept olive green, proudly displaying his designations and ribbons, buttons as shiny as the day he had received his jacket. His blone buzz cut looked manicured to the milimeter and perfectly symmetrical. He looks at you with a pair of bloodshot grey eyes, as if he had not blinked in a week. He gesticulates at you to close the door.`,
  e3a: `[say]You hand him the piece of paper signed with Sessler's name, and he quickly scans it.`,
  e4a: `[say]"May I have the rest of the documentation, Agent?" You obey.`,
  e5a: {
    instruction: "dec",
    content: `"Typical Sessler operation. If it were up to him he'd try to get nine women pregnant to deliver a baby in a month. Looks like you've drawn the short stick, Agent 8R0W1713."`,
    opts: {
      choices: [
        {
          content: `"I said the same thing sir. But, I welcome the challenge."`,
          line: "[jmp]e1b",
        },
        {
          content: `"For subjects of surveillance in Division VIII, better to have ten innocents than one enemy of the state free."`,
          line: "[jmp]e1c",
        },
      ],
    },
  },
  e1b: `[say]Sargeant Bayer hums in agreement. "I welcome the enthusiasm... and your candor, Agent 8R0W173. I am not satisfied with jobs done with crayons and kraft paper, let alone have one more wailing Joe Blow in a cell for looking in the wrong direction. A jailed, good worker is an unproductive good worker."`,
  e2b: "[add{ lambda_super_player }]1",
  e3b: "[jmp]h1a",
  e1c: `[say]Sargeant Bayer grunts, and starts speaking with slow, calculated aggresion. "I am not satisfied with jobs done with crayons and kraft paper, Agent 8R0W173. Let alone have one more wailing Joe Blow in a cell yelling about his innocence until he doesn't have a voice because you or Lietuant Sessler think the coffers of this Nation are infinite, and her bounty without limit. It may have been how Division VIII conducted itself before, but I am not them and this is not going to happen today."`,
  e2c: "[add{ lambda_super_player }]-1",
  h1a: `[say]"I have to say," Sargeant Bayer says with a huff "the alacrity of this operation that Sessler has assigned to you is odd, not to mention skirting into illegality. We are the sword and shield of the State, Agent 8R0W713. Not a roving band of thugs."`,
  h2a: `[say]He stops speaking, leans back on his chair. He meditates and you stay silent as well. He rubs his chin back and forward, the room is so quiet you can hear the birstles of his stubble scratch against his hand. After what seems like an eternity, he produces another set of forms his cabinet and starts to fill them out with a sort of aggresion. You don't know how we does it, but he writes loudly. He puts the final, angry flourish on a signature and hands you a set of papers that are still hot.`,

  h3a: `[say]"Agent 8R0W713, you are hererby assigned an additional task. I suspect that Sessler wants something that is not entirely within  out of this. As you report at the end of every workday in the surveillance of this Mr. Hassel and Ms. Leitzka I will join the briefing. I expect you to truthful of what you see. I will not accept an officer that uses the State as his personal cudgel. If I am correct, I will require evidence to make the claim. Counter-intelligence would be thrilled to find a little tyrant in the company, and you will be rewarded for it.`,
  h4a: `[say]As soon as you grab them, he motions you out of his office.`,
  h5a: `[say]"Do your job well, Agent 8R0W713." He shouts as you close the heavy metal door. "None shall stand above the law of this Nation. Not even one of Her faithful servants."`,
  h6a: "[lxs]day1",
};
export default script;
