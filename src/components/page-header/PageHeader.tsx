import "./PageHeader.scss";
import React from 'react'
import { useLocation } from "react-router-dom";
import { PAGE_HEADERS } from '../../constants/pageHeaders';


export default function PageHeader() {
  const { pathname } = useLocation();


  return (
    <header className='page-header'>
      <h1>{PAGE_HEADERS[pathname]?.title}</h1>
      <p>{PAGE_HEADERS[pathname]?.subtitle}</p>
    </header>
  );
}
