import PropTypes from "prop-types";
import {INSTAGRAM_MAX_CHARACTERS, TWITTER_PRO_MAX_CHARACTERS} from "../constants";

export default function Stats({ userText }) {
    const textLength = userText.length;
    let wordCount = 0;
    if (userText !== `Enter your text`) {
        wordCount = userText ? userText.trim().split(` `).length : wordCount;
    }
    // console.log(wordCount);
    
    return (
        <section className="stats">
            <Stat label={`Words`} postLimit={wordCount} />
            <Stat label={`Characters`} postLimit={textLength} />
            <Stat label={`Instagram`} postLimit={INSTAGRAM_MAX_CHARACTERS - textLength} />
            <Stat label={`Twitter Pro`} postLimit={TWITTER_PRO_MAX_CHARACTERS - textLength} />
        </section>
    );
}

function Stat({ label = "Statistic", postLimit = 0 }) {
    return (
        <section className="stat">
            <span className={`stat__number ${postLimit < 0 ? `stat__number--limit` : ``}`}>{postLimit}</span>
            <h2 className="second-heading">{label}</h2>
        </section>
    );
}


Stat.propTypes = {
    label: PropTypes.string,
    postLimit: PropTypes.number,
    userText: PropTypes.string.isRequired,
};