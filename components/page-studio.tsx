"use client";

import { useState } from "react";
import Spotlight from "@/components/spotlight";
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";

export default function Studio() {
  const [posts, setPosts] = useState<Array<{ id: number; title: string; content: string; type: string; date: string }>>([
    {
      id: 1,
      title: "Новые возможности платформы",
      content: "Мы рады представить вам новые функции, которые сделают работу с платформой еще удобнее. Теперь вы можете создавать публикации, комментировать и взаимодействовать с контентом.",
      type: "news",
      date: "15.12.2024"
    },
    {
      id: 2,
      title: "Обновление интерфейса",
      content: "Мы полностью переработали дизайн интерфейса, сделав его более современным и интуитивным. Все изменения направлены на улучшение пользовательского опыта.",
      type: "news",
      date: "14.12.2024"
    },
    {
      id: 3,
      title: "Советы по созданию контента",
      content: "Хотите создать интересный контент? Следуйте нашим рекомендациям: пишите понятно, используйте качественные изображения и не забывайте о структуре текста.",
      type: "post",
      date: "13.12.2024"
    },
    {
      id: 4,
      title: "Новое в системе комментариев",
      content: "Теперь вы можете отвечать на комментарии, редактировать свои сообщения и использовать форматирование текста. Это сделает общение более удобным.",
      type: "news",
      date: "12.12.2024"
    },
    {
      id: 5,
      title: "Как увеличить вовлеченность",
      content: "Публикуйте регулярно, задавайте вопросы аудитории, используйте визуальный контент и не забывайте отвечать на комментарии. Это поможет увеличить активность.",
      type: "post",
      date: "11.12.2024"
    },
    {
      id: 6,
      title: "Аналитика и статистика",
      content: "Теперь доступна подробная аналитика по вашим публикациям. Вы можете отслеживать количество просмотров, лайков и комментариев в реальном времени.",
      type: "news",
      date: "10.12.2024"
    }
  ]);
  const [comments, setComments] = useState<Array<{ id: number; author: string; text: string; date: string; avatar: string }>>([
    {
      id: 1,
      author: "Алексей Иванов",
      text: "Отличная новость! Очень интересная информация, спасибо за публикацию.",
      date: "15.12.2024",
      avatar: "AI"
    },
    {
      id: 2,
      author: "Мария Петрова",
      text: "Спасибо за информацию. Очень полезный контент, буду следить за обновлениями.",
      date: "14.12.2024",
      avatar: "МП"
    },
    {
      id: 3,
      author: "Дмитрий Сидоров",
      text: "Превосходно! Это именно то, что я искал. Продолжайте в том же духе!",
      date: "13.12.2024",
      avatar: "ДС"
    },
    {
      id: 4,
      author: "Елена Козлова",
      text: "Интересная точка зрения. Хотелось бы узнать больше деталей по этой теме.",
      date: "12.12.2024",
      avatar: "ЕК"
    },
    {
      id: 5,
      author: "Иван Смирнов",
      text: "Отличная работа! Очень качественный материал, рекомендую всем к прочтению.",
      date: "11.12.2024",
      avatar: "ИС"
    },
    {
      id: 6,
      author: "Ольга Волкова",
      text: "Спасибо за такой подробный разбор. Очень помогло разобраться в вопросе.",
      date: "10.12.2024",
      avatar: "ОВ"
    }
  ]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    type: "news"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.content) {
      const newPost = {
        id: posts.length + 1,
        title: formData.title,
        content: formData.content,
        type: formData.type,
        date: new Date().toLocaleDateString("ru-RU")
      };
      setPosts([newPost, ...posts]);
      setFormData({ title: "", content: "", type: "news" });
    }
  };

  return (
    <section className="pt-10 md:pt-30 mx-auto max-w-6xl px-4 sm:px-6">
      <div className="py-12 md:py-20">
        {/* Заголовок Студия */}
        <div className="text-center pb-8 md:pb-20">
          <h1
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-4xl"
            data-aos="fade-up"
          >
            Студия
          </h1>
          <div className="mx-auto max-w-4xl mb-8">
            <div className="border-t border-b w-full py-5 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
              <div className="flex flex-1 gap-2 items-center">
                <span className="w-full btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] flex items-center justify-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Создать публикацию
                </span>
              </div>
            </div>
          </div>

          {/* Блок статистики */}
          <div className="mx-auto max-w-4xl mb-8">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent mb-6"
              data-aos="fade-up"
            >
              Статистика
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Статистика лайков */}
              <Spotlight className="grid">
                <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0556 9.00391C15.5164 7.57689 15.7491 6.32772 15.7491 5.25064C15.7491 2.85197 14.81 1.00323 13.2491 1.00323C12.4023 1.00323 12.1402 1.50747 11.8123 2.75005C11.8295 2.68512 11.6494 3.38401 11.5968 3.57126C11.4958 3.93 11.32 4.54075 11.0697 5.40227C11.063 5.42535 11.0532 5.4471 11.0403 5.46718L8.17359 9.95284C7.49554 11.0138 6.49507 11.8293 5.31919 12.2795L4.06196 12.7609C3.26859 13.0646 2.80797 13.8943 2.96968 14.7283L3.65584 18.267C3.82298 19.1289 4.47629 19.815 5.32909 20.024L13.5786 22.0459C16.1098 22.6663 18.6682 21.1314 19.3121 18.606L20.886 12.4333C21.2612 10.9616 20.3723 9.46441 18.9007 9.08916C18.6786 9.03255 18.4504 9.00391 18.2212 9.00391H15.0556Z" fill="#f5f5f5"/>
                          </svg>
                          <span className="text-sm font-medium text-gray-300">Лайки</span>
                        </div>
                      </div>
                      <div className="text-3xl font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        1,234
                      </div>
                      <div className="text-xs text-gray-500 mt-2">+12 за сегодня</div>
                    </div>
                  </div>
                </div>
              </Spotlight>

              {/* Статистика дизлайков */}
              <Spotlight className="grid">
                <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0556 14.1829C15.5164 15.6099 15.7491 16.859 15.7491 17.9361C15.7491 20.3348 14.81 22.1835 13.2491 22.1835C12.4493 22.1835 12.1712 21.7338 11.8665 20.637L11.5968 19.6155C11.4958 19.2568 11.32 18.646 11.0697 17.7845C11.063 17.7614 11.0532 17.7397 11.0403 17.7196L8.17359 13.2339C7.49554 12.173 6.49507 11.3575 5.31919 10.9073L4.06196 10.4259C3.26859 10.1221 2.80797 9.29247 2.96968 8.45847L3.65584 4.9198C3.82298 4.05781 4.47629 3.3718 5.32909 3.16278L13.5786 1.14085C16.1098 0.520459 18.6682 2.05539 19.3121 4.58072L20.886 10.7534C21.2612 12.2251 20.3723 13.7224 18.9007 14.0976C18.6786 14.1542 18.4504 14.1829 18.2212 14.1829H15.0556Z" fill="#f5f5f5"/>
                          </svg>
                          <span className="text-sm font-medium text-gray-300">Дизлайки</span>
                        </div>
                      </div>
                      <div className="text-3xl font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        56
                      </div>
                      <div className="text-xs text-gray-500 mt-2">+2 за сегодня</div>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </div>
          </div>

          {/* Блок последних комментариев */}
          <div className="mx-auto max-w-4xl mb-8">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent mb-6"
              data-aos="fade-up"
            >
              Последние комментарии
            </h2>
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex-shrink-0 w-80">
                      <Spotlight className="grid">
                        <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                          <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                            <div className="p-4">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-semibold text-sm">
                                  {comment.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="mb-1 flex items-center justify-between">
                                    <span className="text-sm font-medium bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                      {comment.author}
                                    </span>
                                    <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{comment.date}</span>
                                  </div>
                                  <p className="text-sm text-gray-300 line-clamp-3">{comment.text}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Spotlight>
                    </div>
                  ))}
                </div>
            </div>
          </div>

          {/* Блок последних публикаций */}
          <div className="mx-auto max-w-4xl mb-8">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent mb-6"
              data-aos="fade-up"
            >
              Последние публикации
            </h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <Spotlight key={post.id} className="grid">
                  <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <Image
                            className="flex-shrink-0 w-20 h-20 rounded-lg object-cover"
                            src={WorflowImg01}
                            alt={post.title}
                            width={80}
                            height={80}
                          />
                          <div className="flex-1 min-w-0 text-left">
                            <h3 className="mb-2 text-lg font-semibold text-gray-200 line-clamp-1">
                              {post.title}
                            </h3>
                            <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                              {post.content}
                            </p>
                            <div className="flex items-center justify-start gap-3">
                              <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                                <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                  {post.type === "news" ? "Новость" : "Пост"}
                                </span>
                              </span>
                              <span className="text-xs text-gray-500">{post.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Spotlight>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
