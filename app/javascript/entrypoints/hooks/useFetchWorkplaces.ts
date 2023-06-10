import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Store";
import { fetchWorkplaces } from "../Redux/Services/workplace";

type Props = {}
const useFetchWorkPlaces = (prop: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { workplace, status } = useSelector((state: RootState) => state.workplace);

  useEffect(() => {
    dispatch(fetchWorkplaces());    
  }, [dispatch, workplace?.length]);

  return { workplace, status }
};

export default useFetchWorkPlaces;
