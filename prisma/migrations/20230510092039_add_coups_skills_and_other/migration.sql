/*
  Warnings:

  - Made the column `value` on table `card` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `card` MODIFY `image` VARCHAR(191) NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `value` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `skill` ADD COLUMN `bleu` INTEGER NULL,
    ADD COLUMN `jaune` INTEGER NULL,
    ADD COLUMN `rouge` INTEGER NULL,
    MODIFY `description` TEXT NULL;
