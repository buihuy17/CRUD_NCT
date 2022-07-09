const express = require("express");
const path = require("path");
const morgan = require("morgan");
var methodOverride = require('method-override');
const { engine } = require("express-handlebars");
const { urlencoded } = require("express");
const route = require("./routes/index");


const app = express();
const port = 1000;
const db = require("./config/db");

//Connect DB
db.connect();

//HTTP Logger
// app.use(morgan("combined"));

//Overide Method support method Put,Patch in HTML file
app.use(methodOverride('_method'));

//Template Engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    helpers: {
      sum: (a,b)  => a+b
    }
  })
);
app.set("views", path.join(__dirname, "resources" , "views"));

// sử dụng file tĩnh để sử dụng file css
app.use(express.static(path.join(__dirname, "public")));


//middleware dùng để xử lí dữ liệu từ form data gửi lên
app.use(
  express.urlencoded({
    extended: true,
  })
);

//xử lí từ client lên server
app.use(express.json());

app.set("view engine", "hbs");


app.listen(port, () => {
  console.log(`App listening  http://localhost:${port}`);
});

//route
route(app);
