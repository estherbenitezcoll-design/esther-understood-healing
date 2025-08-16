import { useEffect } from 'react';

const CursorTrail = () => {
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailIndex = 0;
    const colors = ['cursor-trail-1', 'cursor-trail-2', 'cursor-trail-3', 'cursor-trail-4', 'cursor-trail-5'];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Create trail particle
      const trail = document.createElement('div');
      trail.className = `cursor-trail ${colors[trailIndex % colors.length]}`;
      trail.style.left = `${mouseX - 4}px`;
      trail.style.top = `${mouseY - 4}px`;
      
      document.body.appendChild(trail);
      
      // Remove trail after animation
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 600);
      
      trailIndex++;
    };

    // Throttle the effect to avoid too many particles
    let lastTime = 0;
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 50) { // Create particle every 50ms
        handleMouseMove(e);
        lastTime = now;
      }
    };

    document.addEventListener('mousemove', throttledMouseMove);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      // Clean up any remaining trails
      const trails = document.querySelectorAll('.cursor-trail');
      trails.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, []);

  return null;
};

export default CursorTrail;