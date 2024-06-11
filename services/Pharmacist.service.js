const Pharmacist = require("../models/Pharmacist");
const CryptoJS = require("crypto-js");

class PharmacistService {
  async createPharmacist(pharmacistData) {
    const newPharmacist = new Pharmacist(pharmacistData);
    try {
      newPharmacist.password = CryptoJS.AES.encrypt(
        newPharmacist.password,
        process.env.PASS_SEC
      ).toString();
      const savedPharmacist = await newPharmacist.save();
      return savedPharmacist;
    } catch (err) {
      throw err;
    }
  }

  async updatePharmacist(id, updatedData) {
    try {
      const updatedPharmacist = await Pharmacist.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedPharmacist;
    } catch (err) {
      throw err;
    }
  }

  async deletePharmacist(id) {
    try {
      await Pharmacist.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getPharmacistById(id) {
    try {
      const pharmacist = await Pharmacist.findById(id);
      return pharmacist;
    } catch (err) {
      throw err;
    }
  }

  async getAllPharmacists() {
    try {
        const pharmacist = await Pharmacist.find();
        return pharmacist;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new PharmacistService();
