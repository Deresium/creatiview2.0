'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.createTable('Users', {
                    userId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    email: {
                        type: DataTypes.STRING(512),
                        allowNull: false
                    },
                    googleId: {
                        type: DataTypes.STRING(1024),
                        allowNull: true
                    },
                    name: {
                        type: DataTypes.STRING(512),
                        allowNull: true
                    },
                    vatNumber: {
                        type: DataTypes.STRING(128),
                        allowNull: true
                    },
                    phone: {
                        type: DataTypes.STRING(128),
                        allowNull: true
                    },
                    role: {
                        type: DataTypes.STRING(16),
                        allowNull: true
                    },
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    }
                },{transaction: t}),

                queryInterface.createTable('CustomerProviders', {
                    customerProviderId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    name: {
                        type: DataTypes.STRING(1024),
                        allowNull: false
                    },
                    email: {
                        type: DataTypes.STRING(1024),
                        allowNull: true
                    },
                    phone: {
                        type: DataTypes.STRING(128),
                        allowNull: true
                    },
                    isCustomer: {
                        type: DataTypes.BOOLEAN,
                        allowNull: false
                    },
                    vatNumber: {
                        type: DataTypes.STRING(128),
                        allowNull: true
                    },
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    }
                },{transaction: t}),

                queryInterface.createTable('Addresses', {
                    addressId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    street: {
                        type: DataTypes.STRING(1024),
                        allowNull: true
                    },
                    number: {
                        type: DataTypes.STRING(16),
                        allowNull: true
                    },
                    town: {
                        type: DataTypes.STRING(1024),
                        allowNull: true
                    },
                    zipCode: {
                        type: DataTypes.STRING(16),
                        allowNull: true
                    },
                    additionalInfo: {
                        type: DataTypes.STRING(1024),
                        allowNull: true
                    },
                    userId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: {
                                tableName: 'Users',
                                schema: 'public'
                            },
                            key: 'userId'
                        }
                    },
                    customerProviderId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: {
                                tableName: 'CustomerProviders',
                                schema: 'public'
                            },
                            key: 'customerProviderId'
                        }
                    },
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    }
                },{transaction: t}),

                queryInterface.createTable('Accounts', {
                    accountId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    accountNumber: {
                        type: DataTypes.STRING(512),
                        allowNull: false
                    },
                    bic: {
                        type: DataTypes.STRING(64),
                        allowNull: true
                    },
                    customerProviderId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: {
                                tableName: 'CustomerProviders',
                                schema: 'public'
                            },
                            key: 'customerProviderId'
                        }
                    },
                    userId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: {
                                tableName: 'Users',
                                schema: 'public'
                            },
                            key: 'userId'
                        }
                    },
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    }
                }, {transaction: t}),

                queryInterface.createTable('Invoices', {
                    invoiceId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    number: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    bankFile: {
                        type: DataTypes.STRING(1024),
                        allowNull: true
                    },
                    invoiceFile: {
                        type: DataTypes.STRING(1024),
                        allowNull: true
                    },
                    year: {
                        type: DataTypes.STRING(8),
                        allowNull: false
                    },
                    date: {
                        type: DataTypes.DATE,
                        allowNull: false
                    },
                    limitDate: {
                        type: DataTypes.DATE,
                        allowNull: true
                    },
                    userId: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        references: {
                            model: {
                                tableName: 'Users',
                                schema: 'public'
                            },
                            key: 'userId'
                        }
                    },
                    customerProviderId: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        references: {
                            model: {
                                tableName: 'CustomerProviders',
                                schema: 'public'
                            },
                            key: 'customerProviderId'
                        }
                    },
                    userAccountId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: {
                                tableName: 'Accounts',
                                schema: 'public'
                            },
                            key: 'accountId'
                        }
                    },
                    customerProviderAccountId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: {
                                tableName: 'Accounts',
                                schema: 'public'
                            },
                            key: 'accountId'
                        }
                    },
                    userAddressId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: {
                                tableName: 'Addresses',
                                schema: 'public'
                            },
                            key: 'addressId'
                        }
                    },
                    customerProviderAddressId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: {
                                tableName: 'Addresses',
                                schema: 'public'
                            },
                            key: 'addressId'
                        }
                    },
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    }
                }, {transaction: t}),

                queryInterface.createTable('InvoiceLines', {
                    invoiceLineId: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    amount: {
                        type: DataTypes.NUMERIC,
                        allowNull: false
                    },
                    vat: {
                        type: DataTypes.NUMERIC,
                        allowNull: true
                    },
                    deductible: {
                        type: DataTypes.NUMERIC,
                        allowNull: true
                    },
                    invoiceId: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        references: {
                            model: {
                                tableName: 'Invoices',
                                schema: 'public'
                            },
                            key: 'invoiceId'
                        }
                    },
                    createdAt: {
                        type: Sequelize.DATE
                    },
                    updatedAt: {
                        type: Sequelize.DATE
                    }
                },{transaction: t})
            ])
        });
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.dropTable('InvoiceLines', {transaction: t}),
                queryInterface.dropTable('Invoices', {transaction: t}),
                queryInterface.dropTable('Accounts', {transaction: t}),
                queryInterface.dropTable('Addresses', {transaction: t}),
                queryInterface.dropTable('CustomerProviders', {transaction: t}),
                queryInterface.dropTable('Users', {transaction: t})
            ])
        });
    }
};
