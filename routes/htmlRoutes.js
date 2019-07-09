var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Clown.findAll({}).then(function (dbClowns) {
      res.render("index", {
        msg: "The killer clown apocalypse storE",
 //add_table_cart//
        examples: dbClowns

      });
    });
  });

  app.get("/clowns/new", function(req, res) {
    res.render("form");
});

  app.get("/login", function(req, res){

    res.render("login");
  });

  app.get("/food", function (req, res) { //references path to hbs file under views: /food.handlebars
    db.Clown.findAll({ where: { category: "food" } }).then(function (db_table_clowns_cat_food) { // db."" must match var "Clown" in models js file then function can be called whatever you want it to be. 
      res.render("food", { // the render must match with "" the path on app.get /food
        each_food: db_table_clowns_cat_food // "each_food" matches {{#each each_food}} on food.hbs
      });
    });
  });

  

  app.get("/gear", function (req, res) {

    db.Clown.findAll({ where: { category: "gear" } }).then(function (db_table_clowns_cat_gear) {  // db."" must match var "Clown" in models js file then function can be called whatever you want it to be
      res.render("gear", {// the render must match with "" the path on app.get /gear
        each_gear: db_table_clowns_cat_gear

      });
    });
  });
  app.get("/weapons", function (req, res) {
    db.Clown.findAll({ where: { category: "weapons" } }).then(function (db_table_clowns_cat_weapons) {
      res.render("weapons", {
        each_weapon: db_table_clowns_cat_weapons
      });
    });
  });

  app.get("/cart", function (req, res) {
    db.Cart.findAll({}).then(function (db_table_carts) {
      res.render("cart", {
      cart_items: db_table_carts //cart_items refers to cart.hbs and the each that cart.hbs is pulling
      });
    });
  });


  // Load product page and pass in an example by id
  app.get("/product/:id", function (req, res) { // this creates the route that hbs files refer to regarding the href link in the particular hbs file
    db.Clown.findOne({ where: { id: req.params.id } }).then(function (clowns_item_detail) {
      res.render("item", { //references name of the HBS page you are pointing
        clowns_item: clowns_item_detail
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};
