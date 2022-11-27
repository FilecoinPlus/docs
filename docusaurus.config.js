// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Filecoin Plus Docs',
  tagline: 'Everything you need to know about Filecoin Plus!',
  url: 'https://docs.filplus.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nikas-org',
  projectName: 'filecoin-plus-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/nikas-org/filecoin-plus-docs/blob/main/',
          breadcrumbs: false,
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        },
        theme: {
          // customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-NVXKSQYCC4',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Filecoin Plus',
        logo: {
          alt: 'Filecoin Plus Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/nikas-org/filecoin-plus-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/',
              },
              {
                label: 'About Filecoin Plus',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/filecoin-plus',
              },
              {
                label: 'Slack',
                href: 'https://filecoin.io/slack',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Portal',
                to: 'https://portal.filplus.dev/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nikas-org/filecoin-plus-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nikas.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
