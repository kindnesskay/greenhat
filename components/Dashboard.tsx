"use client";
import logout from "@/lib/logout-user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "./Loader";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import DepositeButon from "./actions/DepositeButon";
import WithdrawButon from "./actions/WithdrawButton";
import Transactions from "./transactions";
import fetchUserData from "@/lib/firebase/functions/fetchUserData";

export default function Dashboard({
  currentUser,
}: {
  currentUser?: {
    uid: string | undefined;
    email: string | undefined;
    emailVerified: boolean | undefined;
    displayName: string | undefined;
    photoURL: string | undefined;
    phoneNumber: string | undefined;
  };
}) {
  const [isLoading, setIsloading] = useState(false);
  const [balance, setPortfolioValue] = useState(0);
  const [dailyChange, setDailyChange] = useState(1.25); // Update with actual data

  const router = useRouter();
  const handleSignOut = async () => {
    setIsloading(true);
    await logout();
    router.refresh();
  };

  useEffect(() => {
    async function fetchData() {
      if (!currentUser?.uid) return;
      const data = await fetchUserData(currentUser?.uid);
      if (!data) return;
      setPortfolioValue(data.balance);
    }
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col p-2 w-full">
          {/* Header Section */}
          <div className="w-full flex justify-between px-4 mb-2">
            <Profile
              name={currentUser?.displayName}
              photoUrl={currentUser?.photoURL}
            />
            <button onClick={handleSignOut} className="p-2">
              Logout
            </button>
          </div>

          {/* Portfolio Value Card */}
          <div className="w-full flex flex-col items-center gap-2 md:flex-row ">
            <div className=" w-full ">
              <Portfolio balance={balance} interestRate={dailyChange} />
            </div>
            <div className="py-2 flex gap-2 w-full justify-center md:flex-col md:justify-center md:items-center">
              <DepositeButon />
              <WithdrawButon />
            </div>
          </div>

          <div>
            
            {currentUser?.uid &&<Transactions userID={currentUser?.uid}/>}
          </div>
        </div>
      )}
    </>
  );
}
