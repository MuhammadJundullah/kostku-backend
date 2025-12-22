import express from "express";
import { createBooking } from "../controllers/bookingsController.js";
import { paymentUpload } from "../middlewares/paymentUpload.js";

const router = express.Router();

/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Buat pemesanan kost
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - placeId
 *               - fullName
 *               - roomNumber
 *               - address
 *               - phoneNumber
 *               - guardianName
 *               - guardianPhone
 *               - paymentProof
 *             properties:
 *               placeId:
 *                 type: string
 *               fullName:
 *                 type: string
 *               roomNumber:
 *                 type: string
 *               address:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               guardianName:
 *                 type: string
 *               guardianPhone:
 *                 type: string
 *               paymentProof:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Pemesanan berhasil dibuat
 */
router.post("/bookings", paymentUpload.single("paymentProof"), createBooking);

export default router;
