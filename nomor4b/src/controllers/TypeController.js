const { Type, User } = require("../models");

async function renderAdd(req, res) {
  try {
    const user = req.session.user;
    if (!user) return res.redirect("/auth/login");
    const types = await getAll();
    return res.render("add-type", { user, types });
  } catch (error) {
    console.log(error);
  }
}
async function renderEdit(req, res) {
  try {
    const user = req.session.user;
    if (!user) return res.redirect("/auth/login");
    const types = await getAll();
    const type = await findById(req);
    return res.render("edit-type", { user, types, type });
  } catch (error) {
    console.log(error);
  }
}

async function index(req, res) {
  try {
    const user = req.session.user;
    const types = await getAll();
    return res.render("type", { user, types });
  } catch (error) {
    console.log(error);
  }
}

async function getAll() {
  const type = await Type.findAll({
    order: [["createdAt", "DESC"]],

    include: [
      {
        model: User,
      },
    ],
  });

  return type;
}

async function show(req, res) {
  try {
    const user = req.session.user;
    const type = await findById(req);

    return res.render("type", { user, type });
  } catch (error) {
    console.log(error);
  }
}

async function store(req, res) {
  try {
    const user = req.session.user;
    if (!user) return res.redirect("/auth/login");

    const type = await findByName(req);
    if (type) return handleRegistered(res);

    const { name } = req.body;

    await Type.create({
      name,
      userId: user.id,
    });

    res.redirect("/type/add");
  } catch (error) {
    console.log(error);
  }
}
async function edit(req, res) {
  try {
    const user = req.session.user;
    if (!user) return res.redirect("/login");

    const type = await findByName(req);
    const myType = await findById(req);
    if (type) {
      if (type.id !== myType.id) return handleRegistered(res);
    }
    console.log("ini isi bodynya", req.body);
    if (myType.userId !== user.id) return handleUserNotValid(res);

    const { name } = req.body;

    await Type.update(
      {
        name: name ?? myType.name,
        userId: user.id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.redirect("/type/add");
  } catch (error) {
    console.log(error);
  }
}

async function destroy(req, res) {
  try {
    await Type.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/type/add");
  } catch (error) {
    console.log(error);
  }
}

function handleRegistered(res) {
  const response = {
    message: "Type sudah ada",
    status: "failed",
  };
  return res.render("add-type", { response });
}
function handleUserNotValid(res) {
  const response = {
    message: "Anda tidak bisa mengedit yang bukan punya anda",
    status: "failed",
  };
  return res.render("edit-type", { response });
}

async function findById(req) {
  try {
    const type = await Type.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    return type;
  } catch (error) {
    console.log(error);
  }
}

async function findByName(req) {
  try {
    const type = await Type.findOne({
      where: { name: req.body.name },
      raw: true,
    });

    return type ? type : null;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  index,
  store,
  edit,
  show,
  renderEdit,
  destroy,
  renderAdd,
};
