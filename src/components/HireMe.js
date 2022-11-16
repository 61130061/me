import { useRef } from 'react';

function HireMe() {
  const hand = useRef(null);

  const handleHandShake = () => {
    if (hand.current) {
      if (hand.current.classList.contains('shaking')) {
        hand.current.classList.remove('shaking');
      } else {
        hand.current.classList.add('shaking');
      }
    }
  }

  return (
    <div className="my-12 flex justify-center">
      <a 
        href="mailto: h.warunyu@gmail.com"
      className="text-4xl my-4 font-[400] text-center flex hover:cursor-pointer hover:font-[500]"
      onMouseEnter={handleHandShake} 
      onMouseLeave={handleHandShake}
      >
        <div>Hire me </div>
        <div ref={hand} className="mx-1">👋</div>!
      </a>
    </div>
  )
}

export default HireMe;