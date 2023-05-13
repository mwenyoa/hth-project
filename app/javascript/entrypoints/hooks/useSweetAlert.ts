import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

type Props = {};

interface swalProps {
  title: string;
  text: string | never;
  icon: any;
  time: number;
}
const MySwal = withReactContent(Swal);

const useSweetAlert = (props: Props) => {
  const ShowAlert = ({ title, text, icon, time }: swalProps) => {
    MySwal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: time,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };
  return { ShowAlert };
};

export default useSweetAlert;
