"use client";

import { useState } from "react";
import SideBar from "../_components/sideBar";
import { MdChevronRight } from "react-icons/md";
import { BiRedo, BiUndo } from "react-icons/bi";
import { FiBold } from "react-icons/fi";
import CustomDatePicker from "../Calendar/CustomDatePicker";

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
import { create_inventory_service } from "@/services/inventoryService";
import { useRouter } from "next/navigation";
import DropDownCalendar, {
  DropDownDatePicker,
} from "@/app/components/dropdown/DropDownCalendar";

export default function page() {
  return (
    <div className="flex h-[100dvh] w-screen flex-row items-start bg-[#F5F5F5]">
      <SideBar />
      <div className="flex h-full flex-grow flex-col overflow-auto">
        <Header />
        <Section />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex h-max w-full shrink-0 select-none flex-row bg-[white] p-6 pl-8">
      <div className="flex flex-grow flex-col">
        <div className="flex h-8 flex-row items-center gap-2">
          <p className="text-sm text-[#463F4B]">Main Menu</p>
          <MdChevronRight className="text-[#463F4B]" />
          <p className="text-sm text-[#463F4B]">Module</p>
          <MdChevronRight className="text-[#463F4B]" />
          <p className="text-base font-medium text-[#161317]">Finance</p>
        </div>
        {/* #141522 600 24 52 */}
        <div className="flex h-[52px] flex-row items-center gap-2">
          <p className="text-2xl font-semibold text-[#141522]">
            Create a new listing
          </p>
        </div>
      </div>
      <button
        onClick={() => {}}
        className="group flex h-[50px] select-none flex-row  items-center rounded-full"
      >
        <img
          src="/Hprofile.svg"
          alt=""
          className="pointer-events-none select-none rounded-full border border-transparent group-hover:border-[#9ba1d1]"
        />
      </button>
    </div>
  );
}

function Section() {
  const router = useRouter();

  // const [collapsed, setCollapsed] = useState<boolean>(false);
  // const [text, setText] = useState<string>("");
  // const [text2, setText2] = useState<string>("");
  // const [text3, setText3] = useState<string>("");
  // const [text4, setText4] = useState<string>("");
  // const [category, setCategory] = useState<string>("");

  const [listingTitle, setListingTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [shipmentDate, setShipmentDate] = useState("");
  const [listingStatus, setListingStatus] = useState("");

  const [productType, setProductType] = useState("");
  const [inventoryManagement, setInventoryManagement] = useState("");
  const [sku, setSku] = useState("");
  const [brand, setBrand] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [itemLocation, setItemLocation] = useState("");

  const [regularPrice, setRegularPrice] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [taxRates, setTaxRates] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [saleDates, setSaleDates] = useState("");
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [shippingProfiles, setShippingProfiles] = useState("");
  const [platforms, setPlatforms] = useState("");

  async function create_inventory() {
    try {
      const res = await create_inventory_service({
        listingTitle: listingTitle,
        category: category,
        description: description,
        shipmentDate: shipmentDate,
        listingStatus: listingStatus,
        productType: productType,
        inventoryManagement: inventoryManagement,
        sku: sku,
        brand: brand,
        manufacturer: manufacturer,
        itemLocation: itemLocation,
        regularPrice: regularPrice,
        costPrice: costPrice,
        currency: currency,
        taxRates: taxRates,
        salePrice: salePrice,
        saleDates: saleDates,
        weight: weight,
        dimensions: dimensions,
        shippingProfiles: shippingProfiles,
        platforms: [platforms],
      });
      if ("id" in res) {
        router.push(`/Inventory/GridView`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex w-full flex-grow flex-col gap-6 overflow-auto px-4 py-6">
      <div className="flex flex-row items-center gap-2 rounded-[10px] bg-[white] p-5">
        <p className="text-2xl font-semibold leading-[29px] text-[#141522]">
          E-commerce
        </p>
      </div>
      <span className="w-max">
        {" "}
        <DropDownDatePicker label="Calendar" />
      </span>

      <Accordian
        label="General Information"
        subLabel="Who is this shipping to?"
      >
        <div className="flex shrink-0 select-none flex-row gap-6">
          <div className="flex  flex-grow flex-col gap-6 p-5">
            <div className="flex w-full flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <TextInput
                  label="Listing Title"
                  value={listingTitle}
                  setValue={setListingTitle}
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
            <div className="box-border flex h-[36px] w-full max-w-max flex-row items-center justify-start gap-[22px] rounded-lg border border-[#F5F5F7] px-[10px] py-2">
              <button className="rounded hover:bg-[#F2F4F7]">
                <BiUndo className="text-[20px] text-[black]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <BiRedo className="text-[20px] text-[black]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextAlignJustify className="text-[20px] text-[black]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextAlignLeft className="text-[20px] text-[black]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextAlignCenter className="text-[20px] text-[black]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextAlignRight className="text-[20px] text-[black]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextB className="text-[20px] text-[black]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextItalic className="text-[20px] text-[black]" />
              </button>{" "}
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiTextUnderline className="text-[20px] text-[black]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiListBullets className="text-[20px] text-[black]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiListNumbers className="text-[20px] text-[black]" />
              </button>
              <button className="rounded hover:bg-[#F2F4F7]">
                <PiLink className="text-[20px] text-[black]" />
              </button>
            </div>
            <div className="flex w-full flex-row items-start justify-between gap-[32px]">
              <div className="flex-1">
                <TextInput
                  textArea={true}
                  label="Description"
                  value={description}
                  setValue={setDescription}
                  classnameTextInput="w-full"
                />
              </div>
            </div>
            <div className="flex w-full flex-row items-start justify-between gap-[32px]">
              <div className="flex-1">
                <CustomDatePicker
                  selectedDate={shipmentDate}
                  setSelectedDate={setShipmentDate}
                />
              </div>
              <div className="flex flex-1 flex-col items-start justify-start gap-4">
                <p className="text-sm font-medium leading-4">Listing Status</p>
                <span className="flex flex-row items-center justify-start gap-3 p-4">
                  <div className="h-2 w-2 rounded-full bg-[#659711]"></div>
                  <p className="text-sm leading-5">Active</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[248px] flex-col gap-6 p-5">
            <span className="flex w-full flex-grow flex-col gap-4 overflow-auto">
              <img
                src="../assets/productListingImage.png"
                alt=""
                className="w-full flex-grow rounded-lg object-cover"
              />
              <span className="flex w-full flex-row items-center gap-4">
                <img
                  src="../assets/productListingImage.png"
                  alt=""
                  className="h-[55px] flex-1 rounded-lg object-cover"
                />
                <img
                  src="../assets/productListingImage.png"
                  alt=""
                  className="h-[55px] flex-1 rounded-lg object-cover"
                />
                <img
                  src="../assets/productListingImage.png"
                  alt=""
                  className="h-[55px] flex-1 rounded-lg object-cover"
                />
              </span>
            </span>

            <button className="box-border h-8 w-full rounded-lg bg-[#3D53DB] px-4 py-2 leading-4 text-white hover:bg-[#2236b9]">
              Upload more
            </button>
          </div>
        </div>
      </Accordian>

      <Accordian label="Product Details" subLabel="Physical & Digital products">
        <div className="flex shrink-0 select-none flex-row gap-6">
          <div className="flex  flex-grow flex-col gap-6 p-5">
            <div className="flex w-full flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <DropDown
                  selected={productType}
                  setSelected={setProductType}
                  label="Product Type"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>
              <div className="flex-1">
                <DropDown
                  selected={inventoryManagement}
                  setSelected={setInventoryManagement}
                  label="Inventory Management"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>{" "}
              <div className="flex-1">
                <TextInput
                  label="SKU"
                  value={sku}
                  setValue={setSku}
                  classnameTextInput="w-full"
                />
              </div>
            </div>
            <div className="flex w-full flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <TextInput
                  label="Brand"
                  value={brand}
                  setValue={setBrand}
                  classnameTextInput="w-full"
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Manufacturer"
                  value={manufacturer}
                  setValue={setManufacturer}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1">
                <DropDown
                  selected={itemLocation}
                  setSelected={setItemLocation}
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
        <div className="flex shrink-0 select-none flex-row gap-6">
          <div className="flex  flex-grow flex-col gap-6 p-5">
            <div className="flex w-full flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <TextInput
                  label="Regular Price"
                  value={regularPrice}
                  setValue={setRegularPrice}
                  classnameTextInput="w-full"
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Cost Price"
                  value={costPrice}
                  setValue={setCostPrice}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1">
                <DropDown
                  selected={currency}
                  setSelected={setCurrency}
                  label="Currency"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>
            </div>
            <div className="flex w-full flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <DropDown
                  selected={taxRates}
                  setSelected={setTaxRates}
                  label="Tax Rates"
                  options={["Category-1", "Category-2", "Category-3"]}
                  classname="w-full h-12"
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Sale Price"
                  value={salePrice}
                  setValue={setSalePrice}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1">
                <CustomDatePicker
                  selectedDate={saleDates}
                  setSelectedDate={setSaleDates}
                />
              </div>
            </div>
            <div className="flex w-full flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <TextInput
                  label="Weight"
                  value={weight}
                  setValue={setWeight}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Dimensions"
                  value={dimensions}
                  setValue={setDimensions}
                  classnameTextInput="max-w-[281px]"
                />
              </div>
              <div className="flex-1 shrink-0"></div>
            </div>
            <div className="flex w-full flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <DropDown
                  selected={shippingProfiles}
                  setSelected={setShippingProfiles}
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
          <button className="h-11 rounded-lg border border-[#BAC8FF] bg-[white] px-6 py-3 text-[16px] font-medium leading-5 text-[#463F4B] hover:border-[#2b55ff]">
            Preview on website
          </button>
        }
      >
        <div className="flex shrink-0 select-none flex-row gap-6">
          <div className="flex  flex-grow flex-col gap-6 p-5">
            <div className="flex w-full flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <DropDown
                  selected={platforms}
                  setSelected={setPlatforms}
                  label="Platforms"
                  options={["Platform-1", "Platform-2", "Platform-3"]}
                  classname="w-full h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </Accordian>
      <button
        onClick={() => {
          create_inventory();
        }}
      >
        Create Listing
      </button>
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
    <div className="flex flex-col items-center rounded-[10px] bg-[white] p-5">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex w-full flex-row items-center justify-between gap-3 rounded-[10px] bg-[#FAFAFA] p-5 outline-none"
      >
        <div className="flex w-full flex-row items-center gap-3">
          <p className="text-2xl font-semibold leading-[29px] text-[#141522]">
            {label}{" "}
          </p>
          <p className="text-sm leading-[21px] text-[#54577A]">{subLabel} </p>
        </div>
        <MdChevronRight
          className={`ani text-[24px] text-[#141522] ${
            collapsed ? "" : "rotate-90"
          }`}
        />
      </button>
      <div
        className={`ani w-full rounded-[10px] bg-[#FAFAFA] outline-none ${
          collapsed
            ? "max-h-0 -translate-y-2 overflow-hidden opacity-0"
            : "mt-5 max-h-fit translate-y-0 overflow-visible opacity-100"
        }`}
      >
        <div className="flex w-full flex-col gap-6 p-5">
          <span className="flex w-full flex-row justify-between">
            <p className="text-2xl font-semibold leading-8 text-[#141522]">
              {label}{" "}
            </p>
            <span className="flex flex-row items-center gap-2">
              {sideInteractions}
            </span>
          </span>

          <div className="flex w-full flex-col gap-6 rounded bg-[#ffffff]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
