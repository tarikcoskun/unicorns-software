type Color = string

export interface ThemeValues {
  // Color values
  Background: Color
  Background_Pattern: Color
  Background_in_Darkness: Color
  Background_Pattern_in_Darkness: Color
  Wall_A: Color
  Wall_B: Color
  Wall_A_Dark: Color
  Wall_B_Dark: Color
  Wall_Outline_A: Color
  Wall_Outline_B: Color
  AI_A: Color
  AI_B: Color
  Snail_Theme: Color
  Snail_Glow: Color
  Snail_Death: Color
  Snail_Trail: Color
  Enemies: Color
  Enemy_Warnings: Color
  Snail_Outline: Color
  Snail_Body: Color
  Snail_Shell: Color
  Snail_Eye: Color
  Dallin: Color
  Dialog_Files: Color
  Overlay_Gradient_Color_Top: Color
  Overlay_Gradient_Color_Bot: Color
  Overlay_Vignette_Color: Color
  Bloom_Color: Color
  Lvl_Locked_Front: Color
  Lvl_Locked_Back: Color
  Lvl_Normal_Front: Color
  Lvl_Normal_Back: Color
  Lvl_Story_Front: Color
  Lvl_Story_Back: Color
  Lvl_Secret_Front: Color
  Lvl_Secret_Back: Color
  Lvl_Questionmark_Indicator: Color
  Lvl_Questionmark_Indicator_Selected: Color
  Bubbles: Color
  Underw_Current: Color
  Snail_Flare: Color
  AI_In_Background: Color
  Light_Ocean: Color
  Conveyor_Belts: Color
  Final_Boss_1A: Color
  Final_Boss_1B: Color
  Final_Boss_2: Color
  Final_Boss_3: Color
  TD_Turret_1: Color
  TD_Turret_2: Color
  TD_Turret_3: Color
  Exploration_Points: Color
  Corrupted_Antenna: Color
  Dialog_File_Overlay: Color
  Doors: Color
  Unicorn: Color
  Smiley_1: Color
  Smiley_2: Color

  // Numeral values
  Background_Scale_Min: number
  Background_Scale_Max: number
  Background_Style: number // 1 to 19
  Background_Parallax_Min: number
  Background_Parallax_Max: number
}