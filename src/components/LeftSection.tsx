"use client";
import React from "react";
import UserDashBoard from "./UserDashBoard";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { GripHorizontalIcon } from "lucide-react";

function LeftSection() {
  return (
    <>
      <div className="w-6/8 bg-[#0D0D0D] relative mb-[44px] ">
        <PanelGroup autoSaveId="example" direction="vertical">
          <Panel defaultSize={25} order={1}>
            LeftSide
          </Panel>
          <PanelResizeHandle className="w-full h-fit bg-[#151515] flex justify-center items-center ">
            {" "}
            <GripHorizontalIcon className="text-white" />{" "}
          </PanelResizeHandle>
          <Panel maxSize={100} order={2} className="">
            <UserDashBoard />
          </Panel>
        </PanelGroup>
      </div>
    </>
  );
}

export default LeftSection;

{
  /* <div className="w-6/8 bg-amber-100  ">
<div>
  <UserDashBoard />
</div>
</div> */
}
