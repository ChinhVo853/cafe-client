import React from 'react';
const Thongtinbang = ({ tableNumber, tableCode }) => {
  return (
    <div className={styles.tableInfo}>
      <h2>Bàn Số: <span>{tableNumber}</span></h2>
      <p>Mã Bàn: <span>{tableCode}</span></p>
    </div>
  );
};

export default Thongtinbang;
