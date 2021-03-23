import React from 'react';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";


function ProductCard(props) {
	return (
		<div className="card z-depth-2">
			<div className="row">
				<div className="card-image waves-block waves-light center-align" >
					<img src={props.img} alt="" className="activator center-align" />
				</div>
			</div>
			<div className="card-content grey-text">
				<p className="card-title truncate">{props.title}</p>
			</div>
			{/* <AddShoppingCartIcon style={{display:"flex", justifyContent: "end"}}/> */}
			<br/>
			<div>
				<h6 style={{textAlign:"center"}}>${props.price} </h6>
				<h6 style={{textAlign:"center", color:"red"}}>Discount: {props.discount} </h6>
				</div>
		</div>
	)
}


export default ProductCard