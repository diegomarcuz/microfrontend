import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/MarketingIndex'
 
export const MarketingApp = () =>{

  const markentingRef = useRef()

  useEffect(()=>{

    mount(markentingRef.current)
  }, [])

  return <div ref={markentingRef} />

}