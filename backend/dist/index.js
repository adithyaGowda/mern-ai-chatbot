import app from "./app.js";
import { connectTODatabase } from "./db/connection.js";
const PORT = process.env.APPLICATION_PORT || 5000;
connectTODatabase().then(() => {
    app.listen(PORT, () => console.log("Server Open and Connected to Database"));
}).catch((error) => console.log(error));
//# sourceMappingURL=index.js.map