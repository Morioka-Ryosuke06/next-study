import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import MainNav from '@/components/main-nav';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-background container z-40">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNav></MainNav>
          <nav>
            <Link href={'/login'} className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-4')}>
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
