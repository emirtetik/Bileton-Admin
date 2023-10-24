import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex">
        <Sidebar />
      <div className="w-3/4">
        <h1>Anasayfa</h1>
      </div>
    </div>
  );
};

export default Home;
