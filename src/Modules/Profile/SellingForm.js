import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, FormControl, Grid, InputLabel, makeStyles, Select, TextField, Typography } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "./SellingForm.css";
import { MenuItem } from "@material-ui/core";
import { UseSellingForm } from "./UseSellingForm";




const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

}));
export default function Profile() {
  const [loading, setLoading] = React.useState(false);
  const [Title, Description, Price, Cities, Category, setTitle, setDescription, setPrice, setCities, setCategory,handleChange,ctapostHandler] = UseSellingForm()



  const classes = useStyles();
  return (
    <>
      <Container>
        <center style={{ marginTop: 30 }}>
          <Typography>
            Post Your Product
          </Typography>
        </center>
        <Row>
          <Col className="Col" xl={12} lg={12} md={12} sm={12} sx={12}>
            <TextField id="Product-Title" label="Product Title" fullWidth="bool" variant="standard" value={Title} onChange={(e) => setTitle(e.target.value)} />
          </Col>
          <Col className="Col" xl={12} lg={12} md={12} sm={12} sx={12}>
            <TextField id="Description" label="Description" fullWidth="bool" variant="standard" value={Description} onChange={(e) => setDescription(e.target.value)} />
          </Col>
          <Col className="Col" xl={12} lg={12} md={12} sm={12} sx={12}>
            <TextField id="Price" label="Price" fullWidth="bool" variant="standard" value={Price} onChange={(e) => setPrice(e.target.value)} />
          </Col>
          <Col className="Col" xl={12} lg={12} md={12} sm={12} sx={12}>
            <Typography style={{ marginBottom: 20 }}>Upload Picture</Typography>
            <input onClick={handleChange} type="file" />
          </Col>
          <Col className="Col" xl={6} lg={6} md={6} sm={12} sx={12}>
            <FormControl variant="outlined" className={classes.formControl} fullWidth="bool">
              <InputLabel id="Sell-item-Category">Category</InputLabel>
              <Select
                labelId="Sell-item-Category"
                id="Sell-item-Category"
                label="Category"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="MobilePhone">Mobile Phone</MenuItem>
                <MenuItem value="Cars">Cars</MenuItem>
                <MenuItem value="Motorcycles">Motorcycles</MenuItem>
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="TV-Video-Audio">TV-Video-Audio</MenuItem>
                <MenuItem value="Tables">Tables</MenuItem>
                <MenuItem value="Land-&-Plots">Land & Plots</MenuItem>


              </Select>
              <p>{Category}</p>
            </FormControl>
          </Col>
          <Col className="Col" xl={6} lg={6} md={6} sm={12} sx={12}>
            <FormControl variant="outlined" className={classes.formControl} fullWidth="bool">
              <InputLabel id="Sell-item-Cities">Location</InputLabel>
              <Select
                labelId="Sell-item-Cities"
                id="Sell-item-Cities"
                value={Cities}
                label="Cities"
                onChange={(e) => setCities(e.target.value)}
              >
               <MenuItem value="Faisalabad">
                  Faisalabad
                </MenuItem>
                <MenuItem value="Lahore">
                  Lahore
                </MenuItem>
                <MenuItem value="Islamabad">
                  Islamabad
                </MenuItem>
                <MenuItem value="Multan">
                  Multan
                </MenuItem>
                <MenuItem value="Multan">
                  Peshawar
                </MenuItem>
                <MenuItem value="Multan">
                  Chiniot
                </MenuItem>
                <MenuItem value="Multan">
                  Sialkot
                </MenuItem> 
              </Select>
              <p>{Cities}</p>
            </FormControl>

          </Col>
          <Col className="Col">
            <Button className="ButtonPost" onClick={ctapostHandler}>Post</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
