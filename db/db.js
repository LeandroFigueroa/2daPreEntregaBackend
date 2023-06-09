import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://admin:admin@backend.bi0kmfo.mongodb.net/coderBackend?retryWrites=true&w=majority'

try {
  await mongoose.connect(connectionString);
  console.log('MongoDB connection established');
} catch (error) {
  console.log(error);
}