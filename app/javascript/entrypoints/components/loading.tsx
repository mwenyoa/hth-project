import React, { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";
import { useStyles } from "../Styles";

type Props = {};

const Loading = (props: Props) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "navy",
  };
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <ClipLoader
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        loading={true}
      />
    </div>
  );
};

export default Loading;
