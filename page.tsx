import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-blue-800 mb-6">Welcome to CopyRealtor</h1>
                <p className="text-xl text-gray-700 mb-8">
                    Your personal assistant for managing real estate clients and properties
                </p>
                <Link
                    href="/dashboard"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
                >
                    Go to Dashboard
                </Link>
            </div>
        </div>
    );
}