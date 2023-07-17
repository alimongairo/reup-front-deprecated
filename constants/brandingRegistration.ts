export const freelanceFormFields = [
  {
    label:
      'Наименование партнера (полное наименование юридического лица / ФИО физического лица, осуществляющего предпринимательскую деятельность / иное наименование,если применимо)*',
    name: 'companyName',
  },
  {
    label:
      'ФИО уполномоченного руководителя / наименование единоличногоисполнительного органа*',
    name: 'ownerName',
  },
  {
    label: 'Адрес интернет-сайта (при наличии)*',
    name: 'address',
  },
  {
    label:
      'Торговое / коммерческое наименование (это наименование будет видно всем покупателям)*',
    name: 'titleName',
  },
  {
    label: 'ФИО уполномоченного представителя*',
    name: 'representativeName',
  },
  {
    label: 'Фактический адрес*',
    name: 'addressActual ',
  },
  {
    label: 'E-mail*',
    name: 'email',
  },
  {
    label: 'Телефон уполномоченного представителя*',
    name: 'phone',
  },
  {
    label: 'ИНН / регистрационный номер (если применимо)*',
    name: 'inn',
  },
  {
    label: 'КПП Наименование расчетного банка (если применимо)*',
    name: 'kpp',
  },
  {
    label: 'БИК расчетного банка / SWIFT code (если применимо)*',
    name: 'bik',
  },
  {
    label: 'Корреспондентский счет (если применимо)*',
    name: 'account',
  },
];

export const corporateFormFields = [
  {
    label:
      'Наименование партнера (полное наименование юридического лица / ФИО физического лица, осуществляющего предпринимательскую деятельность / иное наименование,если применимо)*',
    name: 'companyName',
  },
  {
    label:
      'ФИО уполномоченного руководителя / наименование единоличногоисполнительного органа*',
    name: 'ownerName',
  },
  {
    label: 'Адрес интернет-сайта (при наличии)*',
    name: 'address',
  },
  {
    label:
      'Торговое / коммерческое наименование (это наименование будет видно всем покупателям)*',
    name: 'titleName',
  },
  {
    label: 'ФИО уполномоченного представителя*',
    name: 'representativeName',
  },
  {
    label: 'Юридический адрес*',
    name: 'addressLegal',
  },
  {
    label: 'Фактический адрес*',
    name: 'addressActual ',
  },
  {
    label: 'E-mail*',
    name: 'email',
  },
  {
    label: 'Телефон уполномоченного представителя*',
    name: 'phone',
  },
  {
    label: 'ИНН / регистрационный номер (если применимо)*',
    name: 'inn',
  },
  {
    label: 'КПП Наименование расчетного банка (если применимо)*',
    name: 'kpp',
  },
  {
    label: 'БИК расчетного банка / SWIFT code (если применимо)*',
    name: 'bik',
  },
  {
    label: 'Корреспондентский счет (если применимо)*',
    name: 'account',
  },
  {
    label: 'Расчетный счет / IBAN (если применимо)*',
    name: 'iban',
  },
  {
    label: 'Система применимого налогообложения*',
    name: 'taxSystem',
  },
];

export interface IFreelanceFormFields {
  companyName: string;
  ownerName: string;
  address: string;
  titleName: string;
  representativeName: string;
  addressActual: string;
  email: string;
  phone: string;
  inn: string;
  kpp: string;
  bik: string;
  account: string;
}

export interface ICorporateFormfields {
  companyName: string;
  ownerName: string;
  address: string;
  titleName: string;
  representativeName: string;
  addressLegal: string;
  addressActual: string;
  email: string;
  phone: string;
  inn: string;
  kpp: string;
  bik: string;
  account: string;
  iban: string;
  taxSystem: string;
}
