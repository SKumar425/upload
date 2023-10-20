import React, { useState } from "react";
import clsx from "clsx";
import RadarChart from "./RadarChart";

const Upload = () => {
  const [file, setFile] = useState("");
  const [fileTwo, setFileTwo] = useState("");
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileTwo = (e) => {
    setFileTwo(e.target.files[0]);
  };

  return (
    <div className="w-full h-full bg-blue-500 flex justify-center items-center flex-col p-5">
      <div className="w-full flex justify-center flex-col items-center gap-3">
        <h1 className="text-cyan-500 font-bold text-4xl">
          Unlock the Power of NYX AI
        </h1>
        <p className="text-2xl text-white font-semibold">
          Your Track's Success, Analysed and Compared side by side
        </p>
      </div>
      <div className="flex gap-12 w-auto justify-center align-center my-20">
        <div
          className={clsx(
            "p-4 rounded-full   relative w-40 h-40 mt-4 hover:scale-150  justify-center items-center flex flex-col transition duration-700 ease-in-out",
            file?.name ? "bg-yellow-400" : "bg-emerald-400"
          )}
        >
          <input
            type="file"
            className="w-full h-full absolute opacity-0 rounded-full"
            onChange={handleFile}
            accept="audio/*,.mp3,.wav,.m4a,.aif,.wma,.flac,.aiff,.aax,.ogg"
          />
          {file?.name ? (
            <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 73 53"
            fill="none"
          >
            <path
              d="M25.7813 52.75L0.84375 27.8125L7.07813 21.5781L25.7813 40.2813L65.9219 0.140625L72.1563 6.375L25.7813 52.75Z"
              fill="#3B226F"
            />
          </svg>
              
            ) : (
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 101 101"
                fill="none"
              >
                <path
                  d="M46.2904 67.332V33.0341L35.3487 43.9758L29.457 37.8737L50.4987 16.832L71.5404 37.8737L65.6487 43.9758L54.707 33.0341V67.332H46.2904ZM25.2487 84.1654C22.9341 84.1654 20.9527 83.3412 19.3044 81.693C17.6562 80.0447 16.832 78.0633 16.832 75.7487V63.1237H25.2487V75.7487H75.7487V63.1237H84.1654V75.7487C84.1654 78.0633 83.3412 80.0447 81.693 81.693C80.0447 83.3412 78.0633 84.1654 75.7487 84.1654H25.2487Z"
                  fill="#3B226F"
                />
              </svg>
            )}

          <div className="flex  flex-col justify-center items-center mt-2 w-max gap-2">
            <p className="text-xs w-20 h-max text-[#3B226F]">{file?.name}</p>
          </div>
        </div>

        <div className="flex gap-5 w-auto justify-center align-center mb-3">
          <div
            className={clsx(
              "p-4 rounded-full   relative w-40 h-40 mt-4 hover:scale-150  justify-center items-center flex flex-col transition duration-700 ease-in-out",
              fileTwo?.name ? "bg-yellow-400" : "bg-emerald-400"
            )}
          >
            <input
              type="file"
              className="w-full h-full absolute opacity-0 rounded-full"
              onChange={handleFileTwo}
              accept="audio/*,.mp3,.wav,.m4a,.aif,.wma,.flac,.aiff,.aax,.ogg"
            />
            {fileTwo?.name ? (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            viewBox="0 0 73 53"
            fill="none"
          >
            <path
              d="M25.7813 52.75L0.84375 27.8125L7.07813 21.5781L25.7813 40.2813L65.9219 0.140625L72.1563 6.375L25.7813 52.75Z"
              fill="#3B226F"
            />
          </svg>
              
            ) : (
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 101 101"
                fill="none"
              >
                <path
                  d="M46.2904 67.332V33.0341L35.3487 43.9758L29.457 37.8737L50.4987 16.832L71.5404 37.8737L65.6487 43.9758L54.707 33.0341V67.332H46.2904ZM25.2487 84.1654C22.9341 84.1654 20.9527 83.3412 19.3044 81.693C17.6562 80.0447 16.832 78.0633 16.832 75.7487V63.1237H25.2487V75.7487H75.7487V63.1237H84.1654V75.7487C84.1654 78.0633 83.3412 80.0447 81.693 81.693C80.0447 83.3412 78.0633 84.1654 75.7487 84.1654H25.2487Z"
                  fill="#3B226F"
                />
              </svg>
            )}

            <div className="flex  flex-col justify-center items-center mt-2 w-max gap-2">
              <p className="text-xs w-20 h-max text-[#3B226F]">
                {fileTwo?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-center mb-10">
        <div className="w-[200px] flex justify-center items-center h-max rounded-md border-solid border-2 mt-5 bg-[#091234] shadow-lg shadow-indigo-500/50">
          <p className="text-white text-sm ">Analyse & Compare</p>
        </div>
      </div>
      <div className="my-5">
        {file?.name && fileTwo?.name ? <RadarChart /> : null}
      </div>

      <div className="bg-slate-600 w-full h-[351px] p-10">
        <div className="m-10 p-5 flex w-[1228px]">
          <div className="w-1/2 gap-2">
            <p className="text-3xl text-white line-clamp-3">
              Enhanced Sound,
              <br />
              Enhanced Success
            </p>
            <p className="text-white">
              Instantly Improve Your Song's Quality with the support of NYX
              expert consultation service
            </p>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <div className="w-[200px] flex justify-center items-center h-max rounded-md border-solid border-2 mt-5 bg-[#091234] shadow-lg shadow-indigo-500/50">
              <p className="text-white text-sm ">Analyse & Compare</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
