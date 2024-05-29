import React, { useEffect, useRef } from 'react';
import '../css/flower.css';

const Flower: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (textRef.current) {
        textRef.current.style.display = 'block';
      }
    }, []);
  onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  interface CustomCSSProperties extends React.CSSProperties {
    '--d'?: string; // Define custom property
  }

  const growStyle: CustomCSSProperties = {
    '--d': '3.5s' as any 
  };
  
  const growStyle2: CustomCSSProperties = {
      '--d':'2.4s'
  };
  const growStyle3: CustomCSSProperties = {
    '--d':'2.8s'
   };
   const growStyle4: CustomCSSProperties = {
    '--d':'2.8s'
};
const growStyle5: CustomCSSProperties = {
    '--d':'3s'
};
  const growStyle6: CustomCSSProperties = {
    '--d':'2.2s'
  };
  const growStyle7: CustomCSSProperties = {
    '--d':'3.4s'
  };
  const growStyle8: CustomCSSProperties = {
    '--d':'3.6s'
  };
  const growStyle9: CustomCSSProperties = {
    '--d':'3.8s'
  };
  const growStyle10: CustomCSSProperties = {
    '--d':'4s'
  };
  const growStyle11: CustomCSSProperties = {
       '--d':'4.2s'
  };
  const growStyle12: CustomCSSProperties = {
    '--d':'4.4s'
  };
  const growStyle13: CustomCSSProperties = {
    '--d':'4.6s'
  };
  const growStyle14: CustomCSSProperties = {
    '--d':'4.8s'
  };
  const growStyle15: CustomCSSProperties = {
    '--d':'3.5s'
  };

  return (
        
    <div className="not-loaded" id='body'>
        <div className="night"></div>
        <div className="flowers">
          <div className="flower flower--1">
            <div className="flower__leafs flower__leafs--1">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
      
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
      
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
              <div className="flower__line__leaf flower__line__leaf--5"></div>
              <div className="flower__line__leaf flower__line__leaf--6"></div>
            </div>
          </div>
      
          <div className="flower flower--2">
            <div className="flower__leafs flower__leafs--2">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
      
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
      
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>
      
          <div className="flower flower--3">
            <div className="flower__leafs flower__leafs--3">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
      
              <div className="flower__light flower__light--1"></div>
              <div className="flower__light flower__light--2"></div>
              <div className="flower__light flower__light--3"></div>
              <div className="flower__light flower__light--4"></div>
              <div className="flower__light flower__light--5"></div>
              <div className="flower__light flower__light--6"></div>
              <div className="flower__light flower__light--7"></div>
              <div className="flower__light flower__light--8"></div>
      
            </div>
            <div className="flower__line">
              <div className="flower__line__leaf flower__line__leaf--1"></div>
              <div className="flower__line__leaf flower__line__leaf--2"></div>
              <div className="flower__line__leaf flower__line__leaf--3"></div>
              <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={growStyle}>
            <div className="flower__g-long">
              <div className="flower__g-long__top"></div>
              <div className="flower__g-long__bottom"></div>
            </div>
          </div>
      
          <div className="growing-grass">
            <div className="flower__grass flower__grass--1">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              <div className="flower__grass__leaf flower__grass__leaf--1"></div>
              <div className="flower__grass__leaf flower__grass__leaf--2"></div>
              <div className="flower__grass__leaf flower__grass__leaf--3"></div>
              <div className="flower__grass__leaf flower__grass__leaf--4"></div>
              <div className="flower__grass__leaf flower__grass__leaf--5"></div>
              <div className="flower__grass__leaf flower__grass__leaf--6"></div>
              <div className="flower__grass__leaf flower__grass__leaf--7"></div>
              <div className="flower__grass__leaf flower__grass__leaf--8"></div>
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
      
          <div className="growing-grass">
            <div className="flower__grass flower__grass--2">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              <div className="flower__grass__leaf flower__grass__leaf--1"></div>
              <div className="flower__grass__leaf flower__grass__leaf--2"></div>
              <div className="flower__grass__leaf flower__grass__leaf--3"></div>
              <div className="flower__grass__leaf flower__grass__leaf--4"></div>
              <div className="flower__grass__leaf flower__grass__leaf--5"></div>
              <div className="flower__grass__leaf flower__grass__leaf--6"></div>
              <div className="flower__grass__leaf flower__grass__leaf--7"></div>
              <div className="flower__grass__leaf flower__grass__leaf--8"></div>
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={growStyle2}>
            <div className="flower__g-right flower__g-right--1">
              <div className="leaf"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={growStyle3}>
            <div className="flower__g-right flower__g-right--2">
              <div className="leaf"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={growStyle3}>
            <div className="flower__g-front">
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                <div className="flower__g-front__leaf"></div>
              </div>
              <div className="flower__g-front__line"></div>
            </div>
          </div>
      
          <div className="grow-ans" style={growStyle4}>
            <div className="flower__g-fr">
              <div className="leaf"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
              <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
            </div>
          </div>
      
          <div className="long-g long-g--0">
            <div className="grow-ans" style={growStyle5}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle6}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle7}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle8}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
          <div className="long-g long-g--0">
            <div className="grow-ans" style={growStyle5}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle6}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle7}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle8}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--1">
            <div className="grow-ans" style={growStyle8}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle9}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle10}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle11}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--2">
            <div className="grow-ans" style={growStyle10}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle11}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle12}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle13}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>

          <div className="long-g long-g--2">
            <div className="grow-ans" style={growStyle10}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle11}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle12}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle13}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--3">
            <div className="grow-ans" style={growStyle10}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle11}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle5}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle8}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--4">
            <div className="grow-ans" style={growStyle10}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle11}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle5}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle8}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--5">
            <div className="grow-ans" style={growStyle10}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle11}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle5}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle8}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--6">
            <div className="grow-ans" style={growStyle11}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle12}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle13}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle14}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
      
          <div className="long-g long-g--7">
            <div className="grow-ans" style={growStyle5}>
              <div className="leaf leaf--0"></div>
            </div>
            <div className="grow-ans" style={growStyle4}>
              <div className="leaf leaf--1"></div>
            </div>
            <div className="grow-ans" style={growStyle15}>
              <div className="leaf leaf--2"></div>
            </div>
            <div className="grow-ans" style={growStyle8}>
              <div className="leaf leaf--3"></div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Flower;
