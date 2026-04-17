'use client'
import useFriends from '@/hooks/useFriends';
import React from 'react';
import Friend from './Friend';
import Loading from './Loading';


const FriendsData = () => {
    const {friends,loading}=useFriends()
    if(loading){
        return <Loading></Loading>
    }


    return (
        <div className=' container mx-auto px-4 space-y-5'>
            <h2 className='font-bold text-2xl text-left'>Your Friends</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                {
                    friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default FriendsData;