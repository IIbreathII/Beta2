import React, { useState, useEffect } from 'react';
import './General.css';
import './Diagram.css';
import './Tests.css';
import './Ai.css'

import MemberInfo from './components/MemberInfo';


function TeacherPage() {
  const [data, setData] = useState(null); // Состояние для данных
  const [view, setView] = useState('General'); // Состояние для переключения между видами
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null); // Состояние для ошибок
  const [message, setMessage] = useState('');
  const a1 = "-20";
  const a2 = "160";
  const a3 = "20";
  const a4 = "100";


  const handleSendMessage = async () => {
    try {
      const res = await fetch('http://localhost:5000/TestInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();

      if (res.ok) {
        setResponse(data.response); // Ответ от модели
      } else {
        setResponse(``);
      }
    } catch (error) {
      setResponse(``);
    }
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
              <div className='eventMenu'>

              </div>
            </div>
            <div className="bot"> 
            <div className='score'>
                    <label>Score</label>
            </div>
              <div className="DiagramCard">
          
                <div className="pie-container">
                  <div className="pie" id="a1" style={{
                    transform: `rotate(${a2}deg)`,
                  }}></div>
                  <div className="pie" id="a2" style={{

                    transform: `rotate(${a1}deg)`,
                  }}></div>
                  <div className="pie" id="a3" style={{
                    transform: `rotate(${a3}deg)`,
                  }}></div>
                  <div className="pie" id="a4" style={{

                    transform: `rotate(${a4}deg)`,
                  }}></div>

                </div>
                <div className='bottom'>
                  <div className='left'>
                    <label style={{ color: '#5cb57b' }}>{data ? data.member : 'No data'}</label>
                    <label style={{ color: '#432e2d' }}>{data ? data.member : 'No data'}</label>
                  </div>
                  <div className='right'>
                    <label style={{ color: '#5cb57b' }}>{data ? data.member : 'No data'}</label>
                    <label style={{ color: '#432e2d' }}>{data ? data.member : 'No data'}</label>
                  </div>
                </div>
              </div>

              {/*-----------------------------------------------*/}
              
              <div>
                
                <MemberInfo />
              
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
