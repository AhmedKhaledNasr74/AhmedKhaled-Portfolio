import React from "react";

const Chrome = () => {
    return (
        <div className="aspect min-h-[400px] h-full">
            <iframe
                className="min-h-[400px] h-full"
                src="https://www.google.com/webhp?igu=1"
                title="chrome"
                width="100%"
                height="100%"
            ></iframe>
        </div>
    );
};

export default Chrome;
