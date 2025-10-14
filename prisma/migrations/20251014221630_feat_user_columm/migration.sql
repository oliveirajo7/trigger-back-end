-- CreateTable
CREATE TABLE "Users" (
    "id_user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'common_user',
    "age" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
