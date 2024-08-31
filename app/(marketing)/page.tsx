import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12 text-center">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link href={siteConfig.links.x} className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">
            Xフォロー
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Writer</h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">Next Jsを使って、ブログを書くアプリを作成します。</p>
        </div>
        <div className="space-x-4 mt-6">
          <Link href={'/login'} className={cn(buttonVariants({ size: 'lg' }))}>
            始める
          </Link>
          <Link href={siteConfig.links.github} className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))} target="_blank" rel="noreferrer">
            Github
          </Link>
        </div>
      </section>
      <section id="feature" className="container py-8 md:py-12 lg:py-24 bg-slate-50">
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">サービスの特徴</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">このプロジェクトはモンダンな技術スタックを使ってwebアプリケーションを作ります。</p>
        </div>
      </section>
    </>
  );
}
