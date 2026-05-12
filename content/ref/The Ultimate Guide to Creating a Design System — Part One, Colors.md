---
title: The Ultimate Guide to Creating a Design System — Part One, Colors
description: The Ultimate Guide to Creating a Design System — Part One, Colors Want a strong design system to help you speed up your workflow, improve consistency and allow you to get straight to the creative …
publish: true
tags:
  - status/ref
source: https://blog.prototypr.io/the-ultimate-guide-to-creating-a-design-system-part-one-colors-20b1d3f15ee6
author:
  - "[[Kieran Parker]]"
published: 2021-03-22
created: 2025-11-23
---



[Sitemap](https://blog.prototypr.io/sitemap/sitemap.xml)## [Prototypr](https://blog.prototypr.io/?source=post_page---publication_nav-eb297ea1161a-20b1d3f15ee6---------------------------------------)

[![Prototypr](https://miro.medium.com/v2/resize:fill:76:76/1*qyQKDMMD6-X_8biF_U-N-g.png)](https://blog.prototypr.io/?source=post_page---post_publication_sidebar-eb297ea1161a-20b1d3f15ee6---------------------------------------)

Prototyping, UX Design, Front-end Development and Beyond 👾 | ✍️ Write for us [https://bit.ly/apply-prototypr](https://bit.ly/apply-prototypr)

Want a strong design system to help you speed up your workflow, improve consistency and allow you to get straight to the creative bit?  
Check out [simplekits](https://www.simplekits.co/)!## [Simplekits — Design System Kit](https://www.simplekits.co/?source=post_page-----20b1d3f15ee6---------------------------------------)

Unlike many UI Kits out there, we want you to be able to quickly and effortlessly edit the kit to match the style you…

www.simplekits.co

[View original](https://www.simplekits.co/?source=post_page-----20b1d3f15ee6---------------------------------------)

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*ExWeiDAh2VhcrrLn5KNw3w.png)

The word “Design System” has been getting thrown around a lot lately. And, depending on your position, company, or setup, it may mean something slightly different to you.

### The Traditional Design System

Typically, when someone mentions a design system, they are likely talking about the set of “rules” or guides a company or brand follows to keep consistency across everything they do. Many companies such as [Uber](https://brand.uber.com/guide#logo-overview) & [IBM](https://www.carbondesignsystem.com/) have some public design systems for you to browse.

### The Designers Design System

With more sophisticated design tools, design systems are starting to get more and more popular, and with good reason. They help you keep a consistent theme, rules, or structure across your file or multiple projects. With the features in Sketch and Figma to create master components, it is even more powerful to create or use design a handful of design systems that can be used as a starting point across projects.

Funnily enough, the Designers Design System could act as the foundation of a “Traditional” System for whatever company it is being made for. Both serve a similar purpose; however, one is simply in an earlier stage than the other.

> Creating a design system can be daunting, I should know, as I recently created [simplekits.co](https://bit.ly/3aDiNve). But fear not, because we are going to take it step by step and cover some best practices on styling, organisation and component creation.

## What We Will Cover

Design systems can vary in terms of what is needed, styling added, and components made. For this series, we will focus on how to construct a few, and that understanding will carry across into other components you may want to know.

We will also aim to make this design system easily adaptable so that you can adjust them.

To note, we will be using Figma. The theory applies to sketch, but the way components/symbols work, and the application of styles, colors, etc. will vary)

**So here are the areas we will cover** (I will update the links as they get posted)

1. Colour Styles (This one)
2. [Typography Styles](https://blog.prototypr.io/the-ultimate-guide-to-creating-a-design-system-part-two-typography-4513dca4476f)
3. [Complex Buttons](https://blog.prototypr.io/the-ultimate-guide-to-creating-a-design-system-part-three-complex-buttons-36b4fd9f554d)
4. Conditional Inputs
5. Interchangeable Dropdowns
6. Responsive Cards & Modals

> *I have made a* [*Figma File*](https://www.figma.com/community/file/943130265019106988/Create-a-Design-System) *for you to duplicate and use/follow along if you would rather that than create from scratch.*

So, without further ado, let’s dive into choosing and setting up color styles.

## Picking a Color Palette

### Primary & Secondary Colors

Firstly, we need to pick our Primary and Secondary colors. The primary being our main brand-color and our secondary being a complementary or contrasting color. Something to serve as a secondary action, should we need it.

If you struggle to find colors, there are many helpful tools such as [Coolors.co](https://coolors.co/) & [Colorhunt](https://colorhunt.co/). Both great places to find Primary, Secondary or entire color palettes.

For this system, I will go ahead with a Striking Blue as my Primary and a contrasting Yellow-Orange for my Secondary.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*8Y2yEvZJd-qW6czDGhnOGg.png)

Primary — # 004FFF / Secondary — # FAC748

## Tints & Shades

Next, we want to create some shades/tints for these colors. It is recommended to have about 5–9 variations. To keep things simple, we will make 5, meaning we need 2 darker and 2 lighter of both the primary and secondary.

There are a few methods (and tools) for doing this well, and which you choose may change depending on your color/style/theme you are going for. For this demonstration, let’s use the Hue-Shift method, as this gives our tints and shades a little more depth *(Sam Gordon goes over this method in detail* [*here*](https://medium.muz.li/natural-color-palettes-7769e5b38ecd)*)*.

Essentially to create tints, you move the Hue towards “warmer” colors, decrease saturation slightly and increase brightness slightly.

Shades are essentially the opposite, Hue towards cooler colors, decrease saturation and decrease brightness.

Here are my primary and secondary colors withs 2 tints and 2 shades.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*VYXsFm0VeLHuzARHeEMaUg.png)

Primary & Secondary Tints & Shades

You may wonder why I named them 100, 300, 500, 700, 900 instead of 1, 2, 3, 4, 5 or -2, -1, Main, +1, +2.

Put simply; it allows me to potentially go back in and add some shades/tints in the future if I like. This setup provides room for an extra 4 tints/shades to be added easily should I feel the need without having to rename them or work in decimals. Although that being said, I could technically have “100, 150, 200, 250, 300” and so on, but that would be slight overkill.

## Neutrals/Greyscale

Now, we need to add in our greyscale/neutrals. This would depend upon the theme you are going for or the branding you want to apply.

You should always remember one fundamental rule when using Greyscales (Or simply blacks or whites) never use pure Blacks or Pure whites. Always inject a little bit of color into them. Typically a hint of Blue for a sleek, modern, chill vibe or a hint of yellow for a warmer, more inviting vibe.

The trick to this is to pick a hue that is around about the same as your primary. Then move the saturation up and down to get the tints/shades whilst also increase saturation slightly for shades and decreasing for tints.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*JfYHDaWQi_yYQo6nBGNktg.png)

Primary, Secondary & Greyscale (Or, neutrals)

## System/Tertiary

Finally, we want some System colors (error, warning, success, etc.) as well as some tertiary colors (should the brand call for this). Now, it is time to put into practice what you have learned. Go and create some complimentary system colors for your chosen primary and create tints/shades for them.

> *This is important as we will be using these during our inputs sections. Feel free to* [*use the follow-along file*](https://www.figma.com/community/file/943130265019106988/Create-a-Design-System) *if you need to.*

## Setting Up Styles

Now it is time to create our Color Styles within Figma. This will allow us to apply and update our future colors, a powerful feature for design kits for both maintenance and initial setup.

For generic systems we plan to use on multiple systems (such as [simplekits](https://simplekits.co/)), we will be keeping the naming generic. So rather than “blue and yellow,” we will use “primary” and “secondary.”

We will then tack on the shade-number. For example, our primary set of colors will look like “ *Primary/500,*” or you can set them by using “ *Main/Primary-500* ” if you prefer. The choice is yours; the important thing is consistency among all naming conventions.

![](https://miro.medium.com/v2/resize:fit:640/format:webp/1*uguA85H-TaAH0vFVSCDllA.png)

Voila, you have created your design system color styles. Now, of course, you can go further with this. Adding opacities, gradients, states, etc. But for a simple generic template, this is a strong starting point.

## Wrapping Up and Next Steps

Next post, we will cover setting up Figma Type Styles. Another powerful feature that is essential for any good Design System.

> *Want a design system without the hassle of creating every single component yourself? Then check out* [*simplekits*](https://bit.ly/3hIJbW7)*, a Design System Kit made with all the core components you could need for any project.*## [Simplekits - Design System Kit](https://www.simplekits.co/?source=post_page-----20b1d3f15ee6---------------------------------------)

Unlike many UI Kits out there, we want you to be able to quickly and effortlessly edit the kit to match the style you…

www.simplekits.co

[View original](https://www.simplekits.co/?source=post_page-----20b1d3f15ee6---------------------------------------)

*If you liked this post, please give it a share and follow me for more posts just like it*

***Other Bits & Bobs***

- *Stop by and say* [*hi on Twitter*](https://twitter.com/_kprkr)
- *Check out my* [*products & design work*](https://kieranparker.co.uk/)
- *Sign up to* [*heeed*](https://heeed.netlify.app/)*, a website feedback community.*

[![Prototypr](https://miro.medium.com/v2/resize:fill:96:96/1*qyQKDMMD6-X_8biF_U-N-g.png)](https://blog.prototypr.io/?source=post_page---post_publication_info--20b1d3f15ee6---------------------------------------)

[![Prototypr](https://miro.medium.com/v2/resize:fill:128:128/1*qyQKDMMD6-X_8biF_U-N-g.png)](https://blog.prototypr.io/?source=post_page---post_publication_info--20b1d3f15ee6---------------------------------------)

[Last published Sep 30, 2025](https://blog.prototypr.io/i-stopped-using-figma-for-70-of-my-product-design-work-and-my-output-doubled-7aceb264dd5a?source=post_page---post_publication_info--20b1d3f15ee6---------------------------------------)

Prototyping, UX Design, Front-end Development and Beyond 👾 | ✍️ Write for us [https://bit.ly/apply-prototypr](https://bit.ly/apply-prototypr)

Creative Director & Digital Product Designer. ⚡ [kprkr.co](http://kprkr.co/) ⚡