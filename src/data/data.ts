export const header_menu = [
  { id: 0, name: "Explore", link: "/" },
  { id: 1, name: "new pairs", link: "/" },
  { id: 2, name: "Pump Vision", link: "/" },
  { id: 3, name: "Portfolio", link: "/" },
  { id: 4, name: "leaderboard", link: "/" },
];

export const userWalletConverter = [
  {
    id: 0,
    currency: {
      chainId: "1",
      currency_sym: "sol",
      amount: "1",
      logo: "/asset/icon/solana_color.svg",
    },
  },

  {
    id: 2,
    currency: {
      chainId: "2",
      currency_sym: "Eth",
      amount: "22",
      logo: "/asset/icon/eth.svg",
    },
  },

  {
    id: 3,
    currency: {
      chainId: "3 ",
      currency_sym: "sol",
      amount: "556",
      logo: "/asset/icon/cryptocurrency-icon.svg",
    },
  },
];

export const userIdData = { id: 0, username: "@pratyakshm" };

export const currency_basic_details = [
  { id: 1, title: "Price USD", value: "1.2", cur_sym: "$" },
  { id: 2, title: "Mkt Cap", value: "44M", cur_sym: "$" },
  { id: 3, title: "Liquidity", value: "11.4K", cur_sym: "$" },
  { id: 4, title: "Supply", value: "2.5B", cur_sym: "" },
];

export const accountBalance = [
  { id: 1, value: "w1", wallet: "W1", balance: "100" },
  { id: 2, value: "w2", wallet: "W2", balance: "200" },
];
/*
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
*/

/*
<div className="flex gap-1.5">
                    {userWalletConverter.length > 0 &&
                      userWalletConverter.map((value) => (
                        <div
                          key={value.id}
                          className="flex items-center gap-1" // Ensure flex row and vertical alignment
                        >
                          <Image
                            src={value.currency?.logo || ""}
                            className="bg-transparent"
                            width={13} // Slightly increased for visibility
                            height={13}
                            alt={value.currency?.currency_sym || ""}
                          />
                          <span className="text-base">
                            {value.currency?.amount}
                          </span>
                        </div>
                      ))}
                  </div>
*/
