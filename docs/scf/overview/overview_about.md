---
id: overview_about
title: About
sidebar_position: 1
slug: /
---

import {
  BlueText,
  GreenText,
  PurpleText,
  GreyText,
  YellowText,
  OrangeText,
  PinkText,
  RedText,
  GenericBlueText,
  GenericGreenText,
  GenericPurpleText,
  GenericGreyText,
  GenericYellowText,
  GenericOrangeText,
  GenericPinkText,
  GenericRedText,
  NewImg,
  Video,
  InfoBox,
  PageLink,
  BulletPoints,
  LineFormat
} from '@site/src/components/DocComponents';
import PageAnimation from '@site/src/components/PageAnimation';

<PageAnimation>
<NewImg src="/assets/scf_logo.png" />
# About Somber Combat Framework (SCF)

SCF is a simple and easy to use Combat Framework that lets you setup combat for your characters from scratch in no time at all. In total there are 9 separate modular systems (actor components) in one plugin:
- <GreenText>Juggle System</GreenText> An actor component (<GreenText>SomberJuggleComponent</GreenText>) that lets you launch characters into the air and knock them around during combat. You can define different juggle animations and link them to specific attacks using GameplayTags. When an attacker hits the juggle character, they can trigger these juggle animations (as well as all the settings for juggling and launching) through a simple anim notify system.
- <YellowText>Combo System</YellowText> An actor component (<YellowText>SomberComboComponent</YellowText>) that manages character combat combos. It works by organizing attack animations into <YellowText>ComboSets</YellowText>. You can play a specific ComboSet by:
  1. Directly calling <YellowText>TryActivateCombo()</YellowText> with a gameplay tag
  2. Using a <YellowText>SomberComboCalculationClassBase</YellowText> to automatically pick the right combo based on custom conditions

  Each <YellowText>ComboSet</YellowText> can have its own activation requirements. You can also chain different <YellowText>ComboSets</YellowText> together using AnimNotifies in your animations, with optional conditions that must be met before transitioning to the next combo.
- <BlueText>Motion Warp System</BlueText>
- <RedText>Hit Trace System</RedText>
- <PinkText>Weapon System</PinkText>
- <PurpleText>Input Arrow System</PurpleText>
- <GreyText>Camera System</GreyText>
- <OrangeText>Soft-Target Lock-On System</OrangeText>
- Health System

All of which are actor components. 



<InfoBox>This documentation is <GenericYellowText>still under construction</GenericYellowText></InfoBox>

</PageAnimation>