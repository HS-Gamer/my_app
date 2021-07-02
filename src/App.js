import Header from "./components/Header/header";
import SideNavigation from "./components/Sidebar/sideNavigation";
import { Col, Row } from "reactstrap";
import Home from "./components/Dashboard/Home";
import './App.css'
function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <div style={styles.contentDiv}>
        <SideNavigation></SideNavigation>
        <div style={styles.contentMargin}>
        
        <div className="container">
          <Home/>
        </div>

        </div>
      </div>
    </>
  );
}
export default App;