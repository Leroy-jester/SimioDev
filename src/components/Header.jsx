import { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '24',
    seconds: '00',
  });

  useEffect(() => {
    const STORAGE_KEY = 'bonus_expiration';

    let expirationTime = localStorage.getItem(STORAGE_KEY);

    if (!expirationTime) {
      expirationTime = Date.now() + 24 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, expirationTime);
    }

    const updateTimer = () => {
      const now = Date.now();
      const distance = expirationTime - now;

      if (distance <= 0) {
        setTimeLeft({
          hours: '00',
          minutes: '00',
          seconds: '00',
        });

        clearInterval(interval);
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <nav className="header-container nav">
        <h1 className='header-title'>Bônus extra por tempo limitado!</h1>
        <div className="nav-links">
          <div className='timer-card'>
            <h3>{timeLeft.hours}</h3>
            <h3>HORAS</h3>
          </div>

          <div className='timer-card'>
            <h3>{timeLeft.minutes}</h3>
            <h3>MINUTOS</h3>
          </div>

          <div className='timer-card'> 
            <h3>{timeLeft.seconds}</h3>
            <h3>SEGUNDOS</h3>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;