import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('Request Info submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service

    return NextResponse.json(
      { success: true, message: 'Request received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing request info:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

