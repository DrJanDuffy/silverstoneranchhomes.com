import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, preferredDate, preferredTime, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('Book Tour request:', {
      name,
      email,
      phone,
      preferredDate,
      preferredTime,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service and calendar booking system

    return NextResponse.json(
      { success: true, message: 'Tour booking request received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing tour booking:', error)
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    )
  }
}

