const database = require("./config/db");
const Admin = require("./models/admin");
const bcrypt = require("bcrypt");

const importData = () => {
  const newAdmin = new Admin({
    name: "Admin User",
    username: "admin",
    password: "admin123",
    role: "admin",

  });

  //hash password
  bcrypt.genSalt(10, (err, salt) =>
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if (err) throw err;
      //save pass to hash
      newAdmin.password = hash;
      //save user
      newAdmin
        .save()
        .then((value) => {
          console.log(value);
         process.exit(0);
        })
        .catch((value) =>{
            console.log(value);
            process.exit(1);
        } );
    })
  );
};

importData();