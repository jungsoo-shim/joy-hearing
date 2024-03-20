import React, { useState, useEffect } from 'react';

export default function About() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div id="about" className="p-20 text-xl text-slate-600 font-bold mt-auto flex flex-col items-center justify-center">
            <p>Hello, I'm James Shim.</p>
            <img className="m-10 grayscale max-w-64" src="jh-portrait.jpg"></img>
            <div>
                <ul>
                <li>- Seoul National University Institute of Technology, Department of Mechanical and Aerospace Engineering</li>
                <li>- KAIST Department of Mechanical Engineering (Ph.D)</li>
                <li>- KIST Department of Mechanical Engineering (Senior Training Center)</li>
                <li>- George Brown College</li>
                <li>- {currentYear - 2002} years of hearing aid experience</li>
                </ul>
            </div>
        </div>
    )
}
