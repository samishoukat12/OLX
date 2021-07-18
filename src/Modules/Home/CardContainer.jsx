import { Card, Container } from "react-bootstrap"
import { CustomHooks } from "../../Hooks/CustomHools"
import "./CardContainer.css"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { SwapSpinner } from "react-spinners-kit";
import Button from "@material-ui/core/Button"
// import AddItemModal from "../Profile/AddItemModal/AddItemModal"
import React, { useState } from "react";
import Heart from "react-animated-heart";
import { UseMyAds } from "./UseMyAds"

export default function CardContainer() {
  const [isClick, setClick] = useState(false);
  const[CardsAds,Loading]=UseMyAds()
  const[visible,loadMore]=CustomHooks()

const HeartButton=()=>{
 
    setClick(!isClick)

}
  return (
    <>
      <center> <Typography variant="h4" className="FeaturedItemText">Featured Items</Typography></center>
      {/* <Container><AddItemModal /></Container> */}
      <Container fluid className="container">
        {
          Loading && <div className="Loader" ><center><SwapSpinner size={100} color="#686769" loading={Loading} /></center></div>
        }

        {
          CardsAds.slice(0,visible).map((item) => {
            return (
              <>
              


              <Grid item xs={6} sm={4} lg={3} xl={3}>

                <div>

                  <Card className=" Card card  product-box" >

                    <div>
                      <div className="img-section">
                        <Card.Img variant="top" className=" card-img " src={item.image} />
                        {/* {Loading  (<Skeleton width="100%" height="50%" />) :( )} */}
                        {/* {item ? (
                          <Card.Img className=" card-img " src={item.AdsImg} />
                        ) : (
                          <Skeleton variant="rect" width={210} height={118} />
                        )} */}
                        <div class="salebadge">Featured</div>
                        <div className="Heartbadge"><Heart isClick={isClick} onClick={HeartButton}  /></div>
                        <div className="overlay">
                          <Button
                            variant="contained"
                            style={{ backgroundColor: "#002f34", color: "#FFFFFF" }}
                            className="bton"
                          >
                            Buy Now
                          </Button>
                        </div>

                      </div>
                    </div>
                    <Card.Body style={{ backgroundColor: "#EBEEEF" }}>
                      <Card.Title>RS:{item.Price}</Card.Title>
                      <Card.Text>{item.Description}</Card.Text>
                    </Card.Body>

                    <Card.Footer style={{ backgroundColor: "#EBEEEF" }}>
                      <Container>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                          <small className="">{item.Address}</small>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                          <small className="text-muted">{item.AdsTime}</small>
                        </Grid>
                      </Container>
                    </Card.Footer>
                  </Card>

                </div>

              </Grid>
              </>



            )
          })
        }
        {/* <AdsPrize/> */}
      </Container>
    </>
  )
}