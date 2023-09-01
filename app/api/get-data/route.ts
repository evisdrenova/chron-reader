import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { url } = body.query;
    const response = await axios.get(url); // Forward the request to the external API

    NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    NextResponse.json(axiosError.message);
  }
}
