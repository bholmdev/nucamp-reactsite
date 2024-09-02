import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteByID = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
};


// User later to load page to a random site.
// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// };