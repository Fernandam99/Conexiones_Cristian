/*
  Warnings:

  - You are about to alter the column `id_usuario` on the `notificaciones` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `tipo` on the `notificaciones` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - You are about to alter the column `mensaje` on the `notificaciones` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `categoria` on the `notificaciones` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `id_usuario` on the `participacion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `id_comunidad` on the `participacion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `rol` on the `participacion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `activo` on the `participacion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to alter the column `id_usuario` on the `progreso` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `id_tipo_tecnica` on the `progreso` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `metrica` on the `progreso` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `valor_actual` on the `progreso` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(5)`.
  - You are about to alter the column `valor_anterior` on the `progreso` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(5)`.
  - You are about to alter the column `tendencia` on the `progreso` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `periodo` on the `progreso` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `contexto` on the `progreso` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `id_usuario` on the `recordatorio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `tipo` on the `recordatorio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - You are about to alter the column `mensaje` on the `recordatorio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `activo` on the `recordatorio` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `notificaciones` MODIFY `id_usuario` VARCHAR(10) NOT NULL,
    MODIFY `tipo` VARCHAR(30) NOT NULL,
    MODIFY `mensaje` VARCHAR(50) NOT NULL,
    MODIFY `fecha_envio` DATE NOT NULL,
    MODIFY `categoria` VARCHAR(15) NOT NULL;

-- AlterTable
ALTER TABLE `participacion` MODIFY `id_usuario` VARCHAR(10) NOT NULL,
    MODIFY `id_comunidad` VARCHAR(10) NOT NULL,
    MODIFY `rol` VARCHAR(15) NOT NULL,
    MODIFY `fecha_ingreso` DATE NOT NULL,
    MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `progreso` MODIFY `id_usuario` VARCHAR(10) NOT NULL,
    MODIFY `id_tipo_tecnica` VARCHAR(10) NOT NULL,
    MODIFY `metrica` VARCHAR(15) NOT NULL,
    MODIFY `valor_actual` VARCHAR(5) NOT NULL,
    MODIFY `valor_anterior` VARCHAR(5) NOT NULL,
    MODIFY `tendencia` VARCHAR(50) NOT NULL,
    MODIFY `fecha` DATE NOT NULL,
    MODIFY `periodo` VARCHAR(10) NOT NULL,
    MODIFY `contexto` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `recordatorio` MODIFY `id_usuario` VARCHAR(10) NOT NULL,
    MODIFY `tipo` VARCHAR(30) NOT NULL,
    MODIFY `mensaje` VARCHAR(50) NOT NULL,
    MODIFY `fecha` DATE NOT NULL,
    MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;
