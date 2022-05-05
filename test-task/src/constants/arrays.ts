import FirstCardImg from '../assets/images/services-firs-card-img.jpg';
import SecondCardImg from '../assets/images/services-second-card-img.jpg';
import TherdCardImg from '../assets/images/services-therd-card-img.jpg';
import FourthCardImg from '../assets/images/services-fourth-card-img.jpg';
import FifthCardImg from '../assets/images/services-fifth-card-img.jpg';

type ServicesCardArr = {
  img: string;
  title: string;
  descr: string;
};

export const GuaranteesArr: Array<string> = [
  'Отчет на который на 100% можно положиться ',
  'Экономию времени и прогнозируемость сроков',
  'Предварительные результаты сразу на месте',
];

export const ServicesCardInfo: Array<ServicesCardArr> = [
  {
    img: FirstCardImg,
    title: 'Общее обследование',
    descr:
      'Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.',
  },
  {
    img: SecondCardImg,
    title: 'Тепловизионная съемка',
    descr:
      'Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания',
  },
  {
    img: TherdCardImg,
    title: 'Телеинспекция инженерных сетей',
    descr:
      'Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров',
  },
  {
    img: FourthCardImg,
    title: 'Тахеометрическая съемка',
    descr:
      'Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве',
  },
  {
    img: FifthCardImg,
    title: 'Диагностика высотных сооружений',
    descr:
      'Оценка состояния антенн и дымовых труб при помощи альпинистов и квадрокоптеров с 30-кратным зумом',
  },
];
