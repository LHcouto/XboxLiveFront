import Menu from "components/Menu";
import { DateTime } from "luxon";
import { ReactComponent  as Search } from "assets/icons/search.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";

const Home = () => {
	const dateDescription = DateTime.now().toLocaleString({
		...DateTime.DATE_SHORT,
		weekday: "long",
	});

	return (
		<S.Home>
			<Menu active={RoutePath.HOMEPAGE} navItems={navigationItems} />
			<S.HomeContent>
				<header>
					<S.HomeHeaderDetails>
						<div>
							<S.HomeHeaderDetailsLogo>Xbox Live</S.HomeHeaderDetailsLogo>
							<S.HomeHeaderDetailsDate>
								{dateDescription}
							</S.HomeHeaderDetailsDate>
						</div>
						<S.HomeHeaderDetailsSearch>
							<Search />
							<input type="text" placeholder="Procure pelo Jogo" />
						</S.HomeHeaderDetailsSearch>
					</S.HomeHeaderDetails>
				</header>
				<div>
					<S.HomeProductTitle>
						<b>Jogos</b>
					</S.HomeProductTitle>
					<S.HomeProductList>
						<p>Lista de jogos aqui</p>
					</S.HomeProductList>
				</div>
			</S.HomeContent>
			<aside>
				<p>Detalhes dos jogos aqui</p>
			</aside>
		</S.Home>
	);
};

export default Home;