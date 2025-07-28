import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, loading } = useAuth();

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div className="mx-auto my-24">
        {/* {user ? JSON.stringify(user) : "Loading..."} */}
      </div>
    </div>
  );
}

export default Home