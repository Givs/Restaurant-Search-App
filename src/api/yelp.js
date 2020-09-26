import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
         'Bearer 6C9i4xqUM-tCKb-YOoGRyIegQuPETRfdugeUznMuDoIYxXBKxZnhVRgGHAiMSq0G4T7Sjew5kCnG48OWaoVCCfuDS8-MT6Dvk-blBKqwXiRH7xJaR4Za2jZLYuJoX3Yx'
    }
});