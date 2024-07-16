"use client";
import React, { useRef, useEffect } from 'react';
import {  gsap } from 'gsap';
const Header = () => {
  const openTriggerRef = useRef<HTMLSpanElement>(null);
  const closeTriggerRef = useRef<HTMLSpanElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuMiddleRef = useRef<HTMLIFrameElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const openTriggerTopRef = useRef<HTMLIFrameElement>(null);
  const openTriggerMiddleRef = useRef<HTMLIFrameElement>(null);
  const openTriggerBottomRef = useRef<HTMLIFrameElement>(null);
  const closeTriggerLeftRef = useRef<HTMLIFrameElement>(null);
  const closeTriggerRightRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tlOpen = gsap.timeline({ paused: true });
      const tlClose = gsap.timeline({ paused: true });

      tlOpen.add("preOpen")
        .to(openTriggerTopRef.current, {
          x: "+80px",
          y: "-80px",
          delay: 0.1,
          ease: "power4.in",
          onComplete: () => {
            if (closeTriggerRef.current) closeTriggerRef.current.style.zIndex = '25';
          }
        }, "preOpen")
        .to(openTriggerMiddleRef.current, {
          x: "+=80px",
          y: "-=80px",
          ease: "power4.in",
          onComplete: () => {
            if (openTriggerRef.current) openTriggerRef.current.style.visibility = 'hidden';
          }
        }, "preOpen")
        .to(openTriggerBottomRef.current, {
          x: "+=80px",
          y: "-=80px",
          delay: 0.2,
          ease: "power4.in"
        }, "preOpen")
        .add("open", "-=0.4")
        .to(menuMiddleRef.current, {
          scaleY: 1,
          ease: "power4.inOut"
        }, "open")
        .fromTo(menuRef.current, {
          y: 30,
          opacity: 0,
          visibility: 'hidden'
        }, {
          y: 0,
          opacity: 1,
          visibility: 'visible',
          ease: "power4.out"
        }, "-=0.2")
        .add("preClose", "-=0.8")
        .to(closeTriggerLeftRef.current, {
          x: "-=100px",
          y: "+=100px",
          ease: "power4.out"
        }, "preClose")
        .to(closeTriggerRightRef.current, {
          x: "+=100px",
          y: "+=100px",
          delay: 0.2,
          ease: "power4.out"
        }, "preClose");

      tlClose.add("close")
        .to(menuMiddleRef.current, {
          backgroundColor: "#6295ca",
          ease: "power4.inOut",
          onComplete: () => {
            if (closeTriggerRef.current) closeTriggerRef.current.style.zIndex = '5';
            if (openTriggerRef.current) openTriggerRef.current.style.visibility = 'visible';
          }
        }, "close")
        .to(menuRef.current, {
          y: 20,
          opacity: 0,
          ease: "power4.out",
          onComplete: () => {
            if (menuRef.current) menuRef.current.style.visibility = 'hidden';
          }
        }, "close")
        .to(menuMiddleRef.current, {
          scaleY: 0,
          ease: "power4.inOut",
          onComplete: () => {
            if (menuMiddleRef.current) menuMiddleRef.current.style.backgroundColor = '#ffffff';
          }
        }, "close")
        .to(closeTriggerLeftRef.current, {
          x: "+=100px",
          y: "-=100px",
          ease: "power4.in"
        }, "close")
        .to(closeTriggerRightRef.current, {
          x: "-=100px",
          y: "-=100px",
          delay: 0.1,
          ease: "power4.in"
        }, "close")
        .to(openTriggerTopRef.current, {
          x: "-=80px",
          y: "+=80px",
          delay: 0.2,
          ease: "power4.out"
        }, "close")
        .to(openTriggerMiddleRef.current, {
          x: "-=80px",
          y: "+=80px",
          ease: "power4.out"
        }, "close")
        .to(openTriggerBottomRef.current, {
          x: "-=80px",
          y: "+=80px",
          delay: 0.1,
          ease: "power4.out"
        }, "close");

      if (openTriggerRef.current) {
        openTriggerRef.current.addEventListener('click', () => {
          if (tlOpen.progress() < 1) {
            tlOpen.play();
          } else {
            tlOpen.restart();
          }
        });
      }

      if (closeTriggerRef.current) {
        closeTriggerRef.current.addEventListener('click', () => {
          if (tlClose.progress() < 1) {
            tlClose.play();
          } else {
            tlClose.restart();
          }
        });
      }

      return () => {
        if (openTriggerRef.current) {
          openTriggerRef.current.removeEventListener('click', () => {
            if (tlOpen.progress() < 1) {
              tlOpen.play();
            } else {
              tlOpen.restart();
            }
          });
        }
        if (closeTriggerRef.current) {
          closeTriggerRef.current.removeEventListener('click', () => {
            if (tlClose.progress() < 1) {
              tlClose.play();
            } else {
              tlClose.restart();
            }
          });
        }
      };
    });

    return () => context.revert();
  }, []);

  return (
    <header className="absolute top-0 inset-x-0 z-10 md:pt-[40px] pt-5 md:px-9 px-5">
      <div className=" flex items-center justify-between">
        <a href="/" className=""><img src="/assets/images/logo.png" alt="次世代NFT" /></a>
        <div className="w-full max-w-full inset-0 min-h-screen absolute overflow-hidden scale-100">
        <div className="">
          <span className="font-mplus md:text-[30px] text-[24px] absolute right-[75px] md:top-[20px] top-[28px]">Menu</span>
          <span className="menu-trigger" ref={openTriggerRef}>
            <i className="menu-trigger-bar top" ref={openTriggerTopRef}></i>
            <i className="menu-trigger-bar middle" ref={openTriggerMiddleRef}></i>
            <i className="menu-trigger-bar bottom" ref={openTriggerBottomRef}></i>
          </span>
          <span className="close-trigger" ref={closeTriggerRef}>
            <i className="close-trigger-bar left" ref={closeTriggerLeftRef}></i>
            <i className="close-trigger-bar right" ref={closeTriggerRightRef}></i>
          </span>
        </div>
      <div className="inner-container">
        <i className="menu-bg middle" ref={menuMiddleRef}></i>
        <div className="menu-container" ref={menuContainerRef}>
          <ul className="menu" ref={menuRef}>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Create account</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>


      </div>
    </header>
  );
};

export default Header;
