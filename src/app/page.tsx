import AppHeader from "./components/AppHeader/AppHeader";
import ProductList from "./components/ProductList/ProductList";
import getListOfProducts from "../utils/getListOfProducts";
import { IProduct, TImage } from "@/types/overrides";
import TitleBanner from "./components/TitleBanner/TitleBanner";
import { ShoppingProvider } from "@/context/ShoppingContext";

export default async function Home() {
  const data = await getListOfProducts();
  const products = data?.products as IProduct[] | undefined;

  return (
    <div>
      <ShoppingProvider>
        <AppHeader data={data?.logo as TImage} />
        <main>
          <TitleBanner title={data?.title || ""} />
          {data?.products ? (
            <ProductList products={products} />
          ) : (
            <>Loading...</>
          )}
        </main>
      </ShoppingProvider>

      <footer>Artur Brzezina</footer>
    </div>
  );
}
