import React, { useState } from "react";
import FolderTitleBar from "../folderTitleBar/FolderTitleBar";

const ProjectIFrame = ({ projectLink, setIsClicked, projectName }) => {
    return (
        <div className="flex flex-col h-screen w-screen">
            <FolderTitleBar
                isStatic={true}
                setIsClicked={setIsClicked}
                setIsFullScreen={setIsClicked}
                isFullScreen={true}
                name={projectName}
                coords={{ startX: 0, startY: 0, lastX: 0, lastY: 0 }}
            />
            <div className="flex-1">
                <iframe
                    className="min-h-[400px] h-full w-full"
                    src={projectLink}
                    title="project-iframe"
                ></iframe>
            </div>
        </div>
    );
};

export default ProjectIFrame;
