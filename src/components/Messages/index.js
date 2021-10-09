import React from "react";

import Message from "../Message";
import { useSelector } from "react-redux";

import './styles.css';

export default function MEssages() {

    const {messages} = useSelector((state) => state.layout);

    return (
        <div className="messages">
            { messages.map((mg, index) => (
                <Message message={mg} key={index} />
            )) }
        </div>
    );
}