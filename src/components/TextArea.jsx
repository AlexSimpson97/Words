import { useState } from "react";
import Warning from "./Warning";
export default function TextArea({userText, SetUserText, warningText, setWarningText}) {
    function handleTextInput(event) {
        setWarningText("");
        let moddedText = event.target.value;
    
        const cases = [
            { regex: /<script>/gi, warning: "No script tags allowed", replacement: "" },
            { regex: /@/gi, warning: "No @'s allowed", replacement: "" },
            { regex: /ussy/gi, warning: "No -ussy allowed, straight to horny jail!", replacement: "" },
            { regex: /fucker/gi, warning: "No fuckers allowed, we love chickens though", replacement: "clucker" },
            { regex: /fuck/gi, warning: "No fucks allowed, straight to horny jail!", replacement: "JAIL!" },
            { regex: /bitch/gi, warning: "Come on now, be nice", replacement: "hero" },
            { regex: /kill/gi, warning: "Come on now, try again", replacement: "feel" },
            { regex: /suicide/gi, warning: "Come on now, :(", replacement: "sudoku" },
            { regex: /murder/gi, warning: "Come on now, :(", replacement: "bother" },
            { regex: /nigga/gi, warning: "Let's try this, instead", replacement: "slime" },
            { regex: /nigger/gi, warning: "Not on our watch :)", replacement: "Nah" },
            { regex: /\bcoon\b/gi, warning: "Consider this, instead", replacement: "Uncle Tom" },
            { regex: /hoe/gi, warning: "Come on now, be nice", replacement: "heroe" },
            { regex: /\bhoes\b/gi, warning: "Come on now, be nice", replacement: "hero" },
            { regex: /\bho\b/gi, warning: "Come on now, be nice", replacement: "hero" },
            { regex: /\bhos\b/gi, warning: "Come on now, be nice", replacement: "hero" },
        ];
    
        for (let i = 0; i < cases.length; i++) {
            if (cases[i].regex.test(moddedText)) {
                setWarningText(cases[i].warning);
                moddedText = moddedText.replace(cases[i].regex, cases[i].replacement);
            }
        }
    
        SetUserText(moddedText);
    }
    
    function handleBeginTyping() {
        if (userText === "Enter your text here") {
            SetUserText("");
        }
        setWarningText("");
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