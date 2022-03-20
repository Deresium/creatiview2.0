'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.createTable('Contacts', {
                    contactId: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    name: {
                        type: Sequelize.STRING(256),
                        allowNull: false
                    },
                    firstName: {
                        type: Sequelize.STRING(256),
                        allowNull: true
                    },
                    email: {
                        type: Sequelize.STRING(1024),
                        allowNull: false
                    },
                    message: {
                        type: Sequelize.STRING(4000),
                        allowNull: false
                    },
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    }
                },{transaction: t}),

                queryInterface.createTable('Albums', {
                    albumId: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    name: {
                        type: Sequelize.STRING(256),
                        allowNull: false
                    },
                    order: {
                        type: Sequelize.INTEGER,
                        allowNull: false
                    },
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    }
                }, {transaction: t}),

                queryInterface.createTable('Pictures', {
                    pictureId: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    albumId: {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        references: {
                            model: {
                                tableName: 'Albums',
                                schema: 'public'
                            },
                            key: 'albumId'
                        }
                    },
                    aperture: {
                        type: Sequelize.STRING(16),
                        allowNull: true
                    },
                    speed: {
                        type: Sequelize.STRING(16),
                        allowNull: true
                    },
                    camera: {
                        type: Sequelize.STRING(64),
                        allowNull: true
                    },
                    iso: {
                        type: Sequelize.STRING(16),
                        allowNull: true
                    },
                    focalLength: {
                        type: Sequelize.STRING(16),
                        allowNull: true
                    },
                    order: {
                        type: Sequelize.INTEGER,
                        allowNull: false
                    },
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    }
                }, {transaction: t})
            ])
        });
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.dropTable('Contacts', {transaction: t}),
                queryInterface.dropTable('Pictures', {transaction: t}),
                queryInterface.dropTable('Albums', {transaction: t})
            ])
        });
    }
};
