import { version } from '../../package.json'

// base info
export const name = 'Mobius'
export const site = 'https://mobius.cool/'
export const logo = 'https://mobius.cool/mobius.svg'
export const keywords = '公众号、AIGC、阅读、备忘录、影音艺、好物、心流、全球视野、经史子集、老照片'
export const description = '我喜欢拿了橘子跑啊，因为knowledge is power！'

// social link
export const bilibili = 'https://www.xiaohongshu.com/user/profile/56e964f4aed7581aceee190e'
export const xiaohongshu = 'https://www.xiaohongshu.com/user/profile/56e964f4aed7581aceee190e'
export const github = 'https://github.com/chenxushan'

// docs version
export const docsVersion = version

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
