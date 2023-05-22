import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from "@material-ui/core";
import { CancelOutlined, SaveAlt } from "@material-ui/icons";

import { AppDispatch } from "../../Store";
import { useStyles } from "../../Styles";
import useSweetConfirm from "../../hooks/useSweetConfirm";
import { updateHistory } from "../../Redux/Services/history";
import useSweetAlert from "../../hooks/useSweetAlert";

type Props = {
  open: boolean;
  handleClose: () => void;
  history: {
    event_title: string;
    description: string;
    event_date: string;
    id: number;
    link: string;
    image: string;
    organization: {
      id: number;
    };
  };
};

const UpdateHistory = ({ open, handleClose, history }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const classes = useStyles();
  const { ShowConfirm } = useSweetConfirm({});
  const { ShowAlert } = useSweetAlert({});
  
  console.log("Current History: ", history);
  const [values, setValues] = useState({
    title: history.event_title || "",
    desc: history.description || "",
    date: history.event_date || "",
    id: history.id || 0,
    link: history.link || "",
    image: history.image || "",
    organization: history?.organization?.id || 0,
  });

  const historyUpdateHandler = (hist: any) => {
    dispatch(updateHistory(hist)).then((res: any) => {
      if (res.payload !== "undefined") {
        ShowAlert({
          title: "Success",
          text: "History Updated Successfully",
          icon: "success",
          time: 2500,
        });
      }
      if(res.payload === "undefined"){
        ShowAlert({
          title: "Error",
          text: res.error.message,
          icon: "error",
          time: 2500,
        });
      }
    });
  };


  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({...prevValues, [name]: value,}));
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, desc, date, id, link, image, organization } = values;
    if (
      title &&
      desc &&
      link &&
      image &&
      date !== "" &&
      id &&
      organization !== 0
    ) {
      const historyData: any = new FormData();
      historyData.append("history[event_title]", title);
      historyData.append("history[description]", desc);
      historyData.append("history[event_date]", date);
      historyData.append("history[link]", link);
      // historyData.append("history[image]", image);
      const histData = {
        historyData,
        organization_id: organization,
        history_id: id
      };
      const method =  historyUpdateHandler(histData);
      ShowConfirm({ title: "Alert",
      text: "Are you sure you want to continue?",
      icon: "warning",
      timer: 2500,
      method
     })
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
        },
      }}
    >
      <DialogTitle>
        Edit History{" "}
        <Button onClick={handleClose}>
          <CancelOutlined />
        </Button>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleUpdate}>
          <TextField
            name="title"
            label="Title"
            value={values.title}
            margin="dense"
            fullWidth
            variant="standard"
            onChange={changeHandler}
          />
          <TextField
            name="desc"
            label="Description"
            value={values.desc}
            onChange={changeHandler}
            margin="dense"
            fullWidth
            variant="standard"
          />
          <TextField
            name="date"
            label="Date"
            margin="dense"
            fullWidth
            variant="standard"
            value={values.date}
            type="date"
            onChange={changeHandler}
          />
          <TextField
            name="link"
            label="Link"
            type="text"
            margin="dense"
            fullWidth
            variant="standard"
            value={values.link}
            onChange={changeHandler}
          />
          <Button type="submit">
            <SaveAlt />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateHistory;
