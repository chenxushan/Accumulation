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
      link: /socialmedia/
    - theme: alt
      text: 影音艺
      link: /zsxq
    - theme: alt
      text: 老照片
      link: /interview/
features:
  - icon: 🎥
    title: 公众号
    details: 弘扬真善美，反对假恶丑。
    link: /socialmedia/
    linkText: follow inner voice
  - icon: ♾️
    title: AIGC
    details: 拥抱AI。
    link: /program/npm-package/
    linkText: 人工智能
  - icon: 📓
    title: 阅读
    details: 书中自有黄金屋，书中自有颜如玉。
    link: /algorithm/guide/
    linkText: 阅读是砍向我们内心冰封大海的斧头
  - icon: 🧠
    title: 备忘录
    details: 将日常工作中遇到的问题做一份备忘录，方便查阅。
    link: /memo/git-command/
    linkText: 开始查阅
  - icon: 🎞️
    title: 影音艺
    details: 电影和音乐是最“廉价”的艺术品，即使我们一无所有的时候，我们依然可以听自己喜欢的音乐， 看自己喜欢的电影......
    link: /zsxq
    linkText: 一起分享吧
  - icon: 🧰
    title: 好物
    details: 分享好物是人间美德。
    link: /tool/
    linkText: 分享好物
  - icon: 🤔
    title: 心流
    details: 思考，积淀，记录美好时光。
    link: /flow/
    linkText: 心路历程
  - icon: 🧬
    title: 全球视野
    details: 跟随前沿技术，探索、认识、发现世界。
    link: https://github.com/chenxushan
    linkText: 欢迎一起
  - icon: 📜
    title: 经史子集
    details: 每个人都能自由地看到我们的历史、文明。
    link: https://github.com/chenxushan
    linkText: 传统文化
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
    avatar: 'https://avatars.githubusercontent.com/u/6702693?v=4',
    name: '山带逛',
    title: '拿了橘子跑啊',
    desc: 'Coder_doer <br/>Creator @ <a href="https://github.com/chenxushan/Accumulation" target="_blank">Mobius</a>',
    links: [
      { icon: 'github', link: 'https://github.com/chenxushan/Accumulation' },
      {
       icon: { svg: icons.wechat } ,link: "https://mp.weixin.qq.com/s/vgJJhtM4zyoMEP2RIPF8pg",
      },
      { icon: { svg: icons.zsxq }, link: 'https://wx.zsxq.com/dweb2/index/group/228154215851'},
      { icon: { svg: icons.redbook }, link: 'https://www.xiaohongshu.com/user/profile/56e964f4aed7581aceee190e' },
    ]
  }
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
