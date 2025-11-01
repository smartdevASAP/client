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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res = await API.get("/post/allUsersPosts");
        setAllUsers(res.data.posts || []);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-50">
      <p className="text-xl sm:text-2xl font-bold text-gray-700 mb-6">Feed</p>

      {/* 🌀 Loading Spinner */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 font-medium text-sm sm:text-base">
            Fetching latest posts...
          </p>
        </div>
      ) : allUsers.length === 0 ? (
        // 😅 No posts yet
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center border border-gray-100 max-w-sm">
            {waiting_img.map((img) => (
              <img
                key={img.img}
                className="w-48 sm:w-64 mb-4 sm:mb-6 mx-auto"
                src={img.img}
                alt=""
              />
            ))}
            <p className="text-xs sm:text-sm mb-6 text-gray-600">
              Waiting for you or your friends to upload images 😅
            </p>
            <Link to="/dashboard/posts">
              <button className="p-2 rounded-md bg-blue-600 text-white font-semibold shadow-sm w-full text-sm hover:bg-blue-700 transition-all">
                Upload a Post
              </button>
            </Link>
          </div>
        </div>
      ) : (
        // ✅ Posts Grid
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {allUsers.map((post) =>
            post.images.map((img, idx) => (
              <div
                key={`${post._id}-${idx}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <img
                  src={img}
                  alt={post.caption || "User post"}
                  className="w-full h-48 sm:h-56 object-cover"
                />

                {/* Caption + Info */}
                <div className="p-2 sm:p-3">
                  <p className="text-gray-700 text-xs sm:text-sm font-medium mb-1 line-clamp-2">
                    {post.caption || "No caption"}
                  </p>

                  <div className="h-px bg-gray-100 my-1" />

                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                    <p className="font-medium truncate">
                      👤 {post.author?.username || "Unknown"}
                    </p>
                    <p className="text-gray-400">
                      {formatDate(post.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Feed;
