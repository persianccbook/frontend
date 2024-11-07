"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthService } from "../../../openapi";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "وارد کردن این فیلد ضروری است." })
    .email("آدرس ایمیل وارد شده معتبر نمی‌باشد."),
});

type FormData = z.infer<typeof schema>;

const ResetPasswordPage = () => {
  // const { obtainToken, isAuthenticated, error: apiError } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });
  const onSubmit = async (data: FormData) => {
    try {
      await AuthService.apiAuthApiRequestPasswordReset({
        ...data,
      });
    } catch (error: unknown) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <>
      <Typography variant="h4" sx={{ mb: 15 }}>
        فراموشی گذرواژه
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
          <Button
            type="submit"
            disabled={!isValid}
            variant="contained"
            sx={{ height: "3rem", fontWeight: "bold", my: 5 }}
          >
            ارسال لینک بازیابی گذرواژه
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default ResetPasswordPage;
