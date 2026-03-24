import Lottie from 'lottie-react';
import errorAnime from '../../assets/lottiefiles/error.json';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-linear-to-br from-white via-cyan-50/30 to-white px-6 py-12 text-center lg:text-left gap-10">
      
      {/* Text Content */}
      <div className="max-w-md space-y-4 animate-fadeIn">
        <h1 className="text-6xl font-extrabold text-blue-400 drop-shadow-sm">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
        </p>

        <button
          onClick={() => navigate('/')}
          className="mt-4 inline-block bg-linear-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-lg shadow transition-transform hover:scale-105"
        >
          Go Back Home
        </button>
      </div>

      {/* Animation */}
      <div className="w-80 lg:w-96">
        <Lottie animationData={errorAnime} loop={true} />
      </div>
    </div>
  );
};

export default ErrorPage;