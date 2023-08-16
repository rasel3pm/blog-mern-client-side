import { VscAccount } from "react-icons/vsc";
import { CiLogin } from "react-icons/ci";
import { RxReader, RxUpdate } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";

const HomePage = () => {
  const data = [
    {
      id: "1",
      icon: <VscAccount />,
      service: "Create Account",
    },
    {
      id: "2",
      icon: <CiLogin />,
      service: "Login Account",
    },
    {
      id: "3",
      icon: <RxReader />,
      service: "Create Post",
    },
    {
      id: "4",
      icon: <RxReader />,
      service: "Read Post",
    },
    {
      id: "6",
      icon: <RxUpdate />,
      service: "Update post",
    },
    {
      id: "6",
      icon: <AiOutlineDelete />,
      service: "Delete post",
    },
  ];
  return (
    <div>
      <div className="container my-3">
        <h4>Features</h4>
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-md-4 mb-3">
              <div key={item.id} className="card p-3">
                <span className="fs-1 text-success">{item.icon}</span>
                <h4 className="text-muted">{item.service}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
