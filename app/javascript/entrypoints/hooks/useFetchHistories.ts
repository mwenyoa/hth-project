import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { AppDispatch } from "../Store";
import { getHistories } from "../Redux/Services/history";

 type historyProps = {
    organization_id: number;
 };

 const useFetchHistories = (historyProps) => {
    const dispatch: AppDispatch = useDispatch();
    const {history, isLoading}= useSelector(
        (state: RootState) => state.histories
    );
    useEffect(() => {
        if(history.length === 0){
            dispatch(getHistories(historyProps));
        }
    }, [dispatch, history.leghth]);
    
    return {history, isLoading};
    }

    export default useFetchHistories;


