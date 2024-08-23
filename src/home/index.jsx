import Header from '@/components/custom/Header';
import { UserButton, useAuth } from '@clerk/clerk-react';
import { AtomIcon, Edit, Share2 } from 'lucide-react';
import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link, Navigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';

function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="flex flex-col items-center md:flex-row mt-4 lg:mx-10 p-8 gap-10">
        <div className="flex-1 md:p-10 space-y-6">
          <div className="inline-flex border-b-4 shadow-md p-1 font-medium rounded-lg">
            ✨ New AI Technology
          </div>
          <h1 className="font-bold text-3xl lg:text-5xl lg:leading-[55px]">
            Stand out with an <br />
            Professionally
            <br /> designed CV using AI
          </h1>
          <p className="text-xl text-gray-400">
            Get noticed and save time with our AI powered Resume builder. Free
            up your agenda by relying on us to do the heavy lifiting
          </p>
          <Link to={'/auth/sign-in'}>
            <button className="bg-primary text-white py-4 px-8 rounded-full mt-8">
              Get Started
            </button>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <img src="/resume-landing-2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
