import React from 'react'
import apiResponse from "../../response";
import { useParams } from 'react-router';
import { Link } from 'react-router';


export default function BlogDetaials() {

  const payload = apiResponse;

  let { slug } = useParams();
  const element = payload.posts.find((e) => e.slug === slug);
  const { image, title, content, excerpt, author } = element || {};



  return (
    <>

      <div>
        <div className="img">
          <img className='w-full h-[400px] object-cover'   src={image} alt="" />
          <h1 className='text-2xl font-bold'>{title}</h1>
          <p>{excerpt}</p>
          <p>{content}</p>
          <p>{author.name}</p>
        </div>
      </div>

    </>
  )
}
