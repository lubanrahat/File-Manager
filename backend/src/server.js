import app from "./app.js";
import ENV from "./config/env.js";
import connectDB from "./db/db.js";

connectDB()
  .then(() => {
    app.listen(ENV.PORT, () => {
      console.log(`Server is running port: ${ENV.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Mongodb connection error ", error);
    process.exit(1);
  });

