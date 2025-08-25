-- CreateTable
CREATE TABLE `car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `plate` VARCHAR(6) NOT NULL,
    `release_date` DATE NOT NULL,
    `is_available` BOOLEAN NOT NULL DEFAULT true,
    `price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
