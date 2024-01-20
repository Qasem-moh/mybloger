import React from 'react';
import useFetch from "./useFetch";
import Pending from "./Pending";
import BlogList from "./BlogList";

function Home() {
    // const {data,isPending,error}=useFetch('https://qasemmo.onrender.com/getAllArticles')
    const {data,isPending,error}=useFetch('https://newsapi.org/v2/everything?q=Gaza&from=2024-01-19&to=2024-01-19&sortBy=popularity&apiKey=033f8eb6abbb4481a8d57b7c2c6c1ee0')
    console.log(data)
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <Pending/>}
            {data && <BlogList blogs={data}/>}
        </div>
    );
}

export default Home;