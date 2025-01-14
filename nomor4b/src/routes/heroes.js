const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const {
  index,
  store,
  edit,
  destroy,
  show,
  renderAdd,
  renderEdit,
} = require("../controllers/HeroController");
const upload = multer({ storage: storage });
router.get("/", index);
router.get("/add-hero", renderAdd);
router.get("/edit/:id", renderEdit);
router.get("/:id", show);
router.post("/", upload.single("imageUrl"), store);
router.post("/edit/:id", upload.single("imageUrl"), edit);
router.post("/delete/:id", destroy);

module.exports = router;
