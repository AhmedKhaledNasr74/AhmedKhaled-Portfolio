import React from "react";
import LeftSideCard from "../leftsideCard/LeftSideCard";

const FolderLeftSide = ({ isFullScreen }) => {
    return (
        <div
            className={`leftSide h-[333px] min-w-[160px] overflow-auto `}
            style={{
                background:
                    "linear-gradient(rgb(116, 138, 255) 0%, rgb(64, 87, 211) 100%)",
            }}
        >
            <LeftSideCard />
            <LeftSideCard />
            <LeftSideCard />
        </div>
    );
};

export default FolderLeftSide;
