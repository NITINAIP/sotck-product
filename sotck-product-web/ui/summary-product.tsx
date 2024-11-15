"use client";
import { ProductT } from "@/type/Product";
type CartCardT = {
  onCheckOut?:() => void
  onAdd?:(p:ProductT,rowIndex:number) => void
  onMinus?:(p:ProductT,rowIndex:number) => void
  onDelete?:(p:ProductT,rowIndex:number) => void
  onClear?:() => void,
  onBack?:() => void,
  data:ProductT[]
}
export default function SummaryProduct({data,onAdd,onMinus,onClear,onDelete,onCheckOut}:CartCardT) {
  const price = (pprice:string,amount:number) => {
    return amount*Number(pprice)
  }
  return (
    <div
      className="card border-primary fixed right-0 bottom-0 my-3"
    >
      <div className="card-body">
        <h4 className="card-title"> ยอดที่ต้องชำระ</h4>
        <div className="table-auto">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">ชื่อสินค้า</th>
            <th scope="col" className="text-center">จำนวน</th>
            <th scope="col" className="text-center">ราคาสินค้า (รวม)</th>
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
            </tr>
          ))}
          <tr>
            <td colSpan={2}></td>
            <td className="text-center"> ยอดรวม: {data.reduce((acc,cur) => acc+price(cur.pricePerUnit,cur.productAmount ??0),0)} {"บาท"} </td>
          </tr>
        </tbody>
      </table>
   
    </div>

      </div>
    </div>
    
   
  );
}
