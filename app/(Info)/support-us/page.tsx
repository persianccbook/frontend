import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

const SupportUsPage = () => {
  const supportUsText = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`;
  // const supportUsLink = ''

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
        <Typography variant="body1" sx={{mb:10}}>{supportUsText}</Typography>
      

      <Box sx={{display:'flex',gap:5,justifyContent:'space-around'}}>
          <Button variant='contained' sx={{p:8,fontWeight:'bold'}}>حمایت با کمک مالی</Button>
        <Button variant='contained' sx={{p:8,fontWeight:'bold'}}>حمایت در تالیف، ترجمه و ویراست کتاب ها</Button>
      </Box></Paper>
    </Box>
  )
}

export default SupportUsPage