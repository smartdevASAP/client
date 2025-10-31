import { waiting_img } from "../assets/assets";
import { Link } from "react-router-dom";
import API from "../api/axios";
import { useEffect, useState } from "react";

interface Post {
  _id: string;
  caption: string;
  images: string[];
  author: {
    username: string;
    email: string;
  };
  createdAt: string;
}

function Feed() {
  const [allUsers, setAllUsers] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/post/allUsersPosts"); // or /allPosts
        setAllUsers(res.data.posts || []);
        console.log("Fetched posts:", res.data.posts.length);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <p className="text-2xl font-bold text-gray-600 mb-4">Feed</p>

      {allUsers.length === 0 ? (
        <div className="flex items-center justify-center min-h-[70vh] bg-gray-50 rounded-lg">
          <div className="bg-gray-100/2 p-4 rounded-lg shadow-sm ">
            {waiting_img.map((img) => (
              <img key={img.img} className="w-72 mb-6" src={img.img} alt="" />
            ))}
            <p className="text-sm mb-8 text-gray-700 text-center">
              waiting for you or your friends to upload images 😅
            </p>
            <Link to="/dashboard/posts">
              <button className="p-2 rounded-sm bg-blue-600 text-white font-semibold shadow-sm w-full text-center">
                Upload
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {allUsers.map((post) =>
            post.images.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={img}
                  alt={post.caption || "User post"}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Feed;
