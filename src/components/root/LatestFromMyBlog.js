import Image from "next/image";
import { Button as MuiButton } from "@mui/material";
import { useState, useEffect } from "react";
import services from "@/services";
import { enqueueSnackbar } from "notistack";
import moment from "moment";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import PostCardSkeleton from "@/components/PostCardSkeleton";

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
          "mt-4 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
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
                <div
                  key={index}
                  className={
                    "border overflow-hidden border-gray-300 rounded-md"
                  }
                >
                  <div
                    className={
                      "mb-5 h-[200px] overflow-hidden flex border border-gray-300 flex-col justify-center"
                    }
                  >
                    <a
                      href={`https://blog.ilechuks73.com/posts/${item._id}`}
                      target="_blank"
                    >
                      <img
                        src={item.image}
                        alt={"ilechuks73"}
                        className="object-fill"
                      />
                    </a>
                  </div>
                  <div className={"px-2 pb-5"}>
                    <a
                      href={`https://blog.ilechuks73.com/posts/${item._id}`}
                      target="_blank"
                    >
                      <p className={"text-md truncate hover:underline"}>
                        {item.title}
                      </p>
                    </a>
                    <p className={"text-gray-500 text-sm"}>
                      {moment(item.createdAt).format("LL")}
                    </p>
                    <a
                      href={`https://blog.ilechuks73.com/posts/${item._id}`}
                      target="_blank"
                    >
                      <MuiButton
                        className={"!px-0 !text-black !hover:text-underline"}
                        disableRipple={true}
                        endIcon={<IoIosArrowRoundForward />}
                      >
                        Read
                      </MuiButton>
                    </a>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
