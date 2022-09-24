import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

function Navbar() {
    const [dropDown, setDropDown] = useState(false);

    const handleDropDown = () => {
        setDropDown(!dropDown);
    }
    return (
            <div className= 'fixed left-0 -top-3 w-full z-10 backdrop-blur-sm'>
                <div className='m-auto p-3 text-white'>
                    <ul className='flex justify-center'>
                        <li className='p-1 mr-10'>
                            <h1 className='font-bold text-4xl text-white'>🌴Hao Jie</h1>
                        </li>
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
                        {dropDown ? <AiOutlineClose size={20} />
                            : <AiOutlineMenu size={20} />}
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