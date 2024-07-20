import { PrismaClient } from '@prisma/client'


const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db =
	globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

export const getUserFromDb = async (email: string, password: string) => {
	const user = await db.user.findFirst({
		where: {
			email: email,
			password: password
		}
	})
	return user || null
}


