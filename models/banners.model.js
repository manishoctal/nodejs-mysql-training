const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Banners = sequelize.define('banners', {
        title: DataTypes.STRING,
        image: DataTypes.STRING,
        status: {
            type: DataTypes.ENUM('active','inactive','blocked'),
            defaultValue: 'inactive'
        }
    });
    return Banners;
}