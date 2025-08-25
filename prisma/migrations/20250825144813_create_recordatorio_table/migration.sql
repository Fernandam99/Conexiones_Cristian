-- CreateTable
CREATE TABLE `Notificaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `mensaje` VARCHAR(191) NOT NULL,
    `fecha_envio` DATETIME(3) NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` VARCHAR(191) NOT NULL,
    `id_comunidad` VARCHAR(191) NOT NULL,
    `rol` VARCHAR(191) NOT NULL,
    `fecha_ingreso` DATETIME(3) NOT NULL,
    `activo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Progreso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` VARCHAR(191) NOT NULL,
    `id_tipo_tecnica` VARCHAR(191) NOT NULL,
    `metrica` VARCHAR(191) NOT NULL,
    `valor_actual` VARCHAR(191) NOT NULL,
    `valor_anterior` VARCHAR(191) NOT NULL,
    `tendencia` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `periodo` VARCHAR(191) NOT NULL,
    `contexto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recordatorio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `mensaje` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `activo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
