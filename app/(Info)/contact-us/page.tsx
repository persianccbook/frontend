"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormLayout from "../../components/FormLayout";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "وارد کردن این فیلد ضروری است." })
    .email("آدرس ایمیل وارد شده معتبر نمی‌باشد."),
  message: z.string().min(1, { message: "وارد کردن این فیلد ضروری است." }),
});

type FormData = z.infer<typeof schema>;

const ContactUspage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <FormLayout>
      <Typography variant="h4" sx={{ mb: 15 }}>
        ارتباط با ما{" "}
      </Typography>
      {/* {apiError && (
        <Typography variant="caption" color="error">
          ایمیل یا گذرواژه وارد شده اشتباه است.
        </Typography>
      )} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ minWidth: 290 }}>
          <FormLabel sx={{ mb: 3 }}>ایمیل:</FormLabel>    
          <TextField
            {...register("email")}
            type="text"
            dir="ltr"
            placeholder="your@email.com"
            sx={{ mb: 5 }}
          />
          {errors.email && (
            <Typography variant="caption" color="error">
              {errors.email.message}
            </Typography>
          )}

          <FormLabel sx={{ mb: 3 }}>پیام:</FormLabel>
          <TextField
            {...register("message")}
            multiline={true }
            rows={4}    
            type="text"
            dir="rtl"
            placeholder="پیام خود را بنویسید."
            sx={{ mb: 5 }}
          />
          {errors.message && (
            <Typography variant="caption" color="error">
              {errors.message.message}
            </Typography>
          )}

          <Button
            type="submit"
            color="secondary"
            disabled={!isValid}
            variant="contained"
            sx={{ height: "3rem", fontWeight: "bold", my: 5 }}
          >
            ارسال پیام
          </Button>
        </FormControl>
      </form>
    </FormLayout>
  );
};

export default ContactUspage;
