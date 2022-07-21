export const navItems = [
  {
    label: 'Главная',
    href: '/',
  },
  {
    label: 'Продукция',
    href: '/КОРУНД-Классик',
    children: [
      {
        label: 'КОРУНД-Классик',
        childLabel: 'Для крыши, стен, пола, фасада',
        href: '/КОРУНД-Классик',
      },
      {
        label: 'КОРУНД-Фасад',
        childLabel: 'Устраняет промерзания',
        href: '/КОРУНД-Фасад',
      },
      {
        label: 'КОРУНД-Антикор',
        childLabel: 'Для металлически поверхностей',
        href: '/КОРУНД-Антикор',
      },
      {
        label: 'КОРУНД-Зима',
        childLabel: 'Для применения зимой',
        href: '/КОРУНД-Зима',
      },
    ],
  },
  {
    label: 'Документация',
    href: '/documentation',
    // children: [
    //   {
    //     label: 'Техническая документация',
    //     childLabel: 'Характеристика, презентации и пр.',
    //     href: '/documentation',
    //   },
    //   {
    //     label: 'Уставные документы',
    //     childLabel: 'Устав, лицензия, патенты и пр.',
    //     href: '/documentation',
    //   },
    // ],
  },
  {
    label: 'Новости',
    href: '/news',
  },
  {
    label: 'Дистрибьюция',
    href: '/distribution',
  },
  {
    label: 'О нас',
    href: '/about',
  },
  {
    label: 'Контакты',
    href: '/contacts',
  },
];
