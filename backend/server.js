const connectDB = require("./db/database");

const app = require("./app");

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});

connectDB();
