import { useEffect, useState, useRef } from 'react'

import { rad } from 'helpers'

import circleImg from '../../images/colorful-circle.png'
import './styles.scss'

enum BREATHING_STATES {
	inhail = 'Inhail',
	exhail = 'Exhail',
}

export const FeaturePreview = () => {
	const [frame, setFrame] = useState(0)

	const startTime = useRef(0)
	const then = useRef(0)
	const fpsInterval = useRef(0)
	const globalFrame = useRef(0)
	const requestAnimationFrameID = useRef(0)

	const scale = useRef(1)
	const state = useRef(BREATHING_STATES.inhail)

	const animate = () => {
		const nextScale = Math.cos(rad(globalFrame.current)) / 3 + 2 / 3

		state.current = nextScale > scale.current ? BREATHING_STATES.inhail : BREATHING_STATES.exhail
		scale.current = nextScale

		setFrame(globalFrame.current)
	}

	const loop = (timestamp: DOMHighResTimeStamp = 0) => {
		requestAnimationFrameID.current = requestAnimationFrame(loop)

		const elapsed = timestamp - then.current

		if (elapsed > fpsInterval.current) {
			then.current = timestamp - (elapsed % fpsInterval.current)
			globalFrame.current = Math.floor((timestamp - startTime.current) / fpsInterval.current)

			animate()
		}
	}

	useEffect(() => {
		fpsInterval.current = 1e3 / 60
		startTime.current = performance.now()
		then.current = startTime.current

		loop()

		return () => cancelAnimationFrame(requestAnimationFrameID.current)
	}, [])

	return (
		<div className="feature-preview">
			<div className="feature-preview__state-container">
				<div
					className="feature-preview__state-background"
					style={{
						width: `${100 * (Math.cos(rad(globalFrame.current)) / 2 + 0.5)}%`,
					}}
				/>
				<div className="feature-preview__state">
					<span>{state.current}</span>
				</div>
			</div>
			<div className="feature-preview__image-container">
				<img
					className="feature-preview__image"
					style={{
						transform: `scale(${scale.current}) rotate(${frame % 360}deg)`,
					}}
					src={circleImg}
					alt="breathing-circle"
				/>
			</div>
		</div>
	)
}
