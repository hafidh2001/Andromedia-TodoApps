-- CreateTable
CREATE TABLE "lists" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "lists_pkey" PRIMARY KEY ("id")
);
