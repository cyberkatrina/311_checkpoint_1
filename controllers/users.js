const users = require('../data/index')
const sampleUser = require('../data/sampleUser')

const listUsers = (req, res) => {
  res.json(users)
}

const showUser = (req, res) => {
  let showThis = users.find((user) => user.id == req.params.id)
  if (!showThis) {
    res.status(404).json({ msg: `no user with the id of ${req.params.id}`})
  }
  let showIndex = users.indexOf(showThis)
  res.json(users[showIndex])
}

const createUser = (req, res) => {
  let id = users[users.length - 1].id
  sampleUser.id = id += 1
  users.push(sampleUser)
  res.send('success')
}

const updateUser = (req, res) => {
  let putThis = users.find((user) => user.id == req.params.id)
  if (!putThis) {
    res.status(400).json({ msg: `no user with the id of ${req.params.id}`})
  }
  sampleUser.id = putThis.id
  let putIndex = users.indexOf(putThis)
  users[putIndex] = sampleUser
  res.send('updated')
}

const deleteUser = (req, res) => {
  let deleteThis = users.find((user) => user.id == req.params.id)
  if (!deleteThis) {
    res.status(400).json({ msg: `no user with the id of ${req.params.id}`})
  }
  let delIndex = users.indexOf(deleteThis)
  users.splice(delIndex, 1)
  res.send('deleted')
}


module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }