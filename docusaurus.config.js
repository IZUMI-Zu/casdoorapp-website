// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Casdoor Authenticator",
  tagline: "A mobile app for iOS and Android providing multi-factor authentication with TOTP, built using React Native.",
  favicon: "img/favicon.png",

  url: "https://casdoorapp.github.io",
  baseUrl: "/",

  organizationName: "casdoor",
  projectName: "casdoor-authenticator-website",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ko", "ru", "fr", "de", "ja", "es", "pt", "uk", "th", "ar"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          sidebarCollapsed: false,
          editUrl: ({docPath}) => {
            return `https://github.com/casdoor/casdoorapp-website/edit/master/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: ({blogDirPath, blogPath}) => {
            return `https://github.com/casdoor/casdoorapp-website/edit/master/${blogDirPath}/${blogPath}`;
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: "img/casdoor.png",
      navbar: {
        title: "Casdoor Authenticator",
        logo: {
          alt: "Casdoor Logo",
          src: "img/casdoor.png",
        },
        items: [
          {
            type: "doc",
            docId: "overview",
            position: "left",
            label: "Docs",
          },
          {to: "/blog", label: "Blog", position: "left"},
          {to: "/help", label: "Help", position: "left"},
          {
            href: "https://github.com/casdoor/casdoor-authenticator/releases",
            label: "Download",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                type: "html",
                value: "<hr style=\"margin: 0.3rem 0;\">",
              },
              {
                to: "https://crowdin.com/project/casdoor-authenticator-website",
                label: "Help translate",
              },
            ],
          },
          {
            href: "https://github.com/casdoor/casdoor-authenticator",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            type: "custom-community",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
          {
            type: "custom-casdoor",
            label: "Sign Up",
            src: "https://casdoor.com",
            position: "right",
            className: "casdoor-signup casdoor-link",
          },
          {
            type: "custom-casdoor",
            label: "Login",
            src: "https://casdoor.com",
            position: "right",
            className: "casdoor-login casdoor-link",
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
                label: "Casdoor Authenticator",
                to: "https://github.com/casdoor/casdoor-authenticator",
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
                href: "https://github.com/casdoor/casdoor-authenticator",
              },
              {
                html: `
                <iframe src="https://ghbtns.com/github-btn.html?user=casdoor&repo=casdoor-authenticator&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub">Casdoor Authenticator</iframe>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Casdoor contributors.`,
      },
      announcementBar: {
        id: "announcement", // ID of the announcement bar
        content:
        "<a target=\"_blank\" rel=\"noreferrer\" href=\"https://casdoor.org/\">💖 Looking for a UI-first Identity Access Management (IAM) / Single-Sign-On (SSO) platform supporting OAuth 2.0, OIDC, SAML, and more? Learn more about: Casdoor</a>",
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "U9MEH3VSV1",
        apiKey: "9ef7ab8761a6480738185ecd6d1ecde7",
        indexName: "casdoor",
        contextualSearch: true,
      },
    }),
};
