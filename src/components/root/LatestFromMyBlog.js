 
import { useState, useEffect } from "react";
import services from "@/services";
import { enqueueSnackbar } from "notistack";

import { useRouter } from "next/router"; 

import PostCardSkeleton from "@/components/PostCardSkeleton";
import PostCard from "@/components/PostCard";

export default function LatestFromMyBlog() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    async function setup() {
      try {
        const response = await services.blog.posts.find();
        if (response.status !== 200) {
          enqueueSnackbar("An error occurred while fetching posts!");
        }
        setPosts(response.data.data.posts);
        setIsLoading((isLoading) => {
          isLoading[0] = false;
          return [...isLoading];
        });
      } catch (error) {
        enqueueSnackbar("An error occurred while fetching posts!");
        console.log(error.message);
        console.log(error.stack);
      }
    }
    setup();
  }, []);
  return (
    <div
      className={"font-roboto max-w-[1000px] mx-4 md:mx-10 mt-20 lg:mx-auto"}
    >
      <div className={"mt-10 w-full"}>
        <h1 className={"text-[20px] font-medium"}>{"Latest from my Blog"}</h1>
      </div>
      <div
        className={
          "mt-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"
        }
      >
        {isLoading[0] ? (
          <>
            {[...Array(4)].map((item, index) => {
              return <PostCardSkeleton key={index} />;
            })}
          </>
        ) : (
          <>
            {posts.map((item, index) => {
              return (
                <PostCard post={item} key={index}/>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
