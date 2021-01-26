 class Api {
	constructor({baseUrl, headers}) {
	this.baseUrl = baseUrl;
  this._headers = headers;

	}
 //я было переназвал только почему то извенение на гит не залилось
	getInfoUser(){
		return fetch(`${this.baseUrl}/users/me `,{
			headers: this._headers
		})
		.then(res => {
			if (res.ok) {
			  return res.json();
			}	
			// если ошибка, отклоняем промис
			return Promise.reject(`Ошибка: ${res.status}`);
		 })
			
	}

	getInitialCards() {
		return fetch(`${this.baseUrl}/cards  `,{
			headers: this._headers
		})
		.then(res => {
			if (res.ok) {
			  return res.json();
			}
	
			// если ошибка, отклоняем промис
			return Promise.reject(`Ошибка: ${res.status}`);
		 });
 
      }
      
   sendUserInfo(data){
     return fetch(`${this.baseUrl}/users/me `,{
         method: 'PATCH',
         headers: this._headers,
         body:JSON.stringify({
            name: data.name,
            about: data.about
         })
      }
    )
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
   }

  sendPlace(data){
      return fetch(`${this.baseUrl}/cards  `,{
         method: 'POST',
         headers: this._headers,
         body:JSON.stringify({
            name: data.name,
            link: data.link
         })
      }
      ).then(res => {
         if (res.ok) {
           return res.json();
         }
   
         // если ошибка, отклоняем промис
         return Promise.reject(`Ошибка: ${res.status}`);
       });
   }


deleteCard(id){
  return fetch(`${this.baseUrl}/cards/${id} `,{
    method: 'DELETE',
    headers: this._headers   
 }).then(res => {
  if (res.ok) {
    return res.json();
  }

  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
});
}

changeLikeCardStatus(id, isLiked){
  if (isLiked){
    return fetch(`${this.baseUrl}/cards/likes/${id} `,{
      method: 'DELETE',
      headers: this._headers   
   }).then(res => {
    if (res.ok) {
      return res.json();
    }
  
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
  }
  else{
    return fetch(`${this.baseUrl}/cards/likes/${id} `,{
      method: 'PUT',
      headers: this._headers   
   }).then(res => {
    if (res.ok) {
      return res.json();
    }
  
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
  }
}

putLike(id){
  return fetch(`${this.baseUrl}/cards/likes/${id} `,{
    method: 'PUT',
    headers: this._headers   
 }).then(res => {
  if (res.ok) {
    return res.json();
  }

  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
});
}

deleteLike(id){
  return fetch(`${this.baseUrl}/cards/likes/${id} `,{
    method: 'DELETE',
    headers: this._headers   
 }).then(res => {
  if (res.ok) {
    return res.json();
  }

  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
});
}
sendAvatar(data){
  return fetch(`${this.baseUrl}/users/me/avatar `,{
    method: 'PATCH',
    headers: this._headers,
    body:JSON.stringify({
      avatar: data.avatar
    })
 }
)
.then(res => {
 if (res.ok) {
   return res.json();
 }

 // если ошибка, отклоняем промис
 return Promise.reject(`Ошибка: ${res.status}`);
});
}

};


export default Api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-18',
	headers: {
	  authorization: 'a636e40b-41e2-4486-9487-73203d96297e',
	  'Content-Type': 'application/json'
	}
 });