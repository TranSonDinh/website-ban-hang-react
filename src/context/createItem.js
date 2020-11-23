import React , {Component} from 'react';

export const Item = React.createContext();

export class CreateItem extends Component{
    constructor(){
        super();
        this.state = {
            item : []
        }
        this.addToCard = this.addToCard.bind(this);
    }
    addToCard(product){
        this.setState({
            item : this.state.item.concat(product)
        });
    }
    render(){
        return(
            <Item.Provider value={{
                item : this.state.item,
                addToCard : this.addToCard
            }}>
                {this.props.children}
            </Item.Provider>
        );
    }
    
}