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
import { ContactUsSchema, InfoService } from "../../../openapi";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "وارد کردن این فیلد ضروری است." })
    .email("آدرس ایمیل وارد شده معتبر نمی‌باشد."),
  message: z.string().min(1, { message: "وارد کردن این فیلد ضروری است." }),
});

type FormData = z.infer<typeof schema>;

const ContactUspage = () => {
  const [res, setRes] = useState({} as ContactUsSchema);
  const [error, setError] = useState({} as AxiosError);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    console.log('contact us')
    try {
      const response = await InfoService.apiInfoApiContactUs({
        email: data.email,
        message: data.message,
      });
      setRes(response);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    if (res.status === "success") {
      const timeoutId = setTimeout(() => {
        router.push("/");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [res, router]);

  return (
    <FormLayout>
      <Typography variant="h4" sx={{ mb: 15 }}>
        ارتباط با ما{" "}
      </Typography>
      {error.message && (
        <Typography variant="caption" color="error">
          {error.message}
        </Typography>
      )}
      {res.status === "error" && (
        <Typography variant="caption" color="error">
          {res.data.message}
        </Typography>
      )}
      {res.status === "success" && (
        <Typography display="block" variant="caption" color="primary">
          پیام شما با موفقیت ثبت شد
        </Typography>
      )}
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
            multiline={true}
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
