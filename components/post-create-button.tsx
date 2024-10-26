import { cn } from '@/lib/utils';
import React from 'react';
import { buttonVariants } from './ui/button';

const PostCreateButton = () => {
  const [isLoading, setIsLoading] = useState;

  return <button className={cn(buttonVariants())}>新しい投稿</button>;
};

export default PostCreateButton;
