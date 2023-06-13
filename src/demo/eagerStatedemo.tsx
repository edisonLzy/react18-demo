import React, { useState } from "react";

export default () => {
    const [count, updateCount] = useState(0);

    console.log('App render');
    return (
        <div onClick={() => {
            updateCount(1)
        }}>
            {count}
        </div>
    )
}