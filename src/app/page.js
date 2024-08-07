"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const [movie,setMovie] =useState([]);
    const [input,setInput] =useState("");
    const inputRef =useRef()

    const search = async (movieName) =>{
         fetch(`https://www.omdbapi.com/?apikey=a2526df0&s=${movieName}`)
        .then(res => res.json())
        .then(data => setMovie(data.Search))
    }

    useEffect(() => {
        search("avenger")
    },[]);
    console.log(movie);
  return (
   <>
   <input type="text" ref={inputRef} />
   <button onClick={()=> search (inputRef.current.value)}>search</button>
   {
     movie.map((item) => (
        <div class="">
        <p>{item.Title}</p>
        <img src={item.Poster} alt=""/>
        </div>
     ))
   }

   </>
  );
}
