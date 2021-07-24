import React from 'react'
import './videoPlayer.css'
const VideoPlayer =()=> {
    return (
        <div className="allVideo" >
            <h1>Welcome in yous video workshops</h1>
            <header className="headerVideo">
                <input type="text" placeholder= "write the name of your video"
                    className="input-video"
                />
            </header>
            <iframe className="video"
                title="youtube" src="https://embed.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are" >
            </iframe>
        </div>
    )
}
export default VideoPlayer






