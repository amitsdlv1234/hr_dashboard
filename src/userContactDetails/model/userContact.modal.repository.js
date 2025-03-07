const UserContactDetails = require('../model/userContact.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class UserContactDetailsRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkUserContactDetailsExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await UserContactDetails.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If UserContactDetails is not found, return null
      }
    } catch (error) {
      console.error('Error checking UserContactDetails existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = UserContactDetailsRepository; // Export the class
