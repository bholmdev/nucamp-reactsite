import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
    const campsites = selectAllCampsites();

    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col
                        md="6"
                        className="s-4 mb-4"
                        key={campsite.id}
                    >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;