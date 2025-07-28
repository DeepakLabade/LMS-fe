import { useState } from "react";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import Dialog from "../components/Dialog";

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { user, loading } = useAuth();
  return (
    <div className="h-screen w-full overflow-auto">
      {open && <Dialog setOpen={setOpen} />}
      <div className="mt-20 mx-60">
        <div className="font-bold text-5xl">
          Profile
        </div>
        <div className="flex pt-10">
          <div className="w-56 rounded-full">
            <img
              src={user?.photoUrl as string}
              className="rounded-full"
              alt=""
            />
          </div>
          <div className="flex flex-col pt-6 pl-10 gap-3 font-semibold text-lg">
            <p>Name: <span className="font-normal">{user?.username}</span></p>
            <p>Email: <span className="font-normal">{user?.email}</span></p>
            <p>Role: <span className="font-normal">{user?.role}</span></p>
            <div className="mt-4">
              <Button title="Edit Profile" onclick={() => setOpen(true)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
