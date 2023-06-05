import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {

  const categories = await prisma.category.findMany();

  console.log('CATEGORIES: ', categories);

  if (!categories) {
    console.log('No categories found');
    return NextResponse.json({ error: "No categories found" });
  }

  console.log('CATEGORIES: ', categories);

  return NextResponse.json(categories);
}
