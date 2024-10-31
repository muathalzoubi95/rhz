'use client'

import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function Draw() {
	return (
		<div className='pt-14' style={{ position: 'fixed', inset: 0 }}>
			<Tldraw hideUi={true} />
		</div>
	)
}