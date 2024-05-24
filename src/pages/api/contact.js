const axios = require("axios");

// Use bodyParser middleware to parse request bodies for this specific API route
export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(request, response) {
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
      data: {
        errorCodes: response2.data,
        body: request.body,
      },
    });
  }

  response.status(200).json({
    message: "Success",
    error: false,
    data: null,
  });
}
