import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'To Code or to AI Code Research',
  tagline: 'Reshaping Programming Education for the AI Era',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      nl: {
        label: 'Nederlands',
        direction: 'ltr',
        htmlLang: 'nl-NL',
        calendar: 'gregory',
        path: 'nl',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit this page links removed
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Edit this page links removed
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'To Code or to AI Code',
      logo: {
        alt: 'To Code or to AI Code Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/courses', label: 'Courses', position: 'left'},
        {
          type: 'dropdown',
          label: 'For Students',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              label: 'Getting Started',
            },
            {to: '/docs/registration', label: 'Register'},
            {to: '/docs/students/skill-assessment', label: 'Skill Assessment'},
          ],
        },
        {
          type: 'dropdown',
          label: 'For Educators',
          position: 'left',
          items: [
            {to: '/docs/educators/implementation-guide', label: 'Implementation Guide'},
            {to: '/docs/educators/resources', label: 'Resources'},
          ],
        },
        {
          type: 'dropdown',
          label: 'For Industry',
          position: 'left',
          items: [
            {to: '/docs/industry/collaboration', label: 'Partnership'},
            {to: '/docs/industry/judging', label: 'Become a Judge'},
            {to: '/docs/industry/mentorship', label: 'Mentorship'},
          ],
        },
        {
          type: 'dropdown',
          label: 'For Researchers',
          position: 'left',
          items: [
            {to: '/docs/researchers/methodology', label: 'Research Methodology'},
            {to: '/docs/researchers/collaboration', label: 'Collaborate'},
            {to: '/docs/researchers/data', label: 'Data Framework'},
          ],
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          type: 'localeDropdown',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'ROC Nijmegen',
              href: 'https://roc-nijmegen.nl',
            },
            {
              label: 'Projectenplaats',
              href: 'https://projectenplaats.nl',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/davorradic',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} To Code or to AI Code Research Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
