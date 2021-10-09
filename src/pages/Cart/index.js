import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import ItemCart from '../../components/ItemCart';
import { removeItem } from '../../store/ducks/cart';
import { addMessage } from '../../store/ducks/layout';

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	function removeItemCart(item){
		dispatch(removeItem(item._id));
		dispatch(addMessage(`${item.name} removido com sucesso!`))
	}

	return (
		<div className="container-fluid">
			<div className="row">
				{cart.length === 0 ? (
					<p className="col-sm-12 mt-5 text-warning text-center">Sem produtos no Carrinho...</p>
				) : (
					<React.Fragment>
						{cart.map((item) => <ItemCart item={item} removeItemCart={removeItemCart}  key={item._id} />)}
					</React.Fragment>
				)}
			</div>
		</div>
	);
}
