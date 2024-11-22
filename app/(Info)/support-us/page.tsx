import { Circle } from "@mui/icons-material";
import { Box, Button, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const SupportUsPage = () => {
  const description = `کتابخانه آزاد فارسی با هدف ترویج دانش آزاد و در دسترس قرار دادن منابع ارزشمند برای همگان ایجاد شده است. ما تلاش می‌کنیم کتاب‌ها و منابع تحت لایسنس‌های آزاد را جمع‌آوری، ترجمه و منتشر کنیم تا هر فردی، بدون محدودیت، بتواند به دانش دسترسی پیدا کند. این پروژه به‌صورت کاملاً غیرانتفاعی اداره می‌شود و منابع آن به کمک تیمی از داوطلبان و مشارکت‌کنندگان به‌روزرسانی و گسترش داده می‌شود.`;
  // چرا به حمایت شما نیاز داریم؟
  const whyWeNeedSupport = [
    "تعداد بیشتری از کتاب‌ها و منابع را ترجمه و در دسترس قرار دهیم.",

    "زیرساخت‌های وب‌سایت را بهبود ببخشیم و خدمات بهتری ارائه دهیم.",

    "پروژه‌های آموزشی جدیدی را برای ترویج دانش آزاد راه‌اندازی کنیم.",

    "هزینه‌های مربوط به نگهداری و مدیریت پلتفرم را پوشش دهیم. ",
  ];
  // چگونه می‌توانید از ما حمایت کنید؟
  const howToSupportus = [
    `شما می‌توانید با کمک‌های مالی خود، در توسعه این پروژه سهیم شوید. حمایت‌های شما به ما کمک می‌کند تا محتوای بیشتری تولید کرده و دانش را به دست همگان برسانیم.`,
    `اگر مهارت‌هایی مانند ترجمه، ویرایش یا نویسندگی دارید، می‌توانید به تیم ما بپیوندید و مستقیماً در گسترش محتوای وب‌سایت نقش داشته باشید.`,
    `شما می‌توانید با اشتراک‌گذاری لینک وب‌سایت و منابع آن با دیگران، به ترویج دانش آزاد کمک کنید.`,
  ];
  // سخن پایانی
  const endNote = `
ما قدردان شما هستیم
حمایت شما، چه از طریق کمک مالی و چه از طریق مشارکت داوطلبانه، نه تنها به ما انگیزه ادامه می‌دهد، بلکه تأثیر بزرگی در گسترش دانش آزاد و ایجاد دنیایی بهتر برای یادگیری دارد. با هم می‌توانیم دانش را به تمام گوشه‌های دنیا برسانیم.
شعار ما: دانش آزاد، حق همه!
سپاسگزاریم که در این مسیر همراه ما هستید!`;
  const supportUsLink = "https://daramet.com/persianccbook";

  return (
    <Box
      sx={{
        m: "auto",
        p: 10,
        maxWidth: { s: 345, md: 700, lg: 1200 },
      }}
    >
      <Typography variant="h3" sx={{ mb: 10 }}>
        حمایت از ما
      </Typography>
      <Paper sx={{ p: 5 }}>
        <Typography
          variant="body1"
          sx={{ mb: 10, bgcolor: "rgba(0,0,0,.1)", p: 3, borderRadius: 2 }}
        >
          <FaQuoteRight size={10} />
          {description}
          <FaQuoteLeft size={10} />
        </Typography>
        <Box sx={{ bgcolor: "rgba(0,0,0,.1)", mb: 5, p: 3, borderRadius: 2 }}>
          <Typography variant={"h6"} sx={{ mb: 10 }}>
            چرا به حمایت شما نیاز داریم؟
          </Typography>
          <Typography variant="body1" sx={{ p: 3, borderRadius: 2 }}>
            ما به حمایت شما نیاز داریم تا بتوانیم:
          </Typography>
          <List>
            {whyWeNeedSupport.map((item, index) => (
              <ListItem key={index}>
                <Circle sx={{ fontSize: 8, ml: 2 }} />
                {item}
              </ListItem>
            ))}
          </List>
          <Typography variant="body1" sx={{ mb: 10 }}>
            هر حمایت، هرچند کوچک، کمک بزرگی برای ادامه فعالیت‌های ما خواهد بود.
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "rgba(0,0,0,.1)", mb: 5, p: 3, borderRadius: 2 }}>
          <Typography variant={"h6"}>
            چگونه می‌توانید از ما حمایت کنید؟
          </Typography>
          <List>
            {howToSupportus.map((item, index) => (
              <ListItem key={index}>
                <Circle sx={{ fontSize: 8, ml: 2 }} />
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
        <Typography variant="body1" sx={{ mb: 10 }}>
          {endNote}
        </Typography>

        <Box sx={{ display: "flex", gap: 5, justifyContent: "space-around" }}>
          <Button
            href={supportUsLink}
            target="_blank"
            variant="contained"
            sx={{ p: 8, fontWeight: "bold" }}
          >
            حمایت با کمک مالی
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SupportUsPage;
