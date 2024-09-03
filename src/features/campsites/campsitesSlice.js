import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteByID = (id) => {
    return CAMPSITES.find(campsite => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find(campsite => campsite.featured);
};