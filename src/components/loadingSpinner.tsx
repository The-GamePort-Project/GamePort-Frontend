interface LoadingSpinnerProps {
  loading: boolean;
  error?: boolean;
  loadingMessage?: string;
  errorMessage?: string;
}
export default function LoadingSpinner({
  loadingMessage = "Please hold on...",
  errorMessage = "An error occurred. Please try again.",
  error = false,
  loading = false,
}: LoadingSpinnerProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-yellow-600">
          Almost there...
        </h2>
        {error && <p className="text-red-600">{errorMessage}</p>}
        {!loading && !error && (
          <p className="text-yellow-800">{loadingMessage}</p>
        )}
      </div>
      <svg
        className="animate-spin -ml-1 mr-3 h-20 w-20 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          fill="none"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="orange"
          d="M4.93 4.93a10 10 0 0114.14 14.14l-1.41-1.41a8 8 0 00-11.31-11.31L4.93 4.93z"
        />
      </svg>
    </div>
  );
}
