/*
  Warnings:

  - Added the required column `image` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pubDate` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "pubDate" TIMESTAMP(3) NOT NULL;
