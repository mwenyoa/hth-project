import withReactContent from "sweetalert2-react-content";
import Swal, { SweetAlertOptions } from "sweetalert2";

type Props = {};

interface SwalProps extends SweetAlertOptions {
  method: (data: any) => any;
  data,
}

const MySwal = withReactContent(Swal);

const useSweetConfirm = (props: Props) => {
  const ShowConfirm = ({ title, text, icon, method, data }: SwalProps) => {
    MySwal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        method(data);
    }
     
    })
  };

  return {ShowConfirm};
};

export default useSweetConfirm;
