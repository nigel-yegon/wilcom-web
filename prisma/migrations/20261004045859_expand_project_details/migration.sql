-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "challenge" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "context" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "deliveryFocus" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "engagementDetail" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "onlineLabel" TEXT,
ADD COLUMN     "onlineUrl" TEXT;
