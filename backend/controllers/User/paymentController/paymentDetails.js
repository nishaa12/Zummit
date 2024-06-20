const { Payment , mongoose }= require('../../../models/User/paymentModel')


// Get all Payment records

const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find({});
        const totalCount = payments.length;
        if (totalCount === 0) {
            return res.status(404).json({ message: 'Payment records not found' });
        }
        res.json({
            Count: totalCount,
            Payments: payments
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Get Payment by MongoDB _id

const getPaymentById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid payment ID' });
        }
        const payment = await Payment.findById(id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment record not found' });
        }
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Get Order Details by ID

const getOrderById = async (req, res) => {
    try {
        const payment = await Payment.findOne({ orderId: req.params.orderId });
        if(!payment){
            return res.status(404).json({ message: 'Payment record not found for this Order ID' });
        }
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Payment Records by ClientID

const getbyClientId = async (req, res) => {
    try {
        const payments = await Payment.find({ clientId: req.params.clientId });
        const totalCount = payments.length;
        if (totalCount === 0) {
            return res.status(404).json({ message: 'Payment records not found for this Client ID' });
        }
        res.json({
            Count: totalCount,
            Payments: payments
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Payment Records by TherapistID

const getByTherapistId = async (req, res) => {
    try {
        const payments = await Payment.find({ therapistId: req.params.therapistId });
        const totalCount = payments.length;
        if (totalCount === 0) {
            return res.status(404).json({ message: 'Payment records not found for this Therapist ID' });
        }
        res.json({
            Count: totalCount,
            Payments: payments
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Delete Payment Records by Order ID

// const deleteOrder = async (req, res) => {
//     try {
//         const payment = await Payment.findOneAndDelete({ orderId: req.params.orderId });
//         if (payment) {
//             res.json({ success: true, message: 'Payment record deleted successfully', payment });
//         } else {
//             res.status(404).json({ success: false, message: 'Payment record not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Error deleting payment record', error: error.message });
//     }
// };

module.exports = {
    getAllPayments,
    getPaymentById,
    getOrderById,
    getbyClientId,
    getByTherapistId
}

