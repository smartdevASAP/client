import { main } from "../assets/assets";
import { useApp } from "../context/postContext";

function Home() {
  const { imagesAdded } = useApp();

  return (
    <>
      {/* --- Profile Info Section --- */}
      <div className="flex flex-col items-center text-center p-6 space-y-8">
        <div className="flex justify-center">
          {main.map((img) => (
            <img
              key={img.img}
              className="h-[70px] md:h-[100px]"
              src={img.img}
              alt=""
            />
          ))}
        </div>

        <section className="flex justify-center items-center gap-8 md:gap-16">
          <div>
            <p className="font-bold text-xl md:text-3xl text-gray-700">4</p>
            <h1 className="text-sm text-gray-500">Posts</h1>
          </div>
          <div>
            <p className="font-bold text-xl md:text-3xl text-gray-700">21</p>
            <h1 className="text-sm text-gray-500">Chats</h1>
          </div>
          <div>
            <p className="font-bold text-xl md:text-3xl text-gray-700">13</p>
            <h1 className="text-sm text-gray-500">Friends</h1>
          </div>
        </section>

        <div className="max-w-[400px]">
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            natus beatae dolorum necessitatibus
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition">
            Share Profile
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="h-[2px] bg-gray-200 w-full" />

      {/* --- Posts Grid --- */}
      <div className="mt-4">
        <h1 className="text-2xl text-gray-600 font-bold mb-3">Posts</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {imagesAdded.length === 0 ? (
            <p className="text-gray-400 text-sm col-span-full text-center">
              No images yet
            </p>
          ) : (
            imagesAdded.map((img, i) => (
              <img
                key={i}
                src={URL.createObjectURL(img)}
                alt=""
                className="rounded-lg object-cover w-full h-40"
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
