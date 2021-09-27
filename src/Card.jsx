import React from "react";
import Images from './Images';

function Card(props){
    return(
        <>
            <div className="">
                <div className="">
                <Images imgsrc={props.imgsrc}/>
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