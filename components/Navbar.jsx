import React from 'react'
import Link from 'next/link'
import DropdownMenu from '../components/DropdownMenu'
import Image from 'next/image'


function Navbar() {
    return (
        <div className='fixed left-0 -top-3 w-full z-10 backdrop-blur-sm flex md:justify-center justify-between m-auto p-2 text-white'>
            <ul className='flex justify-center items-center'>
                <li className='p-4 mr-10'>
                    <Link href="/#">
                        <a>
                        <h2 className='text-3xl text-white font-semibold'>
                            <span className="invert">
                                <Image  width="30" height="30" src="/icons8-cat-footprint-100.png" quality='100'>
                                </Image>
                            </span>
                            &nbsp;Hao Jie</h2>
                        </a>
                      
                    </Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/'><a>&lt; About &#47;&gt;</a></Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/#works'><a>&lt; Works &#47;&gt;</a></Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/#bio'><a>&lt; Bio &#47;&gt;</a></Link>
                </li>
                <li className='p-4 hidden md:block'>
                    <Link href='/#connect'><a>&lt; Find Me &#47;&gt;</a></Link>
                </li>
            </ul>
            <div className='m-4 md:hidden'>
                <DropdownMenu></DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar