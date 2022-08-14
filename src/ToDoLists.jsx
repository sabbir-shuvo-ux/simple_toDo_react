import React from "react";

const ToDoLists = (props) => {
    return(
        <>
            <div className="all_lists">
                <li> {props.text} </li>

                <span 
                    style={{ fontSize: "40px" }}
                    onClick={ () => {
                        props.onSelect(props.id);
                    } }
                > - </span>
            </div>
        </>
    )
}

export default ToDoLists;