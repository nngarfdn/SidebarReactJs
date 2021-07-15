import { Provider } from "../Context";
import UserList from "../components/UserList";
import React, { useState } from "react";
import { Actions } from "../Actions";
import { Form, Button, Container } from "react-bootstrap";
import "../App.css"
import { BrowserRouter as Router } from "react-router-dom";


function DataAnggur(){
    const data = Actions();
    return (

    <Provider value={data}> 
    <div className="">
    <Container style={{ marginTop: "100px" }} className="marhor">
        <h3 className="text-center mt-5">Data Anggur Kampung Anggur Plumbungan</h3>
        <UserList className="mt-5" />
        </Container>
      </div>
    </Provider>
    )
}


export default DataAnggur;