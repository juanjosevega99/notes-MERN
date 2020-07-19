const { Router } = require('express')
const router = Router()

const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controllers')

router.route('/')
  .get(getNotes)
  .get(createNote)

router.route('/:id')
  .get()
  .put()
  .delete()

module.exports = router