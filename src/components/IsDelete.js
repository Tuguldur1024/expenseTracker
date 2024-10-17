import axios from "axios";
import { IoClose } from "react-icons/io5";

const IsDelete = (props) => {
  const { deleteModal, id } = props;
  console.log(id);
  const deleteTransaction = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction`,
        {
          data: { id: id },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      deleteModal();
    }
  };
  return (
    <div className="flex justify-center pt-[200px] w-screen h-screen">
      <div className="flex flex-col rounded-2xl px-7 py-6 gap-5 mx-auto border border-slate-200 bg-white w-[600px] h-fit">
        <div className="w-full justify-between flex ">
          <p className="text-2xl font-semibold"> Confirm Delete </p>
          <div
            onClick={deleteModal}
            className="rounded-full flex items-center justify-center p-2 bg-white border border-slate-200"
          >
            <IoClose size={22} />
          </div>
        </div>
        <p className="text-lg mb-4"> Are you sure to delete this transaction</p>
        <div className="flex gap-4">
          <button
            onClick={deleteTransaction}
            className="bg-[#FF4545] rounded-3xl text-white px-5 py-2 font-medium"
          >
            Yes, delete it
          </button>
          <button
            onClick={deleteModal}
            className="bg-slate-200 rounded-3xl px-5 py-2"
          >
            No, keep it
          </button>
        </div>
      </div>
    </div>
  );
};

export default IsDelete;
