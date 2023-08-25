-- --------------------------------------------------------
-- 호스트:                          localhost
-- 서버 버전:                        8.0.32 - MySQL Community Server - GPL
-- 서버 OS:                        Linux
-- HeidiSQL 버전:                  12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- realEstateProject 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `realEstateProject` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `realEstateProject`;

-- 테이블 realEstateProject.transactions 구조 내보내기
CREATE TABLE IF NOT EXISTS `transactions` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DealAmount` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `REQGBN` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BuildYear` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DealYear` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RegistrationDate` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Dong` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ApartmentName` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DealMonth` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DealDay` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `AreaforExclusiveUse` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RdealerLawdnm` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Jibun` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RegionalCode` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Floor` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CancelDealDay` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CancelDealType` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 테이블 데이터 realEstateProject.transactions:~8 rows (대략적) 내보내기
INSERT INTO `transactions` (`ID`, `DealAmount`, `REQGBN`, `BuildYear`, `DealYear`, `RegistrationDate`, `Dong`, `ApartmentName`, `DealMonth`, `DealDay`, `AreaforExclusiveUse`, `RdealerLawdnm`, `Jibun`, `RegionalCode`, `Floor`, `CancelDealDay`, `CancelDealType`) VALUES
	(2, '200000', '중계거래', '2004', '2022', NULL, '내수동', '경희궁의아침3단지', '1', '14', '150.48', '서울 종로구', '72', '11110', '1', NULL, NULL),
	(3, '300000', '중계거래', '2011', '2023', NULL, '내수동', '경희궁의아침3단지', '2', '15', '150.48', '서울 종로구', '72', '11110', '2', NULL, NULL),
	(4, '400000', '중계거래', '2011', '2023', NULL, '내수동', '경희궁의아침3단지', '2', '15', '110.48', '고양시 덕양구', '72', '41281', '3', NULL, NULL),
	(5, '500000', '중계거래', '2011', '2023', NULL, '내수동', '경희궁의아침3단지', '2', '15', '320.48', '고양시 덕양구', '72', '41281', '4', NULL, NULL),
	(6, '700000', '중계거래', '2010', '2021', NULL, '내수동', '경희궁의아침4단지', '3', '22', '150.48', '서울 종로구', '72', '11110', '5', NULL, NULL),
	(7, '773000', '중계거래', '2012', '2021', NULL, '내수동', '경희궁의아침4단지', '3', '22', '200.48', '서울 종로구', '72', '11110', '6', NULL, NULL),
	(8, '890000', '중계거래', '2010', '2021', NULL, '내수동', '경희궁의아침4단지', '4', '30', '150.49', '서울 종로구', '72', '11110', '7', NULL, NULL),
	(9, '100000', '중계거래', '2023', '2023', NULL, '내수동', '경희궁의아침4단지', '1', '1', '10.49', '서울 종로구', '73', '11110', '8', NULL, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
