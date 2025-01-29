import Button from "../components/Button";
import Header from "../components/Header";
import Tasklist from "../components/Tasklist";
import Team from "../components/Team";

const Dashboard = () => {
  return (
    <div className="">
      <Header/>
      <div className="h-90 flex ml-10 mt-5 max-w-221 bg-blue-200 rounded-sm text-current">
        <Tasklist />
      </div>
      <div className="flex justify-between mb-10">
        <Team/>
        <Button/>
      </div>
    </div>
  );
};

export default Dashboard;
