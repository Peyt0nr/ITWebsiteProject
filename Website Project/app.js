const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// Route for serving Index.html
app.get(['/', '/index.html'], (req, res) => {
    res.sendFile(__dirname + '/Index.html');
});

// Route for serving Rate.html
app.get('/rate.html', (req, res) => {
    res.sendFile(__dirname + '/Rate.html');
});

// Route for serving Contact.html
app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/Contact.html');
});

// Route for serving About.html
app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/About.html');
});

// Route for handling rating submission
app.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    // Add validation logic here

    // Assuming validation succeeded, show an alert and redirect
    res.send(`
        <script>
            alert("Rating received!");
            window.location.href = "/rate.html"; // Redirect back to Rate.html
        </script>
    `);
});

// Route for handling contact submission
app.post('/submit_contact_form', (req, res) => {
    const username = req.body.username; // access form data
    // Add validation logic here

    // Assuming validation succeeded, show an alert and redirect
    res.send(`
        <script>
            window.location.href = "/contact.html"; // Redirect back to Rate.html
        </script>
    `);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});