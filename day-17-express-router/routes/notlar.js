const express = require("express");

const {
    tumNotlariGetir,
    tekNotuGetir,
    notEkle,
    notuGuncelle,
    notuSil
} = require("../controllers/notlarController");

const router = express.Router();

router.get("/", tumNotlariGetir);
router.post("/", notEkle);
router.get("/:id", tekNotuGetir);
router.patch("/:id", notuGuncelle);
router.delete("/:id", notuSil);

module.exports = router;