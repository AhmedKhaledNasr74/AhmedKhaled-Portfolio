import React from "react";
import Taskbar from "./components/taskbar/Taskbar";
import Desktop from "./components/desktop/Desktop";

const Windows = () => {
    return (
        <div className="h-screen w-screen overflow-hidden">
            <Desktop />
            <Taskbar />
        </div>
    );
};

export default Windows;
