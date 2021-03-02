import { DownloadApp, FeaturePreview, Footer, Header, Main } from 'components'

export const Inner = () => (
	<>
		<Header />
		<Main>
			<FeaturePreview />
			<DownloadApp />
		</Main>
		<Footer />
	</>
)
