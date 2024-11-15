"use client";
import { DataServices } from "@/http/DataServices";
import { ProductT } from "@/type/Product";
import CartCard from "@/ui/cart-card";
import SummaryProduct from "@/ui/summary-product";
import Table from "@/ui/Table";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<ProductT[]>([]);
  const [checkOutStatus, setCheckOutStatus] = useState(false);
  const [isFetch, setIsFetch] = useState(false);
  const onAddCart = (p: ProductT) => {
    setCart((pre) => [...pre, { ...p, productAmount: 1 }]);
  };
  const onAddItemCart = async (p: ProductT, rowInDex: number) => {
    try {
      const iCheck = await DataServices.checkProduct({
        ...p,
        productAmount: (p.productAmount ?? 0) + 1,
      });
      if (iCheck?.messages === undefined) {
        const i = (cart[rowInDex].productAmount ?? 0) + 1;
        cart[rowInDex].productAmount = (cart[rowInDex].productAmount ?? 0) + 1;
        console.log(cart[rowInDex], rowInDex, i, cart);
        setCart((pre) => [...cart]);
      } else {
        alert(iCheck?.messages);
      }
    } catch (error: any) {
      console.log(error);

      alert(error?.messages);
    }
  };
  const onMinusItemCart = async (p: ProductT, rowInDex: number) => {
    let result = [] as ProductT[];
    if (cart[rowInDex].productAmount! - 1 < 0) {
      return;
    } else {
      cart[rowInDex].productAmount = cart[rowInDex].productAmount! - 1;
      result = cart;
    }
    setCart((pre) => [...result]);
  };
  const onCheckOut = async () => {
    const isconfirm = confirm(`คุณแน่ใจใช่หรือไม่`);
    try {
      if (isconfirm) {
        const checkOut = await DataServices.checkOut(cart);
        setCheckOutStatus(true);
        setIsFetch((pre) => !pre);
      }
    } catch (error) {}
  };
  const onCLear = () => {
    setCart([]);
  };
  const onDelete = (p: ProductT, rowInDex: number) => {
    setCart(cart.filter((_) => _.productId !== p.productId));
  };
  const reNew = async () => {
    const reNew = await DataServices.reset();
    window.location.reload();
  };
  return (
    <div className="container my-5">
      <button onClick={reNew} className="btn btn-primary mb-3">
        คืนค่าทั่งหมด
      </button>
      <Table onClick={onAddCart} cart={cart} isFetch={isFetch} />
      {!checkOutStatus && (
        <CartCard
          data={cart}
          onAdd={onAddItemCart}
          onMinus={onMinusItemCart}
          onDelete={onDelete}
          onClear={onCLear}
          onCheckOut={onCheckOut}
        />
      )}
      {checkOutStatus && <SummaryProduct data={cart} />}
    </div>
  );
}
