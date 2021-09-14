import React from 'react';
import './Node.css';

const Node = ({ isStart, isEnd }) => {
    const classes = isStart ? "node-start" : isEnd ? "node-end" : "";
    return (
        <div className={`node ${classes}`}></div>
    )
}

export default Node;