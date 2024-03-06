import React, { useState } from "react";
import { userState } from React

export default function EventHandler() {
    const [graphData, setGraphData] = useState({title: "", description: ""})

    function handleChange(event){
        setGraphData((prevGraphDate) => ({...prevGraphData, [name]: value}))
    }
}