import jsPDF from "jspdf";
import "jspdf-autotable";

// Function to export table as PDF
const exportAsPDF = (tableData) => {
  const doc = new jsPDF();
  doc.autoTable({
    head: [["Product", "Order ID", "Price", "Quantity", "Payment"]],
    body: tableData.map((item) => [
      item.name,
      `#${item.id}`,
      item.price,
      item.quantity,
      item.price, // Assuming this is the payment, as per your table structure
    ]),
  });
  doc.save("order_list.pdf");
};

export default exportAsPDF;
