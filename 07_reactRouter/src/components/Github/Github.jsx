import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/itshirdeshk").then(res => res.json()).then(data => setData(data));
    // }, [])

    const data = useLoaderData();
    return (
        <div className='text-center p-4 bg-gray-400 text-3xl m-4'>Github Followers: {data.followers}
        <img src={data.avatar_url} width={300} alt='Github Profile Picture'/>
        </div>
    )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch("https://api.github.com/users/itshirdeshk");
    return response.json();
}