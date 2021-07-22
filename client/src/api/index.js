import axios from 'axios';

const url_users = 'http://localhost:5000/signUp';
const url_adSpots = 'http://localhost:5000/adSpots';
const url_campaigns = 'http://localhost:5000/campaigns';
const url_designs = 'http://localhost:5000/designs';
const url_partners = 'http://localhost:5000/partners';
const url_reviews = 'http://localhost:5000/reviews';

export const fetchUsers = () => axios.get(url_users);
export const createUser = (newUser) => axios.post(url_users, newUser);

export const fetchAdSpots = () => axios.get(url_adSpots);
export const createAdSpot = (newAdSpot) => axios.post(url_adSpots, newAdSpot);

export const fetchCampaigns = () => axios.get(url_campaigns);
export const createCampaign = (newCampaign) => axios.post(url_campaigns, newCampaign);

export const fetchDesigns = () => axios.get(url_designs);
export const createDesign = (newDesign) => axios.post(url_designs, newDesign);

export const fetchPartners = () => axios.get(url_partners);
export const createPartner = (newPartner) => axios.post(url_partners, newPartner);

export const fetchReviews = () => axios.get(url_reviews);
export const createReview = (newReview) => axios.post(url_reviews, newReview);