import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Store";
import { getAdmin } from "../Redux/Services/admin";

type Props ={
    id: number
}

const useFetchAdmin = (id: number) => {
  const dispatch: AppDispatch = useDispatch();
  const { admin, isLoading } = useSelector((state: RootState) => state.admin);
  useEffect(() => {
      dispatch(getAdmin(id));
  }, [dispatch]);
  return { isLoading, admin }
};

export default useFetchAdmin;
