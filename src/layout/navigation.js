import { Link } from 'react-router-dom';

const Navigation = ({ children }) => {
  return (
    <>
      {/* <header style={{ padding: "2%", backgroundColor: "lightgrey" }}> */}
      {/* Je suis un header */}
      {/* </header> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      {children}

      {/* <footer style={{ padding: "2%", backgroundColor: "lightgrey" }}> */}
      {/* Je suis un footer */}
      {/* </footer> */}
    </>
  );
};

export default Navigation;
