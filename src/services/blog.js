import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BLOG_API_BASE_URL;

axios.defaults.validateStatus = function () {
  return true;
};

const blog = {
  posts: {
    find: async function () {
      return axios({
        method: "GET",
        url: `${baseURL}/posts/find`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
    },
    single: {
      find: async function (query) {
        console.log(query)
        return axios({
          method: "GET",
          url: `${baseURL}/posts/${query.id}/find`,
          headers: {
            "Content-Type": "application/json",
          },
        });
      },
    },
  },
};

export default blog;