"use client";
import { ProductT } from "@/type/Product";
type CartCardT = {
  onCheckOut?:() => void
  onAdd?:(p:ProductT,rowIndex:number) => void
  onMinus?:(p:ProductT,rowIndex:number) => void
  onDelete?:(p:ProductT,rowIndex:number) => void
  onClear?:() => void,
  data:ProductT[]
}
export default function CartCard({data,onAdd,onMinus,onClear,onDelete,onCheckOut}:CartCardT) {
  const price = (pprice:string,amount:number) => {
    return amount*Number(pprice)
  }
  return (
    <div
      className="card border-primary fixed right-0 bottom-0"
    >
      <div className="card-body">
        <h4 className="card-title">ตะกร้าสินค้า</h4>
        <div className="table-auto">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">ชื่อสินค้า</th>
            <th scope="col" className="text-center">จำนวน</th>
            <th scope="col" className="text-center">ราคาสินค้า</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((r,i) => (
            <tr className="" key={i}>
             
              <td scope="row" className="text-center">
                {r.productName}
              </td>
              <td scope="row" className="text-center">
                {r?.productAmount ?? 0}
              </td>
              <td scope="row" className="text-center">
                {price(r.pricePerUnit,r?.productAmount ?? 0)}
              </td>
              <td>
                <div className="d-flex justify-center gap-2">
                  <button className="btn btn-success" onClick={() => {onAdd?.(r,i)}}>+</button>
                  <button className="btn btn-danger" onClick={() => {onMinus?.(r,i)}}>-</button>
                  <button className="btn btn-danger" onClick={() => {onDelete?.(r,i)}}>ลบ</button>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}></td>
            <td> รวม: {data.reduce((acc,cur) => acc+price(cur.pricePerUnit,cur.productAmount ??0),0)} </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-success" disabled={data.length == 0} onClick={onCheckOut}>ชำระเงิน(Check Out)</button>
      {" "}
      <button className="btn btn-danger" disabled={data.length == 0} onClick={onClear}>ล้างรายการ</button>
    </div>

      </div>
    </div>
    
   
  );
}
