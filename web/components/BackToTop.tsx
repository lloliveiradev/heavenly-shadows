'use client';

export default function BackToTop() {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-3 bg-violet-500 text-white rounded-full shadow-xl hover:bg-violet-700 focus:outline-hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                </svg>
            </button>
        </div>
    );
}