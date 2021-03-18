import React, {useState, useEffect} from 'react';

function ScrollToTop() {
    const [isHidden, setIsHidden] = useState(true);
    const hidden = isHidden ? "hidden" : "";

    const scroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
    }, []);

    return (
        <div onClick={scroll} className={`scroll-to-top-main ${hidden}`}>
            Go to Top
        </div>
    )
}

export default ScrollToTop;