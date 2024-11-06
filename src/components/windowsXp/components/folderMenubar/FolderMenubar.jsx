import React from "react";
import prev from "../../../../assets/prev.png";
import next from "../../../../assets/next.png";
import share from "../../../../assets/share.png";
import search from "../../../../assets/search.png";
import allFolders from "../../../../assets/allFolders.png";
import folders from "../../../../assets/folder.png";

const FolderMenubar = () => {
    return (
        <div className="w-full  border-b-2  border-b-[#cbcac7a0] flex py-1">
            <div className="flex border-r-[#cbcac7a0] border-r-2 h-[22px] items-center px-1 ">
                <div className="prevBtn flex items-center filter grayscale">
                    <img
                        className="h-[30px] w-[30px] "
                        src={prev}
                        alt="previous Button"
                    />
                    <span>Back</span>
                </div>
                <div className="nextBtn px-1 filter grayscale">
                    <img
                        className="h-[30px] w-[30px]"
                        src={next}
                        alt="next Button"
                    />
                </div>
                <div className="shareBtn px-1 hover:outline hover:outline-2 hover:outline-[#cbcac7a0]">
                    <img
                        className="h-[22px] w-[22px]"
                        src={share}
                        alt="share Button"
                    />
                </div>
            </div>

            <div className="flex border-r-[#cbcac7a0] border-r-2 items-center px-1">
                <div className="searchBtn flex items-center px-1 mr-1 hover:outline hover:outline-2 hover:outline-[#cbcac7a0]">
                    <img
                        className="h-[22px] w-[22px] mr-1"
                        src={search}
                        alt="search Button"
                    />
                    <span>Serach </span>
                </div>
                <div className="foldersBtn flex items-center px-1 hover:outline hover:outline-2 hover:outline-[#cbcac7a0]">
                    <img
                        className="h-[22px] w-[22px] mr-1"
                        src={folders}
                        alt="folders Button"
                    />
                    <span>Folders</span>
                </div>
            </div>
            <div>
                <div className="allFoldersBtn">
                    <img
                        className="h-[22px]  px-1 hover:outline hover:outline-2 hover:outline-[#cbcac7a0]"
                        src={allFolders}
                        alt="allFolders Button"
                    />
                </div>
            </div>
        </div>
    );
};

export default FolderMenubar;
