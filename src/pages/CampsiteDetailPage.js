import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteByID } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const CampsiteDetailPage = () => {
    const { campsiteID } = useParams();
    const campsite = selectCampsiteByID(campsiteID);

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteID={campsiteID} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;