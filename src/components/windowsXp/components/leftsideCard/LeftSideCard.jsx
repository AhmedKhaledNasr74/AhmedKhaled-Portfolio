import React from "react";

const LeftSideCard = () => {
    return (
        <div className="card m-2 rounded-t-sm">
            <h6
                className="title bg-white rounded-t-sm py-[2px] px-2 font-extrabold"
                style={{
                    background:
                        "linear-gradient(to right, rgb(240, 240, 255) 0px, rgb(240, 240, 255) 30%, rgb(168, 188, 255) 100%)",
                }}
            >
                System Tasks
            </h6>
            <div
                className="content text-[11px] p-2 text-blue-950 "
                style={{
                    background:
                        "linear-gradient(to right, rgb(180, 200, 251) 0%, rgb(164, 185, 251) 50%, rgb(180, 200, 251) 100%) rgba(198, 211, 255, 0.87)",
                }}
            >
                <h6 className="hover:text-blue-600 hover:underline">
                    view system information
                </h6>
                <h6 className="hover:text-blue-600 hover:underline">
                    add or remove programs
                </h6>
                <h6 className="hover:text-blue-600 hover:underline">
                    change a setting
                </h6>
            </div>
        </div>
    );
};

export default LeftSideCard;
