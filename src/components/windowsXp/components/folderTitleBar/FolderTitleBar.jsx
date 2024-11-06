import React from "react";

const FolderTitleBar = ({
    setIsClicked,
    setIsFullScreen,
    isFullScreen,
    coords,
    name,
    isStatic,
}) => {
    return (
        <div
            className={`title-bar  min-w-[700px] ${isFullScreen && " w-full"}`}
            style={{ paddingBlock: "13px" }}
        >
            <div className="title-bar-text">{name}</div>
            <div className="title-bar-controls">
                {!isStatic && (
                    <>
                        <button aria-label="Minimize"></button>
                        <button
                            aria-label="Restore"
                            onClick={() => setIsFullScreen(!isFullScreen)}
                        ></button>
                    </>
                )}

                <button
                    aria-label="Close"
                    onClick={() => {
                        if (!isStatic) {
                            coords.current.startX = 0;
                            coords.current.lastX = 0;
                        }

                        setIsClicked(false);
                    }}
                ></button>
            </div>
        </div>
    );
};

export default FolderTitleBar;
