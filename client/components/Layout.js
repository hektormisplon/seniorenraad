import globalStyles from '../styles/global'
import Header from './Header'
import Nav from './Nav'

export default ({children, wrap}) => {
	return (
		<div className="container">
			<Header />
			<div className="page-container">
				<Nav />
				<main className="content">
					{wrap ? (
						<div className="wrapper">
							{children}
						</div>
					) : 
						children
					}
				</main>
			</div>
			<style>{globalStyles}</style>
			<style jsx>{`
				.container {
					min-height: 100vh;
					background: #eee;
				}

				.container,
				.page-container {
					display: flex;
					flex-direction: column;
					flex: 1 1 auto;
          position: relative;
          height: 100%;
          overflow: hidden;
				}

				.content {
					flex: 1 1 auto;
					order: -1;
					display: flex;
					flex-direction: column;
					margin: 1rem;
					padding: 1rem;
					background: #fff;
					border-radius: var(--border-radius);
				}

				@media (min-width: 768px) {
					.page-container {
						flex-direction: row;
					}

					.content {
						order: 1;
					}

        .wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin: 4rem 8vw;
        }
			`}</style>
		</div>
	)
}
