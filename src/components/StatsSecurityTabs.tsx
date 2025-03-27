"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import Image from "next/image";

const statsData = {
  TXNS: "6",
  Volume: "$534.73",
  Makers: "2",
  Buys: 6,
  Sells: 4,
  "Buy Vol": "$3.745",
  "Sell Vol": "$533.44",
  Buyers: 5,
  Sellers: 1,
};

const updateTabs = [
  { id: 0, time: "5M", change: "+0%", sentiment: "positive" },
  { id: 1, time: "1H", change: "+0%", sentiment: "neutral" },
  { id: 2, time: "6H", change: "+0%", sentiment: "neutral" },
  { id: 3, time: "24H", change: "-0.2%", sentiment: "negative" },
];

const StatsSecurityTabs = () => {
  return (
    <div className="max-w-md mx-1 bg-[#171717] text-white rounded-lg p-4  shadow-lg">
      <Tabs defaultValue="stats">
        {/* Parent Tabs */}
        <TabsList className="w-full bg-[#171717]">
          <TabsTrigger
            value="stats"
            className="data-[state=active]:text-[#4FFFAB] font-medium flex justify-center items-center gap-2.5 data-[state=active]:bg-[#1F1F1F]"
          >
            <Image
              src={"/asset/icon/tawar.svg"}
              alt="Network"
              height={20}
              width={20}
            />
            <span>Stats</span>
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:text-[#4FFFAB] font-medium flex justify-center items-center gap-2.5 data-[state=active]:bg-[#1F1F1F]"
          >
            <Image
              src={"/asset/icon/security.svg"}
              alt="Network"
              height={17}
              width={17}
              className=" justify-center"
            />
            <span>Security</span>
            <span className="w-2 h-2 bg-red-500 filter drop-shadow-[0px_0px_3px_#E33134] rounded-full"></span>
          </TabsTrigger>
        </TabsList>

        {/* Stats Tab Content */}
        <TabsContent value="stats">
          <div className="mt-4  ">
            {/* Child Tabs */}
            <div className="  flex justify-between gap-1 text-gray-400 px-3.5  -m-0.5">
              {updateTabs.map((tab) => (
                <div
                  key={tab.id}
                  className="group flex flex-col justify-center items-center px-3.5 py-1.5 rounded-t-md hover:bg-[#1C1C1C]"
                >
                  <span className="text-[#ACACAC] font-medium group-hover:text-[#EDEDED]">
                    {tab.time}
                  </span>
                  <span
                    className={`text-[#212921] font-bold ${
                      tab.sentiment == "neutral"
                        ? " group-hover:text-[#4FFFAB]"
                        : tab.sentiment == "positive"
                          ? "group-hover:text-[#4FFFAB]"
                          : "group-hover:text-[#5F1516]"
                    }`}
                  >
                    {tab.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Data */}
            {/* Stats grid */}
            <div className="grid grid-cols-[1fr_1.3fr] gap-3 w-full rounded-md px-3 py-2.5  bg-[#1C1C1C]  divide-x divide-[#EDEDED]">
              {/* Left column */}
              <div className="space-y-3">
                <StatBlock label="TXNS" value={statsData.TXNS} />
                <StatBlock label="VOLUME" value={statsData.Volume} />
                <StatBlock label="MAKERS" value={statsData.Makers} />
              </div>

              {/* Right column */}
              <div className="space-y-3.5">
                <div className="flex justify-between mb-1">
                  <span className="text-[#747474]">BUYS</span>
                  <span className="text-[#747474]">SELLS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white text-lg font-bold">
                    {statsData.Buys}
                  </span>
                  <span className="text-white text-lg font-bold">
                    {statsData.Sells}
                  </span>
                </div>
                <ProgressBar greenValue={60} redValue={40} />

                <div className="flex justify-between mb-1">
                  <span className="text-[#747474]">BUY VOL</span>
                  <span className="text-[#747474]">SELL VOL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white text-lg font-bold">
                    {statsData["Buy Vol"]}
                  </span>
                  <span className="text-white text-lg font-bold">
                    {statsData["Sell Vol"]}
                  </span>
                </div>
                <ProgressBar greenValue={85} redValue={15} />

                <div className="flex justify-between mb-1">
                  <span className="text-[#747474]">BUYERS</span>
                  <span className="text-[#747474]">SELLERS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white text-lg font-bold">
                    {statsData.Buyers}
                  </span>
                  <span className="text-white text-lg font-bold">
                    {statsData.Sellers}
                  </span>
                </div>
                <ProgressBar greenValue={85} redValue={15} />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Security Tab Content */}
        <TabsContent value="security">
          <div className="mt-4 text-gray-400 text-sm text-center">
            Security Data will be shown here.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Reusable StatBar Component
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StatBar = ({
  label,
  leftValue,
  rightLabel,
  rightValue,
  isCurrency = false,
}: {
  label: string;
  leftValue: number | string;
  rightLabel: string;
  rightValue: number | string;
  isCurrency?: boolean;
}) => {
  const leftPercentage = isCurrency
    ? (parseFloat(String(leftValue).replace("$", "")) /
        (parseFloat(String(leftValue).replace("$", "")) +
          parseFloat(String(rightValue).replace("$", "")))) *
      100
    : (Number(leftValue) / (Number(leftValue) + Number(rightValue))) * 100;

  return (
    <div>
      <p className="flex justify-between">
        <span>
          {label}: {leftValue}
        </span>
        <span>
          {rightLabel}: {rightValue}
        </span>
      </p>
      <motion.div className="h-1 bg-gray-600 relative w-full">
        <motion.div
          className="absolute left-0 bg-green-400 h-1"
          style={{ width: `${leftPercentage}%` }}
        />
        <motion.div
          className="absolute right-0 bg-red-400 h-1"
          style={{ width: `${100 - leftPercentage}%` }}
        />
      </motion.div>
    </div>
  );
};

export default StatsSecurityTabs;

// Stat block component
function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[#747474] mb-1">{label}</div>
      <div className="text-white font-bold text-lg">{value}</div>
    </div>
  );
}

// Progress bar component
function ProgressBar({
  greenValue,
  redValue,
}: {
  greenValue: number;
  redValue: number;
}) {
  return (
    <div className="h-1 w-full flex">
      <div
        className="bg-[#4fffab] h-full rounded-l-full"
        style={{ width: `${greenValue}%` }}
      />
      <div
        className="bg-[#e33134] h-full rounded-r-full"
        style={{ width: `${redValue}%` }}
      />
    </div>
  );
}
