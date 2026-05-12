---
title: RCM Web Fusee Launcher
description: Online switch rcm injector
publish: true
tags:
  - status/ref
source: https://webrcm.github.io/
author:
published:
created: 2026-01-02
---



## WebUSB Fusée Launcher

## Scroll down for important info

**Select a payload**

---

### Result:

## Instructions

---

1. Put the Switch in RCM and connect it to your device. (Insert your jig into right-joycon rail and hold volume-up while powering it on)
2. Select one of the example payloads, or upload one.
3. Press 'Do the thing!'
4. On the consent screen that appears, select 'APX' and hit confirm. If APX does not appear, ensure your device is in RCM and connected.
5. If all goes well, the payload will launch!

## Extra Info

---

- Continue at your own risk!
- This does NOT work on Windows due to a limitation in the Chrome implementation of WebUSB (and probably other reasons!) On Windows, you can use [TegraRcmSmash](https://switchtools.sshnuke.net/)
- This does NOT currently work on any browser except for Chrome, Opera, Microsoft Edge, Samsung Internet and QQ Browser. This is because they don't implement WebUSB. For up to date information, visit [caniuse.com/webusb](https://caniuse.com/webusb).
- On Linux, you might get an access denied error! If you do, you can try creating a file at `/etc/udev/rules.d/50-switch.rules`
	With the following contents:
	`SUBSYSTEM=="usb", ATTR{idVendor}=="0955", MODE="0664", GROUP="plugdev"`
- This has been tested and appears to work on Linux, macOS, Android (unrooted) and Chromebooks.

## About

---

Fusee Launcher ported to JavaScript using WebUSB.

Source can be found on [GitHub](https://github.com/webrcm/webrcm.github.io) under the MIT license (or by hitting view source, there is no backend!).  
Ported from [fusee-launcher](https://github.com/reswitched/fusee-launcher).  
UI implemented by [CletusOnTop](https://github.com/CletusOnTop).  
Thanks to ktemkin and ReSwitched for Fusée Gelée and a ton of other things!  
Web exploit code developed by [atlas44](https://github.com/atlas44/web-fusee-launcher).