import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './style.css';

function StarGraph(props) {
    let data = props.data;
    console.log(data);
    return (
      <div className="star-graph">
        <div className="star-graph__header">
            График количества звезд от времени в проекте Kotlin
        </div>
        <LineChart className="star-graph__body" width={400} height={400} data={data}>
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
            <XAxis dataKey="datetime" />
            <YAxis />
            <Tooltip />
        </LineChart>
      </div>
    );
}

export default StarGraph;
// График количества звезд от времени в проекте Kotlin