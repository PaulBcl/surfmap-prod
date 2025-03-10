'use server'

import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { revalidatePath } from 'next/cache'

export async function getSurfSpots(search?: string) {
  const spots = await prisma.surfSpot.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { location: { contains: search, mode: 'insensitive' } },
      ],
    },
    include: {
      _count: {
        select: { favoritedBy: true },
      },
    },
  })
  return spots
}

export async function toggleFavorite(spotId: string) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) throw new Error('Unauthorized')

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { favorites: true },
  })

  const isFavorited = user?.favorites.some(spot => spot.id === spotId)

  if (isFavorited) {
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        favorites: {
          disconnect: { id: spotId },
        },
      },
    })
  } else {
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        favorites: {
          connect: { id: spotId },
        },
      },
    })
  }

  revalidatePath('/')
} 