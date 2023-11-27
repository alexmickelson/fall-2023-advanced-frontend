const express = require('express');
const app = express();

app.get("/index.html", (req, res) => {
    console.log(req.headers)

    const cookieString = 'nojavascript=12345; HttpOnly';
    res.setHeader('Set-Cookie', cookieString);
    res.send(`
        <html>
            <head>
                <title>MyPage</title>
            </head>
            <body>
                <h1>My Page</h1>
                </body>
        </html>
    `)
    // <img src="https://mysecureimageurl.com/secondimage.jpg" />
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});