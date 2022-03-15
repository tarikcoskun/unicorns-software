import type { SaveFile, NumberBool, Difficulty, Hat } from "@/types/SaveFile"

/**
 * Returns the necessary parts of the save file.
 * @param {string} saveFile The target save file.
 * @returns {SaveFile} All the save data.
 */

export default function readSaveContent(saveFile: string): SaveFile {
  const getPos = (valueTitle: string) => content.indexOf(valueTitle)
  const getValue = (valueTitle: string) => {
    const value = <string | number>content[getPos(valueTitle) + 1]
    if (isNaN(<number>value)) return <string>value
    else return <number>Number(<string>value)
  }

  const getValues = (valueTitle: string) => {
    const valueTitleIndex = getPos(valueTitle)
    const listLength = Number(content[valueTitleIndex + 1])
    return content.slice(valueTitleIndex + 2, listLength + valueTitleIndex + 2).map((value: string | number) => {
      if (isNaN(<number>value)) return <string>value
      else return <number>Number(<string>value)
    })
  }

  const content: string[] = <string[]>saveFile.match(/[^\r\n]+/g)
  const data: SaveFile = {
    "Game Version":                                  <number>getValue("Game Version"),
    "Room":                                          <number>getValue("Room"),
    "Deaths":                                        <number>getValue("Deaths"),
    "Difficulty":                                <Difficulty>getValue("Difficulty"),
    "Played Voice Lines":                          <string[]>getValues("Played Voice Lines"),
    "Difficulty Settings Unlocked":              <NumberBool>getValue("Difficulty Settings Unlocked"),
    "Level Data: Deaths":                          <number[]>getValues("Level Data: Deaths"),
    "Level Data: Playtime":                        <number[]>getValues("Level Data: Playtime"),
    "Level Data: Unlocked":         <(number | NumberBool)[]>getValues("Level Data: Unlocked"),
    "Level Data: Beaten On Difficulty":            <number[]>getValues("Level Data: Beaten On Difficulty"),
    "Level Data: Beaten On Difficulty Underwater": <number[]>getValues("Level Data: Beaten On Difficulty Underwater"),
    "Level Data: Autodiff-Playtime":               <number[]>getValues("Level Data: Autodiff-Playtime"),
    "Level Data: Autodiff-Deaths":                 <number[]>getValues("Level Data: Autodiff-Deaths"),
    "Autodiff Levels Till Increase":                 <number>getValue("Autodiff Levels Till Increase"),
    "Timer Game":                                    <number>getValue("Timer Game"),
    "Timer Chapter":                                 <number>getValue("Timer Chapter"),
    "Current Chapter":                               <number>getValue("Current Chapter"),
    "Timer Level":                                   <number>getValue("Timer Level"),
    "Exploration Mode":                          <NumberBool>getValue("Exploration Mode"),
    "Collected Exploration Points":                <string[]>getValues("Collected Exploration Points"),
    "Game Speed":                                    <number>getValue("Game Speed"),
    "Training Mode":                             <NumberBool>getValue("Training Mode"),
    "Unlocked Dialogs":                            <string[]>getValues("Unlocked Dialogs"),
    "Hat":                                              <Hat>getValue("Hat"),
    "Heart Fixed":                               <NumberBool>getValue("Heart Fixed"),
    "Final Credits Reached":                     <NumberBool>getValue("Final Credits Reached"),
    "Pump Inverted":                             <NumberBool>getValue("Pump Inverted"),
    "Speedrun Is Still Legit":                   <NumberBool>getValue("Speedrun Is Still Legit"),
    "Anger Game Level":                              <number>getValue("Anger Game Level"),
    "Anger Game XP":                                 <number>getValue("Anger Game XP"),
    "Auto Difficulty":                           <NumberBool>getValue("Auto Difficulty"),
    "Fixed Jump Height":                         <NumberBool>getValue("Fixed Jump Height"),
  }

  return data
}