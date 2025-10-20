/*
  Warnings:

  - Added the required column `CEP` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CPF` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id_user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER,
    "password" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Users" ("age", "email", "id_user", "isAdmin", "name", "password") SELECT "age", "email", "id_user", "isAdmin", "name", "password" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
CREATE UNIQUE INDEX "Users_CPF_key" ON "Users"("CPF");
CREATE UNIQUE INDEX "Users_CEP_key" ON "Users"("CEP");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
