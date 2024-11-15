"use client";
import { DataServices } from "@/http/DataServices";
import { ProductT, StockT } from "@/type/Product";
import { useEffect, useState } from "react";

type TableT = {
    onClick?:(p:ProductT) => void,
    cart:ProductT[],
    isFetch:Boolean,
}
export default function Table({onClick,cart,isFetch}:TableT) {
  const [data, setData] = useState([] as ProductT[]);
  const [totalAmount, setTotalAmount] = useState(null as StockT[] | null);
  useEffect(() => {
    DataServices.getProduct().then((res) => {
      setData(res);
    });
  }, []);
  useEffect(() => {
    DataServices.totalProduct().then((res) => {
        setTotalAmount(res);
    });
  }, [isFetch]);
  return (
    <div className="table-auto">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">รหัสสินค้า</th>
            <th scope="col" className="text-center">ชื่อสินค้า</th>
            <th scope="col" className="text-center">ราคาต่อหน่วย</th>
            <th scope="col" className="text-center">สินค้าคงเหลือ</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((r,i) => (
            <tr className="" key={i}>
              <td scope="row" className="text-center">
                {r.productId}
              </td>
              <td scope="row" className="text-center">
                {r.productName}
              </td>
              <td scope="row" className="text-center">
                {r.pricePerUnit}
              </td>
              <td scope="row" className="text-center">
                {totalAmount?.find(_ => _.productId == r.productId)?.amount}
              </td>
              <td scope="row" className="text-center">
                <button className="btn btn-primary" disabled={cart.map(s => s.productId).includes(r.productId)} onClick={() => {onClick?.(r)}}>+เพิ่มลงตะกร้า</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
