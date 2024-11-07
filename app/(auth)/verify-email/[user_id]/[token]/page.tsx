"use client";
import { useEffect, useState } from "react";
import { ApiResponseSchema, AuthService } from "../../../../../openapi";
import { AxiosError } from "axios";
import { Box, Typography } from "@mui/material";

interface Props {
  params: { user_id: string; token: string };
}

const VerifyEmailPage = ({ params: { user_id, token } }: Props) => {
  const [res, setRes] = useState({} as ApiResponseSchema);
  const [error, setError] = useState({} as AxiosError);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await AuthService.apiAuthApiVerifyEmail({
          user_id: user_id,
          token: token,
        });
        setRes(response);
      } catch (error: any) {
        setError(error);
      }
      console.log(error);
    };
    verifyEmail();
  }, [user_id, token]);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 10 }}>
        تایید ایمیل
      </Typography>
      {error.message && (
        <Typography variant="body1" color={"error"}>
          خطا: {error.message}
        </Typography>
      )}
      {res?.status === "success" && (
        <Typography variant="body1" color={"primary"}>
          ایمیل شما با موفقیت تایید و حساب کاربری شما فعال شد.
        </Typography>
      )}
    </Box>
  );
};

export default VerifyEmailPage;
