import { ThemeToggle } from '@/components/theme-toggle';
import { Input } from '@/components/ui/input';
import React from 'react';

function Home() {
  return (
    <main>
      <Input
      type='search'
      placeholder='Search...'
      className='md:w-[100px] lg:w-[300px]'
    />
    <ThemeToggle />
    </main>
  );
}

export default Home;

