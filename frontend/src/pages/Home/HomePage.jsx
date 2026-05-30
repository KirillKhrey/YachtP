import { useEffect, useState } from "react";
import { getDashboard } from "../../api/dashboardApi";
import "./HomePage.css";
import calendarIcon from "../../assets/icons/calendar-days.svg";
import usersIcon from "../../assets/icons/users.svg";
import trendIcon from "../../assets/icons/trending-up.svg";
import medalIcon from "../../assets/icons/medal.svg";

export default function HomePage() {
  const [data, setData] = useState(null);

  /*
  useEffect(() => {
    getDashboard()
      .then(setData)
      .catch((err) => console.log(err));
  }, []); */

useEffect(() => {
  const fakeData = {
    stats: {
      lessons_month: 8,
      members: 42,
      attendance: 76,
      competitions: 3
    },

    upcomingTasks: [
      {
        id: 1,
        title: "Тренировка на воде",
        task_date: "2026-06-01",
        task_time: "10:00"
      },
      {
        id: 2,
        title: "Теория парусов",
        task_date: "2026-06-03",
        task_time: "14:00"
      },
      {
        id: 3,
        title: "Подготовка к регате",
        task_date: "2026-06-05",
        task_time: "09:30"
      }
    ],

    events: [
      {
        id: 1,
        title: "Открытие сезона",
        date_from: "01.06",
        date_to: "02.06",
        description: "Старт летнего сезона яхт-клуба"
      },
      {
        id: 2,
        title: "Регата Москва",
        date_from: "10.06",
        date_to: "12.06",
        description: "Городские соревнования"
      },
      {
        id: 3,
        title: "День клуба",
        date_from: "20.06",
        date_to: "20.06",
        description: "Праздничное мероприятие"
      }
    ]
  };

  setData(fakeData);
}, []);

  if (!data) return <div>Loading...</div>;

  const stats = data.stats || {};
  const upcomingTasks = data.upcomingTasks || [];
  const events = data.events || [];

  return (
    <>
      {/* HEADER BLOCK */}
      <section className="page-header">
        <h1>Добро пожаловать</h1>
        <p className="subtitle">Обзор активности яхт-клуба</p>
      </section>

      {/* STATS (1:1 PHP) */}
      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-left">
            <div className="stat-title">Занятий в месяц</div>
            <div className="stat-value">
              {stats.lessons_month ?? 0}
            </div>
          </div>
          <div className="stat-icon icon-blue">
            <img src={calendarIcon} alt="" />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-left">
            <div className="stat-title">Участников клуба</div>
            <div className="stat-value">
              {stats.members ?? 0}
            </div>
          </div>
          <div className="stat-icon icon-green">
            <img src={usersIcon} alt="" />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-left">
            <div className="stat-title">Посещаемость</div>
            <div className="stat-value">
              {stats.attendance ?? 0}%
            </div>
          </div>
          <div className="stat-icon icon-purple">
            <img src={trendIcon} alt="" />
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-left">
            <div className="stat-title">Соревнований</div>
            <div className="stat-value">
              {stats.competitions ?? 0}
            </div>
          </div>
          <div className="stat-icon icon-orange">
            <img src={medalIcon} alt="" />
          </div>
        </div>

      </section>

      {/* MAIN GRID */}
      <section className="content-grid">

        {/* LESSONS (PHP: upcomingTasks) */}
        <div className="card">
          <h2>Ближайшие занятия</h2>

          {upcomingTasks.map((lesson) => {
            const date = new Date(lesson.task_date);
            const day = String(date.getDate()).padStart(2, "0");
            const month = date.toLocaleString("ru-RU", { month: "short" });

            return (
              <div className="item" key={lesson.id}>
                <div className="date-box">
                  <div>{day}</div>
                  <small>{month}</small>
                </div>

                <div className="item-info">
                  <div className="title">
                    {lesson.title}
                  </div>
                  <div className="time">
                    {lesson.task_time}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="lessons-footer">
            <a href="/tasks" className="view-all">
              Смотреть все <span>→</span>
            </a>
          </div>
        </div>

        {/* EVENTS */}
        <div className="card">
          <h2>События</h2>

          {events.map((event) => (
            <div className="news-item" key={event.id}>
              <div className="news-title">
                {event.title}
              </div>

              <div className="news-date">
                {event.date_from} — {event.date_to}
              </div>

              <div className="news-text">
                {event.description}
              </div>
            </div>
          ))}

          <div className="news-footer">
            <a href="/events" className="view-all">
              Все события <span>→</span>
            </a>
          </div>
        </div>

      </section>
    </>
  );
}