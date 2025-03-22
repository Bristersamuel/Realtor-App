// frontend/src/components/common/Navbar.tsx

'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-xl font-bold">
                                CopyRealtor
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                Dashboard
                            </Link>
                            <Link href="/clients" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                Clients
                            </Link>
                            <Link href="/properties" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                Properties
                            </Link>
                            <Link href="/reminders" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                Reminders
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Dashboard
                        </Link>
                        <Link href="/clients" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Clients
                        </Link>
                        <Link href="/properties" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Properties
                        </Link>
                        <Link href="/reminders" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                            Reminders
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;