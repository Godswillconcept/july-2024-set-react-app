import React from "react";
import posts from "../posts.json";
import { BsChatRightQuote } from "react-icons/bs";

function Portfolio() {
  return (
    <div className="container">
      <ul>
        {posts.map((post) => (
          <li className="list-unstyled mb-3">
            <div className="card shadow border-0 rounded-4">
                {/* <img className="img-fluid" src={post.postBanner} alt={post.postBanner} /> */}
              <div className="card-body">
                <h3>{post.postTitle}</h3>
                <h5>{post.postDesc}</h5>

                <p className="fst-italic">by {post.postAuthor}</p>
                <div className="d-flex justify-content-start align-items-center">
                  <BsChatRightQuote className="me-2" />
                  <h3>Comments</h3>
                </div>
                <hr />
                <ul className="list-unstyled">
                  {post.comments.map((comment, id) => (
                    <li key={id}>
                      <>
                        <p>{comment.comment}</p>
                        <p className="fst-italic fw-bold">- by {comment.name}</p>
                      </>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
