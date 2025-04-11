import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/auth/userSlice";
import { getFest } from "../../Redux/fest/festSlice";

const SecureHome = () => {
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
    }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  if (!userData) return <p>User not found.</p>;

  return (
    <div>
      <h1>Hello, {userData.name}. Welcome to Fest Node</h1>
    </div>
  );
};

export default SecureHome;
