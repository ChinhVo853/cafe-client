import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { TaoDatMon, KiemTraMa as kiemTraMaAPI } from "./API/Api";
import Load from "../Load/Load";

function TrangQR() {
  const { ban } = useParams();
  const KiemTraMa = useCallback(async () => {
    try {
      const maQR = localStorage.getItem("QR");
      if (maQR) {
        //kiểm tra  trong local có mã qr chưa nếu có thì chuyển qua trang nhập mã để kiểm tra qr đó
        const data = {
          ma: maQR,
          ban: ban,
        };
        const result1 = await kiemTraMaAPI(data);
        if (result1.data.data) {
          window.location.href = "/Trangchugoimon/" + ban;
        } else {
          try {
            const result = await TaoDatMon(ban);
            if (result.data.status) {
              window.location.href = "/Trangnhapma/" + ban;
            } else {
              localStorage.setItem("QR", result.data.data.id);
              window.location.href = "/Trangchugoimon/" + ban;
            }
          } catch (error) {
            console.error("Failed to fetch data", error);
          }
        }

        //
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
  }, [ban]);
  useEffect(() => {
    KiemTraMa();
  }, [KiemTraMa]);

  return (
    <>
      <Load />
    </>
  );
}

export default TrangQR;
