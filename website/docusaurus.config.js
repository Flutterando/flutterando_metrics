/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Flutterando Metrics',
  tagline: 'Static analysis tool that helps analyse and improve code quality.',
  url: 'https://flutterando.github.io',
  baseUrl: '/flutterando-metrics/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Flutterando',
  projectName: 'flutterando-metrics',
  trailingSlash: false,
  themeConfig: {
    prism: {
      defaultLanguage: 'dart',
      additionalLanguages: ['dart'],
    },
    navbar: {
      title: 'Flutterando Metrics',
      logo: {
        alt: 'Flutterando Metrics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Flutterando/flutterando-metrics',
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
              label: 'Metrics',
              to: 'docs/metrics',
            },
            {
              label: 'Configuration',
              to: 'docs/getting-started/configuration',
            },
            {
              label: 'GitHub Action',
              href: 'https://github.com/Flutterando/flutterando-metrics-action',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/flutterando_',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/flutterando/',
            },
            {
              label: 'Pub',
              href: 'https://pub.dev/packages/flutterando_metrics',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Flutterando/flutterando-metrics',
            },
          ],
        }

      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flutterando Team. <a href="https://storyset.com/people">Illustrations by Storyset</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Flutterando/flutterando-metrics/tree/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // gtag: {
        //   trackingID: 'G-C2B16RHS34',
        // },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
  },
};
