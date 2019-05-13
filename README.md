# gecko-console

This is a browser-based emulator front-end which adapts to the controllers attached 
to the system.

## Rationale

For the vast majority of retro gaming a Pi with RetroArch is more 
than sufficient. However, there are a few corner cases it doesn't handle well:

* RetroArch officially supports, quite sensibly, a small assortment of controllers 
and using more niche layouts can be awkward to map.
* RetroArch has poor support for some of the more eclectic consoles (e.g., Atari 
Jaguar).
* It's a little awkward getting RetroArch smoothly set up on devices other than 
the wonderful Raspbery Pi (disclaimer: IMHO).

These are all quite sensible design choices for the cases RetroArch fits in. I want 
a system which can handle the Atari Jaguar and its odd controller. I also want a 
system my very young son can play with who enjoys a different game library than I do, 
so I don't want him to have to deal with navigating around my library. To solve 
this problem Gecko will present one UI skin and game library when one of my 
controllers is connected and a different skin and library when his controller is attached.

## Personalities

Initially, Gecko will support the following three personalities:

1) Atari Jaguar: when a Jaguar controller is connected it will show only Jaguar titles.
2) Sega: when my clone Saturn controller is connected it will display a Sega-style theme 
and library.
3) Boy: when my son's mini XBox style controller is connected it will display his favourite games.

## Implementation

Gecko will run a NodeJS service in the background which will handle controller detection 
and library management. On boot the system will automatically launch a [Chromium 
browser instance in kiosk mode](https://github.com/dgrubb/Ubuntu-Kiosk) which will 
request a HTML/JS UI from the Gecko service. Gecko will provide API calls for 
providing information about current personality and libraries as well as calls to launch 
specific emulators.

## Gecko?

Because of the way the UI will take on different personalities I originally intended 
to call it Chameleon, but that name has [some very negative connotations](https://en.wikipedia.org/wiki/Chameleon_(video_game_console)) in the retro 
gaming community ... 
