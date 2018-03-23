import React from "react";

export default function Comment({comment}) {
    return (
        <div>
            <label><strong>{comment.user}</strong></label>
            <p>{comment.text}</p>
        </div>
    )
}