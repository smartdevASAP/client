import { useEffect, useState } from "react";
import { useApp } from "../context/postContext";
import { useApp1 } from "../context/userContext";
import { Share2, Edit3 } from "lucide-react";
import API from "../api/axios";

// 🧩 Define the same Post type used in postContext
type Post = {
  _id: string;
  caption: string;
  images?: string[];
  likes?: number;
  liked?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

function Home() {
  const { totalLikes, friends } = useApp();
  const { setActualUser } = useApp1();
  const username = localStorage.getItem("username");

  // Local state to hold posts data
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts on mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/post/allPosts");
        if (res.data.success && Array.isArray(res.data.posts)) {
          setPosts(res.data.posts);
        } else {
          console.error("❌ Failed to fetch posts:", res.data.message);
        }

        setActualUser(res.data);
        console.log("Fetched posts:", res.data.posts);
      } catch (err) {
        console.error("🔥 Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [setActualUser]);

  return (
    <>
      {/* --- Profile Info Section --- */}
      <div className="flex flex-col items-center text-center p-6 space-y-8">
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
            className="w-20 h-20 rounded-full mx-auto object-cover"
            alt="profile"
          />
        </div>

        <p className="text-sm text-gray-500">{username}</p>

        <section className="flex justify-center items-center gap-8 md:gap-16">
          <div>
            <p className="font-bold text-xl md:text-3xl text-gray-700">
              {posts.length}
            </p>
            <h1 className="text-sm text-gray-500">Posts</h1>
          </div>

          <div>
            <p className="font-bold text-xl md:text-3xl text-gray-700">
              {totalLikes}
            </p>
            <h1 className="text-sm text-gray-500">Likes</h1>
          </div>

          <div>
            <p className="font-bold text-xl md:text-3xl text-gray-700">
              {friends.length}
            </p>
            <h1 className="text-sm text-gray-500">Friends</h1>
          </div>
        </section>

        <div className="max-w-[400px]">
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            natus beatae dolorum necessitatibus.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          {/* Share Profile Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-sm hover:bg-blue-700 active:scale-95 transition-all">
            <Share2 size={18} />
            <span className="text-sm font-medium">Share Profile</span>
          </button>

          {/* Edit Profile Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 active:scale-95 transition-all">
            <Edit3 size={18} className="text-gray-600" />
            <span className="text-sm font-medium">Edit Profile</span>
          </button>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="h-[2px] bg-gray-200 w-full" />

      {/* --- Posts Grid --- */}
      <div className="mt-4 px-4">
        <h1 className="text-2xl text-gray-600 font-bold mb-3">Posts</h1>

        {loading ? (
          <p className="text-gray-400 text-sm text-center">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {posts.length === 0 ? (
              <p className="text-gray-400 text-sm col-span-full text-center">
                No posts yet
              </p>
            ) : (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="flex flex-col items-center bg-white rounded-xl shadow-sm p-2 hover:shadow-md transition-all duration-200"
                >
                  {/* Map through each post's images safely */}
                  {post.images && post.images.length > 0 ? (
                    post.images.map((imgUrl, i) => (
                      <img
                        key={i}
                        src={imgUrl}
                        alt={post.caption}
                        className="rounded-lg object-cover w-full h-40"
                      />
                    ))
                  ) : (
                    <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                      No image
                    </div>
                  )}

                  {/* Caption */}
                  <p className="mt-2 text-gray-600 text-sm text-center truncate w-full">
                    {post.caption || "No caption"}
                  </p>

                  {/* Likes */}
                  <p className="text-xs text-gray-400 mt-1">
                    {post.likes ?? 0} {post.likes === 1 ? "like" : "likes"}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
