const express = require("express");
const router = express.Router();

const songController = require("../app/controllers/SongController");

// [Get] /song/create
router.get("/create",songController.create);

// [POST] /song/create
router.post("/store",songController.store);

// [GET] /song/:slug
router.get("/:slug",songController.show);



module.exports = router;
