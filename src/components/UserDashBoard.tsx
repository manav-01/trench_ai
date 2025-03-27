"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TransactionTable from "./TransactionTable";

// const tradeTabs = ["Trades", "Top Traders", "Holders", "Orders", "Dev Tokens"];
const tradeTabs = [
  { id: 0, tab: "Trades", pic: "/asset/icon/tread.svg" },
  { id: 1, tab: "Top Traders", pic: "/asset/icon/top.svg" },
  { id: 2, tab: "Holders", pic: "/asset/icon/holders.svg" },
  { id: 3, tab: "Orders", pic: "/asset/icon/order.svg" },
  { id: 4, tab: "Dev Tokens", pic: "/asset/icon/dev_token.svg" },
];

export default function UserDashBoard() {
  const [activeTradeTab, setActiveTradeTab] = useState("Trades");

  return (
    <div className="bg-[#121212] text-white px-4 py-1 w-full">
      <div className="mt-6">
        <div className="flex space-x-4 border-b pb-2">
          {tradeTabs.map((tab) => (
            <button
              key={tab.id}
              className={cn(
                "px-3 py-1 flex justify-center items-center gap-1.5",
                activeTradeTab === tab.tab
                  ? "text-[#EDEDED] border-b-2 border-[#EDEDED]"
                  : "text-gray-500"
              )}
              onClick={() => setActiveTradeTab(tab.tab)}
            >
              <Image
                src={tab.pic}
                height={17}
                width={17}
                alt={tab.tab}
                className="text-orange-400"
              />
              {tab.tab}
            </button>
          ))}
        </div>

        {activeTradeTab === "Trades" && <TransactionTable />}
      </div>
    </div>
  );
}
