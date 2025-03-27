import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import WalletSelect from "./WalletSelect";
import Image from "next/image";

function Order() {
  return (
    <>
      <Tabs defaultValue="market" className="w-full bg-[#171717]">
        <div className="mb-1.5">
          <div className="flex  justify-between items-center mt-0.5 mx-1 ">
            <div className="">
              <TabsList className=" flex justify-between bg-transparent ">
                <TabsTrigger
                  value="market"
                  className={`w-1/3 text-[#6E6E6E] data-[state=active]:text-[#4FFFAB]
                        data-[state=active]:border-b-[#4FFFAB] rounded-b-none
                        py-3.5
                        `}
                >
                  Market
                </TabsTrigger>
                <TabsTrigger
                  value="limit"
                  className={`w-1/3 text-[#6E6E6E] data-[state=active]:text-[#4FFFAB]
                        data-[state=active]:border-b-[#4FFFAB] rounded-b-none
                        py-3.5`}
                >
                  Limit
                </TabsTrigger>
                <TabsTrigger
                  value="dca"
                  className={`w-1/3 text-[#6E6E6E] data-[state=active]:text-[#4FFFAB]
                        data-[state=active]:border-b-[#4FFFAB] rounded-b-none
                        py-3.5`}
                >
                  DCA
                </TabsTrigger>
              </TabsList>
            </div>
            <WalletSelect />
          </div>
        </div>
        <TabsContent
          value="market"
          className="bg-[#171717] rounded-lg mx-1 px-1 py-3 "
        >
          <div className="border-[#262626] border flex justify-center items-center    rounded-lg outline-[#1C1C1C] font-medium">
            <Input
              type="text"
              placeholder="7.0"
              className="text-[#EDEDED] placeholder:text-[#EDEDED] outline-0 ring-0 border-0 focus-visible:border-none focus-visible:ring-0
        aria-invalid:ring-destructive/20 flex-1  rounded-none border-none "
            />
            <div className="flex justify-around items-center text-[#747474] gap-1.5 my-0.5 px-1.5">
              <Image
                src={"/asset/icon/solana_bnw.svg"}
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
              <span
                className={`px-3 py-0.5 hover:ring-1 hover:border-[#07DB76]  hover:ring-[#07DB76] rounded-md hover:text-[#EDEDED] bg-[#1F1F1F] border border-[#262626]`}
              >
                0.01
              </span>
              <span
                className={`px-3 py-0.5 hover:ring-1 hover:border-[#07DB76]  hover:ring-[#07DB76] rounded-md hover:text-[#EDEDED] bg-[#1F1F1F] border border-[#262626]`}
              >
                0.02
              </span>
              <span
                className={`px-3 py-0.5 hover:ring-1 hover:border-[#07DB76]  hover:ring-[#07DB76] rounded-md hover:text-[#EDEDED] bg-[#1F1F1F] border border-[#262626]`}
              >
                0.03
              </span>
              <span
                className={`px-3 py-0.5 hover:ring-1 hover:border-[#07DB76]  hover:ring-[#07DB76] rounded-md hover:text-[#EDEDED] bg-[#1F1F1F] border border-[#262626]`}
              >
                0.04
              </span>
            </div>
            <Image
              src={"/asset/icon/edit.svg"}
              width={20}
              height={20}
              alt="currency logo"
            />
          </div>
          <div
            className={`flex justify-between items-center mx-1  bg-[#4FFFAB] my-1 py-1 px-2.5 font-semibold border-[#1F1F1F] rounded-md text-lg`}
          >
            <div className="flex gap-1.5 justify-center items-center">
              <Image
                src={"/asset/icon/charge.svg"}
                alt="Charge"
                width={15}
                height={15}
              />
              <span>Buy TRENCHAI</span>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <span>7.0</span>
              <Image
                src={"/asset/icon/solana.svg"}
                alt="Charge"
                width={17}
                height={17}
              />
            </div>
          </div>
          <div className="flex justify-between items-center text-[#747474] mt-2 ">
            <div className="flex justify-center items-center gap-1.5  my-0.5 px-2 divide-x-1 divide-[#292929] mt-1.5">
              <span className="flex justify-center items-center gap-0.5 px-1.5">
                <Image
                  src={"/asset/icon/falling_man.svg"}
                  alt="Charge"
                  width={17}
                  height={17}
                  className=" justify-items-center"
                />
                <span>30%</span>
              </span>
              <span className="flex justify-center items-center gap-0.5 px-0.5">
                <Image
                  src={"/asset/icon/gas.svg"}
                  alt="Charge"
                  width={17}
                  height={17}
                  className=" justify-items-center"
                />
                <span>0.01</span>
              </span>

              <span className="flex justify-center items-center gap-0.5 px-0.5">
                <Image
                  src={"/asset/icon/tax.svg"}
                  alt="Charge"
                  width={15}
                  height={15}
                  className=" justify-items-center"
                />
                <span>0.01</span>
              </span>
              <span className="flex justify-center items-center gap-1 px-0.5">
                <Image
                  src={"/asset/icon/robot.svg"}
                  alt="Charge"
                  width={15}
                  height={15}
                  className=" justify-items-center"
                />
                <span>ON</span>
              </span>
            </div>
            <div className="bg-[#1F1F1F]  px-2.5 rounded-md ">P1</div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default Order;
