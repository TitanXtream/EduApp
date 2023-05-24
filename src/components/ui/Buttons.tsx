import React, { ReactNode, useState } from "react";
import { DefinitionModal } from "./Modals";

type DefineButtonProps = {
  children: ReactNode;
  topic: number;
};
export const DefineButton = ({ children, topic }: DefineButtonProps) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <button className="sub_topic" onClick={() => setisOpen(true)}>
        {children}
      </button>
      <DefinitionModal isOpen={isOpen} setIsOpen={setisOpen} topic={topic} />
    </>
  );
};
