import { groq } from 'next-sanity';
import { client } from './sanity/lib/client';


// Fetch singleton Contact document
export const getContactSingleton = async () => {
  const result = await client.fetch(
    groq`*[_type == "contact" && _id == "singleton-contact"][0] {
      _id,
      fullName,
      position,
      officeLocation,
      email,
      phoneNumber,
      whatsappNumber,
      clients,
      yearsOfExperience,
      "profileImage": profileImage.asset->url
    }`
  );
  return result;
};


// Fetch all healthProducts
export const getHealthProducts = async () => {
    const products = await client.fetch(
      groq`*[_type == "healthProduct"]{
        _id,
        productId,
        name,
        description,
        category,
        price,
        rating,
        inStock,
        tags,
        "image": image.asset->url
      }`
    );
    return products;
};