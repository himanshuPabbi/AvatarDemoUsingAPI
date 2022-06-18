import React from "react";

//custom components
function AvatarList(props)
{
    return(
        <>
        <div className="avatarstyle ma4 bg-light-purple dib pa2 grow shadow-4 tc">
          <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
          <h1> {props.name}</h1>
          <p>{props.work}</p>
         </div>
    </>
    )
}
export default AvatarList;