import React, { useState } from "react";
import cDisk from "../../assets/cDisk.png";
import myComputer from "../../assets/myComputer.png";
import webamp from "../../assets/webamp.png";
import internet from "../../assets/internet.png";
import paint from "../../assets/paint.png";
import user from "../../assets/user.webp";
import allFolders from "../../assets/allFolders.png";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import logout from "../../assets/logout.png";
import turnoff from "../../assets/turnoff.png";
import rightArrow from "../../assets/rightArow.ico";
import ErrorMessage from "../windowsXp/components/errorMessage/ErrorMessage";
const programs = [
    {
        img: github,
        name: "My Github",
        link: "https://github.com/ahmedKhaledNasr74/",
    },
    {
        img: linkedIn,
        name: "linkedIn",
        link: "https://www.linkedin.com/in/ahmed-khaled-a33170223/",
    },
    {
        img: myComputer,
        name: "My Computer",
        link: "",
    },

    {
        img: cDisk,
        name: "C Disk",
        link: "",
    },
    {
        img: webamp,
        name: "Webamp",
        link: "",
    },
    {
        img: internet,
        name: "Internet Explorer",
        link: "",
    },
    {
        img: paint,
        name: "Paint",
        link: "",
    },
    {
        img: allFolders,
        name: "All Folders",
        link: "",
    },
];
const Menu = () => {
    const [showError, setShowError] = useState(false);

    const handleClick = (element) => {
        if (element.link) {
            window.open(element.link, "_blank");
            setShowError(false);
        } else {
            setShowError(true);
        }
    };
    return (
        <div className="absolute bottom-full left-0 w-[385px] rounded-sm shadow-2xl">
            {showError && <ErrorMessage />}
            <div
                className="header w-full h-[50px] rounded-t-md shadow-2xl  "
                style={{
                    background:
                        "linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%)",
                }}
            >
                <div className="flex items-center ">
                    <div className="userImg w-[42px] p-1 bg-white  m-1 rounded-sm">
                        <img src={user} alt="user Image" />
                    </div>
                    <span className="text-lg font-extrabold text-white font-mono text-shadow">
                        User
                    </span>
                </div>

                <hr
                    className="orangeHr h-[2px] w-full  border-none"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(218, 136, 74) 50%, rgba(0, 0, 0, 0) 100%)",
                    }}
                />
            </div>

            <div className="content flex bg-white">
                <div className="leftSide  w-full border-r-2 border-r-[#84a1ffdb] font-MyFont font-extrabold text-[13px]">
                    {programs.map((element, idx) => (
                        <div
                            className="program flex bg-white m-1 items-center hover:bg-customBlue hover:text-white"
                            key={idx}
                            role={`${element.link != "" && "button"}`}
                            onClick={() => handleClick(element)}
                        >
                            <div className="icon h-[35px] w-[35xp] pr-2">
                                <img
                                    src={element.img}
                                    alt="icon"
                                    className="h-full w-full"
                                />
                            </div>
                            <h5>{element.name}</h5>
                        </div>
                    ))}

                    <div className="allPrograms mt-5 mb-2 flex font-bold text-center text-[15px] pt-3 border-t-2 justify-center">
                        <span className="mr-2">All Programs</span>
                        <img src={rightArrow} alt="arrow" />
                    </div>
                </div>

                <div
                    className="rightSide p-1 w-full"
                    style={{ background: "#cbe3ff" }}
                >
                    <div className="program flex items-center">
                        <div className="icon h-[50px] w-[50xp] mr-3 ">
                            <img
                                src={allFolders}
                                alt="icon"
                                className="h-full w-full"
                            />
                        </div>
                        <h5 className="font-extrabold text-[13px]">
                            All Folders
                        </h5>
                    </div>
                </div>
            </div>
            <div
                className="footer w-full bg-white   flex justify-end"
                style={{
                    background:
                        "linear-gradient(rgb(24, 104, 206) 0%, rgb(14, 96, 203) 12%, rgb(14, 96, 203) 20%, rgb(17, 100, 207) 32%, rgb(22, 103, 207) 33%, rgb(27, 108, 211) 47%, rgb(30, 112, 217) 54%, rgb(36, 118, 220) 60%, rgb(41, 122, 224) 65%, rgb(52, 130, 227) 77%, rgb(55, 134, 229) 79%, rgb(66, 142, 233) 90%, rgb(71, 145, 235) 100%)",
                }}
            >
                <div
                    className="logout flex items-center text-white text-[13px] m-1 pr-2 hover:bg-blue-700 "
                    role="button"
                >
                    <img
                        src={logout}
                        alt="logout icon"
                        className="h-[25px] mr-1 "
                    />
                    <div className="span">Log Out</div>
                </div>
                <div
                    className="turnoff flex items-center text-white text-[13px] m-1 pr-2 hover:bg-blue-700 "
                    role="button"
                >
                    <img
                        src={turnoff}
                        alt="turnoff icon"
                        className="h-[25px] mr-1 "
                    />
                    <div className="span">Turn Off Computer</div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
