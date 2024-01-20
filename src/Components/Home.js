import React from 'react';
import useFetch from "./useFetch";
import Pending from "./Pending";
import BlogList from "./BlogList";

function Home() {
    const {data,isPending,error}=useFetch('https://qasemmo.onrender.com/getAllArticles')
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