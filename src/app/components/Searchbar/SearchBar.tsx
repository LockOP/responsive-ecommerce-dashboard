function SearchBar({
  search,
  setSearch,
  hidden = false,
}: {
  search: string;
  setSearch: any;
  hidden?: boolean | number;
}) {
  return (
    <div
      className={`rounded-[10px] h-11 w-full flex flex-row justify-center items-center bg-[#ffffff] relative select-none border border-[#C2C6E8] box-border ${
        hidden ? "hidden" : ""
      }`}
    >
      <img
        src="/searchSB.svg"
        alt=""
        className="absolute left-4 select-none pointer-events-none"
      />
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        className="w-full pl-14 py-4 pr-4 h-full p-4 bg-transparent focus:outline-none placeholder:text-[#54577A]  placeholder:text-[14px] placeholder:font-semibold text-[14px] font-semibold text-[#54577A]"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
