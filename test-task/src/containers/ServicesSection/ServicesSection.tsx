import React, { FC, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import ServicesCard from '../../components/ServicesCard/ServicesCard';
import * as S from './styled';

import { ServicesCardInfo } from '../../constants/arrays';

const ServicesSection: FC = () => {
  const scrollTrack = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);

  const { ref } = useInView({
    threshold: 0.98,
    onChange: (inView) => {
      if (inView) {
        window.addEventListener('wheel', handleSearch, { passive: false });
      } else {
        window.removeEventListener('wheel', handleSearch);
      }
    },
  });

  const [scrolled, setScroled] = useState<number>(0);

  const handleSearch = async (e: WheelEvent) => {
    const { current } = scrollTrack;

    const scrollBarWidth = 17;
    const delta = e.deltaY || e.detail;

    if (current && section.current) {
      const maxScrollWidth = current.scrollWidth - window.innerWidth + scrollBarWidth;
      const sectionScroll = current.scrollLeft;
      const sectionWidth = current.scrollWidth - current.clientWidth;
      const scrolledPersent = Math.floor((sectionScroll / sectionWidth) * 100);

      if (current.scrollLeft >= maxScrollWidth) {
        if (delta < 0) {
          current.scrollLeft += delta;
          setScroled(scrolledPersent);
        } else {
          setScroled(100);
          window.removeEventListener('wheel', handleSearch);
        }
      } else {
        if (delta < 0) {
          if (current.scrollLeft === 0) {
            window.removeEventListener('wheel', handleSearch);
          }
        }
        current.scrollLeft += delta;
        setScroled(scrolledPersent);
      }
    }
    e.preventDefault();
  };

  return (
    <S.ServicesBlcok ref={section}>
      <div ref={ref}>
        <S.ServicesTitle>Услуги</S.ServicesTitle>
        <S.ServicesSubTitle>
          Выполняем как комплексное обследование, так и отдельные виды работ
        </S.ServicesSubTitle>
        <S.Scroll>
          <S.ScrollTrack ref={scrollTrack}>
            <S.ScrollEmptyDiv />
            {ServicesCardInfo.map((item, index) => (
              <ServicesCard
                key={`${index}${index + 1}`}
                img={item.img}
                title={item.title}
                descr={item.descr}
              />
            ))}
            <S.ScrollEmptyDiv />
          </S.ScrollTrack>
        </S.Scroll>
      </div>
      <S.ScrollProgress progress={scrolled}></S.ScrollProgress>
    </S.ServicesBlcok>
  );
};

export default ServicesSection;
