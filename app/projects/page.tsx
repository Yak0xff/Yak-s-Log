import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import GitHubControbute from '@/components/learnings/controbute'

export const metadata = genPageMetadata({ title: 'Demos' })

export default function Projects() {
  // 生成 365 个 1~3 的随机数
  const levels = Array.from({ length: 365 }, () => Math.floor(Math.random() * 3) + 1)
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            Demos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My Some side Demos with next.js and tailwindcss. Maybe include others.
          </p>
        </div>
        <GitHubControbute levels={levels} />
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
