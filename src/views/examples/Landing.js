/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
// import classnames from "classnames";
// import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/Project 201.png";
import ill2 from "assets/img/ill/ill-2.svg";
// import team1 from "assets/img/theme/team-1-800x800.jpg";
// import team2 from "assets/img/theme/team-2-800x800.jpg";
// import team3 from "assets/img/theme/team-3-800x800.jpg";
// import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  // Button,
  Card,
  CardBody,
  CardImg,
  // FormGroup,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
// import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Developing Your Future{" "}
                        <span>Clean, Simple & DRY Code</span>
                      </h1>
                      <p className="lead text-white">
                        Tech is every changing and this change is what excites
                        me the most to innovate software that is simple to
                        create, clean to read and use, reusable and user
                        friendly. There is always more than one way to reach
                        your end goal so think outside the box as much as
                        possible.
                      </p>
                      {/* <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button>
                      </div> */}
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              {/* <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div> */}
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Salmon Cookies
                          </h6>
                          <p className="description mt-3">
                            Project to market the World Famous Salmon Cookies
                            and to track the global sales by each store.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              code
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              publish
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              201
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Bus Mall
                          </h6>
                          <p className="description mt-3">
                            App to target market search on items to purchase
                            from a catalog by providing various images.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              code
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              publish
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              201
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            mindSpace
                          </h6>
                          <p className="description mt-3">
                            A learning journal blog style app to assist with
                            notes from class. Filter, Favortie & Level tracking.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              code
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              publish
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              201 final
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Future Project
                          </h6>
                          <p className="description mt-3">
                            Some future project to publish for the Code Fellows
                            Intermediate Class #301n22.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              code
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              publish
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              301
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            future Project
                          </h6>
                          <p className="description mt-3">
                            Some future project to publish for the Code Fellows
                            Intermediate Class #301n22.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              code
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              publish
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              301
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Final Project
                          </h6>
                          <p className="description mt-3">
                            Some future project to publish for the Code Fellows
                            Intermediate Class Final.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              code
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              publish
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              301 final
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            Future Project
                          </h6>
                          <p className="description mt-3">
                            Some future project to publish for the Code Fellows
                            Class 401.
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              code
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              publish
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              401
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            future Project
                          </h6>
                          <p className="description mt-3">
                            Some future project to publish for the Code Fellows
                            Class 401.
                          </p>
                          <div>
                            <Badge color="info" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              code
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              publish
                            </Badge>
                            <Badge color="info" pill className="mr-1">
                              401
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-info text-uppercase">
                            Final Project
                          </h6>
                          <p className="description mt-3">
                            Some future project to publish for the Code Fellows
                            401 Class Final.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              code
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              publish
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              401 final
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        mindSpace Blog
                      </h4>
                      <p className="lead text-italic text-white">
                        Your single source blogging site to keep track of all
                        your learning notes. Save all your important thoughts.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Key Benefits</h3>
                    <p className="lead">
                      Don't know where to keep track of your notes and thoughts?
                      mindSpace is your solution.
                    </p>
                    <p>
                      Record your notes to key development packages that can be
                      filtered. Asign difficulty levels and mark entries as
                      favorite.
                    </p>
                    <p>
                      Entries can be edited or deleted. Newest entries will show
                      at the top. Filter to show only favorites and ability to
                      filter by difficulty level. A must have and use site for
                      anyone new to coding.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      A beautiful UI design that is clean and crisp
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Background</h4>
                      <p className="text-white">
                        Tech is every changing and this change is what excites
                        me the most to innovate software that is simple to
                        create, clean to read and use, reusable and user
                        friendly. There is always more than one way to reach
                        your end goal so think outside the box as much as
                        possible.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">My Drive</h5>
                          <p>
                            I have a passion for software development as I enjoy
                            being challenged by the numerous problem solving
                            needs, logical thinking requirements, team work
                            collaboration and, most of all, the satisfaction of
                            the client receiving their final product.
                          </p>
                          {/* <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a> */}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">My Goals</h5>
                          <p>
                            I would like to blend my years of experience in the
                            cargo logistics industry and port management into
                            software development to streamline the vast amount
                            of data and processes that are used for the movement
                            of commerce world wide.
                          </p>
                          {/* <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a> */}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
