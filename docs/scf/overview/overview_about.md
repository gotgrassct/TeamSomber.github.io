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
  PageLink
} from '@site/src/components/DocComponents';
import PageAnimation from '@site/src/components/PageAnimation';

<PageAnimation>

# Juggle System Overview

The <BlueText>Somber Juggle System</BlueText> lets you juggle enemies with ease. All you need is:

- The <BlueText>SomberJuggleComponent</BlueText>
- <BlueText>BPI_SomberJuggle</BlueText> blueprint interface added onto your enemy
- <BlueText>ANS_OutputJuggleSettings</BlueText> on your player's anim montage

On the enemy you need to implement the event get juggle settings, then when your enemy takes damage you call DoJuggle and input the juggle settings, and that's it, your enemy is able to get juggled now.

<InfoBox>Please refer to the <PageLink to="/scf/getting_started/quickstart"><GenericYellowText>Quickstart guide</GenericYellowText></PageLink> for implementation details.</InfoBox>

</PageAnimation>