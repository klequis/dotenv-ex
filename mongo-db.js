import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient

console.log('host:', process.env.DB_HOST)
console.log('username:', process.env.DB_USER)
console.log('password:', process.env.DB_PASS)
console.log('PORT:', process.env.PORT)

const mongoUrl = 'mongodb+srv://todo-db-admin:D92dARWONO0t16uF@todo-cluster0-ilc7v.mongodb.net/test?retryWrites=true'

const dbName = 'todo-dev'

let client

async function connectDB() {
  if (!client) {
    client = await MongoClient.connect(mongoUrl, { useNewUrlParser: true })
  }
  return {
      db: client.db(dbName),
      client: client
  }
}

export async function testConnection() {
  console.log('MongoDB connection test...')
  try {
    const { db, client } = await connectDB()
    const ret = await db.collection('todos').find({}).toArray()
    // console.log('SUCCESS', ret.length)
    console.log('MongoDB connection test:', 'success')
  }
  catch (e) {
    console.log('MongoDB connection test', 'failure')
    console.log('ERROR: dbFunctions.find', e.message)
  }
}

