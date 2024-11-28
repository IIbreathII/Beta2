import React, { useState, useEffect } from 'react';
import './General.css';
import './Tests.css';
import './Ai.css';
import Diagram from "./components/Diagram"

import MemberInfo from './components/MemberInfo';

function TeacherPage() {
  const [view, setView] = useState('General'); // Состояние для переключения между видами
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null); // Состояние для ошибок
  const [message, setMessage] = useState('');
  
 

  const handleSendMessage = async () => {
    try {
      // Отправляем POST-запрос на сервер
      const res = await fetch('http://localhost:5000/server/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }), // Отправка сообщения
      });
  
      // Получаем ответ от сервера
      const data = await res.json();
  
      if (res.ok) {
        setResponse(data.response); // Устанавливаем полученный ответ
      } else {
        setResponse(`Ошибка: ${data.error || 'Неизвестная ошибка'}`);
      }
    } catch (error) {
      setResponse(`Ошибка: ${error.message}`);
    }
  };

  const handleUpdate = () => {
    window.location.reload(); // Перезагружает текущую страницу
  };

  return (
    <div className="container">
      {/* Левая часть (20% ширины и вся высота) */}
      <div className="left">
        <div className="top">
          <div className="circle"></div>
        </div>
        <div className="center">
          <button onClick={() => setView('General')} className="buttonLeft">General</button>
          <button onClick={() => setView('Ai')} className="buttonLeft">Ai cheack</button>
        </div>
      </div>

      {/* Правая часть (80% ширины) */}
      <div className="right">
        {error && <div className="error">{error}</div>}
        {view === 'General' && (
          <div className="Main">
            <div className="top">
              <div className='titleBox'>
                <div className='title'>
                  <label>General</label>
                </div>
              </div>
              <div className='subBox'>
                <div className='title'>
                  <label>Statistic and tools</label>
                </div>
              </div>
              
            </div>
            <div className="bot"> 
              <div className='score'>
                <label>Score</label>
              </div>
              {/*------------------------------------------------------------------*/}
              <Diagram />

              {/*-----------------------------------------------*/}
              <div>
                <MemberInfo />
              </div>
              <div className="reloud">
                <button className="button" onClick={handleUpdate}>Update info</button>
              </div>

              {/*-----------------------------------------------*/}

            </div>
          </div>
        )}
        {view === 'Ai' && (
          <div>
            <h1>AI Check View</h1>
            <p>Analyze with AI tools here.</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Введите сообщение..."
            />
            <button onClick={handleSendMessage}>Отправить</button>
            <div>
              <h2>Ответ:</h2>
              <p>{response}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeacherPage;
