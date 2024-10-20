import { DashboardConfig } from '@/types';
import { title } from 'process';

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'ドキュメント',
      href: '/docs',
    },
    {
      title: 'サポート',
      href: '/support',
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: '記事投稿',
      href: '/dashboard',
      icon: 'post',
    },
    {
      title: 'お支払い',
      href: '/dashboard/billings',
      icon: 'post',
    },
    {
      title: '記事投稿',
      href: 'dashboard/settings',
      icon: 'post',
    },
  ],
};
