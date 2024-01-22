-- CreateTable
CREATE TABLE "urls" (
    "id" CHAR(5) NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);
