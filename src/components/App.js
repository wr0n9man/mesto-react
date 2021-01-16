import React from 'react';
import Header from'./Header.js'
import Main from './Main.js'
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";



function App() {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]= React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]= React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]= React.useState(false);
const [isCardPopupOpen, setIsCardPopupOpen]= React.useState(false);
const [selectedCard , setSelectedCard ]= React.useState(0);

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

  return ( 
    <> 
	<Header />
	<Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
	<Footer />	

	
		<PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}  onClose ={closeAllPopups}
		children={
		<>
		<input type="text" name="name" className="popup__input" required   id="name-input"
						placeholder="Имя"/>

					<span className="popup__input-error" id='name-input-error'></span>
					<input type="text" name="about" className="popup__input" required   id="job-input"
						placeholder="Вид деятельности"/>

					<span className="popup__input-error" id="job-input-error"></span>
					<button type="submit" className="popup__save-button popup__save-button_profile">Сохранить</button>
		</>}
		/>
		
		<PopupWithForm name="new-card" title="Новое место"  isOpen={isAddPlacePopupOpen} onClose ={closeAllPopups} 
		children={
		<>
			<input type="text" name="name" className="popup__input" placeholder="Название"  
						 id="place-input"/>

					<span className="popup__input-error" id="place-input-error"></span>
					<input type="url" name="link" className="popup__input" placeholder="Ссылка на картинку" required
						id="link-input"/>
					<span className="popup__input-error" id="link-input-error"></span>

					<button type="submit"
						className="popup__save-button popup__save-button_gallery popup__save-button_inactive">Создать</button>
		</>}
		/>
		

		<PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}  onClose ={closeAllPopups}
		children={<>
		<input type="url" name="avatar" className="popup__input" placeholder="Ссылка на картинку" required
		id="link_avatar-input"/>
	<span className="popup__input-error" id="link_avatar-input-error"></span>

	<button type="submit"
		className="popup__save-button popup__save-button_avatar popup__save-button_inactive">Сохранить</button>
		</>}
		/>
	
		<PopupWithForm name="delete" title="Вы уверены" children={<button type="submit" className="popup__delete-button">Да</button>} onClose ={closeAllPopups}/>

		<ImagePopup card={selectedCard} onClose ={closeAllPopups} isOpen={isCardPopupOpen}/>

	
	


   
    </>
  );
}

export default App;
