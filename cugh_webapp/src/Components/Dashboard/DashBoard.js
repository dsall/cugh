import React, { Component } from 'react';
import {Card, CardBody, CardImage} from "mdbreact";
import cugh from "../../Assets/cugh1.jpg";
class Dashboard extends Component {
  render() {
    return (
      <div >
        <Card  style={{ width: "22rem", height: "10rem", marginTop: 20, marginLeft: 20, backgroundColor: "lightblue",  }}>
        <CardImage
            className="img-fluid"
            src={cugh}
            waves
          />


        </Card>
      </div>
    );
  }
}

export default Dashboard;