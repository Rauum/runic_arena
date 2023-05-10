/*
  Warnings:

  - You are about to drop the column `bleu` on the `skill` table. All the data in the column will be lost.
  - You are about to drop the column `jaune` on the `skill` table. All the data in the column will be lost.
  - You are about to drop the column `rouge` on the `skill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `skill` DROP COLUMN `bleu`,
    DROP COLUMN `jaune`,
    DROP COLUMN `rouge`,
    ADD COLUMN `blue` INTEGER NULL DEFAULT 0,
    ADD COLUMN `red` INTEGER NULL DEFAULT 0,
    ADD COLUMN `yellow` INTEGER NULL DEFAULT 0;
