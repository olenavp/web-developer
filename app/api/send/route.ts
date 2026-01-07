import { NextResponse } from 'next/server';

export async function POST() {
  
  return NextResponse.json(
    { message: 'Contact form is temporarily disabled' },
    { status: 503 }
  );
}
