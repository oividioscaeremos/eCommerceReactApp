import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 't-shirts',
                    imageUrl: 'https://i.ibb.co/64VKpXW/tshirts.png',
                    id: 1,
                    linkUrl: 'shop/tshirts'
                },
                {
                    title: 'jeans',
                    imageUrl: 'https://i.ibb.co/nnVY7Bd/jeans.png',
                    id: 2,
                    linkUrl: 'shop/jeans'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/rw9mm7q/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'big boys',
                    imageUrl: 'https://i.ibb.co/nL0GTSq/bigboys.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/bigboys'
                },
                {
                    title: 'small boys',
                    imageUrl: 'https://i.ibb.co/WVJvBBv/smallboys.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/smallboys'
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
			{
                this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem
                        key = {id}
                        title = {title}
                        subtitle = "SHOP NOW"
                        imageUrl = {imageUrl}
                        size = {size}
                    />
                ))
            }
		    </div>
        )
    }
}

export default Directory;