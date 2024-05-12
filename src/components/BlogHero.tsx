'use client'

import { Link } from '@chakra-ui/next-js'
import { AspectRatio, Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

interface Props {
	pages: any[]
}

export const BlogHero = ({ pages }: Props) => {
	return (
		<Flex gap={{ base: '6px', md: '0px' }} direction="row" wrap={'wrap'}>
			<StyledBox
				as={motion.div}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.5 } }}
				w="100%"
				position="relative"
				flexBasis={{ base: '100%', md: '66.6%' }}
				px={{ base: '5px', md: '0px' }}
			>
				<Link href={pages[0]?._id} _hover={{ textDecoration: 'none' }}>
					<Box position="absolute" bg={'rgba(0, 0, 0, 0.4)'} transition="all 0.3s ease" inset={0}>
						<Box position="absolute" bottom="20px" left="0" right="0" p="20px">
							<Box color="white" fontSize={{ base: 'xl', md: '3xl' }} fontWeight="bold">
								{pages[0]?.title}
							</Box>
							<Box color="white" fontSize="14px">
								{pages[0]?.description}
							</Box>
						</Box>
					</Box>
					<AspectRatio borderRadius={'4px'} overflow="hidden" w="100%" ratio={4 / 3}>
						<Image
							borderRadius={'4px'}
							src={
								pages[0]?.coverImage === '-' || !pages[0]?.coverImage
									? 'https://assets-notice.b-cdn.net/renderer/image-not-found-in-blog.svg'
									: pages[0]?.coverImage
							}
							w="100%"
							zIndex={-1}
							h="100%"
							objectFit="contain"
						/>
					</AspectRatio>
				</Link>
			</StyledBox>
			<Flex
				gap="6px"
				direction="column"
				w="100%"
				position="relative"
				px="5px"
				flexBasis={{ base: '100%', md: '33.3%' }}
			>
				<StyledBox
					as={motion.div}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
					w="100%"
					position="relative"
					flexBasis={{ base: '100%', md: '66.6%' }}
				>
					<Link href={pages[1]?._id}>
						<Box as={'div'} position="absolute" bg={'rgba(0, 0, 0, 0.4)'} transition="all 0.3s ease" inset={0}></Box>
						<Box position="absolute" bottom="20px" left="0" right="0" p="20px">
							<Heading noOfLines={1} as="h1" color="white" fontSize={{ base: 'xl', md: '3xl' }} fontWeight="bold">
								{pages[1]?.title}
							</Heading>
							<Text noOfLines={2} color="white" fontSize="14px">
								{pages[1]?.description}
							</Text>
						</Box>
						<AspectRatio borderRadius={'4px'} overflow="hidden" w="100%" ratio={4 / 3}>
							<Image
								borderRadius={'4px'}
								src={
									pages[1]?.coverImage === '-' || !pages[1]?.coverImage
										? 'https://assets-notice.b-cdn.net/renderer/image-not-found-in-blog.svg'
										: pages[1]?.coverImage
								}
								w="100%"
								zIndex={-1}
								h="100%"
							/>
						</AspectRatio>
					</Link>
				</StyledBox>
				<StyledBox
					as={motion.div}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
					w="100%"
					position="relative"
					flexBasis={{ base: '100%', md: '66.6%' }}
				>
					<Link href={pages[2]?._id}>
						<Box position="absolute" bg={'rgba(0, 0, 0, 0.4)'} transition="all 0.3s ease" inset={0}>
							<Box position="absolute" bottom="20px" left="0" right="0" p="20px">
								<Box color="white" fontSize={{ base: 'xl', md: '3xl' }} fontWeight="bold">
									{pages[2]?.title}
								</Box>
								<Box noOfLines={2} color="white" fontSize="14px">
									{pages[2]?.description}
								</Box>
							</Box>
						</Box>
						<AspectRatio borderRadius={'4px'} overflow="hidden" h="100%" w="100%" ratio={4 / 3}>
							<Image
								borderRadius={'4px'}
								src={
									pages[2]?.coverImage === '-' || !pages[2]?.coverImage
										? 'https://assets-notice.b-cdn.net/renderer/image-not-found-in-blog.svg'
										: pages[2]?.coverImage
								}
								w="100%"
								zIndex={-1}
								h="100%"
								objectFit="cover"
							/>
						</AspectRatio>
					</Link>
				</StyledBox>
			</Flex>
		</Flex>
	)
}

const StyledBox = styled(Box)`
	&:hover div:first-child {
		background: none;
	}
`
