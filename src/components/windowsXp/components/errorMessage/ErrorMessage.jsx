import React, { useState } from "react";
import error from "../../../../assets/error.png";
const ErrorMessage = () => {
    const [isClicked, setIsClicked] = useState(true);
    console.log("error");
    if (isClicked) {
        return (
            <div className="fixed border-2 border-[#0058ee] rounded-t-md bg-[#ECE9D8] shadow-lg font-tahoma text-[14px] w-[380px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                    className="flex justify-between items-center text-white px-2 py-1 title-bar-controls"
                    style={{
                        background:
                            "linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%)",
                    }}
                >
                    <div className="flex items-center">
                        <div className="">
                            <img
                                src={error}
                                alt=" close button"
                                className="h-[20px] w-[20px]"
                            />
                        </div>
                        <span className="font-bold pl-2">C:\</span>
                    </div>

                    <button
                        aria-label="Close"
                        onClick={() => setIsClicked(false)}
                    ></button>
                </div>
                <div className="flex items-center p-4">
                    <div className="">
                        <img
                            src={error}
                            alt=" close button"
                            className="h-8 w-8 mr-3"
                        />
                    </div>
                    <p>
                        C:\ <br /> Application not found
                    </p>
                </div>
                <div className="flex justify-center p-2">
                    <button
                        className="bg-[#ECE9D8] border border-black px-4 py-1 cursor-pointer hover:bg-gray-300"
                        onClick={() => setIsClicked(false)}
                    >
                        OK
                    </button>
                </div>
            </div>
        );
    }
    return <></>;
};

export default ErrorMessage;
