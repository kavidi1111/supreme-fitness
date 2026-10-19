
const createPaymentIntent = async (req, res) => {
    return res.status(503).json({
        message: "Payment feature is temporarily unavailable."
    });
};

module.exports = { createPaymentIntent };
