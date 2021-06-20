import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../../Redux/Actions/Actions";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import { Divider } from "@material-ui/core";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { FetchProfileAction } from "../../Redux/Actions/Actions";

import DummyTable from "./AddItemModal/DummyTable";
import AddItemFields from "./AddItemModal/AddItemFields";

export default function Profile() {
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();
  const users = useSelector((store) => store.FetchProfileReducer.users);
  console.log("profile", users);
  useEffect(() => {
    dispatch(FetchProfileAction(setLoading));
  }, []);
  let history = useHistory();

  const doUserLogout = () => {
    dispatch(doLogout());
    history.push("/login");
  };
  return (
    <>
      <Container>
        <Row>
          <Col xl={4} lg={4} md={4} sm={3} xs={12}>
            {users.map((items) => {
              return (
                <Container className="ProfileContainer">
                  <center>
                    <div></div>
                    <div className="EditButton">
                      <Button className="EditButton">
                        {" "}
                        <EditSharpIcon />
                      </Button>
                    </div>
                    <img
                      src={items.AdsImg}
                      className="ProfileImg"
                      alt="broken-img"
                    />
                    <Typography className="ProfileName">
                      Name: {items.email}
                    </Typography>
                    <Typography className="ProfileName1">Email: </Typography>
                  </center>
                </Container>
              );
            })}
          </Col>
          <Divider />
          <Col xl={8} lg={8} md={8} sm={9} xs={12}>
            <Container style={{ float: "right", display: "flex" }}>
              <div>
                <AddItemFields  />
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Button onClick={doUserLogout}>Logout</Button>
    </>
  );
}
