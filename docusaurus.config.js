// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Co-Author',
  tagline: 'Technical Writing in the Age of AI',
  favicon: 'img/favicon.ico',

  // --- DEPLOYMENT SETTINGS ---
  // Using your verified GitHub username: JackSteve-code
  url: 'https://JackSteve-code.github.io', 
  baseUrl: '/my-ai-blog/', 
  organizationName: 'JackSteve-code', 
  projectName: 'my-ai-blog', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'ignore', 
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AI Co-Author',
        logo: {
          alt: 'Logo',
          src: 'img/cloud.png', 
        },
        items: [
          {
            href: 'https://github.com/JackSteve-code/my-ai-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'The Rise of AI',
                to: '/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Tech Writer. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;