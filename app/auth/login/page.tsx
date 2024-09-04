"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { GitHub, Google, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useAuthStore from "../../../store/authStore";
import { useRouter } from "next/navigation";
import NextLink from "next/link";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "وارد کردن این فیلد ضروری است." })
    .email("آدرس ایمیل وارد شده معتبر نمی‌باشد."),
  password: z.string().min(1, { message: "وارد کردن این فیلد ضروری است." }),
});

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const router = useRouter();
  const { obtainToken, isAuthenticated, error: apiError } = useAuthStore();
  if (isAuthenticated) router.push("/");
  const handleLogin = async (credentials: FormData) => {
    await obtainToken(credentials);
  };

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    handleLogin(data);
  };

  return (
    <Box display="flex" justifyContent="center" alignContent="center" marginBottom={3}>
      <Paper sx={{ m: 5, p: 10, minWidth: 300, borderRadius: 5 }}>
        <Typography variant="h3" sx={{ mb: 15 }}>
          ورود
        </Typography>
        {apiError && <Typography variant="caption" color="error">ایمیل یا گذرواژه وارد شده اشتباه است.</Typography>}
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
              sx={{ display: "flex", justifyContent: "space-between",alignItems:"center", mb: 3 }}
            >
              <Typography>گذرواژه:</Typography>
              <NextLink href="/profile/reset-password" passHref>
                <Link component="button" variant="caption" underline="none">
                  گذرواژه خود را فراموش کرده اید؟
                </Link>
              </NextLink>
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
            <Button
              type="submit"
              disabled={!isValid}
              variant="contained"
              sx={{ height: "3rem", fontWeight: "bold", my: 5 }}
            >
              ورود
            </Button>
            <Box sx={{ display: "flex", justifyContent: "space-evenly",alignItems:"center" }}>
              <Typography variant="caption">حساب کاربری ندارید؟</Typography>
              <NextLink href="/" passHref>
                <Link component="button" variant="caption" underline="none">
                  ثبت نام کنید
                </Link>
              </NextLink>
            </Box>
            <Divider>یا</Divider>
            <Button
              variant="contained"
              color="secondary"
              sx={{ height: "3rem", fontWeight: "bold", my: 5 }}
            >
              ورود با گوگل
              <Google />
            </Button>
            <Button
              variant="contained"
              color="info"
              sx={{ height: "3rem", fontWeight: "bold", my: 5 }}
            >
              ورود با گیتهاب
              <GitHub />
            </Button>
          </FormControl>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
