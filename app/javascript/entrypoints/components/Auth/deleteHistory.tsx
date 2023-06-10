import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { deleteHistory } from "../../Redux/Services/history";
import useSweetDelete from "../../hooks/useSweetDelete";
import useSweetAlert from "../../hooks/useSweetAlert";

type Props = {
    history_id:number,
    organization_id: number
};

const DeleteHistory = ({history_id, organization_id }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { ShowAskDelete } = useSweetDelete({});
  const { ShowAlert } = useSweetAlert({});
  
  
  const historyDeleteHandler = (hist: any) => {
    dispatch(deleteHistory(hist)).then((res: any) => {
      if (res.payload !== undefined) {
        ShowAlert({
          title: "Success",
          text: "History Deleted Successfully",
          icon: "success",
          time: 2500,
        });
      }
      if (res.payload === undefined) {
        ShowAlert({
          title: "Error",
          text: res.error.message,
          icon: "error",
          time: 2500,
        });
        return;
      }
    });
  };

  const method = (hist) => historyDeleteHandler(hist);
  return(
    <>
    {
      ShowAskDelete({
        title: "Alert",
        text: "Are you sure you want to continue?",
        icon: "question",
        method,
        data: {history_id, organization_id },
      })
    }
    </>
  )
};

export default DeleteHistory;
