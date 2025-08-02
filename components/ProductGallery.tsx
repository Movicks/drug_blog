"use client";

import { useState } from 'react';
import { ChevronDown, Mail, Package, PhoneCall, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';

type Contact = {
  _id: string;
  fullName: string;
  position: string;
  officeLocation: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
};

type Product = {
  _id: string;
  productId: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  inStock: boolean;
  tags: string[];
  image: string;
};

type Props = {
  contact: Contact;
  products: Product[];
};

const ProductGallery = ({ contact, products }: Props) => {
  const [visibleProducts, setVisibleProducts] = useState(6);

  const allProducts = [...products];
  const productsToShow = allProducts.slice(0, visibleProducts);

  const handleViewMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 6, allProducts.length));
  };

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium Chinese products.
            From cutting-edge electronics to innovative gadgets, we offer competitive
            wholesale prices with reliable quality assurance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap justify-center gap-8">
            {productsToShow.map((product, index) => (
                <div
                key={product._id}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(28.333%-1rem)] animate-slide-up border border-gray-200 rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                <ProductCard {...product} contact={contact} />
                </div>
            ))}
        </div>

        {/* View More Products Button */}
        {visibleProducts < allProducts.length && (
          <div className="text-center mt-12 animate-fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 text-muted-foreground mb-4">
                <Package className="h-5 w-5" />
                <span>
                  Showing {visibleProducts} of {allProducts.length} products
                </span>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>

            <Button
              onClick={handleViewMore}
              className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-[var(--shadow-button)] hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="mr-3 h-5 w-5 group-hover:animate-spin" />
              Load More Products
              <ChevronDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Load 6 more products ({allProducts.length - visibleProducts} remaining)
            </p>
          </div>
        )}

        {/* All Products Loaded Message */}
        {visibleProducts >= allProducts.length && (
          <div className="text-center mt-12 animate-fade-in">
            <div className="inline-flex items-center space-x-2 text-primary mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">
                All {allProducts.length} products displayed!
              </span>
            </div>
            <p className="text-muted-foreground">
              Looking for something specific? Contact us for custom product sourcing.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Looking for specific products or bulk orders?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contact.phoneNumber}`}
              className="btn-call inline-flex items-center justify-center"
            >
              <PhoneCall className='mr-2'/> Call {contact.phoneNumber}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="btn-email inline-flex items-center justify-center"
            >
              <Mail className='mr-2'/> {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
