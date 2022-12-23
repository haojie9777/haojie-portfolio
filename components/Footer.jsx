import React from 'react'

const Footer = () => {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/#" className="flex items-center mb-4 sm:mb-0">
                    <img src="icons8-cat-back-view-32.png" className="mr-3 h-8" alt="Cat Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Back to Top</span>
                </a>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-800 sm:text-center">© 2022 Hao Jie | All Rights Reserved.
            </span>
        </footer>
    )
}
export default Footer