"use client"
import React, { useEffect, useRef, useState } from 'react';
import panzoom from 'panzoom';
import useIsMobile from '@/app/_hooks/useIsMobile';
import Pin from './pin';

export default function Map() {
    const panzoomRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

  useEffect(() => {
    console.log(isMobile)
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
  return (
    <>
    <div className="relative overflow-hidden aspect-[1435/875]">
        <div ref={panzoomRef} style={{ width: '100%', height: '100%' }} className="absolute">
            <Pin href="/" x="83.8" y="43">Tokyo</Pin>
            <Pin href="/" x="78" y="49.5">Taipei</Pin>
            <Pin href="/" x="73.3" y="51.6">Hanoi</Pin>
            <Pin href="/" x="73.5" y="57.7">Ho Chi Minh City</Pin>
            <Pin href="/" x="72.5" y="63">Singapore</Pin>
            <Pin href="/" x="83.5" y="84">Aelaide</Pin>
            <Pin href="/" x="51" y="43">Nicosia</Pin>
            <Pin href="/" x="40.5" y="31.5">London</Pin>
            <Pin href="/" x="39.4" y="31.5">Wales</Pin>
            <Pin href="/" x="18" y="40">NewYork</Pin>
            <Pin href="/" x="16.5" y="37.3">Toronto</Pin>
            <Pin href="/" x="14.4" y="54.3">Belize</Pin>
            <Pin href="/" x="4.7" y="41">Nevada</Pin>
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
            <a href='/'>NEW YORK</a>
            <a href='/'>NEVADA</a>
            <a href='/'>LONDON</a>
            <a href='/'>WALES</a>
            <a href='/'>TORONTO</a>
            <a href='/'>BELIZE</a>
            <a href='/'>TOKYO</a>
            <a href='/'>ADELAIDE</a>
            <a href='/'>SINGAPORE</a>
            <a href='/'>NICOSIA</a>
            <a href='/'>TAIPEI</a>
            <a href='/'>HANOI</a>
            <a href='/'>HO CHI MINH</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
