import { NextResponse } from 'next/server'

const MARKET_STATS = {
  updatedAt: '2025-11-07',
  medianPrice: 685000,
  pricePerSqFt: 284,
  averageDaysOnMarket: 13,
  activeListings: 18,
  listToSaleRatio: 1.018,
  buyerDemandIndex: 46,
  notes: {
    summary:
      'Inventory remains constrained across Silverstone Ranch, with renovated guard-gated properties averaging 13 days on market and closing at 101.8% of list price.',
    outlook:
      'Expect steady appreciation through spring 2026 fueled by relocation buyers and limited resale supply. Stage and price to comps for optimal results.',
  },
}

export async function GET() {
  return NextResponse.json(MARKET_STATS)
}

