interface Application {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const applicationData: Application[] = [ 
  {
    title: 'ComosSnap',
    description: `This is the Next.js App Router course! In this free interactive course, you'll learn the main 
    features of Next.js by building a full-stack web application. <br /> ① A public home page.
    ② A login page.
    ③ Dashboard pages that are protected by authentication.
    ④ The ability for users to add, edit, and delete invoices. 
    `,
    imgSrc: '/static/apps/CosmoSnap/IMG_0024.png',
    href: 'https://github.com/Yak0xff/nextjs-dashboard',
  },
  {
    title: 'iMessage ChatUI',
    description: `A messages UI for iPhone. ChatMessageTableViewController is like iMessage app. support text && image .
    . But this is not a complete app and now it's deprecated.`,
    imgSrc: '/static/projects/chatui.jpg',
    href: 'https://github.com/Yak0xff/ChatMessageTableViewController',
  },
]

export default applicationData
