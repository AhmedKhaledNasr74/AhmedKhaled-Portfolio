import React from "react";

const Paint = () => {
    return (
        <div className="h-[500px]">
            <iframe
                src={`../../../../../jspaint/jspaint-master/index.html`}
                id="jspaint-iframe"
                width="100%"
                height="100%"
                title="JS Paint"
                className="min-h-[400px]"
                style={{ border: "none" }}
            ></iframe>
        </div>
    );
};

export default Paint;
