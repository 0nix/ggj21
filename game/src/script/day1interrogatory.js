const script = {
    a1a:"[neq{numItems}]0=<jmp>b1a",
    a2a: "[say]Bryce and Bayer sit on a pregnant silence as you explain that, despite what the surveillance might suggest, there was no evidence of malfeacance or wrongdoing on part of either Albert Hassel or Nadine Leitzka. They appeared to be a perfectly normal, perfectly fine couple.",
    a3a:`[say]"Agent, I'm sure that setting up an operation on such short notice is not something you may want to do every day," Bayer quizes. "But, I find it hard to believe that there was a complete lack of any evidence on either party under surveillance."`,
    a4a:`[say]"Are you trying to pull the wool over our eyes, Brownie? Is Leitzka a friend of yours? Is Hassel?" Bryce accuses, with some anger in his voice. "If so, you are entirely innappropriate for this operation and we have wasted precious resources from your lack of professionalism."`,
    a5a:`[say]"Now, now Lt. Bryce" Bayer interjects. "No such connections have been established for the Agent. I'm sure given his time in the Ministry he knows better than to keep close association with citizens should it compromise the Operation, and he is required to disclose such relationships on operations and daily briefings." He shuffles through some of the documents in your binder. <br/><br/> "Now, I don't see such a disclosure document from the Agent. If there is a such a relationship, now would be a good time to mention it."<br/><br/>You feel Bayer's absent stare sit on you like an elephant on a cushion.`,
    a6a: "[say]You respond there is no such relationship.",
    a7a: "[jmp]z1a",
    b1a:`[neq{EV1-1}]1=<jmp>c1a`,
    b2a:"[LOCKCHAR]",
    b3a:"[SETCHAR]EV1-1",

    c1a:`[neq{EV1-2}]1=<jmp>d1a`,

    d1a:`[neq{EV1-3}]1=<jmp>e1a`,

    e1a:`[neq{EV1-4}]1=<jmp>z1a`,

    z1a:"[end]"
}
export default script;