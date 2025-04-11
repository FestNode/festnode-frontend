import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/auth/userSlice";
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";
import { getFest, getFestStatus } from "../../Redux/fest/festSlice";
import AddFest from "../Admin/FestControl/AddFest";

const SuperAdminDashboard = () => {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector((state) => state.user);
  const {
        fest,
        loading: festLoading,
        error: festError,
        festStatus,
      } = useSelector((state) => ({
        ...state.fest
      }));

  useEffect(() => {
    dispatch(getFest());
    dispatch(getFestStatus());
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!userData) return <p>User not found.</p>;
  if (!festStatus) return (
    <div className="h-screen overflow-y-hidden">
      <AddFest user={userData} />
    </div>
  );
  if(festStatus) return (
    <div>
      <AdminDashboard user={userData} festDetails={fest} />
    </div>
  );
};

export default SuperAdminDashboard;
