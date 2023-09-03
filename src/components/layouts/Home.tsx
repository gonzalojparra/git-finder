'use client'

import { useState } from "react";

import SearchInput from "../SearchInput";
import ProfileCard from "../ProfileCard";

import { UserProps } from "@/app/types";

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    if (res.status === 404) {
      setUser(null);
      return;
    }
    const data = await res.json();
    const { avatar_url, login, name, location, followers, following, html_url, bio, public_repos } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      name,
      location,
      followers,
      following,
      html_url,
      bio,
      public_repos,
    };

    setUser(userData);
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <SearchInput loadUser={loadUser} />
      {user && <ProfileCard user={user} />}
    </div>
  )
}