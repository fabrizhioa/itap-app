import {
  doble,
  Epoxy04,
  EpoxyBlanco,
  MockUpScene,
  MokeupiTap,
  SantoCoyote,
  TarjetaBlanca,
  TarjetaBlanca2,
  TarjetaBlancaTulogo1,
  TarjetaBlancaTulogo2,
  TarjetaBlancaTulogo3,
} from "../assets/products";

export const ListaProductos = [
  {
    title: "Membresia Plataforma Empresarial Restaurantes",
    images: [doble, MockUpScene],
    price: 129.0,
    discount: {
      active: false,
    },
    options: {
      personalizable: false,
      colors: [],
      subcriptions: [
        {
          title: "Suscripción Anual",
          discount: "Ahorra un 20%",
          price: 103.2,
          span: "cada mes durante 12 meses",
        },
        {
          title: "Suscripción 6 meses",
          discount: "Ahorra un 15%",
          price: 109.65,
          span: "cada mes durante 12 meses",
        },
        {
          title: "Suscripción mensual",
          price: 129.0,
          span: "cada mes durante 12 meses",
        },
      ],
    },
  },
  {
    title: "iTAP Epoxi Pegable",
    images: [Epoxy04, EpoxyBlanco],
    price: 276.0,
    discount: {
      active: true,
      price: 138.0,
    },
    options: {
      colors: ["black", "white"],
      personalizable: false,
      subcriptions: [],
    },
  },
  {
    title: "iTAP Tarjeta Personalizable",
    images: [
      TarjetaBlancaTulogo2,
      TarjetaBlancaTulogo1,
      TarjetaBlancaTulogo3,
      MokeupiTap,
      SantoCoyote,
    ],
    price: 296.0,
    discount: {
      active: true,
      price: 148.0,
    },

    options: {
      personalizable: true,
      subcriptions: [],
      colors: [],
    },
  },
  {
    title: "iTAP Tarjeta",
    images: [TarjetaBlanca2, TarjetaBlanca],
    price: 150.0,
    discount: {
      active: true,
      price: 120.0,
    },
    options: {
      personalizable: true,
      subcriptions: [],
      colors: [],
    },
  },
];
