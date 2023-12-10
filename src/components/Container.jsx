import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
    const [userText, setUserText] = useState("Enter your text here");
    const [warningText, setWarningText] = useState("");


    return (
        <main className="container">
            <TextArea
                userText={userText}
                SetUserText={setUserText}
                warningText={warningText}
                setWarningText={setWarningText}
            />

            <Stats userText={userText} />
        </main>
    );
}
