import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";


export function App(){
    return(
    <section className="follow-cards">
        <TwitterFollowCard userName='midudev' initialIsFollowing={isFollowing}>
            username1
        </TwitterFollowCard>
        <TwitterFollowCard initialIsFollowing={true}>
            username1
        </TwitterFollowCard>
    </section>
    )
}