import Form from "../../components/form";
import MuiButton from "../../components/mui/button";
import { GrClose } from "react-icons/gr";
interface AddModalProps {
  closeModal: () => void;
}

const AddModal = ({ closeModal }: AddModalProps) => {
  return (
    <div className="fixed inset-0 z-500 flex items-start justify-end p-6 bg-black " style={{zIndex:"1000"}}>
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <div className=" " >
          <Form />
        </div>
      </div>
      <MuiButton size="medium" variant="outlined" onClick={closeModal}>
        <GrClose className="w-8 h-8 bg-yellow-600 rounded-full p-1" />
      </MuiButton>
    </div>
  );
};

export default AddModal;
