import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, propertyDetails } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the submission
    console.log('Home Valuation request:', {
      name,
      email,
      phone,
      address,
      propertyDetails,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service
    // await sendEmail({
    //   to: 'DrDuffySells@SilverStoneRanchHomes.com',
    //   subject: `Home Valuation Request from ${name}`,
    //   body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address || 'N/A'}\nDetails: ${propertyDetails || 'N/A'}`,
    // })

    return NextResponse.json(
      { success: true, message: 'Valuation request received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing valuation request:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

