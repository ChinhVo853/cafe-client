import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { TaoDatMon } from "./API/Api";
function TrangQR() {
  const { ban } = useParams();
  const KiemTraMa = useCallback(async () => {
    try {
      const maQR = localStorage.getItem("QR");

      if (maQR) {
        //kiểm tra  trong local có mã qr chưa nếu có thì chuyển qua trang nhập mã để kiểm tra qr đó
        window.location.href = "/Trangnhapma/" + ban;
      } else {
        //nếu chưa có qr sẽ kiểm tra bàn và tạo mới đặt món
        try {
          const result = await TaoDatMon(ban);
          if (result.data.data) {
            //kiểm tra kết quả trả về có data không nếu có thì vào trang gọi món
            localStorage.setItem("QR", result.data.data);
            window.location.href = "/Trangchugoimon/" + ban;
          } else {
            //ngược lại nếu ko có thì vào trang nhập mã
            window.location.href = "/Trangnhapma/" + ban;
          }
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      }
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }, []);
  useEffect(() => {
    KiemTraMa();
  }, [KiemTraMa]);

  return <>load</>;
}

export default TrangQR;
