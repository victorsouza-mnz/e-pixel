import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styels.scss'

const Directory = ({items}) => {

    const [sections] = useState([
        {
          title: 'backgrounds',
          imageUrl: 'https://img.itch.zone/aW1nLzI4NTE5ODcucG5n/original/RLGMLA.png',
          id: 1,
          linkUrl: 'shop/backgrounds'
        },
        {
          title: 'icons',
          imageUrl: 'https://img.itch.zone/aW1hZ2UvNTc1ODkyLzMwMzA4MjgucG5n/347x500/YfICkV.png',
          id: 2,
          linkUrl: 'shop/icons'
        },
        {
          title: 'characters',
          imageUrl: 'https://img.itch.zone/aW1hZ2UvMjU0MTE0LzEyMjA4NDkucG5n/347x500/VUFRph.png',
          id: 3,
          linkUrl: 'shop/characters'
        },
        {
          title: 'foliage',
          imageUrl: 'https://img.itch.zone/aW1hZ2UvMTIxNjU4LzU2MDQxMC5wbmc=/original/hCUwLQ.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/foliage'
        },
        {
          title: 'others',
          imageUrl: 'https://img.itch.zone/aW1hZ2UvODIxMDAzLzUxOTc3NTYucG5n/347x500/kJi0vI.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/others'
        }
      ])    

    return (
        <div className="directory-menu">
            {
                sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                ))
            }
        </div>
    )
}

export default Directory