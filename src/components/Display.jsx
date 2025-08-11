import React from 'react';

const Display = ({ translatedText, isLoading, error }) => {
  return (
    <div className="mt-8">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Translated Text:
      </label>
      <div className="min-h-24 p-4 bg-gray-700 text-gray-50 rounded-xl break-words whitespace-pre-wrap">
        {translatedText || (isLoading ? (
          <div className="flex items-center justify-center h-full">
            <svg
              className="animate-spin h-5 w-5 text-purple-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                   5.291A7.962 7.962 0 014 12H0c0 
                   3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <span className="text-gray-500">Translation will appear here...</span>
        ))}
      </div>
      {error && (
        <div className="mt-4 p-3 bg-red-800 text-red-200 rounded-xl text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default Display;
