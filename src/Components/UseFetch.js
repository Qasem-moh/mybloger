import {useEffect, useState} from "react";

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isPendig, setIsPending]=useState(true);
    const [error,seterror]=useState(null);

    useEffect(()=>{
        const abortCont=new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data from the resource")
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false)
                    setData(data)
                    seterror(null)
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborting")
                    } else {
                        setIsPending(false)
                        seterror(err.message)
                    }
                })
        }, 1000)
        return () => abortCont.abort()
    }, [url])
    return {data, isPendig, error}
}

export default useFetch