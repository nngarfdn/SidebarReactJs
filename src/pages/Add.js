import React, { Component } from "react";
import firebase from "../firebase";
import {useState} from 'react';
import "../App.css"
import { Form, Button, Container } from "react-bootstrap";
import {
  Redirect,
  BrowserRouter,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
const axios = require("axios");


export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaanggur: "",
      namailmiah: "",
      deskripsi: "",
      foto: "",
      success: false,
      loggenIn: false,
      image: null,
      progress:0,
      downloadURL: null
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit(event) {
    console.log(this.state.namaanggur);
    console.log(this.state.namailmiah);
    console.log(this.state.deskripsi);
    console.log(this.state.foto);
    event.preventDefault();
  }

  handleChange = (e) =>{
    if(e.target.files[0]){
      this.setState({
      image: e.target.files[0]
    })
  }
    // console.log(e.target.files[0])
}

handleUpload = () =>{
  // console.log(this.state.image);
  let file = this.state.image;
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var uploadTask = storageRef.child('anggur/' + file.name).put(file);

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) =>{
      var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
      this.setState({progress})
    },(error) =>{
      throw error
    },() =>{
      // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{

      uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
        this.setState({
          foto : url
        
        })
      })
    document.getElementById("file").value = null

   }
 ) 
}


  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggenIn : false });
      } else {
        this.setState({ loggenIn : true });
      }
    });

  }



  handleSubmit(event) {

    const url = "https://nanang.sade.my.id/apianggur/tambahanggur.php";
    axios
      .post(url, {
        namaanggur: this.state.namaanggur,
        namailmiah: this.state.namailmiah,
        deskripsi: this.state.deskripsi,
        foto: this.state.foto,
      })
      .then((res) => {
        console.log(res);
        this.setState({ success: res.data.success });
      })
      .catch(function (err) {
        console.log(err);
        console.log(err.response);
      });
    event.preventDefault();

   
  }

  render() {
  //   console.log("Cek render",this.state.loggenIn)
  //   if (this.state.loggenIn){
      
  //     return <Redirect to="/admin"/>
  // }

      if(this.state.success){
        const result = alert("Berhasil Menambahkan")
        this.setState({ namaanggur : "" })
        this.setState({ namailmiah : "" })
        this.setState({ deskripsi : "" })
        this.setState({ foto : "" })
        this.setState({ success : false })

      }
    return (
    <div className="">

{/* <div className="App">
        <h4>upload image</h4>
        <label>
         Pilih Foto
        <input type="file" id="file" onChange={this.handleChange} />        
        </label>

        {this.state.progress}
        <Button className="button" onClick={this.handleUpload}>Upload</Button>
        <img
          className="ref"
          src={this.state.downloadURL || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="100"
          width="300"
        />
      </div> */}

      <Container style={{ marginTop: "100px" }} className="marhor">
        <Form>

          <Form.Group
            controlId="formBasicNamaAnggur"
            style={{ width: "100%"} ,{marginLeft:"5%" }}
          >
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama"
              name="namaanggur"
              value={this.state.namaanggur}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group
            controlId="formBasicNamaIlmiah"
            style={{ width: "100%"} ,{marginLeft:"5%" }}
          >
            <Form.Label>Nama Ilmiah</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama ilmiah"
              name="namailmiah"
              value={this.state.namailmiah}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDeskripsi" style={{ width: "100%"} ,{marginLeft:"5%" }}>

            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="Masukkan makna"
              name="deskripsi"
              value={this.state.deskripsi}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicFoto" style={{ width: "100%"} ,{marginLeft:"5%" }}>

          <label>
         Pilih Foto
        <input type="file" id="file" onChange={this.handleChange} />        
        </label>

        <Button className="button" variant="outline-primary" onClick={this.handleUpload}>Upload</Button>

        <img
          className="ref"
          src={this.state.foto || "https://via.placeholder.com/140x100"}
          alt="Uploaded Images"
          height="100"
          width="140"
        />
            {/* <Form.Label>Foto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan url foto"
              name="foto"
              value={this.state.foto}
              onChange={this.onChange}
            /> */}
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSubmit} className="btn btn-primary mr-xl-2 w-50 mb-4" style={{marginLeft:"25%" }}>
            Tambah
          </Button>
        </Form>
      </Container>
      </div>
    );
  }
}
