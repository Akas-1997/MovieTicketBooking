import React,{useContext} from 'react'
import {useGlobalContext} from "./context"
import Movies from './Movies'

export default function Home() {
  // const name=useGlobalContext();
  return (
    <div>
      <Movies/>
    </div>
  )
}
