'use client'

import { Link } from '@chakra-ui/next-js'
import { AspectRatio, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useIsHovered } from '@notice-org/renderer-helper'
import dayjs from 'dayjs'
import { useMemo, useRef } from 'react'
import { Author } from './Author'

interface Props {
	page: any
}

export const BlogHero = ({ page }: Props) => {
	const formattedDate = useMemo(() => dayjs(page?.createdAt).format('MMM D, YYYY'), [page?.createdAt])

	const ref = useRef<HTMLDivElement>(null)
	const isHovered = useIsHovered([ref]).some(Boolean)

	return (
		<Link href={page?.slug || page?._id} _hover={{ textDecoration: 'none' }}>
			<Flex ref={ref} w="100%" h="100%" gap="8px" marginTop={{ base: '24px', md: '64px' }} direction="column">
				<AspectRatio borderRadius={'4px'} overflow="hidden" w="100%" ratio={16 / 8}>
					<Image
						borderRadius={'4px'}
						src={
							page?.coverImage === '-' || !page?.coverImage
								? 'https://assets-notice.b-cdn.net/renderer/image-not-found-in-blog.svg'
								: page?.coverImage
						}
						w="100%"
						h="100%"
						objectFit="cover"
					/>
				</AspectRatio>
				<Flex
					my={{ base: '24px', md: '52px' }}
					direction={{ base: 'column', md: 'row' }}
					w="100%"
					gap="24px"
					align="start"
					justify="space-between"
				>
					<Flex flexBasis="50%" direction="column" align="flex-start">
						<Heading
							flexBasis="50%"
							lineHeight="auto"
							as="h4"
							fontSize={{ base: '2xl', md: '4xl' }}
							fontWeight="500"
							color="black"
							textDecoration={isHovered ? 'underline' : 'none'}
						>
							{page.title}
						</Heading>
						<Text fontSize="md" color="gray.500">
							{formattedDate}
						</Text>
					</Flex>
					<Flex gap="12px" flexBasis="50%" direction="column" align="flex-start">
						<Text noOfLines={{ base: 3, md: 5 }} fontSize={{ base: 'md', md: 'xl' }} color="gray.500">
							{page.description}
						</Text>
						<Author size="xs" author={page.author} />
					</Flex>
				</Flex>
			</Flex>
		</Link>
	)
}
