import React from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Header from "./Header";
import TxtEditor from "./TxtEditor";
import Nav from "./Nav";

export default function App() {
    const [value, setValue] = useState("");

    function prnt() {
        console.log(value);
    }

    return (
        <main>
            <Header />
            <Nav prnt={prnt} />
            <TxtEditor setValue={setValue} />
        </main>
    );
}
