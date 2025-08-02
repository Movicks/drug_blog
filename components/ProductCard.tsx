"use client";

import { Phone, Mail, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { urlFor } from './../sanity/lib/image';

type Contact = {
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
};

interface ProductCardProps {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number | string;
  rating: number;
  category: string;
  contact: Contact;
}

const ProductCard = ({
  _id,
  name,
  description,
  image,
  price,
  rating,
  category,
  contact,
}: ProductCardProps) => {
  const handleCall = () => {
    window.location.href = `tel:${contact.phoneNumber}`;
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Inquiry about ${name} (Product ID: ${_id})`);
    const body = encodeURIComponent(
      `Hi,\n\nI'm interested in the ${name}. Could you please provide more details about pricing, minimum order quantity, and shipping options?\n\nProduct ID: ${_id}\nCategory: ${category}\n\nThank you!`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-3">
        <Image
          src={urlFor(image)}
          alt={name}
          width={100}
          height={100}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Eye className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 fill-current text-secondary" />
            <span className="text-xs text-muted-foreground">{rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-primary">{typeof price === 'number' ? `$${price}` : price}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-3">
          <Button
            onClick={handleCall}
            className="btn-call flex-1 group/btn text-xs py-2"
            aria-label={`Call about ${name}`}
          >
            <Phone className="h-3 w-3 mr-1 group-hover/btn:animate-pulse" />
            Call
          </Button>
          <Button
            onClick={handleEmail}
            className="btn-email flex-1 group/btn text-xs py-2"
            aria-label={`Email about ${name}`}
          >
            <Mail className="h-3 w-3 mr-1 group-hover/btn:animate-pulse" />
            Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
