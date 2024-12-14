import React from "react";

interface ButtonProp {
    text: string;
    NotHighLighted?: boolean;
}

export const Button = (buttonProp: ButtonProp) => {

    // var component = (
    //     <div style={{margin: "10px"}}>
    //     <button className="btn  btn btn-outline-primary">{text}</button>
    //     </div>
    //     ); 
    if (buttonProp.NotHighLighted) {
        return (
            <div style={{margin: "10px"}}>
                <button className="btn  btn btn-outline-primary">{buttonProp.text}</button>
            </div>
        )
    }
    return (
    <div style={{margin: "10px"}}>
    <button className="btn btn-primary">{buttonProp.text}</button>
    </div>
    );
}