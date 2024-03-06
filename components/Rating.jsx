"use client";
import React from "react";
import { useState } from "react";
import "../app/globals.css";
import Head from 'next/head'
import Image from "next/image";

const StarRating = () => {
  const [starCount, setStarCount] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  
  return (<>
    <div className="stars">
      {[...Array(5)].map((_, index) => {
        return <span key={index} className={`${index+1<=starCount ? 'selected' : ''} ${index+1<=hoverRating ? 'selected' : ''}`} onClick={()=>{
          setStarCount(index+1);
        }} onMouseHover={()=>{setHoverRating(index)}}>&#9733;</span>;
      })}<span className="left">{starCount}</span>
    </div>
    </>
  );
};

const OverallRating = ()=>{
    const [liked, setLiked] = useState(true);
  return(<>
    <Head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Icons" /></Head>
    <span className="material-symbols-outlined" onClick={()=>{setLiked(true)}}>
      {liked ? <Image src="/thumb_up_fill.svg" width={30} height={30}/> : <Image src="/thumb_up_empty.svg" width={30} height={30}/>}
</span>
    <span className="material-symbols-outlined" onClick={()=>{
      setLiked(false)}}>
      {!liked ? <Image src="/thumb_down_fill.svg" width={30} height={30}/> : <Image src="/thumb_down_empty.svg" width={30} height={30}/>}
</span>
  </>)
}

export { StarRating,OverallRating};