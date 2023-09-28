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
    // algolia: {
    //   appId: 'Q3534T5ZJ0',
    //   apiKey: '66c0ccc5277ab9519e66226ddb05bf50',
    //   indexName: 'flutterandometrics',
    // },
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
          to: 'docs/getting-started/introduction',
          label: 'Getting started',
          position: 'left',
          activeBasePath: 'docs/getting-started',
        },
        {
          to: 'docs/rules',
          label: 'Rules',
          position: 'left',
          activeBasePath: 'docs/rules',
        },
        {
          to: 'docs/metrics',
          label: 'Metrics',
          position: 'left',
          activeBasePath: 'docs/metrics',
        },
        {
          to: 'docs/cli',
          label: 'Commands',
          position: 'left',
          activeBasePath: 'docs/cli',
        },
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
              label: 'Rules',
              to: 'docs/rules',
            },
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
              href: 'https://twitter.com/search?q=%23dartcodemetrics&src=typed_query',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/DartCodeMetrics',
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
        },
        {
          title: 'More',
          items: [
            // TODO(incendial): add blog later
            // {
            //   label: 'Blog',
            //   to: 'docs/getting-started/introduction',
            // },
            {
              label: 'Official lint package',
              href: 'https://pub.dev/packages/lints',
            },
            {
              label: 'Flutter Linting Comparison',
              href: 'https://rydmike.com/blog_flutter_linting',
            },
          ],
        },
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
