import { Dialog } from "@headlessui/react";
import React from "react";
import { textSize } from "../layouts/PageLayout";
import { IoCloseCircleOutline } from "react-icons/io5";
import { subTopicInfos } from "../../data/dummy";

type DefinitionModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  topic: number;
};

export const DefinitionModal = ({
  isOpen,
  setIsOpen,
  topic,
}: DefinitionModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={`fixed inset-0 w-full h-screen bg-slate-700/50 flex items-center justify-center z-[80] ${textSize}`}
      as="div"
    >
      <Dialog.Panel
        className={"bg-white w-full max-w-[40em] rounded-lg shadow-lg p-[1em]"}
        as="article"
      >
        <div className="flex justify-between">
          <Dialog.Title className={"text-[1.2em] font-semibold"} as="h1">
            {subTopicInfos[topic].topic}
          </Dialog.Title>
          <button
            className="text-[1.2em] p-[0.2em] hover:bg-gray-100 hover:shadow-md rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <IoCloseCircleOutline />
          </button>
        </div>
        <Dialog.Description
          className={"my-[1em] text-[0.9em] text-justify"}
          as="p"
        >
          {subTopicInfos[topic].definition}
        </Dialog.Description>

        {/* <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p> */}
        <div className="flex w-full justify-between text-[0.8em]">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gray-100 px-[1.5em] py-[0.5em] rounded-md text-blue-600 hover:bg-gray-200 shadow-lg hover:shadow-gray-300"
          >
            Go back
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 px-[1.5em] py-[0.5em] rounded-md text-white hover:bg-blue-700 shadow-lg hover:shadow-gray-300"
          >
            Learn more
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
