import { SinglePost } from "../home/components/SinglePost"
import { UserProfile } from "./components/UserProfile";

const Profile = () => {
    return(
        <div className="w-4/5 xl:w-full px-1 h-full">
            <UserProfile/>
            <SinglePost/>
        </div>
    )
}

export { Profile };
