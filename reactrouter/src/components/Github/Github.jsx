import React, { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router-dom';

const Github = () => {
    const Followers = useLoaderData();
    
    // const [Followers,setFollowers] = useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/erajneeshverma")
    //     .then(res=> res.json())
    //     .then(data=>{
    //         setFollowers(data);
    //         console.log(data);
    //     });
    // },[]);
  return (
    <div className='flex justify-center items-center text-center m-4 bg-gray-600 text-white text-3xl p-4'>
        <div className='m-4'>
            <img
                src={Followers.avatar_url}
                height={100}
                width={150}
            />
        </div>
        <div className='text-center'>
            <p>Name : {Followers.name}</p>
            <p>Github Followers : {Followers.followers}</p>
            <p>User Id : {Followers.login}</p>
            <p>Followings : {Followers.following}</p>
        </div>
    </div>
  )
}

export default Github;


export const githubInfoLoader = async () =>{
    const response = await fetch(`https://api.github.com/users/erajneeshverma`)
    return response.json();
}