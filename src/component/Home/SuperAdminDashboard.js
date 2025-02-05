import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/auth/userSlice";
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";
import { getFest } from "../../Redux/fest/festSlice";

const SuperAdminDashboard = () => {
  const dispatch = useDispatch();
  const { userData, loading, error } = useSelector((state) => state.user);
  const {
        fest,
        loading: festLoading,
        error: festError,
      } = useSelector((state) => ({
        ...state.fest
      }));

  useEffect(() => {
    dispatch(getFest());
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!userData) return <p>User not found.</p>;
  return (
    <div>
      <AdminDashboard user={userData} festDetails={fest} />
    </div>
  );
};

export default SuperAdminDashboard;
