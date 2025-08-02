import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProductGallery from "@/components/ProductGallery";
import { getContactSingleton, getHealthProducts } from '@/sanity.query';

export default async function Home() {
  const contact = await getContactSingleton();
  const products = await getHealthProducts();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductGallery contact={contact} products={products}/>
      <About contact={contact}/>
      <Contact contact={contact} />
      <Footer contact={contact} />
    </div>
  );
}
