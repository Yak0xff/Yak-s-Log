import { genPageMetadata } from 'app/seo'
import GitHubControbute from '@/components/learnings/controbute';

export const metadata = genPageMetadata({ title: 'Learning' })

export default function Learning() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Learnings
          </h1>
          My Some side Demos with next.js and tailwindcss. Maybe include others.
        </div>
        {/* GitHub Contribute Graph with css */}
        <GitHubControbute />
      </div>
    </>
  )
}
