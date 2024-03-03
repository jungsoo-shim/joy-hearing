import React, { useState } from 'react';

export default function BurgerMenuIcon() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="p-2" onClick={toggleMenu}>
            {isMenuOpen ? (
            <>
            <div className="w-8 h-0.5 my-2 mx-0 bg-slate-600 translate-y-1.5 rotate-45"></div>
            <div className="w-8 h-0.5 my-2 mx-0 bg-slate-600 -translate-y-1 -rotate-45"></div>
            </>
            ) : (
            <>
            <div className="w-8 h-0.5 my-2 mx-0 bg-slate-600"></div>
            <div className="w-8 h-0.5 my-2 mx-0 bg-slate-600"></div>
            <div className="w-8 h-0.5 my-2 mx-0 bg-slate-600"></div>
            </>
            )}
        </div>
    )
}
