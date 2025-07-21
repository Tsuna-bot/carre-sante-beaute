import React from "react";

interface ApiOfflineNoticeProps {
  isVisible: boolean;
}

const ApiOfflineNotice: React.FC<ApiOfflineNoticeProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
        <span className="font-medium">
          Attention : L&apos;API PrestaShop n&apos;est pas accessible
        </span>
      </div>
    </div>
  );
};

export default ApiOfflineNotice;
