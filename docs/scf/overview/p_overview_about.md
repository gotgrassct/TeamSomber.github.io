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
  AquaText,
  WhiteText,
  GenericBlueText,
  GenericGreenText,
  GenericPurpleText,
  GenericGreyText,
  GenericYellowText,
  GenericOrangeText,
  GenericPinkText,
  GenericRedText,
  GenericAquaText,
  GenericWhiteText,
  NewImg,
  Video,
  InfoBox,
  PageLink,
  BulletPoints,
  LineFormat,
  DownloadLink
} from '@site/src/components/DocComponents';
import PageAnimation from '@site/src/components/PageAnimation';

<PageAnimation>
<NewImg src="/assets/scf_logo.png" />

<GenericYellowText>Join the TEAM SOMBER discord for support and suggestions! <GenericBlueText><PageLink to="https://discord.gg/2nhe4Fr3FM">https://discord.gg/2nhe4Fr3FM</PageLink></GenericBlueText></GenericYellowText>
<LineFormat>

</LineFormat>
# About Somber Combat Framework (SCF)

SCF is a plugin built with C++ and is a simple and easy to use Combat Framework that lets you setup combat for your characters from scratch in no time at all (Provided you have your own assets and animations). In total there are 9 separate modular systems (actor components) in one plugin:
- <AquaText>Juggle System</AquaText> - An actor component (<AquaText>SomberJuggleComponent</AquaText>) that enables launching and juggling characters in combat. Define juggle montages with GameplayTags and trigger them through anim notifies during attacks.

- <YellowText>Combo System</YellowText> - An actor component (<YellowText>SomberComboComponent</YellowText>) for creating attack sequences called <YellowText>ComboSets</YellowText>. Each set contains conditional combos that can be triggered manually or automatically. Features combo windows and mid-combo transitions between different sets.

- <BlueText>Motion Warp System</BlueText> - An improved motion warping component (<BlueText>SomberMotionWarpComponent</BlueText>) that realistically moves characters toward targets based on interpolation speed rather than forced positioning. Includes extensive customization options via anim notifies.

- <RedText>Hit Trace System</RedText> - Uses configurable trace shapes (Box, Capsule, Sphere) that can be attached anywhere on the character and controlled through anim notify states. The SomberHitTracer component manages traces and provides hit detection events with gameplay tags.

- <PinkText>Weapon System</PinkText> - A component (<PinkText>SomberWeaponComponent</PinkText>) for managing weapons using the <PinkText>SomberWeaponActorBase</PinkText> class. Seamlessly integrates with the hit trace system for weapon-based combat.

- <PurpleText>Input Arrow System</PurpleText> - A component (<PurpleText>SomberInputArrowComponent</PurpleText>) that handles input-based character rotation, directional launching, and target selection through the <OrangeText>SomberSoftLockManager</OrangeText>.

- <GreyText>Camera System</GreyText> - A sophisticated camera component (<GreyText>SomberCameraComponent</GreyText>) that spawns a <GreyText>SomberCameraActor</GreyText> for smooth target following and rotation. Features customizable settings per camera target, relative movement controls, and animation-driven camera behavior.

- <OrangeText>Soft-Target Lock-On System</OrangeText> - A component (<OrangeText>SomberSoftLockManager</OrangeText>) that provides target selection based on distance and input direction. The system prioritizes targets that the input arrow points towards, enabling precise target selection during combat. Future updates will include hard-lock targeting functionality. The manager comes with event delegates that fire when a target is selected and a target is released. The <BlueText>SomberMotionWarpComponent</BlueText> automatically uses the selected targets from this system to select a motion warp target. (You can set them manually on that system too)

- <GreenText>Health System</GreenText> - An actor component (<GreenText>SomberHealthComponent</GreenText>) that implements a tiered health system similar to games like Kingdom Hearts. Characters can have multiple health tiers - when a health bar is depleted, one tier is removed and health resets for the remaining tiers. Comes with event delegates for when a tier is depleted and when the character dies.

<LineFormat>
<GenericWhiteText>All of these system's are very modular. You can use only 1 system or all of them, it's up to you. Each system comes with a slew of settings, functions and anim notifies to give users flexible control over each system. </GenericWhiteText> Each system can work with any other system, so if you only want to use a few systems and use entirely different systems inconjuction with SCF, that would work no problem.
</LineFormat>


<LineFormat>
To install the system, visit the <PageLink to="@site/scf/overview/installation"><BlueText>Installation</BlueText></PageLink> page, and to get started working with the system right away, head to the <PageLink to="@site/scf/getting_started/quickstart"><BlueText>Quickstart Guide</BlueText></PageLink>
</LineFormat>

<InfoBox>SCF doesn't come with any assets or animations. It's simply just a framework for you to build off of with your own animations.</InfoBox>

<LineFormat>
<InfoBox>Documentation is unfinished and is <GenericRedText>under active development</GenericRedText> and subject to change.</InfoBox>
</LineFormat>

<DownloadLink filename="AS_Ground_Attack_01.fbx">Attack Animation 1</DownloadLink>, <DownloadLink filename="AS_Ground_Attack_02.fbx">Attack Animation 2</DownloadLink>, <DownloadLink filename="AS_Ground_Attack_03.fbx">Attack Animation 3</DownloadLink>

</PageAnimation>