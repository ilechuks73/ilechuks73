export default async function handler(request, response) {
  const axios = require("axios");

  const response2 = await axios.post(
    "https://www.google.com/recaptcha/api/siteverify",
    null,
    {
      params: {
        secret: process.env.NEXT_PRIVATE_RECAPTCHA_SECRET_KEY,
        response: request.body.token,
      },
    },
  );

  if (response2.data.success === false) {
    return response.status(200).json({
      message: "Failed",
      error: true,
      data: null,
    });
  }

  response.status(200).json({
    message: "Success",
    error: false,
    data: null,
  });
}
