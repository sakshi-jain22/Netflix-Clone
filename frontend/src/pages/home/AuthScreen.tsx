import React, { useCallback, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Separator } from '../../components';

import DevicePile from '/assets/images/device-pile.png';
import DownloadGif from '/assets/videos/download-icon.gif';
import Kids from '/assets/images/kids.png';
import Logo from '/assets/images/netflix-logo.png';
import StrangerThingsLg from '/assets/images/stranger-things-lg.png';
import StrangerThingsSm from '/assets/images/stranger-things-sm.png';
import Tv from '/assets/images/tv.png';

const TRANSLATE_AUTH_SCREEN = 'pages.home.authScreen';

const AuthScreen: React.FC = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');

  const handleOnEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  return (
    <div className="hero-bg relative">
      {/* Navbar */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        <img src={Logo} alt="Netflix Logo" className="w-32 md:w-52" />
        <Link to={'/login'} className="text-white bg-red-600 py-1 px-2 rounded">
          {t(`${TRANSLATE_AUTH_SCREEN}.headerBtn`)}
        </Link>
      </header>

      {/* hero section */}
      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t(`${TRANSLATE_AUTH_SCREEN}.heroTitle`)}
        </h1>
        <p className="text-lg mb-4">{t(`${TRANSLATE_AUTH_SCREEN}.heroText`)}</p>
        <p className="mb-4">{t(`${TRANSLATE_AUTH_SCREEN}.heroSubTitle`)}</p>

        <form className="flex flex-col md:flex-row gap-4 w-1/2">
          <input
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
            id="email"
            placeholder="Email address"
            type="email"
            value={email}
            onChange={handleOnEmailChange}
          />
          <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
            {t(`${TRANSLATE_AUTH_SCREEN}.heroBtnText`)}
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>

      <Separator />

      {/* 1st section */}
      <div className="py-10 bg-black text-white">
        <div className="flex mx-auto max-w-6xl items-center justify-center md:flex-row flex-col md:px-2">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              {t(`${TRANSLATE_AUTH_SCREEN}.tvSectionTitle`)}
            </h2>
            <p className="text-lg md:text-xl">
              {t(`${TRANSLATE_AUTH_SCREEN}.tvSectionSubTitle`)}
            </p>
          </div>

          {/* right side */}
          <div className="flex-1 relative">
            <img src={Tv} alt="Tv image" className="mt-4 z-20 relative" />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay={true}
              muted
              loop>
              <source src={'/assets/videos/hero-vid.m4v'} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <Separator />

      {/* 2nd Section */}
      <div className="py-10 bg-black text-white">
        <div className="flex mx-auto max-w-6xl items-center justify-center md:flex-row flex-col md:px-2">
          {/* left side */}
          <div className="flex-1">
            <div className="relative">
              <img
                src={StrangerThingsLg}
                alt="Stranger Things img"
                className="mt-4"
              />
              <div
                className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black
              w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img src={StrangerThingsSm} alt="image" className="h-full" />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">
                      {t(`${TRANSLATE_AUTH_SCREEN}.imageText`)}
                    </span>
                    <span className="text-sm text-blue-500">
                      {t(`${TRANSLATE_AUTH_SCREEN}.downloading`)}
                    </span>
                  </div>

                  <img
                    src={DownloadGif} // "/assets/download-icon.gif"
                    alt="Download Icon"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              {t(`${TRANSLATE_AUTH_SCREEN}.downloadTitle`)}
            </h2>
            <p className="text-lg md:text-xl">
              {t(`${TRANSLATE_AUTH_SCREEN}.downloadSubTitle`)}
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* 3rd section */}
      <div className="py-10 bg-black text-white">
        <div className="flex mx-auto max-w-6xl items-center justify-center md:flex-row flex-col md:px-2">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              {t(`${TRANSLATE_AUTH_SCREEN}.streamTitle`)}
            </h2>
            <p className="text-lg md:text-xl">
              {t(`${TRANSLATE_AUTH_SCREEN}.streamSubTitle`)}
            </p>
          </div>

          {/* right side */}
          <div className="flex-1 relative overflow-hidden">
            <img
              src={DevicePile}
              alt="Device image"
              className="mt-4 z-20 relative"
            />
            <video
              className="absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]"
              playsInline
              autoPlay={true}
              muted
              loop>
              <source
                src={'/assets/videos/video-devices.m4v'}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <Separator />

      {/* 4th section */}
      <div className="py-10 bg-black text-white">
        <div className="flex mx-auto max-w-6xl items-center justify-center md:flex-row flex-col md:px-2">
          {/* left side */}
          <div className="flex-1 relative">
            <img src={Kids} alt="Enjoy on your TV" className="mt-4" />
          </div>

          {/* right side */}
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              {t(`${TRANSLATE_AUTH_SCREEN}.kidsSectionTitle`)}
            </h2>
            <p className="text-lg md:text-xl">
              {t(`${TRANSLATE_AUTH_SCREEN}.kidsSectionSubTitle`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
