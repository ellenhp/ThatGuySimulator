thatGuyGrammarDefinition = {
  "language": ["Java", "Python", "C", "C++", "JavaScript", "Matlab", "C#", "Swift", "Objective-C", "SQL"],
  "frameworkeyThing": ["dot NET", "Amazon AWS", "TensorFlow"],
  "technologyThing": ["#language#", "#frameworkeyThing#"],
  "programmingTask": ["natural language processing", "deep learning", "scientific computing", "web development"],
  "company": ["Google", "Apple", "Microsoft", "Intel", "Twitter", "Facebook"],
  "earlyAgeNumber": "6,7,8,9,10".split(","),
  "earlyAge": ["I was #earlyAgeNumber#", "age #earlyAgeNumber#", "I was in #earlyAgeNumber#th grade", "I could walk", "before I could walk"],

  "pedanticIntro": ["Well actually,", "That's actually not correct.", "I already told you.", "Didn't I already explain that?", "I just told you that.", "You don't already know?", "How have you gotten this far without learning that?", "You really should know this by now", "Let me explain it again.", "You should reconsider your career path if you still don't get this."],
  "factInterjection": ["You didn't already know?", "You probably didn't realize it, but",],
  "takingChargeInterjection": ["Just give me the computer.", "Why don't I try?", "I'll handle this."],

  "badOpinion": ["#language# is a slow language.", "#language# is the best programming language.", "You should always use #technologyThing# for #programmingTask#."],

  //These should be lowercase
  "braggingClause": ["I've been programming since #earlyAge#", "I've used #technologyThing# before", "I'm an expert in #technologyThing#", "I've learned eight different languages in the past month.", "my Github page has 117 followers", "me and #technologyThing# go way back", "I've been using #technologyThing# since #earlyAge#", "#programmingTask# comes naturally to me", "last summer I used #technologyThing# to do #programmingTask# at #company#"],

  "abilityAttackSentence": ["This is taking forever.", "It'll be faster that way.", "I know how to do this.",
                    "Have you never used #technologyThing# before?",
                    "I think I have a better understanding of #technologyThing#."],

  "postTakingCharge": ["#braggingClause.capitalize#", "#abilityAttackSentence#"],

  "justificationForBeingADick": ["", "I know what I'm talking about because #braggingClause#.", "#braggingClause.capitalize# so I definitely know what I'm talking about.", "Listen to me--#braggingClause#."],

  "mansplaination" : ["#pedanticIntro# #badOpinion#", "#takingChargeInterjection# #abilityAttackSentence#"],
  "origin" : ["#mansplaination# #justificationForBeingADick#", "#mansplaination#"]
}

thatGuyGrammar = undefined

function simulateThatGuy() {
  if (thatGuyGrammar == undefined) {
    thatGuyGrammar = tracery.createGrammar(thatGuyGrammarDefinition)
  }
  return thatGuyGrammar.flatten("#origin#")
}
