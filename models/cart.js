module.exports = function (sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
      // firstName (VARCHAR, NOT NULL, between 1-30 characters)
      name: {
        type: DataTypes.STRING, //VARCHAR
        allowNull: false, //NOT NULL 
        validate: {
          len: [1, 30]
  
        }
  
      },
      // Text (VARCHAR, NOT NULL, between 1-30 characters)
      text: {
        type: DataTypes.STRING, //VARCHAR
        allowNull: false, //NOT NULL 
        validate: {
          len: [1, 30]
  
        }
  
      },
      // Category (VARCHAR, Default value "Personal")       
      category: {
        type: DataTypes.STRING, //VARCHAR
        defaultValue: "Personal" //Sets default value as a string 
  
      },
      // quantity (VARCHAR, NULL, length 10 characters, numbers only)
      quantity: {
        type: DataTypes.STRING,
        validate: {
          isNumeric: true
        }
  
  
      },
      // price (VARCHAR, NULL, must be valid email format)
      price: {
  
        type: DataTypes.STRING,
  
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
  
    });
    // be sure to return the model!
    return Cart;
  };