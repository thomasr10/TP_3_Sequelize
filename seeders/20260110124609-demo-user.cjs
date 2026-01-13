'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const hash = await bcrypt.hash('Password123!', 10);
    
    await queryInterface.bulkInsert('Users', [
  {
    username: "thomas01",
    email: "thomas01@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "marie02",
    email: "marie02@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "alex03",
    email: "alex03@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "julie04",
    email: "julie04@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "nathan05",
    email: "nathan05@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "emma06",
    email: "emma06@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "lucas07",
    email: "lucas07@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "lea08",
    email: "lea08@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "max09",
    email: "max09@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "sarah10",
    email: "sarah10@example.com",
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date()
  }
], { });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('User', null, {});
  }
};
