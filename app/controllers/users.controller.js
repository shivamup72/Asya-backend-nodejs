const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;
const crypto = require("crypto");
const saltRounds = 10;
// Create and Save a new Tutorial
exports.create = async (req, res) => {
  console.log("first", req.body);
  let dd = await Users.findOne({ where: { email: req.body.email } });
  console.log("dd", dd);
  if (dd) {
    res.status(400).send({
      message: "Allready SIGNUP WITH THIS EMAIL ID",
      status: false,
    });
  } else {
    console.log("first,", req.body);
    // const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const encryptedPassword = crypto
      .createHash("sha1")
      .update(req.body.password)
      .digest("hex");
    if (
      !req.body.first &&
      !req.body.last &&
      !req.body.email &&
      //!req.body.phone &&
      !req.body.password
    ) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    // Create a Tutorial
    const users = {
      name:
        req.body.first === undefined
          ? " "
          : req.body.first + " " + req.body.last === undefined
          ? " "
          : req.body.last,
      email: req.body.email,
      // phone: req.body.phone,
      password: encryptedPassword,
      // status: req.body.status,
      //  thumbnail:'placeholder.png',
      // // role_id: req.body.role_id,
      // createdAt:Date.now(),
      // updatedAt:Date.now()
    };
    // Save Tutorial in the database
    Users.create(users)
      .then((data) => {
        res.status(500).send({
          message: "signup successfully.",
          data: { data },
          status: true,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the testing.",
        });
      });
  }
};

/////
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Users.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.updatepassword = async (req, res) => {
  console.log("first", req.body);
  const encryptedPassword = crypto
    .createHash("sha1")
    .update(req.body.password)
    .digest("hex");
  let dd = await Users.findOne({
    where: { password: encryptedPassword, id: req.body.id },
  });
  console.log("dd", dd);
  if (!dd) {
    res.status(400).send({
      message: "User Not Found",
      status: false,
    });
  } else {
    console.log("first,", req.body);
    const newencryptedPassword = crypto
      .createHash("sha1")
      .update(req.body.newpassword)
      .digest("hex");
    console.log("newencryptedPassword", newencryptedPassword);
    if (!req.body.newpassword) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    Users.update(
      {
        password: newencryptedPassword,
      },
      {
        where: { id: req.body.id },
      }
    )
      .then((data) => {
        res.status(500).send({
          message: "update password successfully.",
          // data: {data},
          status: true,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the testing.",
        });
      });
  }
};

exports.updateemail = async (req, res) => {
  console.log("first", req.body);

  let ff = await Users.findOne({
    where: { email: req.body.email },
  });

  if (ff) {
    res.status(500).send({
      message: "This Email ID allReady Register.",
      // data: {data},
      status: false,
    });
  } else {
    let dd = await Users.findOne({
      where: { email: req.body.email, id: req.body.id },
    });
    console.log("dd", dd);
    if (dd) {
      res.status(400).send({
        message: "Email ID allready Present",
        status: false,
      });
    } else {
      if (!req.body.email) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
      }

      Users.update(
        {
          email: req.body.email,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then((data) => {
          if (data[0] === 1) {
            Users.findOne({
              where: { id: req.body.id },
            })
              .then((data) => {
                res.send({
                  message: "Update Email Succeed!",
                  status: true,
                  data: {
                    id: data.dataValues.id,
                    first:
                      data.dataValues.name.split(" ")[0] === null
                        ? null
                        : data.dataValues.name.split(" ")[0],
                    last:
                      data.dataValues.name.split(" ")[1] === null
                        ? null
                        : data.dataValues.name.split(" ")[1],
                    phone: data.dataValues.phone,
                    email: data.dataValues.email,
                    thumbnail: data.dataValues.thumbnail,
                  },
                });
              })
              .catch((err) => {
                res.status(500).send({
                  message:
                    err.message ||
                    "Some error occurred while retrieving tutorials.",
                });
              });
          } else {
            res.status(400).send({
              status: false,
              message: "Email update unsuccessfull",
            });
          }
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while updating email.",
          });
        });
    }
  }
};

exports.updatename = async (req, res) => {
  console.log("dd", req.body);
  let first = req.body.first === null ? "" : req.body.first;
  let last = req.body.last === null ? "" : req.body.last;
  let name = first + " " + last;
  console.log("name", name);
  let dd = await Users.findOne({
    where: { name: name, id: req.body.id },
  });

  if (dd) {
    res.status(400).send({
      message: "Name AllReady Present",
      status: false,
    });
  } else {
    if (!name) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    Users.update(
      {
        name: name,
      },
      {
        where: { id: req.body.id },
      }
    )
      .then((data) => {
        if (data[0] === 1) {
          Users.findOne({
            where: { id: req.body.id },
          })
            .then((data) => {
              res.send({
                id: data.dataValues.id,
                first:
                  data.dataValues.name.split(" ")[0] === null
                    ? null
                    : data.dataValues.name.split(" ")[0],
                last:
                  data.dataValues.name.split(" ")[1] === null
                    ? null
                    : data.dataValues.name.split(" ")[1],
                phone: data.dataValues.phone,
                email: data.dataValues.email,
                thumbnail: data.dataValues.thumbnail,
              });
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message ||
                  "Some error occurred while retrieving tutorials.",
              });
            });
        } else {
          res.status(400).send({
            status: false,
            message: "name update unsuccessfull",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while updating email.",
        });
      });
  }
};
