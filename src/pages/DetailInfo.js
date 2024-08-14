import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function DetailInfo() {
  const { userId } = useParams();
  const [detail, setDetail] = useState({});
  const [error, setError] = useState(null);
  console.log(userId);

  const fetchUserDetail = async (userId) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setDetail(res.data);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUserDetail(userId);
  }, [userId]);
  console.log("detail", detail);
  console.log("error", error);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      {Object.keys(detail).length === 0 ? (
        <div className="text-center">No Data</div>
      ) : (
        <div className="card w-50">
          <div className="card-body">
            <h3>{detail.name}</h3>
            <p>Username: {detail.username}</p>
            <p>Email: {detail.email}</p>
            <p>Phone: {detail.phone}</p>
            <p>Website: {detail.website}</p>
            <p>
              {detail.address.suite}, {detail.address.street},{" "}
              {detail.address.city}, {detail.address.zipcode}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailInfo;
