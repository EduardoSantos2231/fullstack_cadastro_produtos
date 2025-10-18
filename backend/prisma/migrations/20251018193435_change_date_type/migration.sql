/*
  Warnings:

  - Made the column `updatedAt` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Product" ALTER COLUMN "updatedAt" SET NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "updatedAt" SET DATA TYPE TEXT;
