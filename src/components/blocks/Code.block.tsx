'use client'

import { Box, IconButton, useClipboard } from '@chakra-ui/react'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.min.css'
import { useEffect, useRef } from 'react'
import { useIsHovered } from '../../hooks'
import { ClipboardCheck, CopyIcon } from '../../icons'

interface Props {
	block: any
}

export function CodeBlock({ block }: Props) {
	const parentRef = useRef<HTMLDivElement>(null)
	const isHovered = useIsHovered([parentRef]).some(Boolean)

	const { content } = block
	const code = content[0]

	useEffect(() => {
		hljs.highlightAll()
	}, [])

	const { onCopy, hasCopied } = useClipboard(code)

	return (
		<Box ref={parentRef} width="100%" as="pre" my={'8px'} position="relative">
			<Box borderRadius="4px" as="code">
				{code.text}
			</Box>
			{isHovered && (
				<IconButton
					onClick={onCopy}
					size="xs"
					position="absolute"
					top={2}
					right={2}
					aria-label="copy-button"
					bgColor={'gray.700'}
					icon={hasCopied ? <ClipboardCheck size={16} color="white" /> : <CopyIcon size={16} color="white" />}
				/>
			)}
		</Box>
	)
}