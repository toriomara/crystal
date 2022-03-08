import dallas from '../public/images/productBG/dallas.webp'
import austin from '../public/images/productBG/austin.webp'
import newyork from '../public/images/productBG/newyork.webp'
import winterBG from '../public/images/productBG/winterBG.jpg'
import classic from '../public/images/products/classic.png'
import front from '../public/images/products/front.png'
import anticorrosive from '../public/images/products/anticorrosive.png'
import winter from '../public/images/products/winter.png'

export const products = [
  {
    id: 1,
    name: "КОРУНД-Классик",
    nameEn: "classic",
    desc: 'Теплоизоляция крыш, фасадов, пола, трубопроводов горячего и холодного водоснабжения, паропроводов.',
    fullDesc: 'Используется при теплоизоляции крыш, фасадов зданий, внутренних стен, откосов окон, бетонного пола, трубопроводов горячего и холодного водоснабжения, паропроводов, воздуховодов систем кондиционирования, систем охлаждения, различных ёмкостей, цистерн, трейлеров, рефрижераторов. Применяется для исключения конденсата на трубах холодного водоснабжения и снижения теплопотерь в системах отопления (согласно СНиП).\n' +
      'Температурный диапазон применения от -60 °С до +200°С (до +260°С в пиковом кратковременном режиме). Срок службы материала при соблюдении правил технологии нанесения не менее 15 лет. \n',
    packaging: 'Пластиковое ведро',
    volume: '5, 10 и 20 л',
    image: classic,
    imageBG: dallas,
    link: '/classic'
  },
  {
    id: 2,
    name: "КОРУНД-Фасад",
    nameEn: "front",
    desc: 'Устраняет промерзания, образования конденсата и грибка. Снижает теплопотери, устраняет промерзания.',
    fullDesc: 'Обладает теплоизоляционными свойствами и повышенной паропроницаемостью. Предназначен для нанесения слоями до 1 мм на фасады зданий. Устраняет промерзания, образования конденсата и грибка. Эффективно снижает теплопотери, не нарушая естественный воздухообмен внутреннего помещения с окружающей средой. \n',
    packaging: 'Пластиковое ведро',
    volume: '5, 10 и 20 л',
    image: front,
    imageBG: austin,
    link: '/front'
  },
  {
    id: 3,
    name: "КОРУНД-Антикор",
    nameEn: "anticorrosive",
    desc: 'Для использования в качестве первого слоя на на плохо подготовленных металлических поверхностях.',
    fullDesc: 'КОРУНД-Антикор наносится на плохо подготовленную металлическую поверхность со следами коррозии (ржавчины). Достаточно удалить металлической щёткой «сырую» (рыхлую) ржавчину, после чего можно наносить жидкую композицию КОРУНД-Антикор. \n' +
      'Рекомендуется для использования на металлических поверхностях в качестве первого слоя в системе теплоизоляционных покрытий марки КОРУНД. Для последующих слоёв целесообразно применять КОРУНД-Классик. Применение КОРУНД-Антикор при теплоизоляции уже существующих конструкций и трубопроводов многократно снижает трудозатраты, поскольку не требует специальной подготовки рабочей поверхности. \n' +
      'Благодаря составу термоизолятор не только консервирует и преобразует коррозийный металл, но и препятствует дальнейшему возникновению коррозии. Металл, покрытый КОРУНД-Антикор не подвержен атмосферному влиянию. \n' +
      'Срок службы материала от 15 лет.',
    packaging: 'Пластиковое ведро',
    volume: '10 и 20 л',
    image: anticorrosive,
    imageBG: newyork,
    link: '/anticorrosive'
  },
  {
    id: 4,
    name: "КОРУНД-Зима",
    nameEn: "winter",
    desc: 'Можно наносить в интервале температур от -5 °С до -20 °С. Температура эксплуатации от -60 °С до +90 °С.',
    fullDesc: 'Данный материал разработан для применения в строительстве, реконструкции и ремонте жилых, коммерческих и общественных зданий. В отличие от других модификаций, работы по нанесению КОРУНД-Зима могут проводиться в интервале температур от -5 °С до -20 °С (минимальная температура нанесения обычных модификаций не ниже +7 °С). Температура эксплуатации модификации КОРУНД-Зима составляет от -60 °С до +90 °С. \n' +
      'С теплоизолятором КОРУНД-Зима вы забудете о перерывах в ожидании подходящей погоды. Срок службы материала от 15 лет. \n',
    packaging: 'Металлическое ведро',
    volume: '20 л',
    image: winter,
    imageBG: winterBG,
    link: '/winter'
  },
  /*//ПОЛИМЕРНАЯ ИЗОЛЯЦИЯ
  {
      id: 5,
      name: 'КОРУНД-Санитарный',
      desc: 'Предназначен для нанесения на любые поверхности в качестве гидроизоляции пола и стен в санузлах, на кухне (обратная гидроизоляция). Экологически безопасен. Специальные добавки в составе препятствуют образованию грибка и плесени на защищаемых поверхностях. Подходит для  наружных и внутренних работ. \n',
      fullDesc: 'Предназначен для нанесения на любые поверхности в качестве гидроизоляции пола и стен в санузлах, на кухне (обратная гидроизоляция). Экологически безопасен. Специальные добавки в составе препятствуют образованию грибка и плесени на защищаемых поверхностях. Подходит для  наружных и внутренних работ. \n',
      packaging: 'Пластиковое ведро',
      volume: '7 и 14 кг',
      image: '',
      link: ''
  },
  {
      id: 6,
      name: 'КОРУНД-Жидкая кровля',
      desc: 'Предназначен для нанесения на любые поверхности в качестве: швов панельных зданий, плоских и скатных кровель жилых, промышленных, общественных объектов и зданий городской инфраструктуры. \n',
      fullDesc: 'Предназначен для нанесения на любые поверхности в качестве: швов панельных зданий, плоских и скатных кровель жилых, промышленных, общественных объектов и зданий городской инфраструктуры. \n',
      packaging: 'Пластиковое ведро',
      volume: '7 и 14 кг',
      image: '',
      link: ''
  },
  {
      id:7,
      name: 'КОРУНД-Фундамент',
      desc: 'Предназначен для нанесения на вертикальные и горизонтальные основания фундаментов. Экологически безопасен. Специальные добавки в составе препятствуют образованию грибка и плесени на защищаемых поверхностях. Подходит для  наружных и внутренних работ. \n',
      fullDesc: 'Предназначен для нанесения на вертикальные и горизонтальные основания фундаментов. Экологически безопасен. Специальные добавки в составе препятствуют образованию грибка и плесени на защищаемых поверхностях. Подходит для  наружных и внутренних работ. \n',
      packaging: 'Пластиковое ведро',
      volume: '7 и 14 кг',
      image: '',
      link: ''
  },
  //ГРУНТ
  {
      id: 8,
      name: 'Грунтовка глубокого проникновения ЯХОНТ',
      desc: 'Применяется для обработки поверхностей перед нанесением финишного покрытия. Снижает пористость оснований, повышает их долговечность, а также способствует упрочнению оснований. \n',
      fullDesc: 'Применяется для обработки поверхностей перед нанесением финишного покрытия. Снижает пористость оснований, повышает их долговечность, а также способствует упрочнению оснований. Может использоваться для проведения фасадных и внутренних работ. Грунтовка хорошо контактирует с оштукатуренными, бетонными, деревянными, гипсокартонными и другими основаниями. \n',
      packaging: 'Пластиковая канистра',
      volume: '10 л',
      image: '',
      link: ''
  },
  {
      id: 8,
      name: 'Грунт глубокого проникновения ЯХОНТ',
      desc: 'Может использоваться для проведения фасадных и внутренних работ. Грунтовка хорошо контактирует с оштукатуренными, бетонными, деревянными, гипсокартонными и другими основаниями. \n',
      fullDesc: 'Применяется для обработки поверхностей перед нанесением финишного покрытия. Снижает пористость оснований, повышает их долговечность, а также способствует упрочнению оснований. Может использоваться для проведения фасадных и внутренних работ. Грунтовка хорошо контактирует с оштукатуренными, бетонными, деревянными, гипсокартонными и другими основаниями. \n',
      packaging: 'Пластиковая канистра',
      volume: '10 л',
      image: '',
      link: ''
  },*/
]

