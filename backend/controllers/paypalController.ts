import { Request, Response } from "../types/express";

/**
 * Fetch PayPal client ID to use for payments
 * @route GET /api/config/paypal
 * @access Private
 */
const fetchPaypalClientId = (req: Request, res: Response) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
};
