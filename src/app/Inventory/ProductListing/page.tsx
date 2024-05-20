"use client";

import { useState } from "react";
import SideBar from "../_components/sideBar";
import { MdChevronRight } from "react-icons/md";
import { BiRedo, BiUndo } from "react-icons/bi";
import { FiBold } from "react-icons/fi";

import {
  PiLink,
  PiListBullets,
  PiListNumbers,
  PiTextAlignCenter,
  PiTextAlignJustify,
  PiTextAlignLeft,
  PiTextAlignRight,
  PiTextB,
  PiTextboxBold,
  PiTextItalic,
  PiTextUnderline,
} from "react-icons/pi";

import TextInput from "../_components/textInput";
import DropDown from "../_components/dropdown";

export default function page() {
  return (
    <div className="bg-[#F5F5F5] h-[100dvh] w-screen flex flex-row items-start">
      <SideBar />
      <div className="flex-grow overflow-auto h-full flex flex-col">
        <Header />
        <Section />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="p-6 pl-8 w-full h-max shrink-0 flex flex-row bg-[white] select-none">
      <div className="flex-grow flex flex-col">
        <div className="h-8 flex flex-row items-center gap-2">
          <p className="text-sm text-[#463F4B]">Main Menu</p>
          <MdChevronRight className="text-[#463F4B]" />
          <p className="text-sm text-[#463F4B]">Module</p>
          <MdChevronRight className="text-[#463F4B]" />
          <p className="text-base text-[#161317] font-medium">Finance</p>
        </div>
        {/* #141522 600 24 52 */}
        <div className="h-[52px] flex flex-row items-center gap-2">
          <p className="text-2xl text-[#141522] font-semibold">
            Create a new listing
          </p>
        </div>
      </div>
      <button
        onClick={() => {}}
        className="flex flex-row h-[50px] items-center select-none  group rounded-full"
      >
        <img
          src="/Hprofile.svg"
          alt=""
          className="select-none pointer-events-none border border-transparent rounded-full group-hover:border-[#9ba1d1]"
        />
      </button>
    </div>
  );
}

function Section() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  return (
    <div className="flex-grow px-4 py-6 overflow-auto flex flex-col w-full gap-6">
      <div className="flex flex-row items-center gap-2 bg-[white] p-5 rounded-[10px]">
        <p className="text-2xl text-[#141522] font-semibold leading-[29px]">
          E-commerce
        </p>
      </div>

      <Accordian
        label="General Information"
        subLabel="Who is this shipping to?"
      >
        <div className="flex flex-row gap-6 shrink-0 select-none">
          <div className="flex-grow  p-5 flex flex-col gap-6">
            <div className="w-full flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <TextInput
                  label="Listing Title"
                  value={text}
                  setValue={setText}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1">
                <DropDown
                  selected={category}
                  setSelected={setCategory}
                  label="Category"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="max-w-[452px] h-12"
                />
              </div>
            </div>
            <div className="w-full max-w-max flex flex-row justify-start gap-[22px] px-[10px] py-2 rounded-lg border border-[#F5F5F7] box-border h-[36px] items-center">
              <button className="rounded hover:bg-[#F2F4F7]">
                <BiUndo className="text-[black] text-[20px]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <BiRedo className="text-[black] text-[20px]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextAlignJustify className="text-[black] text-[20px]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextAlignLeft className="text-[black] text-[20px]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextAlignCenter className="text-[black] text-[20px]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextAlignRight className="text-[black] text-[20px]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextB className="text-[black] text-[20px]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextItalic className="text-[black] text-[20px]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextUnderline className="text-[black] text-[20px]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiListBullets className="text-[black] text-[20px]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiListNumbers className="text-[black] text-[20px]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiLink className="text-[black] text-[20px]" />
              </button>
            </div>
            <div className="w-full flex flex-row items-start justify-between gap-[32px]">
              <div className="flex-1">
                <TextInput
                  textArea={true}
                  label="Description"
                  value={text}
                  setValue={setText}
                  classnameTextInput="w-full"
                />
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-between gap-[32px]">
              <div className="flex-1">date picker goes here</div>
              <div className="flex-1 flex flex-col justify-start items-start gap-4">
                <p className="text-sm font-medium leading-4">Listing Status</p>
                <span className="flex flex-row items-center justify-start gap-3 p-4">
                  <div className="w-2 h-2 rounded-full bg-[#659711]"></div>
                  <p className="text-sm leading-5">Active</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[248px] gap-6 p-5">
            <span className="flex-grow overflow-auto flex flex-col w-full gap-4">
              <img
                src="../assets/productListingImage.png"
                alt=""
                className="flex-grow w-full object-cover rounded-lg"
              />
              <span className="flex flex-row items-center w-full gap-4">
                <img
                  src="../assets/productListingImage.png"
                  alt=""
                  className="h-[55px] object-cover flex-1 rounded-lg"
                />
                <img
                  src="../assets/productListingImage.png"
                  alt=""
                  className="h-[55px] object-cover flex-1 rounded-lg"
                />
                <img
                  src="../assets/productListingImage.png"
                  alt=""
                  className="h-[55px] object-cover flex-1 rounded-lg"
                />
              </span>
            </span>

            <button className="bg-[#3D53DB] hover:bg-[#2236b9] w-full h-8 rounded-lg px-4 py-2 box-border leading-4 text-white">
              Upload more
            </button>
          </div>
        </div>
      </Accordian>

      <Accordian label="Product Details" subLabel="Physical & Digital products">
        <div className="flex flex-row gap-6 shrink-0 select-none">
          <div className="flex-grow  p-5 flex flex-col gap-6">
            <div className="w-full flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <DropDown
                  selected={category}
                  setSelected={setCategory}
                  label="Product Type"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>
              <div className="flex-1">
                <DropDown
                  selected={category}
                  setSelected={setCategory}
                  label="Inventory Management"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>{" "}
              <div className="flex-1">
                <TextInput
                  label="SKU"
                  value={text}
                  setValue={setText}
                  classnameTextInput="w-full"
                />
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <TextInput
                  label="Brand"
                  value={text}
                  setValue={setText}
                  classnameTextInput="w-full"
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Manufacturer"
                  value={text}
                  setValue={setText}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1">
                <DropDown
                  selected={category}
                  setSelected={setCategory}
                  label="Item Location"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </Accordian>

      <Accordian
        label="Pricing and sales"
        subLabel="Manage current accounts and integrate new accounts."
      >
        <div className="flex flex-row gap-6 shrink-0 select-none">
          <div className="flex-grow  p-5 flex flex-col gap-6">
            <div className="w-full flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <TextInput
                  label="Regular Price"
                  value={text}
                  setValue={setText}
                  classnameTextInput="w-full"
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Cost Price"
                  value={text}
                  setValue={setText}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1">
                <DropDown
                  selected={category}
                  setSelected={setCategory}
                  label="Currency"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <DropDown
                  selected={category}
                  setSelected={setCategory}
                  label="Tax Rates"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Sale Price"
                  value={text}
                  setValue={setText}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1">date picker goes here</div>
            </div>
            <div className="w-full flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <TextInput
                  label="Weight"
                  value={text}
                  setValue={setText}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Dimensions"
                  value={text}
                  setValue={setText}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1 shrink-0"></div>
            </div>
            <div className="w-full flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <DropDown
                  selected={category}
                  setSelected={setCategory}
                  label="Shipping Profiles"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </Accordian>

      <Accordian
        label="Integrations and visibility"
        subLabel="Manage current accounts and integrate new accounts."
        sideInteractions={
          <button className="border border-[#BAC8FF] hover:border-[#2b55ff] px-6 py-3 h-11 text-[#463F4B] text-[16px] leading-5 font-medium rounded-lg bg-[white]">
            Preview on website
          </button>
        }
      >
        <div className="flex flex-row gap-6 shrink-0 select-none">
          <div className="flex-grow  p-5 flex flex-col gap-6">
            <div className="w-full flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <DropDown
                  selected={category}
                  setSelected={setCategory}
                  label="Currency"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </Accordian>
    </div>
  );
}

function Accordian({
  children,
  label = "Label",
  subLabel = "subLabel",
  sideInteractions = <></>,
}: {
  children: React.ReactNode;
  label?: string;
  subLabel?: string;
  sideInteractions?: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center bg-[white] p-5 rounded-[10px]">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex flex-row items-center gap-3 justify-between bg-[#FAFAFA] p-5 rounded-[10px] w-full outline-none"
      >
        <div className="w-full flex flex-row items-center gap-3">
          <p className="text-2xl text-[#141522] font-semibold leading-[29px]">
            {label}{" "}
          </p>
          <p className="text-sm text-[#54577A] leading-[21px]">{subLabel} </p>
        </div>
        <MdChevronRight
          className={`text-[#141522] text-[24px] ani ${
            collapsed ? "" : "rotate-90"
          }`}
        />
      </button>
      <div
        className={`bg-[#FAFAFA] rounded-[10px] w-full outline-none ani ${
          collapsed
            ? "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
            : "max-h-fit mt-5 opacity-100 translate-y-0 overflow-visible"
        }`}
      >
        <div className="w-full p-5 flex flex-col gap-6">
          <span className="w-full flex flex-row justify-between">
            <p className="text-2xl text-[#141522] font-semibold leading-8">
              {label}{" "}
            </p>
            <span className="flex flex-row gap-2 items-center">
              {sideInteractions}
            </span>
          </span>

          <div className="w-full flex flex-col gap-6 rounded bg-[#ffffff]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
