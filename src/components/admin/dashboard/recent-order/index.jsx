import React from "react";

const RecentOrder = ({ data }) => {
  return (
    <div className="mb-10  bg-white shadow-md rounded-xl  w-full  p-4 md:p-7">
      <div className="flexBetween">
        <h4 className="text-lg font-semibold">Recent Orders</h4>
        <div className="text-xs text-gray-500 cursor-pointer">View all</div>
      </div>
      <div className="w-full h-full overflow-x-auto">
        <table className="w-full  overflow-x-auto my-5 text-xs md:text-sm ">
          <thead className="md:text-sm  border-b text-xs">
            <th className="font-semibold px-2 text-left w-[45%] pb-4">
              Product
            </th>
            <th className="font-semibold px-2 text-left pb-4">Customer</th>
            <th className="font-semibold px-2 text-left whitespace-nowrap pb-4">
              Product ID
            </th>
            <th className="font-semibold px-2 text-left pb-4">Quantity</th>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="flexStart gap-6 p-4 ">
                  <div className="w-10 h-12  overflow-hidden">
                    <img
                      src={product.image}
                      alt="product one"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h5 className="font-medium whitespace-nowrap ">
                    {product.title}
                  </h5>
                </td>
                <td className="text-gray-500  text-center md:text-left">
                  {product.price}
                </td>
                <td className="text-gray-500 text-center md:text-left">
                  {product.productId}
                </td>
                <td className="text-gray-500 text-center md:text-left">
                  {product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
