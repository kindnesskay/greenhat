"use client";
import logout from "@/lib/logout-user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingScreen from "./Loader";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import DepositeButon from "./actions/DepositeButon";
import WithdrawButon from "./actions/WithdrawButton";
import Transactions from "./transactions";

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
  const [balance, setPortfolioValue] = useState(10000);
  const [dailyChange, setDailyChange] = useState(1.25); // Update with actual data

  const router = useRouter();
  const handleSignOut = async () => {
    setIsloading(true);
    await logout();
    router.refresh();
  };
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
          <div className="w-full flex flex-col items-center gap-2">
            <Portfolio balance={balance} interestRate={dailyChange} />
            <div className="py-2 flex gap-2 w-fit">
              <DepositeButon />
              <WithdrawButon />
            </div>
          </div>

          <div>
            <Transactions />
          </div>
        </div>
      )}
    </>
  );
}
