import React from 'react';
import { currentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm.js";

function EditAvararPopup(props) {
	const imageRef = React.useRef();
	const currentUser = React.useContext(currentUserContext);
	
	React.useEffect(() => {
		imageRef.current.value=currentUser.avatar
	 }, [currentUser]); 

	function handleSubmit(e) {
				// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();
	 
		// Передаём значения управляемых компонентов во внешний обработчик
		props.onUpdateAvatar({
		 avatar : imageRef.current.value
		});
	 } 


	return(	<PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen}  onClose ={props.onClose} onSubmit={handleSubmit}
	children={<>
	<input type="url" name="avatar" className="popup__input" placeholder="Ссылка на картинку" required ref={imageRef} defaultValue={imageRef}
	id="link_avatar-input"/>
		<span className="popup__input-error" id="link_avatar-input-error"></span>

	<button type="submit"
	className="popup__save-button popup__save-button_avatar">Сохранить</button>
	</>}
	/>)
}

export default EditAvararPopup;