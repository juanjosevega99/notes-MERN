const mongoose = require('mongoose')

const URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(URI, {
  useNewUrlParser: true,
  userCreateIndex: true
})

const connection = mongoose.connection

connection.once('open', () => {
  console.log('[DB] Connected successfully')
})