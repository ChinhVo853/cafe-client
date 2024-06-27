function ThongTinSection({ data, Xoa }) {
  return (
    <>
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tên loại</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.ten}</td>
                  <td>
                    <a
                      href={`/Trangcapnhatloai/${item.id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Cập nhật
                    </a>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => Xoa(item.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}

              {/* Add more rows for other dishes */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default ThongTinSection;
