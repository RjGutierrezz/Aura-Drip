/*
  Warnings:

  - Added the required column `occasion` to the `ClothingItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `style` to the `ClothingItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warmth` to the `ClothingItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClothingItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "occasion" TEXT NOT NULL,
    "warmth" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_ClothingItem" ("category", "color", "createdAt", "id", "imageUrl", "isFavorite", "name", "style", "occasion", "warmth") SELECT "category", "color", "createdAt", "id", "imageUrl", "isFavorite", "name", 'Casual', 'Weekend', 'Medium' FROM "ClothingItem";
DROP TABLE "ClothingItem";
ALTER TABLE "new_ClothingItem" RENAME TO "ClothingItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
