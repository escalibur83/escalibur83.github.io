import { DownloadApp, Link, Footer, Header, Main } from 'components'

export const Landing = () => (
	<>
		<Header />
		<Main>
			<section className="start-section section">
				<h2>If you want then press to</h2>
				<Link to="/inner">Start!</Link>
			</section>
			<DownloadApp />
		</Main>
		<Footer />
	</>
)
