/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    { type: "autogenerated", dirName: "." },
    {
      type: "category",
      label: "📓ADDITIONAL RESOURCES",
      items: [
        {
          type: "category",
          label: "PUSH Roadmaps",
          items: [
            {
              type: "doc",
              id: "additional-resources/push-roadmap",
              label: "Push Roadmaps",
            },
            {
              type: "link",
              label: "🛣️Push Roadmap 2021", // The link label
              href: "https://medium.com/push-protocol/epns-roadmap-2021-c4ededc57a12", // The external URL
            },
            {
              type: "link",
              label: "🛣️Push Roadmap 2022", // The link label
              href: "https://medium.com/push-protocol/epns-roadmap-2022-2698ab153c1a", // The external URL
            },
          ]
        },
        {
          type: "link",
          label: "Facebook", // The link label
          href: "https://facebook.com", // The external URL
        },
        {
          type: "link",
          label: "Hack Ideas", // The link label
          href: "https://medium.com/push-protocol/buidl-w-epns-ideas-to-hack-the-future-of-web3comm-8b3dc80145b1", // The internal path
        },
        {
          type: "link",
          label: "Push Grants", // The link label
          href: "https://medium.com/push-protocol/push-grants-program-its-here-f2bfba29388f", // The internal path
        },
        {
          type: "link",
          label: "Frequently Asked", // The link label
          href: "https://docs.push.org/hub/frequently-asked/faq", // The internal path
        },
        {
          type: "link",
          label: "Join our Discord", // The link label
          href: "https://docs.push.org/", // The internal path
        },
      ],
    },
  ],
};
module.exports = sidebars;
