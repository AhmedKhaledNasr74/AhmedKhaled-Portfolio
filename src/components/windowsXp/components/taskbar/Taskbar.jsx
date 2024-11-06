import React, { useEffect, useRef, useState } from "react";
import TaskbarImages from "./TaskbarImages";

import Menu from "../../../taskbarMenu/Menu";

const Taskbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsClicked(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div
            className="absolute bottom-0 left-0 w-full flex justify-between "
            style={{
                background:
                    "linear-gradient(rgb(31, 47, 134) 0px, rgb(49, 101, 196) 3%, rgb(54, 130, 229) 6%, rgb(68, 144, 230) 10%, rgb(56, 131, 229) 12%, rgb(43, 113, 224) 15%, rgb(38, 99, 218) 18%, rgb(35, 91, 214) 20%, rgb(34, 88, 213) 23%, rgb(33, 87, 214) 38%, rgb(36, 93, 219) 54%, rgb(37, 98, 223) 86%, rgb(36, 95, 220) 89%, rgb(33, 88, 212) 92%, rgb(29, 78, 192) 95%, rgb(25, 65, 165) 98%)",
            }}
        >
            <div className="relative w-full flex justify-between">
                {isClicked && (
                    <div
                        ref={menuRef}
                        className="absolute bottom-full left-0 w-[385px] rounded-sm shadow-2xl"
                    >
                        <Menu />
                    </div>
                )}
                <div className="start" onClick={() => setIsClicked(true)}>
                    <img
                        role="button"
                        src={TaskbarImages.start}
                        alt="start image"
                        className="hover:brightness-90"
                    />
                </div>

                <div
                    className="end flex items-center px-2"
                    style={{
                        background:
                            "linear-gradient(rgb(12, 89, 185) 1%, rgb(19, 158, 233) 6%, rgb(24, 181, 242) 10%, rgb(19, 155, 235) 14%, rgb(18, 144, 232) 19%, rgb(13, 141, 234) 63%, rgb(13, 159, 241) 81%, rgb(15, 158, 237) 88%, rgb(17, 155, 233) 91%, rgb(19, 146, 226) 94%, rgb(19, 126, 215) 97%, rgb(9, 91, 201) 100%)",
                    }}
                >
                    <ul className="flex items-center h-full">
                        <li className="mr-1">
                            <img src={TaskbarImages.speaker} />
                        </li>
                        <li className="mr-1">
                            <img src={TaskbarImages.download} />
                        </li>
                        <li className="mr-1">
                            <img src={TaskbarImages.risk} />
                        </li>
                    </ul>
                    <div className="clock text-white ">4:25 PM</div>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;
