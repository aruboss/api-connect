import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>Ma Đạo Tổ Sư</td>
                <td>1000000 VNĐ</td>
                <td>
                    <span className="label label-default">Còn Hàng</span>
                </td>
                <td>
                    <button type="button" className="btn btn-success mr-10">Sửa</button>
                    <button type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
