interface Quote {
  index: number,
  content: string,
  author: string,
  link?: string
}

const quotesData: Quote[] = [ 
  {
    index: 1,
    content: '“人啊，长了颗红楼梦的心，却生活在水浒的世界，想交些三国里的桃园弟兄，却总遇到些西游记里的妖魔鬼怪”。',
    author: `@SeerSu`,
    link: `https://me.suus.me/m/hKMZ2VzV3rexqumAviaCyV`
  },
  {
    index: 2,
    content: '何谓积极生活？阿兰·德波顿说，首先是踏访已知环境的热忱；其次是探测未知环境的勇敢；其三是从自己和环境的斡旋中找到乐趣。',
    author: `《旅行的艺术》[英] 阿兰·德波顿`,
    link: `https://book.douban.com/subject/1056461/`
  },
  {
    index: 3,
    content: '穷不倒志，富不癫狂。',
    author: `@Globe Explorer`,
    link: `https://explorer.globe.engineer/search?qd=%5B%7B%22searchbox_query%22%3A%22%E7%A9%B7%E4%B8%8D%E5%80%92%E5%BF%97%EF%BC%8C%E5%AF%8C%E4%B8%8D%E7%99%AB%E7%8B%82%22%2C%22search_id%22%3A%224151e8f9-58a2-4405-9e80-ae9d83442eb6%22%2C%22index%22%3A0%2C%22type%22%3A%22initial_searchbox%22%2C%22clicked_category%22%3Anull%2C%22staged_image%22%3Anull%7D%5D&sid=4151e8f9-58a2-4405-9e80-ae9d83442eb6`
  },
  {
    index: 4,
    content: 'Time is what we want most, but what we use worse.',
    author: `@William Penn`,
    link: ''
  }
]

export default quotesData
