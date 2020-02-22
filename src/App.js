import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'


function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home"> [ Sandeep Kumar ]</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Work</Nav.Link>
            <Nav.Link href="#pricing" disabled>Blog</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <main className="container">
        <div className="grey-wrapper">
          <div className=" flex intro-wrapper">
            <div className="text-left introduction">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Iste vel deleniti ex saepe incidunt maiores atque praesentium voluptatum?
              Tempore doloremque laborum tenetur, nihil optio earum incidunt omnis! Id, ratione molestiae!
            </div>
            <div>
              <img src="https://via.placeholder.com/200/0000FF/808080" alt="profile" />
            </div>
          </div>
        </div>

        <div className="spacer"></div>

        <div className="my-5">
          <h1 className="text-center">What Do I do?</h1>
          <p className="work-intro text-center mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio pariatur, vitae, est tenetur placeat vel voluptates qui mollitia ut exercitationem libero, inventore incidunt voluptas voluptatum reiciendis dignissimos autem veritatis voluptatibus?
            </p>
          <div style={{ "height": "300px", background: "grey" }}>
            {/* display your work here */}

          </div>
        </div>

        <div className="">
          <h2>Reach to me</h2>
          <div className="flex">
            <div className="contact-info text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corporis ipsum cupiditate, aliquid alias,
              optio, quam voluptatum ipsa quis quibusdam nam totam aperiam
              velit placeat excepturi odio repellat facilis ex odit.
            </div>
            <Form className="text-left jumbotron">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

          </div>
        </div>
      </main>
      <footer>
        <Nav className="justify-content-center" fixed="bottom" activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Find me elsewhere...</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">LinkedIn</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Twitter</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="link-3" >Github</Nav.Link>
          </Nav.Item>
        </Nav>
      </footer>
    </div>
  );
}

export default App;
