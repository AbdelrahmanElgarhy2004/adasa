import React from "react";
import apiResponse from "../../response";
import Posts from "../../Components/Posts/Posts";
import { useState } from "react";
import { Link } from "react-router";

export default function Blog() {
  const payload = apiResponse;

  const [categories, setCategories] = useState("all");

  const fil1teredPosts =
    categories === "all"
      ? payload.posts
      : payload.posts.filter((post) => post.category === categories);

  return (
    <>
      <h3 className="py-10">Blog</h3>

      <ul className="row flex justify-center">
        <li className="cursor-pointer " onClick={() => setCategories("all")}  >جميع المقالات</li>
        {payload.categories.map((category) => {
          return (
            <li
              className="cursor-pointer "
              onClick={() => setCategories(category.name)}
            >
              {category.name}
            </li>
          );
        })}
      </ul>

      <div className="row">
        {fil1teredPosts.map((post) => {
          return (
            <div key={post.id} className="w-full md:w-1/3 lg:w-1/4 m-2">
              <Link to={`/blog/${post.slug}`} >
                <Posts post={post} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
