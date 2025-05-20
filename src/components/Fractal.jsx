import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import '../styles/Fractal.css';

const Fractal = () => {
  const canvasRef = useRef();

  useEffect(() => {
    
    let angle;
    const sketch = (p) => {

      p.setup = () => {
        
        if (canvasRef.current) {
          canvasRef.current.innerHTML = '';
        }

        p.createCanvas(400, 400).parent(canvasRef.current);
        angle = p.PI / 4;
        p.stroke(255);
      };

      p.draw = () => {
        p.clear();
        p.translate(200, p.height);
        angle = p.map(p.sin(p.frameCount * 0.01), -1, 1, p.PI / 2, p.PI / 16);
        branch(100,true);
      };

      function branch(len, isRoot = false) {
        if(isRoot){
          p.stroke('#FFA500');
        }
        else{
          p.stroke('#00FFFF');
        }

        p.line(0, 0, 0, -len);
        p.translate(0, -len);

        if (len > 4) {
          p.push();
          p.rotate(angle);
          branch(len * 0.67);
          p.pop();
          p.push();
          p.rotate(-angle);
          branch(len * 0.67);
          p.pop();
        }
      }
    };

    const sketchInstance = new p5(sketch);

    return () => {
      sketchInstance.remove();
    };
  }, []);

  return <div ref={canvasRef} className="fractal-tree" />;
};

export default Fractal;