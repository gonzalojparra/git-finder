'use client'

import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";

import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  let storageValue = localStorage.getItem('theme');

  return (
    <Switch
      {...(storageValue ? { isSelected: storageValue === 'purple-dark' } : {})}
      size="lg"
      color="secondary"
      onChange={() => setTheme(theme === 'purple-dark' ? 'purple-light' : 'purple-dark')}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
}
