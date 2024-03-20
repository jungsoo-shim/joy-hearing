import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer className='bg-stone-200 shadow px-2 py-3 mt-auto flex justify-center items-center'>
        Copyright &copy; {currentYear} Joy Hearing Aid Centre
      </footer>
    </>
  )
}
