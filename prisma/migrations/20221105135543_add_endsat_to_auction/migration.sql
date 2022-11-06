-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Auction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL DEFAULT 'System',
    "startsAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endsAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bet" INTEGER NOT NULL DEFAULT 1,
    "isSold" BOOLEAN NOT NULL DEFAULT false,
    "soldTo" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Auction" ("author", "bet", "description", "id", "isSold", "soldTo", "startsAt", "title") SELECT "author", "bet", "description", "id", "isSold", "soldTo", "startsAt", "title" FROM "Auction";
DROP TABLE "Auction";
ALTER TABLE "new_Auction" RENAME TO "Auction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
