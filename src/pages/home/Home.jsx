import { Follow, Search, Sidebar } from "../../components";
import { AllPost } from "../allPost/AllPost";
import { Bookmark } from "../bookmark/Bookmark";

const Home = ({children}) => {
  return (
    <div className="flex bg-slate-100 min-h-screen md:w-full justify-center relative">
      <Sidebar />
      <div className="w-2/4 relative md:pr-0 flex flex-col items-center xl:mx-0 lg:w-2/3 pr-5 home">
        <Search />
        <div className="flex justify-center"><Bookmark/></div>
        
        {/* <AllPost/> */}
      </div>
      <Follow />
    </div>
  );
};

export { Home };
