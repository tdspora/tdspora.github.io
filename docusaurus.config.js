// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  tagline: "Agile generation and delivery of test data",
  title: "TDspora",
  url: "https://epmc-tdm.github.io",
  baseUrl: "/tdspora.github.io/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "epmc-tdm", // Usually your GitHub org/user name.
  projectName: "landing", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/tdspora/tdspora.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "TDspora Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            position: "right",
            label: "Product",
            //activeBaseRegex: "product/",
            items: [
              {
                label: "Overview",
                to: "/product/overview",
              },
              {
                label: "Data Generation",
                href: "/product/product",
              },
              {
                label: "Advanced Data Sub-setting",
                href: "/product/",
              },
              {
                label: "Data Migration",
                href: "/product/",
              },
              {
                label: "Various SQL dialects",
                href: "/product/",
              },
            ],
          },
          {
            type: "doc",
            docId: "introduction",
            position: "right",
            label: "Documentation",
          },
          {
            to: "/contact",
            position: "right",
            label: "Contact us",
          },
          {
            to: "/demo",
            position: "right",
            label: "Request a Demo",
            className: "button-nav",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
      },
      algolia: {
        contextualSearch: true,
        indexName: "test_docusaurus",
        apiKey: "4e6a035890d549be349064f0b9d4e6e0",
        appId: "7TV43E1U40",
        placeholder: "Search",
      },
      footer: {
        // logo: {
        //   alt: "TDSpora Logo",
        //   src: "img/logo.svg",
        //   href: "/",
        //   // width: 160,
        //   // height: 51,
        // },
        links: [
          {
            title: " ",
            items: [
              {
                html: `
                  <a href="/tdspora.github.io">
                    <img src="/tdspora.github.io/img/logo.svg" alt="TDSpora Logo" />
                  </a>
                `,
              },
            ],
          },
          {
            title: "Product",
            items: [
              {
                label: "Overview",
                href: "/product/overview",
              },
            ],
          },
          {
            title: "Features",
            items: [
              {
                label: "Data Generation",
                href: "/docs/",
              },
              {
                label: "Advanced Data Sub-setting",
                href: "/docs/",
              },
              {
                label: "Data Migration",
                href: "/",
              },
              {
                label: "Various SQL dialects",
                href: "/",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Documentation",
                href: "/docs/introduction",
              },
              {
                label: "Contact us",
                href: "/",
              },
            ],
          },
        ],
        copyright: `Sponsored by <img src="/tdspora.github.io/img/epam-logo.svg" alt="Epam logo"/>`,
      },
    }),
};

module.exports = config;
