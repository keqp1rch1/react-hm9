import React from 'react';
import Statistics from "./Statistics/Statistics";
import statistical from "./statistical-data.json";


export default function App() {
    return (
        <div>
            <Statistics stats = {statistical}/>
        </div>
    )
}
