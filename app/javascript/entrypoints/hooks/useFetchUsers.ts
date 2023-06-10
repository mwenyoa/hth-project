import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Store";
import { fetchUsers } from "../Redux/Services/user";

type Props = {};
const useFetchUsers = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { users, isloading } = useSelector((state: RootState) => state.users);
  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers(props));
    }
  }, [users.length, dispatch]);
  return { users, isloading };
};

export default useFetchUsers;
