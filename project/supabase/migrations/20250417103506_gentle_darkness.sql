/*
  # Initial Schema Setup for Computer Service Website

  1. New Tables
    - users (handled by Supabase Auth)
    - products
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - price (numeric)
      - category (text)
      - stock (integer)
      - condition (text)
      - created_at (timestamp)
    - services
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - base_price (numeric)
      - estimated_time (text)
      - created_at (timestamp)
    - bookings
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - service_id (uuid, references services)
      - device_type (text)
      - issue (text)
      - preferred_date (timestamp)
      - status (text)
      - created_at (timestamp)
    - orders
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - total_amount (numeric)
      - status (text)
      - payment_method (text)
      - shipping_method (text)
      - created_at (timestamp)
    - order_items
      - id (uuid, primary key)
      - order_id (uuid, references orders)
      - product_id (uuid, references products)
      - quantity (integer)
      - price (numeric)
    - reviews
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - product_id (uuid, references products)
      - rating (integer)
      - comment (text)
      - created_at (timestamp)
    - blog_posts
      - id (uuid, primary key)
      - title (text)
      - content (text)
      - author_id (uuid, references auth.users)
      - created_at (timestamp)
    
  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for each table
*/

-- Products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL CHECK (price >= 0),
  category text NOT NULL,
  stock integer NOT NULL DEFAULT 0,
  condition text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Services table
CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  base_price numeric NOT NULL CHECK (base_price >= 0),
  estimated_time text,
  created_at timestamptz DEFAULT now()
);

-- Bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  service_id uuid REFERENCES services NOT NULL,
  device_type text NOT NULL,
  issue text NOT NULL,
  preferred_date timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  total_amount numeric NOT NULL CHECK (total_amount >= 0),
  status text NOT NULL DEFAULT 'pending',
  payment_method text,
  shipping_method text,
  created_at timestamptz DEFAULT now()
);

-- Order items table
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders NOT NULL,
  product_id uuid REFERENCES products NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  price numeric NOT NULL CHECK (price >= 0)
);

-- Reviews table
CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  product_id uuid REFERENCES products NOT NULL,
  rating integer NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment text,
  created_at timestamptz DEFAULT now()
);

-- Blog posts table
CREATE TABLE blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policies
-- Products: Everyone can view, only admins can modify
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO public
  USING (true);

-- Services: Everyone can view, only admins can modify
CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  TO public
  USING (true);

-- Bookings: Users can view and create their own bookings
CREATE POLICY "Users can manage their own bookings"
  ON bookings FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Orders: Users can view and create their own orders
CREATE POLICY "Users can manage their own orders"
  ON orders FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Order items: Users can view their own order items
CREATE POLICY "Users can view their own order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Reviews: Anyone can view, authenticated users can create
CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Blog posts: Anyone can view, only admins can create/modify
CREATE POLICY "Anyone can view blog posts"
  ON blog_posts FOR SELECT
  TO public
  USING (true);