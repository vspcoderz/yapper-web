/**
 * Single source of truth for landing-page copy.
 *
 * NOTE: Yapper is free. There is deliberately no pricing data here.
 * SAMPLE-marked entries are placeholder copy, NOT real claims replace
 * before publishing.
 */

/** The live web client. Desktop builds are not shipped yet. */
export const APP_URL = "https://yapper.website";

export const NAV_LINKS = [{ href: "#faq", label: "FAQ" }] as const;

export const HERO = {
  headline: ["Your people,", "one voice away."],
  sub: "Yapper is a chat app for communities that talk. Servers, channels, direct messages and voice. Free, with no paid tier holding the good features hostage.",
  primaryCta: "Download for desktop",
  primaryCtaNote: "Coming soon",
  secondaryCta: "Open in browser",
} as const;

/** Real screenshots from the actual app, captured from the running client. */
export const SCREENSHOTS = {
  hero: {
    src: "/screenshots/server-channel.png",
    alt: "The Yapper client showing a Minecraft server with text channels, voice channels and a members list.",
    width: 1146,
    height: 751,
  },
  dms: {
    src: "/screenshots/direct-messages.png",
    alt: "The Yapper client showing the Direct Messages screen with friends, groups and online contacts.",
    width: 1147,
    height: 529,
  },
} as const;

export const SPLITS = [
  {
    kicker: "Servers",
    title: "Every group gets its own home",
    body: "Text channels and voice channels sit side by side, with the member list right where your hand already is. No digging through menus to find the thing you wanted.",
    flip: false,
  },
  {
    kicker: "Direct messages",
    title: "One list, everyone you talk to",
    body: "Friends, groups and DMs in a single column. See who is online at a glance instead of opening a profile to find out.",
    flip: true,
  },
] as const;

export const FAQ = [
  {
    q: "Is Yapper really free?",
    a: "Yes, the whole app. There is no paid tier, no feature held back, and nothing to upgrade to. Everyone gets servers, voice, DMs and plugins.",
  },
  {
    q: "What platforms does it support?",
    a: "The desktop client and the browser. Your account, your servers and your message history are the same on both, and desktop is the better experience for voice.",
  },
  {
    q: "Can I bring my existing server over?",
    a: "Yes. You can import your channels and message history from the tools you already use. For a few hundred people this takes an afternoon.",
  },
  {
    q: "Why does the app look like this?",
    a: "Because server icons down the left, channels in the sidebar, and the member list on the right is the layout people already know. You shouldn't have to learn a chat app to join a conversation.",
  },
  {
    q: "What can plugins do?",
    a: "Anything the client can do: moderation tooling, game integrations, music bots, dashboards. Build one and publish it to everyone.",
  },
  {
    q: "How does it handle my data?",
    a: "Messages are encrypted in transit and at rest. Direct messages are visible only to the people in them. No data selling, no ads.",
  },
] as const;

export const FOOTER_COLUMNS = [
  { heading: "Product", links: ["Download", "Screenshots", "Changelog", "Status"] },
  { heading: "Resources", links: ["Documentation", "Plugins", "Developer console", "Community"] },
  { heading: "Company", links: ["About", "Blog", "Careers", "Press kit"] },
  { heading: "Legal", links: ["Terms", "Privacy", "Security", "Cookies"] },
] as const;
