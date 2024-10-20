import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import MainNav from '@/components/main-nav';
import { dashboardConfig } from '@/config/dashboard';
import SiteFooter from '@/components/site-footer';

export default function dashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex items-center justify-between py-4 h-16">
          <MainNav items={dashboardConfig.mainNav} />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside>Side</aside>
        <main className="flex flex-col w-full flex-1 overflow-hidden">{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}
