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
      <div className="container pt-3">
        <div className="card p-3">
          <div className="card-image">
            <img className="w-100" height="300px" src={data["image"]} alt="" />
          </div>
          <div className="card-title">
            <h4 className="fw-bold">{data["title"]}</h4>
            <p>{data["content"]}</p>
          </div>
        </div>
        <div className="d-flex gap-2 pt-2">
          <Link className="btn btn-primary" to={"/"}>
            Back
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
