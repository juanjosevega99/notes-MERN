const notesCtrl = {}

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find()
  res.json(notes)
}



notesCtrl.getNote = (req, res) => res.json({ message: 'Note saved' })

notesCtrl.updateNote = (req, res) => res.json({ message: 'Note saved' })

notesCtrl.deleteNote = (req, res) => res.json({ message: 'Note saved' })

module.exports = notesCtrl