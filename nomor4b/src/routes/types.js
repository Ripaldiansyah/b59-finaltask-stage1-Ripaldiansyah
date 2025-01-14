const express = require("express");
const router = express.Router();

const {
  index,
  store,
  edit,
  destroy,
  show,
  renderAdd,
  renderEdit,
} = require("../controllers/TypeController");

router.get("/", index);
router.get("/edit/:id", renderEdit);
router.get("/add", renderAdd);
router.get("/:id", show);
router.post("/", store);
router.post("/edit/:id", edit);
router.post("/delete/:id", destroy);

module.exports = router;
