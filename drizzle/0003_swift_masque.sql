CREATE TABLE `badges` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleId` varchar(64) NOT NULL,
	`badgeName` varchar(255) NOT NULL,
	`badgeIcon` text,
	`description` text,
	`earnedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `badges_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `exercise_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`exerciseId` int NOT NULL,
	`answer` json NOT NULL,
	`isCorrect` boolean NOT NULL,
	`feedback` text,
	`submittedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `exercise_submissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `exercises` (
	`id` int AUTO_INCREMENT NOT NULL,
	`moduleId` varchar(64) NOT NULL,
	`chapterId` varchar(64) NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`type` enum('scenario','case_study','practical_task') NOT NULL,
	`content` json NOT NULL,
	`difficulty` enum('beginner','intermediate','advanced') NOT NULL DEFAULT 'beginner',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `exercises_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `forum_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleId` varchar(64) NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` text NOT NULL,
	`category` enum('doubt','discussion','resource','success_story') NOT NULL DEFAULT 'doubt',
	`isAnswered` boolean NOT NULL DEFAULT false,
	`views` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `forum_posts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `forum_replies` (
	`id` int AUTO_INCREMENT NOT NULL,
	`postId` int NOT NULL,
	`userId` int NOT NULL,
	`content` text NOT NULL,
	`isMarkedAsAnswer` boolean NOT NULL DEFAULT false,
	`likes` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `forum_replies_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `glossary_terms` (
	`id` int AUTO_INCREMENT NOT NULL,
	`term` varchar(255) NOT NULL,
	`definition` text NOT NULL,
	`moduleId` varchar(64),
	`category` varchar(100),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `glossary_terms_id` PRIMARY KEY(`id`),
	CONSTRAINT `glossary_terms_term_unique` UNIQUE(`term`)
);
--> statement-breakpoint
CREATE TABLE `learning_paths` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleId` varchar(64) NOT NULL,
	`isCompleted` boolean NOT NULL DEFAULT false,
	`completedAt` timestamp,
	`progress` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `learning_paths_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `performance_analytics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleId` varchar(64) NOT NULL,
	`timeSpentMinutes` int NOT NULL DEFAULT 0,
	`completionRate` decimal(5,2) NOT NULL DEFAULT '0.00',
	`exerciseScore` decimal(5,2) NOT NULL DEFAULT '0.00',
	`quizScore` decimal(5,2) NOT NULL DEFAULT '0.00',
	`strengthAreas` json,
	`weakAreas` json,
	`lastAccessedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `performance_analytics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `spaced_repetition` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleId` varchar(64) NOT NULL,
	`chapterId` varchar(64) NOT NULL,
	`nextReviewDate` timestamp NOT NULL,
	`repetitionCount` int NOT NULL DEFAULT 0,
	`easeFactor` decimal(3,2) NOT NULL DEFAULT '2.50',
	`interval` int NOT NULL DEFAULT 1,
	`lastReviewedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `spaced_repetition_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_notes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`moduleId` varchar(64) NOT NULL,
	`chapterId` varchar(64) NOT NULL,
	`content` text NOT NULL,
	`color` varchar(7) DEFAULT '#FFF3CD',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `user_notes_id` PRIMARY KEY(`id`)
);
