import React, { useState, useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed';

const Tweeprints = () => {
    const [tweeprints, setTweeprints] = useState([]);

    useEffect(() => {
        fetch("https://api.tweeprint.com/tweeprints/")
        .then(data => data.json())
        .then(data => setTweeprints(data))
    }, []);
    console.log('tweeprints:', tweeprints);
    

    return (
        <div className="">
        {tweeprints.map(tweeprint => 
            <div className="" key={tweeprint.id} >
            <TweetEmbed className="my-16" 
                        options={{align: 'center'}} 
                        id={tweeprint.tweet_id} />
            </div>)}
        </div>
    )
}
export default Tweeprints;