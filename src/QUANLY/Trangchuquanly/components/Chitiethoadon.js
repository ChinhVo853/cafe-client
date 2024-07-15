import React, { useState, useCallback, useEffect, useRef } from "react";
import { ChiTietHoaDonTheoMa } from "../API/Api";
import { useParams } from "react-router-dom";
import config from "../../../config";
import { format } from "date-fns";
import { useReactToPrint } from "react-to-print";
import Load from "../../../Load/Load";

const ChiTietHoaDon = () => {
  // const [billDetails, setBillDetails] = useState({
  //   billId: 'HD001',
  //   items: [
  //     {
  //       id: 1,
  //       image: 'https://via.placeholder.com/150',
  //       name: 'Sản phẩm 1',
  //       quantity: 2,
  //       price: 100000,
  //       total: 200000,
  //     },
  //     {
  //       id: 2,
  //       image: 'https://via.placeholder.com/150',
  //       name: 'Sản phẩm 2',
  //       quantity: 1,
  //       price: 150000,
  //       total: 150000,
  //     },
  //   ],
  // });

  // const [totalAmount, setTotalAmount] = useState(0);

  // useEffect(() => {
  //   const total = billDetails.items.reduce((sum, item) => sum + item.total, 0);
  //   setTotalAmount(total);
  // }, [billDetails.items]);

  // const formatCurrency = (value) => {
  //   return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  // };

  const { id } = useParams();
  const [tables, setTables] = useState();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const LayData = useCallback(async () => {
    try {
      const result = await ChiTietHoaDonTheoMa(id);
      setTables(result.data.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  useEffect(() => {
    document.title = "Chi tiết hoá đơn";
    LayData();
  }, [LayData]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      {tables ? (
        <div>
          <a onClick={handleGoBack}>
            <button className="btn-quayve" type="button">
              <i className="fa-solid fa-circle-chevron-left"></i>
            </button>
          </a>
          <div className="request-container mt-5">
            <div className="header">QUẢN LÝ YÊU CẦU CỦA BÀN 1</div>
            <div className="bill-details-container mt-5">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={handlePrint}
              >
                In hoá đơn
              </button>
              <div
                className="row"
                style={{ padding: "0 50px" }}
                ref={componentRef}
              >
                <div className="col">
                  <div className="mt-5">
                    <b>Giờ ra:</b>{" "}
                    <p>
                      {tables[0] &&
                        format(
                          new Date(tables[0].updated_at),
                          "dd-MM-yyyy HH:mm:ss"
                        )}
                    </p>
                  </div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Tên size</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tables.map((item) => (
                        <tr key={item.id}>
                          <td>{item.tenMon}</td>
                          <td>{item.tenSize}</td>

                          <td>{item.so_luong}</td>
                          <td>{item.gia.toLocaleString()}</td>
                          <td>{item.thanh_tien.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">
                          <strong>Tổng tiền hóa đơn</strong>
                        </td>
                        <td>
                          <strong>
                            {tables[0]
                              ? tables[0].tong_tien.toLocaleString()
                              : 0}
                            đ
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
};

export default ChiTietHoaDon;
