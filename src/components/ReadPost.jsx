import { useState, useEffect } from "react";
import axios from "axios";
import Toastify from "toastify-js";
import { Link } from "react-router-dom";
import CustomModel from "./CustomModel";
import FullScreenLoader from "../common/FullScreenLoader";

const ReadPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://serversideblog.vercel.app/api/v1/read`)
      .then((res) => {
        setData(res.data["post"]);
      })
      .catch((error) => console.error(error));
  }, [data]);

  //delete post by id
  const deletePost = (id) => {
    axios
      .delete("https://serversideblog.vercel.app/api/v1/delete/" + id)
      .then((res) => {
        if (res.status === 200) {
          Toastify({
            text: "Post delete success",
            duration: 2000,
            className: "info",
            position: "center",
          }).showToast();
        } else {
          Toastify({
            text: "Somthing went wrong",
            duration: 3000,
            className: "info",
            close: true,
            position: "center",
          }).showToast();
        }
      });
  };
  if (data.length > 0) {
    return (
      <div className="row">
        {data.map((item) => (
          <div key={item["_id"]} className="col-12 col-md-6 mb-4">
            <div className="card p-3 shadow-sm">
              <div className="card-image">
                <img
                  className="w-100"
                  height="200px"
                  src={item["image"]}
                  alt=""
                />
              </div>
              <div className="card-title border-bottom">
                <Link
                  className="text-decoration-none"
                  to={`/post/${item["_id"]}`}
                >
                  <h5>{item["title"]}</h5>
                </Link>
              </div>
              <div className="card-body">
                {/* Display a truncated version of the content */}
                {item["content"].length > 100 ? (
                  <>
                    {item["content"].substring(0, 100)}
                    <span>...</span>{" "}
                  </>
                ) : (
                  item["content"]
                )}
              </div>
              <div className="card-footer d-flex gap-3 text-center">
                <Link
                  className="btn btn-outline-success"
                  to={`/post/${item._id}`}
                >
                  Read More
                </Link>
                <div>
                  <CustomModel id={item._id} />
                </div>
                <button
                  onClick={deletePost.bind(this, item._id)}
                  className="btn btn-outline-info btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <FullScreenLoader />
    </div>
  );
};

export default ReadPost;
