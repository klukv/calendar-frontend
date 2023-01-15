import dayjs from "dayjs";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import "../css/main.css";
import {
  setAllReminders,
  setChangingReminders,
} from "../redux/slices/reminderSlice";
import { RootState } from "../redux/store";
import { createReminder, getAllReminders } from "../services/message-service";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [reminder, setReminder] = React.useState<string>("");
  const [day, setDay] = React.useState<string>("");
  const [month, setMonth] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");
  const [time, setTime] = React.useState<string>("");

  const { changeReminders, user_id, reminders } = useSelector(
    ({ reminderSlice, userSlice }: RootState) => {
      return {
        changeReminders: reminderSlice.changeReminders,
        reminders: reminderSlice.reminders,
        user_id: userSlice.user.id,
      };
    }
  );
  const handleClickTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };
  const splitDate = (date: Date) => {
    const newDate = dayjs(date).format("YYYY-MM-DD").split("-");
    setYear(newDate[0]);
    setMonth(newDate[1]);
    setDay(newDate[2]);
  };

  var newTime: string[] = [];
  if (time !== undefined) {
    newTime = time.split(":");
  }
  const createMessage = (event: React.FormEvent<HTMLFormElement>) => {
    createReminder(
      {
        text: reminder,
        yers: year,
        mounth: month,
        days: day,
        clock: newTime[0],
        minuts: newTime[1],
      },
      user_id
    ).then((data) => dispatch(setChangingReminders(true)));
    event?.preventDefault();
  };

  React.useEffect(() => {
    if (changeReminders) {
      getAllReminders(user_id).then((data) => dispatch(setAllReminders(data)));
      dispatch(setChangingReminders(false));
    }
  }, [changeReminders]);

  return (
    <div className="main">
      <div className="container">
        <div className="main__calendar-title">Выберите дату:</div>
        <form
          className="main__inner"
          onSubmit={(event) => createMessage(event)}
        >
          <div className="main__calendar">
            <Calendar onClickDay={(value) => splitDate(value)} />
          </div>
          <div className="main__values">
            <div className="main__values-info">
              <div className="main__values-title ">Напоминание:</div>
              <input
                type="text"
                className="main__values-input input"
                value={reminder}
                onChange={(event) => setReminder(event.target.value)}
                required
              />
              <div className="main__values-title ">Время:</div>
              <input
                className="main__values-time input"
                type="time"
                value={time}
                onChange={(event) => handleClickTime(event)}
                required
              />
            </div>
            <button type="submit" className="main__values-btn">
              Добавить напоминание
            </button>
          </div>
        </form>
        <div className="main__reminders">
          <div className="main__reminders-title">Ваши напоминания:</div>
          <div className="main__reminders-row">
            {reminders.map((reminder, index) => (
              <Card key={index} {...reminder} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
