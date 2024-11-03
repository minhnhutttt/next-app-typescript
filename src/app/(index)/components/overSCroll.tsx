import { Scroll, useScroll } from '@react-three/drei'
import React from 'react'
import FV from './fv'
import Introduction from './introduction'
import Vision from './vision'
import Brain from './brain'
import Solution from './solution'
import Features from './features'
import Roadmap from './roadmap'

type Props = {}

export default function OverSCroll({}: Props) {
  return (
    <Scroll html>
      <div className="w-screen">
        <FV />
        <Introduction />
        <Vision />
        <Brain />
        <Solution />
        <Features />
        <Roadmap />
      </div>
    </Scroll>
  )
}