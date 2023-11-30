import { Link } from "react-router-dom";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout>
      <div className="App bg-intro-wallpaper bg-no-repeat bg-center bg-cover h-screen">
        <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black border-4 p-10 bg-blue-400 rounded-sm">
          <h1 className="text-xl">
            Perrotin Alexis, Développeur web et web mobile
          </h1>
          <Link to="/a-propos">
            <button className="border-black border-2 rounded-md mt-4 p-1 hover:bg-blue-500">
              En savoir plus
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default App;
