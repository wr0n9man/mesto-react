import React from 'react';
import { currentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm.js";

function EditAvararPopup(props) {
	const imageRef = React.useRef();
	const currentUser = React.useContext(currentUserContext);
	function handleSubmit(e) {
		console.log(imageRef.current.value)
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();
	 
		// Передаём значения управляемых компонентов во внешний обработчик
		props.onUpdateAvatar({
		 avatar : imageRef.current.value
		});
	 } 

	 React.useEffect(() => {
		imageRef.current= currentUser.avatar		
	 }, [currentUser]); 


	return(	<PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen}  onClose ={props.onClose} onSubmit={handleSubmit}
	children={<>
	<input type="url" name="avatar" className="popup__input" placeholder="Ссылка на картинку" required ref={imageRef} defaultValue={imageRef.current}
	id="link_avatar-input"/>
		<span className="popup__input-error" id="link_avatar-input-error"></span>

	<button type="submit"
	className="popup__save-button popup__save-button_avatar">Сохранить</button>
	</>}
	/>)
}

export default EditAvararPopup;