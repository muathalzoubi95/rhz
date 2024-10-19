
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend'

const resend = new Resend('re_2hX1tfmw_774WvdnvgEzK39RmmeV4DS25')


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['moathaza@gmail.com'],
    subject: 'Hello world',
    react: undefined
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};