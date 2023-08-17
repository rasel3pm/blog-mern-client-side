import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FullScreenLoader from "../common/FullScreenLoader";
import CustomModal from "../components/CustomModel";

const SinglePost = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://serversideblog.vercel.app/api/v1/post/${id}`)
      .then((res) => {
        setData(res.data.post);
      });
  }, [id]);

  if (data) {
    return (
      <div className="container py-3">
        <div className=" p-3">
          <div className="card-image text-center">
            <img
              className="w-100 rounded"
              height="350px"
              src={data["image"]}
              alt=""
            />
          </div>
          <div className="card-title pt-3 px-5">
            <h4 className="fw-bold">{data["title"]}</h4>
            <p>{data["content"]}</p>
          </div>
        </div>
        <div className="d-flex px-5 gap-2">
          <Link className="btn btn-dark" to={"/"}>
            Go Back
          </Link>
          <CustomModal id={id} />
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-3">
      <FullScreenLoader />
    </div>
  );
};

export default SinglePost;
