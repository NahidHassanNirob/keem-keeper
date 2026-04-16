'use client'
import useFriends from '@/hooks/useFriends';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHome, IoTimeOutline } from 'react-icons/io5';
import { MdHome } from 'react-icons/md';

const MyLinks = ({name,path}) => {
    const activePath=usePathname()
    const{friends}=useFriends()
    

    return (
       
            <Link className={`mx-2 flex gap-1
            ${
                activePath===path? 'bg-[#244D3F] text-white btn' :''
            }
             items-center font-semibold`}  href={path}>
              
             {
                name==='Home'?  <IoHome/>: 
                name==='Timeline'? <IoTimeOutline />:<ImStatsDots />
             }
             <li>{name}</li>
             </Link>
        
    );
};

export default MyLinks;