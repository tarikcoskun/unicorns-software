export interface SaveFile {
  "Game Version":                                number
  "Room":                                        number
  "Deaths":                                      number
  "Difficulty":                                  Difficulty
  "Played Voice Lines":                          string[]
  "Difficulty Settings Unlocked":                NumberBool
  "Level Data: Deaths":                          number[]
  "Level Data: Playtime":                        number[]
  "Level Data: Unlocked":                        (number | NumberBool)[]
  "Level Data: Beaten On Difficulty":            number[]
  "Level Data: Beaten On Difficulty Underwater": number[]
  "Level Data: Autodiff-Playtime":               number[]
  "Level Data: Autodiff-Deaths":                 number[]
  "Autodiff Levels Till Increase":               number
  "Timer Game":                                  number
  "Timer Chapter":                               number
  "Current Chapter":                             number
  "Timer Level":                                 number
  "Exploration Mode":                            NumberBool
  "Collected Exploration Points":                string[]
  "Game Speed":                                  number
  "Training Mode":                               NumberBool
  "Unlocked Dialogs":                            string[]
  "Hat":                                         Hat
  "Heart Fixed":                                 NumberBool
  "Final Credits Reached":                       NumberBool
  "Pump Inverted":                               NumberBool
  "Speedrun Is Still Legit":                     NumberBool
  "Anger Game Level":                            number
  "Anger Game XP":                               number
  "Auto Difficulty":                             NumberBool
  "Fixed Jump Height":                           NumberBool
}

type NumberBool =
  | 0 // False
  | 1 // True

type Difficulty =
  | 0 // Infinitely easy
  | 1 // Extremely easy
  | 2 // Very easy
  | 3 // Easy

type Hat =
  | -1 // None
  |  0 // Fedora
  |  1 // Lil' Shelly
  |  2 // Unicorn horn
  |  3 // Human rider
  |  4 // Christmas hat
  |  5 // Lil' Squid
  |  6 // Poop