'use client'

import Link from '../Link';
import '/css/contribute.css'

const GitHubControbute = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthList: any[] = [];
    months.forEach((month, index) => {
        monthList.push(<li key={index}>{month}</li>);
    });

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayList: any[] = [];
    days.forEach((day, index) => {
        dayList.push(<li key={index}>{day}</li>);
    });

    let levelList: any[] = [];
    for (var i = 1; i < 365; i++) {
        const level = Math.floor(Math.random() * 3);
        levelList.push(<li key={i} data-level={level} className='tooltip'><span className="tooltiptext">
            {level} Points.</span></li>);
    }
    return (
        <>
            <div className='pt-6 xl:pb-4 text-center'>
                <Link
                    href={`http://localhost:3000/learning`}
                    className="inline-block cursor-pointer   
                                text-gray-900  
                                hover:text-sky-500  
                                hover:duration-300  
                                dark:text-gray-100"
                >
                    <h2 className="text-3xl 
                    font-extrabold 
                    tracking-tight
                     hover:text-sky-500  
                     hover:duration-300
                     dark:text-gray-100 ">
                        GitHub Contribution Graph with CSS 🔗
                    </h2>
                </Link>


                <div className="graph">
                    <ul className="months">
                        {monthList}
                    </ul>
                    <ul className="days">
                        {dayList}
                    </ul>
                    <ul className="squares">
                        {levelList}
                    </ul>
                </div>

            </div>

        </>
    )
}

export default GitHubControbute
