import withReactContent from "sweetalert2-react-content";
import Swal, { SweetAlertOptions } from "sweetalert2";
import { Outlet } from "react-router-dom";

type Props = {};

interface SwalProps extends SweetAlertOptions {
  method: (data: any) => any;
  data: { history_id?: number, organization_id?: number }
}

const MySwal = withReactContent(Swal);

const useSweetDelete = (props: Props) => {
  const ShowAskDelete = ({ title, text, icon, method, data }: SwalProps) => {
    MySwal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
       return method(data);
      }
      else if(res.isDismissed){
       window.location.reload()
      }
    });
    
  };

  return {ShowAskDelete};
};

export default useSweetDelete;
