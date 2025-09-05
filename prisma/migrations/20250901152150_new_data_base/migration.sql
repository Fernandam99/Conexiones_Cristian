/*
  Warnings:

  - You are about to drop the column `plate` on the `car` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `car` DROP COLUMN `plate`,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `model` VARCHAR(15) NOT NULL,
    MODIFY `release_date` DATETIME NOT NULL;

-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `car` ADD CONSTRAINT `car_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
