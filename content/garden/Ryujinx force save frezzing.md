---
title: Ryujinx force save frezzing
description: ryujinx crashing whenever forced saved
publish: true
tags:
  - type/issues
  - topic/tech
source:
created: 2025-07-23
status: done
---




## Problem
whenever there is a forced save in a game like pokemon sword the frame freezes and fps drops to 0

## Fixes
- setting graphics to native worked even tho issue is related to wifi??
## Notes
the music continues however the fps drops to 0

## Possible cause
before the auto save it checks online features like poke trade etc which causes ryujinx to instantly close it which causes it to crash
this problem also occurs on the switch and every other emulators

  - the game remembers every time it crashes so the game is not frozen the framerate is
## Example
the forced save in before the max lair in crown tundra
the game forces you to save before certain randomly generated events to prevent reloading (activating wish wells, asking digging duo for treasures, and in new DLC when you use Cram-o-matic

## Possible solutions 
- change graphics from high to normal before saving
  - people say disabling async and multithearding fixes it 
- disabling wifi fixes it ?
- increasing ram helps from crashing less
- disabling multicore emulation 
- switching to shield has fewer glitches - last resort
- disabling auto save in game 
- solution found by hardtofindcoach reddit
  - i wanted to share just to be sure. go to yuzu main folder then > \nand\user\save\0000000000000000\297501CBC3A04BE03BFBEC02EB21AB61\01008DB008C2C000 the last two folders may have different numbers from mine, but anyway here you will find 3 files, backup, main, poke_trade. make a new folder inside this one, open the game (important do this only when the game is running) and move the files "backup" and "poke_trade" inside the new folder (easy, fast and better to delete them), then go back to your game, save without crashing and continue to play. i do this when im in the max lair before the autosave at the start and at the end and i got 0 crashes in around 50 try
 - try switching between opengl and vulkan
 - apparently waiting it out fixes it ?

## Testing Solution 
- lowering graphics to 720/1080 let me enter the lair and turning off FXAA
  - turning to 2x after save works however when the  game trys to auto save again it crashes
  - the first openning introduction worked but after the story the next time after the max lair it crashes

