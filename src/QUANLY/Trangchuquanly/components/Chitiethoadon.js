import React, { useState,useCallback,useEffect } from 'react';
import { LayDSCTHoaDon } from '../API/Api';
import { useParams } from 'react-router-dom';
import config from '../../../config';
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


  const {id}=useParams();
  const [tables, setTables] = useState();
  const LayData = useCallback(async () => {
    try {
      const result = await LayDSCTHoaDon(id);
      setTables(result.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);

  useEffect(() => {
    LayData();
  }, [LayData]);
  console.log(tables);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>{tables&&(<div>
      <div className="search-container-custom">
        <input type="text" placeholder="Tìm kiếm..." />
        <button type="button">🔍</button>
      </div>
      <a onClick={handleGoBack}>
          <button className="btn-quayve" type="button">
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </a>
      <div className="request-container mt-5">
        <div className="header">QUẢN LÝ YÊU CẦU CỦA BÀN 1</div>
        <div className="bill-details-container mt-5">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Hình sản phẩm</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {tables.map(item => (
                  <tr key={item.id}>
                    <td>
                      <img src={config.imageBaseUrl+"/"+item.anh}  width="50" />
                    </td>
                    <td>{item.tenMon}</td>
                    <td>{item.so_luong}</td>
                    <td>{item.gia}</td>
                    <td>{item.tong_tien}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4"><strong>Tổng tiền hóa đơn</strong></td>
                  <td><strong>{}</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      </div>
    </div>)}
    
    </>
      
  );
};

export default ChiTietHoaDon;
