import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'
import { RoughNotation } from 'react-rough-notation'
import Projects from './projects/page'
import Image from 'next/image'

const MAX_DISPLAY = 12

const slides = ['./static/images/photos/IMG_1027.jpg', './static/images/photos/IMG_1017.jpg']

export default function Home({ posts }) {
  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center gap-8 sm:mb-12 sm:gap-12 lg:flex-row lg:px-0">
          <div className="w-full pt-6 lg:w-1/2">
            <h1 className="pb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 lg:text-6xl">
              Hi, This is{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">Yak</span>
            </h1>
            <h2 className="prose pt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
              👏 Welcome to &nbsp;
              <RoughNotation
                animate={true}
                type="circle"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
              >
                Yak's Log.
              </RoughNotation>
              {`${' '} `}
              <br />
              <br />
              这里记录着各种生活小点滴，希望你能
              <RoughNotation
                animate={true}
                type="circle"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
              >
                开开心心.
              </RoughNotation>
              <br />
              生活充满乐趣！生命值得追忆！
            </h2>
            <div className="mt-6 text-slate-600 dark:text-slate-400">
              <span className="text-sm">Press</span>{' '}
              <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                ⌘
              </span>{' '}
              <span className="text-sm">+ </span>
              <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                K
              </span>{' '}
              <span className="text-sm">to start</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-4 py-8 sm:gap-6 sm:py-12">
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/projects">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-4 py-3 leading-none dark:bg-black sm:px-7 sm:py-4">
                    <span className="flex items-center space-x-3 sm:space-x-5">
                      <span className="pr-2 text-sm text-gray-900 dark:text-gray-100 sm:pr-3 sm:text-base">👨‍💻 Built</span>
                    </span>
                    <span className="pl-4 text-sm text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 sm:pl-6 sm:text-base">
                      Demos&rarr;
                    </span>
                  </span>
                </Link>
              </div>
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/blog">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-4 py-3 leading-none dark:bg-black sm:px-7 sm:py-4">
                    <span className="flex items-center space-x-3 sm:space-x-5">
                      <span className="pr-2 text-sm text-gray-900 dark:text-gray-100 sm:pr-3 sm:text-base">🧑‍🚀 Read</span>
                    </span>
                    <span className="pl-4 text-sm text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 sm:pl-6 sm:text-base">
                      Blog&rarr;
                    </span>
                  </span>
                </Link>
              </div>
              <div className="group relative">
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <Link href="/about">
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-4 py-3 leading-none dark:bg-black sm:px-7 sm:py-4">
                    <span className="flex items-center space-x-3 sm:space-x-5">
                      <span className="pr-2 text-sm text-gray-900 dark:text-gray-100 sm:pr-3 sm:text-base">🤭 About</span>
                    </span>
                    <span className="pl-4 text-sm text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 sm:pl-6 sm:text-base">
                      Me&rarr;
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 px-4 pb-8 pt-6 sm:px-0 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Recent Post
          </h1>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400 sm:text-lg">
            人们会被自己热爱的事物改变，而没有人因为给予而贫穷。
          </p>
        </div>
        {!posts.length && 'No posts found.'}
        <div className="grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 sm:px-0 lg:grid-cols-3">
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, cover, title, summary, tags } = post
            return (
              <article key={slug} className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <Link href={`/blog/${slug}`} className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={cover}
                    width={560}
                    height={420}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={title}
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <time className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                    </div>
                    <h2 className="mb-2 text-lg font-bold leading-8 tracking-tight sm:text-xl">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-gray-900 hover:text-sky-500 hover:duration-300 dark:text-gray-100"
                      >
                        {title}
                      </Link>
                    </h2>
                    <div className="mb-3 flex flex-wrap gap-1 sm:mb-4 sm:gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <p className="prose prose-stone mb-3 max-w-none text-sm text-gray-600 dark:text-gray-400 line-clamp-3 sm:mb-4 sm:text-base">
                      {summary}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 sm:text-base"
                      aria-label={`Read more: "${title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      <Projects />
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
      <div></div>
    </>
  )
}
