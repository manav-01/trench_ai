"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { accountBalance } from "@/data/data";

function WalletSelect() {
  const [selectedWallet, setSelectedWallet] = useState("W1");

  // Find the balance based on the selected wallet
  const selectedBalance =
    accountBalance.find((acc) => acc.wallet === selectedWallet)?.balance || "0";

  return (
    <div className="flex gap-2 text-white items-center bg-[#1F1F1F] rounded-md px-1.5">
      {/* Select Component */}
      <Select
        defaultValue="W1"
        onValueChange={(value) => setSelectedWallet(value)}
      >
        <SelectTrigger className="outline-0 ring-0 border-0 focus-visible:ring-0 px-1 flex items-center gap-1 my-0 py-0.5">
          <Image
            src="/asset/icon/wallet.svg"
            className="bg-transparent"
            width={15}
            height={15}
            alt="wallet-icon"
          />
          <SelectValue placeholder="Select Wallet" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Wallet</SelectLabel>
            {accountBalance.map((acc) => (
              <SelectItem key={acc.id} value={acc.wallet}>
                {acc.wallet}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Display Balance */}
      <div className="flex gap-1">
        <Image
          src="/asset/icon/solana_color.svg"
          className="bg-transparent"
          width={15}
          height={15}
          alt="wallet-icon"
        />
        <span className=""> {selectedBalance}</span>
      </div>
    </div>
  );
}

export default WalletSelect;
