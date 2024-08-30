# Next study

`shadcn/ui`を使ってみる：https://ui.shadcn.com/docs/installation/next

`npx shadcn-ui@latest add button`：button コンポーネントを追加
`npx shadcn-ui@latest add`: 複数コンポーネントを追加

`import { Noto_Sans_JP } from 'next/font/google';`：日本語フォントを使う
`const fontNotoSansJP = Noto_Sans_JP({ subsets: ['latin'] });`：フォントの指定
`<body className={fontNotoSansJP.className}>{children}</body>`：フォントを適用
`<body className={cn('bg-background antialiased min-h-screen', fontNotoSansJP.className)}>{children}</body>`：cn を使うことで、フォントを適用した body タグに、背景色やマイナスの高さを指定できる utils から import
`(marketing)`：`app/(marketing)`というディレクトリを作成することで、`app/page.tsx`とは別のページとして認識される
