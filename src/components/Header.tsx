import Image from "next/image";
import React from "react";
import { header_menu, userIdData, userWalletConverter } from "@/data/data";
import Link from "next/link";

function Header() {
    return (
        <div className="text-[#acacac] py-2 px-5 grid grid-rows-1 grid-cols-[1.4fr_1fr_1fr] justify-between justify-items-center align-middle items-center w-full">
            <div className="justify-self-start flex justify-center items-center gap-8">
                <Image
                    src={"/asset/icon/logo_1.svg"}
                    width={60}
                    height={60}
                    alt="Logo"
                />
                <ul className="flex no-underline gap-5 capitalize">
                    {header_menu.length > 0 &&
                        header_menu.map((value) => (
                            <li key={value.id}>
                                <Link href={value.link}>{value.name}</Link>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="max-w-md w-5/6 mx-auto justify-self-start ">
                <div className="flex p-2 bg-[#121212] rounded-xl justify-center align-center gap-1.5 border border-[#1F1F1F] hover:ring-1">
                    <Image
                        src={"/asset/icon/search_bar.svg"}
                        alt="Search Bar"
                        width={17}
                        height={17}
                        className="flex-none"
                    />
                    <input
                        type="text"
                        name="search"
                        id=""
                        placeholder="Search"
                        className="text-l grow outline-0 bg-transparent placeholder:"
                    />
                    <div className="border border-[#868686] py-[1px] px-1 text-center rounded-md opacity-60 flex-none">
                        Ctrl + K
                    </div>
                </div>
            </div>
            <div className="mx-auto px-1.5 py-1 flex gap-2 justify-center items-center text-[#C7C7C7]">
                <div className="flex px-2.5 py-1.5 rounded-sm gap-1.5 flex-nowrap justify-center items-center mx-auto bg-[#121212] border border-[#1F1F1F]">
                    <Image
                        src={"/asset/icon/wallet.svg"}
                        className="bg-transparent"
                        width={20}
                        height={20}
                        alt="Currency Converter"
                    />
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
                                    <span className="text-base">{value.currency?.amount}</span>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex px-2.5 py-1.5 rounded-sm gap-1.5 flex-nowrap justify-center items-center mx-auto bg-[#121212] border border-[#1F1F1F] my-auto">
                    <Image
                        src={"/asset/icon/sendme.svg"}
                        className="bg-transparent"
                        width={20}
                        height={20}
                        alt="Currency Converter"
                    />
                    <span className="text-base ">{userIdData.username}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
