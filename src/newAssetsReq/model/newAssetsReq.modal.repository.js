const newAssetsReq = require('./newAssetsReq.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class newAssetsReqRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checknewAssetsReqExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await newAssetsReq.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If newAssetsReq is not found, return null
      }
    } catch (error) {
      console.error('Error checking newAssetsReq existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = newAssetsReqRepository; // Export the class
