import DashboardHeader from '@/components/dashboard-header';
import DashBoardShell from '@/components/dashboard-shell';
import PostCreateButton from '@/components/post-create-button';
import React from 'react';

const dashboardPage = () => {
  return (
    <DashBoardShell>
      <DashboardHeader heading="記事投稿" text="記事の投稿と管理">
        <PostCreateButton />
      </DashboardHeader>
    </DashBoardShell>
  );
};

export default dashboardPage;
