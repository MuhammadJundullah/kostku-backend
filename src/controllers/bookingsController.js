import Booking from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
  const {
    placeId,
    fullName,
    roomNumber,
    address,
    phoneNumber,
    guardianName,
    guardianPhone,
  } = req.body;
  const paymentProof = req.file ? req.file.filename : null;

  if (!paymentProof) {
    return res.status(400).json({ message: "Bukti pembayaran wajib diunggah" });
  }

  try {
    const booking = new Booking({
      placeId,
      fullName,
      roomNumber,
      address,
      phoneNumber,
      guardianName,
      guardianPhone,
      paymentProof,
    });

    const savedBooking = await booking.save();
    return res.status(201).json({ message: "Pemesanan berhasil", data: savedBooking });
  } catch (error) {
    return res.status(500).json({ message: "Gagal membuat pemesanan", error });
  }
};
