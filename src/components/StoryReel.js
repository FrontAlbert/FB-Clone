import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import { useStateValue } from "./StateProvider";

function StoryReel() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="storyReel">
            <Story
                image="https://kariera.future-processing.pl/wp-content/uploads/2014/11/blog_techniczny_jacascript_is_slow.png"
                profileSrc={user.photoURL}
                title="For You"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileSrc="https://pbs.twimg.com/profile_images/806970003941527552/sF8UtACd_400x400.jpg"
                title="Kim NamJoon"
            />
            <Story
                image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
                title="Frankie"
            />
            <Story
                image="https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg"
                profileSrc="https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
                title="Chadwick Chadson"
            />
            <Story
                image="https://dazedimg-dazedgroup.netdna-ssl.com/700/azure/dazed-prod/1300/4/1304936.jpg"
                profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
                title="Michael Mikelson"
            />
        </div>
    );
}

export default StoryReel;