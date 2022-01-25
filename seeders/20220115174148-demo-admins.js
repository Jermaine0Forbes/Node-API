'use strict';

const casual = require("casual")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let data = [], admins;

    for (var i = 0; i < 100; i++) {
      admins = {
        first_name: casual.first_name,
        last_name: casual.last_name,
        email:casual.email ,
        password: casual.password,
        role: casual.integer(1,4),
        createdAt: casual.date(),
        updatedAt: casual.date()

      }
      data.push(admins)
    }
    await queryInterface.bulkInsert('Admins', data);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Admins', null, {});
  }
};
