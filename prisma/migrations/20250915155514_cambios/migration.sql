/*
  Warnings:

  - You are about to drop the column `model` on the `car` table. All the data in the column will be lost.
  - Added the required column `plate` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plate" TEXT NOT NULL,
    "release_date" DATETIME NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "price" DECIMAL NOT NULL,
    "comunidad_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    CONSTRAINT "car_comunidad_id_fkey" FOREIGN KEY ("comunidad_id") REFERENCES "comunidad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "car_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_car" ("category_id", "comunidad_id", "id", "is_available", "price", "release_date") SELECT "category_id", "comunidad_id", "id", "is_available", "price", "release_date" FROM "car";
DROP TABLE "car";
ALTER TABLE "new_car" RENAME TO "car";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
