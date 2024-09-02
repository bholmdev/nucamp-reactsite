import { Card, CardTitle, CardImg, CardText, CardBody, Col } from "reactstrap";

const CampsiteDetail = ({ campsite }) => {
    const { image, name, description } = campsite;

    return (
        <Col ms="12" className="m-4">
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;