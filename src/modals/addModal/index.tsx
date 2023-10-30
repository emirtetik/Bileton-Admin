import Form from "../../components/form"

interface AddModalProps{
    closeModal: () => void;
}

const AddModal = ({closeModal} : AddModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70">
       <div className="">
       <h1 className="py-4 my-10 text-xl font-extrabold text-center uppercase bg-orange-500">
          Yeni Bir Etkinlik Ekle
        </h1>
        <Form />
       </div>
        <button onClick={closeModal}>Kapat</button>
    </div>
  )
}

export default AddModal