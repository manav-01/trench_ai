import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const TradeTabs = ({ color = "#4FFFAB" }) => {
  return (
    <TabsContent value="buy">
      <Tabs defaultValue="market" className="w-full bg-[#171717]">
        <div className="mb-1.5">
          <div className="flex justify-between items-center mt-0.5 mx-1">
            <TabsList className="flex justify-between bg-transparent">
              {["market", "limit", "dca"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={`w-1/3 text-[#6E6E6E] data-[state=active]:text-[${color}] data-[state=active]:border-b-[${color}] rounded-b-none py-3.5`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
        <TabsContent
          value="market"
          className="bg-[#171717] rounded-lg mx-1 px-1 py-3"
        >
          <div className="border-[#262626] border flex justify-center items-center rounded-lg outline-[#1C1C1C] font-medium">
            <input
              type="text"
              placeholder="7.0"
              className="text-[#EDEDED] placeholder:text-[#EDEDED] outline-0 ring-0 border-0 focus-visible:border-none focus-visible:ring-0 flex-1 rounded-none border-none"
            />
            <div className="flex justify-around items-center text-[#747474] gap-1.5 my-0.5 px-1.5">
              <Image
                src="/asset/icon/solana_bnw.svg"
                width={20}
                height={20}
                alt="currency logo"
              />
              <span className="capitalize font-bold text-[#747474]">
                Amount
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mx-1">
            <div className="flex flex-nowrap gap-2 justify-evenly items-center p-1.5 my-1.5 text-[#747474] font-medium">
              {["0.01", "0.02", "0.03", "0.04"].map((amount) => (
                <span
                  key={amount}
                  className={`px-3 py-0.5 hover:ring-1 hover:border-[${color}] hover:ring-[${color}] rounded-md hover:text-[#EDEDED] bg-[#1F1F1F] border border-[#262626]`}
                >
                  {amount}
                </span>
              ))}
            </div>
            <Image
              src="/asset/icon/edit.svg"
              width={20}
              height={20}
              alt="edit"
            />
          </div>
          <div
            className={`flex justify-between items-center mx-1 bg-[${color}] my-1 py-1 px-2.5 font-semibold border-[#1F1F1F] rounded-md text-lg`}
          >
            <div className="flex gap-1.5 justify-center items-center">
              <Image
                src="/asset/icon/charge.svg"
                alt="Charge"
                width={15}
                height={15}
              />
              <span>Buy TRENCHAI</span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span>7.0</span>
              <Image
                src="/asset/icon/solana.svg"
                alt="solana"
                width={17}
                height={17}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </TabsContent>
  );
};

export default TradeTabs;
