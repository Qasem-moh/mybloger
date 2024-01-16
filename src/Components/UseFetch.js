import {useEffect, useState} from "react";

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isPendig, setIsPending]=useState(true);
    const [error,seterror]=useState(null);

    useEffect(()=>{
        const abortCont=new AbortController();
    })

}

export default useFetch