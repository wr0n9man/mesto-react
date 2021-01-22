function Card(props) {
	function handleClick() {
		props.onCardClick(props.card);
	 }  
	return(
		<>
<div id="place">
  <div className="place">
	  <button type="button" className="place__open" onClick={handleClick}><img src={props.card.link} alt="" className="place__image"/></button>
	  <button type="button" className="place__delete"></button>
	  <div className="place__main">
		  <h3 className="place__name">{props.card.name}</h3>
		  <div className="place__counter">
			  <button type="button" className="place__counter_button"></button>
			  <span className="place__counter_like">{props.card.likes.length}</span>
		  </div>
		  
	  </div>
  </div>
</div>
		</>
	)
}

export default Card