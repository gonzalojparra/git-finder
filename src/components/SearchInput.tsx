'use client'

import { useState } from 'react';

import { Input, Button } from '@nextui-org/react';
import { SearchIcon } from './icons/SearchIcon';

type SearchInputProps = {
  loadUser: (userName: string) => Promise<void>;
}

export default function SearchInput({ loadUser }: SearchInputProps) {
  const [userName, setUserName] = useState('');

  return (
    <div className="py-8 flex justify-center items-center">
      <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          input: [
            "bg-transparent",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        onChange={(e) => setUserName(e.target.value)}
        startContent={
          <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      <div className='px-3'>
        <Button
          size='lg'
          color='primary'
          variant='ghost'
          onClick={() => loadUser(userName)}
        >
          Search
        </Button>
      </div>
    </div>
  );
}