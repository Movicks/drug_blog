"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Star, Phone, Mail, ArrowLeft, Package, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { useEffect, useState, use } from "react";
import Link from "next/link";

type Contact = {
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
};

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  inStock: boolean;
  tags: string[];
  image: string;
  mainIngredients?: string;
  suitableFor?: string;
  suggestedUsage?: string;
  specification?: string;
  contact: Contact;
};

async function getProduct(id: string): Promise<Product> {
  const query = `*[_type == "healthProduct" && _id == $id][0]{
    _id,
    name,
    description,
    price,
    rating,
    category,
    inStock,
    tags,
    image,
    mainIngredients,
    suitableFor,
    suggestedUsage,
    specification,
    "contact": *[_type == "contact"][0]{
      email,
      phoneNumber,
      whatsappNumber
    }
  }`;

  const product = await client.fetch(query, { id });
  return product;
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(resolvedParams.id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [resolvedParams.id]);

  const handleCall = () => {
    if (product?.contact?.phoneNumber) {
      window.location.href = `tel:${product.contact.phoneNumber}`;
    }
  };

  const handleEmail = () => {
    if (product?.contact?.email) {
      const subject = encodeURIComponent(`Inquiry about ${product.name} (Product ID: ${product._id})`);
      const body = encodeURIComponent(
        `Hi,\n\nI'm interested in the ${product.name}. Could you please provide more details about pricing, minimum order quantity, and shipping options?\n\nProduct ID: ${product._id}\nCategory: ${product.category}\n\nThank you!`
      );
      window.location.href = `mailto:${product.contact.email}?subject=${subject}&body=${body}`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Products</span>
            </Link>
            <h1 className="text-xl font-bold text-foreground">Felo.ng</h1>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden bg-gray-100">
              <Image
                src={urlFor(product.image)}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 lg:h-full object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-600">{product.rating}/5</span>
                </div>
              </div>
              <h1 className="text-xl lg:text-3xl font-bold text-foreground leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Main Ingredients */}
            {product.mainIngredients && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Main Ingredients</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.mainIngredients}</p>
              </div>
            )}

            {/* Suitable For */}
            {product.suitableFor && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Suitable For</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.suitableFor}</p>
              </div>
            )}

            {/* Suggested Usage */}
            {product.suggestedUsage && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Suggested Usage</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.suggestedUsage}</p>
              </div>
            )}

            {/* Specification */}
            {product.specification && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Specification</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.specification}</p>
              </div>
            )}

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-muted-foreground" />
              <span className={`font-medium ${
                product.inStock ? 'text-green-600' : 'text-red-600'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={handleCall} 
                  className="btn-call h-12 text-base font-semibold"
                  disabled={!product.inStock}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
                <Button 
                  onClick={handleEmail} 
                  className="btn-email h-12 text-base font-semibold"
                  disabled={!product.inStock}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Inquiry
                </Button>
              </div>
              
              {!product.inStock && (
                <p className="text-sm text-muted-foreground text-center">
                  Contact us to check availability or find similar products
                </p>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <Shield className="h-8 w-8 text-primary mx-auto" />
                  <p className="text-sm font-medium text-foreground">Quality Assured</p>
                  <p className="text-xs text-muted-foreground">Authentic products</p>
                </div>
                <div className="space-y-2">
                  <Truck className="h-8 w-8 text-primary mx-auto" />
                  <p className="text-sm font-medium text-foreground">Fast Shipping</p>
                  <p className="text-xs text-muted-foreground">Reliable delivery</p>
                </div>
                <div className="space-y-2">
                  <Package className="h-8 w-8 text-primary mx-auto" />
                  <p className="text-sm font-medium text-foreground">Bulk Orders</p>
                  <p className="text-xs text-muted-foreground">Wholesale pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
