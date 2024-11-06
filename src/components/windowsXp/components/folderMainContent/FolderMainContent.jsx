import React from "react";
import cDisk from "../../../../assets/cDisk.png";
import dvd from "../../../../assets/dvd.png";

const FolderMainContent = ({ icon }) => {
    return (
        <div className="folderMainContent  ">
            <div className="folderSectionTitle px-2 font-extrabold">
                Files Stored On This Computer
            </div>
            <CustomHr />
            <div className="folders p-2 flex ">
                <div className="folderIcon flex items-center mr-10">
                    <img
                        className="pr-2 h-[45px] "
                        src={icon}
                        alt="folder icon"
                    />
                    <span>Shared Documents</span>
                </div>

                <div className="folderIcon flex items-center">
                    <img
                        className="pr-2 h-[45px] "
                        src={icon}
                        alt="folder icon"
                    />
                    <span>Shared Documents</span>
                </div>
            </div>
            <div className="folderSectionTitle px-2 font-extrabold">
                Hard Disk Drives
            </div>
            <CustomHr />
            <div className="folders p-2 flex ">
                <div className="folderIcon flex items-center mr-10">
                    <img
                        className="pr-2 h-[45px] "
                        src={cDisk}
                        alt="folder icon"
                    />
                    <span>Local Disk (C:)</span>
                </div>
            </div>
            <div className="folderSectionTitle px-2 font-extrabold">
                Devices With Removable Storage
            </div>
            <CustomHr />
            <div className="folders p-2 flex ">
                <div className="folderIcon flex items-center mr-10">
                    <img
                        className="pr-2 h-[45px] "
                        src={dvd}
                        alt="folder icon"
                    />
                    <span>Shared Documents</span>
                </div>
            </div>
            <div className="folderSectionTitle px-2 font-extrabold">
                About Me
            </div>
            <CustomHr />
            <div className="folders p-2 flex ">
                <div className="folderIcon flex items-center mr-10">
                    <img
                        className="pr-2 h-[45px] "
                        src={icon}
                        alt="folder icon"
                    />
                    <span>Shared Documents</span>
                </div>
            </div>
        </div>
    );
};

const CustomHr = () => {
    return (
        <div
            className="w-full h-[1px]"
            style={{
                background:
                    "linear-gradient(to right, rgb(112, 191, 255) 0px, rgb(255, 255, 255) 100%)",
            }}
        ></div>
    );
};

export default FolderMainContent;
