const mongoose = require('mongoose');

exports.clientPromise = mongoose
  .connect(
    'mongodb+srv://pierre:qwe@cluster1.iikujit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'
  )
  .then(() => console.log('connexion db ok !'))
  .catch((err) => console.log(err));
