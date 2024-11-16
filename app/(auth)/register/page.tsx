"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import NextLink from "next/link";
import { ApiResponseSchema, AuthService, SignInSchema } from "../../../openapi";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: "وارد کردن این فیلد ضروری است." })
      .email("آدرس ایمیل وارد شده معتبر نمی‌باشد."),
    password: z.string().min(1, { message: "وارد کردن این فیلد ضروری است." }),
    confirmPassword: z
      .string()
      .min(1, { message: "وارد کردن این فیلد ضروری است." }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "گذرواژه‌های وارد شده منطبق نیستند.",
        path: ["confirmPassword"],
      });
    }
  });

type FormData = z.infer<typeof schema>;

const RegisterPage = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [res, setRes] = useState({} as ApiResponseSchema);
  const [error, setError] = useState({} as AxiosError);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await AuthService.apiAuthApiRegister({
        email: data.email,
        password: data.password,
      } as SignInSchema);
      setRes(res);
      console.log(res);
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
  }, [res]);

  return (
    <>
      <Typography variant="h4" sx={{ mb: 15 }}>
        ثبت نام
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
        <>
          <Typography display="block" variant="caption" color="primary">
            حساب کاربری شما با موفقیت ساخته شد.
          </Typography>
          <Typography display="block" variant="caption" color="primary">
            برای فعالسازی حساب کاربری، ایمیل خود را چک کنید.
          </Typography>
        </>
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
          <FormLabel
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography>گذرواژه:</Typography>
          </FormLabel>
          <TextField
            {...register("password")}
            type={isPasswordVisible ? "text" : "password"}
            dir="ltr"
            placeholder="********"
            sx={{ mb: 5 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ pr: "0px" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setPasswordVisibility(!isPasswordVisible)}
                    sx={{
                      p: 0,
                      minWidth: 2,
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    disableRipple
                    disableElevation
                  >
                    {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          {errors.password && (
            <Typography variant="caption" color="error">
              {errors.password.message}
            </Typography>
          )}
          <FormLabel
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography>تکرار گذرواژه:</Typography>
          </FormLabel>
          <TextField
            {...register("confirmPassword")}
            type={isPasswordVisible ? "text" : "password"}
            dir="ltr"
            placeholder="********"
            sx={{ mb: 5 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ pr: "0px" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setPasswordVisibility(!isPasswordVisible)}
                    sx={{
                      p: 0,
                      minWidth: 2,
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    disableRipple
                    disableElevation
                  >
                    {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          {errors.confirmPassword && (
            <Typography variant="caption" color="error">
              {errors.confirmPassword.message}
            </Typography>
          )}
          <Button
            type="submit"
            color="secondary"
            disabled={!isValid}
            variant="contained"
            sx={{ height: "3rem", fontWeight: "bold", my: 5 }}
          >
            ایجاد حساب کاربری
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography variant="caption">حساب کاربری دارید؟</Typography>
            <NextLink href="/login" passHref>
              <Link component="button" variant="caption" underline="none">
                وارد شوید
              </Link>
            </NextLink>
          </Box>
        </FormControl>
      </form>
    </>
  );
};

export default RegisterPage;
