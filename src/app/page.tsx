"use client";

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const ANIMALS = ["wolf", "bear", "hawk", "zebra", "snake", "lion", "tiger"];

const STORAGE_KEY = "chat_identity";

const generateUserName = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymous-${word}-${nanoid(5)}`;
};

export default function Home() {
  const [identity, setIdentity] = useState("");

  useEffect(() => {
    let identity = localStorage.getItem(STORAGE_KEY);
    if (!identity) {
      identity = generateUserName();
      localStorage.setItem(STORAGE_KEY, identity);
    }
    setIdentity(identity);
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-md">
          <div className="space-y-5">
            <div className="space-y-3 flex flex-col">
              <label htmlFor="identity" className="text-white">
                Your Identity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 tex-sm text-zinc-400 font-mono">
                  {identity}
                </div>
              </div>
            </div>
            <button className="w-full bg-zinc-100 text-black p-3 text-sm font-bold hover:bg-zinc-50 hover:text-black transition-colors cursor-pointer mt-2 disabled:opacity-50">
              CREATE SECURE ROOM
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
