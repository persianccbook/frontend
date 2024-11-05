'use client'
import { useEffect, useState } from "react";
import { ApiResponseSchema, AuthService } from "../../../../../openapi";

interface Props {
  params: { user_id: string; token: string };
}

const VerifyEmailPage =  ({ params: { user_id, token } }: Props) => {
  const [res, setRes] = useState({} as ApiResponseSchema);


  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await AuthService.apiAuthApiVerifyEmail({
          user_id: user_id,
          token: token,
        });
        setRes(response);
      } catch (error) {
        console.error(error);
      }
    };
    verifyEmail();
  }, [user_id, token]);

  return (
    <div>
      {res?.status}
      {res?.data && res?.data.message}
    </div>
  );
};

export default VerifyEmailPage;
