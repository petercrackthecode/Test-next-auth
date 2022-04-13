const express = require("express");
const { getSession } = require("next-auth/react");
const router = express.Router();

router.get("/next-auth", async (req, res) => {
  const session = await getSession({ req });

  if (session) res.status(200).json({ ok: true, session });
  else res.status(401).json({ ok: false, message: "Unauthenticated" });
});

module.exports = router;
