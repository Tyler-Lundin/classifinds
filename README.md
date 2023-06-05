
# Classifinds

Classifinds is an online platform for listing and selling items. Inspired by platforms like Craigslist, Classifinds provides a simple, user-friendly interface for users to post and browse listings.

## Features

- User Registration and Authentication: Users can create an account and log in to access features like posting listings.
- Listings: Users can create listings for items they want to sell, providing details like a title, description, price, and category.
- Categories: Listings are organized into categories and subcategories, making it easy for users to find what they're looking for.
- Search: Users can search for items by keyword, category, or location.
- Images: Users can upload images to their listings to provide a visual representation of the item.
- Location-Based Browsing: Users can search for items within a certain distance of a specified location.

## Technology Stack

- Frontend: NextJS / React / TailwindCSS 
- Backend: NextJS API Routes 
- Database: PostgreSQL
- ORM: Prisma
- Authentication: Next Auth ( or AuthJS ) 
- Image Storage: TBD 

## Getting Started

1. Clone the repository: `git clone https://github.com/tyler-lundin/classifinds.git`
2. Navigate to the project directory: `cd classifinds`
3. Install dependencies: `npm install`
4. Create a .env file in the root of your project and fill in your environment variables: 
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
    ```
5. Run the database migrations: `npx prisma migrate dev`
6. Start the server: `npm run start`

## License

This project is licensed under the [MIT License](LICENSE).

