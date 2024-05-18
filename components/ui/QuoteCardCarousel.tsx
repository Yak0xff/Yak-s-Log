import QuoteCard from './quoteCard'
import quotesData from '@/data/quotesData'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '/css/embla.css'

const OPTIONS: EmblaOptionsType = { loop: true }

export default function QuoteCardCarousel() {
  return (
    <>
      <div className="w-full">
        <EmblaCarousel
          slides={[
            ...quotesData.map((d) => (
              <QuoteCard key={d.index} content={d.content} author={d.author} link={d.link} />
            )),
          ]}
          options={OPTIONS}
        />
      </div>
    </>
  )
}
