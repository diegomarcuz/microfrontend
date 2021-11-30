import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingIndex'
 
export const MarketingApp = () =>{

  const marketingRef = useRef()

  useEffect(()=>{

    mount(marketingRef.current)
  }, [])

  return <div ref={marketingRef} />

}