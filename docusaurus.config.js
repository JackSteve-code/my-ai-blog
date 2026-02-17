// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Co-Author',
  tagline: 'Technical Writing in the Age of AI',
  favicon: 'img/favicon.ico',

  // --- DEPLOYMENT SETTINGS START ---
  // If your GitHub username is 'jacksteve', the URL is 'https://jacksteve.github.io'
  url: 'https://YOUR_GITHUB_USERNAME.github.io', 
  
  // This must match your GitHub repository name with slashes
  baseUrl: '/my-ai-blog/', 

  // Your GitHub username
  organizationName: 'YOUR_GITHUB_USERNAME', 
  
  // Your GitHub repository name
  projectName: 'my-ai-blog', 

  // GitHub Pages uses this branch to host the files
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // --- DEPLOYMENT SETTINGS END ---

  onBrokenLinks: 'throw',
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
        blog: false, // Fully disabled the blog engine here
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
          src: 'img/cloud.png', // Switched to your cloud image
        },
        items: [
          {
            href: 'https://github.com/YOUR_GITHUB_USERNAME/my-ai-blog',
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