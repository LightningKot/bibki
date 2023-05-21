import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2"> meow</h2>
							<p>
								qwerty
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">llll</h2>
							<p>Nope</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;