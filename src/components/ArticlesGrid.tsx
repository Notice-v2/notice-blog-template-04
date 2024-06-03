'use client'

import { useSelectedTag } from '@/providers/selectedTagProvider'
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { ArticleCard } from './ArticleCard'
import { TagsGroup } from './TagsGroup'

interface Props {
	pages: any[]
	accentColor?: string
}

export const ArticlesGrid = ({ pages, accentColor }: Props) => {
	const { selectedTag } = useSelectedTag()

	const ref = useRef(null)
	const isInView = useInView(ref)

	const tags: any = useMemo(() => pages.reduce((acc, page) => [...acc, ...(page?.tags ?? [])], []), [pages])

	const filteredArticles = useMemo(
		() =>
			selectedTag === 'All'
				? pages
				: pages.filter((page) => {
						return page?.tags?.includes(selectedTag)
				  }),
		[pages, selectedTag]
	)

	const container = {
		hidden: { opacity: isInView ? 1 : 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	return (
		<Box
			as={motion.div}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			boxSizing="border-box"
			mx="auto"
			mb="30px"
			w="100%"
			h="fit-content"
			layout
			layoutRoot
		>
			<Flex
				gap={{ base: '6px', md: '24px' }}
				direction={{ base: 'column', md: 'row' }}
				justify="space-between"
				align="center"
				py="8px"
				my={{ base: '36px', md: '64px' }}
				minH="52px"
			>
				<Heading fontWeight="700" color="black" as="h1" fontSize={{ base: '2rem', md: '5rem' }}>
					All posts
				</Heading>

				<TagsGroup tags={tags} activeTag={selectedTag} accentColor={accentColor} />
			</Flex>
			<SimpleGrid
				ref={ref}
				as={motion.div}
				variants={container}
				initial={isInView ? 'show' : 'hidden'}
				whileInView="show"
				viewport={{ once: true }}
				gridAutoRows="1fr"
				columns={{ base: 1, sm: 2 }}
				gap="64px"
				justifyContent="stretch"
			>
				{filteredArticles.map((page) => (
					<ArticleCard key={page.id} page={page} accentColor={accentColor} />
				))}
			</SimpleGrid>
		</Box>
	)
}
