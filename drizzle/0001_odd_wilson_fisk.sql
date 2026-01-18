CREATE TABLE `coupons` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code` varchar(50) NOT NULL,
	`expiryType` enum('1month','6months','lifetime') NOT NULL,
	`expiryDate` timestamp,
	`isUsed` boolean NOT NULL DEFAULT false,
	`usedBy` varchar(64),
	`usedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `coupons_id` PRIMARY KEY(`id`),
	CONSTRAINT `coupons_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `ebookSessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`sessionId` varchar(100) NOT NULL,
	`couponCode` varchar(50) NOT NULL,
	`email` varchar(320) NOT NULL,
	`expiryDate` timestamp,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `ebookSessions_id` PRIMARY KEY(`id`),
	CONSTRAINT `ebookSessions_sessionId_unique` UNIQUE(`sessionId`)
);
