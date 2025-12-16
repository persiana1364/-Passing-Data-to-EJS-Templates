import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;

// تنظیم موتور قالب EJS
app.set("view engine", "ejs");

// استفاده از body-parser برای پردازش داده‌های فرم
app.use(bodyParser.urlencoded({ extended: true }));

// رندر کردن صفحه اصلی
app.get("/", (req, res) => {
  res.render("index", { fName: "", lName: "" });
});

// پردازش داده‌های فرم ارسال شده
app.post("/submit", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;

  // بررسی اگر ورودی موجود باشد
  if (fName && lName) {
    let fullName = `${fName} ${lName}`; // ترکیب نام و نام خانوادگی
    res.send(`Hello, ${fullName}! Your name has ${fullName.length} characters.`);
  } else {
    res.send("Please provide both first and last name.");
  }
});

// راه‌اندازی سرور
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
