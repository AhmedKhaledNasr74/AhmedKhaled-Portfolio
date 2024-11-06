import React from "react";
import windows from "../../../../assets/windows.png";
const FolderToolbar = () => {
    return (
        <div className="folderTabs flex justify-between border-b-2 border-b-[#cbcac7a0]  px-[1px] items-center">
            <div className="tabs">
                <ul className="flex ">
                    <li className="px-1  hover:bg-selected hover:text-white cursor-default">
                        File
                    </li>
                    <li className="px-1  hover:bg-selected hover:text-white cursor-default">
                        Edit
                    </li>
                    <li className="px-1  hover:bg-selected hover:text-white cursor-default">
                        View
                    </li>
                    <li className="px-1  hover:bg-selected hover:text-white cursor-default">
                        Favorites
                    </li>
                    <li className="px-1  hover:bg-selected hover:text-white cursor-default">
                        Tools
                    </li>
                    <li className="px-1  hover:bg-selected hover:text-white cursor-default">
                        Help
                    </li>
                </ul>
            </div>
            <div className="windowsImage border-l-2 border-l-[#cbcac7a0]">
                <img
                    src={windows}
                    alt="windows image"
                    className="h-full w-full object-cover "
                />
            </div>
        </div>
    );
};

export default FolderToolbar;
