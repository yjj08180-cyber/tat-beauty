import { useEffect, useRef } from 'react';

export default function UnicornStudioBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initUnicorn = () => {
      if ((window as any).UnicornStudio) {
        (window as any).UnicornStudio.init();
      }
    };

    let script = document.querySelector('script[src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js"]') as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js';
      script.async = true;
      script.onload = initUnicorn;
      document.head.appendChild(script);
    } else {
      if ((window as any).UnicornStudio) {
        initUnicorn();
      } else {
        script.addEventListener('load', initUnicorn);
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div 
        ref={containerRef}
        className="w-full h-full" 
        data-us-project="88j9LRPsRbeEJ3405Sm1"
      ></div>
    </div>
  );
}
