'use client'

import { ReactElement } from 'react'
import Link from '../Link'
import '/css/contribute.css'

const getMonthElements = (): ReactElement[] => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const monthList: ReactElement[] = []
  months.forEach((month, index) => {
    monthList.push(<li key={index}>{month}</li>)
  })
  return monthList
}

const getDayEelents = (): ReactElement[] => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayList: ReactElement[] = []
  days.forEach((day, index) => {
    dayList.push(<li key={index}>{day}</li>)
  })
  return dayList
}

const getLevelElements = (): ReactElement[] => {
  const levelList: ReactElement[] = []
  for (let i = 1; i <= 365; i++) {
    const level = Math.floor(Math.random() * 3) + 1
    levelList.push(
      <li key={i} data-level={level} className="tooltip">
        <span className="tooltiptext">{level} Points.</span>
      </li>
    )
  }
  return levelList
}

const GitHubControbute = () => {
  return (
    <>
      <div className="pt-6 text-center xl:pb-4">
        <Link
          href={`http://localhost:3000/learning`}
          className="inline-block cursor-pointer
                                text-gray-900
                                hover:text-sky-500
                                hover:duration-300
                                dark:text-gray-100"
        >
          <h2
            className="text-3xl
                    font-extrabold
                    tracking-tight
                    hover:text-sky-500
                     hover:duration-300
                     dark:text-gray-100"
          >
            GitHub Contribution Graph with CSS 🔗
          </h2>
        </Link>
        <div className="graph">
          <ul className="months">{getMonthElements()}</ul>
          <ul className="days">{getDayEelents()}</ul>
          <ul className="squares">{getLevelElements()}</ul>
        </div>
      </div>
    </>
  )
}

export default GitHubControbute
