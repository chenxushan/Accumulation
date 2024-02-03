import autoSidebar from './theme/plugins/autoSidebarBeta'

export default {
  '/': [
    {
      text: '🎥 公众号',
      collapsed: false,
      items: [
        { text: '阅读须知', link: '/guide' },
        {
          text: '公众号',
          items: [
            {
              text: '原创',
              link: '/weekly/guide',
            },
          ],
        },
        {
          text: '小红书',
          items: [
            {
              text: '原创',
              link: '/weekly/guide',
            },
          ],
        },
        {
          text: '知识星球',
          items: [
            {
              text: '原创',
              link: '/weekly/guide',
            },
          ],
        },
      ],
    },
    {
      text: '♾️ AIGC',
      collapsed: false,
      items: [
        { text: '添加 sitemap', link: '/nextjs/sitemap/' },
      ],
    },
    {
      text: '📓 阅读',
      collapsed: false,
      items: [
        { text: '基于 Vue3 后台管理系统', link: '/vuejs/vue3-management-system/' },
      ],
    },
    {
      text: '🎞️ 影音艺',
      collapsed: false,
      items: [
        { text: '导读', link: '/ts/ch' },
      ],
    },
    {
      text: '📝 备忘录',
      collapsed: false,
      items: [{ text: 'Git 命令', link: '/memo/git-command/' }],
    },
  ],
  '/program/': sidebarProgram(),
  '/patterns/': sidebarPartterns(),
  '/algorithm/': sidebarAlgorithm(),
  '/green/': [
    {
      text: '🧬 全球视野',
      collapsed: false,
      items: [
        { text: '阅读须知', link: '/green/ch' },
        {
          text: '2019年 第二届信息科学与工程学院院赛-正式赛(赛后感想)',
          link: '/green/ch1',
        },
      ],
    },
    {
      text: '🤔 心流',
      collapsed: false,
      items: [
        {
          text: '🏆 从大一到大三，我与服务外包大赛',
          link: '/green/hl-contest/',
        },
      ],
    },
  ],
  '/tool/': [
    {
      text: '🎒 好物',
      collapsed: false,
      items: [
        { text: 'emoji-list', link: '/tool/emoji-list' },
        { text: 'finalcut 剪辑快捷键', link: '/tool/finalcut/' },
        { text: '什么时候下班？', link: '/tool/off-time/' },
        { text: '如何正常访问 GitHub？', link: '/tool/github520' },
        { text: '版本管理，Git 基础', link: '/tool/git/' },
      ],
    },
  ],
  '/essay/': autoSidebar({ base: 'essay' }),
  '/interview/': sidebarInterview(),
}

function sidebarPartterns() {
  return [
    {
      text: '📔 前端设计模式',
      collapsed: false,
      items: [
        { text: '导读', link: '/patterns/guide/' },
        { text: '单例模式', link: '/patterns/singleton-pattern/' },
        { text: '代理模式', link: '/patterns/proxy-pattern/' },
        { text: '提供者模式', link: '/patterns/provider-pattern/' },
        { text: '原型模式', link: '/patterns/prototype-pattern/' },
        {
          text: '容器/演示模式',
          link: '/patterns/container-presentational-pattern/',
        },
        { text: '观察者模式', link: '/patterns/observer-pattern/' },
        { text: '模块模式', link: '/patterns/module-pattern/' },
        { text: '混合模式', link: '/patterns/mixin-pattern/' },
        { text: '中介/中间件模式', link: '/patterns/middleware-pattern/' },
        { text: '高阶组件模式', link: '/patterns/hoc-pattern/' },
      ],
    },
  ]
}

function sidebarProgram() {
  return [
    {
      text: '💻 编程学习',
      items: [
        { text: '介绍', link: '/program/' },
        {
          text: '编程实战',
          items: [
            { text: '发布 npm 包', link: '/program/npm-package/' },
            { text: 'tRPC 基础篇', link: '/program/trpc/' },
          ],
        },
        {
          text: 'VitePress 配置',
          items: [
            {
              text: '给 VitePress 添加 algolia 搜索',
              link: '/program/vitepress-algolia/',
            },
            {
              text: '接上 algolia 搜索（补充）',
              link: '/program/vitepress-algolia-plus/',
            },
            {
              text: '接上 algolia 搜索（解决）',
              link: '/program/vitepress-algolia-solved/',
            },
            {
              text: '给 VitePress 添加本地搜索功能',
              link: '/program/vitepress-local-search/',
            },
            {
              text: 'VitePress 插件合集（beta）',
              link: '/program/vitepress-plugin/',
            },
          ],
        },
      ],
    },
  ]
}

function sidebarInterview() {
  return [
    {
      items: [{ text: '介绍', link: '/interview/' }],
    },
    {
      text: '模拟面试',
      collapsed: false,
      items: [
        { text: '介绍', link: '/interview/interviewer/' },
        { text: '模拟面试 01', link: '/interview/interviewer/01' },
        { text: '模拟面试 02', link: '/interview/interviewer/02' },
        { text: '模拟面试 03', link: '/interview/interviewer/03' },
      ],
    },
    {
      text: '春招实习',
      collapsed: false,
      items: [
        {
          text: '询问面试官的问题',
          link: '/interview/spring-internship/interviewer/',
        },
      ],
    },
    {
      text: '2023 面试合集',
      collapsed: false,
      items: [{ text: 'isolcat 三月实习', link: '/interview/isolcat/' },
        { text: 'HearLing 六月社招', link: '/interview/2023/hearling' }],
    },
    {
      text: 'React',
      collapsed: false,
      items: [{ text: '模拟面试', link: '/interview/react-summary/' }],
    },
    {
      text: 'Vue',
      collapsed: false,
      items: [{ text: '模拟面试', link: '/interview/vue/' }],
    },
    {
      text: '前端基础：js/html/css/ts',
      collapsed: false,
      items: [
        { text: 'JS 老照片', link: '/interview/js/' },
      ],
    },
    {
      text: '操作系统/网络/浏览器',
      collapsed: false,
      items: [
        { text: '操作系统', link: '/interview/system/' },
      ],
    },
  ]
}

function sidebarAlgorithm() {
  return [
    {
      items: [
        { text: '📓 导读', link: '/algorithm/guide/' },
        { text: '数据结构', link: '/algorithm/guide/classic1' },
      ],
    },
    {
      text: 'Hash Table 哈希表',
      collapsed: false,
      items: [
        { text: '介绍', link: '/algorithm/hash-table/' },
      ],
    },
    {
      text: 'Stack 栈',
      collapsed: false,
      items: [
        { text: '20. 有效的括号', link: '/algorithm/stack/20' },
      ],
    },
    {
      text: 'Queue 队列',
      collapsed: false,
      items: [
        {
          text: '933. 最近的请求次数',
          link: '/algorithm/queue/933',
        },
      ],
    },
    {
      text: 'Backtracking 递归与回溯',
      collapsed: false,
      items: [
        {
          text: '08.08. 有重复字符串的排列组合',
          link: '/algorithm/recursion-backtracking/08.08',
        },
      ],
    },
    {
      text: 'Tree 二叉树',
      collapsed: false,
      items: [
        { text: '100. 相同的树', link: '/algorithm/binary-tree/100.相同的树' },
      ],
    },
    {
      text: 'Linked List 链表',
      collapsed: false,
      items: [
        { text: '2. 两数相加', link: '/algorithm/linked-list/2.两数相加' },
      ],
    },
    {
      text: 'Dynamic Programming 动态规划',
      collapsed: false,
      items: [
        { text: '62. 不同路径', link: '/algorithm/dp/62.不同路径' },
      ],
    },
    {
      text: 'Two Pointers 双指针',
      collapsed: false,
      items: [
        {
          text: '11. 盛最多水的容器',
          link: '/algorithm/double-pointer/11.盛最多水的容器',
        },
      ],
    },
  ]
}
