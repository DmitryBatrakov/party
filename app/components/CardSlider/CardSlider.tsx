"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

type Card = {
  id: number;
  from: string;
  descAlways: string;
  descNever: string;
  sometimes: string;
  wishes: string;
};

const cards: Card[] = [
  {
    id: 1,
    from: "Эмма",
    descAlways: "верь в себя",
    descNever: "не предавай себя и свои принципы  ",
    sometimes: "отдохнуть и отстраниться от ситуации.",
    wishes: "всегда помнить, почему вы выбрали друг друга",
  },
  {
    id: 2,
    from: "Соня",
    descAlways: "улыбайся",
    descNever: "не теряй надежу в лучшее",
    sometimes: "давай пенделей Владу",
    wishes: "слушать друг друга и слышать друг друга",
  },
  {
    id: 3,
    from: "Полина",
    descAlways: "верь в лучшее",
    descNever: "не сдавайся",
    sometimes: "просто бокал просекко и танцы до утра",
    wishes:
      " чтоб семейная жизнь была как хороший сериал-захватывающая, немного неожиданная, но всегда с хэппи-эндом",
  },
  {
    id: 4,
    from: "Софа",
    descAlways:
      "цените друг друга, даже в мелочах. Пусть каждый день будет поводом для благодарности",
    descNever:
      "не забывай, кто в доме королева — даже если он “вроде как глава семьи”",
    sometimes: "съесть что-то вкусное и обвинить во всём гормоны",
    wishes:
      "Мира в доме, приключений в жизни и огня в глазах друг друга даже через 40 лет",
  },
  {
    id: 5,
    from: "Вика",
    descAlways:
      "выбирай любовь, даже когда хочется выбрать тапок и кинуть в мужа",
    descNever: "не забывай, какая ты настоящая — красивая, смешная и добрая!",
    sometimes:
      "просто выдохнуть, включить сериал и забыть, что в раковине посуда",
    wishes:
      "расти вместе, уметь смеяться над глупостями, поддерживать друг друга!",
  },
];

export default function CardSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="">
      <h1 className="text-center py-2 text-xl font-semibold text-rose-300">
        Advice for the bridge-to-be
      </h1>
      <div className="flex gap-2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className=" text-rose-300 rounded-xl"
        >
          <IoMdArrowDropleft size={30} />
        </button>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={1100}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            type: "bullets",
          }}
          autoplay={{ delay: 10000 }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className=" p-3 rounded-xl border-rose-300 border text-rose-300 flex flex-col justify-between min-h-[370px]">
                <div>
                  <div>
                    <span className="font-pacifico text-lg">Всегда: </span>
                    <span>{card.descAlways}</span>
                  </div>
                  <div>
                    <span className="font-pacifico text-lg">Никогда: </span>
                    <span>{card.descNever}</span>
                  </div>
                  <div>
                    <span className="font-pacifico text-lg">
                      Иногда тебе нужно:{" "}
                    </span>
                    <span>{card.sometimes}</span>
                  </div>
                  <div>
                    <span className="font-pacifico text-lg">
                      Я желаю вам двоим:{" "}
                    </span>
                    <span>{card.wishes}</span>
                  </div>
                </div>
                <div className="text-right w-full p-3">
                  <span className="inline-flex items-center gap-1 text-lg text-rose-300">
                    <span className="font-pacifico">С любовью твоя :</span>
                    <span className="font-normal">{card.from}</span>
                    <CiHeart size={22} />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className=" text-rose-300 rounded-xl"
        >
          <IoMdArrowDropright size={30} />
        </button>
      </div>
    </div>
  );
}
