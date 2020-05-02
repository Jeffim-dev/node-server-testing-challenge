const db = require("../data/config")

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
}

async function insert(user) {
  const [id] = await db("users").insert(user)
  return findById(id)
}

async function update(id, changes) {
  await db("users").update(changes).where("id", id)
  return findById(id)
}

function remove(id) {
  return db("users").where("id", id).del()
}

function getAll() {
  return db("users")
}

function findById(id) {
  return db("users")
    .where("id", id)
    .first()
}
