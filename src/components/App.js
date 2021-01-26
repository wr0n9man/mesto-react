import React from 'react';
import Header from'./Header.js'
import Main from './Main.js'
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Api from "../utils/Api.js";
import { currentUserContext } from "../contexts/CurrentUserContext";
import { cardContext } from "../contexts/CardContext";
import  EditProfilePopup  from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]= React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]= React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]= React.useState(false);
const [isCardPopupOpen, setIsCardPopupOpen]= React.useState(false);
const [selectedCard , setSelectedCard ]= React.useState(0);
const [currentUser, setCurrentUser ]= React.useState([]);
const [cards , setCards ]= React.useState([]);

React.useEffect(()=>{
	Api.getInfoUser().then((values)=>{
		console.log(values)
		setCurrentUser(values);
	})
	.catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой
		console.log(err);
	})
	Api.getInitialCards().then((values)=>{
		setCards(values)
	}).catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой
		console.log(err);
	})
}, []);

function handleEditProfileClick() {
	setIsEditProfilePopupOpen(true)
	
}

function handleEditAvatarClick() {
	setIsEditAvatarPopupOpen(true);
}



function handleAddPlaceClick() {
	setIsAddPlacePopupOpen(true);
	
}
function handleCardClick (values) {	
	setSelectedCard(values)
	setIsCardPopupOpen(true)
}
function closeAllPopups() {
	setIsCardPopupOpen(false)	
	setIsAddPlacePopupOpen(false);
	setIsEditAvatarPopupOpen(false);
	setIsEditProfilePopupOpen(false);
}

function handleUpdateUser (data) {
	
	Api.sendUserInfo(data).then((values)=>{
		setCurrentUser(values)
		closeAllPopups();
	})
	.catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой
		console.log(err);
	})
}

function  handleUpdateAvatar(data) {
	Api.sendAvatar(data).then((values)=>{
		setCurrentUser(values)
		closeAllPopups();
	})
	.catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой
		console.log(err);
	})
	
}

function handleAddPlace(data){
	Api.sendPlace(data).then((value)=>{
		setCards([value,...cards]);
		closeAllPopups();
	})
	.catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой
		console.log(err);
	})
}

function handleCardLike(card) {
	
	// Снова проверяем, есть ли уже лайк на этой карточке
	const isLiked = card.likes.some(i => i._id === currentUser._id);	
	// Отправляем запрос в API и получаем обновлённые данные карточки
	Api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
		
		 // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
	  const newCards = cards.map((c) => c._id === card._id ? newCard : c);
	  // Обновляем стейт
	  setCards(newCards);
	});
}

function handleDeleteCard(card) {

	// Снова проверяем, есть ли уже лайк на этой карточке

	// Отправляем запрос в API и получаем обновлённые данные карточки
	Api.deleteCard(card._id).then(() => {
		
		 // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
	  const newCards = cards.filter((c) => c._id !== card._id);
	  // Обновляем стейт
	  setCards(newCards);
	});
}

  return ( 
    <currentUserContext.Provider value={currentUser}> 
	 <cardContext.Provider value={cards}>
	<Header />
	
	<Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleDeleteCard} />
	
	<Footer />	

	
		
		<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
		
		<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/>

		<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
	
		<PopupWithForm name="delete" title="Вы уверены" children={<button type="submit" className="popup__delete-button">Да</button>} onClose ={closeAllPopups}/>

		<ImagePopup card={selectedCard} onClose ={closeAllPopups} isOpen={isCardPopupOpen}/>

	
	


		</cardContext.Provider>
    </currentUserContext.Provider>
  );
}

export default App;
