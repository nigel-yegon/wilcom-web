-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "description" SET DEFAULT '';

-- CreateIndex
CREATE INDEX "NewsletterSubscriber_active_subscribedAt_idx" ON "NewsletterSubscriber"("active", "subscribedAt");
