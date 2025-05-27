import applicationData from '@/data/apps'
import AppCard from '@/components/AppCard'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Apps' })

export default function Apps() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
          Apps
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Some of my side projects, please give me some advice.
          </p>
        </div>
        
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {applicationData.map((d) => (
              <AppCard
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

