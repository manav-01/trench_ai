"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = ["Stats", "Security"];
const statTabs = ["5M", "1H", "6H", "24H"];
const tradeTabs = ["Trades", "Top Traders", "Holders", "Orders", "Dev Tokens"];

const statsData = {
  txns: 6,
  volume: "$534.73",
  makers: 2,
  buys: 6,
  sells: 4,
  buyVol: "$3.745",
  sellVol: "$533.44",
  buyers: 5,
  sellers: 1,
};

const tradesData = [
  {
    type: "SELL",
    amount: "751K",
    sol: "0.02441",
    usd: "$3.77",
    mktCap: "$44M",
    age: "7d ago",
    maker: "Ch6..M9X",
  },
  {
    type: "BUY",
    amount: "751K",
    sol: "0.02441",
    usd: "$3.77",
    mktCap: "$44M",
    age: "1m ago",
    maker: "Ch6..M9X",
  },
  {
    type: "SELL",
    amount: "751K",
    sol: "0.02441",
    usd: "$3.77",
    mktCap: "$44M",
    age: "7d ago",
    maker: "Ch6..M9X",
  },
  {
    type: "BUY",
    amount: "751K",
    sol: "0.02441",
    usd: "$3.77",
    mktCap: "$44M",
    age: "1m ago",
    maker: "Ch6..M9X",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Stats");
  const [activeStatTab, setActiveStatTab] = useState("6H");
  const [activeTradeTab, setActiveTradeTab] = useState("Trades");

  return (
    <div className="bg-black text-white p-4 w-full">
      <div className="flex space-x-4 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "px-4 py-2",
              activeTab === tab
                ? "text-green-400 border-b-2 border-green-400"
                : "text-gray-500"
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Stats" && (
        <div>
          <div className="flex space-x-4 py-4">
            {statTabs.map((tab) => (
              <button
                key={tab}
                className={cn(
                  "px-3 py-1",
                  activeStatTab === tab
                    ? "text-green-400 border-b-2 border-green-400"
                    : "text-gray-500"
                )}
                onClick={() => setActiveStatTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 p-4">
            <div>
              <p>TXNS: {statsData.txns}</p>
              <p>Volume: {statsData.volume}</p>
              <p>Makers: {statsData.makers}</p>
            </div>
            <div>
              <p>
                Buys: {statsData.buys} | Sells: {statsData.sells}
              </p>
              <p>
                Buy Vol: {statsData.buyVol} | Sell Vol: {statsData.sellVol}
              </p>
              <p>
                Buyers: {statsData.buyers} | Sellers: {statsData.sellers}
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Security" && (
        <div className="text-gray-400 p-4">Security details go here.</div>
      )}

      <div className="mt-6">
        <div className="flex space-x-4 border-b pb-2">
          {tradeTabs.map((tab) => (
            <button
              key={tab}
              className={cn(
                "px-3 py-1",
                activeTradeTab === tab
                  ? "text-green-400 border-b-2 border-green-400"
                  : "text-gray-500"
              )}
              onClick={() => setActiveTradeTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTradeTab === "Trades" && (
          <div className="overflow-auto mt-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th>Amount</th>
                  <th>Total SOL</th>
                  <th>Total USD</th>
                  <th>MktCap</th>
                  <th>Age</th>
                  <th>Makers</th>
                </tr>
              </thead>
              <tbody>
                {tradesData.map((trade, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td
                      className={
                        trade.type === "SELL"
                          ? "text-red-400"
                          : "text-green-400"
                      }
                    >
                      {trade.type}
                    </td>
                    <td>{trade.amount}</td>
                    <td
                      className={
                        trade.type === "SELL"
                          ? "text-red-400"
                          : "text-green-400"
                      }
                    >
                      {trade.sol}
                    </td>
                    <td
                      className={
                        trade.type === "SELL"
                          ? "text-red-400"
                          : "text-green-400"
                      }
                    >
                      {trade.usd}
                    </td>
                    <td
                      className={
                        trade.type === "SELL"
                          ? "text-red-400"
                          : "text-green-400"
                      }
                    >
                      {trade.mktCap}
                    </td>
                    <td>{trade.age}</td>
                    <td>{trade.maker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
