import { Link } from "react-router-dom";
import MyForm from "../components/MyForm";
export const Contact = () => {
  return (
    <div className="container">
      Contact page
      <div className="alert alert-danger alert-dismissible fade show">
        <button className="btn-close" data-bs-dismiss="alert"></button>
        <strong>Hay!</strong> Your subscription for our monthly Newsletter has
        been updated!<Link to="/read-more" className="alert-link">Read more</Link>
      </div>
      <MyForm />
    </div>
  );
};
