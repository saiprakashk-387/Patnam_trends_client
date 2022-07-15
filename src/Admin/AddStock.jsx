import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const AddStockForm = () => {
  const [material, setMaterial] = React.useState("");
  const [cloth, setCloth] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [file, setfile] = React.useState([]);
  const [image, setImage] = React.useState("");
  const [url, setUrl] = React.useState('');

  const handleImage = (e) => {
    // setfile(e.target.files);
    setImage(e.target.files);
  };
console.log("image",image.name);
  const deleteImage = (indexval) => {
    let allUsers = [...file];
    setfile(allUsers.filter((user, index) => index !== indexval));
  };
  const Input = styled("input")({
    display: "none",
  });
  const uploadImage = () => {
    setStatus(true);
    const data = new FormData();
    for (let i = 0; i < image.length; i++) {
      data.append("file", image[i]);
      // data.append("file", image);
    }

    data.append("upload_preset", "lisuczwe");
    data.append("cloud_name", "dignfufky");
    fetch("https://api.cloudinary.com/v1_1/dignfufky/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("dasta", data);
        setUrl(data.url);
        setStatus(false);
      })
      .catch((err) => console.log(err));
  };
  console.log("url", url);
  const uploadStock = () => {
    console.log("upload", material, cloth, price, status, file);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 0, width: "100%" },
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
        >
          <h4>Add Products</h4>
          <FormControl>
            <InputLabel id="demo-select-small">Material Type</InputLabel>
            <Select
              value={material}
              label="Material Type"
              onChange={(e) => {
                setMaterial(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"dress"}>Dress</MenuItem>
              <MenuItem value={"saree"}>Saree</MenuItem>
              <MenuItem value={"hs"}>HS</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-select-small">Cloth Type</InputLabel>
            <Select
              value={cloth}
              label="Cloth Type"
              onChange={(e) => {
                setCloth(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"cotton"}>Cotton</MenuItem>
              <MenuItem value={"nylon"}>Nylon</MenuItem>
              <MenuItem value={"polyster"}>Polyster</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-select-small">Price</InputLabel>
            <Select
              value={price}
              label="Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={500}>500</MenuItem>
              <MenuItem value={550}>550</MenuItem>
              <MenuItem value={600}>600</MenuItem>
              <MenuItem value={650}>650</MenuItem>
              <MenuItem value={700}>700</MenuItem>
              <MenuItem value={750}>750</MenuItem>
              <MenuItem value={800}>800</MenuItem>
              <MenuItem value={8500}>850</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-select-small">Status</InputLabel>
            <Select
              value={status}
              label="Status"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={"available"}>Available</MenuItem>
              <MenuItem value={"vary_soon"}>Very Soon</MenuItem>
              <MenuItem value={"not_available"}>Not Available</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              multiple
              onChange={(e) => handleImage(e)}
            />
            {/* Add Images */}
            <IconButton
              color="secondary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera sx={{ width: 50, height: 50 }} />
            </IconButton>
          </label>
          {
            <span onClick={uploadImage}>
              {url ? (
                <Button color="success">Photo Uploaded</Button>
              ) : image ? (
                <Button variant="outlined">Upload Photo</Button>
              ) : (
                <Button variant="outlined" disabled>
                  Upload Photo
                </Button>
              )}
            </span>
          }
        </Box>
      </Box>
      {file.length >= 1 && (
        <div style={{ width: "100%" }}>         
          {Object.entries(file).map((val, i) => {
            return (
              <p style={{ display: "inline-block" }}>
                <img
                  style={{
                    objectFit: "contain",
                    width: "300px",
                    height: "250px",
                  }}
                  alt="not fount"
                  src={URL.createObjectURL(val[1])}
                />
                <Button onClick={() => deleteImage(i)}>
                  {" "}
                  <DeleteIcon />{" "}
                </Button>
              </p>
            );
          })}
        </div>
      )}
      {file.length >= 1 && (
        <Button variant="outlined" color="success" onClick={uploadStock}>
          Upload {`(${file.length}  files)`}
        </Button>
      )}
    </div>
  );
};

export default AddStockForm;