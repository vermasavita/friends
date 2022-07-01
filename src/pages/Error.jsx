import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center errorbox">
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?t=st=1656714523~exp=1656715123~hmac=3a9b01ecfb8ee0cb789aed8cf0d8297f3072e926597d845ce2da736e8b59c800&w=996"
        alt="error"
        className="error-img"
      />
      <div>
        <button
          className="bg-rose-600 px-2 py-1 cursor-pointer text-white rounded-md"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export { Error };
