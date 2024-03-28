import { useState, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const handleInputErrors = (fullName, email, project) => {
  if (!fullName || !email || !project) {
    console.log("hello");
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
};

const useSendEmail = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (fullname, email, project) => {
    const success = handleInputErrors(fullname, email, project);

    if (!success) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      );
    } catch (error) {
      console.log('FAILED...', error.text);
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, sendEmail };
};

export default useSendEmail;