import { useState } from "react";
// import"#"from "./assets"#"svg";

function App() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex flex-col w-auto h-100vh justify-center items-center bg-blue-700">
      <div className="w-3/4 h-max rounded-3xl bg-[#14264e] py-10 px-10 gap-5 flex justify-center flex-col items-center">
        <h1 className="text-white font-semibold text-2xl">Upload</h1>
        <div className="w-44 bg-yellow-400 p-0.5 mb-2"></div>
        <h2 className="text-white font-medium">
          Bring your songs to life with the help of NYX AI and Professionals
          guidance!{" "}
        </h2>
        <p className="text-slate-400  w-1/2 text-center">
          Check your audio and video creation for monitization upload your track
          below and check it for free
        </p>
        <div className="flex w-max justify-center items-center gap-4">
          <div className="w-1/2">
            <label className="text-slate-400">Track Type</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Indian Hindi Songs</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="text-slate-400">Select Genre</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Selected Category</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="w-1/2 flex-col justify-center items-center flex gap-4 mb-6">
            {selected === 1 ? (
              <div className="flex gap-5 w-auto justify-center align-center">
                <div className="p-4 rounded-full bg-emerald-400 w-32 h-32 mt-4 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="98"
                    height="90"
                    viewBox="0 0 101 101"
                    fill="none"
                  >
                    <path
                      d="M46.2904 67.332V33.0341L35.3487 43.9758L29.457 37.8737L50.4987 16.832L71.5404 37.8737L65.6487 43.9758L54.707 33.0341V67.332H46.2904ZM25.2487 84.1654C22.9341 84.1654 20.9527 83.3412 19.3044 81.693C17.6562 80.0447 16.832 78.0633 16.832 75.7487V63.1237H25.2487V75.7487H75.7487V63.1237H84.1654V75.7487C84.1654 78.0633 83.3412 80.0447 81.693 81.693C80.0447 83.3412 78.0633 84.1654 75.7487 84.1654H25.2487Z"
                      fill="#3B226F"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="flex gap-5 w-auto justify-center align-center">
                <div className="p-4 rounded-full bg-emerald-400 w-32 h-32 mt-4 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="98"
                    height="90"
                    viewBox="0 0 101 101"
                    fill="none"
                  >
                    <path
                      d="M46.2904 67.332V33.0341L35.3487 43.9758L29.457 37.8737L50.4987 16.832L71.5404 37.8737L65.6487 43.9758L54.707 33.0341V67.332H46.2904ZM25.2487 84.1654C22.9341 84.1654 20.9527 83.3412 19.3044 81.693C17.6562 80.0447 16.832 78.0633 16.832 75.7487V63.1237H25.2487V75.7487H75.7487V63.1237H84.1654V75.7487C84.1654 78.0633 83.3412 80.0447 81.693 81.693C80.0447 83.3412 78.0633 84.1654 75.7487 84.1654H25.2487Z"
                      fill="#3B226F"
                    />
                  </svg>
                </div>
                <div className="p-4 rounded-full bg-emerald-400 w-32 h-32 mt-4 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="98"
                    height="90"
                    viewBox="0 0 101 101"
                    fill="none"
                  >
                    <path
                      d="M46.2904 67.332V33.0341L35.3487 43.9758L29.457 37.8737L50.4987 16.832L71.5404 37.8737L65.6487 43.9758L54.707 33.0341V67.332H46.2904ZM25.2487 84.1654C22.9341 84.1654 20.9527 83.3412 19.3044 81.693C17.6562 80.0447 16.832 78.0633 16.832 75.7487V63.1237H25.2487V75.7487H75.7487V63.1237H84.1654V75.7487C84.1654 78.0633 83.3412 80.0447 81.693 81.693C80.0447 83.3412 78.0633 84.1654 75.7487 84.1654H25.2487Z"
                      fill="#3B226F"
                    />
                  </svg>
                </div>
              </div>
            )}

            <div className="w-full flex justify-center items-center gap-2">
              <div
                className={`py-2 font-semibold px-10 rounded-md cursor-pointer border-2 text-white border-yellow-300 ${
                  selected === 1 ? "bg-yellow-300 text-black" : " "
                }`}
                onClick={() => setSelected(1)}
              >
                Original
              </div>
              <div
                className={`py-2 font-semibold px-10 rounded-md text-white cursor-pointer border-2 border-yellow-300 ${
                  selected === 2 ? "bg-yellow-300 text-black " : ""
                }`}
                onClick={() => setSelected(2)}
              >
                Reference
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center gap-5 ">
            <div className="w-full flex justify-between items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="42"
                  viewBox="0 0 41 42"
                  fill="none"
                >
                  <path
                    d="M18.7904 28V13.7375L14.3487 18.2875L11.957 15.75L20.4987 7L29.0404 15.75L26.6487 18.2875L22.207 13.7375V28H18.7904ZM10.2487 35C9.30911 35 8.50477 34.6573 7.83568 33.9719C7.16658 33.2865 6.83203 32.4625 6.83203 31.5V26.25H10.2487V31.5H30.7487V26.25H34.1654V31.5C34.1654 32.4625 33.8308 33.2865 33.1617 33.9719C32.4926 34.6573 31.6883 35 30.7487 35H10.2487Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-white font-semibold">Upload your track</h2>
                <p className="text-white text-sm font-thin">
                  Upload your MP3, AIFF, or WAV file by clicking the button at
                  the top of the home page. The song will then be sent to our AI
                  engine.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    d="M11.0833 26.9167H14.25V19H11.0833V26.9167ZM23.75 26.9167H26.9167V11.0833H23.75V26.9167ZM17.4167 26.9167H20.5833V22.1667H17.4167V26.9167ZM17.4167 19H20.5833V15.8333H17.4167V19ZM7.91667 33.25C7.04583 33.25 6.30035 32.9399 5.68021 32.3198C5.06007 31.6997 4.75 30.9542 4.75 30.0833V7.91667C4.75 7.04583 5.06007 6.30035 5.68021 5.68021C6.30035 5.06007 7.04583 4.75 7.91667 4.75H30.0833C30.9542 4.75 31.6997 5.06007 32.3198 5.68021C32.9399 6.30035 33.25 7.04583 33.25 7.91667V30.0833C33.25 30.9542 32.9399 31.6997 32.3198 32.3198C31.6997 32.9399 30.9542 33.25 30.0833 33.25H7.91667ZM7.91667 30.0833H30.0833V7.91667H7.91667V30.0833Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-white font-semibold">Analyse and Modify</h2>
                <p className="text-white text-sm font-thin">
                  NYX predictive AI will analyse the track with cutting edge AI
                  model trained on Millions of historical songs and publish a
                  report based upon major parameters impacting song virality &
                  popularity.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    d="M5.38464 28.5L3.16797 26.2833L14.8846 14.4875L21.218 20.8208L29.4513 12.6667H25.3346V9.5H34.8346V19H31.668V14.8833L21.218 25.3333L14.8846 19L5.38464 28.5Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-white font-semibold">
                  Master and Monetize
                </h2>
                <p className="text-white text-sm font-thin">
                  Modify your track based upondetailed report and help of
                  professionals. Bring your songs to life by listing it on
                  popular streaming platform and witness monetization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="w-3/4 h-max rounded-3xl bg-[#14264e] py-10 px-10 gap-5 flex justify-center flex-col items-center">
        <div className="flex flex-row-reverse w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M0.35 13.65C0.583333 13.8833 0.855555 14 1.16667 14C1.47778 14 1.75 13.8833 1.98333 13.65L7 8.63333L12.0556 13.6889C12.263 13.8963 12.5287 13.9935 12.8528 13.9806C13.1769 13.9676 13.4426 13.8574 13.65 13.65C13.8833 13.4167 14 13.1444 14 12.8333C14 12.5222 13.8833 12.25 13.65 12.0167L8.63333 7L13.6889 1.94444C13.8963 1.73704 13.9935 1.4713 13.9806 1.14722C13.9676 0.823148 13.8574 0.557407 13.65 0.35C13.4167 0.116667 13.1444 0 12.8333 0C12.5222 0 12.25 0.116667 12.0167 0.35L7 5.36667L1.94444 0.311111C1.73704 0.103703 1.4713 0.00648092 1.14722 0.0194439C0.823148 0.0324068 0.557407 0.142593 0.35 0.35C0.116667 0.583333 0 0.855555 0 1.16667C0 1.47778 0.116667 1.75 0.35 1.98333L5.36667 7L0.311111 12.0556C0.103703 12.263 0.00648092 12.5287 0.0194439 12.8528C0.0324068 13.1769 0.142593 13.4426 0.35 13.65Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="fles flex-row w-full">
          <h2 className="text-white font-medium">Mastering in progress...</h2>
          <p className="text-slate-400">
            Audio File Uploaded{" "}
            <span className="text-emerald-300">MySong2.mp3</span>
          </p>
        </div>
        <div className="w-full h-max flex justify-center items-center ">
          <div className="p-4 rounded-full bg-emerald-400 w-[160px] h-[160px] mt-4 flex justify-center items-center border-[10px] border-yellow-400">
            <span className="text-indigo-900 font-extrabold text-4xl">82%</span>
          </div>
        </div>
        <div className="fles flex-row w-full">
          <div className="flex">
            <h2 className="text-white font-medium">Mastering Tips & Tracks</h2>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M17.8484 23.6389L9.42344 14.3056C9.32344 14.1944 9.25277 14.0741 9.21144 13.9444C9.16944 13.8148 9.14844 13.6759 9.14844 13.5278C9.14844 13.3796 9.16944 13.2407 9.21144 13.1111C9.25277 12.9815 9.32344 12.8611 9.42344 12.75L17.8484 3.38889C18.0818 3.12963 18.3734 3 18.7234 3C19.0734 3 19.3734 3.13889 19.6234 3.41667C19.8734 3.69444 19.9984 4.01852 19.9984 4.38889C19.9984 4.75926 19.8734 5.08333 19.6234 5.36111L12.2734 13.5278L19.6234 21.6944C19.8568 21.9537 19.9734 22.273 19.9734 22.6522C19.9734 23.0322 19.8484 23.3611 19.5984 23.6389C19.3484 23.9167 19.0568 24.0556 18.7234 24.0556C18.3901 24.0556 18.0984 23.9167 17.8484 23.6389Z"
                  fill="#8297BD"
                />
              </svg>
            </span>
            <h3 className="text-slate-400">1/4</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M10.1516 4.36111L18.5766 13.6944C18.6766 13.8056 18.7472 13.9259 18.7886 14.0556C18.8306 14.1852 18.8516 14.3241 18.8516 14.4722C18.8516 14.6204 18.8306 14.7593 18.7886 14.8889C18.7472 15.0185 18.6766 15.1389 18.5766 15.25L10.1516 24.6111C9.91823 24.8704 9.62656 25 9.27656 25C8.92656 25 8.62656 24.8611 8.37656 24.5833C8.12656 24.3056 8.00156 23.9815 8.00156 23.6111C8.00156 23.2407 8.12656 22.9167 8.37656 22.6389L15.7266 14.4722L8.37656 6.30555C8.14323 6.0463 8.02656 5.72704 8.02656 5.34778C8.02656 4.96778 8.15156 4.63889 8.40156 4.36111C8.65156 4.08333 8.94323 3.94444 9.27656 3.94444C9.6099 3.94444 9.90156 4.08333 10.1516 4.36111Z"
                fill="#8297BD"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row w-[668px]">
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <br />

      <div className="w-3/4 h-max rounded-3xl bg-[#14264e] py-10 px-10 gap-5 flex justify-center flex-col items-center">
        <div className="fles flex-row w-full">
          <h2 className="text-white font-medium">
            Probability of your song success is Medium
          </h2>
        </div>
        <div className="w-[1060px] h-[60px] bg-black rounded-md ">
          <h1>hhhhhhh</h1>
        </div>

        <div className="flex w-full">
          <img
            className="w-[23px] h-[23px]"
            src="https://s3-alpha-sig.figma.com/img/86da/aa1b/a9b0e7e942bdc557d5c2c6c8cc50ce0a?Expires=1698019200&Signature=OQM80zBFWSkJCBWphF1kQG9nRq5SsefzbZBS7zNXgprNZ7BXtIs6Ef3Z9pZle8oUL2SQnZOY2XTgo2FnxdeLyBlgmBi7BglLREkUzNA9JHHjHGsUf6QNc5qO~BBiVoAcWCASrJ2ZO5cpeqFTuA1dk~YeOZ2mz~yOY5D8eYLiVKkwBfOyV1OR4Qm87x8wuvZ3nQCGGqJL-CVElfH5BXksdp321BqCIlCw0MY6RaJ6EHuuVZNkG5-rEG7122ifV-KLQmOH5zW5mxRcVOQ8xkz5JxROpnmBILQZXBhYd1PMqB~2U~IrjXIYmkOoJ2LcEVfk1d7yZHa4Gl-y5-L1fhNIYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <h6 className="text-white">Success Probability:</h6>
          <div className=" flex bg-[#091234] w-[105px] h-[27.474px] rounded-md justify-center items-center">
            <h6 className="text-yellow-500">Medium</h6>
          </div>
        </div>
        <div className="flex w-full ml-11">
          <h6 className="text-white">Model Accuracy:</h6>
          <div className=" bg-[#091234] w-[105px] h-[27.474px] rounded-md ml-6 flex justify-center items-center">
            <h6 className="text-yellow-500">96%</h6>
          </div>
        </div>
        <p className="text-slate-400  w-1/2 text-center">
          Description text: This is the description text, here we will define
          what and why user should buy the premium features. This is the
          description text, here we will define what and why user should buy the
          premium features.
        </p>
        <div className="flex justify-center items-center w-1/2 bg-[#091234] mt-7 rounded-lg py-10">
          <div className="flex justify-center items-center flex-col">
            <p className="text-yellow-500 font-bold text-xl">
              Improve your song{" "}
            </p>
            <p className="text-slate-400 ">
              with our NYX Predictive & Generative AI
            </p>
            <div className="w-[200px] flex justify-center items-center h-max rounded-md border-solid border-2 mt-10 bg-[#091234] shadow-lg shadow-indigo-500/50">
              <p className="text-slate-400 ">Improve my Song</p>
            </div>
          </div>
        </div>
        <p className="text-red-600">
          Click here to see results and continue without improving your song
        </p>
        <p className="text-white">Still you think your song can do wonders?</p>
        <div className="w-[200px] flex justify-center items-center h-max rounded-md border-solid border-2 mt-5 bg-[#091234] shadow-lg shadow-indigo-500/50">
          <p className="text-slate-400 ">Request to list your Track</p>
        </div>
      </div>

      <br />

      <div className="w-3/4 h-[470px] rounded-3xl bg-[#14264e] py-10 px-10 gap-5 flex  flex-col">
        <div className="flex flex-row-reverse w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M0.35 13.65C0.583333 13.8833 0.855555 14 1.16667 14C1.47778 14 1.75 13.8833 1.98333 13.65L7 8.63333L12.0556 13.6889C12.263 13.8963 12.5287 13.9935 12.8528 13.9806C13.1769 13.9676 13.4426 13.8574 13.65 13.65C13.8833 13.4167 14 13.1444 14 12.8333C14 12.5222 13.8833 12.25 13.65 12.0167L8.63333 7L13.6889 1.94444C13.8963 1.73704 13.9935 1.4713 13.9806 1.14722C13.9676 0.823148 13.8574 0.557407 13.65 0.35C13.4167 0.116667 13.1444 0 12.8333 0C12.5222 0 12.25 0.116667 12.0167 0.35L7 5.36667L1.94444 0.311111C1.73704 0.103703 1.4713 0.00648092 1.14722 0.0194439C0.823148 0.0324068 0.557407 0.142593 0.35 0.35C0.116667 0.583333 0 0.855555 0 1.16667C0 1.47778 0.116667 1.75 0.35 1.98333L5.36667 7L0.311111 12.0556C0.103703 12.263 0.00648092 12.5287 0.0194439 12.8528C0.0324068 13.1769 0.142593 13.4426 0.35 13.65Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex">
          <p className="text-slate-300 font-sans w-1/2 ">
            We want to support the best talent around the world for which NYX is
            offering the value and buy the songs from the talented artist
          </p>
        </div>
        <div className="fles flex-row w-full text-center mt-6 text-sans">
          <p className="text-white text-xl">
            Would you like to sell future royalty of your song?
          </p>
        </div>

        <div class="flex items-center mb-4 gap-5 justify-center my-7">
          <div>
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              NO
            </label>
          </div>
          <div>
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              YES
            </label>
          </div>
        </div>
        <div className="flex gap-5 justify-center">
          <div className="w-[200px] flex justify-center items-center h-max rounded-md border-solid border-2 mt-5 bg-[#091234] shadow-lg shadow-indigo-500/50">
            <p className="text-slate-300 ">Cancel</p>
          </div>
          <div className="w-[200px] flex justify-center items-center h-max rounded-md border-solid border-2 mt-5 bg-[#091234] shadow-lg shadow-indigo-500/50">
            <p className="text-slate-300 ">Next</p>
          </div>
        </div>
      </div>

      <br />

      <div className="w-[586px] text-center">
        <p className="text-white font-semibold text-3xl">
          Get Detailed reports of your song to improve its chances for
          popularity
        </p>
      </div>
      <div className="my-5">
        <p className=" text-white text-xl">
          Our NYX AI can predict your song popularity based on past data
        </p>
      </div>
      <div className="flex flex-col gap-5 my-8">
        <div className="flex gap-5">
          <div className="w-[443px] h-[414.999px] rounded-md bg-[#1c3366]">
            <div className="w-[443px] h-[67px] bg-[#14264e] text-center flex justify-center items-center">
              <h3 className="text-white text-xl">Monthly Plane</h3>
            </div>
            <div className="flex flex-col flex-start m-10 text-white">
              <h3 className="text-white font-bold">What’s Included</h3>
              <ol>
                <li>1. Detailed Track report</li>
                <li>2. Track Statistics</li>
                <li>3. Modified song download options</li>
                <li>4. Cloud Storage</li>
                <li>5. competitive analysis of multiple songs</li>
                <li>6. Track analysis upto 10 tracks</li>
              </ol>
            </div>
            <div className="flex m-10">
              <div className="flex justify-center w-1/2">
                <p className="w-1/4 text-white text-3xl text-center">900</p>
              </div>

              <div className="w-3/4 text-white text-2xl text-center flex justify-center items-center">
                <div className="w-[200px] flex justify-center items-center h-max rounded-md border-solid border-2 bg-[#091234] shadow-lg shadow-indigo-500/50">
                  <p className="text-slate-300 ">Buy Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[443px] h-[414.999px] rounded-md bg-[#1c3366]">
            <div className="w-[443px] h-[67px] bg-[#14264e] text-center flex justify-center items-center">
              <h3 className="text-white text-xl">Yearly Plane</h3>
            </div>
            <div className="flex flex-col flex-start m-10 text-white">
              <h3 className="text-white font-bold">What’s Included</h3>
              <ol>
                <li>1. Detailed Track report</li>
                <li>2. Track Statistics</li>
                <li>3. Modified song download options</li>
                <li>4. Cloud Storage</li>
                <li>5. competitive analysis of multiple songs</li>
                <li>6. Track analysis upto 10 tracks</li>
              </ol>
            </div>
            <div className="flex m-10">
              <div className="flex justify-center w-1/2">
                <p className="w-1/4 text-white text-3xl text-center">1500</p>
              </div>

              <div className="w-3/4 text-white text-2xl text-center flex justify-center items-center">
                <div className="w-[200px] flex justify-center items-center h-max rounded-md border-solid border-2 bg-[#091234] shadow-lg shadow-indigo-500/50">
                  <p className="text-slate-300 ">Buy Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[908px] h-[230px] rounded-md bg-[#1c3366]">
          <div className="w-[908px] h-[67px] bg-[#14264e] text-center flex justify-center items-center">
            <h3 className="text-white text-xl">Premium Topup</h3>
          </div>
          <div className="flex">
            <div className="flex flex-col flex-start m-7 text-white w-1/2">
              <h3 className="text-white font-bold">What’s Included</h3>
              <ol>
                <li>1. Detailed Track report</li>
                <li>2. Track Statistics</li>
                <li>3. Modified song download options</li>
                <li>4. Cloud Storage</li>
              </ol>
            </div>
            <div className="m-7 flex flex-col gap-3">
              <div className="flex justify-center w-1/2">
                <p className="w-1/4 text-white text-3xl text-center">10000</p>
              </div>
              <div>
              <div className="w-3/4 text-white text-2xl text-center flex justify-center items-center">
                <div className="w-[200px] flex justify-center items-center h-max rounded-md border-solid border-2 bg-[#091234] shadow-lg shadow-indigo-500/50">
                  <p className="text-slate-300 ">Buy Now</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
