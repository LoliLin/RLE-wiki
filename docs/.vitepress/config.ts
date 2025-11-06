import genConfig from '@project-trans/vitepress-theme-project-trans/config'
import type { SidebarOptions } from '@project-trans/vitepress-theme-project-trans/theme'
import type { ThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import { withThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import type { DefaultTheme } from 'vitepress'

type NavConfig = DefaultTheme.Config['nav']

const nav: NavConfig = [
  {
    text: "大学指南",
    link: "/RLE-wiki/campus/",
  },
  {
    text: "时尚护理",
    link: "/RLE-wiki/fashion/",
  },
  {
    text: "安全防护",
    link: "/RLE-wiki/personal-safety/",
  },
  {
    text: "志愿填报",
    link: "/RLE-wiki/admission/",
  },
  {
    text: "海外生活",
    link: "/RLE-wiki/overseas/",
  },
  {
    text: "其它",
    link: "/RLE-wiki/others/",
  },
  {
    text: "贡献指南",
    items: [
      {
        text: "校园版块投稿指南",
        link: "/RLE-wiki/contributor-guide/campus.md",
      },
      {
        text: "其他投稿指南",
        link: "/RLE-wiki/contributor-guide/other.md",
      },
      {
        text: "校园版块贡献模板",
        link: "/RLE-wiki/contributor-guide/CampusTemplate.md",
      },
    ],
  },
];

const baseConfig = {
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  excludeFilesByFrontmatterFieldName: 'exclude',
  collapsed: true,
  documentRootPath: '/docs',
  base: '/RLE-wiki/',
} satisfies Partial<SidebarOptions>

const sidebarOptions = [
  // 大学指南
  {
    ...baseConfig,
    scanStartPath: "campus",
    resolvePath: "/RLE-wiki/campus/",
  },
  // 贡献指南
  {
    ...baseConfig,
    scanStartPath: "contributor-guide",
    resolvePath: "/RLE-wiki/contributor-guide/",
  },
  // 时尚护理
  {
    ...baseConfig,
    scanStartPath: "fashion",
    resolvePath: "/RLE-wiki/fashion/",
  },
  // 安全防护
  {
    ...baseConfig,
    scanStartPath: "personal-safety",
    resolvePath: "/RLE-wiki/personal-safety/",
  },
  // 志愿填报
  {
    ...baseConfig,
    scanStartPath: "admission",
    resolvePath: "/RLE-wiki/admission/",
  },
  // 海外生活
  {
    ...baseConfig,
    scanStartPath: 'overseas',
    resolvePath: '/RLE-wiki/overseas/',
  },
  // 其它
  {
    ...baseConfig,
    scanStartPath: "others",
    resolvePath: "/RLE-wiki/others/",
  },
];
const disclaimerStr = '<p>特别注意，RLE.wiki 中的医学、法律或其他专业内容仅供参考，并不能替代专业人士的建议。RLE.wiki 不提供法律或医学建议，请在必要时咨询合资格的专家。</p>' +
'<p>RLE.wiki 中提及的任何机构、服务或产品相关内容仅供参考，不构成任何形式的推荐或保证，也无法对所提及内容的真实性或可靠性提供担保，请您务必谨慎甄别相关信息。</p>' +
'<p>若存在任何有误或不当内容，请联系 <a href="mailto:rlewiki@project-trans.org">rlewiki@project-trans.org</a>。</p>';
const commonDisclaimerStrSummary = 'RLE.wiki 的内容仅供参考，可能存在过时或不准确的信息，请谨慎甄别。';
const commonDisclaimerStrDetail = '<p>RLE.wiki 的内容仅供参考，可能存在过时或不准确的信息，请谨慎甄别。</p>' +
  '<p>RLE.wiki 中的内容，多数来自于读者投稿，并经编辑简单整理和形式审查后登载，主要体现投稿者主观观点，不代表 RLE.wiki 编辑团队及我们的任何相关维护人员立场。</p>' +
  disclaimerStr;

const themeConfig: ThemeContext = {
  siteTitle: 'RLE.wiki',
  siteDescription: '一份 RLE 指北',
  siteLogo: '/logo-horizontal.svg',
  // SiteTitle值为false时，logo位置不显示标题。未定义SiteTitle时，显示标题。SiteTitle值为abcd时，显示abcd。
  SiteTitle: false,
  /** Repo */
  githubRepoLink: 'https://github.com/LoliLin/RLE-wiki',
  /** vitepress 根目录 */
  rootDir: 'docs',
  /** 文档所在目录（目前似未使用此项） */
  include: ['campus', 'contributor-guide', 'fashion'],
  nav,
  sidebarOptions,
  /** 文档所在目录（用于GitHub编辑链接） */
  sitePattern: `docs`,
  hostName: 'https://lolilin.github.io/RLE-wiki',
  enableDisclaimer: true,
  disclaimerPaths: [
    {
      path: '/RLE-wiki/campus/',
      summaryHtml: 'RLE.wiki「大学指南」中的内容，仅供参考。可能存在过时或不准确的信息，请谨慎甄别。',
      detailHtml: '<p>RLE.wiki「大学指南」中的内容，仅供参考。可能存在过时或不准确的信息，请谨慎甄别。</p>' +
        '<p>「大学指南」板块中的内容，多数来自于读者投稿，并经编辑简单整理和形式审查后登载，主要体现投稿者主观观点，不代表 RLE.wiki 编辑团队及我们的任何相关维护人员立场。</p>' +
        disclaimerStr,
    },
    {
      path: '/RLE-wiki/fashion/',
      summaryHtml: 'RLE.wiki「时尚护理」中的内容，多数来自于读者投稿，主要体现投稿者主观观点，仅供参考。',
      detailHtml: '<p>RLE.wiki「时尚护理」中的内容，多数来自于读者投稿，主要体现投稿者主观观点，仅供参考。</p>' +
        '<p>「时尚护理」板块中的内容，多数仅为对投稿内容进行简单整理和形式审查后登载，不代表 RLE.wiki 编辑团队及我们的任何相关维护人员立场。</p>' +
        disclaimerStr,
    },
    {
      path: '/RLE-wiki/personal-safety/',
      summaryHtml: commonDisclaimerStrSummary,
      detailHtml: commonDisclaimerStrDetail,
    },
    {
      path: '/RLE-wiki/admission/',
      summaryHtml: commonDisclaimerStrSummary,
      detailHtml: commonDisclaimerStrDetail,
    },
    {
      path: '/RLE-wiki/overseas/',
      summaryHtml: commonDisclaimerStrSummary,
      detailHtml: commonDisclaimerStrDetail,
    },
    {
      path: '/RLE-wiki/others/',
      summaryHtml: commonDisclaimerStrSummary,
      detailHtml: commonDisclaimerStrDetail,
    },
  ],
  disclaimerStatusKey: 'disclaimerStatus',
  disclaimerStatusExpiration: 2592000000, // 30 days
}

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, genConfig)
