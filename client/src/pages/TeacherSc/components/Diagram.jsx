// DiagramCard.js
import React, { useEffect, useState } from 'react';
import './Diagram.css';

const DiagramCard = () => {
  // Состояния для данных углов
  const [angles, setAngles] = useState({ a1: 0, a2: 0, a3: 0 });

  useEffect(() => {
    // Функция для получения данных с бэкенда
    const fetchAngles = async () => {
      try {
        const response = await fetch('http://localhost:5000/server/angles'); // Указать ваш URL бэкенда
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length === 3) {
          setAngles({ a1: data[0], a2: data[1], a3: data[2] });
        } else {
          throw new Error('Неверный формат данных');
        }
      } catch (error) {
        console.error('Ошибка получения данных:', error);
      }
    };

    fetchAngles();
  }, []); // Зависимости не нужны, поскольку запрос выполняется один раз

  return (
    <div className="DiagramCard">
      <div 
        className="pie-container" 
        style={{
          '--a1': `${angles.a1}deg`,
          '--a2': `${angles.a2}deg`,
          '--a3': `${angles.a3}deg`,
        }}
      ></div>
      <div className='bottom'>
        <div className='left'>
          <label style={{ color: '#5cb57b' }}>{angles.a1}</label>
          <label style={{ color: '#432e2d' }}>{angles.a2}</label>
        </div>
        <div className='right'>
          <label style={{ color: '#5cb57b' }}>{angles.a3}</label>
        </div>
      </div>
    </div>
  );
};

export default DiagramCard;
