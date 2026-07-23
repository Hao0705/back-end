// import thư viện express
const express = require('express');

// Tạo 1 biến path và thực hiện đọc các giá trị bên trong .env đưa vào process.env bằng .config()
require('dotenv').config();

// Khai báo module, module path cung cấp các hàm xử lý đường dẫn file và thư mục.
const path = require('path');

// khai báo 1 app express`
const app = express();
// cổng chạy server 
const port = process.env.PORT;

app.set('views', path.join(__dirname, 'views')); // nói với Express: Các file giao diện (template) của tôi nằm trong thư mục ./src/views.
// __dirname là một biến đặc biệt của Node.js. Nó luôn chứa đường dẫn tuyệt đối đến thư mục chứa file JavaScript đang chạy.
app.set('view engine', 'ejs')   // nói với Express: Hãy sử dụng EJS để render các file giao diện.
// config static files
app.use(express.static(path.join(__dirname, 'public')))

// khai báo 1 route 
app.get('/', (req, res) => {
    res.send('Hello World! & nodemon');
});
app.get('/admin', (req, res) => {
    res.render('sample.ejs');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

