import React from "react";
import { useState, useEffect } from 'react';
import './Pathfind.css';
import Node from './Node.js';

const cols = 15;
const rows = 5;

const NODE_START_ROW = 0;
const NODE_START_COL = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COL = cols - 1;


const Pathfind = () => {

    const [Grid, setGrid] = useState([]);

    useEffect(() => {
        initializeGrid();
    }, [] );

    const initializeGrid = () => {
        const grid = new Array(cols);
        for (let i = 0; i < cols; i++) {
            grid[i] = new Array(rows);
        }

        createSpot(grid);

        setGrid(grid);
    }

    const createSpot = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j] = new Spot(i,j);
            }
        }
    }

    function Spot(i,j) {
        this.x = i;
        this.y = j;
        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL;
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
        this.f = 0;
        this.g = 0;
        this.h = 0;
    }

    const gridWithNode = (
        <div> 
            {Grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="rowWrapper">
                        {row.map((col, colIndex) => {
                            const { isStart, isEnd } = col;
                            return <Node key={colIndex} isStart={isStart} isEnd={isEnd} />;
                        })}
                    </div>
                );
            })}
        </div>
    );

    console.log(Grid);

    return (
        <div className="Wrapper">
            <h1>Pathfind Component</h1>
            {gridWithNode}
        </div>
    );
};

export default Pathfind;