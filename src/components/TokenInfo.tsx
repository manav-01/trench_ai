"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const tokenInfoData = [
  { label: "Snipers", percentage: "0%", count: 3 },
  { label: "Insiders", percentage: "0%", count: 3 },
  { label: "Top 10 Holders", percentage: "0%", count: 3 },
  { label: "Bundlers", percentage: "0%", count: 3 },
  { label: "Dev Holding", percentage: "0%", count: 3 },
];

const TokenInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-transparent text-[#747474] rounded-md  mx-5 py-1">
      <div
        className="flex justify-between items-center p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium">Token Info</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="bg-[#171717] border-[#1F1F1F] border rounded-md">
          {tokenInfoData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border-b border-[#1C1C1C] last:border-none"
            >
              <span className="text-sm">{item.label}</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 filter drop-shadow-[0px_0px_3px_#E33134] rounded-full"></span>
                <span className="text-xs">
                  {item.percentage} ({item.count})
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenInfo;
