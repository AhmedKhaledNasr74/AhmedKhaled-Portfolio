import React, { useRef } from "react";
import folder from "../../../../assets/folder.png";
import FolderIcon from "../folderIcon/Folder";
import cDisk from "../../../../assets/cDisk.png";
import myComputer from "../../../../assets/myComputer.png";
import webamp from "../../../../assets/webamp.png";
import internet from "../../../../assets/internet.png";
import paint from "../../../../assets/paint.png";

const Desktop = () => {
    const containerRef = useRef(null);
    return (
        <div
            ref={containerRef}
            className="max-h-screen  h-screen max-w-[100vw] overflow-hidden flex flex-col flex-wrap"
        >
            <FolderIcon
                icon={myComputer}
                name={"My Computer"}
                containerRef={containerRef}
            />

            <FolderIcon
                icon={cDisk}
                name={"Resume"}
                containerRef={containerRef}
            />

            <FolderIcon
                icon={folder}
                name={"My Projects"}
                containerRef={containerRef}
            />

            <FolderIcon
                icon={internet}
                name={"Internet Explorer"}
                containerRef={containerRef}
            />

            <FolderIcon
                icon={webamp}
                name={"Webamp"}
                containerRef={containerRef}
            />

            <FolderIcon
                icon={paint}
                name={"Paint"}
                containerRef={containerRef}
            />
        </div>
    );
};

export default Desktop;
