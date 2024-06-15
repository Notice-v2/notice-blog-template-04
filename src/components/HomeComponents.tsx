'use client'

import { Box } from '@chakra-ui/react'
import { useMemo } from 'react'
import { ArticlesGrid } from './ArticlesGrid'
import { BlogHero } from './BlogHero'

interface Props {
	data: any
}

export const HomeComponents = ({ data }: Props) => {
	const heroElements = useMemo(() => data?.pages.slice(0, 1), [])
	const mainArticles = useMemo(() => data?.pages.slice(1), [])
	return (
		<Box w="100%">
			<Box mx={'auto'} maxW="1180px" w="100%" px="24px">
				<Box mt="10px" as="section">
					<BlogHero page={data?.pages?.[0]} />
				</Box>
				<Box mt={{ base: '20px', lg: data?.pages?.length > 3 ? '20px' : '20px' }} as="section">
					<ArticlesGrid accentColor={data?.project?.accentColor} pages={mainArticles} />
				</Box>
			</Box>
		</Box>
	)
}
