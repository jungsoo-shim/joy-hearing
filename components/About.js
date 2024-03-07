import React, { useState, useEffect } from 'react';

export default function About() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div id="about" className="mt-auto h-screen flex flex-col items-center justify-center">
            <p>Hello, I'm James Shim.</p>
            <img className="max-w-16" src="joy-hearing-logo.svg"></img>
            <p>Seoul National University Institute of Technology, Department of Mechanical and Aerospace Engineering</p>
            <p>KAIST Department of Mechanical Engineering (Ph.D)</p>
            <p>Cornell University (Post Doctorate)</p>
            <p>KIST Department of Mechanical Engineering (Senior Training Center)</p>
            <p>George Brown College</p>
            <p>{currentYear - 2002} years of hearing aid experience</p>
        </div>
    )
}
