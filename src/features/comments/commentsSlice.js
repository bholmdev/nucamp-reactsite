import { COMMENTS } from "../../app/shared/COMMENTS";

export const selectCommentsByCampsiteID = (campsiteID) => {
    return COMMENTS.filter(comment => comment.campsiteId === parseInt(campsiteID));
};