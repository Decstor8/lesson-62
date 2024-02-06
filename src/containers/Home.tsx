import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Наши Услуги</h2>
          <ul>
            <li>Шумоизоляция</li>
            <li>Антигравийная плёнка</li>
            <li>Керамика</li>
            <li>Удаление вмятин (PDR)</li>
            <li>Полировка</li>
            <li>Химчистка</li>
            <li>Нано-покрытие кузова</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Количество подписчиков и клиентов:</h2>
          <p><span className="text-primary">Подписчики:</span>44.8 тыс</p>
          <p><span className="text-primary">Клиенты:</span>Более 39 тыс клиентов</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
