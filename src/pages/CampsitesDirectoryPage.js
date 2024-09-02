import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsiteByID } from "../features/campsites/campsitesSlice";

// keep to change initial campsite to a random one
// import { selectRandomCampsite } from "../features/campsites/campsitesSlice";

const CampsitesDirectoryPage = () => {
    const [campsiteID, setCampsiteID] = useState(0);
    const selectedCampsite = selectCampsiteByID(campsiteID);    

    return (
        <Container>
            <Row>
                <Col sm="5" md="7">
                    <CampsitesList setCampsiteID={setCampsiteID} />
                </Col>
                <Col sm="7" md="5">
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;