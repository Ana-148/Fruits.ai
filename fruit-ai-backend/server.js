const express = require("express");
const path = require("path");
const collection = require("./config");
const session = require("express-session");
const cookieParser = require("cookie-parser"); //session data to store in cookies

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    saveUninitialized: true, // Save uninitialized session
    resave: false, // Do not save session if unmodified
    secret: 'adsafadgdbsdb@#3twg', // Security key
    cookie: { maxAge: oneDay } // Set cookie expiration time
}));

// Convert data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

// Register User
app.post("/signup", async (req, res) => {
    const data = {
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.password
    };

    // Check if user already exists
    const existingUser = await collection.findOne({ Email: data.Email });
    if (existingUser) {
        res.send("User already exists. Please choose a different email.");
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.Password, saltRounds);
        data.Password = hashedPassword; // Replace the original password with hashed password

        const userData = await collection.insertMany([data]);
        console.log(userData);
        res.render("login");
    }
});

// Login User
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ Email: req.body.email });
        if (!check) {
            res.send("User cannot be found");
        } else {
            // Compare the hashed password in the database
            const isPasswordMatch = await bcrypt.compare(req.body.password, check.Password);
            if (isPasswordMatch) {
                req.session.email = req.body.email; // Set session variable
                res.render("index");
            } else {
                res.send("Invalid Password");
            }
        }
    } catch (error) {
        res.send("Wrong details");
    }
});

// Logout User
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Could not log out.');
        }
        
    });
    res.redirect('/');
});

app.listen(7000, (err) => {
    if (err)
        console.log("Unable to start server...");
    else
        console.log("Server Started...");
});
 

//DB is check
// APP functioning check
// Login and logout functionality check
// Caloorie dispay check but the functioning is not proper 
// Make an account for the new functional for nutrient count and chart part
// BMI is working nice
//can improve ai by using purple pink and plack theme as such
