
import notFound from '../components/OIP (1).jpg'
const NotFound = () => {
  return <div style={{
    textAlign: "center", margin: "auto", height: '100vh'
  }}>Page Not Found!
    <img src={notFound} alt={notFound} width={300} />
  </div>;
};
export default NotFound;