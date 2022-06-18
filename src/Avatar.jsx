import React, { Component } from "react";
import './Avatar.css';
import 'tachyons';
import AvatarList from "./AvatarList";


    class Avatar extends Component
    {
        constructor()
        {
            super();
            this.state={
                name:"Welcome To Avatar World!!!"
            }
        }   
        nameChange()
        {
            this.state=this.setState({
                name:"This is very interesting!!!"

            })
        }    
        render(){
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
                return <AvatarList key={i} id={avatarList[i].id} 
                                    name={avatarList[i].name} 
                                    work={avatarList[i].work}/>
    
            })
            return (
                <div className="mainpage">
                    <h1 className="tc">{this.state.name}</h1>
                   {arrayAvatarCard}
                    <button onClick={()=>{this.nameChange()}}>Subscribe</button>
                </div>
            )
        }
}
export default Avatar;