import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHistory } from "../Redux/Services/history";
import { RootState } from "../Store"
import { AppDispatch } from "../Store";

type historyProps = {
    organization_id: number,
    history_id: number,
}

 const useFetchHistory = (props:historyProps) => {
    const dispatch: AppDispatch = useDispatch();
    const {history, status} = useSelector(
        (state: RootState) => state.history
    );
    useEffect(() => {
            dispatch(getHistory(props));
    }, [dispatch, history]);
    
    return {history, status};
    }

export default useFetchHistory;