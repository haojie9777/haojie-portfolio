import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

function Navbar() {
    const [dropDown, setDropDown] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');


    const handleDropDown = () => {
        setDropDown(!dropDown);
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 40) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor)
    }, [])

    return (
            <div style={{ backgroundColor: `${color}`}} className= 'fixed left-0 top-0 w-full z-10 ease-in duration-300'>
                <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                    <Link href='/'>
                        <h1 className='font-bold text-4xl text-emerald-500'>
                            Hao Jie</h1>
                    </Link>
                    <ul style={{ color: `${textColor}`}} className='hidden sm:flex'>
                        <li className='p-4'>
                            <Link href='/'>&#47;&#47; Home</Link>
                        </li>
                        <li className='p-4'>
                        <Link href='/#experience'>&#47;&#47; Experience</Link>
                        </li>
                        <li className='p-4'>
                        <Link href='/#work'>&#47;&#47; Work</Link>
                        </li>
                        <li className='p-4'>
                        <Link href='/#connect'>&#47;&#47; Connect</Link>
                        </li>
                    </ul>
    
                    {/* Mobile Button */}
                    <div onClick={handleDropDown} className='block sm:hidden z-10'>
                        {dropDown ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                            : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
                    </div>
                    {/* Mobile Menu */}
                    <div className={
                        dropDown
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
    
                    }>
                        <ul>
                            <li onClick={handleDropDown} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li onClick={handleDropDown} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/#experience'>Experience</Link>
                            </li>
                            <li onClick={handleDropDown} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/#work'>Work</Link>
                            </li>
                            <li onClick={handleDropDown} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/#connect'>Connect</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    
    )
}

export default Navbar