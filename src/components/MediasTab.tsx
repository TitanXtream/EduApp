import { ReactNode, Fragment } from "react";
import VideoFrame from "../VideoFrame";
import { BsImage } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { Tab } from "@headlessui/react";

const MediasTab = () => {
  return (
    <div className="w-full flex flex-col gap-[0.5em]">
      <div className="relative w-full bg-gray-100 auto">
        <VideoFrame />
      </div>
      <HorizontalSlider />
    </div>
  );
};

export default MediasTab;

const HorizontalSlider = () => {
  return (
    <div className="relative flex w-full gap-[0.3em] px-[1em]">
      {/* <button className="carosol_slider_btn rounded-l-[0.5em]">
          <AiFillCaretLeft />
        </button> */}
      <div className="flex justify-start w-full gap-x-[0.5em] h-[3em] overflow-x-clip grow-0">
        <div className="h-full aspect-square">
          <button className="media_box active">
            <MdVideoLibrary />
          </button>
          {/* <div className="absolute top-[125%] left-[50%] translate-x-[-50%] px-[2em] py-[0.2em] bg-gray-700/80 text-gray-200 border-[2px] border-slate-200 rounded-md shadow-lg text-[0.8em] flex items-center justify-center">
              {"Software applictaion"}
            </div> */}
        </div>
        <button className="media_box">
          <BsImage />
        </button>
        <button className="media_box">
          <BsImage />
        </button>
        <button className="media_box">
          <BsImage />
        </button>
      </div>
      {/* <button className="carosol_slider_btn rounded-r-[0.5em]">
          <AiFillCaretRight />
        </button> */}
    </div>
  );
};
