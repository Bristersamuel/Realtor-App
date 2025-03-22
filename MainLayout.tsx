// In frontend/src/components/layout/MainLayout.tsx
'use client';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;