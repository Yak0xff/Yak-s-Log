import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'
import { RoughNotation } from 'react-rough-notation'
import Projects from './projects/page'
import Image from 'next/image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">Yak</span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
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
              {`${' '}Here will ${siteMetadata.description}. I am a Mobile Application Developer who is passionate about Front Develop and Automation. In my free time, I like developing `}
              side projects and learning new technologies.
            </h2>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
              This is my place for{' '}
              <RoughNotation
                animate={true}
                type="box"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
              >
                thoughts, reflections & everything
              </RoughNotation>
              in between. Have a good read!
            </p>
            <p className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              This is my place for{' '}
              <RoughNotation
                animate={true}
                type="highlight"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
              >
                thoughts, reflections & everything&nbsp;
              </RoughNotation>
              in between. Have a good read!{' '}
              <div className="mt-8 text-slate-600 dark:text-slate-400">
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
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/projects">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <span className="pr-3 text-gray-900 dark:text-gray-100">👨‍💻 Built</span>
                      </span>
                      <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Demos&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/blog">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <span className="pr-3 text-gray-900 dark:text-gray-100">🧑‍🚀 Read</span>
                      </span>
                      <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Blog&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/about">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <span className="pr-3 text-gray-900 dark:text-gray-100">🤭 About</span>
                      </span>
                      <span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Me&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="grid md:grid-cols-4">
          <div>
            <Image
              src="/static/images/photos/IMG_1313.jpg"
              width={560}
              height={620}
              className="-rotate-12 cursor-pointer rounded-lg transition-all duration-500 hover:scale-125"
              alt=""
            />
          </div>
          <div>
            <Image
              src="/static/images/photos/IMG_1017.jpg"
              width={560}
              height={620}
              className="-rotate-45 cursor-pointer rounded-lg transition-all duration-500 hover:scale-125"
              alt=""
            />
          </div>
          <div>
            <Image
              src="/static/images/photos/IMG_1027.jpg"
              width={560}
              height={620}
              className="rotate-12 cursor-pointer rounded-lg transition-all duration-500 hover:scale-125"
              alt=""
            />
          </div>
          <div>
            <Image
              src="/static/images/photos/IMG_1524.jpg"
              width={560}
              height={620}
              className="rotate-45 cursor-pointer rounded-lg transition-all duration-500 hover:scale-125"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            Recent Post
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/* {siteMetadata.description} */}
            人们会被自己热爱的事物改变，而没有人因为给予而贫穷。
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, cover, title, summary, tags } = post
            return (
              <li key={slug} className="py-5">
                <article>
                  <div className="xl:items-top space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0">
                    <Image
                      src={cover}
                      width={560}
                      height={620}
                      className="size-52 cursor-pointer rounded-lg border border-red-100 object-cover transition-all duration-300 hover:scale-105 xl:col-span-1"
                      alt=""
                    />
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <div>
                            <h2 className="text-xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="inline-block cursor-pointer   
                                text-gray-900  
                                hover:text-sky-500  
                                hover:duration-300  
                                dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <dd className="font-small pt-2 text-base leading-6 text-gray-500 dark:text-gray-200">
                              <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                            </dd>
                          </div>
                          <div className="flex flex-wrap pt-1">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose prose-stone max-w-none text-gray-600 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="font-small text-base leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
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
