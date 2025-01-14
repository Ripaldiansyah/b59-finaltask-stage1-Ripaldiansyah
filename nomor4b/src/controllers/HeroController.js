const { Hero, Type, User } = require("../models");

async function index(req, res) {
  try {
    const user = req.session.user;
    const heroes = await Hero.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
        },

        {
          model: Type,
        },
      ],
    });

    return res.render("index", { user, heroes });
  } catch (error) {
    // console.log(error);
  }
}
async function renderAdd(req, res) {
  try {
    const user = req.session.user;
    if (!user) return res.redirect("/auth/login");
    const types = await getType();

    return res.render("add-hero", { user, types });
  } catch (error) {
    // console.log(error);
  }
}
async function renderEdit(req, res) {
  try {
    const user = req.session.user;
    if (!user) return res.redirect("/auth/login");
    const myHero = await findById(req);

    if (myHero.userId !== user.id) return res.redirect("/");

    const types = await getType();

    return res.render("edit-hero", { user, types, myHero });
  } catch (error) {
    // console.log(error);
  }
}

async function getType() {
  const types = await Type.findAll({
    order: [["name", "ASC"]],
  });

  return types;
}

async function show(req, res) {
  try {
    const user = req.session.user;
    const hero = await findById(req);
    if (!hero) return res.redirect("/");

    return res.render("hero", { user, hero });
  } catch (error) {
    // console.log(error);
  }
}

async function store(req, res) {
  try {
    const user = req.session.user;
    if (!user) return res.redirect("/auth/login");

    const hero = await findByName(req);

    if (hero) return handleRegistered(res, user, null, true);

    const { heroName, heroType } = req.body;
    const { filename } = req.file;
    const photo = `${process.env.BASE_URL}/images/${filename}`;

    await Hero.create({
      name: heroName,
      typeId: heroType,
      photo,
      userId: user.id,
    });

    res.redirect("/");
  } catch (error) {
    // console.log(error);
  }
}
async function edit(req, res) {
  try {
    const user = req.session.user;
    if (!user) return res.redirect("/login");

    const hero = await findByName(req);
    const myHero = await findById(req);

    if (hero) {
      if (hero.id !== myHero.id)
        return await handleRegistered(res, user, myHero);
    }

    if (myHero.userId !== user.id) return handleUserNotValid(res);

    const { heroName, heroType } = req.body;
    let photo;
    if (req.file) {
      const { filename } = req.file;
      photo = `${process.env.BASE_URL}/images/${filename}`;
    }

    await Hero.update(
      {
        name: heroName ?? myHero.name,
        typeId: heroType ?? myHero.typeId,
        photo: photo ?? myHero.photo,
        userId: user.id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    console.log("test edit");

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
}

async function destroy(req, res) {
  try {
    await Hero.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
}

async function handleRegistered(res, user, myHero, isAdd) {
  const response = {
    message: "Hero sudah ada",
    status: "failed",
  };
  const types = await getType();
  if (isAdd) {
    return res.render("add-hero", { response, user, types });
  }
  return res.render("edit-hero", { response, user, types, myHero });
}
function handleUserNotValid(res) {
  const response = {
    message: "Anda tidak bisa mengedit yang bukan punya anda",
    status: "failed",
  };
  return res.render("edit-hero", { response });
}

async function findById(req) {
  try {
    const hero = await Hero.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },

        {
          model: Type,
        },
      ],
    });

    return hero;
  } catch (error) {
    // console.log(error);
  }
}

async function findByName(req) {
  try {
    const hero = await Hero.findOne({
      where: { name: req.body.heroName },
    });

    return hero ? hero : null;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  index,
  store,
  edit,
  show,
  destroy,
  renderAdd,
  renderEdit,
};
