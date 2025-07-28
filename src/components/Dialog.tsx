import { RxCross2 } from "react-icons/rx";
import Button from "./Button";

const Dialog = (props: any) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center w-full h-screen z-50 bg-black/20">
      <div className="bg-white rounded-lg h-min-60 w-96 opacity-100">
        <div className="px-4 pt-4 font-semibold content-between">
          <div className="flex justify-between">
            <div className="text-xl">Edit Profile</div>
            <div onClick={() => props.setOpen(false)}>
              <RxCross2 className="cursor-pointer" size={24} color="gray" />
            </div>
          </div>
          <div className="my-4 font-normal flex flex-col gap-3">
            <div className="flex flex-col gap-2 ">
              <label className="font-medium">Email</label>
              <input
                type="email"
                placeholder="deepak@gmail.com"
                className="border border-gray-300 px-2 py-1 rounded-lg w-full focus:outline-none focus:ring-3 focus:ring-gray-300 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Photo URL</label>
              <input
                type="file"
                className="border border-gray-300 px-2 py-1 rounded-lg w-full focus:outline-none focus:ring-3 focus:ring-gray-300 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="mt-4 flex w-full justify-end">
              <Button onclick={() => {}} title="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
