import React from "react";
import "./RightBar.css";
import SearchIcon from "@material-ui/icons/Search";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";

function RightBar() {
    return (
        <div className="right__bar">
            <div className="widgets">
                <div className="widgets__input">
                    <SearchIcon className="widgets__searchIcon" />
                    <input placeholder="Search Twitter" type="text" />
                </div>

                <div className="widgets__widgetContainer">
                    <h2>What's happening</h2>

                    <TwitterTweetEmbed tweetId={"1377400329243815936"} />

                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="ModernWarzone"
                        options={{ height: 400 }}
                    />

                    <TwitterShareButton
                        url={"https://twitter.com/ModernWarzone"}
                        options={{
                            text: "#reactjs is awesome",
                            via: "ModernWarzone",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default RightBar;
