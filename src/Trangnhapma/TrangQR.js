import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { TaoDatMon, KiemTraMa as kiemTraMaAPI, KiemTraBan } from "./API/Api";
import Load from "../Load/Load";

function TrangQR() {
  const { ban } = useParams();

  const KiemTraMa = useCallback(async () => {
    try {
      const result2 = await KiemTraBan(ban);
      if (result2.data.data.trang_thai_id === 1) {
        const result = await TaoDatMon(ban);

        //kiểm tra kết quả trả về có data không nếu có thì vào trang gọi món
        localStorage.setItem("QR", result.data.data);
        window.location.href = "/Trangchugoimon/" + ban;
      }
      const maQR = localStorage.getItem("QR");
      if (maQR) {
        const data = { ma: maQR, ban: ban };
        const result1 = await kiemTraMaAPI(data);
        if (result1.data.errors) {
          window.location.href = `/Trangnhapma/${ban}`;
        } else {
          window.location.href = "/Trangchugoimon/" + ban;
        }
      } else {
        //nếu chưa có qr sẽ kiểm tra bàn và tạo mới đặt món
        try {
          const result = await TaoDatMon(ban);

          //kiểm tra kết quả trả về có data không nếu có thì vào trang gọi món
          localStorage.setItem("QR", result.data.data);
          window.location.href = "/Trangchugoimon/" + ban;

          //ngược lại nếu ko có thì vào trang nhập mã
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      }
    } catch (error) {
      console.error("Failed to fetch data", error);
      // Handle error: show error message or redirect to an error page
    }
  }, [ban]);

  useEffect(() => {
    KiemTraMa();
  }, [KiemTraMa]);

  return <Load />;
}

export default TrangQR;
