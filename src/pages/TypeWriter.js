import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
    const [currentText, setCurrentText] = useState("");
    let index = 0;
  
    useEffect(() => {
      const type = setInterval(() => {
        setCurrentText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(type);
        }
      }, 5);
  
      return () => clearInterval(type);
    }, [index, text]);
  
    return <div className='Smoother Round cursor-pointer bg-coal shadow-2xl text-xl leading-10 shadow-white p-28'>{currentText}</div>;
  };

  export default Typewriter;