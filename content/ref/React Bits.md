---
title: React Bits
description: An open source collection of high quality, animated, interactive & fully customizable React components for building stunning, memorable user interfaces.
publish: true
tags:
  - status/ref
source: https://reactbits.dev/components/model-viewer
author:
  - "[[David Haz]]"
published:
created: 2025-09-25
---



## Model Viewer

Fast as lightning.

## Customize

Model

Environment

Horizontal Offset

0.5

Vertical Offset

0

Mouse Parallax

Hover Rotation

Screenshot Button

Fade In On Load

Auto Rotate

Rotate Speed

0.35

## Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| url | string | \- | URL of the 3D model file (glb/gltf/fbx/obj) |
| width | number \| string | 400 | Width of the canvas container |
| height | number \| string | 400 | Height of the canvas container |
| modelXOffset | number | 0 | Horizontal offset of the model |
| modelYOffset | number | 0 | Vertical offset of the model |
| defaultRotationX | number | \-50 | Initial rotation on the X axis in degrees |
| defaultRotationY | number | 20 | Initial rotation on the Y axis in degrees |
| defaultZoom | number | 0.5 | Initial zoom distance factor |
| minZoomDistance | number | 0.5 | Minimum zoom distance |
| maxZoomDistance | number | 10 | Maximum zoom distance |
| enableMouseParallax | boolean | true | Enable mouse-based parallax effect |
| enableManualRotation | boolean | true | Enable manual rotation via drag |
| enableHoverRotation | boolean | true | Enable rotation on hover based on cursor |
| enableManualZoom | boolean | true | Enable manual zoom via mouse wheel or gestures |
| ambientIntensity | number | 0.3 | Intensity of ambient light |
| keyLightIntensity | number | 1 | Intensity of key light |
| fillLightIntensity | number | 0.5 | Intensity of fill light |
| rimLightIntensity | number | 0.8 | Intensity of rim light |
| environmentPreset | string | "forest" | Environment preset for scene lighting |
| autoFrame | boolean | false | Automatically frame the model in view |
| fadeIn | boolean | false | Enable fade-in transition on load |
| autoRotate | boolean | false | Enable automatic rotation animation |
| autoRotateSpeed | number | 0.35 | Speed of automatic rotation |
| showScreenshotButton | boolean | true | Show the screenshot button overlay |
| placeholderSrc | string | \- | Placeholder image source while loading |
| onModelLoaded | function | \- | Callback when model finishes loading |

## Dependencies

three @react-three/fiber @react-three/drei