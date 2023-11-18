import Form from "../../components/form";
import MuiButton from "../../components/mui/button";
import { GrClose } from "react-icons/gr";
interface AddModalProps {
  closeModal: () => void;
}

const AddModal = ({ closeModal }: AddModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[50]">
    <div className="absolute bg-black bg-opacity-90 inset-0"></div>
    <div className="relative z-[50] bg-white p-4 rounded-md">
      <Form />
      <div className="absolute top-2   -right-1">
        <MuiButton size="medium" variant="outlined" onClick={closeModal}>
          <GrClose className="w-8 h-8 bg-yellow-600 rounded-full p-1" />
        </MuiButton>
      </div>
    </div>
  </div>
  );
};

export default AddModal;
