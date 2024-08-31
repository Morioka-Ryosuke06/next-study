import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer>
      <div className="container py-10 h-10">
        <p className="text-center text-sm text-">
          Build by {''}
          <Link className="underline underline-offset-2" href={siteConfig.links.x}>
            森
          </Link>
          . Hosted on {''} <Link href={'https://vercel.com'}></Link>
        </p>
      </div>
    </footer>
  );
}
