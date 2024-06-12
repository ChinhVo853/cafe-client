import Menuquanly from "../Menuquanly";
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';

function Trangquanlymon() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dishes, setDishes] = useState([
        { id: 1, name: 'Bún chả', price: '50,000 VND', image: 'path_to_image', reviews: 100, category: 'Noodle', size: 'Large', status: 'Còn hàng' },
        { id: 2, name: 'Phở bò', price: '40,000 VND', image: 'path_to_image', reviews: 150, category: 'Soup', size: 'Medium', status: 'Còn hàng' }
    ]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleStatus = (id) => {
        setDishes(dishes.map(dish => 
            dish.id === id ? { ...dish, status: dish.status === 'Còn hàng' ? 'Hết hàng' : 'Còn hàng' } : dish
        ));
    };

    return (
        <div>
            <div className="search-container-custom">
                <input type="text" placeholder="Tìm kiếm..." />
                <button type="button">🔍</button>
            </div>
            <div className="request-container mt-5">
                <div className="header">QUẢN LÝ MÓN</div>
                <div className="col text-end">
                    <a href='/Trangthemmon' className="btn btn-primary">Thêm món</a>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Tên món</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Số lượng đánh giá</th>
                                    <th scope="col">Loại</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dishes.map(dish => (
                                    <tr key={dish.id}>
                                        <td>{dish.id}</td>
                                        <td><img src={dish.image} alt="Hình ảnh món ăn" style={{ maxWidth: '100px' }} /></td>
                                        <td>{dish.name}</td>
                                        <td>{dish.price}</td>
                                        <td>{dish.reviews}</td>
                                        <td>{dish.category}</td>
                                        <td>{dish.size}</td>
                                        <td>
                                            <button onClick={() => toggleStatus(dish.id)} className="btn btn-outline-info btn-sm">{dish.status}</button>
                                        </td>
                                        <td>
                                            <a href="/Trangcapnhatmon" className="btn btn-outline-primary btn-sm">Cập nhật</a>
                                            <button className="btn btn-outline-danger btn-sm">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Menuquanly
                toggleMenu={toggleMenu}
                menuOpen={menuOpen}
            />
        </div>
    );
}

export default Trangquanlymon;
