# Next.js と shadcn/ui 学習メモ

## shadcn/ui の使用

- インストール: https://ui.shadcn.com/docs/installation/next
- コンポーネント追加:
  - 単一: `npx shadcn-ui@latest add button`
  - 複数: `npx shadcn-ui@latest add`

## 日本語フォントの使用

```jsx
import { Noto_Sans_JP } from 'next/font/google';
const fontNotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });
<body className={fontNotoSansJP.className}>{children}</body>;
```

- `cn` 関数を使用して複数のクラスを結合:
  ```jsx
  <body className={cn('bg-background antialiased min-h-screen', fontNotoSansJP.className)}>{children}</body>
  ```

## Next.js のルーティング

- `app/(marketing)`: 別のページとして認識される

## セキュリティ

- `rel="noreferrer"`: `target="_blank"` と併用

```jsx
<Link href={'/login'} className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))} target="_blank" rel="noreferrer">
  Github
</Link>
```

## 設定とタイプ

- `siteConfig`: サイト設定を定義
- `types/index.d.ts`: 型定義ファイル

## クライアントコンポーネント

- `'use client';`: useState を使用する場合に必要
- モバイルメニューの実装例:

```tsx
const [showMobileMenu, setShowMobileMenu] = useState(false);

<button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
  <span>メニュー</span>
</button>;

{
  showMobileMenu && <MobileNav />;
}
```

### `onClick={() => setShowMobileMenu(!showMobileMenu)}` の解説

このコードは、ボタンがクリックされたときのイベントハンドラを定義しています。

1. `onClick`: これは React のイベントハンドラプロップです。ユーザーがボタンをクリックしたときに実行される関数を指定します。

2. `() => ...`: これはアロー関数です。イベントが発生したときに実行される匿名関数を定義しています。

3. `setShowMobileMenu(!showMobileMenu)`: この部分が実際に実行される処理です。
   - `setShowMobileMenu` は `useState` フックによって提供される状態更新関数です。
   - `!showMobileMenu` は現在の `showMobileMenu` の値を反転させます。
     - もし `showMobileMenu` が `true` なら、`!true` は `false` になります。
     - もし `showMobileMenu` が `false` なら、`!false` は `true` になります。

この実装により、ボタンをクリックするたびに `showMobileMenu` の値が切り替わります。つまり、モバイルメニューの表示/非表示を切り替えることができます。

`{showMobileMenu && <MobileNav />}` の部分では、`showMobileMenu` が `true` の場合にのみ `<MobileNav />` コンポーネントがレンダリングされます。これにより、ボタンクリックに応じてモバイルナビゲーションの表示を制御できます。

## ユーティリティフック

- `useLockBodyScroll`: ボディのスクロールをロックするためのフック
- インストール: `npm i @uidotdev/usehooks`
- 使用方法:

```jsx
import { useLockBodyScroll } from '@uidotdev/usehooks';

function MyComponent() {
  useLockBodyScroll();

  // コンポーネントの残りの部分
}
```

### `useLockBodyScroll` の使用例

このフックは、モーダルやフルスクリーンメニューを表示する際に、背景のスクロールを防ぐのに役立ちます。例えば、モバイルナビゲーションを表示する際に使用できます：

```jsx
import { useState } from 'react';
import { useLockBodyScroll } from '@uidotdev/usehooks';

function MobileNav() {
  useLockBodyScroll();

  return (
    // モバイルナビゲーションの内容
  );
}

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
        Toggle Menu
      </button>
      {showMobileMenu && <MobileNav />}
    </>
  );
}
```

npm install next-auth@beta

import NextAuth from 'next-auth';

const handler = NextAuth({});

export { handler as GET, handler as POST };

認証の仕組み jwt,暗号化
