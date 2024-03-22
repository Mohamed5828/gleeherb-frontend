import axios from "axios";
import { baseUrl } from "./backendConfig";

export const cardPayment = async (userToken) => {
  try {
    // const userToken = autha().slice(6);

    // Make a POST request to get payment initialization
    const response = await axios.post(
      `${baseUrl}/api/paymentinitialization`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    // Construct the iframe URL with the payment token from the response
    const iframeURL = `https://accept.paymob.com/api/acceptance/iframes/806889?payment_token=${response.data.token}`;

    // Redirect to the iframe URL
    window.location.href = iframeURL;
  } catch (error) {
    console.error("Error:", error);
  }
};
