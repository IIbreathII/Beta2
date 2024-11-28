import './Memberinfo.css';
import React, { useState, useEffect } from 'react';

const MemberInfo = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // Для отслеживания состояния загрузки

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/TestInfo');
        if (response.ok) {
          const result = await response.json();
          console.log(result); // Лог для проверки данных
          if (Array.isArray(result) && result.length > 0) {
            setData(result); // Устанавливаем данные, если они есть
          } else {
            setError('No data available'); // Ошибка, если данные пустые
          }
        } else {
          setError('Error fetching data'); // Обработка ошибки запроса
        }
      } catch (error) {
        console.error('Network error:', error);
        setError('Network error'); // Обработка ошибки сети
      } finally {
        setLoading(false); // Состояние загрузки завершено
      }
    };

    fetchData();
  }, []);

  const generateCards = () => {
    return data.map((item, index) => (
      <div className="card" key={index}>
        <div className="card-item">
          <p>Member</p>
          <label>{item.member}</label>
        </div>
        <div className="card-item">
          <p>Name</p>
          <label>{item.name}</label>
        </div>
        <div className="card-item">
          <p>Time</p>
          <label>{item.time}</label>
        </div>
      </div>
    ));
  };

  return (
    <div className="memberInfo">
      <div className='members'>
                    <label>Members</label>
      </div>
      <div className="top">
        {loading || error || data.length === 0 ? (
          <div className={loading ? "loading-message" : "error-message"}>
            <p>{loading ? "Loading..." : error || "No data available"}</p>
          </div>
        ) : (
          generateCards()
        )}
      </div>
      <div className="bottom">
        <button className="button">Downloud Info</button>
      </div>
    </div>
  );
};

export default MemberInfo;
