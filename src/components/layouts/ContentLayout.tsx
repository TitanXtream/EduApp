import { ReactNode, Fragment } from "react";
import { DefineButton } from "../ui/Buttons";
import { textSize } from "./PageLayout";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { RxHeading } from "react-icons/rx";
import { MdOutlineViewHeadline } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { Tab } from "@headlessui/react";
import MediasTab from "../MediasTab";
import QandATab from "../QandATab";

// type ContentLayoutprops = {};

const ContentLayout = () => {
  return (
    <div className={`w-full relative flex ${textSize}`}>
      <div className="sticky top-[60px] left-0 w-[60px] overflow-hidden bg-white h-[calc(100vh-60px)] shrink-0 border-r-[1px] flex flex-col gap-[0.5em] p-[0.5em]">
        <button className="w-full aspect-square h-auto bg-blue-500 text-white rounded-lg shadow-md shadow-blue-400 flex items-center justify-center">
          <RxHeading />
        </button>
        <button className="w-full aspect-square h-auto bg-gray-200 rounded-sm flex items-center justify-center hover:text-blue-600">
          1.
        </button>
        <button className="w-full aspect-square h-auto bg-gray-200 rounded-sm flex items-center justify-center hover:text-blue-600">
          2.
        </button>
        <button className="w-full aspect-square h-auto bg-gray-200 rounded-sm flex items-center justify-center hover:text-blue-600">
          3.
        </button>
      </div>
      <div className="w-full min-h-[400px] shrink p-[2em] flex flex-col">
        <article className="flex flex-col gap-y-[1em]" about="Dapp">
          <h1 className="font-bold text-[1.7em]">DApp - (Decentralised App)</h1>
          <h2></h2>
          <p className="text-[0.9em] w-full text-justify">
            A decentralized application, commonly referred to as DApp, is a type
            of <DefineButton topic={0}>software application</DefineButton> that
            operates on a{" "}
            <DefineButton topic={1}>decentralized network</DefineButton>,
            typically a <DefineButton topic={2}>blockchain</DefineButton>. DApps
            leverage the distributed and consensus-driven nature of blockchain
            technology to provide transparent, secure, and censorship-resistant
            functionalities. Unlike traditional applications that rely on a
            central authority or server, DApps run on a{" "}
            <DefineButton topic={3}>peer-to-peer network</DefineButton> of
            computers, ensuring that no single entity has control over the
            application's operations. DApps often utilize{" "}
            <DefineButton topic={4}>smart contracts</DefineButton>, which are
            self-executing contracts with the terms of the agreement directly
            written into code, enabling automated and trustless interactions
            between participants.
          </p>
          <div className="w-full flex justify-end">
            <button className="bg-blue-100/80 text-blue-600 text-[0.8em] px-[1.2em] py-[0.4em] rounded-md shadow-md hover:bg-white hover:shadow-lg">
              Learn more
            </button>
          </div>
        </article>
        <div className="mt-auto flex">
          <button className="bg-blue-500 text-white text-[0.8em] px-[1.2em] py-[0.4em] rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg">
            Ask questions to instructors
          </button>
        </div>
      </div>
      <div className="sticky right-0 top-[60px] w-[540px] h-[calc(100vh-60px)] shrink-0 p-[0.8em]">
        <VisualInfoBox />
      </div>
    </div>
  );
};

export default ContentLayout;

const VisualInfoBox = () => {
  return (
    <div className="w-full h-full bg-white shadow-lg shadow-slate-400 rounded-[0.5em] flex flex-col">
      {/* ======================== Top section start ======================== */}
      <div className="h-[50px] border-b-[1px] flex items-center justify-between px-[1em] font-semibold text-[1.1em] truncate">
        <h1>DApp - (Decentralised App)</h1>
      </div>
      {/* ======================== Top section end ======================== */}
      <Tab.Group as={"div"} className={"flex flex-col"}>
        {/* =========================== Navbar Start =========================== */}
        <Tab.List className="h-[50px] shrink-0 w-full flex justify-center border-b-[1px] items-center">
          <NavbarTab
            label={
              <div className="flex items-center justify-center">
                <FaPhotoVideo />
              </div>
            }
          />
          <NavbarTab
            label={
              <div className="flex items-center justify-center">
                <IoIosPeople />
              </div>
            }
          />
        </Tab.List>
        {/* =========================== Navbar End =========================== */}
        <Tab.Panels as={Fragment}>
          <Tab.Panel as={Fragment}>
            <MediasTab />
          </Tab.Panel>
          <Tab.Panel as={Fragment}>
            <QandATab />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

type NavbarTabProps = {
  label: ReactNode;
};

const NavbarTab = ({ label }: NavbarTabProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        /* Use the `selected` state to conditionally style the selected tab. */
        <button
          className={`${
            selected ? "bg-gray-300 shadow-md shadow-gray-300" : "bg-gray-100"
          }  text-gray-700 w-[5em] max-w-[5em] h-[86%] outline-none rounded-md`}
        >
          {label}
        </button>
      )}
    </Tab>
  );
};
