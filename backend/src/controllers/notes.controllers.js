const notesCtrl = {}

notesCtrl.getNotes = (req, res) => res.json({ message: [] })

notesCtrl.createNote = (req, res) => res.json({ message: 'Note saved' })

notesCtrl.getNote = (req, res) => res.json({ message: 'Note saved' })

notesCtrl.updateNote = (req, res) => res.json({ message: 'Note saved' })

notesCtrl.deleteNote = (req, res) => res.json({ message: 'Note saved' })

module.exports = notesCtrl