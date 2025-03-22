// In frontend/src/components/common/Sidebar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'bg-blue-700' : '';
    };

    return (
        <aside className="bg-blue-800 text-white w-64 min-h-screen p-4 hidden md:block">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold">CopyRealtor</h2>
            </div>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/dashboard"
                            className={`block px-4 py-2 rounded-md ${isActive('/dashboard')} hover:bg-blue-700`}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/clients"
                            className={`block px-4 py-2 rounded-md ${isActive('/clients')} hover:bg-blue-700`}
                        >
                            Clients
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/properties"
                            className={`block px-4 py-2 rounded-md ${isActive('/properties')} hover:bg-blue-700`}
                        >
                            Properties
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/reminders"
                            className={`block px-4 py-2 rounded-md ${isActive('/reminders')} hover:bg-blue-700`}
                        >
                            Reminders
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;