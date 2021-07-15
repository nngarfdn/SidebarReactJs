import React from "react";
import firebase from "firebase";
import { Center } from "@chakra-ui/react";
import Lottie from "react-lottie";
import animationData from "../lotties/person.json";
import * as IoIcons from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";


const handleLogout = () => {
  firebase.auth().signOut();
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const Home = () => {
  return (
    <div className="msj">
      <Container>
        <Row>
    
          <Col>
            <Lottie options={defaultOptions} height={400} width={400} />
            <h3 className="text-center ">Selamat datang di halaman admin</h3>
            <h5 className="text-center text-info" >Anda dapat menekan menu pojok kanan atas untuk mengelola anggur atau toko di Kampung Anggur Plumbungan</h5>
            <Button className="btn-outline col-md-12 text-center" variant="outline-danger" size="sm" onClick={handleLogout}>
              Keluar
            </Button>
          </Col>
      
        </Row>
      </Container>
    </div>
  );
};

export const Users = () => {
  return (
    <div className="msj">
      <h1>Users</h1>
    </div>
  );
};

export const Revenue = () => {
  return (
    <div className="msj">
      <h1>Revenue</h1>
    </div>
  );
};
