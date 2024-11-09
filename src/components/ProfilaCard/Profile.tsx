import "./Profile.css"
import React, { useState, useEffect } from "react";

function Profile() {
    // const NotFoundAvatar = "https://avatars.githubusercontent.com/u/276340?v=4?s=400";


    const [user, setUser] = useState("https://avatars.cloudflare.steamstatic.com/c966426a3f4bed2801d175aff9cf49fcf1267076_full.jpg");

    useEffect(() => {
        fetch("https://avatars.fastly.steamstatic.com/c966426a3f4bed2801d175aff9cf49fcf1267076_full.jpg", {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "your-api-key",
                "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data[0].joke);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (


        <div className="container">
            
            <div className="InfoBlock">
                <div className="profile-container">
                    <img className="Avatar" src={user} />
                    <div className="ButtonContainer">
                        <button className="LikeButton" onClick={() => { alert("ЕГОР (((((((((()))))))ФЕНИКС") }}>Like</button>
                        <button className="DislikeButton">Dislike</button>
                        <button className="ReportButton">Report</button>
                    </div>
                </div>
            </div>

            <div className="TextBlock">
                <h2>User name</h2>
                <h2> Info 2  </h2>
            </div>
        </div>

    )
}

export default Profile;