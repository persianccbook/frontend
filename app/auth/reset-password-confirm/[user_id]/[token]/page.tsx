"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AuthService,
  PasswordResetConfirmSchema,
} from "../../../../../openapi";

const schema = z
  .object({
    new_password: z
      .string()
      .min(1, { message: "وارد کردن این فیلد ضروری است." }),
    confirm_new_password: z
      .string()
      .min(1, { message: "وارد کردن این فیلد ضروری است." }),
  })
  .superRefine(({ confirm_new_password, new_password }, ctx) => {
    if (confirm_new_password !== new_password) {
      ctx.addIssue({
        code: "custom",
        message: "گذرواژه‌های وارد شده منطبق نیستند.",
        path: ["confirm_new_password"],
      });
    }
  });

type FormData = z.infer<typeof schema>;

interface Props {
  params: { user_id: string; token: string };
}

const ResetPasswordConfirmPage = ({
  params: { user_id, token },
}: Props) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = async (data: FormData) => {
    try {
      await AuthService.apiAuthApiPasswordResetConfirm({
        user_id: user_id,
        token: token,
        new_password: data.new_password,
        confirm_new_password: data.confirm_new_password,
      } as PasswordResetConfirmSchema);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography variant="h4" sx={{ mb: 15 }}>
        بازیابی گذرواژه
      </Typography>
      {/* {apiError && (
        <Typography variant="caption" color="error">
          ایمیل یا گذرواژه وارد شده اشتباه است.
        </Typography>
      )} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ minWidth: 290 }}>
          <FormLabel
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography>گذرواژه جدید:</Typography>
          </FormLabel>
          <TextField
            {...register("new_password")}
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
          {errors.new_password && (
            <Typography variant="caption" color="error">
              {errors.new_password.message}
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
            <Typography>تکرار گذرواژه جدید:</Typography>
          </FormLabel>
          <TextField
            {...register("confirm_new_password")}
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
          {errors.confirm_new_password && (
            <Typography variant="caption" color="error">
              {errors.confirm_new_password.message}
            </Typography>
          )}
          <Button
            type="submit"
            disabled={!isValid}
            variant="contained"
            sx={{ height: "3rem", fontWeight: "bold", my: 5 }}
          >
            تغییر گذرواژه
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default ResetPasswordConfirmPage;
