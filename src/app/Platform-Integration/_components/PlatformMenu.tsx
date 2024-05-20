const PlatformMenu = () => {
  return (
    <div className="flex flex-col bg-[#FFFFFF] gap-4 py-8 px-3">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold">General</div>
        <div className="text-sm font-normal text-[#54577A]">
          Account Information
        </div>
        <div className="text-sm font-normal ">Billing Information</div>
        <div className="text-sm font-normal ">Subscription Plan</div>
        <div className="text-sm font-normal">Location</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold">Manage Team</div>
        <div className="text-sm font-normal ">Invite Members</div>
        <div className="text-sm font-normal ">Customize Roles</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold">Manage Accounts</div>
        <div className="text-sm font-normal ">Existing Accounts</div>
        <div className="text-sm font-normal ">Integrate New Accounts</div>
      </div>
    </div>
  );
};

export default PlatformMenu;
