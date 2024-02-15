import { NextResponse } from 'next/server';

export async function GET() {
  const url = `${process.env.API_URL}users`;
  console.log('url: ' + url);
  const user = await fetch(url);
  return NextResponse.json(user);
}
