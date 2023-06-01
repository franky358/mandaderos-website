import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "¿Cómo funciona exactamente el 7% de comisión por pedido?",
    answer:
      "El mandadero te pagará en efectivo el 93% del total del pedido, es decir, si el total del pedido del cliente fue de $100 pesos, el mandadero te entrega $93 pesos.",
  },
  {
    question: "¿Es necesario contar con un teléfono?",
    answer:
      "Sí, antes de que el mandadero vaya a tu negocio a comprar los productos del pedido, tiene que verificar contigo la existencia de los mismos.",
  },
  {
    question:
      "¿Tengo que pagar algo para comenzar a vender desde su plataforma?",
    answer:
      "No, no se requiere de ningún pago para comenzar a vender con nosotros.",
  },
  {
    question: "¿Cómo doy de alta mi negocio en su plataforma? ",
    answer:
      "Mandanos un whats desde los botónes de contacto de esta página y con gusto te ayudaremos en el proceso.",
  },
  {
    question: "¿Tengo que estar conectado desde un app para aceptar pedidos? ",
    answer:
      "No, seguiras atendiendo tu negocio tal y como lo haces hasta ahora, lo unico que requerimos es contestes las llamadas de los mandaderos.",
  },
];

export default Faq;
