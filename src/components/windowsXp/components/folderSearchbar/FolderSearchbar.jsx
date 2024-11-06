import React from "react";
import go from "../../../../assets/go.png";
import more from "../../../../assets/more.png";
const FolderSearchbar = ({ icon, name }) => {
    return (
        <div className="flex  w-full  border-b-2  border-b-[#cbcac7a0]">
            <span className="px-3 text-gray-500">Address</span>
            <div className="searchBar bg-white flex-1 border border-gray-400 flex justify-between pl-1">
                <div className="details flex ">
                    <img
                        src={icon}
                        alt="folder icon"
                        className="h-[17px] pr-1"
                    />
                    <span>{name}</span>
                </div>
                <div className="moreBtn">
                    <img
                        src={more}
                        alt="more button"
                        className="hover:brightness-110"
                    />
                </div>
            </div>
            <div className="goBtn pl-2 pr-5 flex items-center ">
                <img
                    src={go}
                    alt="go button"
                    className="pr-1 h-full hover:brightness-110"
                />
                <span>Go</span>
            </div>
        </div>
    );
};

export default FolderSearchbar;
