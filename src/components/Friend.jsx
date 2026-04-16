import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Friend = ({friend}) => {
    const {id,name,picture,days_since_contact,status,tags}=friend;
    return (
      <Link href={`/friend-details/${id}`}>
      <div className='text-center space-y-1 bg-white rounded-md shadow py-5 px-2'>
            <div>
                <Image className='mx-auto rounded-full' src={picture}  alt='friend picture' height={100} width={100}></Image>
            </div>
            <h2 className='font-bold'>{name}</h2>
            <p>{days_since_contact}d ago</p>
            <ul>
                {tags.map((tag,index)=><li className='badge bg-[#CBFADB] mx-1 text-[#244D3F]' key={index}>{tag}</li>)}
            </ul>
            <p className={`${
                status==="overdue"? 'bg-[#EF4444] text-white badge':
                status==="almost due"?' badge bg-[#EFAD44] text-white' :'bg-[#244D3F] text-white badge' 
            }`}>{status}</p>
        </div>
      </Link>  
    );
};

export default Friend;