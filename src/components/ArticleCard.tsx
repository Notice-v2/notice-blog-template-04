'use client'

import { DEFAULT_COLOR } from '@/utils/theme'
import { Link } from '@chakra-ui/next-js'
import { AspectRatio, Circle, Flex, Heading, Image, Tag, Text, VStack } from '@chakra-ui/react'
import { useIsHovered } from '@notice-org/renderer-helper'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { Author } from './Author'

interface Props {
	page: any
	accentColor?: string
}

export const ArticleCard = ({ page, accentColor }: Props) => {
	const primaryTag = useMemo(() => {
		const tag = page?.tags[0]
		if (!tag) return undefined
		return tag.charAt(0).toUpperCase() + tag.slice(1)
	}, [page?.tags])

	const ref = useRef<HTMLDivElement>(null)
	const isHovered = useIsHovered([ref]).some(Boolean)

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	}

	return (
		<Link _hover={{ textDecoration: 'none' }} variant="unstyled" href={page?.slug || page?._id}>
			<VStack
				layout
				as={motion.div}
				variants={item}
				ref={ref}
				gap="12px"
				w={'100%'}
				h={'100%'}
				align="start"
				justify="stretch"
			>
				<AspectRatio borderRadius={'4px'} overflow="hidden" maxW="100%" w="100%" ratio={4 / 2}>
					<Image
						borderRadius={'4px'}
						src={
							page?.coverImage === '-' || !page?.coverImage
								? 'https://assets-notice.b-cdn.net/renderer/image-not-found-in-blog.svg'
								: page?.coverImage
						}
						w="100%"
						h="100%"
					/>
				</AspectRatio>

				<Heading
					as="h1"
					fontSize={{ base: 'lg', md: 'xl', lg: '3xl' }}
					lineHeight={1.2}
					fontWeight="400"
					color="blackAlpha.800"
					noOfLines={2}
					textDecoration={isHovered ? 'underline' : 'none'}
					transition={'text-decoration 0.2s ease-in-out'}
				>
					{page.title}
				</Heading>
				<Flex direction="row" gap="6px" w="100%" h="fit-content" align="center" justify="flex-start">
					{primaryTag && (
						<>
							<Tag size="sm" variant="solid" bg={accentColor ?? DEFAULT_COLOR} color="white">
								{primaryTag}
							</Tag>
							<Circle size="4px" bg="gray.200"></Circle>
						</>
					)}
					{page?.createdAt && (
						<Text fontSize="sm" color="gray.500">
							{dayjs(page?.createdAt).format('MMM D, YYYY')}
						</Text>
					)}
					{page?.metadata?.timeToRead && (
						<>
							<Circle size="4px" bg="gray.200"></Circle>
							<Text fontSize="sm" color="gray.500">
								{Math.round(Number(page.metadata.timeToRead) / 60)} min read
							</Text>
						</>
					)}
				</Flex>
				<Text noOfLines={3} color="blackAlpha.600" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
					{page.description}
				</Text>
				<Author size="xs" author={page?.author} />
			</VStack>
		</Link>
	)
}
