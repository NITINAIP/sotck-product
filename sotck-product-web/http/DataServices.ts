import { ProductT, StockT } from "@/type/Product";

export class DataServices {
  static async getProduct(): Promise<ProductT[]> {
    return (await fetch(`http://localhost:5243/product`)).json();
  }
  static async totalProduct(): Promise<StockT[]> {
    return (await fetch(`http://localhost:5243/totalProduct`)).json();
  }
  static async checkProduct(payload: ProductT) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return (
      await fetch(`http://localhost:5243/checkProduct`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: myHeaders,
      })
    ).json();
  }
  static async checkOut(payload: ProductT[]) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return (
      await fetch(`http://localhost:5243/checkOut`, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: myHeaders,
      })
    ).json();
  }
  static async reset() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return (
      await fetch(`http://localhost:5243/reset`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: myHeaders,
      })
    ).json();
  }
}
