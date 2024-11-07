import { useState } from "react";
import Leader_bar from "../components/LeaderBar/leader_bar";
import Profile from "../components/ProfilaCard/Profile";
import Search from "../components/search/search";
import "./main_page.css";


const Main_page = () => {
    const [user,setUser] = useState(null);
    // console.log()
    return (
        <div className="MainContainer">
            <div className="LeaderBoardContainer">
            <Leader_bar />
            </div>
            <div className="AnotherContainer">
                <Search />
                <Profile />
                <div className="spacer2"/>
            </div>
            <div className="spacer">

            </div>
        </div>
    )
}

export default Main_page;


//  Ubuntu  Версия 22.04