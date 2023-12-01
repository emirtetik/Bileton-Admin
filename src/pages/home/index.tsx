import ListEvent from "../../components/event/ListEvents";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-roboto ">
      <div className="flex w-full max-w-6xl mb-4 border-b-4 border-black">
      <h1 className="text-3xl font-extrabold text-black">Etkinlik Listesi</h1>
      </div>
      <div className="flex items-center justify-center">
         <ListEvent/>
         </div>
    </div>
  );
};

export default Home;
