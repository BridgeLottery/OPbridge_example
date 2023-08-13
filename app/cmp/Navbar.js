import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Navbar = () => {
    return (
        <div className='flex bg-nav text-textnav font-semibold py-4'>
            <div className='w-36 mx-4 pt-3'>
                <img src='./logo.svg' alt='logo op' />
            </div>
            <nav className='flex px-2'>
                <ul className='flex mx-2 font-semibold text-sm'>
                    <li className='mx-5 pt-2 hover:text-white flex items-center justify-center'>Superchain</li>
                    <li className='mx-5 pt-2 hover:text-white flex items-center justify-center'>Governance <span className='flex items-center'><ChevronDownIcon className='h-4 w-4' /></span></li>
                    <li className='mx-5 pt-2 hover:text-white flex items-center justify-center'>Ecosystem <span className='flex items-center'><ChevronDownIcon className='h-4 w-4' /></span></li>
                    <li className='mx-5 pt-2 hover:text-white flex items-center justify-center border-b-2 border-connect'>Bridge</li>
                    <li className='mx-5 pt-2 hover:text-white flex items-center justify-center'> Developers<span className='ml-1'><ChevronDownIcon className='h-4 w-4' /></span></li>
                    <li className='mx-5 pt-2 hover:text-white flex items-center justify-center'>More <span className='flex items-center'><ChevronDownIcon className='h-4 w-4' /></span> </li>
                </ul>
            </nav>
            <div className='ml-auto flex px-5'>
                <button className='bg-connect text-white rounded-full px-4 py-1 font-medium'>Connect Wallet</button>
                <div className='flex items-center px-2.5'>
                    <div className='border border-textnav rounded-full p-2'>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 18a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM13 5.5a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0v3Zm0 17a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0v3Zm4.803-14.596a.5.5 0 0 1-.707-.707l2.05-2.05a.5.5 0 0 1 .708.707l-2.05 2.05Zm-11.95 11.95a.5.5 0 0 1-.707-.708l2.05-2.05a.5.5 0 1 1 .708.707l-2.05 2.05ZM19.5 13a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm-17 0a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm14.596 4.803a.5.5 0 1 1 .707-.707l2.05 2.05a.5.5 0 0 1-.707.708l-2.05-2.05ZM5.146 5.853a.5.5 0 1 1 .708-.707l2.05 2.05a.5.5 0 1 1-.707.708l-2.05-2.05Z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
