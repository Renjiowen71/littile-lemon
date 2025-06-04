import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmitLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const random = Math.random();

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(1000);
      if(random>0.5){
        return {
          email: "email@email.com",
          firstName: "Bob",
        }
      }
      else
        throw "Error, email or password is wrong"
    } catch (error) {
      throw error
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, submit };
}

export default useSubmitLogin;
