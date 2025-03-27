import { currency_basic_details } from "@/data/data";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatsSecurityTabs from "./StatsSecurityTabs";
import TokenInfo from "./TokenInfo";
import Order from "./Order";
import SellOrder from "./SellOrder";

function RightBar() {
  return (
    <div className="m-1 p-2 w-2/8 h-full">
      <div className="bg-[#121212]  w-full overflow-y-scroll  border border-[#000000] h-full no-scrollbar ">
        <div className="text-[#747474] flex  gap-5 justify-center items-center pt-1 pb-1.5 border border-[#000000]">
          {currency_basic_details.length > 0 &&
            currency_basic_details.map((value) => (
              <div key={value.id} className="">
                <div className="font-medium ">{value.title}</div>
                <div className="text-right font-bold text-[#EDEDED]">
                  {value.cur_sym}
                  {value.value}
                </div>
              </div>
            ))}
        </div>
        <div className=" my-1.5 mx-1 rounded-md">
          <Tabs defaultValue="buy" className="w-full bg-[#171717]">
            <TabsList className="flex justify-center items-center w-full bg-[#1C1C1C] ">
              <TabsTrigger
                value="buy"
                className="w-1/2 font-medium text-lg data-[state=active]:bg-[#4FFFAB] data-[state=active]:text-[#000000] text-[#747474]"
              >
                Buy
              </TabsTrigger>
              <TabsTrigger
                value="sell"
                className="w-1/2  font-medium text-lg data-[state=active]:bg-[#EA417F] data-[state=active]:text-[#000000] text-[#747474]"
              >
                Sell
              </TabsTrigger>
            </TabsList>
            <TabsContent value="buy">
              <Order />
            </TabsContent>
            <TabsContent value="sell">
              <SellOrder />
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <TokenInfo />
        </div>
        <div>
          <StatsSecurityTabs />
        </div>
      </div>
    </div>
  );
}

export default RightBar;
