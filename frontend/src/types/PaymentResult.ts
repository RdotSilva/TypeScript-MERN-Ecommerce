export interface PaymentResult {
  id: string;
  status: string;
  update_time: string;
  payer: { email_address: string };
}
