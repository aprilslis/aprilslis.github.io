
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import topBackground from "../resources/background.jpg"
import circleRim from "../resources/circleRim.png"
import circleRim2 from "../resources/circleRim2.png"
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home() {
  return (
    <div style={{backgroundColor:"#fbfae4", height:"300vh"}}>
      <Container fluid={true}>
        <Row style={{ height:"200vh", backgroundImage:`url(${topBackground})`,backgroundSize: "100% auto", backgroundRepeat: "no-repeat"}}>
          <Col sm={2}></Col>
          <Col sm={8} style={{backgroundImage:`url(${circleRim2})`, backgroundPosition: "center", backgroundSize: "auto 100%", height:"100vh"}}>
            <Row style={{height:"20vh"}}></Row>
            <Row style={{height:"60vh"}}>
              <label style={{margin:"auto", marginBottom:"10px", color:"#605448", fontFamily:"DMSerif", fontWeight: "100", fontSize: "650%"}}>APRIL LI</label>
              <div style={{marginLeft:"auto", marginRight:"auto", backgroundColor:"#605448", height:"3px", width:"50%"}}/>
              <label style={{marginTop:"0px", color:"#605448", fontFamily:"DMSerif", fontWeight: "100", fontSize: "270%"}}>Welcome to my website!</label>
            </Row>

            <Row style={{height:"20vh"}}></Row>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>

    
    {/* <div style={{ height:"200vh", backgroundImage:`url(${topBackground})`,backgroundSize: "100% auto", backgroundRepeat: "no-repeat"}} >
      <p>HELLO</p>
      <div style={{textAlign: "center",backgroundImage:`url(${circleRim})`, backgroundSize: "auto 100%", height:"100vh"}} ></div>
    </div> */}

    </div>
    
  );
}

export default Home;
