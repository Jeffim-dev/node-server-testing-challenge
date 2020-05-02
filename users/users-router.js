const express = require("express")
const users = require("./users-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await users.getAll())
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const user = await users.insert(req.body)
		res.status(201).json(user)
	} catch(err) {
		next(err)
	}
})

module.exports = router