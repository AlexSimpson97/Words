import { useState } from "react";
import Warning from "./Warning";
export default function TextArea({userText, SetUserText, warningText, setWarningText}) {
    function handleTextInput(event) {
        setWarningText("");
        let moddedText = event.target.value;
        if (moddedText.includes("<script>")) {
            setWarningText("No script tags allowed");
            moddedText = moddedText.replace("<script>", "");
        } else if (moddedText.includes("@")) {
            setWarningText("No @'s allowed");
            moddedText = moddedText.replace("@", "");
        } else if (moddedText.includes("ussy")) {
            setWarningText("No -ussy allowed, straight to horny jail!");
            moddedText = moddedText.replace("ussy", "");
        } else if (moddedText.includes("fuck")) {
            setWarningText("No fucks allowed, straight to horny jail!");
            moddedText = moddedText.replace("fuck", "JAIL!");
        } else if (moddedText.includes("Fuck")) {
            setWarningText("No fucks allowed, straight to horny jail!");
            moddedText = moddedText.replace("Fuck", "JAIL!");
        }

        SetUserText(moddedText);
    }
    function handleBeginTyping() {
        SetUserText("");
    }
    // console.log(userText);
    return (
        <div className="textarea">
            <>
                <textarea
                    value={userText}
                    onChange={handleTextInput}
                    onFocus={handleBeginTyping}
                    placeholder={userText}
                    spellCheck="false"
                ></textarea>
                {warningText && <Warning warningText={warningText} />}
            </>
        </div>
    );
}