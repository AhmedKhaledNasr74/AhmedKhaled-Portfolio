import React, { useEffect, useRef, useState } from "react";

import FolderToolbar from "../folderToolbar/FolderToolbar";
import FolderMenubar from "../folderMenubar/FolderMenubar";
import FolderSearchbar from "../folderSearchbar/FolderSearchbar";
import folder from "../../../../assets/folder.png";
import FolderLeftSide from "../folderLeftSide/FolderLeftSide";
import FolderMainContent from "../folderMainContent/FolderMainContent";
import FolderTitleBar from "../folderTitleBar/FolderTitleBar";
import Chrome from "../chrome/Chrome";
import WebampComponent from "../../../externalApps/webamp/Webamp";
import Paint from "../../../externalApps/paint/Paint";
import Resume from "../resume/Resume";
import MyProjects from "../myProjects/MyProjects";

const FolderIcon = ({ icon, containerRef, name }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const boxRef = useRef(null);
    const coords = useRef({
        startX: 0,
        lastX: 0,
        startY: 0,
        lastY: 0,
    });
    const isClickedNow = useRef(false);

    useEffect(() => {
        const box = boxRef.current;
        coords.current.startX = 0;
        coords.current.lastX = 0;
        coords.current.startY = 0;
        coords.current.lastY = 0;
        if (box) {
            box.style.top = `${0}px`;
            box.style.left = `${0}px`;
        }
    }, [isFullScreen]);

    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;

        const box = boxRef.current;
        const container = containerRef.current;
        box.style.position = "absolute"; // Set absolute positioning for drag
        const onMouseDown = (e) => {
            isClickedNow.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
            document.body.style.userSelect = "none"; // Disable text selection
        };

        const onMouseUp = (e) => {
            isClickedNow.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
            document.body.style.userSelect = ""; // Re-enable text selection
        };

        const onMouseMove = (e) => {
            if (!isClickedNow.current) return;

            // Calculate potential new positions
            let nextX =
                e.clientX - coords.current.startX + coords.current.lastX;
            let nextY =
                e.clientY - coords.current.startY + coords.current.lastY;

            // Get screen boundaries
            const containerWidth = window.innerWidth;
            const containerHeight = window.innerHeight;
            const boxWidth = box.offsetWidth;
            const boxHeight = box.offsetHeight;

            // Constrain movement within screen boundaries
            if (nextX < 0) nextX = 0;
            if (nextY < 0) nextY = 0;
            if (nextX + boxWidth > containerWidth)
                nextX = containerWidth - boxWidth;
            if (nextY + boxHeight > containerHeight)
                nextY = containerHeight - boxHeight;

            // Apply constrained position
            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        };
        const titleBar = box;
        if (titleBar) {
            titleBar.addEventListener("mousedown", onMouseDown);
        }

        // box.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mousemove", onMouseMove);

        const cleanup = () => {
            if (titleBar) {
                titleBar.removeEventListener("mousedown", onMouseDown);
            }
            document.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mousemove", onMouseMove);
        };

        return cleanup;
    }, [isClicked]);

    return (
        <>
            <div
                className="folderIcon text-center text-white hover:outline hover:outline-1 p-1 w-[65px]  m-2"
                role="button"
                onDoubleClick={() => setIsClicked(true)}
            >
                <div className="icon  select-all">
                    <img
                        src={icon}
                        alt="icon"
                        className="w-[35px] h-[35px] mx-auto"
                    />
                </div>
                <div className="folderName text-shadow">{name}</div>
            </div>

            {isClicked && (
                <div
                    className={`folder absolute min-h-[400px] top-0 left-0 bg-[#0831d9] p-[3px] pt-0 ${
                        isFullScreen
                            ? "w-screen h-screen max-h-[100vh] flex flex-col"
                            : "w-auto h-auto"
                    }`}
                    ref={boxRef}
                >
                    {name != "Webamp" && (
                        <FolderTitleBar
                            setIsClicked={setIsClicked}
                            isFullScreen={isFullScreen}
                            setIsFullScreen={setIsFullScreen}
                            coords={coords}
                            name={name}
                            isStatic={false}
                        />
                    )}
                    <div className="bg-white   rounded-t-lg h-full min-h-[400px]">
                        <div
                            className={`folderBody h-full bg-white`} // Set to flex-grow if fullscreen
                        >
                            <div
                                className={`folderContent h-full bg-white min-h-[400px]`} // Set to flex-grow if fullscreen
                            >
                                {name == "Internet Explorer" ? (
                                    <Chrome />
                                ) : name == "Webamp" ? (
                                    <WebampComponent
                                        isClicked={isClicked}
                                        setIsClicked={setIsClicked}
                                    />
                                ) : name == "Paint" ? (
                                    <Paint />
                                ) : name == "Resume" ? (
                                    <Resume />
                                ) : (
                                    <div className="flex flex-col flex-grow bg-[#EDE8D0]">
                                        <FolderToolbar />
                                        <FolderMenubar />
                                        <FolderSearchbar
                                            icon={folder}
                                            name={name}
                                        />
                                        <div className=" flex h-full  bg-white ">
                                            <FolderLeftSide />
                                            {name == "My Projects" ? (
                                                <MyProjects />
                                            ) : (
                                                <FolderMainContent
                                                    icon={folder}
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FolderIcon;
