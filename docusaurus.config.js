// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Casdoor-App Docs",
  tagline: "A mobile app for iOS and Android providing multi-factor authentication with TOTP, built using React Native.",
  favicon: "img/favicon.png",

  url: "https://casdoorapp.github.io",
  baseUrl: "/",

  organizationName: "casdoor",
  projectName: "casdoor-app",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/casdoor/casdoor-app/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/casdoor/casdoorapp-website/",
          onInlineTags: "warn",
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/casdoor.png",
      navbar: {
        title: "Casdoor-App Docs",
        logo: {
          alt: "Casdoor Logo",
          src: "img/casdoor.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {to: "/blog", label: "Blog", position: "left"},
          {
            href: "https://github.com/casdoor/casdoor-app",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Casdoor",
            items: [
              {
                label: "Casdoor Server",
                to: "https://casdoor.org",
              },
              {
                label: "Casdoor App",
                to: "https://github.com/casdoor/casdoor-app",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/search?q=casdoor",
              },
              {
                label: "Discord",
                href: "https://discord.gg/5rPsrAzK7S",
              },
              {
                label: "QQ Group",
                href: "https://cdn.casdoor.com/casdoor/resource/built-in/admin/qq_casdoor.png",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/casdoor/casdoor-app",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Casdoor contributors.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
