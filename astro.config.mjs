// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import starlightHeadingBadges from 'starlight-heading-badges';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import starlightImageZoom from 'starlight-image-zoom';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://dgutcs.wiki',
  base: '/src',
  integrations: [
    react(),
    starlight({
      title: 'DGUT CS WIKI',
      disable404Route: true,
      social: {
        github: 'https://github.com/MongoRolls/dgut-cs-wiki'
      },
      plugins: [starlightHeadingBadges(), starlightImageZoom()],
      customCss: ['./src/tailwind.css'],
      sidebar: [
        {
          label: '📖 前言',
          // 默认折叠
          // collapsed: true,
          autogenerate: { directory: '前言' }
        },
        {
          label: '🚀 新手入门',
          // collapsed: true,
          autogenerate: { directory: '新手入门' }
        },
        {
          label: '🏆 竞赛经验',
          collapsed: true,
          autogenerate: { directory: '竞赛经验' }
        },
        {
          label: '🛠️ 开发工具',
          collapsed: true,
          autogenerate: { directory: '开发工具' }
        },
        {
          label: '📚 学科课程',
          // collapsed: true,
          autogenerate: { directory: '学科课程' }
        },
        {
          label: '🌐 后端开发',
          collapsed: true,
          autogenerate: { directory: '后端开发' }
        },
        {
          label: '💻 前端开发',
          collapsed: true,
          autogenerate: { directory: '前端开发' }
        },
        {
          label: '🤖 人工智能',
          collapsed: true,
          autogenerate: { directory: '人工智能' }
        },
        {
          label: '🎓 考研经验',
          collapsed: true,
          autogenerate: { directory: '考研经验' }
        },
        {
          label: '💼 工作经验',
          collapsed: true,
          autogenerate: { directory: '工作经验' }
        },
        {
          label: '🌍 考公留学',
          collapsed: true,
          autogenerate: { directory: '考公留学' }
        }
      ]
    }),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    }),
    tailwind({
      // 禁用默认的基础样式
      applyBaseStyles: false
    }),
    sitemap()
  ]
});
