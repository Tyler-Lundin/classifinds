import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const categories = [
    { id: 1, name: "Electronics", parentId: null },
    { id: 2, name: "Laptops", parentId: 1 },
    { id: 3, name: "Phones", parentId: 1 },
    { id: 4, name: "Tablets", parentId: 1 },
    { id: 5, name: "Cameras", parentId: 1 },
    { id: 6, name: "Audio Equipment", parentId: 1 },
    { id: 7, name: "TVs", parentId: 1 },
    { id: 8, name: "Gaming Consoles", parentId: 1 },
    { id: 9, name: "Vehicles", parentId: null },
    { id: 10, name: "Cars", parentId: 9 },
    { id: 11, name: "Motorcycles", parentId: 9 },
    { id: 12, name: "Trucks", parentId: 9 },
    { id: 13, name: "Boats", parentId: 9 },
    { id: 14, name: "RVs & Campers", parentId: 9 },
    { id: 15, name: "Commercial Vehicles", parentId: 9 },
    { id: 16, name: "Aircrafts", parentId: 9 },
    { id: 17, name: "Home & Garden", parentId: null },
    { id: 18, name: "Furniture", parentId: 17 },
    { id: 19, name: "Appliances", parentId: 17 },
    { id: 20, name: "Garden Tools", parentId: 17 },
    { id: 21, name: "Outdoor Furniture", parentId: 17 },
    { id: 22, name: "Home Decor", parentId: 17 },
    { id: 23, name: "Kitchenware", parentId: 17 },
    { id: 24, name: "Clothing & Accessories", parentId: null },
    { id: 25, name: "Men's Clothing", parentId: 24 },
    { id: 26, name: "Women's Clothing", parentId: 24 },
    { id: 27, name: "Children's Clothing", parentId: 24 },
    { id: 28, name: "Shoes", parentId: 24 },
    { id: 29, name: "Jewelry", parentId: 24 },
    { id: 30, name: "Watches", parentId: 24 },
    { id: 31, name: "Bags & Luggage", parentId: 24 },
    { id: 32, name: "Health & Beauty", parentId: null },
    { id: 33, name: "Cosmetics", parentId: 32 },
    { id: 34, name: "Fragrances", parentId: 32 },
    { id: 35, name: "Hair Care", parentId: 32 },
    { id: 36, name: "Skin Care", parentId: 32 },
    { id: 37, name: "Personal Care", parentId: 32 },
    { id: 38, name: "Health Care", parentId: 32 },
    { id: 39, name: "Baby & Toddler", parentId: null },
    { id: 40, name: "Baby Clothing", parentId: 39 },
    { id: 41, name: "Baby Shoes", parentId: 39 },
    { id: 42, name: "Baby Gear", parentId: 39 },
    { id: 43, name: "Baby Toys", parentId: 39 },
    { id: 44, name: "Toddler Clothing", parentId: 39 },
    { id: 45, name: "Toddler Shoes", parentId: 39 },
    { id: 46, name: "Toddler Gear", parentId: 39 },
    { id: 47, name: "Toddler Toys", parentId: 39 },
    { id: 48, name: "Sports & Outdoors", parentId: null },
    { id: 49, name: "Exercise Equipment", parentId: 48 },
    { id: 50, name: "Camping & Hiking", parentId: 48 },
    { id: 51, name: "Golf", parentId: 48 },
    { id: 52, name: "Fishing", parentId: 48 },
    { id: 53, name: "Cycling", parentId: 48 },
    { id: 54, name: "Team Sports", parentId: 48 },
    { id: 55, name: "Water Sports", parentId: 48 },
    { id: 56, name: "Winter Sports", parentId: 48 },
    { id: 57, name: "Hunting & Shooting", parentId: 48 },
    { id: 58, name: "Fitness & Nutrition", parentId: 48 },
    { id: 59, name: "Musical Instruments", parentId: null },
    { id: 60, name: "Guitars", parentId: 59 },
    { id: 61, name: "Basses", parentId: 59 },
    { id: 62, name: "Drums & Percussion", parentId: 59 },
    { id: 63, name: "Keyboards", parentId: 59 },
  ]


  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: category,
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
