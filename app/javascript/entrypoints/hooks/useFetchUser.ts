import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Store";
import { fetchUser } from "../Redux/Services/user";


const useFetchUser = (user_id: number) => {
  const dispatch: AppDispatch = useDispatch();
  const { user, isLoading } = useSelector((state: RootState) => state.user);
  useEffect(() => {
      dispatch(fetchUser(user_id));
  }, [dispatch]);
  return {isLoading, user}
};

export default useFetchUser;
