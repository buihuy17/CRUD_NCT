const express = require("express");
const router = express.Router();

const songController = require("../app/controllers/SongController");

// [Get] /song/create
router.get("/create",songController.create);

// [POST] /song/create
router.post("/store",songController.store);

// [GET] /song/:slug
router.get("/:slug",songController.show);

// [GET] /song/:id/edit
router.get("/:id/edit",songController.edit);

// [PUT] /song/:id
router.put("/:id",songController.update);

// [patch] /song/:id
router.patch("/:id/restore",songController.restore);

// [delete] /song/:id
router.delete("/:id",songController.delete);

//[Delete] /song/:id//force
router.delete("/:id/force",songController.forceDelete);



module.exports = router;
