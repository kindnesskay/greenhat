"use client";
import logout from "@/lib/logout-user";
import { UserRecord } from "firebase-admin/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingScreen from "./Loader";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import DepositWithdrawButtons from "./Actions";

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
        <div className="flex flex-col bg-white p-2 w-full">
          {/* Header Section */}
          <div className="w-full">
            <Profile
              name={currentUser?.displayName}
              photoUrl={currentUser?.photoURL}
            />
          </div>

          {/* Portfolio Value Card */}
          <div className="w-full">

          <Portfolio balance={balance} interestRate={dailyChange} />
          </div>

          
          <div className="mt-4 px-4 py-2 bg-white rounded-md shadow-md">
          <DepositWithdrawButtons/>
            
          </div>

          {/* Performance Metrics List Section */}
          <div className="mt-4 px-4 py-2 bg-white rounded-md shadow-md">
            <h3 className="text-lg font-bold mb-2">Performance Metrics</h3>
            <ul className="text-gray-700">
              <li>
                Today's Change:{" "}
                <span className="text-green-500">{`+ ${dailyChange.toFixed(
                  2
                )}%`}</span>
              </li>
              <li>
                7-Day Change: <span className="text-red-500">{-4.32}%</span>
              </li>
              <li>
                1-Month Change:{" "}
                <span className="text-green-500">{`+ 2.77%`}</span>
              </li>
              <li>
                1-Year Change:{" "}
                <span className="text-green-500">{`+ 15.64%`}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
