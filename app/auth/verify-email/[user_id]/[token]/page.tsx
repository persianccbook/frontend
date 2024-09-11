import { ApiResponseSchema, AuthService, OpenAPI } from "../../../../../openapi";

interface Props {
  params: { user_id: string; token: string };
}

const VerifyEmailPage = async ({ params: { user_id, token } }: Props) => {
  let res = {} as ApiResponseSchema;

  OpenAPI.BASE='http://localhost'

  const verifyEmail = async () => {
    try {
      res = await AuthService.apiAuthApiVerifyEmail({
        user_id: user_id,
        token: token,
      });
    } catch (error: unknown) {
      console.log(error);
    }
    console.log(res);
  };

  await verifyEmail();

  return (
    <div>
      {res?.status}
      {res?.data && res?.data.message}
    </div>
  );
};

export default VerifyEmailPage;
