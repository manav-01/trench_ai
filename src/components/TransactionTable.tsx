"use client";
import { ExternalLink, Filter, Funnel } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

// Define the transaction data type
interface Transaction {
  type: "BUY" | "SELL";
  amount: string;
  totalSol: number;
  totalUsd: number;
  mktcap: string;
  age: string;
  makerId: string;
}

// Create dummy data based on the reference
const transactions: Transaction[] = [
  {
    type: "SELL",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "7d ago",
    makerId: "Ch6...M9x",
  },
  {
    type: "BUY",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "1m ago",
    makerId: "Ch6...M9x",
  },
  {
    type: "SELL",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "7d ago",
    makerId: "Ch6...M9x",
  },
  {
    type: "BUY",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "1m ago",
    makerId: "Ch6...M9x",
  },
  {
    type: "SELL",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "7d ago",
    makerId: "Ch6...M9x",
  },
  {
    type: "BUY",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "1m ago",
    makerId: "Ch6...M9x",
  },
  {
    type: "SELL",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "7d ago",
    makerId: "Ch6...M9x",
  },
  {
    type: "BUY",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "1m ago",
    makerId: "Ch6...M9x",
  },
  {
    type: "SELL",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "7d ago",
    makerId: "Ch6...M9x",
  },
  {
    type: "BUY",
    amount: "751K",
    totalSol: 0.02441,
    totalUsd: 3.77,
    mktcap: "$44M",
    age: "1m ago",
    makerId: "Ch6...M9x",
  },
];

export default function TransactionTable() {
  return (
    <div className="w-full overflow-auto">
      <Table className="w-full border-collapse">
        <TableHeader className=" border-b border-[#151515]">
          <TableRow>
            <TableHead className="text-[#4A4A4A] font-medium py-3 px-4 text-left">
              <div className="flex items-center gap-1">
                AMOUNT <Funnel size={16} fill="#4A4A4A" />
              </div>
            </TableHead>
            <TableHead className="text-[#4A4A4A] font-medium py-3 px-4 text-left">
              <div className="flex items-center gap-1">
                TOTAL SOL <Funnel size={16} fill="#4A4A4A" />
              </div>
            </TableHead>
            <TableHead className="text-[#4A4A4A] font-medium py-3 px-4 text-left">
              <div className="flex items-center gap-1">
                TOTAL USD <Funnel size={16} fill="#4A4A4A" />
              </div>
            </TableHead>
            <TableHead className="text-[#4A4A4A] font-medium py-3 px-4 text-left">
              <div className="flex items-center gap-1">
                MKTCAP <Funnel size={16} fill="#4A4A4A" />
              </div>
            </TableHead>
            <TableHead className="text-[#4A4A4A] font-medium py-3 px-4 text-left">
              AGE
            </TableHead>
            <TableHead className="text-[#4A4A4A] font-medium py-3 px-4 text-left">
              <div className="flex items-center gap-1">
                MAKERS <Funnel size={16} fill="#4A4A4A" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} className="border-b border-[#4a4a4a]">
              <TableCell className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      transaction.type === "BUY"
                        ? "bg-[#1D1F1D] text-[#4fffab] border border-[#184E33]"
                        : "bg-[#2A0911] text-[#e33134] border border-[#5F1527]"
                    }`}
                  >
                    {transaction.type}
                  </span>
                  <span className="text-[#acacac]">{transaction.amount}</span>
                </div>
              </TableCell>
              <TableCell className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/asset/icon/solana_color.svg"}
                    alt={"sol"}
                    height={16}
                    width={16}
                  />
                  <span
                    className={
                      transaction.type === "BUY"
                        ? "text-[#4FFFAB] "
                        : "text-[#E33134]"
                    }
                  >
                    {transaction.totalSol.toFixed(5)}
                  </span>
                </div>
              </TableCell>
              <TableCell
                className={`py-3 px-4 ${transaction.type === "BUY" ? "text-[#4fffab]" : "text-[#e33134]"}`}
              >
                ${transaction.totalUsd.toFixed(2)}
              </TableCell>
              <TableCell
                className={`py-3 px-4 ${transaction.type === "BUY" ? "text-[#4fffab]" : "text-[#e33134]"}`}
              >
                {transaction.mktcap}
              </TableCell>
              <TableCell
                className={`py-3 px-4 ${transaction.type === "BUY" ? "text-[#4fffab]" : "text-[#e33134]"}`}
              >
                {transaction.age}
              </TableCell>
              <TableCell className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/asset/icon/alian.svg"}
                    alt={"Alian"}
                    height={18}
                    width={18}
                  />
                  <span className="text-[#acacac]">{transaction.makerId}</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="text-[#acacac] hover:text-[#ffffff]">
                          <ExternalLink size={16} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open Txn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="text-[#acacac] hover:text-[#ffffff]">
                          <Filter size={16} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Lorem ipsum</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
