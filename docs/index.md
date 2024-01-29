---
layout: home

title: Mobius
titleTemplate: 莫比乌斯

hero:
  name: Mobius
  text: "Knowledge is power"
  tagline: |
    我喜欢拿了橘子跑啊，因为knowledge is power！
  image:
    src: /logonew.png
    alt: Mobius
  actions:
    - theme: brand
      text: 公众号
      link: /guide
    - theme: alt
      text: 影音艺
      link: /zsxq
    - theme: alt
      text: 老照片
      link: /interview/
features:
  - icon: 📋
    title: 公众号
    details: 海量前端面试问题解答，一站式阅读体验。
    link: /interview/
    linkText: 开始刷题
  - icon: 💬
    title: AIGC
    details: 同步 B 站视频，文档用于巩固知识。
    link: /program/npm-package/
    linkText: 编程学习
  - icon: 📓
    title: 阅读
    details: 不再畏惧面试算法，提供刷题路线。
    link: /algorithm/guide/
    linkText: 开始刷题
  - icon: 🚚
    title: 备忘录
    details: 将日常工作中遇到的问题做一份备忘录，方便查阅。
    link: /memo/git-command/
    linkText: 开始查阅
  - icon: 💭
    title: 影音艺
    details: 打造专业的前端技术氛围社群，低调务实。
    link: /zsxq
    linkText: 加入圈子
  - icon: 🔧
    title: 好物
    details: 归纳一些编程相关工具与网站，提高效率。
    link: /tool/
    linkText: 提高效率
  - icon: 🌱
    title: 心流
    details: 程序人生时光机，记录所有美好的时光。
    link: /green/ch
    linkText: 记录当下
  - icon: 🎉
    title: 全球视野
    details: 跟随前沿技术，深度和广度学习。
    link: https://github.com/Chocolate1999
    linkText: 欢迎 Follow
  - icon: 🚩
    title: 经史子集
    details: 文档开源，版权 ChoDocs 所有，禁商业行为。
    link: https://github.com/chodocs/chodocs
    linkText: 欢迎 ⭐
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import { icons } from './socialIcons';

const members = [
  {
    avatar: 'https://www.github.com/Chocolate1999.png',
    name: 'Choi Yang',
    title: '逆水行舟，不进则退',
    desc: 'FE Developer<br/>Creator @ <a href="https://github.com/chodocs/chodocs" target="_blank">ChoDocs</a>',
    links: [
      { icon: 'github', link: 'https://github.com/Chocolate1999' },
      {
       icon: { svg: icons.bilibili } ,link: "https://space.bilibili.com/351534170",
      },
      { icon: 'youtube', link: 'https://www.youtube.com/@chocolate1999'},
      { icon: 'twitter', link: 'https://twitter.com/ycyChocolate' },
    ]
  },
  {
    avatar: 'https://www.github.com/HearLing.png',
    name: 'HearLing',
    title: '热爱学习，不秃头',
    desc: 'FE Developer',
    links: [
      { icon: 'github', link: 'https://github.com/HearLing' },
      {
       icon: { svg: icons.bilibili } ,link: "https://space.bilibili.com/201738571",
      },
    ]
  },
]
</script>

<DataPanel/>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      核心成员介绍
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<HomeContributors/>
