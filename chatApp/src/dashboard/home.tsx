import { main } from "../assets/assets";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center text-center p-6 space-y-8">
        {/* --- Top Logo --- */}
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

        {/* --- Stats Section --- */}
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

        {/* --- Description --- */}
        <div className="max-w-[400px]">
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            natus beatae dolorum necessitatibus
          </p>
        </div>

        {/* --- Buttons --- */}
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition">
            Share Profile
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition">
            Edit Profile
          </button>
        </div>
      </div>
      {/* posts */}
      <div className="h-[2px] bg-gray-200 w-full" />

      <div className="mt-4">
        <h1 className="text-2xl text-gray-600 font-bold mb-3">Posts</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="h-[200px] w-full rounded-md bg-gray-200"
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
