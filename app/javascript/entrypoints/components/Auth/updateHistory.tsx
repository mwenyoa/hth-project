import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  CancelOutlined,
  CancelRounded,
  SaveAlt,
  SaveAltSharp,
} from "@material-ui/icons";

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
      if (res.payload !== undefined) {
        ShowAlert({
          title: "Success",
          text: "History Updated Successfully",
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

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files?.length > 0) {
      setSelectedFile(files![0]);
    } else {
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
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
      historyData.append("history[image]", selectedFile as Blob);
      const histData = {
        historyData,
        organization_id: organization,
        history_id: id,
      };
      const method = (histData: any) => historyUpdateHandler(histData);

      ShowConfirm({
        title: "Alert",
        text: "Are you sure you want to continue?",
        icon: "warning",
        method,
        data: histData,
      });
      handleClose();
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
          zIndex: 100,
        },
      }}
      fullWidth
    >
      <DialogTitle style={{ width: "100%" }} color="blue">
        <span className={classes.title}>
          {" "}
          <Typography variant="h5">Edit History</Typography>
          <Button
            onClick={handleClose}
            className={classes.cancelBtn}
            variant="text"
          >
            <CancelRounded />
          </Button>
        </span>
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
          <TextField
            name="image"
            type="file"
            margin="dense"
            fullWidth
            variant="outlined"
            onChange={changeHandler}
            required
          />
           <Box sx={{textAlign: 'center', position: 'relative'}}>
           <Button
            type="submit"
            variant="contained"
            className={classes.submitBtn}
          >
            Save Changes <SaveAltSharp />
          </Button>
           </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateHistory;
