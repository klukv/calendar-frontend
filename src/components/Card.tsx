import React from "react";
import "../css/card.css";

type TAuthor = {
  id: number;
  username: string;
  email: string;
  roles: string[];
};

interface TReminders {
  id: number;
  text: string;
  yers:string;
  mounth: string;
  days: string;
  clock: string;
  minuts: string;
  author: TAuthor;
}

const Card: React.FC<TReminders> = (reminder) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__row">
          <div className="card__reminder">
            <div className="card__reminder-title card-title">Напоминание:</div>
            <div className="card__reminder-info card-info">{reminder.text}</div>
          </div>
          <div className="card__date">
            <div className="card__date-title card-title">Дата:</div>
            <div className="card__date-info card-info">{reminder.days}.{reminder.mounth}.{reminder.yers} </div>
          </div>
          <div className="card__time">
            <div className="card__time-title card-title">Время:</div>
            <div className="card__time-info card-info">{reminder.clock}:{reminder.minuts}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
