-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "orders";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "payments";

-- CreateTable
CREATE TABLE "orders"."orders" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "payment_method" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
