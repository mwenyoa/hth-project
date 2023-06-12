import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Store";
import { getAdmins } from "../Redux/Services/admin";

type Props = {};

const useFetchAdmins = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { admins, isLoading } = useSelector((state: RootState) => state.admins);
  useEffect(() => {
      if(admins.length === 0){
        dispatch(getAdmins())
      }
  }, [admins.length, dispatch]);
  return {isLoading, admins}
};

export default useFetchAdmins;
