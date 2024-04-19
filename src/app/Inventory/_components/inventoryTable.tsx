import React from "react";

export default function InventoryTable() {
  return (
    <>
      <div className="flex-grow overflow-auto bg-[orange] px-[30px]">
        <table className="table-auto w-full max-[1024px]:w-[1240px] max-[1024px] text-left select-none ">
          <thead>
            <tr className="bg-[#F9FAFB] text-[#5F6980] font-light text-[14px]">
              <th className="pl-6 font-normal py-4 w-[19%]">
                <div className="border-[2.25px] border-[#C5C6CC] rounded-md overflow-clip w-5 h-5 flex justify-center items-center relative">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="absolute h-5 w-5 accent-[#ffffff]"
                  />
                </div>
              </th>
              <th className="font-normal w-[13%]"></th>
              <th className="font-normal w-[13%]">Item Name</th>
              <th className="font-normal w-[15%]">Category</th>
              <th className="font-normal w-[15%]">Platform</th>
              <th className="font-normal w-[15%]">Stock</th>
              <th className="font-normal w-[14%]">Price</th>
              <th className="font-normal w-[14%]">Price</th>
              <th className="font-normal w-[14%]">Last Sold</th>
              <th className="font-normal w-[14%]">Status</th>
              <th className="pr-6 font-normal w-[14%]">Action</th>
            </tr>
          </thead>
          {/* <tbody>
            {installedApps.data
              .filter(
                (item: any, index: number) =>
                  index >= (installedApps.page - 1) * installedApps.size &&
                  index < installedApps.page * installedApps.size
              )
              .map((installedApp: any) => (
                <tr key={installedApp.name} className="hover:bg-[#F9FAFB]">
                  <td className="pl-6 py-4 ">
                    <div className="w-max flex flex-row items-center gap-3">
                      <div className="w-[44px] h-[44px] flex justify-center items-center rounded-[9.43px] shadow-custom">
                        <img
                          src={installedApp.iconSrc}
                          className="w-[25.78px] h-[25.78px]"
                        />
                      </div>
                      <div className="w-max text-[#282828] text-[14] font-semibold">
                        {installedApp.name}
                      </div>
                    </div>
                  </td>
                  <td className="text-[14px] font-normal text-[#5F6980]">
                    {installedApp.amount}
                  </td>
                  <td>
                    <div
                      className={`w-max px-[10px] py-[2px] rounded-full text-[12px] font-semibold ${
                        installedApp.status ||
                        installedApp.status == "Cancelled"
                          ? installedApp.status == "Active"
                            ? "bg-[#DCFFF5] text-[#20C997]"
                            : installedApp.status == "Pending"
                            ? "bg-[#FFEAD8] text-[#FD7E14]"
                            : "bg-[#F2F4F7] text-[#5F6980]"
                          : "bg-[#F2F4F7] text-[#5F6980]"
                      }`}
                    >
                      {installedApp.status}
                    </div>
                  </td>
                  <td className="text-[14px] font-normal text-[#5F6980]">
                    {installedApp.userID}
                  </td>
                  <td className="text-[14px] font-normal text-[#5F6980]">
                    {installedApp.joinedOn}
                  </td>
                  <td className="text-[14px] font-normal text-[#5F6980] pr-6">
                    {installedApp.group}
                  </td>
                </tr>
              ))}
          </tbody> */}
        </table>
      </div>

      <div className="bg-[yellow] w-full px-[30px] h-[67px] flex flex-row border-t items-center border-[#E5E7EB]"></div>
    </>
  );
}

const dummyData = [
  {
    id: 1,
    itemName: "Item1",
    category: "Category1",
    platform: "Platform1",
    stock: 10,
    price: 15.23,
    lastSold: "$20.00",
    date: "2022-01-01",
    status: "Active",
  },
  {
    id: 2,
    itemName: "Item2",
    category: "Category2",
    platform: "Platform2",
    stock: 15,
    price: 23.45,
    lastSold: "$25.00",
    date: "2022-02-01",
    status: "Inactive",
  },
  {
    id: 3,
    itemName: "Item3",
    category: "Category3",
    platform: "Platform3",
    stock: 20,
    price: 32.67,
    lastSold: "$30.00",
    date: "2022-03-01",
    status: "Active",
  },
  {
    id: 4,
    itemName: "Item4",
    category: "Category4",
    platform: "Platform4",
    stock: 5,
    price: 40.89,
    lastSold: "$35.00",
    date: "2022-04-01",
    status: "Inactive",
  },
  {
    id: 5,
    itemName: "Item5",
    category: "Category5",
    platform: "Platform5",
    stock: 30,
    price: 55.12,
    lastSold: "$40.00",
    date: "2022-05-01",
    status: "Active",
  },
  {
    id: 6,
    itemName: "Item6",
    category: "Category6",
    platform: "Platform6",
    stock: 25,
    price: 65.34,
    lastSold: "$45.00",
    date: "2022-06-01",
    status: "Inactive",
  },
  {
    id: 7,
    itemName: "Item7",
    category: "Category7",
    platform: "Platform7",
    stock: 8,
    price: 73.56,
    lastSold: "$50.00",
    date: "2022-07-01",
    status: "Active",
  },
  {
    id: 8,
    itemName: "Item8",
    category: "Category8",
    platform: "Platform8",
    stock: 12,
    price: 85.78,
    lastSold: "$55.00",
    date: "2022-08-01",
    status: "Inactive",
  },
  {
    id: 9,
    itemName: "Item9",
    category: "Category9",
    platform: "Platform9",
    stock: 18,
    price: 91.01,
    lastSold: "$60.00",
    date: "2022-09-01",
    status: "Active",
  },
  {
    id: 10,
    itemName: "Item10",
    category: "Category10",
    platform: "Platform10",
    stock: 22,
    price: 104.23,
    lastSold: "$65.00",
    date: "2022-10-01",
    status: "Inactive",
  },
  {
    id: 11,
    itemName: "Item11",
    category: "Category11",
    platform: "Platform11",
    stock: 7,
    price: 112.45,
    lastSold: "$70.00",
    date: "2022-11-01",
    status: "Active",
  },
  {
    id: 12,
    itemName: "Item12",
    category: "Category12",
    platform: "Platform12",
    stock: 11,
    price: 120.67,
    lastSold: "$75.00",
    date: "2022-12-01",
    status: "Inactive",
  },
  {
    id: 13,
    itemName: "Item13",
    category: "Category13",
    platform: "Platform13",
    stock: 28,
    price: 135.89,
    lastSold: "$80.00",
    date: "2022-13-01",
    status: "Active",
  },
  {
    id: 14,
    itemName: "Item14",
    category: "Category14",
    platform: "Platform14",
    stock: 17,
    price: 143.12,
    lastSold: "$85.00",
    date: "2022-14-01",
    status: "Inactive",
  },
  {
    id: 15,
    itemName: "Item15",
    category: "Category15",
    platform: "Platform15",
    stock: 33,
    price: 155.34,
    lastSold: "$90.00",
    date: "2022-15-01",
    status: "Active",
  },
  {
    id: 16,
    itemName: "Item16",
    category: "Category16",
    platform: "Platform16",
    stock: 27,
    price: 160.56,
    lastSold: "$95.00",
    date: "2022-16-01",
    status: "Inactive",
  },
  {
    id: 17,
    itemName: "Item17",
    category: "Category17",
    platform: "Platform17",
    stock: 9,
    price: 175.78,
    lastSold: "$100.00",
    date: "2022-17-01",
    status: "Active",
  },
  {
    id: 18,
    itemName: "Item18",
    category: "Category18",
    platform: "Platform18",
    stock: 14,
    price: 180.01,
    lastSold: "$105.00",
    date: "2022-18-01",
    status: "Inactive",
  },
  {
    id: 19,
    itemName: "Item19",
    category: "Category19",
    platform: "Platform19",
    stock: 21,
    price: 195.23,
    lastSold: "$110.00",
    date: "2022-19-01",
    status: "Active",
  },
  {
    id: 20,
    itemName: "Item20",
    category: "Category20",
    platform: "Platform20",
    stock: 24,
    price: 200.45,
    lastSold: "$115.00",
    date: "2022-20-01",
    status: "Inactive",
  },
  {
    id: 21,
    itemName: "Item21",
    category: "Category21",
    platform: "Platform21",
    stock: 6,
    price: 215.67,
    lastSold: "$120.00",
    date: "2022-21-01",
    status: "Active",
  },
  {
    id: 22,
    itemName: "Item22",
    category: "Category22",
    platform: "Platform22",
    stock: 19,
    price: 220.89,
    lastSold: "$125.00",
    date: "2022-22-01",
    status: "Inactive",
  },
  {
    id: 23,
    itemName: "Item23",
    category: "Category23",
    platform: "Platform23",
    stock: 26,
    price: 235.12,
    lastSold: "$130.00",
    date: "2022-23-01",
    status: "Active",
  },
  {
    id: 24,
    itemName: "Item24",
    category: "Category24",
    platform: "Platform24",
    stock: 16,
    price: 240.34,
    lastSold: "$135.00",
    date: "2022-24-01",
    status: "Inactive",
  },
  {
    id: 25,
    itemName: "Item25",
    category: "Category25",
    platform: "Platform25",
    stock: 32,
    price: 255.56,
    lastSold: "$140.00",
    date: "2022-25-01",
    status: "Active",
  },
  {
    id: 26,
    itemName: "Item26",
    category: "Category26",
    platform: "Platform26",
    stock: 29,
    price: 260.78,
    lastSold: "$145.00",
    date: "2022-26-01",
    status: "Inactive",
  },
  {
    id: 27,
    itemName: "Item27",
    category: "Category27",
    platform: "Platform27",
    stock: 4,
    price: 275.01,
    lastSold: "$150.00",
    date: "2022-27-01",
    status: "Active",
  },
  {
    id: 28,
    itemName: "Item28",
    category: "Category28",
    platform: "Platform28",
    stock: 13,
    price: 280.23,
    lastSold: "$155.00",
    date: "2022-28-01",
    status: "Inactive",
  },
  {
    id: 29,
    itemName: "Item29",
    category: "Category29",
    platform: "Platform29",
    stock: 23,
    price: 295.45,
    lastSold: "$160.00",
    date: "2022-29-01",
    status: "Active",
  },
  {
    id: 30,
    itemName: "Item30",
    category: "Category30",
    platform: "Platform30",
    stock: 18,
    price: 300.67,
    lastSold: "$165.00",
    date: "2022-30-01",
    status: "Inactive",
  },
];
