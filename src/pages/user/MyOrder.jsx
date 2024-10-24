import React from "react";
import { useTranslation } from "react-i18next";
import product1 from "../../assets/images/product1.webp";
import { Header } from "../../components";
import Order from "../../components/user/order";
const MyOrder = () => {
  const { t } = useTranslation();
  const order = [
    {
      orderId: "#0059486947",
      orders: [
        {
          id: 1,
          title: "product 1",
          brand: "on brand",
          price: 250,
          image: product1,
        },
        {
          id: 2,
          title: "product 2",
          brand: "on brand",
          price: 250,
          image: product1,
        },
      ],
    },
    {
      orderId: "#9459486947",
      orders: [
        {
          id: 1,
          title: "product 1",
          brand: "on brand",
          price: 250,
          image: product1,
        },
      ],
    },
  ];
  return (
    <>
      <Header title={t("My Order")} />
      <section className="min-h-[80vh] h-full bg-primary  font-poppins py-5 md:py-16 gap-7  flex flex-col  px-4 md:px-16">
        {order.map((item) => (
          <Order key={item.orderId} id={item.orderId} orders={item.orders} />
        ))}
      </section>
    </>
  );
};

export default MyOrder;
