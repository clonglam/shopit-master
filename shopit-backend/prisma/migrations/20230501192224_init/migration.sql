-- DropForeignKey
ALTER TABLE "CollectionsOnProducts" DROP CONSTRAINT "CollectionsOnProducts_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionsOnProducts" DROP CONSTRAINT "CollectionsOnProducts_productId_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_productId_fkey";

-- AddForeignKey
ALTER TABLE "CollectionsOnProducts" ADD CONSTRAINT "CollectionsOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionsOnProducts" ADD CONSTRAINT "CollectionsOnProducts_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
