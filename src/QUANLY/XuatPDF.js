import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
function XuatPDF() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div ref={componentRef}>
        <h1>Hóa đơn</h1>
        <p>Tên khách hàng: Nguyễn Văn A</p>
        <table>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sản phẩm 1</td>
              <td>1</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>Sản phẩm 2</td>
              <td>2</td>
              <td>20000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default XuatPDF;
