import React, { useContext, useEffect } from 'react'
import { DataContext } from './ContextProvider';
import { useNavigate } from 'react-router-dom';
export default function AuthGuard({ children }) {
  const route = useNavigate();
  let { token } = useContext(DataContext);
  function navigate() {
    route("/login")
  }
  useEffect(() => {
    if (!token) navigate();
  }, [])
  return (
    <>
      {children}
    </>
  )
}
