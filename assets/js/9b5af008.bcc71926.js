"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[214],{6482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(4848),o=n(8453),i=n(1098),a=n(9957);const r={id:"overview_about",title:"About",sidebar_position:1,slug:"/"},c="About Somber Combat Framework (SCF)",l={id:"scf/overview/overview_about",title:"About",description:"Join the TEAM SOMBER discord for support and suggestions! https://discord.gg/2nhe4Fr3FM",source:"@site/docs/scf/overview/p_overview_about.md",sourceDirName:"scf/overview",slug:"/",permalink:"/TeamSomber.github.io/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview_about",title:"About",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/TeamSomber.github.io/scf/overview/installation"}},h={},d=[];function m(e){const t={a:"a",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.Sk,{src:"/assets/scf_logo.png"}),(0,s.jsxs)(i.Px,{children:["Join the TEAM SOMBER discord for support and suggestions! ",(0,s.jsx)(i.hY,{children:(0,s.jsx)(i.Ek,{to:"https://discord.gg/2nhe4Fr3FM",children:(0,s.jsx)(t.a,{href:"https://discord.gg/2nhe4Fr3FM",children:"https://discord.gg/2nhe4Fr3FM"})})})]}),(0,s.jsx)(i.Yv,{}),(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"about-somber-combat-framework-scf",children:"About Somber Combat Framework (SCF)"})}),(0,s.jsx)(t.p,{children:"SCF is a plugin built with C++ and is a simple and easy to use Combat Framework that lets you setup combat for your characters from scratch in no time at all (Provided you have your own assets and animations). In total there are 9 separate modular systems (actor components) in one plugin:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.oc,{children:"Juggle System"})," - An actor component (",(0,s.jsx)(i.oc,{children:"SomberJuggleComponent"}),") that enables launching and juggling characters in combat. Define juggle montages with GameplayTags and trigger them through anim notifies during attacks."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.ij,{children:"Combo System"})," - An actor component (",(0,s.jsx)(i.ij,{children:"SomberComboComponent"}),") for creating attack sequences called ",(0,s.jsx)(i.ij,{children:"ComboSets"}),". Each set contains conditional combos that can be triggered manually or automatically. Features combo windows and mid-combo transitions between different sets."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.un,{children:"Motion Warp System"})," - An improved motion warping component (",(0,s.jsx)(i.un,{children:"SomberMotionWarpComponent"}),") that realistically moves characters toward targets based on interpolation speed rather than forced positioning. Includes extensive customization options via anim notifies."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.hF,{children:"Hit Trace System"})," - Uses configurable trace shapes (Box, Capsule, Sphere) that can be attached anywhere on the character and controlled through anim notify states. The SomberHitTracer component manages traces and provides hit detection events with gameplay tags."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.Cr,{children:"Weapon System"})," - A component (",(0,s.jsx)(i.Cr,{children:"SomberWeaponComponent"}),") for managing weapons using the ",(0,s.jsx)(i.Cr,{children:"SomberWeaponActorBase"})," class. Seamlessly integrates with the hit trace system for weapon-based combat."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.OG,{children:"Input Arrow System"})," - A component (",(0,s.jsx)(i.OG,{children:"SomberInputArrowComponent"}),") that handles input-based character rotation, directional launching, and target selection through the ",(0,s.jsx)(i._4,{children:"SomberSoftLockManager"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.Lh,{children:"Camera System"})," - A sophisticated camera component (",(0,s.jsx)(i.Lh,{children:"SomberCameraComponent"}),") that spawns a ",(0,s.jsx)(i.Lh,{children:"SomberCameraActor"})," for smooth target following and rotation. Features customizable settings per camera target, relative movement controls, and animation-driven camera behavior."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i._4,{children:"Soft-Target Lock-On System"})," - A component (",(0,s.jsx)(i._4,{children:"SomberSoftLockManager"}),") that provides target selection based on distance and input direction. The system prioritizes targets that the input arrow points towards, enabling precise target selection during combat. Future updates will include hard-lock targeting functionality. The manager comes with event delegates that fire when a target is selected and a target is released. The ",(0,s.jsx)(i.un,{children:"SomberMotionWarpComponent"})," automatically uses the selected targets from this system to select a motion warp target. (You can set them manually on that system too)"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.d1,{children:"Health System"})," - An actor component (",(0,s.jsx)(i.d1,{children:"SomberHealthComponent"}),") that implements a tiered health system similar to games like Kingdom Hearts. Characters can have multiple health tiers - when a health bar is depleted, one tier is removed and health resets for the remaining tiers. Comes with event delegates for when a tier is depleted and when the character dies."]}),"\n"]}),"\n"]}),(0,s.jsx)(i.Yv,{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.c9,{children:"All of these system's are very modular. You can use only 1 system or all of them, it's up to you. Each system comes with a slew of settings, functions and anim notifies to give users flexible control over each system. "})," Each system can work with any other system, so if you only want to use a few systems and use entirely different systems inconjuction with SCF, that would work no problem."]})}),(0,s.jsx)(i.Yv,{children:(0,s.jsxs)(t.p,{children:["To install the system, visit the ",(0,s.jsx)(i.Ek,{to:"@site/scf/overview/installation",children:(0,s.jsx)(i.un,{children:"Installation"})})," page, and to get started working with the system right away, head to the ",(0,s.jsx)(i.Ek,{to:"@site/scf/getting_started/quickstart",children:(0,s.jsx)(i.un,{children:"Quickstart Guide"})})]})}),(0,s.jsx)(i.w4,{children:"SCF doesn't come with any assets or animations. It's simply just a framework for you to build off of with your own animations."}),(0,s.jsx)(i.Yv,{children:(0,s.jsxs)(i.w4,{children:["Documentation is unfinished and is ",(0,s.jsx)(i._F,{children:"under active development"})," and subject to change."]})}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(i.pu,{filename:"AS_Ground_Attack_01.fbx",children:"Attack Animation 1"}),", ",(0,s.jsx)(i.pu,{filename:"AS_Ground_Attack_02.fbx",children:"Attack Animation 2"}),", ",(0,s.jsx)(i.pu,{filename:"AS_Ground_Attack_03.fbx",children:"Attack Animation 3"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);