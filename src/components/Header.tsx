'use client';

import { TbGridDots } from "react-icons/tb";
import { FcGoogle } from 'react-icons/fc';
import { ImLab } from 'react-icons/im';
// import { AccountBalance } from 'react-icons/vsc';
import { FaGooglePlay } from 'react-icons/fa';
import { AccountBalance} from "@mui/icons-material";
import { FaRegNewspaper } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import { SiGooglemeet } from 'react-icons/si';
import { SiGooglechat } from 'react-icons/si';
import { FcContacts } from 'react-icons/fc';
import { FaGoogleDrive } from 'react-icons/fa';
import { SiGooglecalendar } from 'react-icons/si';
import { SiGoogletranslate } from 'react-icons/si';
import { SiGooglephotos } from 'react-icons/si';
import { IoIosAddCircle } from 'react-icons/io';
import { PiSignOutBold } from 'react-icons/pi';

import Link from 'next/link';
import { useState } from 'react';

const headerLinks = [
    {
        id: 1,
        text: 'Gmail',
        to: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
    },
    {
        id: 2,
        text: 'Images',
        to: 'https://www.google.com/imghp?hl=en&tab=ri&ogbl',
    },
    {
        id: 3,
        text: (
            <>
                <ImLab size={25} />
            </>
        ),
        to: 'https://www.google.co.uz/intl/uz/about/products?tab=ih',
    },
];

const googleApps = [
    {
        id: 1,
        icon: (
            <>
                <AccountBalance />
            </>
        ),
        title: 'Account',
    },
    {
        id: 2,
        icon: (
            <>
                <FcGoogle size={30} />
            </>
        ),
        title: 'Search',
    },
    {
        id: 3,
        icon: (
            <>
                <FaGooglePlay size={30} />
            </>
        ),
        title: 'Play',
    },
    {
        id: 4,
        icon: (
            <>
                <FaRegNewspaper size={30} />
            </>
        ),
        title: 'News',
    },
    {
        id: 5,
        icon: (
            <>
                <BiLogoGmail size={30} />
            </>
        ),
        title: 'Gmail',
    },
    {
        id: 6,
        icon: (
            <>
                <SiGooglemeet size={30} />
            </>
        ),
        title: 'Meet',
    },
    {
        id: 7,
        icon: (
            <>
                <SiGooglechat size={30} />
            </>
        ),
        title: 'Chat',
    },
    {
        id: 8,
        icon: (
            <>
                <FcContacts size={30} />
            </>
        ),
        title: 'Contact',
    },
    {
        id: 9,
        icon: (
            <>
                <FaGoogleDrive size={30} />
            </>
        ),
        title: 'Drive',
    },
    {
        id: 10,
        icon: (
            <>
                <SiGooglecalendar size={30} />
            </>
        ),
        title: 'Calendar',
    },
    {
        id: 11,
        icon: (
            <>
                <SiGoogletranslate size={30} />
            </>
        ),
        title: 'Translate',
    },
    {
        id: 12,
        icon: (
            <>
                <SiGooglephotos size={30} />
            </>
        ),
        title: 'Photos',
    },
];

const Header = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(false);

    return (
        <header className='w-full py-3 px-4 '>
            <div className='w-full flex items-center justify-end gap-4'>
                {headerLinks.map(link => (
                    <Link
                        className={`text-white p-3 rounded-full duration-150 ${link.id !== 3 ? 'hover:underline ' : 'hover:bg-opacity-50'}`}
                        href={link.to}
                        key={link.id}
                        target='_blank'
                    >
                        {link.text}
                    </Link>
                ))}
                <div className='relative'>
                    <button
                        className={`text-white p-2 hover:bg-opacity-50 rounded-full ${loading ? 'bg-opacity-50' : ''}`}
                        onClick={() => {
                            setLoading(!loading);
                            setProduct(false);
                        }}
                    >
                        <TbGridDots size={25} />
                    </button>
                    <div className={`absolute top-12 right-2 bg-gray-800 rounded-lg border-4 border-gray-900 ${loading ? '' : 'hidden'}`}>
                        <div className='text-white p-2 overflow-y-auto h-[300px] grid grid-cols-3 w-[300px] pt-8 gap-x-8 gap-y-10'>
                            {googleApps.map(app => (
                                <Link href={'#'} key={app.id} className='text-center'>
                                    <span className='flex justify-center mb-1'>{app.icon}</span>
                                    <p>{app.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <button
                        className={`p-1 hover:bg-opacity-50 rounded-full ml-4 ${product ? 'bg-opacity-50' : ''}`}
                        onClick={() => {
                            setProduct(!product);
                            setLoading(false);
                        }}
                    ></button>
                    <div className={`absolute top-14 right-2 p-4 bg-gray-800 rounded-lg ${product ? '' : 'hidden'}`}>
    <div className='flex justify-between items-center mb-3'>
        <div></div>
        <p className='text-gray-300 mr-5'>xXx@gmail.com</p>
        <button className='text-white text-lg rounded hover:bg-opacity-50 px-3 py-1 duration-150' onClick={() => setLoading(false)}>
            X
        </button>
    </div>
    <div className='text-center mb-4'>
        <p className='text-xl text-white mb-3'>Hi, xXx</p>
        <button className='border rounded-lg hover:bg-opacity-50 text-blue-500 px-4 py-2'>Manage your Google account</button>
    </div>
    <div className='w-full flex items-center justify-between'>
        <button className='flex items-center gap-1 px-5 py-3 rounded-md bg-gray-900 text-white'>
            <IoIosAddCircle size={23} />
            <span className='text-white'>Add account</span>
        </button>
        <button className='flex items-center gap-1 px-5 py-3 rounded-md bg-gray-900 text-white'>
            <PiSignOutBold size={23} />
            <span>Sign out</span>
        </button>
    </div>
</div>

                </div>
            </div>
        </header>
    );
};

export default Header;
