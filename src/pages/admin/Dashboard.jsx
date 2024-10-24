import React from "react";
import Product1 from "../../assets/images/product1.webp";
import ReportCard from "../../components/admin/common/card/Report";
import SalesTrendGraph from "../../components/admin/common/charts/sales-comparison";
import EarningRevenue from "../../components/admin/dashboard/earing-revenue";
import RecentOrder from "../../components/admin/dashboard/recent-order";
import SaleByCategories from "../../components/admin/dashboard/sale-by-category";
import Sales from "../../components/admin/dashboard/sales";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GradeIcon from "@mui/icons-material/Grade";

import {
  OrderPaid,
  TotalIncome,
  TotalSale,
  TotalVisitors,
} from "../../constants/icons";
const Dashboard = () => {
  const data = [
    { name: "Jan", actualIncome: 10, projectedIncome: 2000 },
    { name: "Feb", actualIncome: 2300, projectedIncome: 4000 },
    { name: "Mar", actualIncome: 250, projectedIncome: 2290 },
    { name: "Apr", actualIncome: 2439, projectedIncome: 2000 },
    { name: "May", actualIncome: 699, projectedIncome: 2000 },
    { name: "Jun", actualIncome: 2500, projectedIncome: 2000 },
  ];
  const recentOrders = [
    {
      id: 1,
      title: "Taste of the Wild Formula Finder",
      image: Product1,
      price: 2300,
      quantity: 3,
      productId: 12,
    },
    {
      id: 3,
      title: "Taste of the Wild Formula Finder",
      image: Product1,
      price: 1800,
      quantity: 5,
      productId: 3243,
    },
    {
      id: 2,
      title: "Taste of the Wild Formula Finder",
      image: Product1,
      price: 4500,
      quantity: 1,
      productId: 6543,
    },
  ];
  const dailyData = [
    { name: "Today", sales: 140 },
    { name: "Yesterday", sales: 250 },
  ];

  const weeklyData = [
    { name: "Mon", current: 150, previous: 120 },
    { name: "Tue", current: 230, previous: 180 },
    { name: "Wed", current: 180, previous: 240 },
    { name: "Thu", current: 290, previous: 200 },
    { name: "Fri", current: 270, previous: 260 },
    { name: "Sat", current: 200, previous: 190 },
    { name: "Sun", current: 140, previous: 130 },
  ];

  const monthlyData = [
    { name: "Jan", current: 5000, previous: 4500 },
    { name: "Feb", current: 5500, previous: 5000 },
    { name: "Mar", current: 6000, previous: 5200 },
    { name: "Apr", current: 5800, previous: 5700 },
    { name: "May", current: 7000, previous: 6000 },
    { name: "Jun", current: 6500, previous: 6200 },
  ];

  const salesData = [
    { name: "January", value: 30 },
    { name: "February", value: 25 },
  ];

  const earningRevenue = [
    { month: "Jan", value1: 20, value2: 12 },
    { month: "Feb", value1: 60, value2: 30 },
    { month: "Mar", value1: 15, value2: 12 },
    { month: "Apr", value1: 30, value2: 5 },
    { month: "May", value1: 85, value2: 55 },
    { month: "Jun", value1: 65, value2: 30 },
    { month: "Jul", value1: 15, value2: 8 },
    { month: "Aug", value1: 35, value2: 5 },
    { month: "Sep", value1: 70, value2: 65 },
    { month: "Oct", value1: 30, value2: 20 },
  ];
  const salesByCategory = [
    { name: "Segment 1", value: 30 },
    { name: "Segment 2", value: 25 },
    { name: "Segment 3", value: 20 },
    { name: "Segment 4", value: 15 },
    { name: "Segment 5", value: 10 },
  ];
  const topProducts = [
    {
      id: 1,
      title: "Taste fo wild",
      rating: "4.5",
      sold: 20,
      profit: "120",
    },
    {
      id: 2,
      title: "Taste fo wild 2",
      rating: "4.6",
      sold: 22,
      profit: "150",
    },
  ];
  return (
    <section className=" w-full   flex flex-col ">
      {/* top sale section  */}
      <div className="grid  grid-cols-2 xl:grid-cols-8    gap-3 2xl:gap-4  w-full h-full">
        <div className="col-span-2   grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 2xl:gap-4 ">
          <ReportCard
            data={data}
            growth={1.44}
            lableIcon={TotalSale}
            title={"Total Sale"}
            value={"32,802"}
          />
          <ReportCard
            data={data}
            growth={2.44}
            lableIcon={TotalIncome}
            title={"Total Income"}
            value={"37,802"}
            strokColor={"#EF4444"}
            fill={"#f3af90"}
          />
          <ReportCard
            data={data}
            growth={"0.00"}
            lableIcon={OrderPaid}
            title={"Order Paid"}
            value={"37,802"}
            strokColor={"#B6B6B6"}
            fill={"#EDF1F5"}
          />
          <ReportCard
            data={data}
            growth={"0.00"}
            lableIcon={TotalVisitors}
            title={"Total Visitor"}
            value={"37,802"}
            strokColor={"#2377FC"}
            fill={"#CEDAFE"}
          />
        </div>
        {/* sale by categories  */}
        <SaleByCategories data={salesByCategory} />
        {/* Earning Revienues  */}
        <EarningRevenue data={earningRevenue} />
      </div>
      {/* comparison section  */}
      <div className="my-10 ">
        <div className="w-full grid grid-cols-4  lg:grid-cols-7 gap-y-5 md:gap-5">
          {/* sales comparison  */}
          <Sales data={salesData} />
          {/* sales comparison [day,week,month]  */}
          <SalesTrendGraph
            dailyData={dailyData}
            monthlyData={monthlyData}
            weeklyData={weeklyData}
          />
          {/* top selling product  */}
          <div className="p-5  min-h-[350px] flex flex-col col-span-4  xl:col-span-2  bg-white shadow-md rounded-xl">
            <div className="flexBetween">
              <h4 className="md:text-lg font-semibold text-gray-800">
                Top Product
              </h4>
              <span className="cursor-pointer">
                <MoreHorizIcon />
              </span>
            </div>
            <div className="w-full h-full  mt-3 overflow-auto">
              <table className="w-full">
                <thead className="text-xs md:text-sm">
                  <th className="text-left pb-3 font-medium w-[50%] lg:w-[80%] text-gray-800">
                    Product
                  </th>
                  <th className="text-left font-medium px-2 text-gray-800">
                    Reviews
                  </th>
                  <th className="text-left font-medium px-2 text-gray-800">
                    Sold
                  </th>
                  <th className="text-left font-medium px-2 text-gray-800">
                    Profit
                  </th>
                </thead>
                <tbody className="text-xs ">
                  {topProducts.map((item) => (
                    <tr key={item.id} className="cursor-pointer">
                      <td className="flexStart gap-4 py-1 ">
                        <div className="w-8 h-12  overflow-hidden">
                          <img
                            src={Product1}
                            alt="product one"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h5 className="font-medium text-gray-600 whitespace-nowrap ">
                          {"Taste of wild  "}
                        </h5>
                      </td>
                      <td>
                        <div className="flexStart pl-2 lg:pl-0 lg:flexCenter  gap-2">
                          <GradeIcon
                            className="text-yellow-500"
                            fontSize="inherit"
                          />
                          <span>4.5 </span>
                        </div>
                      </td>
                      <td>
                        <div className="flexStart pl-2 lg:pl-0  lg:flexCenter">
                          20
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="flexStart pl-2 lg:pl-0 lg:flexCenter">
                          120
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* table section  */}
      <RecentOrder data={recentOrders} />
    </section>
  );
};

export default Dashboard;
