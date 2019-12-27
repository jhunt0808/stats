const players = [
  {
    "Last": "Borzillo",
    "First": "Matt"
  },
  {
    "Last": "Brennecke",
    "First": "Adam"
  },
  {
    "Last": "Brennecke",
    "First": "Curtis"
  },
  {
    "Last": "Brinkley",
    "First": "Jake"
  },
  {
    "Last": "Brinkley",
    "First": "Ron"
  },
  {
    "Last": "Brinkley",
    "First": "Zack"
  },
  {
    "Last": "Caplinger",
    "First": "Jared"
  },
  {
    "Last": "Dragonic",
    "First": "John"
  },
  {
    "Last": "Freund",
    "First": "Tony"
  },
  {
    "Last": "Glass",
    "First": "Dan"
  },
  {
    "Last": "Glesne",
    "First": "Jared"
  },
  {
    "Last": "Goldschmidt",
    "First": "Brett"
  },
  {
    "Last": "Graham",
    "First": "Steve"
  },
  {
    "Last": "Hankins",
    "First": "Robert"
  },
  {
    "Last": "Hessel",
    "First": "John"
  },
  {
    "Last": "Hunt",
    "First": "Josh"
  },
  {
    "Last": "Jackson",
    "First": "Garrett"
  },
  {
    "Last": "Johnson",
    "First": "Brad"
  },
  {
    "Last": "Kimberlin",
    "First": "Wes"
  },
  {
    "Last": "Kolcharno",
    "First": "Scott"
  },
  {
    "Last": "Kromann",
    "First": "Ryan"
  },
  {
    "Last": "Lawson",
    "First": "Corey"
  },
  {
    "Last": "Lehenbauer",
    "First": "Adam"
  },
  {
    "Last": "Lloyd",
    "First": "Pat"
  },
  {
    "Last": "Lukens",
    "First": "Matt"
  },
  {
    "Last": "Maledy",
    "First": "Dave"
  },
  {
    "Last": "McElyea",
    "First": "Terry"
  },
  {
    "Last": "Moen",
    "First": "Caleb"
  },
  {
    "Last": "Niemeyer",
    "First": "Todd"
  },
  {
    "Last": "Olsen",
    "First": "Dan"
  },
  {
    "Last": "Pinkleton",
    "First": "Mark"
  },
  {
    "Last": "Politte",
    "First": "Brady"
  },
  {
    "Last": "Preston",
    "First": "Scott"
  },
  {
    "Last": "Rodgers",
    "First": "Jeff"
  },
  {
    "Last": "Schuchardt",
    "First": "Jake"
  },
  {
    "Last": "T",
    "First": "Josh"
  },
  {
    "Last": "Tabis",
    "First": "Ryan"
  },
  {
    "Last": "Underhill",
    "First": "Jeremy"
  },
  {
    "Last": "Vinson",
    "First": "Rich"
  },
  {
    "Last": "Wells",
    "First": "Tyler"
  },
  {
    "Last": "Wiele",
    "First": "Danny"
  },
  {
    "Last": "Wilson",
    "First": "Joel"
  },
  {
    "Last": "Wolfe",
    "First": "Jay"
  },
  {
    "Last": "Woodhead",
    "First": "Ben"
  },
  {
    "Last": "Yarnall",
    "First": "Ben"
  },
  {
    "Last": "",
    "First": "Aaron"
  },
  {
    "Last": "",
    "First": "Brandon"
  },
  {
    "Last": "",
    "First": "Brian"
  },
  {
    "Last": "",
    "First": "Brian"
  },
  {
    "Last": "",
    "First": "Chad"
  },
  {
    "Last": "",
    "First": "Curt"
  },
  {
    "Last": "",
    "First": "Dillon"
  },
  {
    "Last": "",
    "First": "Jimmy"
  },
  {
    "Last": "",
    "First": "Ken"
  },
  {
    "Last": "",
    "First": "Morgan"
  },
  {
    "Last": "",
    "First": "Nate"
  },
  {
    "Last": "",
    "First": "Rob"
  },
  {
    "Last": "",
    "First": "Tony"
  }
]
// const players = {
//    1: {
//      Last: "Borzillo",
//      First: "Matt"
//    },
//    2: {   
//      Last: "Brennecke",
//      First: "Adam"
//    },
//    3: {   
//      Last: "Brennecke",
//      First: "Curtis"
//    },
//    4: {   
//      Last: "Brinkley",
//      First: "Jake"
//    },
//    5: {   
//      Last: "Brinkley",
//      First: "Ron"
//    },
//    6: {   
//      Last: "Brinkley",
//      First: "Zack"
//    },
//    7: {   
//      Last: "Caplinger",
//      First: "Jared"
//    },
//    8: {   
//      Last: "Dragonic",
//      First: "John"
//    },
//    9: {   
//      Last: "Freund",
//      First: "Tony"
//    },
//    10: {   
//      Last: "Glass",
//      First: "Dan"
//    },
//    11: {   
//      Last: "Glesne",
//      First: "Jared"
//    },
//    12: {   
//      Last: "Goldschmidt",
//      First: "Brett"
//    },
//    13: {   
//      Last: "Graham",
//      First: "Steve"
//    },
//    14: {   
//      Last: "Hankins",
//      First: "Robert"
//    },
//    15: {   
//      Last: "Hessel",
//      First: "John"
//    },
//    16: {   
//      Last: "Hunt",
//      First: "Josh"
//    },
//    17: {   
//      Last: "Jackson",
//      First: "Garrett"
//    },
//    18: {   
//      Last: "Johnson",
//      First: "Brad"
//    },
//    19: {   
//      Last: "Kimberlin",
//      First: "Wes"
//    },
//    20: {   
//      Last: "Kolcharno",
//      First: "Scott"
//    },
//    21: {   
//      Last: "Kromann",
//      First: "Ryan"
//    },
//    22: {   
//      Last: "Lawson",
//      First: "Corey"
//    },
//    23: {   
//      Last: "Lehenbauer",
//      First: "Adam"
//    },
//    24: {   
//      Last: "Lloyd",
//      First: "Pat"
//    },
//    25: {   
//      Last: "Lukens",
//      First: "Matt"
//    },
//    26: {   
//      Last: "Maledy",
//      First: "Dave"
//    },
//    27: {   
//      Last: "McElyea",
//      First: "Terry"
//    },
//    28: {   
//      Last: "Moen",
//      First: "Caleb"
//    },
//    29: {   
//      Last: "Niemeyer",
//      First: "Todd"
//    },
//    30: {   
//      Last: "Olsen",
//      First: "Dan"
//    },
//    31: {   
//      Last: "Pinkleton",
//      First: "Mark"
//    },
//    32: {   
//      Last: "Politte",
//      First: "Brady"
//    },
//    33: {   
//      Last: "Preston",
//      First: "Scott"
//    },
//    34: {   
//      Last: "Rodgers",
//      First: "Jeff"
//    },
//    35: {   
//      Last: "Schuchardt",
//      First: "Jake"
//    },
//    36: {   
//      Last: "T",
//      First: "Josh"
//    },
//    37: {   
//      Last: "Tabis",
//      First: "Ryan"
//    },
//    38: {   
//      Last: "Underhill",
//      First: "Jeremy"
//    },
//    39: {   
//      Last: "Vinson",
//      First: "Rich"
//    },
//    40: {   
//      Last: "Wells",
//      First: "Tyler"
//    },
//    41: {   
//      Last: "Wiele",
//      First: "Danny"
//    },
//    42: {   
//      Last: "Wilson",
//      First: "Joel"
//    },
//    43: {   
//      Last: "Wolfe",
//      First: "Jay"
//    },
//    44: {   
//      Last: "Woodhead",
//      First: "Ben"
//    },
//    45: {   
//      Last: "Yarnall",
//      First: "Ben"
//    },
//    46: {   
//      Last: "",
//      First: "Aaron"
//    },
//    47: {   
//      Last: "",
//      First: "Brandon"
//    },
//    48: {   
//      Last: "",
//      First: "Brian"
//    },
//    49: {   
//      Last: "",
//      First: "Brian"
//    },
//    50: {   
//      Last: "",
//      First: "Chad"
//    },
//    51: {   
//      Last: "",
//      First: "Curt"
//    },
//    52: {   
//      Last: "",
//      First: "Dillon"
//    },
//    53: {   
//      Last: "",
//      First: "Jimmy"
//    },
//    54: {   
//      Last: "",
//      First: "Ken"
//    },
//    55: {   
//      Last: "",
//      First: "Morgan"
//    },
//    56: {   
//      Last: "",
//      First: "Nate"
//    },
//    57: {   
//      Last: "",
//      First: "Rob"
//    },
//    58: {   
//      Last: "",
//      First: "Tony"
//    }
//  }

export default players;