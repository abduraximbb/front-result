import { useState } from "react";
import sign_photo from "../../../assets/images/Side Image.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data: { accessToken?: string; message?: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        console.log("Login successful:", data);
        navigate("/account");
      } else {
        console.log("fail");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex mt-10 mb-20">
      <div className="max-[450px]:hidden">
        <img src={sign_photo} alt="sign_photo.png" className="h-full w-full"/>
      </div>
      <div className="flex justify-center items-center xl:pl-20 2xl:pl-24 max-md:pl-0 max-[450px]:pl-0 max-[450px]:mx-auto">
        <div className="w-[370px] max-md:w-[300px] flex flex-col justify-center items-center font-poppins">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-inter font-medium leading-[30px] max-sm:text-2xl">
                Log in to Exclusive
              </h2>
              <p className="font-poppins font-normal">
                Enter your details below
              </p>
            </div>
            <div className="flex flex-col py-14 gap-10">
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-between items-center">
              <button
                className="bg-[#DB4444] border border-[#DB4444] text-[#FAFAFA] rounded-[4px] py-3 px-8 hover:bg-white hover:text-[#DB4444] duration-150 max-[450px]:py-2"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Log In"}
              </button>
              <p className="text-[#DB4444] cursor-pointer hover:text-red-800 duration-150 max-[450px]:pl-2">
                Forget Password?
              </p>
            </div>
            <p className="text-gray-500 mt-4">
              Not registered yet?{" "}
              <span
                className="font-poppins-medium text-primary0 border-b-2 border-primary hover:text-red-700 hover:border-red-700"
                onClick={() => navigate("/signup")}
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
