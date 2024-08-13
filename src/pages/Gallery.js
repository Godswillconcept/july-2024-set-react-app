import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch gallery from the API using async await approach

  const fetchGallery = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const resJson = await response.json();
      setGallery(resJson);
      setLoading(false);
      console.log("resJson - ", resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchGallery();
  }, []);
  console.log("gallery", gallery);
  return (
    <div className="container-fluid">
      {loading ? (
        <div className="d-flex justify-content-evenly align-items-center" style={{height: '74vh'}}>
            <div className="spinner-border text-success"></div>
            <div className="spinner-border text-danger"></div>
            <div className="spinner-border text-warning"></div>
        </div>
      ) : (
        <>
          {gallery.length !== 0 ? (
            <div className="row g-2">
              {gallery.map(({ id, author, download_url }) => (
                <div className="col-4" key={id}>
                  <div className="card movie mb-2">
                    <div className="card-img-top movie_poster">
                      <img
                        src={download_url}
                        alt={`${download_url} by ${author}`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{author}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>No Gallery data</>
          )}
        </>
      )}
    </div>
  );
};

export default Gallery;
