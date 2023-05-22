import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch,  RootState } from "../Store";
import { getOrganizations } from "../Redux/Services/orgenization";

const useFetchOrganizations = () => {
  const dispatch: AppDispatch = useDispatch();
  const organizations = useSelector(
    (state: RootState) => state.organizations.organizations
  );
  useEffect(() => {
        dispatch(getOrganizations());
  }, []);

  return organizations;
};

export default useFetchOrganizations;
