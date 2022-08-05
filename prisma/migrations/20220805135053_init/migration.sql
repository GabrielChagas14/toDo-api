-- CreateTable
CREATE TABLE "ToDo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);
