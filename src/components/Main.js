import React from 'react';
import penPath from'../image/avatar-redact.svg'
import Api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {

	const [userName, setUserName]= React.useState(false);
	const [userDescription , setUserDescription ]= React.useState(false);
	const [userAvatar, setUserAvatar]= React.useState(false);
	const [cards , setCards ]= React.useState([]);

	React.useEffect(() => {
		Api.getInfoUser().then((values)=>{
			console.log(values)
			setUserName(values.name);
			setUserDescription(values.about);
			setUserAvatar(values.avatar)
		})
		.catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой
			console.log(err);
		})
		Api.getInitialCards().then((values)=>{
			setCards(values)
		})
	 }, []);


	 

	return(
		<>
		<main>
		<div className="spinner"><i></i></div>
		<div className="content">
		<section className="profile">
			<div className="profile__info">
				<button type="button"  className="profile__avatar-button" onClick={props.onEditAvatar}>
				<img src={penPath} alt="аватарка" className="profile__avatar_hover"/>
				<img src={userAvatar?userAvatar:''} alt="аватарка" className="profile__avatar"/>
			  </button>
				<div className="profile__redact">
					<h1 className="profile__name">{userName}</h1>
					<p className="profile__about">{userDescription}</p>
					<button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
				</div>

			</div>
			<button type="button" className="profile__add-button" onClick={props.onAddPlace} />
		</section>
		
		<section className="places">			
			{
			cards.map((card , i)=>(
		<div key={i}>
		<Card card={card} onCardClick={props.onCardClick}/>
		</div>))}
		</section>
	</div>
				
	</main>
		</>
	)
}

export default Main