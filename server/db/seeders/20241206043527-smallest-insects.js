'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Insects', [
      {
        name: 'Fairyfly',
        description: 'A type of parasitic wasp.',
        territory: 'Worldwide',
        fact: 'They are among the smallest insects in the world.',
        millimeters: 0.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Western Pygmy Blue Butterfly',
        description: 'One of the smallest butterflies.',
        territory: 'Southwestern USA',
        fact: 'Its wingspan can be as small as 12 mm.',
        millimeters: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Insects', {
      name: [
        'Fairyfly',
        'Western Pygmy Blue Butterfly'
      ]
    })
  }
};
