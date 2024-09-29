'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { Icon } from '@/components/icon';
import { signIn } from 'next-auth/react';

export default function UserAuthForm() {
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@exsample.com" type="email" />
          </div>
          <button className={cn(buttonVariants({}))}>メールアドレスでログイン</button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background">または</span>
        </div>
      </div>

      <button className={cn(buttonVariants({ variant: 'outline' }))} onClick={() => signIn('github')}>
        <Icon.github />
        Github
      </button>
    </div>
  );
}
