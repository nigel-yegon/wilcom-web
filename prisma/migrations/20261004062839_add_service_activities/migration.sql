-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "activities" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "link" TEXT;
