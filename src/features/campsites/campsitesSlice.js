import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteByID = (id) => {
    return CAMPSITES.find(campsite => campsite.id === id);
};

export const selectRandomCampsite = () => {
    return Math.floor(Math.random() * CAMPSITES.length);
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find(campsite => campsite.featured);
};