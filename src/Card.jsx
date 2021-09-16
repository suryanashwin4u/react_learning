import React from "react";

function Card(props){
    return(
        <>
            <div className="">
                <div className="">
                    <img className="" src="{props.imgsrc}" alt="myPic"></img>
                    <div className="">
                        <span className="">{props.title}</span>
                        <h3 className="">{props.sname}</h3>
                        <a href="{props.link}">
                            <button>click here</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;