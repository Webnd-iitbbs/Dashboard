/*
  Warnings:

  - The values [IN_PROGRESS] on the enum `TaskStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `mentorId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `isMentor` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mentorId,studentId]` on the table `MentorStudent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[taskId,studentId]` on the table `TaskAssignment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currentKnowledge` to the `MentorRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MentorRequest` table without a default value. This is not possible if the table is not empty.
  - Made the column `reason` on table `MentorRequest` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `creatorId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xpReward` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Made the column `deadline` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MEMBER', 'MENTOR');

-- CreateEnum
CREATE TYPE "ContributionType" AS ENUM ('CODE', 'FILE');

-- CreateEnum
CREATE TYPE "ContributionStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterEnum
BEGIN;
CREATE TYPE "TaskStatus_new" AS ENUM ('PENDING', 'SUBMITTED', 'UNDER_REVIEW', 'COMPLETED', 'REJECTED');
ALTER TABLE "public"."TaskAssignment" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "TaskAssignment" ALTER COLUMN "status" TYPE "TaskStatus_new" USING ("status"::text::"TaskStatus_new");
ALTER TYPE "TaskStatus" RENAME TO "TaskStatus_old";
ALTER TYPE "TaskStatus_new" RENAME TO "TaskStatus";
DROP TYPE "public"."TaskStatus_old";
ALTER TABLE "TaskAssignment" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_mentorId_fkey";

-- AlterTable
ALTER TABLE "MentorRequest" ADD COLUMN     "currentKnowledge" TEXT NOT NULL,
ADD COLUMN     "reviewedAt" TIMESTAMP(3),
ADD COLUMN     "reviewedById" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "reason" SET NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "mentorId",
DROP COLUMN "points",
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "referenceUrl" TEXT,
ADD COLUMN     "techStack" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "xpReward" INTEGER NOT NULL,
ALTER COLUMN "deadline" SET NOT NULL;

-- AlterTable
ALTER TABLE "TaskAssignment" ADD COLUMN     "completedAt" TIMESTAMP(3),
ADD COLUMN     "reviewedAt" TIMESTAMP(3),
ADD COLUMN     "submittedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isMentor",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'MEMBER',
ADD COLUMN     "xp" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "TaskSubmission" (
    "id" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "deployedLink" TEXT,
    "message" TEXT,
    "feedback" TEXT,
    "score" INTEGER,
    "reviewedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TaskSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "ContributionType" NOT NULL,
    "codeContent" TEXT,
    "fileUrl" TEXT,
    "contributorId" TEXT NOT NULL,
    "status" "ContributionStatus" NOT NULL DEFAULT 'PENDING',
    "reviewedById" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TaskSubmission_assignmentId_key" ON "TaskSubmission"("assignmentId");

-- CreateIndex
CREATE UNIQUE INDEX "MentorStudent_mentorId_studentId_key" ON "MentorStudent"("mentorId", "studentId");

-- CreateIndex
CREATE UNIQUE INDEX "TaskAssignment_taskId_studentId_key" ON "TaskAssignment"("taskId", "studentId");

-- AddForeignKey
ALTER TABLE "MentorRequest" ADD CONSTRAINT "MentorRequest_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskSubmission" ADD CONSTRAINT "TaskSubmission_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "TaskAssignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskSubmission" ADD CONSTRAINT "TaskSubmission_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_contributorId_fkey" FOREIGN KEY ("contributorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
