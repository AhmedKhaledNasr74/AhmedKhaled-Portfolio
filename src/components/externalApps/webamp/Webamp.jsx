import React, { useEffect, useState } from "react";
import Webamp from "webamp";

const WebampComponent = ({ isClicked, setIsClicked }) => {
    const [webamp, setWebamp] = useState(null);

    // Function to start Webamp and the audio context
    const startWebamp = async () => {
        // Create a new Webamp instance
        const newWebamp = new Webamp();

        // Render Webamp into the container
        await newWebamp.renderWhenReady(document.getElementById("webamp"));

        // Load example music files

        // Set the Webamp instance to state
        setWebamp(newWebamp);
    };

    useEffect(() => {
        // Cleanup Webamp instance when the component unmounts
        startWebamp();
        return () => {
            setIsClicked(false);
            if (webamp) {
                setIsClicked(false);
                webamp.destroy();
            }
        };
    }, [webamp]);

    return (
        <div>
            <div id="webamp" />
        </div>
    );
};

export default WebampComponent;
