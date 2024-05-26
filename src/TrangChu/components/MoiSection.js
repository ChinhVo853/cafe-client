function MoiSection() {
  return (
    <div>
      <h2 className="ta-ct">đồ uống mới</h2>

      <div className="row">
        <div className="col">
          <img
            src="http://127.0.0.1:8000/anh/giaodien.webp"
            className="rounded float-start w-100"
            alt="..."
          />
          <p>cafe</p>
        </div>
        <div className="col">
          <img
            src="http://127.0.0.1:8000/anh/giaodien.webp"
            className="rounded w-100 d-inline-block"
            alt="..."
          />
          <p>cafe</p>
        </div>
        <div className="col">
          <img
            src="http://127.0.0.1:8000/anh/giaodien.webp"
            className="rounded w-100"
            alt="..."
          />
          <p>cafe</p>
        </div>
      </div>
    </div>
  );
}

export default MoiSection;
