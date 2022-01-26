export function inputPar() {
  const options = {
    name: {
      title: 'Наименование товара',
      placeholder: 'Введите наименование товара',
      big: false,
      type: 'text',
      label: 'Поле является обязательным',
      mask: false,
    },
    desc: {
      title: 'Описание товара',
      placeholder: 'Введите описание товара',
      big: true,
      type: 'text',
      label: 'Поле является обязательным',
      mask: false,
    },
    link: {
      title: 'Ссылка на изображение товара',
      placeholder: 'Введите ссылку',
      big: false,
      type: 'text',
      label: 'Поле является обязательным',
      mask: false,
    },
    cost: {
      title: 'Цена товара',
      placeholder: 'Введите цену',
      big: false,
      type: 'text',
      label: 'Поле является обязательным',
      mask: true,
    },
  };
  return {
    options,
  };
}
export function selectPar() {
  const sortOptions = [
    { value: 'title', name: 'По наименованию' },
    { value: 'priceMin', name: 'По мин.цене' },
    { value: 'priceMax', name: 'По мах.цене' },
  ];
  return {
    sortOptions,
  };
}
