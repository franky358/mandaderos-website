import {
  BuildingStorefrontIcon,
  BanknotesIcon,
  HandThumbUpIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  CurrencyDollarIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "¿Cómo funciona y cuánto cuesta?",
  desc: "Los clientes eligen tus productos desde nuestra plataforma, les asignamos un mandadero y este te llama por teléfono para validar la disponibilidad de los productos elegidos por el cliente, si confirmas los productos el mandadero se dirige a tu negocio y te paga en EFECTIVO los productos para así llevarlos al cliente.",
  image: benefitOneImg,
  bullets: [
    {
      title:
        "Sin necesidad de apps, tablets, ni estar al pendiente de los pedidos",
      desc: "Lo unico que necesitamos es que contestes el teléfono cuando un mandadero te llame para verificar la existencia de tus productos.",
      icon: <PhoneIcon />,
    },
    {
      title: "Comisión fija del 7% por cada pedido",
      desc: "Al manejarse todo en efectivo, no pagas impuestos, ni IVA, ni excesivas comisiones del 25% o 30% por lo que vendas desde internet. Tampoco requerimos de un pago inicial.",
      icon: <BanknotesIcon />,
    },
    {
      title: "Todos los negocios son bienvenidos",
      desc: "Negocios de comida, tiendas de abarrotes, carnicerías, verdulerías, pollerías, cremerías, etc. No importa el giro o tamaño de tu negocio. Todos pueden vender por internet.",
      icon: <BuildingStorefrontIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Aumenta tus ventas vendiendo online",
  desc: "Vivimos en una era en donde todo se mueve por internet, es por eso que creamos este movimiento para que pequeños negocios como el tuyo tengan la oportunidad de llegar a nuevos clientes y aumentar sus ganancias.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Lo hacemos fácil para ti",
      desc: "El mandadero se encarga de ir directamente a comprarte los productos del cliente. Por lo que tu no tienes que estar conectado a apps ni cambiar tu forma de trabajo.",
      icon: <HandThumbUpIcon />,
    },
    {
      title: "Con pagos en efectivo todos ganamos",
      desc: "Cuando vendes por internet en otras plataformas tienes que pagar impuestos de lo que vendes, con nosotros no es así, al mantener el flujo en efectivo todos ganamos.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Agregamos tu negocio a nuestra plataforma en minutos",
      desc: "Nuestros asesores se encargarán de subir la información de tu negocio en nuestra plataforma.",
      icon: <DevicePhoneMobileIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
