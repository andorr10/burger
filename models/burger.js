
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.insert("burgers", "burger_name", name, cb);
        // cb(res);

      // });
    },
    // this one below most likely needs to be fixed
    // updateOne: function(table, objColVals, condition, cb) {
    //   var queryString = "UPDATE " + table;
    //
    //   queryString += " SET ";
    //   queryString += objToSql(objColVals);
    //   queryString += " WHERE ";
    //   queryString += condition;
    //
    //   console.log(queryString);
    //   connection.query(queryString, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
    //
    //     cb(result);
    //   });
    // }

    update: function(id, cb) {
      var condition=id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;
