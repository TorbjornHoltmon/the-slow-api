// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  time: string;
  id: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const wait = req.query.wait ? parseInt(req.query.wait as string) : 1000;
  await voidWait(wait);
  res.status(200).json({ time: new Date().toUTCString(), id: crypto.randomUUID().slice(0, 4) });
}

async function voidWait(timeToDelay: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeToDelay));
}
