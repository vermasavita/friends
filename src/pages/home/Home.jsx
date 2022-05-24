import { Follow, Search, Sidebar } from "../../components";
import { AllPost } from "../allPost/AllPost";
import { SinglePost } from "./components/SinglePost";

const Home = () => {
  return (
    <div className="flex bg-slate-100 h-full md:w-full justify-center relative">
      <Sidebar />
      <div className="w-2/4 relative md:pr-0 flex flex-col items-center xl:mx-0 lg:w-2/3 pr-5 home">
        <Search />
        <AllPost/>
      </div>
      <Follow />
    </div>
  );
};

export { Home };
