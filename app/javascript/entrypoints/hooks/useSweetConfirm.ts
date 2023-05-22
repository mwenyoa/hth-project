import withReactContent from "sweetalert2-react-content";
import Swal, { SweetAlertOptions } from "sweetalert2";

type Props = {};

interface SwalProps extends SweetAlertOptions {
  method: () => any;
}

const MySwal = withReactContent(Swal);

const useSweetConfirm = (props: Props) => {
  const ShowConfirm = ({ title, text, icon, timer, method }: SwalProps) => {
    MySwal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: timer,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        method();
      }
    });
  };

  return {ShowConfirm};
};

export default useSweetConfirm;
