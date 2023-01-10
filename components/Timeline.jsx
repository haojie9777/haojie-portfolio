import React from 'react'

const Timeline = () => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="to-animate opacity-0 transition-all duration-1000 mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-green-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1997</time>
                <h3 className="text-lg font-semibold text-white dark:text-white">Born in Singapore</h3>
            </li>
            <li className="to-animate opacity-0 transition-all duration-1000 mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-green-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2020</time>
                <h3 className="text-lg font-semibold text-white dark:text-white">Full Stack Developer Intern at Wright Management International </h3>
            </li>
            <li className="to-animate opacity-0 transition-all duration-1000 mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-green-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021</time>
                <h3 className="text-lg font-semibold text-white dark:text-white">Backend Developer Intern at Govtech Singapore</h3>
            </li>
            <li className="to-animate opacity-0 transition-all duration-1000 mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-green-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                <h3 className="text-lg font-semibold text-white dark:text-white">Graduated from Nanyang Technological University with a Bachelor&apos;s Degree in Computer Science</h3>
            </li>
            <li className="to-animate opacity-0 transition-all duration-1000 mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-green-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022 to present</time>
                <h3 className="text-lg font-semibold text-white dark:text-white">Backend Software Engineer at SeaMoney / Shopee / Maribank, working on the latest digital bank in Singapore</h3>
            </li>
            <li className="to-animate opacity-0 transition-all duration-1000 mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-green-300 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023</time>
                <h3 className="text-lg font-semibold text-white dark:text-white">Embark on Master of Computer Science from Georgia Tech</h3>
            </li>
        </ol>
    )
}

export default Timeline
