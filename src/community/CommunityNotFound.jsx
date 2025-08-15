function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <div className="max-w-md text-center bg-white shadow-lg rounded-lg p-8">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-bold mb-2">Access Restricted</h2>
        <p className="text-gray-600 mb-6">
          Please login or sign up to continue.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/community/login"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Login
          </a>
          <a
            href="/community/signup"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
