import React from "react";
import './Avatar.css';
import 'tachyons';
import AvatarList from "./AvatarList";

const Avatar=()=>{

        const avatarList=[
            {
                id:1,
                name:"Himanshu Pabbi",
                work:"Web Developer"
            },
            {
                id:2,
                name:"Ram Kumar",
                work:"PHP Developer"
            },
            {
                id:1,
                name:"Sham Yadav",
                work:"Python Developer"
            },
            {
                id:1,
                name:"Thapa",
                work:"Web Developer"
            }

        ]
      const arrayAvatarCard=  avatarList.map((avatarcard,i)=>{
            return <AvatarList id={avatarList[i].id} 
                                name={avatarList[i].name} 
                                work={avatarList[i].work}/>

        })
    return (
        <div className="mainpage">
            <h1 className="tc">Welcome to Avatar World</h1>
           {arrayAvatarCard}
            <button>Subscribe</button>
        </div>
    )
}
export default Avatar;