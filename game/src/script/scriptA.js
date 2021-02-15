const script = {
    "a1": "[say]This is another script being side loaded",
    "a2": "[dia{Me}]This means the main script has been discarded",
    "a3":"[awt]<jmp>a5",
    "a4":"[say]This should not show up",
    "a5":"[msg]This message should appear and end should not move on automatically",
    "a6":"[say]This should advance the parser",
    "a8":"[msg]Thing 1",
    "a9":"[msg]Thing 2",
    "a9-1": "[res]",
    "a10": "[msg]Thing 3",
    "a11": "[msg]Thing 4",
    "a9999": "[end]"
}

export default script;