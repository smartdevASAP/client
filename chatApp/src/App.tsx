import { useApp } from "./context/userContext";
function App() {
  const { setUsername, username, saveUser, deleteUser } = useApp();
  return (
    <div>
      <h1 className="font-bold text-3xl text-blue-500 p-2">Pixsy</h1>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        name=""
        id=""
      />
      <button
        className="p-2 bg-blue-500 font-bold rounded-xs"
        onClick={() => saveUser()}
      >
        save
      </button>
      <button
        className="p-2 bg-red-300 font-bold rounded-xs"
        onClick={() => deleteUser()}
      >
        clear
      </button>
    </div>
  );
}

export default App;
