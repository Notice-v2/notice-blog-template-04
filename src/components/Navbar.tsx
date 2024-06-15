'use client'

import { Flex, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useMemo } from 'react'

interface Props {
	meta: any
	accentColor?: string
}

export const Navbar = ({ meta, accentColor }: Props) => {
	const title = useMemo(
		() =>
			meta?.find((m: any) => m.tagName === 'meta' && m.attributes?.property === 'og:site_name')?.attributes?.content,
		[meta]
	)
	const icon = useMemo(
		() => meta?.find((m: any) => m.tagName === 'link' && m.attributes?.rel === 'icon')?.attributes?.href,
		[meta]
	)

	return (
		<Flex
			align="center"
			justify={{ base: 'center', md: 'space-between' }}
			w="100%"
			mx={'auto'}
			maxW="1180px"
			gap={'6px'}
			my={{ base: 0, md: '3rem' }}
			bg={'transparent'}
			color="white"
			as={motion.nav}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
		>
			<Flex as={Link} href="/" gap={2} align="center" justify="start">
				<Heading fontWeight="700" color="black" as="h1" fontSize={{ base: '2rem', md: '5rem' }}>
					{title}.
				</Heading>
			</Flex>
		</Flex>
	)
}
