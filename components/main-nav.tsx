import Link from 'next/link';
export default function MainNav() {
  return (
    <div className="flex items-center md:gap-10">
      <Link href={'/'} className="hidden md:flex items-center space-x-2">
        <span className="font-bold ">Post Writer</span>
      </Link>
      <nav className="md:flex gap-6 hidden sm:inline-block">
        <Link href={'/blog'} className="text-lg sm:text-sm font-medium hover:text-foregrond/80">
          ブログ
        </Link>
        <Link href={'/blog'} className="text-lg sm:text-sm font-medium hover:text-foregrond/80">
          特徴
        </Link>
      </nav>
    </div>
  );
}
