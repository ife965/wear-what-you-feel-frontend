import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const reference = searchParams.get("reference");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/verifyPaystack",
        { reference, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Payment successful!");
        setCartItems({});
        navigate("/orders");
      } else {
        toast.error("Payment failed or canceled.");
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error("Verification failed. Please try again.");
      navigate("/cart");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className="flex items-center justify-center h-[80vh] text-lg text-gray-600">
      Verifying your payment, please wait...
    </div>
  );
};

export default Verify;
