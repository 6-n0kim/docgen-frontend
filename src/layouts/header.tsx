import React from 'react';
import { Link } from 'react-router-dom';
interface HeaderProps {
  onMenuToggle?: () => void;
  sidebarOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  sidebarOpen = true,
}) => {

  return (
    <header className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200/50 sticky top-0 z-0 h-[97px] backdrop-blur-sm shadow-sm">
      <div className="max-w-full mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          {/* 좌측: 메뉴 버튼 + 로고 */}
          <div className="flex items-center space-x-4">
            {/* 사이드바 열기 버튼 (사이드바가 닫혔을 때만 표시) */}
            {!sidebarOpen && onMenuToggle && (
              <button
                onClick={onMenuToggle}
                className="p-2.5 bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:shadow-md group"
                title="사이드바 열기"
              >
                <svg
                  className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}

            {/* 모바일 메뉴 버튼 (사이드바가 열려있을 때만 표시) */}
            {sidebarOpen && onMenuToggle && (
              <button
                onClick={onMenuToggle}
                className="p-2.5 text-green-700 hover:text-green-800 hover:bg-white/60 rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:shadow-md md:hidden"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}

            {/* 로고 영역 */}
            <Link
              to="/intro"
              className="hidden md:flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">DocGen</span>
                <span className="text-sm text-gray-600 font-medium">
                  AI가 만드는 스마트한 프로젝트 문서
                </span>
              </div>
            </Link>
          </div>

          {/* 우측 버튼 영역 */}
          <div className="flex items-center space-x-4">
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
