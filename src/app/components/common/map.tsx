"use client"
import React, { useEffect, useRef, useState } from 'react';
import panzoom from 'panzoom';
import useIsMobile from '@/app/_hooks/useIsMobile';
import Pin from './pin';

export default function Map() {
    const panzoomRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const mapRef = useRef<HTMLDivElement>(null);
    const [activePin, setActivePin] = useState<string | null>(null);

  useEffect(() => {
    if (panzoomRef.current && isMobile) {
      const pz = panzoom(panzoomRef.current, {
        smoothScroll: false,
        bounds: true,
        boundsPadding: 0.15,
        minZoom: 1,
        maxZoom: 3,
      });

      return () => {
        pz.dispose();
      };
    }
  }, []);

  const handleButtonClick = (location: string) => {
    setActivePin(location);
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <>
    <div ref={mapRef} className="relative overflow-hidden aspect-[1435/875]">
        <div ref={panzoomRef} style={{ width: '100%', height: '100%' }} className="absolute">
            <Pin active={activePin === "Tokyo"} href="/" x="83.8" y="43">Tokyo</Pin>
            <Pin active={activePin === "Taipei"} href="/" x="78" y="49.5">Taipei</Pin>
            <Pin active={activePin === "Hanoi"} href="/" x="73.3" y="51.6">Hanoi</Pin>
            <Pin active={activePin === "Ho Chi Minh City"} href="/" x="73.5" y="57.7">Ho Chi Minh City</Pin>
            <Pin active={activePin === "Singapore"} href="/" x="72.5" y="63">Singapore</Pin>
            <Pin active={activePin === "Aelaide"} href="/" x="83.5" y="84">Aelaide</Pin>
            <Pin active={activePin === "Nicosia"} href="/" x="51" y="43">Nicosia</Pin>
            <Pin active={activePin === "London"} href="/" x="40.5" y="31.5">London</Pin>
            <Pin active={activePin === "Wales"} href="/" x="39.4" y="31.5">Wales</Pin>
            <Pin active={activePin === "NewYork"} href="/" x="18" y="40">NewYork</Pin>
            <Pin active={activePin === "Toronto"} href="/" x="16.5" y="37.3">Toronto</Pin>
            <Pin active={activePin === "Belize"} href="/" x="14.4" y="54.3">Belize</Pin>
            <Pin active={activePin === "Nevada"} href="/" x="4.7" y="41">Nevada</Pin>
            <figure>
                <img className="w-full" src="/images/map.png" alt="" />
            </figure>
        </div>
    </div>
    <div className="px-5">
      <div className="w-full max-w-[1170px] mx-auto flex justify-end">
        <div className="w-full max-w-[453px]">
          <p className="md:text-[20px] text-[16px] text-white">Location list</p>
          <div className="flex flex-wrap md:text-[14px] text-[12px] text-white md:mt-7 mt-5 md:gap-5 gap-4">
            <button type="button" onClick={() => handleButtonClick("NewYork")}>NEW YORK</button>
            <button type="button" onClick={() => handleButtonClick("Nevada")}>NEVADA</button>
            <button type="button" onClick={() => handleButtonClick("London")}>LONDON</button>
            <button type="button" onClick={() => handleButtonClick("Wales")}>WALES</button>
            <button type="button" onClick={() => handleButtonClick("Toronto")}>TORONTO</button>
            <button type="button" onClick={() => handleButtonClick("Belize")}>BELIZE</button>
            <button type="button" onClick={() => handleButtonClick("Tokyo")}>TOKYO</button>
            <button type="button" onClick={() => handleButtonClick("Aelaide")}>ADELAIDE</button>
            <button type="button" onClick={() => handleButtonClick("Singapore")}>SINGAPORE</button>
            <button type="button" onClick={() => handleButtonClick("Nicosia")}>NICOSIA</button>
            <button type="button" onClick={() => handleButtonClick("Taipei")}>TAIPEI</button>
            <button type="button" onClick={() => handleButtonClick("Hanoi")}>HANOI</button>
            <button type="button" onClick={() => handleButtonClick("Ho Chi Minh City")}>HO CHI MINH</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
