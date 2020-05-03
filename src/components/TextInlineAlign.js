import React from "react"

const TextInlineAlign = ({left, right}) => (
    <div>
        <div style={{float: "left"}}>
            {left}
        </div>
        <div style={{float: "right"}}>
            {right}
        </div>
        <div style={{clear: "right"}}> </div>
    </div>
)

export default TextInlineAlign