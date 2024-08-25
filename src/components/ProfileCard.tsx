'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Card, CardBody, Image, Button, Progress, Badge, Tooltip } from '@nextui-org/react';
import { GitHubIcon } from '@/components/icons/GitHubIcon';

import { UserProps } from '@/app/types';

export default function ProfileCard({ user }: { user: UserProps }) {
  const [badge, setBadge] = useState('');
  const [tooltip, setTooltip] = useState('');

  useEffect(() => {
    let userProgress = user.public_repos / 2;

    if (userProgress >= 100) {
      setBadge('🔥');
      setTooltip(`${user.name ?? user.login } is on fire!`);
    } else if (userProgress >= 50) {
      setBadge('👍');
      setTooltip(`${user.name ?? user.login } is doing great!`);
    } else {
      setBadge('❄️');
      setTooltip(`${user.name ?? user.login } is just getting started!`);
    }
  }, [user.public_repos]);

  return (
    <Card
      isBlurred
      className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
      shadow='sm'
    >
      <CardBody>
        <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
          <div className='relative col-span-6 md:col-span-4'>
            <Tooltip content={tooltip} color='foreground'>
              <Badge content={badge}>
                <Image
                  isBlurred
                  isZoomed
                  alt='Album cover'
                  className='object-cover'
                  height={200}
                  shadow='md'
                  src={user.avatar_url}
                  width='100%'
                />
              </Badge>
            </Tooltip>
          </div>

          <div className='flex flex-col col-span-6 md:col-span-8'>
            <div className='flex justify-between items-start'>
              <div className='flex flex-col gap-0'>
                <h3 className='font-semibold text-foreground/90'>{user.login}</h3>
                <p className='text-small text-foreground/80'>{user.followers} followers | {user.following} following</p>
                <h1 className='text-large font-medium mt-2'>{user.name}</h1>
                <p className='text-small text-foreground/80'>{user.bio}</p>
              </div>
              <Button
                isIconOnly
                className='text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2'
                radius='full'
                variant='light'
              >
                <Link target='_blank' href={`${user.html_url}`}>
                  <GitHubIcon />
                </Link>
              </Button>
            </div>

            <div className='flex flex-col mt-3 gap-1'>
              <Progress
                aria-label='Contributions'
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-foreground/60",
                }}
                color='primary'
                size='sm'
                value={user.public_repos / 2}
                showValueLabel={true}
              />
            </div>

            <div className='flex w-full text-xs items-center justify-center mt-2'>
              <Link href={`${user.html_url}?tab=repositories`} target='_blank'>
                {user.public_repos} Public repositories
              </Link>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}