import { useContext, useState } from "react";
import { AppContext } from "../Context";
import { Table, Button, Form, Container } from "react-bootstrap";
import "../App.css";
import firebase from "../firebase";

const UserList = () => {
  const { users, userLength, editMode, cancelEdit, updateUser, deleteUser } =
    useContext(AppContext);

    // pas load image di set foto

  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});

  const [image , setImage] = useState('');

  const saveBtn = () => {
    updateUser(newData);
  };

  const handleChange = (e) =>{
    if(e.target.files[0]){
      setImage(e.target.files[0])
      // setNewData({
      //   ...newData,
      //   foto :e.target.files[0],
      // });
      // this.setState({
      // image: e.target.files[0]
    
  }
    // console.log(e.target.files[0])
}

  const handleUpload = () => {
    let file = image;
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var uploadTask = storageRef.child('anggur/' + file.name).put(file);

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) =>{
      var progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100
      // this.setState({progress})
    },(error) =>{
      throw error
    },() =>{
      // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{

      uploadTask.snapshot.ref.getDownloadURL().then((url) =>{
        setImage(url)
        setNewData({
          ...newData,
          foto :url,
        });
        console.log("urlnya ",url)
        // setImage("")
      })
    document.getElementById("file").value = null

   }
 )

  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (id, namaanggur, namailmiah, deskripsi, foto) => {
    if(image== '') {
      setNewData({ id, namaanggur, namailmiah, deskripsi, foto });
    } else {
      setNewData({ id, namaanggur, namailmiah, deskripsi, image });
    }

    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };

  return !userLength ? (
    <p>{userLength === null ? "Loading..." : "Please insert some anggur."}</p>
  ) : (
    <div className="">
      <Container style={{ marginTop: "50px" }} className="marhor">
        <Table size="sm" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>NamaIlmiah</th>
              <th>Deskripsi</th>
              <th>Foto</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({ id, namaanggur, namailmiah, deskripsi, foto, isEditing }) => {
                return isEditing === true ? (
                  <tr key={id}>
                    <td>
                      <input
                        className="form-control mt-3"
                        type="text"
                        defaultValue={namaanggur}
                        onChange={(e) => updateNewData(e, "namaanggur")}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control mt-3"
                        type="text"
                        defaultValue={namailmiah}
                        onChange={(e) => updateNewData(e, "namailmiah")}
                      />
                    </td>
                    <td>
                      <textarea
                        className="form-control mt-3"
                        type="text"
                        defaultValue={deskripsi}
                        onChange={(e) => updateNewData(e, "deskripsi")}
                      />
                    </td>
                    <td>
                      {/* <input
                        className="form-control mt-3"
                        type="text"
                        defaultValue={foto}
                        onChange={(e)=>{setImage(e.target.files[0])}}
                      /> */}

                      <img
                        className="ref"
                        src={image || foto || "https://via.placeholder.com/140x100"}
                        alt="Uploaded Images"
                        height="100"
                        width="140"
                      />

                      <label>
                        Pilih Foto
                        <input
                          type="file"
                          id="file"
                          onChange={(e) => handleChange(e)}
                        />
                      </label>

                      <Button
                        className="button"
                        variant="outline-primary"
                        onClick={() => handleUpload()}
                      >
                        Upload
                      </Button>
                    </td>

                    <td>
                      <Button
                        variant="success"
                        className="mt-3 w-100"
                        onClick={() => saveBtn()}
                      >
                        Save
                      </Button>
                      <Button
                        className="mt-3 w-100"
                        variant="outline-danger"
                        onClick={() => cancelEdit(id)}
                      >
                        Cancel
                      </Button>
                    </td>
                  </tr>
                ) : (
                  <tr key={id}>
                    <td className="h5">{namaanggur}</td>
                    <td className="h5">{namailmiah}</td>
                    <td className="h5">{deskripsi}</td>
                    <td>
                      <img
                        src={foto}
                        className="photo"
                        style={{ width: "100px" }}
                      ></img>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        className="w-100 mt-3"
                        onClick={() =>
                          enableEdit(
                            id,
                            namaanggur,
                            namailmiah,
                            deskripsi,
                            foto
                          )
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        className="mt-3 w-100"
                        onClick={() => deleteConfirm(id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserList;
