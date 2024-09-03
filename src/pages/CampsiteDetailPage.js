import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteByID } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";

const CampsiteDetailPage = () => {
    const { campsiteID } = useParams();
    const campsite = selectCampsiteByID(campsiteID);

    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteID={campsiteID} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;