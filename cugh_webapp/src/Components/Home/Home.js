import React from "react";
import {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Button,
        Modal, ModalBody, BodalFooter, ModalHeader, Container, Input, Fa} from "mdbreact";
import cugh1 from "../../Assets/cugh1.jpg"
import cugh2 from "../../Assets/cugh2.jpg"
import  two from "../../Assets/2.jpg"

class Home extends React.Component {
 constructor(props){
     super(props);
     this.state={
         modal: false,
         register: false,
     }
 }
 toggle = () => {
     this.setState({
         modal: !this.state.modal,
         register: false
     });
 }
 registerform = () => {
     this.setState({
         register: !this.state.register,
         modal: false
     })
 }
  render() {
    return (
        <div>
            <Carousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
            <CarouselInner>
            <CarouselItem itemId="1">
                <View>
                <img className="w-100" src={cugh1} alt="First slide" />
                <Mask overlay="black-light" />
                </View>
                <CarouselCaption>
                <h3 className="h3-responsive">Goals</h3>
                <p>CUGH helps connect different health institutions in the world. </p>
                <Button onClick={this.toggle}>LOGIN OR CREATE AN ACCOUNT</Button>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
                <View>
                <img className="w-100" src={cugh2} alt="First slide" />
                <Mask overlay="black-light" />
                </View>
                <CarouselCaption>
                <h3 className="h3-responsive">Achievements</h3>
                <p>Thousands of institutions connected together</p>
                <Button onClick={this.toggle}>LOGIN OR CREATE AN ACCOUNT</Button>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
                <View>
                <img className="w-100" src={two} alt="First slide" />
                <Mask overlay="black-light" />
                </View>
                <CarouselCaption>
                <h3 className="h3-responsive">How it works</h3>
                <p>Login or create an account to connect your institutions</p>
                <Button onClick={this.toggle}>LOGIN OR CREATE AN ACCOUNT</Button>
                </CarouselCaption>
            </CarouselItem>
            </CarouselInner>
        </Carousel>  
        <Modal isOpen={this.state.modal}>
            <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-user-circle" /> Login Form</h4>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
                <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"
                value={this.state.email}
                onChange={(value) => this.setState({email: value.target.value})}
                />
                <Input size="sm" label="Your Password" icon="lock" group type="email" validate error="wrong" success="right"
                value={this.state.password}
                onChange={(value) => this.setState({password: value.target.value})}
                />

              </ModalBody>
        
                {/* <Button color="secondary" onClick={this.toggle}>Close</Button>{' '} */}
                <div className="d-flex flex-column justify-content-center align-self-center">
                <Button color="primary" style={{borderRadius: 10, width: 300}} onClick={this.LogInAction}>Log In</Button>
                <Button color="secondary" style={{borderRadius: 10, width: 300}} onClick={this.registerform}>Create an account</Button>
                </div>
        </Modal>
        <Modal isOpen={this.state.register}>
            <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-user-circle" /> Register</h4>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
                <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"
                value={this.state.email}
                onChange={(value) => this.setState({email: value.target.value})}
                />
                <Input size="sm" label="Your Password" icon="lock" group type="email" validate error="wrong" success="right"
                value={this.state.password}
                onChange={(value) => this.setState({password: value.target.value})}
                />
                <Input size="sm" label="Repeat Password" icon="lock" group type="email" validate error="wrong" success="right"
                value={this.state.password}
                onChange={(value) => this.setState({password: value.target.value})}
                />
                <Input size="sm" label="Institution Name" icon="book" group type="email" validate error="wrong" success="right"
                value={this.state.email}
                onChange={(value) => this.setState({email: value.target.value})}
                />
                <Input size="sm" label="Phone Number" icon="phone" group type="email" validate error="wrong" success="right"
                value={this.state.email}
                onChange={(value) => this.setState({email: value.target.value})}
                />


              </ModalBody>
        
                {/* <Button color="secondary" onClick={this.toggle}>Close</Button>{' '} */}
                <div className="d-flex flex-column justify-content-center align-self-center">
                <Button color="primary" style={{borderRadius: 10, width: 300}} onClick={this.toggle}>Log In</Button>
                <Button color="secondary" style={{borderRadius: 10, width: 300}} onClick={this.registerform}>Create an account</Button>
                </div>
        </Modal>
        </div>
       

    );
  }
}

export default Home;