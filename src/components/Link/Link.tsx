import React from 'react'
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom'

import './styles.scss'

export interface ILinkProps {
	children: React.ReactNode
	to: LinkProps['to']
}

export const Link: React.FC<ILinkProps> = ({ children, to }) => (
	<ReactRouterLink className="btn" to={to}>
		{children}
	</ReactRouterLink>
)
